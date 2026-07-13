export interface StateNode {
  id: string;
  nameEn: string;
  nameHi: string;
}

export interface DistrictNode {
  id: string;
  stateId: string;
  nameEn: string;
  nameHi: string;
  committeeStatus: 'Active' | 'In Formation' | 'Proposed';
  presidentEn: string;
  presidentHi: string;
  secretaryEn: string;
  secretaryHi: string;
  familiesCount: number;
  membersCount: number;
  educationRate: string;
  activeVolunteers: number;
  studentsCount: number;
  womenCount: number;
  seniorCount: number;
  businessesCount: number;
  bloodDonorsCount: number;
  scholarshipsCount: number;
  eventsCount: number;
  presidentFatherEn?: string;
  presidentFatherHi?: string;
  presidentMobile?: string;
  presidentOccupationEn?: string;
  presidentOccupationHi?: string;
}

export interface TehsilNode {
  id: string;
  districtId: string;
  nameEn: string;
  nameHi: string;
  presidentEn?: string;
  presidentHi?: string;
  presidentFatherEn?: string;
  presidentFatherHi?: string;
  presidentMobile?: string;
  presidentOccupationEn?: string;
  presidentOccupationHi?: string;
}

export interface VillageNode {
  id: string;
  tehsilId?: string; // for MP and Rajasthan
  districtId?: string; // for other states
  nameEn: string;
  nameHi: string;
  pincode: string;
  familiesCount: number;
  membersCount: number;
  committeeNameEn?: string;
  committeeNameHi?: string;
  presidentEn?: string;
  presidentHi?: string;
  presidentFatherEn?: string;
  presidentFatherHi?: string;
  presidentMobile?: string;
  presidentOccupationEn?: string;
  presidentOccupationHi?: string;
}

export interface MemberNode {
  id: string;
  villageId: string;
  nameEn: string;
  nameHi: string;
  educationEn: string;
  educationHi: string;
  occupationEn: string;
  occupationHi: string;
  isBloodDonor: boolean;
  isBusinessOwner: boolean;
  isStudent: boolean;
}

// Complete list of 36 States and Union Territories of India
export const indianStates: StateNode[] = [
  { id: 'AN', nameEn: 'Andaman and Nicobar Islands', nameHi: 'अंडमान और निकोबार द्वीप समूह' },
  { id: 'AP', nameEn: 'Andhra Pradesh', nameHi: 'आन्ध्र प्रदेश' },
  { id: 'AR', nameEn: 'Arunachal Pradesh', nameHi: 'अरुणाचल प्रदेश' },
  { id: 'AS', nameEn: 'Assam', nameHi: 'असम' },
  { id: 'BR', nameEn: 'Bihar', nameHi: 'बिहार' },
  { id: 'CH', nameEn: 'Chandigarh', nameHi: 'चंडीगढ़' },
  { id: 'CT', nameEn: 'Chhattisgarh', nameHi: 'छत्तीसगढ़' },
  { id: 'DN', nameEn: 'Dadra and Nagar Haveli and Daman and Diu', nameHi: 'दादरा और नगर हवेली और दमन और दीव' },
  { id: 'DL', nameEn: 'Delhi', nameHi: 'दिल्ली' },
  { id: 'GA', nameEn: 'Goa', nameHi: 'गोआ' },
  { id: 'GJ', nameEn: 'Gujarat', nameHi: 'गुजरात' },
  { id: 'HR', nameEn: 'Haryana', nameHi: 'हरियाणा' },
  { id: 'HP', nameEn: 'Himachal Pradesh', nameHi: 'हिमाचल प्रदेश' },
  { id: 'JK', nameEn: 'Jammu and Kashmir', nameHi: 'जम्मू और कश्मीर' },
  { id: 'JH', nameEn: 'Jharkhand', nameHi: 'झारखंड' },
  { id: 'KA', nameEn: 'Karnataka', nameHi: 'कर्नाटक' },
  { id: 'KL', nameEn: 'Kerala', nameHi: 'केरल' },
  { id: 'LA', nameEn: 'Ladakh', nameHi: 'लद्दाख' },
  { id: 'LD', nameEn: 'Lakshadweep', nameHi: 'लक्षद्वीप' },
  { id: 'MP', nameEn: 'Madhya Pradesh', nameHi: 'मध्य प्रदेश' },
  { id: 'MH', nameEn: 'Maharashtra', nameHi: 'महाराष्ट्र' },
  { id: 'MN', nameEn: 'Manipur', nameHi: 'मणिपुर' },
  { id: 'ML', nameEn: 'Meghalaya', nameHi: 'मेघालय' },
  { id: 'MZ', nameEn: 'Mizoram', nameHi: 'मिजोरम' },
  { id: 'NL', nameEn: 'Nagaland', nameHi: 'नागालैंड' },
  { id: 'OR', nameEn: 'Odisha', nameHi: 'ओडिशा' },
  { id: 'PY', nameEn: 'Puducherry', nameHi: 'पुदुचेरी' },
  { id: 'PB', nameEn: 'Punjab', nameHi: 'पंजाब' },
  { id: 'RJ', nameEn: 'Rajasthan', nameHi: 'राजस्थान' },
  { id: 'SK', nameEn: 'Sikkim', nameHi: 'सिक्किम' },
  { id: 'TN', nameEn: 'Tamil Nadu', nameHi: 'तमिलनाडु' },
  { id: 'TG', nameEn: 'Telangana', nameHi: 'तेलंगाना' },
  { id: 'TR', nameEn: 'Tripura', nameHi: 'त्रिपुरा' },
  { id: 'UP', nameEn: 'Uttar Pradesh', nameHi: 'उत्तर प्रदेश' },
  { id: 'UT', nameEn: 'Uttarakhand', nameHi: 'उत्तराखंड' },
  { id: 'WB', nameEn: 'West Bengal', nameHi: 'पश्चिम बंगाल' }
];

// Seed Districts for all States & UTs
export const initialDistricts: DistrictNode[] = [
  // Madhya Pradesh (All major districts included)
  {
    id: 'mp_morena',
    stateId: 'MP',
    nameEn: 'Morena',
    nameHi: 'मुरैना',
    committeeStatus: 'Active',
    presidentEn: 'Janab Sahjad Khan Sikaroda',
    presidentHi: 'जनाब शहजाद खान सिकरौदा',
    secretaryEn: 'Mohammed Aslam Rangrez',
    secretaryHi: 'मोहम्मद असलम रंगरेज',
    familiesCount: 2450,
    membersCount: 14200,
    educationRate: '88%',
    activeVolunteers: 320,
    studentsCount: 3400,
    womenCount: 6500,
    seniorCount: 1200,
    businessesCount: 220,
    bloodDonorsCount: 180,
    scholarshipsCount: 95,
    eventsCount: 14,
    presidentFatherEn: 'Late Laal Khan',
    presidentFatherHi: 'मरहूम लाल खान',
    presidentMobile: '97521 47004',
    presidentOccupationEn: 'Contractor',
    presidentOccupationHi: 'ठेकेदार'
  },
  {
    id: 'mp_bhopal',
    stateId: 'MP',
    nameEn: 'Bhopal',
    nameHi: 'भोपाल',
    committeeStatus: 'Active',
    presidentEn: 'Janab Gulam Nabi Rangrez',
    presidentHi: 'जनाब गुलाम नबी रंगरेज',
    secretaryEn: 'Mohammed Jamil Rangrez',
    secretaryHi: 'मोहम्मद जमील रंगरेज',
    familiesCount: 1820,
    membersCount: 9800,
    educationRate: '92%',
    activeVolunteers: 210,
    studentsCount: 2600,
    womenCount: 4600,
    seniorCount: 850,
    businessesCount: 190,
    bloodDonorsCount: 120,
    scholarshipsCount: 80,
    eventsCount: 8
  },
  {
    id: 'mp_indore',
    stateId: 'MP',
    nameEn: 'Indore',
    nameHi: 'इंदौर',
    committeeStatus: 'Active',
    presidentEn: 'Haji Mohammad Iqbal',
    presidentHi: 'हाजी मोहम्मद इकबाल',
    secretaryEn: 'Janab Abdul Sattar',
    secretaryHi: 'जनाब अब्दुल सत्तार',
    familiesCount: 1560,
    membersCount: 8200,
    educationRate: '94%',
    activeVolunteers: 180,
    studentsCount: 2100,
    womenCount: 3900,
    seniorCount: 710,
    businessesCount: 240,
    bloodDonorsCount: 105,
    scholarshipsCount: 65,
    eventsCount: 6
  },
  { id: 'mp_gwalior', stateId: 'MP', nameEn: 'Greater Gwalior', nameHi: 'ग्रेटर ग्वालियर', committeeStatus: 'Active', presidentEn: 'Mufti Sirajuddin Isha’ati sahab', presidentHi: 'मुफ्ती सिराजुद्दीन इशाती साहब', secretaryEn: 'Nadeem Rangrez', secretaryHi: 'नदीम रंगरेज', familiesCount: 650, membersCount: 3200, educationRate: '85%', activeVolunteers: 45, studentsCount: 800, womenCount: 1400, seniorCount: 280, businessesCount: 50, bloodDonorsCount: 35, scholarshipsCount: 20, eventsCount: 2, presidentMobile: '+91 96176 98678', presidentOccupationEn: 'Islamic scholar, Islamic Judge, Qari, Hafiz, Aalim', presidentOccupationHi: 'इस्लामी विद्वान, इस्लामी न्यायाधीश, कारी, हाफ़िज़, आलिम' },
  { id: 'mp_jabalpur', stateId: 'MP', nameEn: 'Jabalpur', nameHi: 'जबलपुर', committeeStatus: 'Proposed', presidentEn: 'TBA', presidentHi: 'घोषित किया जाएगा', secretaryEn: 'TBA', secretaryHi: 'घोषित किया जाएगा', familiesCount: 320, membersCount: 1500, educationRate: '82%', activeVolunteers: 15, studentsCount: 400, womenCount: 700, seniorCount: 120, businessesCount: 25, bloodDonorsCount: 12, scholarshipsCount: 5, eventsCount: 0 },
  { id: 'mp_ujjain', stateId: 'MP', nameEn: 'Ujjain', nameHi: 'उज्जयनी', committeeStatus: 'In Formation', presidentEn: 'Rashid Rangrez', presidentHi: 'राशिद रंगरेज', secretaryEn: 'Aasif Rangrez', secretaryHi: 'आसिफ रंगरेज', familiesCount: 480, membersCount: 2200, educationRate: '81%', activeVolunteers: 30, studentsCount: 550, womenCount: 1050, seniorCount: 190, businessesCount: 40, bloodDonorsCount: 18, scholarshipsCount: 12, eventsCount: 1 },
  { 
    id: 'mp_sheopur', 
    stateId: 'MP', 
    nameEn: 'Sheopur', 
    nameHi: 'श्योपुर', 
    committeeStatus: 'Active', 
    presidentEn: 'Advocate Janab Atiq Ahmad', 
    presidentHi: 'एडवोकेट जनाब अतीक अहमद', 
    secretaryEn: 'TBA', 
    secretaryHi: 'घोषित किया जाएगा', 
    familiesCount: 240, 
    membersCount: 1350, 
    educationRate: '83%', 
    activeVolunteers: 20, 
    studentsCount: 290, 
    womenCount: 620, 
    seniorCount: 115, 
    businessesCount: 35, 
    bloodDonorsCount: 15, 
    scholarshipsCount: 8, 
    eventsCount: 0 
  },

  // Rajasthan (All major districts included)
  {
    id: 'rj_jaipur',
    stateId: 'RJ',
    nameEn: 'Jaipur',
    nameHi: 'जयपुर',
    committeeStatus: 'Active',
    presidentEn: 'Al-Haaj Gulam Rasool Rangrez',
    presidentHi: 'अल-हाज गुलाम रसूल रंगरेज',
    secretaryEn: 'Er. Tanveer Ahmed Rangrez',
    secretaryHi: 'इंजीनियर तनवीर अहमद रंगरेज',
    familiesCount: 3100,
    membersCount: 17500,
    educationRate: '90%',
    activeVolunteers: 420,
    studentsCount: 4100,
    womenCount: 8200,
    seniorCount: 1500,
    businessesCount: 350,
    bloodDonorsCount: 240,
    scholarshipsCount: 140,
    eventsCount: 18
  },
  {
    id: 'rj_jodhpur',
    stateId: 'RJ',
    nameEn: 'Jodhpur',
    nameHi: 'जोधपुर',
    committeeStatus: 'Active',
    presidentEn: 'Haji Mohammad Iqbal',
    presidentHi: 'हाजी मोहम्मद इकबाल',
    secretaryEn: 'Mohammed Rehan Rangrez',
    secretaryHi: 'मोहम्मद रेहान रंगरेज',
    familiesCount: 2200,
    membersCount: 11500,
    educationRate: '86%',
    activeVolunteers: 250,
    studentsCount: 2800,
    womenCount: 5400,
    seniorCount: 950,
    businessesCount: 180,
    bloodDonorsCount: 150,
    scholarshipsCount: 90,
    eventsCount: 12
  },
  { id: 'rj_kota', stateId: 'RJ', nameEn: 'Kota', nameHi: 'कोटा', committeeStatus: 'Active', presidentEn: 'Janab Imran Rangrez', presidentHi: 'जनाब इमरान रंगरेज', secretaryEn: 'Farhan Rangrez', secretaryHi: 'फरहान रंगरेज', familiesCount: 950, membersCount: 5200, educationRate: '89%', activeVolunteers: 110, studentsCount: 1500, womenCount: 2400, seniorCount: 410, businessesCount: 85, bloodDonorsCount: 65, scholarshipsCount: 45, eventsCount: 4 },
  { id: 'rj_ajmer', stateId: 'RJ', nameEn: 'Ajmer', nameHi: 'अजमेर', committeeStatus: 'In Formation', presidentEn: 'Salim Rangrez', presidentHi: 'सलीम रंगरेज', secretaryEn: 'Yunus Rangrez', secretaryHi: 'यूनुस रंगरेज', familiesCount: 780, membersCount: 4100, educationRate: '84%', activeVolunteers: 60, studentsCount: 920, womenCount: 1900, seniorCount: 310, businessesCount: 60, bloodDonorsCount: 40, scholarshipsCount: 25, eventsCount: 3 },
  { id: 'rj_bikaner', stateId: 'RJ', nameEn: 'Bikaner', nameHi: 'बीकानेर', committeeStatus: 'Proposed', presidentEn: 'TBA', presidentHi: 'घोषित किया जाएगा', secretaryEn: 'TBA', secretaryHi: 'घोषित किया जाएगा', familiesCount: 290, membersCount: 1400, educationRate: '79%', activeVolunteers: 12, studentsCount: 300, womenCount: 620, seniorCount: 110, businessesCount: 20, bloodDonorsCount: 8, scholarshipsCount: 3, eventsCount: 0 },
  { id: 'rj_karauli', stateId: 'RJ', nameEn: 'Karauli', nameHi: 'करौली', committeeStatus: 'Active', presidentEn: 'Janab Alauddin Khan', presidentHi: 'जनाब अलाउद्दीन खान', secretaryEn: 'TBA', secretaryHi: 'घोषित किया जाएगा', familiesCount: 180, membersCount: 980, educationRate: '82%', activeVolunteers: 25, studentsCount: 220, womenCount: 460, seniorCount: 90, businessesCount: 15, bloodDonorsCount: 10, scholarshipsCount: 5, eventsCount: 1 },
  { id: 'rj_dholpur', stateId: 'RJ', nameEn: 'Dholpur', nameHi: 'धौलपुर', committeeStatus: 'Active', presidentEn: 'Janab Raju Sir', presidentHi: 'जनाब राजू सर', presidentMobile: '+91 98879 83333', secretaryEn: 'TBA', secretaryHi: 'घोषित किया जाएगा', familiesCount: 160, membersCount: 880, educationRate: '82%', activeVolunteers: 22, studentsCount: 190, womenCount: 420, seniorCount: 90, businessesCount: 16, bloodDonorsCount: 12, scholarshipsCount: 6, eventsCount: 1 },

  // Uttar Pradesh
  { id: 'up_lucknow', stateId: 'UP', nameEn: 'Lucknow', nameHi: 'लखनऊ', committeeStatus: 'Active', presidentEn: 'Haji Jamil Ahmed Rangrez', presidentHi: 'हाजी जमील अहमद रंगरेज', secretaryEn: 'Er. Irfan Rangrez', secretaryHi: 'इंजीनियर इरफान रंगरेज', familiesCount: 1980, membersCount: 10400, educationRate: '87%', activeVolunteers: 190, studentsCount: 2400, womenCount: 4800, seniorCount: 880, businessesCount: 150, bloodDonorsCount: 110, scholarshipsCount: 70, eventsCount: 6 },
  { id: 'up_kanpur', stateId: 'UP', nameEn: 'Kanpur', nameHi: 'कानपुर', committeeStatus: 'In Formation', presidentEn: 'Yaseen Rangrez', presidentHi: 'यासीन रंगरेज', secretaryEn: 'Feroz Rangrez', secretaryHi: 'फिरोज रंगरेज', familiesCount: 890, membersCount: 4600, educationRate: '81%', activeVolunteers: 75, studentsCount: 1100, womenCount: 2100, seniorCount: 390, businessesCount: 95, bloodDonorsCount: 55, scholarshipsCount: 30, eventsCount: 2 },

  // Maharashtra
  { id: 'mh_mumbai', stateId: 'MH', nameEn: 'Mumbai', nameHi: 'मुंबई', committeeStatus: 'Active', presidentEn: 'Janab Abdul Kareem', presidentHi: 'जनाब अब्दुल करीम', secretaryEn: 'Siddique Rangrez', secretaryHi: 'सिद्दीकी रंगरेज', familiesCount: 1420, membersCount: 7200, educationRate: '91%', activeVolunteers: 160, studentsCount: 1800, womenCount: 3300, seniorCount: 620, businessesCount: 290, bloodDonorsCount: 90, scholarshipsCount: 55, eventsCount: 5 },

  // Bihar
  { id: 'br_patna', stateId: 'BR', nameEn: 'Patna', nameHi: 'पटना', committeeStatus: 'Active', presidentEn: 'Haji Sarfaraz Rangrez', presidentHi: 'हाजी सरफराज रंगरेज', secretaryEn: 'Khurshid Alam', secretaryHi: 'खुर्शीद आलम', familiesCount: 1100, membersCount: 5900, educationRate: '83%', activeVolunteers: 90, studentsCount: 1300, womenCount: 2700, seniorCount: 450, businessesCount: 110, bloodDonorsCount: 75, scholarshipsCount: 40, eventsCount: 4 },

  // Gujarat
  { id: 'gj_ahmedabad', stateId: 'GJ', nameEn: 'Ahmedabad', nameHi: 'अहमदाबाद', committeeStatus: 'In Formation', presidentEn: 'Haji Yusuf Rangrez', presidentHi: 'हाजी यूसुफ रंगरेज', secretaryEn: 'Salim Rangrez', secretaryHi: 'सलीम रंगरेज', familiesCount: 720, membersCount: 3800, educationRate: '88%', activeVolunteers: 65, studentsCount: 950, womenCount: 1750, seniorCount: 300, businessesCount: 120, bloodDonorsCount: 50, scholarshipsCount: 30, eventsCount: 2 },

  // Delhi
  { id: 'dl_central', stateId: 'DL', nameEn: 'Central Delhi', nameHi: 'मध्य दिल्ली', committeeStatus: 'Active', presidentEn: 'Janab Akhtar Rangrez', presidentHi: 'जनाब अख्तर रंगरेज', secretaryEn: 'Shahid Rangrez', secretaryHi: 'शाहिद रंगरेज', familiesCount: 1250, membersCount: 6500, educationRate: '91%', activeVolunteers: 140, studentsCount: 1550, womenCount: 3000, seniorCount: 550, businessesCount: 180, bloodDonorsCount: 85, scholarshipsCount: 50, eventsCount: 7 }
];

// Seed Tehsils (MP & Rajasthan fully covered for demo, other states ready for expansion)
export const initialTehsils: TehsilNode[] = [
  // Morena Tehsils
  { 
    id: 'mp_morena_kailaras', 
    districtId: 'mp_morena', 
    nameEn: 'Kailaras', 
    nameHi: 'कैलारस',
    presidentEn: 'Janab Mushir Ahmad urf Munshi Nagamani',
    presidentHi: 'जनाब मुशीर अहमद उर्फ मुंशी नागमणि',
    presidentFatherEn: 'Late. janab Allahdeen Khan',
    presidentFatherHi: 'मरहूम जनाब अल्लाहदीन खान',
    presidentMobile: '+91 96171 16484',
    presidentOccupationEn: 'Shop keeper',
    presidentOccupationHi: 'दुकानदार'
  },
  { id: 'mp_morena_joura', districtId: 'mp_morena', nameEn: 'Joura', nameHi: 'जौरा', presidentEn: 'Janab Kallu Sarapanch', presidentHi: 'जनाब कल्लू सरपंच', presidentMobile: '+91 73892 47808', presidentOccupationEn: 'Farmer', presidentOccupationHi: 'किसान' },
  { 
    id: 'mp_morena_ambah', 
    districtId: 'mp_morena', 
    nameEn: 'Ambah', 
    nameHi: 'अम्बाह',
    presidentEn: 'Janab Salim Khan',
    presidentHi: 'जनाब सलीम खान',
    presidentMobile: '+91 98262 49086',
    presidentOccupationEn: 'Shopkeeper',
    presidentOccupationHi: 'दुकानदार'
  },
  { 
    id: 'mp_morena_sabalgarh', 
    districtId: 'mp_morena', 
    nameEn: 'Sabalgarh', 
    nameHi: 'सबलगढ़',
    presidentEn: 'Janab Habib Khan',
    presidentHi: 'जनाब हबीब खान',
    presidentMobile: '+91 98267 65857',
    presidentOccupationEn: 'Business Man',
    presidentOccupationHi: 'व्यवसायी'
  },
  { id: 'mp_morena_morena', districtId: 'mp_morena', nameEn: 'Morena Tehsil', nameHi: 'मुरैना तहसील' },
  { id: 'mp_morena_porsa', districtId: 'mp_morena', nameEn: 'Porsa', nameHi: 'पोरसा' },
  { 
    id: 'mp_morena_sumaoli', 
    districtId: 'mp_morena', 
    nameEn: 'Sumaoli', 
    nameHi: 'सुमावली',
    presidentEn: 'Janab Abdur Rahman urf Ballu Khan',
    presidentHi: 'जनाब अब्दुर रहमान उर्फ बल्लू खान',
    presidentMobile: '+91 70001 99484'
  },
  {
    id: 'mp_morena_banmore',
    districtId: 'mp_morena',
    nameEn: 'Banmore',
    nameHi: 'बानमोर',
    presidentEn: 'Janab Jaan Muhammad khan',
    presidentHi: 'जनाब जान मोहम्मद खान',
    presidentMobile: '+91 98263 08492'
  },
  { 
    id: 'mp_sheopur_vijaypur', 
    districtId: 'mp_sheopur', 
    nameEn: 'Vijaypur', 
    nameHi: 'विजयपुर',
    presidentEn: 'Janab Jalaluddin khan',
    presidentHi: 'जनाब जलालुद्दीन खान',
    presidentMobile: '+91 97555 30808',
    presidentOccupationEn: 'Social Worker',
    presidentOccupationHi: 'समाजसेवी'
  },
  { 
    id: 'mp_sheopur_manpur', 
    districtId: 'mp_sheopur', 
    nameEn: 'Manpur', 
    nameHi: 'मानपुर',
    presidentEn: 'Janab Mahboob khan',
    presidentHi: 'जनाब महबूब खान',
    presidentMobile: '+91 97702 71749'
  },
  {
    id: 'mp_sheopur_city',
    districtId: 'mp_sheopur',
    nameEn: 'Sheopur City',
    nameHi: 'श्योपुर शहर',
    presidentEn: 'Advocate Janab Atiq Ahmad',
    presidentHi: 'एडवोकेट जनाब अतीक अहमद',
    presidentMobile: '+91 97548 02008',
    presidentOccupationEn: 'Advocate',
    presidentOccupationHi: 'अधिवक्ता'
  },

  // Bhopal Tehsils
  { id: 'mp_bhopal_huzur', districtId: 'mp_bhopal', nameEn: 'Huzur', nameHi: 'हुजूर' },
  { id: 'mp_bhopal_kolar', districtId: 'mp_bhopal', nameEn: 'Kolar', nameHi: 'कोलार' },

  // Indore Tehsils
  { id: 'mp_indore_depalpur', districtId: 'mp_indore', nameEn: 'Depalpur', nameHi: 'देपालपुर' },
  { id: 'mp_indore_sanwer', districtId: 'mp_indore', nameEn: 'Sanwer', nameHi: 'सावेर' },

  // Jaipur Tehsils
  { id: 'rj_jaipur_sanganer', districtId: 'rj_jaipur', nameEn: 'Sanganer', nameHi: 'सांगानेर' },
  { id: 'rj_jaipur_amer', districtId: 'rj_jaipur', nameEn: 'Amer', nameHi: 'आमेर' },
  { id: 'rj_jaipur_chomu', districtId: 'rj_jaipur', nameEn: 'Chomu', nameHi: 'चोमू' },
  { id: 'rj_jaipur_bassi', districtId: 'rj_jaipur', nameEn: 'Bassi', nameHi: 'बस्सी' },

  // Jodhpur Tehsils
  { id: 'rj_jodhpur_luni', districtId: 'rj_jodhpur', nameEn: 'Luni', nameHi: 'लूनी' },
  { id: 'rj_jodhpur_shergarh', districtId: 'rj_jodhpur', nameEn: 'Shergarh', nameHi: 'शेरगढ़' },

  // Karauli Tehsils
  { id: 'rj_karauli_mandrayal', districtId: 'rj_karauli', nameEn: 'Mandrayal', nameHi: 'मंडरायल' },

  // Dholpur Tehsils
  { id: 'rj_dholpur_baadi', districtId: 'rj_dholpur', nameEn: 'Baadi', nameHi: 'बाड़ी' }
];

// Seed Villages/Cities
export const initialVillages: VillageNode[] = [
  // Under Kailaras Tehsil
  { id: 'v_kailaras_town', tehsilId: 'mp_morena_kailaras', nameEn: 'Kailaras Town', nameHi: 'कैलारस कस्बा', pincode: '476224', familiesCount: 420, membersCount: 2450, committeeNameEn: 'Kailaras Nagar Committee', committeeNameHi: 'कैलारस नगर समिति' },
  { id: 'v_kailaras_sujuma', tehsilId: 'mp_morena_kailaras', nameEn: 'Sujuma Village', nameHi: 'सुजुमा गांव', pincode: '476224', familiesCount: 110, membersCount: 650 },
  { id: 'v_kailaras_piparsewa', tehsilId: 'mp_morena_kailaras', nameEn: 'Piparsewa', nameHi: 'पिपरसेवा', pincode: '476224', familiesCount: 85, membersCount: 480 },
  { id: 'v_kailaras_antri', tehsilId: 'mp_morena_kailaras', nameEn: 'Antri', nameHi: 'आंतरी', pincode: '476224', familiesCount: 65, membersCount: 390 },
  { id: 'v_kailaras_kattoli', tehsilId: 'mp_morena_kailaras', nameEn: 'Kattoli', nameHi: 'कट्टोली', pincode: '476224', familiesCount: 110, membersCount: 650, presidentEn: 'Janab Jakir Ali', presidentHi: 'जनाब जाकिर अली', presidentMobile: '+91 97708 66323' },

  // Under Joura Tehsil
  { id: 'v_joura_town', tehsilId: 'mp_morena_joura', nameEn: 'Joura Town', nameHi: 'जौरा कस्बा', pincode: '476221', familiesCount: 350, membersCount: 2100, committeeNameEn: 'Joura Central Committee', committeeNameHi: 'जौरा केंद्रीय समिति' },
  { id: 'v_joura_bagona', tehsilId: 'mp_morena_joura', nameEn: 'Bagona', nameHi: 'बगोना', pincode: '476221', familiesCount: 95, membersCount: 520 },

  // Under Vijaypur Tehsil
  { id: 'v_vijaypur_town', tehsilId: 'mp_sheopur_vijaypur', nameEn: 'Vijaypur Town', nameHi: 'विजयपुर कस्बा', pincode: '476332', familiesCount: 150, membersCount: 820 },
  { id: 'v_vijaypur_veerpur', tehsilId: 'mp_sheopur_vijaypur', nameEn: 'Veerpur', nameHi: 'वीरपुर', pincode: '476332', familiesCount: 120, membersCount: 650, presidentEn: 'Janab Rafiq Khan', presidentHi: 'जनाब रफ़ीक खान', presidentMobile: '+91 96693 96395' },
  
  // Under Manpur Tehsil
  { id: 'v_manpur_town', tehsilId: 'mp_sheopur_manpur', nameEn: 'Manpur Town', nameHi: 'मानपुर कस्बा', pincode: '476335', familiesCount: 110, membersCount: 620, presidentEn: 'Janab Mahboob khan', presidentHi: 'जनाब महबूब खान', presidentMobile: '+91 97702 71749' },
  
  // Under Sheopur City Tehsil
  { id: 'v_sheopur_city_town', tehsilId: 'mp_sheopur_city', nameEn: 'Sheopur City', nameHi: 'श्योपुर शहर', pincode: '476337', familiesCount: 240, membersCount: 1350, presidentEn: 'Advocate Janab Atiq Ahmad', presidentHi: 'एडवोकेट जनाब अतीक अहमद', presidentMobile: '+91 97548 02008', presidentOccupationEn: 'Advocate', presidentOccupationHi: 'अधिवक्ता' },
  
  // Under Sumaoli Tehsil
  { id: 'v_sumaoli_town', tehsilId: 'mp_morena_sumaoli', nameEn: 'Sumaoli Town', nameHi: 'सुमावली कस्बा', pincode: '476221', familiesCount: 120, membersCount: 680 },

  // Under Sabalgarh Tehsil
  { id: 'v_sabalgarh_tentara', tehsilId: 'mp_morena_sabalgarh', nameEn: 'Tentara', nameHi: 'टेंटरा', pincode: '476228', familiesCount: 140, membersCount: 780, presidentEn: 'Janab Abid Khan', presidentHi: 'जनाब आबिद खान', presidentMobile: '+91 81204 64330' },
  { id: 'v_sabalgarh_jabrol', tehsilId: 'mp_morena_sabalgarh', nameEn: 'Jabrol', nameHi: 'जाबरोल', pincode: '476229', familiesCount: 130, membersCount: 720, presidentEn: 'Janab Akhtar Ali', presidentHi: 'जनाब अख्तर अली', presidentMobile: '+91 96857 98703' },

  // Under Banmore Tehsil
  { id: 'v_banmore_town', tehsilId: 'mp_morena_banmore', nameEn: 'Banmore Town', nameHi: 'बानमोर कस्बा', pincode: '476444', familiesCount: 160, membersCount: 920 },

  // Under Ambah Tehsil
  { id: 'v_ambah_town', tehsilId: 'mp_morena_ambah', nameEn: 'Ambah Town', nameHi: 'अम्बाह कस्बा', pincode: '476111', familiesCount: 280, membersCount: 1650 },

  // Under Sanganer Tehsil
  { id: 'v_sanganer_town', tehsilId: 'rj_jaipur_sanganer', nameEn: 'Sanganer Town', nameHi: 'सांगानेर टाउन', pincode: '302029', familiesCount: 540, membersCount: 3100, committeeNameEn: 'Sanganer Artisan Guild', committeeNameHi: 'सांगानेर कारीगर संघ' },
  { id: 'v_sanganer_v1', tehsilId: 'rj_jaipur_sanganer', nameEn: 'Pratap Nagar Area', nameHi: 'प्रताप नगर क्षेत्र', pincode: '302033', familiesCount: 180, membersCount: 1100 },

  // Under Mandrayal Tehsil
  { id: 'v_mandrayal_town', tehsilId: 'rj_karauli_mandrayal', nameEn: 'Mandrayal Town', nameHi: 'मंडरायल कस्बा', pincode: '322251', familiesCount: 180, membersCount: 980, presidentEn: 'Janab Alauddin Khan', presidentHi: 'जनाब अलाउद्दीन खान', presidentMobile: '+91 75685 28700' },

  // Under Baadi Tehsil
  { id: 'v_baadi_town', tehsilId: 'rj_dholpur_baadi', nameEn: 'Baadi Town', nameHi: 'बाड़ी कस्बा', pincode: '328021', familiesCount: 160, membersCount: 880, presidentEn: 'Janab Sabbir Baba', presidentHi: 'जनाब शब्बीर बाबा', presidentMobile: '+91 93149 84897' },

  // Other States (Directly mapped to District since no tehsils initially)
  { id: 'v_lucknow_city', districtId: 'up_lucknow', nameEn: 'Lucknow Chowk', nameHi: 'लखनऊ चौक', pincode: '226003', familiesCount: 750, membersCount: 4200, committeeNameEn: 'Chowk Rangrez Brotherhood', committeeNameHi: 'चौक रंगरेज बिरादरी' },
  { id: 'v_mumbai_dharavi', districtId: 'mh_mumbai', nameEn: 'Dharavi Block A', nameHi: 'धारावी ब्लॉक ए', pincode: '400017', familiesCount: 620, membersCount: 3400, committeeNameEn: 'Dharavi Rangrez Association', committeeNameHi: 'धारावी रंगरेज एसोसिएशन' }
];

// Seed Members
export const initialMembers: MemberNode[] = [
  { id: 'M-1001', villageId: 'v_kailaras_town', nameEn: 'Yasmeen Rangrez', nameHi: 'यास्मीन रंगरेज', educationEn: 'Class 12th', educationHi: 'कक्षा 12वीं', occupationEn: 'Student', occupationHi: 'छात्रा', isBloodDonor: false, isBusinessOwner: false, isStudent: true },
  { id: 'M-1002', villageId: 'v_kailaras_town', nameEn: 'Mohammed Anas Rangrez', nameHi: 'मोहम्मद अनस रंगरेज', educationEn: 'B.Tech CS Student', educationHi: 'बी.टेक सीएस छात्र', occupationEn: 'Student', occupationHi: 'छात्र', isBloodDonor: true, isBusinessOwner: false, isStudent: true },
  { id: 'M-1003', villageId: 'v_joura_town', nameEn: 'Sajid Rangrez', nameHi: 'साजिद रंगरेज', educationEn: 'Graduate', educationHi: 'स्नातक', occupationEn: 'Garments Store Owner', occupationHi: 'कपड़ा दुकान संचालक', isBloodDonor: true, isBusinessOwner: true, isStudent: false },
  { id: 'M-1004', villageId: 'v_sanganer_town', nameEn: 'Al-Haaj Gulam Rasool', nameHi: 'अल-हाज गुलाम रसूल', educationEn: 'Post Graduate', educationHi: 'परास्नातक', occupationEn: 'Traditional Dyer Business', occupationHi: 'पारंपरिक रंगाई व्यवसाय', isBloodDonor: false, isBusinessOwner: true, isStudent: false },
  { id: 'M-1005', villageId: 'v_lucknow_city', nameEn: 'Er. Irfan Rangrez', nameHi: 'इंजीनियर इरफान रंगरेज', educationEn: 'B.Tech', educationHi: 'बी.टेक', occupationEn: 'Civil Engineer', occupationHi: 'सिविल इंजीनियर', isBloodDonor: true, isBusinessOwner: false, isStudent: false }
];
