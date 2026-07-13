import React, { useState } from 'react';
import { 
  Building2, Users, FileText, CheckCircle2, Clock, AlertTriangle, 
  BarChart3, Award, Search, Filter, ArrowUpRight, Download, 
  UserCheck, ShieldCheck, TrendingUp, MapPin, Calendar, Eye
} from 'lucide-react';
import { Language } from '../../types';

interface CommitteeDashboardProps {
  currentLanguage: Language;
}

interface Committee {
  id: string;
  nameEn: string;
  nameHi: string;
  nameUr: string;
  level: 'National' | 'State' | 'District' | 'Tehsil' | 'City' | 'Village' | 'Ward';
  region: string;
  assignedSurveys: number;
  totalResponses: number;
  pendingVerification: number;
  localParticipation: number;
  performanceScore: number;
  activeVolunteers: number;
  headperson: string;
  president?: string;
  vicePresident?: string;
  secretary?: string;
  jointSecretary?: string;
  treasurer?: string;
  membersCount?: number;
  contactPhone?: string;
  contactEmail?: string;
  photoUrl?: string;
  tenure?: string;
  responsibilities?: string[];
  ranking?: string;
}

const COMMITTEES_DATA: Committee[] = [
  {
    id: 'comm-1',
    nameEn: 'Rajasthan State Matrimonial & Sharia Compliance Board',
    nameHi: 'राजस्थान राज्य वैवाहिक एवं शरिया अनुपालन बोर्ड',
    nameUr: 'راجستھان ریاستی میٹری مونیل اور شریعہ کمپلائنس بورڈ',
    level: 'State',
    region: 'Rajasthan (33 Districts)',
    assignedSurveys: 4,
    totalResponses: 14850,
    pendingVerification: 320,
    localParticipation: 89.4,
    performanceScore: 96,
    activeVolunteers: 412,
    headperson: 'Haji Rafiq Rangrez (Jaipur)',
    president: 'Haji Rafiq Rangrez',
    vicePresident: 'Maulana Saleemuddin Rangrez',
    secretary: 'Advocate Imran Khan Rangrez',
    jointSecretary: 'Zubair Ahmed Rangrez',
    treasurer: 'Haji Abdul Ghaffar',
    membersCount: 45,
    contactPhone: '+91 98290-23451',
    contactEmail: 'rajasthan-committee@rangrezsamaj.in',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    tenure: '2025 - 2028 (3 Years)',
    responsibilities: [
      'Enforce simple dowry-free Nikah rules across all 33 districts of Rajasthan',
      'Monitor matrimonial dispute resolution through local Sharia & legal panels',
      'Oversee educational scholarship distribution to needy students',
      'Conduct monthly compliance audits of district committees'
    ],
    ranking: '#1 National Top Performer State'
  },
  {
    id: 'comm-2',
    nameEn: 'Uttar Pradesh East Youth Empowerment & Education Committee',
    nameHi: 'उत्तर प्रदेश पूर्व युवा सशक्तिकरण एवं शिक्षा समिति',
    nameUr: 'اتر پردیش ایسٹ یوتھ ایمپاورمنٹ اور ایجوکیشن کمیٹی',
    level: 'State',
    region: 'UP East & Lucknow Zone',
    assignedSurveys: 3,
    totalResponses: 11200,
    pendingVerification: 540,
    localParticipation: 82.1,
    performanceScore: 91,
    activeVolunteers: 380,
    headperson: 'Advocate Zainab Bibi (Lucknow)',
    president: 'Advocate Zainab Bibi',
    vicePresident: 'Prof. Tariq Siddiqui',
    secretary: 'Faisal Mehmood Rangrez',
    jointSecretary: 'Sana Fatima',
    treasurer: 'Mohammad Rashid',
    membersCount: 38,
    contactPhone: '+91 94150-89012',
    contactEmail: 'upeast-youth@rangrezsamaj.in',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    tenure: '2025 - 2028 (3 Years)',
    responsibilities: [
      'Manage Super-30 UPSC/PSC civil services coaching centers in Lucknow and Varanasi',
      'Administer 100% girl child scholarship allocations across eastern UP',
      'Organize anti-drug awareness camps in schools and colleges',
      'Coordinate digital census verification for rural artisans'
    ],
    ranking: '#2 State Education Leader'
  },
  {
    id: 'comm-3',
    nameEn: 'Madhya Pradesh Artisan & Textile Economic Cell',
    nameHi: 'मध्य प्रदेश कारीगर एवं वस्त्र आर्थिक प्रकोष्ठ',
    nameUr: 'مدھیہ پردیش کاریگر اور ٹیکسٹائل اقتصادی سیل',
    level: 'State',
    region: 'Indore, Bhopal & Ujjain Divisions',
    assignedSurveys: 2,
    totalResponses: 8450,
    pendingVerification: 110,
    localParticipation: 86.8,
    performanceScore: 94,
    activeVolunteers: 215,
    headperson: 'Faisal Ahmad Rangrez (Indore)',
    president: 'Faisal Ahmad Rangrez',
    vicePresident: 'Haji Nisar Ahmed',
    secretary: 'Shahid Anwar Rangrez',
    jointSecretary: 'Kashif Mehmood',
    treasurer: 'Yusuf Bhai Rangrez',
    membersCount: 30,
    contactPhone: '+91 98260-34567',
    contactEmail: 'mp-textiles@rangrezsamaj.in',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    tenure: '2025 - 2028 (3 Years)',
    responsibilities: [
      'Support traditional textile printing and dyeing artisans with micro-finance',
      'Facilitate government craft subsidy schemes and e-commerce onboarding',
      'Organize annual trade fairs and textile exhibitions in Indore and Bhopal',
      'Manage Zakat fund allocations for widows and elderly artisans'
    ],
    ranking: '#1 Economic & Trade Board'
  },
  {
    id: 'comm-4',
    nameEn: 'Delhi NCR National E-Governance & Legal Rights Taskforce',
    nameHi: 'दिल्ली एनसीआर राष्ट्रीय ई-गवर्नेंस एवं कानूनी अधिकार कार्यबल',
    nameUr: 'دہلی این سی آر قومی ای گورننس اور قانونی حقوق ٹاسک فورس',
    level: 'National',
    region: 'National Capital Region & Haryana',
    assignedSurveys: 5,
    totalResponses: 9800,
    pendingVerification: 85,
    localParticipation: 91.2,
    performanceScore: 98,
    activeVolunteers: 190,
    headperson: 'Dr. Tariq Anwar Rangrez (New Delhi)',
    president: 'Dr. Tariq Anwar Rangrez',
    vicePresident: 'Advocate Qamaruddin Ansari',
    secretary: 'Er. Asif Iqbal Rangrez',
    jointSecretary: 'Dr. Nuzhat Parveen',
    treasurer: 'Haji Shakeel Ahmed',
    membersCount: 50,
    contactPhone: '+91 98110-12345',
    contactEmail: 'national-apex@rangrezsamaj.in',
    photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
    tenure: '2025 - 2029 (4 Years)',
    responsibilities: [
      'Manage global E-Governance 2.0 servers, SHA-256 ballot hashing, and cyber security',
      'Provide free RTI guidance and constitutional legal aid across North India',
      'Draft national Mahapanchayat resolutions and maintain the immortal digital gazette',
      'Coordinate with Central and State Minorities Commissions'
    ],
    ranking: '#1 National Apex Taskforce'
  },
  {
    id: 'comm-5',
    nameEn: 'Gujarat Western Textile & Zakat Distribution Committee',
    nameHi: 'गुजरात पश्चिमी वस्त्र एवं जकात वितरण समिति',
    nameUr: 'گجرات ویسٹرن ٹیکسٹائل اور زکوٰۃ تقسیم کمیٹی',
    level: 'State',
    region: 'Ahmedabad & Surat Clusters',
    assignedSurveys: 3,
    totalResponses: 7900,
    pendingVerification: 195,
    localParticipation: 84.5,
    performanceScore: 89,
    activeVolunteers: 260,
    headperson: 'Maulana Qasim Rangrez (Surat)',
    president: 'Maulana Qasim Rangrez',
    vicePresident: 'Haji Ibrahim Bhai',
    secretary: 'Suhail Rangrez',
    jointSecretary: 'Farhan Ahmed',
    treasurer: 'Mustafa Gulam',
    membersCount: 32,
    contactPhone: '+91 98250-67890',
    contactEmail: 'gujarat-zakat@rangrezsamaj.in',
    photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
    tenure: '2025 - 2028 (3 Years)',
    responsibilities: [
      'Manage centralized Zakat collection and transparent digital distribution',
      'Provide emergency medical relief and dialysis support for poor families',
      'Support Surat and Ahmedabad textile factory workers with legal insurance',
      'Organize mass simple Nikah ceremonies twice annually'
    ],
    ranking: '#3 State Zakat & Welfare Leader'
  },
  {
    id: 'comm-6',
    nameEn: 'Jaipur District Sharia & Matrimonial Dispute Panel',
    nameHi: 'जयपुर जिला शरिया एवं वैवाहिक विवाद सुलाह समिति',
    nameUr: 'جے پور ضلعی شریعہ اور میٹری مونیل صلح کمیٹی',
    level: 'District',
    region: 'Jaipur District (12 Tehsils)',
    assignedSurveys: 3,
    totalResponses: 6200,
    pendingVerification: 45,
    localParticipation: 92.8,
    performanceScore: 97,
    activeVolunteers: 140,
    headperson: 'Mufti Shabbir Ahmed Rangrez',
    president: 'Mufti Shabbir Ahmed Rangrez',
    vicePresident: 'Haji Nizamuddin',
    secretary: 'Advocate Junaid Khan',
    jointSecretary: 'Sadia Sultana',
    treasurer: 'Abdul Jabbar',
    membersCount: 24,
    contactPhone: '+91 141-2345678',
    contactEmail: 'jaipur-district@rangrezsamaj.in',
    photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
    tenure: '2025 - 2027 (2 Years)',
    responsibilities: [
      'Mediate local matrimonial and family property disputes out of court',
      'Verify 100% compliance with dowry austerity rules in Jaipur weddings',
      'Supervise tehsil and ward level volunteer squads',
      'Maintain verified family directory for Jaipur district'
    ],
    ranking: '#1 District Committee Nationwide'
  },
  {
    id: 'comm-7',
    nameEn: 'Sikar Tehsil Education & Youth Mentorship Board',
    nameHi: 'सीकर तहसील शिक्षा एवं युवा मार्गदर्शन बोर्ड',
    nameUr: 'سیکر تحصیل تعلیم اور یوتھ رہنمائی بورڈ',
    level: 'Tehsil',
    region: 'Sikar Tehsil & Shekhawati Region',
    assignedSurveys: 2,
    totalResponses: 3400,
    pendingVerification: 20,
    localParticipation: 94.1,
    performanceScore: 95,
    activeVolunteers: 85,
    headperson: 'Master Gulam Rasool',
    president: 'Master Gulam Rasool',
    vicePresident: 'Haji Sharif Ahmed',
    secretary: 'Nadeem Akhtar Rangrez',
    jointSecretary: 'Amina Khatoon',
    treasurer: 'Mohammad Anees',
    membersCount: 18,
    contactPhone: '+91 1572-251234',
    contactEmail: 'sikar-tehsil@rangrezsamaj.in',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    tenure: '2025 - 2027 (2 Years)',
    responsibilities: [
      'Run evening study centers and libraries for high school students',
      'Provide career counseling and scholarship guidance for girls',
      'Organize monthly anti-drug awareness meetings with parents',
      'Conduct local household census updates in Sikar tehsil'
    ],
    ranking: '#1 Tehsil Committee in Rajasthan'
  },
  {
    id: 'comm-8',
    nameEn: 'Old Delhi City Heritage & Artisan Welfare Taskforce',
    nameHi: 'पुरानी दिल्ली नगर विरासत एवं कारीगर कल्याण कार्यबल',
    nameUr: 'اولڈ دہلی سٹی ورثہ اور کاریگر فلاحی ٹاسک فورس',
    level: 'City',
    region: 'Shahjahanabad & Chandni Chowk Zones',
    assignedSurveys: 2,
    totalResponses: 4100,
    pendingVerification: 30,
    localParticipation: 89.0,
    performanceScore: 92,
    activeVolunteers: 95,
    headperson: 'Haji Sirajuddin Rangrez',
    president: 'Haji Sirajuddin Rangrez',
    vicePresident: 'Mohammad Arshad',
    secretary: 'Advocate Bilal Ahmed',
    jointSecretary: 'Gulshan Ara',
    treasurer: 'Haji Furqan',
    membersCount: 20,
    contactPhone: '+91 11-23267890',
    contactEmail: 'old-delhi-city@rangrezsamaj.in',
    photoUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80',
    tenure: '2025 - 2027 (2 Years)',
    responsibilities: [
      'Preserve centuries-old Rangrez textile heritage in Old Delhi',
      'Assist local dyers and shopkeepers with municipal licensing and legal aid',
      'Manage emergency medical assistance fund for city members',
      'Organize simple community Nikah functions at Jama Masjid community hall'
    ],
    ranking: '#1 City Taskforce in NCR'
  },
  {
    id: 'comm-9',
    nameEn: 'Pali Village Panchayat Governance & Rural Literacy Cell',
    nameHi: 'पाली ग्राम पंचायत शासन एवं ग्रामीण साक्षरता प्रकोष्ठ',
    nameUr: 'پالی گرام پنچایت حکمرانی اور دیہی خواندگی سیل',
    level: 'Village',
    region: 'Pali Rural Clusters (Rajasthan)',
    assignedSurveys: 1,
    totalResponses: 1850,
    pendingVerification: 12,
    localParticipation: 96.5,
    performanceScore: 99,
    activeVolunteers: 60,
    headperson: 'Chaudhary Abdul Hameed',
    president: 'Chaudhary Abdul Hameed',
    vicePresident: 'Subedar Majeed Khan',
    secretary: 'Rafiq Bhai Village Teacher',
    jointSecretary: 'Roshan Bi',
    treasurer: 'Hassan Ali',
    membersCount: 15,
    contactPhone: '+91 2932-284567',
    contactEmail: 'pali-rural@rangrezsamaj.in',
    photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    tenure: '2025 - 2027 (2 Years)',
    responsibilities: [
      'Ensure 100% enrollment of village children in primary and secondary schools',
      'Eliminate death feast (Mrityubhoj) and dowry demands completely in rural clusters',
      'Maintain clean village water sources and community graveyard upkeep',
      'Resolve land and family disputes locally without court intervention'
    ],
    ranking: '#1 Village Panchayat Model Committee'
  },
  {
    id: 'comm-10',
    nameEn: 'Indore Ward 14 Youth & Women Self-Help Committee',
    nameHi: 'इंदौर वार्ड 14 युवा एवं महिला स्वयं सहायता समिति',
    nameUr: 'اندور وارڈ 14 یوتھ اور خواتین سیلف ہیلپ کمیٹی',
    level: 'Ward',
    region: 'Bombay Bazar & Khajrana Ward Zones',
    assignedSurveys: 1,
    totalResponses: 2200,
    pendingVerification: 15,
    localParticipation: 93.4,
    performanceScore: 94,
    activeVolunteers: 75,
    headperson: 'Mrs. Shabana Khan Rangrez',
    president: 'Mrs. Shabana Khan Rangrez',
    vicePresident: 'Farzana Bi',
    secretary: 'Imran Bhai Youth Leader',
    jointSecretary: 'Tahira Khatoon',
    treasurer: 'Rizwan Ahmed',
    membersCount: 16,
    contactPhone: '+91 731-2567890',
    contactEmail: 'indore-ward14@rangrezsamaj.in',
    photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    tenure: '2025 - 2026 (1 Year)',
    responsibilities: [
      'Operate women tailoring and computer embroidery training center in Ward 14',
      'Conduct door-to-door welfare checkups for senior citizens and widows',
      'Assist ward youth with online scholarship applications and job placement',
      'Organize weekly cleanliness and anti-drug campaigns'
    ],
    ranking: '#1 Urban Ward Representative Squad'
  }
];

export default function CommitteeDashboard({ currentLanguage }: CommitteeDashboardProps) {
  const [selectedCommitteeId, setSelectedCommitteeId] = useState<string>(COMMITTEES_DATA[0].id);
  const [filterLevel, setFilterLevel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'overview' | 'surveys' | 'volunteers' | 'reports'>('overview');

  const getText = (en: string, hi: string, ur?: string) => {
    if (currentLanguage === 'ur') return ur || en;
    if (currentLanguage === 'hi') return hi || en;
    return en;
  };

  const filteredCommittees = COMMITTEES_DATA.filter(c => {
    const matchesLevel = filterLevel === 'all' || c.level.toLowerCase() === filterLevel.toLowerCase();
    const matchesSearch = c.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.headperson.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  const selectedCommittee = COMMITTEES_DATA.find(c => c.id === selectedCommitteeId) || COMMITTEES_DATA[0];

  // Aggregated totals across all committees
  const totalAssignedSurveys = COMMITTEES_DATA.reduce((acc, curr) => acc + curr.assignedSurveys, 0);
  const totalResponsesAll = COMMITTEES_DATA.reduce((acc, curr) => acc + curr.totalResponses, 0);
  const totalPendingAll = COMMITTEES_DATA.reduce((acc, curr) => acc + curr.pendingVerification, 0);
  const avgParticipation = (COMMITTEES_DATA.reduce((acc, curr) => acc + curr.localParticipation, 0) / COMMITTEES_DATA.length).toFixed(1);

  return (
    <div className="space-y-8 animate-fadeIn text-[#0B132B]">
      {/* Header & Global Aggregates Banner */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-100 px-3.5 py-1 rounded-full text-xs font-mono font-extrabold uppercase tracking-wider">
              <Building2 className="h-4 w-4 text-emerald-600" />
              <span>{getText('State & District Governance Grid', 'राज्य एवं जिला प्रशासनिक ग्रिड', 'ریاستی اور ضلعی انتظامی گرڈ')}</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-[#0B132B]">
              {getText('Mahapanchayat Committee Dashboard', 'महापंचायत समिति डैशबोर्ड', 'مہاپنچایت کمیٹی ڈیش بورڈ')}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl font-light leading-relaxed">
              {getText(
                'Monitor live survey assignments, respondent verification queues, local member participation, volunteer activity, and official district compliance reports across all 28 State Committees.',
                'सभी 28 राज्य समितियों में लाइव सर्वे असाइनमेंट, मतदाता सत्यापन कतार, स्थानीय भागीदारी, स्वयंसेवक गतिविधि और आधिकारिक जिला अनुपालन रिपोर्ट की निगरानी करें।',
                'تمام 28 ریاستی کمیٹیوں میں لائیو سروے اسائنمنٹس، ووٹر تصدیق کی قطار، مقامی اراکین کی شرکت، رضاکار سرگرمی اور باضابطہ ضلعی تعمیل رپورٹوں کی نگرانی کریں۔'
              )}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-center shrink-0">
            <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100">
              <span className="text-[10px] text-gray-400 block uppercase">Assigned Surveys</span>
              <span className="text-xl font-bold text-emerald-700">{totalAssignedSurveys}</span>
            </div>
            <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100">
              <span className="text-[10px] text-gray-400 block uppercase">Total Responses</span>
              <span className="text-xl font-bold text-emerald-600">{totalResponsesAll.toLocaleString()}</span>
            </div>
            <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100">
              <span className="text-[10px] text-gray-400 block uppercase">Pending Verification</span>
              <span className="text-xl font-bold text-amber-600">{totalPendingAll}</span>
            </div>
            <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100">
              <span className="text-[10px] text-gray-400 block uppercase">Avg Participation</span>
              <span className="text-xl font-bold text-blue-600">{avgParticipation}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Committee Selector & Filter Bar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: List of Committees */}
        <div className="bg-white p-5 rounded-3xl border border-gray-200 shadow-sm space-y-4 h-fit">
          <div className="flex items-center justify-between border-b border-gray-50 pb-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-2">
              <Users className="h-4 w-4 text-emerald-600" />
              <span>{getText('Select Committee', 'समिति चुनें', 'کمیٹی منتخب کریں')}</span>
            </h3>
            <span className="text-xs font-mono bg-emerald-50 px-2.5 py-0.5 rounded-full text-emerald-700 font-bold border border-emerald-100">
              {filteredCommittees.length} Active
            </span>
          </div>

          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="h-4 w-4 text-gray-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={getText('Search state or district...', 'राज्य या जिला खोजें...', 'ریاست یا ضلع تلاش کریں...')}
                className="w-full bg-gray-50 text-xs text-[#0B132B] pl-9 pr-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500"
              />
            </div>
            <select
              value={filterLevel}
              onChange={(e) => setFilterLevel(e.target.value)}
              className="bg-gray-50 text-xs text-gray-600 px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500"
            >
              <option value="all">All Levels</option>
              <option value="national">National</option>
              <option value="state">State</option>
              <option value="district">District</option>
              <option value="tehsil">Tehsil</option>
              <option value="city">City</option>
              <option value="village">Village</option>
              <option value="ward">Ward</option>
            </select>
          </div>

          <div className="space-y-2.5 max-h-[520px] overflow-y-auto pr-1">
            {filteredCommittees.map((comm) => {
              const isSelected = comm.id === selectedCommitteeId;
              return (
                <div
                  key={comm.id}
                  onClick={() => setSelectedCommitteeId(comm.id)}
                  className={`p-4 rounded-2xl cursor-pointer transition duration-200 border text-left ${
                    isSelected
                      ? 'bg-emerald-50 border-emerald-400 shadow-sm scale-[1.02]'
                      : 'bg-white hover:bg-gray-50 border-gray-100 text-gray-600'
                  }`}
                >
                  <div className="flex justify-between items-start gap-2">
                    <span className={`text-xs font-bold leading-tight block ${isSelected ? 'text-emerald-900' : 'text-gray-900'}`}>
                      {getText(comm.nameEn, comm.nameHi, comm.nameUr)}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase font-bold shrink-0 border ${
                      comm.level === 'National' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                      comm.level === 'State' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                      comm.level === 'District' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                      comm.level === 'Tehsil' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                      comm.level === 'City' ? 'bg-cyan-50 text-cyan-700 border-cyan-200' :
                      comm.level === 'Village' ? 'bg-orange-50 text-orange-700 border-orange-200' :
                      'bg-pink-50 text-pink-700 border-pink-200'
                    }`}>
                      {comm.level}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-gray-500 mt-2">
                    <MapPin className="h-3.5 w-3.5 text-emerald-600" />
                    <span>{comm.region}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mt-3 pt-2 border-t border-gray-100 font-mono text-center text-[11px]">
                    <div>
                      <span className="text-gray-400 block text-[9px]">Responses</span>
                      <span className="text-emerald-700 font-bold">{comm.totalResponses.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[9px]">Participation</span>
                      <span className="text-emerald-600 font-bold">{comm.localParticipation}%</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[9px]">Score</span>
                      <span className="text-amber-700 font-bold">{comm.performanceScore}/100</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Selected Committee Detailed Dashboard */}
        <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
          {/* Committee Header Profile */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-50 pb-5">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="bg-emerald-600 text-white font-mono font-black text-xs px-2.5 py-0.5 rounded">
                  {selectedCommittee.level} COMMITTEE
                </span>
                <span className="text-xs font-mono text-emerald-700 flex items-center gap-1">
                  <UserCheck className="h-3.5 w-3.5" />
                  <span>Head: {selectedCommittee.headperson}</span>
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-[#0B132B]">
                {getText(selectedCommittee.nameEn, selectedCommittee.nameHi, selectedCommittee.nameUr)}
              </h3>
              <p className="text-xs text-gray-500 flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-emerald-600" />
                <span>Jurisdiction: {selectedCommittee.region}</span>
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => alert(getText('Downloading Committee Audit Dossier (PDF)...', 'समिति ऑडिट रिपोर्ट डाउनलोड हो रही है...', 'کمیٹی آڈٹ ڈوزیر ڈاؤن لوڈ ہو رہا ہے...'))}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 shadow-sm transition"
              >
                <Download className="h-4 w-4" />
                <span>{getText('Export Committee Report', 'समिति रिपोर्ट डाउनलोड', 'کمیٹی رپورٹ ڈاؤن لوڈ')}</span>
              </button>
            </div>
          </div>

          {/* Sub-Tabs for Committee */}
          <div className="flex flex-wrap gap-2 border-b border-gray-50 pb-3">
            {[
              { id: 'overview', labelEn: '📊 Overview & Performance', labelHi: '📊 अवलोकन व प्रदर्शन', labelUr: '📊 جائزہ اور کارکردگی' },
              { id: 'surveys', labelEn: '📋 Assigned Surveys (4)', labelHi: '📋 आबंटित सर्वे (4)', labelUr: '📋 تفویض کردہ سروے (4)' },
              { id: 'volunteers', labelEn: '🤝 Volunteer Activity (412)', labelHi: '🤝 स्वयंसेवक गतिविधि (412)', labelUr: '🤝 رضاکارانہ سرگرمی (412)' },
              { id: 'reports', labelEn: '📑 Survey Reports & Audits', labelHi: '📑 सर्वे रिपोर्ट व ऑडिट', labelUr: '📑 سروے رپورٹس اور آڈٹس' }
            ].map(t => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  activeTab === t.id ? 'bg-emerald-600 text-white shadow-sm' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {getText(t.labelEn, t.labelHi, t.labelUr)}
              </button>
            ))}
          </div>

          {/* SUB-TAB 1: OVERVIEW & PERFORMANCE */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fadeIn">
              {/* 6 Key Metrics Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono">
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 space-y-1">
                  <span className="text-xs text-gray-400 block">Assigned Surveys</span>
                  <span className="text-2xl font-bold text-emerald-800">{selectedCommittee.assignedSurveys} Active</span>
                  <span className="text-[10px] text-emerald-600 block">100% On Schedule</span>
                </div>

                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 space-y-1">
                  <span className="text-xs text-gray-400 block">Total Responses</span>
                  <span className="text-2xl font-bold text-emerald-700">{selectedCommittee.totalResponses.toLocaleString()}</span>
                  <span className="text-[10px] text-gray-500 block">Verified households</span>
                </div>

                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 space-y-1">
                  <span className="text-xs text-gray-400 block">Pending Verification</span>
                  <span className="text-2xl font-bold text-amber-700">{selectedCommittee.pendingVerification}</span>
                  <span className="text-[10px] text-amber-600 block">Requires Qazi audit</span>
                </div>

                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 space-y-1">
                  <span className="text-xs text-gray-400 block">Local Participation</span>
                  <span className="text-2xl font-bold text-blue-700">{selectedCommittee.localParticipation}%</span>
                  <span className="text-[10px] text-emerald-600 block">↑ +4.2% this quarter</span>
                </div>

                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 space-y-1">
                  <span className="text-xs text-gray-400 block">Performance Index</span>
                  <span className="text-2xl font-bold text-purple-700">{selectedCommittee.performanceScore}/100</span>
                  <span className="text-[10px] text-purple-600 block">Grade A+ State Leader</span>
                </div>

                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 space-y-1">
                  <span className="text-xs text-gray-400 block">Volunteer Squad</span>
                  <span className="text-2xl font-bold text-[#0B132B]">{selectedCommittee.activeVolunteers}</span>
                  <span className="text-[10px] text-gray-500 block">Across tehsils & wards</span>
                </div>
              </div>

              {/* EXECUTIVE BEARERS & CONTACT PROFILE */}
              {selectedCommittee.president && (
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-50 pb-4">
                    <div className="flex items-center gap-4">
                      {selectedCommittee.photoUrl && (
                        <img 
                          src={selectedCommittee.photoUrl} 
                          alt={selectedCommittee.president}
                          className="w-16 h-16 rounded-2xl object-cover border-2 border-emerald-500/20 shadow-sm shrink-0" 
                        />
                      )}
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded border border-emerald-100">
                          {getText('Executive Leadership Board', 'कार्यकारिणी बोर्ड', 'ایگزیکٹو لیڈرشپ بورڈ')}
                        </span>
                        <h4 className="text-lg font-bold text-[#0B132B] mt-1">
                          {selectedCommittee.president} <span className="text-xs font-normal text-gray-500">({getText('President / Head', 'अध्यक्ष / प्रमुख', 'صدر / سربراہ')})</span>
                        </h4>
                        <p className="text-xs text-gray-600 flex items-center gap-2 mt-0.5 font-mono">
                          <span>📅 {getText('Tenure:', 'कार्यकाल:', 'مدت:')} {selectedCommittee.tenure || '2025 - 2028'}</span>
                          <span>•</span>
                          <span className="text-emerald-700 font-bold">{selectedCommittee.ranking || '#1 Ranked Committee'}</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-gray-600">
                      {selectedCommittee.contactPhone && (
                        <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-lg border border-gray-100">
                          📞 {selectedCommittee.contactPhone}
                        </span>
                      )}
                      {selectedCommittee.contactEmail && (
                        <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-lg border border-gray-100 text-[11px] text-emerald-700">
                          ✉️ {selectedCommittee.contactEmail}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* 5 Office Bearers Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                      <span className="text-[10px] text-gray-400 uppercase font-mono block">{getText('Vice President', 'उपाध्यक्ष', 'نائب صدر')}</span>
                      <span className="font-bold text-[#0B132B] mt-0.5 block">{selectedCommittee.vicePresident || 'N/A'}</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                      <span className="text-[10px] text-gray-400 uppercase font-mono block">{getText('General Secretary', 'महासचिव', 'جنرل سکریٹری')}</span>
                      <span className="font-bold text-emerald-700 mt-0.5 block">{selectedCommittee.secretary || 'N/A'}</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                      <span className="text-[10px] text-gray-400 uppercase font-mono block">{getText('Joint Secretary', 'संयुक्त सचिव', 'جوائنٹ سکریٹری')}</span>
                      <span className="font-bold text-[#0B132B] mt-0.5 block">{selectedCommittee.jointSecretary || 'N/A'}</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                      <span className="text-[10px] text-gray-400 uppercase font-mono block">{getText('Treasurer / Khajanchi', 'कोषाध्यक्ष', 'خزانچی')}</span>
                      <span className="font-bold text-amber-700 mt-0.5 block">{selectedCommittee.treasurer || 'N/A'}</span>
                    </div>
                  </div>

                  {/* Assigned Responsibilities List */}
                  {selectedCommittee.responsibilities && selectedCommittee.responsibilities.length > 0 && (
                    <div className="space-y-2 pt-1">
                      <h5 className="text-xs font-bold text-gray-600 uppercase tracking-wider font-mono flex items-center gap-1.5">
                        <span>📜 {getText('Assigned Mandates & Responsibilities', 'निर्धारित अधिकार एवं दायित्व', 'تفویض کردہ ذمہ داریاں')}</span>
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedCommittee.responsibilities.map((resp, rIdx) => (
                          <div key={rIdx} className="bg-gray-50 p-2.5 rounded-xl border border-gray-100 text-xs text-gray-700 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Performance Breakdown Box */}
              <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100 space-y-4 shadow-inner">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-2">
                  <Award className="h-4 w-4 text-emerald-600" />
                  <span>{getText('Committee Performance & Compliance Breakdown', 'समिति प्रदर्शन एवं अनुपालन विश्लेषण', 'کمیٹی کارکردگی اور تعمیل کا تجزیہ')}</span>
                </h4>

                <div className="space-y-3 font-mono text-xs">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-emerald-800">Survey Target Completion Rate</span>
                      <span className="text-emerald-700 font-bold">96.5%</span>
                    </div>
                    <div className="w-full h-2 bg-emerald-200 rounded-full overflow-hidden">
                      <div className="bg-emerald-600 h-full rounded-full" style={{ width: '96.5%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-emerald-800">Aadhaar/Census QR Verification Speed (Avg: 4.2 hrs)</span>
                      <span className="text-amber-700 font-bold">92.0%</span>
                    </div>
                    <div className="w-full h-2 bg-emerald-200 rounded-full overflow-hidden">
                      <div className="bg-amber-600 h-full rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-emerald-800">District Volunteer Mobilization Efficiency</span>
                      <span className="text-blue-700 font-bold">88.4%</span>
                    </div>
                    <div className="w-full h-2 bg-emerald-200 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full rounded-full" style={{ width: '88.4%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SUB-TAB 2: ASSIGNED SURVEYS */}
          {activeTab === 'surveys' && (
            <div className="space-y-4 animate-fadeIn">
              {[
                {
                  title: 'National Dowry Abolition & Wedding Cap (RES-2026-01)',
                  responses: 8420,
                  target: 9000,
                  status: 'Active',
                  deadline: '15 Aug 2026',
                  verifiedPct: 96
                },
                {
                  title: 'UPSC Civil Services & Medical Super-30 Academy Fund',
                  responses: 4110,
                  target: 4500,
                  status: 'Active',
                  deadline: '30 Aug 2026',
                  verifiedPct: 91
                },
                {
                  title: 'District Rangrez Textile & Dyeing Economic Census',
                  responses: 1820,
                  target: 2000,
                  status: 'Under Review',
                  deadline: '10 Sep 2026',
                  verifiedPct: 88
                },
                {
                  title: 'Statewide Matrimonial Reconciliation & Pre-Marital Counseling Need',
                  responses: 500,
                  target: 1000,
                  status: 'Drafting',
                  deadline: '15 Oct 2026',
                  verifiedPct: 100
                }
              ].map((srv, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm hover:border-emerald-200 transition">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-mono px-2 py-0.5 rounded font-bold">
                        {srv.status}
                      </span>
                      <span className="text-xs font-mono text-gray-500">Deadline: {srv.deadline}</span>
                    </div>
                    <h5 className="font-bold text-sm text-[#0B132B]">{srv.title}</h5>
                    <p className="text-xs text-gray-600 font-mono">
                      Responses collected: <span className="text-emerald-700 font-bold">{srv.responses.toLocaleString()}</span> / {srv.target.toLocaleString()} ({Math.round((srv.responses/srv.target)*100)}%)
                    </p>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <div className="text-right font-mono text-xs">
                      <span className="text-gray-400 block text-[10px]">Verification Rate</span>
                      <span className="text-emerald-700 font-bold">{srv.verifiedPct}% Validated</span>
                    </div>
                    <button
                      onClick={() => alert(getText('Opening Survey Data Verification Portal...', 'सर्वे डेटा सत्यापन पोर्टल खुल रहा है...', 'سروے ڈیٹا تصدیق پورٹل کھل رہا ہے...'))}
                      className="bg-white hover:bg-gray-50 text-emerald-700 px-3.5 py-2 rounded-xl text-xs font-bold transition border border-gray-200 shadow-sm"
                    >
                      Audit →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* SUB-TAB 3: VOLUNTEER ACTIVITY */}
          {activeTab === 'volunteers' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-center justify-between shadow-inner">
                <span className="text-xs font-bold text-gray-600">
                  Total Active Volunteer Enumerators: <span className="text-emerald-700 font-extrabold">{selectedCommittee.activeVolunteers} Volunteers</span>
                </span>
                <button
                  onClick={() => alert(getText('Assigning new area wards to volunteer force...', 'स्वयंसेवकों को नए वार्ड आवंटित किए जा रहे हैं...', 'رضاکاروں کو نئے وارڈ تفویض کیے جا رہے ہیں...'))}
                  className="bg-emerald-600 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-sm hover:bg-emerald-700 transition"
                >
                  + Assign Tehsil Wards
                </button>
              </div>

              <div className="space-y-2 font-mono text-xs">
                {[
                  { name: 'Imran Khan Rangrez', area: 'Jaipur North Tehsil (Ward 1-12)', surveysCompleted: 420, photosUploaded: 420, status: 'Active Now 🟢' },
                  { name: 'Saira Bibi Rangrez', area: 'Jodhpur District Centre', surveysCompleted: 385, photosUploaded: 385, status: 'Active Now 🟢' },
                  { name: 'Advocate Bilal Ahmad', area: 'Kota & Bundi Cluster', surveysCompleted: 310, photosUploaded: 308, status: 'Active Now 🟢' },
                  { name: 'Hafiz Rashid Rangrez', area: 'Ajmer & Kishangarh Division', surveysCompleted: 290, photosUploaded: 290, status: 'Offline ⚪' },
                  { name: 'Ruksana Khatoon', area: 'Sikar & Jhunjhunu Wards', surveysCompleted: 245, photosUploaded: 245, status: 'Active Now 🟢' }
                ].map((vol, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-xl border border-gray-100 flex items-center justify-between shadow-sm hover:border-emerald-200 transition">
                    <div>
                      <span className="font-bold text-[#0B132B] block">{vol.name}</span>
                      <span className="text-[11px] text-gray-500">{vol.area}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-emerald-700 font-bold block">{vol.surveysCompleted} Responses</span>
                      <span className="text-[10px] text-gray-400">{vol.photosUploaded} photos verified • {vol.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SUB-TAB 4: SURVEY REPORTS & AUDITS */}
          {activeTab === 'reports' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Q2 2026 District Matrimonial Survey Compliance Report', date: '30 June 2026', size: '2.4 MB PDF', status: 'Certified by Sharia Board' },
                  { title: 'Statewide Volunteer Household Verification Ledger', date: '28 June 2026', size: '4.1 MB CSV/Excel', status: 'Audited & Locked' },
                  { title: 'Youth Educational Scholarship Needs Assessment Brief', date: '15 June 2026', size: '1.8 MB PDF', status: 'Submitted to President' },
                  { title: 'Tehsil-wise Artisan Dyeing Community Economic Summary', date: '01 June 2026', size: '3.2 MB PDF', status: 'Certified' }
                ].map((rep, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-2xl border border-gray-100 flex flex-col justify-between space-y-3 shadow-sm hover:border-emerald-200 transition">
                    <div>
                      <span className="text-[10px] font-mono text-emerald-600 uppercase font-bold block">{rep.status}</span>
                      <h5 className="font-bold text-sm text-[#0B132B] pt-1">{rep.title}</h5>
                      <span className="text-xs text-gray-400 font-mono block pt-1">Generated: {rep.date} • {rep.size}</span>
                    </div>
                    <button
                      onClick={() => alert(getText(`Downloading ${rep.title}...`, `${rep.title} डाउनलोड हो रहा है...`, `${rep.title} ڈاؤن لوڈ ہو رہا ہے...`))}
                      className="w-full bg-gray-50 hover:bg-gray-100 text-emerald-700 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition border border-gray-200 shadow-sm"
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span>Download Report Dossier</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
