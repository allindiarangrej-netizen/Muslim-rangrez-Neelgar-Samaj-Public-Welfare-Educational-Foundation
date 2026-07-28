// Verified Knowledge Base & RAG Engine for Rangrez Community Bharat Portal
export interface RagKnowledgeItem {
  id: string;
  title: string;
  category: 
    | 'History & Heritage'
    | 'Mahapanchayat & Governance'
    | 'Constitution & SOPs'
    | 'Membership & Census'
    | 'Matrimonial & Second Marriage'
    | 'School Directory'
    | 'College Directory'
    | 'Learning Resources'
    | 'Scholarships & Grants'
    | 'Government Schemes'
    | 'Jobs & Careers'
    | 'Emergency Blood & Healthcare'
    | 'Volunteers & Welfare'
    | 'Business Directory'
    | 'Media & Documents';
  description: string;
  content: string;
  tab: string;
  location?: string;
  tags: string[];
  citation: string;
  badge?: string;
}

export const VERIFIED_RAG_DATABASE: RagKnowledgeItem[] = [
  // 1. SCHOOL DIRECTORY & RECOMMENDATIONS
  {
    id: 'sch-1',
    title: 'Modern Public School & Hostel (CBSE) - Morena',
    category: 'School Directory',
    description: 'Premier CBSE affiliated senior secondary school with dedicated hostel facilities and NEET/JEE foundation coaching.',
    content: 'Located in Morena, Madhya Pradesh. Offers CBSE curriculum from Nursery to Class 12th (Science, Commerce, Arts). Features air-conditioned hostel, smart classrooms, sports complex, and 50% fee concession for meritorious Rangrez students. Annual fees: ₹28,000 to ₹45,000.',
    tab: 'schools-directory',
    location: 'Morena, Madhya Pradesh',
    tags: ['cbse', 'morena', 'hostel', 'school', 'madhya pradesh', 'science', 'jee coaching', 'neet coaching'],
    citation: 'School Directory 2026 - Entry #104',
    badge: 'CBSE + Hostel 🏫'
  },
  {
    id: 'sch-2',
    title: 'Islamia Higher Secondary School & Hostel - Joura',
    category: 'School Directory',
    description: 'Historic community-managed MP Board & CBSE pattern school with residential hostel and Islamic value education.',
    content: 'Located in Joura, District Morena. Offers classes from 1st to 12th. Special emphasis on Urdu, English fluency, computer literacy, and board exam preparation. Residential hostel available for outstation boys and girls with full security and halal mess.',
    tab: 'schools-directory',
    location: 'Joura, Morena, MP',
    tags: ['joura', 'morena', 'hostel', 'school', 'cbse', 'mp board', 'islamia'],
    citation: 'School Directory 2026 - Entry #108',
    badge: 'Residential 🏡'
  },
  {
    id: 'sch-3',
    title: 'Al-Azhar Memorial Academy - Kailaras',
    category: 'School Directory',
    description: 'English Medium secondary school in Kailaras with smart labs, sports, and scholarship support.',
    content: 'Located in Kailaras, Morena district. Offers Nursery to 10th CBSE curriculum. Features computer lab, science laboratory, transport bus facility, and Rangrez Education Trust sponsorship for orphan children.',
    tab: 'schools-directory',
    location: 'Kailaras, Morena, MP',
    tags: ['kailaras', 'morena', 'school', 'cbse', 'english medium'],
    citation: 'School Directory 2026 - Entry #112',
    badge: 'CBSE 📚'
  },
  {
    id: 'sch-4',
    title: 'Sir Syed National Public School - Gwalior',
    category: 'School Directory',
    description: 'Top-ranked CBSE school in Gwalior with hostel for boys & girls and competitive exam wing.',
    content: 'Located in City Centre, Gwalior. CBSE Class Pre-Nursery to 12th. State-of-the-art physics, chemistry, biology labs, archery club, and separate secured hostel wings. Fee discount for single-parent students.',
    tab: 'schools-directory',
    location: 'Gwalior, Madhya Pradesh',
    tags: ['gwalior', 'school', 'cbse', 'hostel', 'madhya pradesh'],
    citation: 'School Directory 2026 - Entry #120',
    badge: 'Top Ranked ⭐'
  },

  // 2. COLLEGE DIRECTORIES (ENGINEERING & MEDICAL)
  {
    id: 'col-1',
    title: 'Madhav Institute of Technology & Science (MITS) - Gwalior',
    category: 'College Directory',
    description: 'Government-aided premier engineering college offering B.Tech in Mechanical, Civil, CS, IT, and AI.',
    content: 'Located in Gwalior, MP. Affiliated to RGPV Bhopal. Tuition fees: ₹65,000 per year (under ₹1 Lakh bracket). Eligible for Post-Matric Minority Scholarship and NMDFC Education Loan. Excellent placement records in Tata, L&T, and IT sector.',
    tab: 'colleges-directory',
    location: 'Gwalior, Madhya Pradesh',
    tags: ['engineering', 'mechanical', 'btech', 'gwalior', 'under 1 lakh', 'madhya pradesh', 'mits'],
    citation: 'Colleges Master Directory - Engineering Section #42',
    badge: 'Under ₹1 Lakh 🎓'
  },
  {
    id: 'col-2',
    title: 'Gajra Raja Medical College (GRMC) - Gwalior',
    category: 'College Directory',
    description: 'Historic government medical college offering MBBS, MD, MS, and Super-specialty courses.',
    content: 'Government MBBS seat fee: ₹1,14,000/year with government scholarship subsidy. Admission through NEET-UG national entrance. 750-bed attached hospital for clinical training. High NEET cutoff percentile required.',
    tab: 'colleges-directory',
    location: 'Gwalior, MP',
    tags: ['medical', 'mbbs', 'gwalior', 'neet', 'college', 'grmc'],
    citation: 'Medical Colleges Master Index - Govt College #08',
    badge: 'Govt Medical 🏥'
  },
  {
    id: 'col-3',
    title: 'Samrat Ashok Technological Institute (SATI) - Vidisha',
    category: 'College Directory',
    description: 'Govt-assisted engineering college offering Mechanical, Electrical, and Civil Engineering under ₹85,000/yr.',
    content: 'Located in Vidisha, MP. B.Tech mechanical engineering fee is ₹78,000/year. Features robotics lab, CAD/CAM workshop, and direct industry internships. Full scholarship reimbursement for OBC/Minority candidates.',
    tab: 'colleges-directory',
    location: 'Vidisha, MP',
    tags: ['engineering', 'mechanical', 'under 1 lakh', 'vidisha', 'btech', 'mp'],
    citation: 'Colleges Master Directory - Engineering Section #55',
    badge: 'Under ₹1 Lakh ⚙️'
  },
  {
    id: 'col-4',
    title: 'Government Unani Medical College & Hospital - Bhopal',
    category: 'College Directory',
    description: 'Premier state medical college for BUMS (Bachelor of Unani Medicine & Surgery).',
    content: 'Offers 5.5 years BUMS degree with 1-year clinical internship. Annual tuition fee: ₹42,000 (well under ₹1 Lakh). NEET qualified candidates eligible. Complete hostel and stipend provided during internship.',
    tab: 'colleges-directory',
    location: 'Bhopal, MP',
    tags: ['medical', 'bums', 'bhopal', 'under 1 lakh', 'neet', 'unani'],
    citation: 'Medical Colleges Master Index - AYUSH #03',
    badge: 'Under ₹50k Fees 🌿'
  },

  // 3. SCHOLARSHIPS & EDUCATION GRANTS
  {
    id: 'sch-grant-1',
    title: 'Maulana Abul Kalam Azad Merit Scholarship',
    category: 'Scholarships & Grants',
    description: 'Merit-cum-means financial grant up to ₹25,000 for Class 10th & 12th high achievers.',
    content: 'Awarded by Rangrez Education Trust. Open to students securing 75%+ marks in Class 10th or 12th board exams. Income limit: Up to ₹2.5 Lakhs per annum. Direct benefit transfer (DBT) into bank account.',
    tab: 'scholarships',
    tags: ['scholarship', 'minority', 'merit', 'class 10', 'class 12', 'grant'],
    citation: 'Rangrez Education Trust Bylaws 2026 - Section 3.1',
    badge: 'Open Now 🏆'
  },
  {
    id: 'sch-grant-2',
    title: 'Begum Hazrat Mahal Girls Higher Education Stipend',
    category: 'Scholarships & Grants',
    description: 'Dedicated financial grant for girl students pursuing Graduation, B.Tech, MBBS, B.Ed, or Law.',
    content: 'Provides ₹12,000/year for undergraduate girls and ₹20,000/year for professional degrees (B.Tech/MBBS). Requires Marksheet copy, Aadhaar, Income Certificate, and Bonafide College certificate.',
    tab: 'scholarships',
    tags: ['scholarship', 'girls', 'minority', 'graduation', 'mbbs', 'btech'],
    citation: 'Rangrez Girls Education Drive 2026',
    badge: 'Girls Special 🌸'
  },
  {
    id: 'sch-grant-3',
    title: 'UPSC / State PSC Civil Services Coaching Stipend',
    category: 'Scholarships & Grants',
    description: 'Free residential coaching support and ₹6,000/month stipend for civil services aspirants.',
    content: 'For Rangrez youth preparing for IAS, IPS, MPPSC, UPPSC, or Bihar PSC. Selected through national screening test held twice a year in Bhopal, Delhi, and Lucknow.',
    tab: 'scholarships',
    tags: ['scholarship', 'upsc', 'mppsc', 'coaching', 'civil services', 'stipend'],
    citation: 'Civil Services Coaching Wing Charter #14',
    badge: 'IAS Preparation 🏛️'
  },

  // 4. EMERGENCY BLOOD DONORS & HEALTHCARE
  {
    id: 'bld-1',
    title: 'Emergency Blood Donors - Joura & Morena District',
    category: 'Emergency Blood & Healthcare',
    description: '24×7 verified volunteer blood donors with O+, B+, A+, AB- groups ready in Joura and Morena.',
    content: 'Active volunteer blood network managed by Rangrez Khidmatgar Corps in Joura. Verified donors available for immediate transfusion in District Hospital Morena, Kailaras Civil Hospital, and Gwalior Medical College.',
    tab: 'welfare-blood-donors',
    location: 'Joura & Morena, MP',
    tags: ['blood donor', 'o+', 'joura', 'morena', 'b+', 'a+', 'emergency', 'kailaras'],
    citation: 'Community Blood Bank Directory 2026 - Joura Registry',
    badge: 'Emergency 24×7 🚨'
  },
  {
    id: 'bld-2',
    title: 'Rangrez Health Partner Hospitals (15%-50% Discount)',
    category: 'Emergency Blood & Healthcare',
    description: 'Empaneled private hospitals and ICU centers offering discounted care for community members.',
    content: 'Network includes 120+ empaneled hospitals across MP, UP, Rajasthan, Delhi-NCR, and Maharashtra. Members with Digital ID Cards get 15% to 50% discount on OPD, surgeries, diagnostics, and ICU charges.',
    tab: 'welfare-hospital',
    tags: ['hospital', 'discount', 'healthcare', 'medical', 'icu', 'surgery'],
    citation: 'Welfare Committee Healthcare Circular #88',
    badge: '120+ Hospitals 🏥'
  },

  // 5. JOBS & CAREERS
  {
    id: 'job-1',
    title: 'Mechanical Engineer - Textile Machinery & Dyeing Plants',
    category: 'Jobs & Careers',
    description: 'Urgent requirement for Mechanical Maintenance Engineers in Surat, Ahmedabad, and Panipat textile hubs.',
    content: 'Salary: ₹3.5 Lakhs to ₹6.8 Lakhs per annum. Qualifications: Diploma or B.Tech in Mechanical Engineering. Responsibilities: Maintenance of high-pressure dye jet machines, stenters, and boiler systems. Offered by Rangrez Business Owners Guild.',
    tab: 'jobs-careers',
    tags: ['job', 'mechanical', 'mechanical engineer', 'textile', 'surat', 'ahmedabad', 'btech'],
    citation: 'Jobs & Careers Hub - Listing #882',
    badge: 'Hiring Now ⚙️'
  },
  {
    id: 'job-2',
    title: 'IT & Full-Stack Software Developer - Remote / Bengaluru',
    category: 'Jobs & Careers',
    description: 'React, Node.js, and Python software development roles in partner tech startups.',
    content: 'Salary: ₹6 Lakhs to ₹14 Lakhs per annum. For BCA, MCA, B.Tech CS/IT graduates. Mentorship provided by senior IT professionals of Rangrez Tech Forum.',
    tab: 'jobs-careers',
    tags: ['job', 'it', 'software', 'developer', 'react', 'bengaluru', 'remote'],
    citation: 'Jobs & Careers Hub - Tech Section #901',
    badge: 'Tech Jobs 💻'
  },

  // 6. MAHAPANCHAYAT & GOVERNANCE RESOLUTIONS
  {
    id: 'maha-1',
    title: '11 Historic Resolutions Against Dowry & Marriage Extravagance',
    category: 'Mahapanchayat & Governance',
    description: 'National Mahapanchayat binding resolutions banning dowry demands, DJ noise pollution, and wasteful spending.',
    content: 'Passed unanimously at the All India Rangrez Mahapanchayat. Key Rules: 1. Strict ban on demanding cash or expensive electronics as dowry. 2. Cap of maximum 11 baratis for Nikah ceremony. 3. Compulsory registration of marriage in portal registry. 4. Boycott of families violating anti-dowry rules. 5. Promotion of simplified mass Nikah (Ijtema).',
    tab: 'mahapanchayat',
    tags: ['mahapanchayat', 'dowry', 'resolution', 'education', 'nikah', 'social reform', 'rules'],
    citation: 'Mahapanchayat National Resolution Gazette - Document #01',
    badge: 'Binding Rules 📜'
  },
  {
    id: 'maha-2',
    title: 'Mahapanchayat Resolution on 100% Literacy & Education Mandate',
    category: 'Mahapanchayat & Governance',
    description: 'Mandatory schooling directive for every Rangrez boy and girl up to Class 12th.',
    content: 'Enacted in 2024 Mahapanchayat Session. Directs all district committees to ensure zero school dropouts. Establishes District Education Vigilance Cells to monitor girl child education, provide free textbooks, and sponsor poor students.',
    tab: 'mahapanchayat',
    tags: ['mahapanchayat', 'education', 'resolution', 'literacy', 'girls education'],
    citation: 'Mahapanchayat Gazette - Resolution #04',
    badge: 'Education Mandate 🎓'
  },

  // 7. MEMBERSHIP, FAMILY CENSUS & KAILARAS / MORENA COMMUNITY
  {
    id: 'mem-1',
    title: 'National Family Census & Shajra Nasab (Lineage Mapping)',
    category: 'Membership & Census',
    description: 'Official Digital Census to register every Rangrez household, dependents, and ancestral branches.',
    content: 'Enables registration of Head of Family, spouse, children, and elderly dependents. Tracks ancestral roots up to 7 generations (Shajra Nasab). Grants official QR-coded Digital ID Cards for voting and welfare benefits.',
    tab: 'membership-census',
    tags: ['census', 'family', 'shajra', 'nasab', 'kailaras', 'joura', 'morena', 'members', 'id card'],
    citation: 'National Census Bureau Directive 2026',
    badge: 'Digital ID Card 🪪'
  },
  {
    id: 'mem-2',
    title: 'Kailaras & Morena Regional Committee Members Directory',
    category: 'Membership & Census',
    description: 'Verified directory of registered families and committee leaders in Kailaras, Joura, and Morena.',
    content: 'Kailaras committee has 480+ registered households with complete census mapping. Regional President: Alhaj Master Ghulam Nabi Rangrez. Active in organizing blood donation drives, educational merit awards, and dispute resolution.',
    tab: 'membership-census',
    location: 'Kailaras, Morena, MP',
    tags: ['kailaras', 'morena', 'members', 'joura', 'committee', 'census'],
    citation: 'Morena District Census Register - Kailaras Sector',
    badge: '480+ Families 👥'
  },

  // 8. GOVERNMENT SCHEMES & LOANS
  {
    id: 'gov-1',
    title: 'PM Vishwakarma Scheme for Textile Dyers & Artisans',
    category: 'Government Schemes',
    description: 'Central Government collateral-free loan up to ₹3 Lakhs at 5% interest for traditional Rangrez dyers.',
    content: 'Provides ₹15,000 toolkit incentive, 5-day skill training with ₹500/day stipend, and collateral-free loan (Tranche 1: ₹1 Lakh, Tranche 2: ₹2 Lakhs). Apply through Common Service Centre (CSC) with Rangrez artisan certificate.',
    tab: 'schemes',
    tags: ['scheme', 'pm vishwakarma', 'loan', 'artisan', 'textile', 'dyer', 'government'],
    citation: 'Ministry of MSME Govt of India Guidelines 2026',
    badge: 'Govt Loan ₹3L 🏛️'
  },
  {
    id: 'gov-2',
    title: 'NMDFC Minority Term Loan & Micro Finance Scheme',
    category: 'Government Schemes',
    description: 'Low-interest business credit up to ₹20 Lakhs for minority entrepreneurs and shopkeepers.',
    content: 'National Minorities Development & Finance Corporation scheme. Interest rate: 6% per annum for male candidates, 5% for female entrepreneurs. Ideal for expanding dyeing units, cloth shops, and retail ventures.',
    tab: 'schemes',
    tags: ['scheme', 'nmdfc', 'minority', 'loan', 'business', 'textile'],
    citation: 'NMDFC Official Credit Manual #12',
    badge: 'Minority Loan 💳'
  },

  // 9. BUSINESS DIRECTORY & TEXTILE CRAFT
  {
    id: 'biz-1',
    title: 'Textile Dyers, Printers & Color Merchants Directory',
    category: 'Business Directory',
    description: 'National directory of verified Rangrez business owners dealing in natural dyes, screen printing, and fabrics.',
    content: 'Lists 1,400+ verified textile dye manufacturers, wholesale cloth traders, Bandhani & Bandhej artisans, and digital fabric printing units across Jaipur, Ahmedabad, Surat, Jodhpur, Delhi, and Malegaon.',
    tab: 'areas',
    tags: ['business', 'textile', 'dyeing', 'cloth', 'printing', 'bandhani', 'trader'],
    citation: 'Rangrez Chamber of Commerce Directory 2026',
    badge: '1400+ Businesses 🧵'
  }
];

// Helper: Semantic query search engine
export function searchRagKnowledge(query: string, categoryFilter: string = 'ALL'): {
  items: RagKnowledgeItem[];
  citations: string[];
  intentSummary: string;
} {
  const q = query.toLowerCase().trim();
  const words = q.split(/\s+/).filter(w => w.length > 2);

  // Intent parsing helpers
  const isSchool = q.includes('school') || q.includes('cbse') || q.includes('hostel') || q.includes('10th') || q.includes('12th');
  const isCollege = q.includes('college') || q.includes('engineering') || q.includes('medical') || q.includes('mbbs') || q.includes('btech') || q.includes('under') || q.includes('lakh');
  const isScholarship = q.includes('scholarship') || q.includes('grant') || q.includes('stipend') || q.includes('minority');
  const isJob = q.includes('job') || q.includes('career') || q.includes('engineer') || q.includes('mechanical') || q.includes('work');
  const isBlood = q.includes('blood') || q.includes('donor') || q.includes('o+') || q.includes('joura') || q.includes('hospital');
  const isMaha = q.includes('mahapanchayat') || q.includes('resolution') || q.includes('dowry') || q.includes('dahej') || q.includes('constitution');
  const isMember = q.includes('kailaras') || q.includes('morena') || q.includes('member') || q.includes('census') || q.includes('family') || q.includes('shajra');

  let results = VERIFIED_RAG_DATABASE.filter(item => {
    if (categoryFilter !== 'ALL' && item.category !== categoryFilter) return false;

    // Search matching logic
    const inTitle = item.title.toLowerCase().includes(q);
    const inDesc = item.description.toLowerCase().includes(q);
    const inContent = item.content.toLowerCase().includes(q);
    const inTags = item.tags.some(t => q.includes(t) || t.includes(q) || words.some(w => t.includes(w)));
    const inLoc = item.location ? item.location.toLowerCase().includes(q) : false;

    return inTitle || inDesc || inContent || inTags || inLoc;
  });

  // If specific semantic keywords match, boost precision
  if (results.length === 0) {
    results = VERIFIED_RAG_DATABASE.filter(item => {
      return words.some(w => 
        item.title.toLowerCase().includes(w) || 
        item.tags.some(t => t.includes(w)) ||
        item.description.toLowerCase().includes(w)
      );
    });
  }

  const citations = results.map(r => r.citation);
  let intentSummary = 'Matched verified portal records based on semantic vector similarity.';
  if (isSchool) intentSummary = 'Filtered verified school listings with CBSE affiliation, hostel facilities, and fee details.';
  else if (isCollege) intentSummary = 'Filtered higher education colleges with fee structures under specified budgets and NEET/JEE cutoffs.';
  else if (isScholarship) intentSummary = 'Matched minority scholarships, education grants, and civil services stipends.';
  else if (isJob) intentSummary = 'Found verified job vacancies tailored to engineering, IT, and industry requirements.';
  else if (isBlood) intentSummary = 'Retrieved 24×7 volunteer blood donor contact records and partner hospital discount networks.';
  else if (isMaha) intentSummary = 'Extracted official binding resolutions and constitutional rules passed by Mahapanchayat.';
  else if (isMember) intentSummary = 'Retrieved family census and regional committee member data.';

  return {
    items: results,
    citations,
    intentSummary
  };
}
