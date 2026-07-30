export interface PoliticalPartyInfo {
  id: string;
  nameEn: string;
  nameHi: string;
  abbr: string;
  symbolEmoji: string;
  symbolLabel: string;
  badgeBg: string;
  textColor: string;
  borderColor: string;
  glowColor: string;
  keywords: string[];
}

export const POLITICAL_PARTIES: PoliticalPartyInfo[] = [
  {
    id: 'bjp',
    nameEn: 'Bharatiya Janata Party',
    nameHi: 'भारतीय जनता पार्टी',
    abbr: 'BJP',
    symbolEmoji: '🪷',
    symbolLabel: 'Lotus',
    badgeBg: 'bg-gradient-to-r from-amber-600 via-orange-600 to-emerald-700',
    textColor: 'text-amber-100',
    borderColor: 'border-amber-400/80',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    keywords: ['bjp', 'bharatiya janata party', 'bhartiya janta party', 'bhaaratiya janata']
  },
  {
    id: 'inc',
    nameEn: 'Indian National Congress',
    nameHi: 'भारतीय राष्ट्रीय कांग्रेस',
    abbr: 'INC',
    symbolEmoji: '✋',
    symbolLabel: 'Hand',
    badgeBg: 'bg-gradient-to-r from-sky-700 via-blue-800 to-emerald-700',
    textColor: 'text-sky-100',
    borderColor: 'border-sky-300/80',
    glowColor: 'rgba(56, 189, 248, 0.4)',
    keywords: ['inc', 'congress', 'indian national congress', 'congress party']
  },
  {
    id: 'sp',
    nameEn: 'Samajwadi Party',
    nameHi: 'समाजवादी पार्टी',
    abbr: 'SP',
    symbolEmoji: '🚲',
    symbolLabel: 'Bicycle',
    badgeBg: 'bg-gradient-to-r from-red-700 via-red-800 to-emerald-800',
    textColor: 'text-red-100',
    borderColor: 'border-red-400/80',
    glowColor: 'rgba(239, 68, 68, 0.4)',
    keywords: ['samajwadi party', 'sp', 'samajwadi']
  },
  {
    id: 'bsp',
    nameEn: 'Bahujan Samaj Party',
    nameHi: 'बहुजन समाज पार्टी',
    abbr: 'BSP',
    symbolEmoji: '🐘',
    symbolLabel: 'Elephant',
    badgeBg: 'bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-800',
    textColor: 'text-blue-100',
    borderColor: 'border-blue-400/80',
    glowColor: 'rgba(96, 165, 250, 0.4)',
    keywords: ['bahujan samaj party', 'bsp', 'bahujan']
  },
  {
    id: 'aap',
    nameEn: 'Aam Aadmi Party',
    nameHi: 'आम आदमी पार्टी',
    abbr: 'AAP',
    symbolEmoji: '🧹',
    symbolLabel: 'Broom',
    badgeBg: 'bg-gradient-to-r from-teal-800 via-cyan-800 to-blue-900',
    textColor: 'text-teal-100',
    borderColor: 'border-teal-300/80',
    glowColor: 'rgba(45, 212, 191, 0.4)',
    keywords: ['aam aadmi party', 'aap', 'aam aadmi']
  },
  {
    id: 'shs',
    nameEn: 'Shiv Sena',
    nameHi: 'शिवसेना',
    abbr: 'Shiv Sena',
    symbolEmoji: '🏹',
    symbolLabel: 'Bow & Arrow',
    badgeBg: 'bg-gradient-to-r from-orange-700 via-amber-700 to-orange-900',
    textColor: 'text-orange-100',
    borderColor: 'border-orange-400/80',
    glowColor: 'rgba(251, 146, 60, 0.4)',
    keywords: ['shiv sena', 'shivsena', 'shs', 'ubt']
  },
  {
    id: 'ncp',
    nameEn: 'Nationalist Congress Party',
    nameHi: 'राष्ट्रवादी कांग्रेस पार्टी',
    abbr: 'NCP',
    symbolEmoji: '⏰',
    symbolLabel: 'Clock',
    badgeBg: 'bg-gradient-to-r from-blue-800 via-indigo-800 to-sky-700',
    textColor: 'text-blue-100',
    borderColor: 'border-blue-300/80',
    glowColor: 'rgba(147, 197, 253, 0.4)',
    keywords: ['nationalist congress party', 'ncp']
  },
  {
    id: 'jmm',
    nameEn: 'Jharkhand Mukti Morcha',
    nameHi: 'झारखंड मुक्ति मोर्चा',
    abbr: 'JMM',
    symbolEmoji: '🏹',
    symbolLabel: 'Bow & Arrow',
    badgeBg: 'bg-gradient-to-r from-emerald-800 via-green-900 to-teal-900',
    textColor: 'text-emerald-100',
    borderColor: 'border-emerald-400/80',
    glowColor: 'rgba(52, 211, 153, 0.4)',
    keywords: ['jharkhand mukti morcha', 'jmm']
  },
  {
    id: 'aitc',
    nameEn: 'All India Trinamool Congress',
    nameHi: 'ऑल इंडिया तृणमूल कांग्रेस',
    abbr: 'TMC',
    symbolEmoji: '🌱',
    symbolLabel: 'Flowers & Grass',
    badgeBg: 'bg-gradient-to-r from-emerald-700 via-teal-800 to-green-800',
    textColor: 'text-emerald-100',
    borderColor: 'border-emerald-300/80',
    glowColor: 'rgba(110, 231, 183, 0.4)',
    keywords: ['trinamool', 'aitc', 'tmc', 'all india trinamool congress']
  },
  {
    id: 'rjd',
    nameEn: 'Rashtriya Janata Dal',
    nameHi: 'राष्ट्रीय जनता दल',
    abbr: 'RJD',
    symbolEmoji: '🏮',
    symbolLabel: 'Lantern',
    badgeBg: 'bg-gradient-to-r from-green-800 via-emerald-900 to-green-950',
    textColor: 'text-green-100',
    borderColor: 'border-green-400/80',
    glowColor: 'rgba(74, 222, 128, 0.4)',
    keywords: ['rashtriya janata dal', 'rjd']
  },
  {
    id: 'cpm',
    nameEn: 'Communist Party of India (Marxist)',
    nameHi: 'भारतीय कम्युनिस्ट पार्टी (मार्क्सवादी)',
    abbr: 'CPI(M)',
    symbolEmoji: '☭',
    symbolLabel: 'Hammer, Sickle & Star',
    badgeBg: 'bg-gradient-to-r from-red-800 via-rose-900 to-red-950',
    textColor: 'text-red-100',
    borderColor: 'border-red-500/80',
    glowColor: 'rgba(248, 113, 113, 0.4)',
    keywords: ['cpim', 'cpi(m)', 'communist party of india (marxist)', 'cpm']
  },
  {
    id: 'cpi',
    nameEn: 'Communist Party of India',
    nameHi: 'भारतीय कम्युनिस्ट पार्टी',
    abbr: 'CPI',
    symbolEmoji: '🌾',
    symbolLabel: 'Ears of Corn & Sickle',
    badgeBg: 'bg-gradient-to-r from-rose-800 via-red-900 to-amber-900',
    textColor: 'text-rose-100',
    borderColor: 'border-rose-400/80',
    glowColor: 'rgba(251, 113, 133, 0.4)',
    keywords: ['cpi', 'communist party of india']
  },
  {
    id: 'aimim',
    nameEn: 'All India Majlis-e-Ittehadul Muslimeen',
    nameHi: 'ऑल इंडिया मजलिस-ए-इत्तेहादुल मुस्लिमीन',
    abbr: 'AIMIM',
    symbolEmoji: '🪁',
    symbolLabel: 'Kite',
    badgeBg: 'bg-gradient-to-r from-emerald-900 via-green-950 to-teal-950',
    textColor: 'text-emerald-200',
    borderColor: 'border-emerald-400/80',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    keywords: ['aimim', 'majlis-e-ittehadul muslimeen', 'mim', 'majlis']
  },
  {
    id: 'tdp',
    nameEn: 'Telugu Desam Party',
    nameHi: 'तेलुगु देशम पार्टी',
    abbr: 'TDP',
    symbolEmoji: '🚲',
    symbolLabel: 'Bicycle',
    badgeBg: 'bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700',
    textColor: 'text-yellow-950',
    borderColor: 'border-yellow-300/90',
    glowColor: 'rgba(253, 224, 71, 0.4)',
    keywords: ['telugu desam', 'tdp']
  },
  {
    id: 'ysrcp',
    nameEn: 'YSR Congress Party',
    nameHi: 'वाईएसआर कांग्रेस पार्टी',
    abbr: 'YSRCP',
    symbolEmoji: '🌀',
    symbolLabel: 'Ceiling Fan',
    badgeBg: 'bg-gradient-to-r from-blue-900 via-teal-900 to-emerald-900',
    textColor: 'text-blue-100',
    borderColor: 'border-blue-400/80',
    glowColor: 'rgba(96, 165, 250, 0.4)',
    keywords: ['ysr congress', 'ysrcp', 'ysr']
  },
  {
    id: 'jdu',
    nameEn: 'Janata Dal (United)',
    nameHi: 'जनता दल (यूनाइटेड)',
    abbr: 'JD(U)',
    symbolEmoji: '🏹',
    symbolLabel: 'Arrow',
    badgeBg: 'bg-gradient-to-r from-green-800 via-emerald-800 to-teal-900',
    textColor: 'text-green-100',
    borderColor: 'border-green-400/80',
    glowColor: 'rgba(74, 222, 128, 0.4)',
    keywords: ['janata dal (united)', 'jdu', 'jd(u)', 'janata dal united']
  },
  {
    id: 'ljp',
    nameEn: 'Lok Janshakti Party',
    nameHi: 'लोक जनशक्ति पार्टी',
    abbr: 'LJP',
    symbolEmoji: '🛖',
    symbolLabel: 'Helicopter / Hut',
    badgeBg: 'bg-gradient-to-r from-sky-800 via-indigo-900 to-blue-950',
    textColor: 'text-sky-100',
    borderColor: 'border-sky-400/80',
    glowColor: 'rgba(56, 189, 248, 0.4)',
    keywords: ['lok janshakti party', 'ljp', 'ljpr', 'lok janshakti']
  },
  {
    id: 'bjd',
    nameEn: 'Biju Janata Dal',
    nameHi: 'बीजू जनता दल',
    abbr: 'BJD',
    symbolEmoji: '🐚',
    symbolLabel: 'Conch',
    badgeBg: 'bg-gradient-to-r from-emerald-800 via-green-900 to-teal-900',
    textColor: 'text-emerald-100',
    borderColor: 'border-emerald-300/80',
    glowColor: 'rgba(52, 211, 153, 0.4)',
    keywords: ['biju janata dal', 'bjd']
  },
  {
    id: 'dmk',
    nameEn: 'Dravida Munnetra Kazhagam',
    nameHi: 'द्रविड़ मुनेत्र कड़गम',
    abbr: 'DMK',
    symbolEmoji: '🌅',
    symbolLabel: 'Rising Sun',
    badgeBg: 'bg-gradient-to-r from-red-800 via-slate-900 to-black',
    textColor: 'text-red-100',
    borderColor: 'border-red-500/80',
    glowColor: 'rgba(239, 68, 68, 0.4)',
    keywords: ['dravida munnetra kazhagam', 'dmk']
  },
  {
    id: 'aiadmk',
    nameEn: 'All India Anna DMK',
    nameHi: 'ऑल इंडिया अन्ना द्रविड़ मुनेत्र कड़गम',
    abbr: 'AIADMK',
    symbolEmoji: '🍃',
    symbolLabel: 'Two Leaves',
    badgeBg: 'bg-gradient-to-r from-green-800 via-black to-red-900',
    textColor: 'text-green-100',
    borderColor: 'border-green-400/80',
    glowColor: 'rgba(74, 222, 128, 0.4)',
    keywords: ['aiadmk', 'all india anna dravida munnetra kazhagam']
  },
  {
    id: 'ind',
    nameEn: 'Independent Representative',
    nameHi: 'निर्दलीय / स्वतन्त्र जनप्रतिनिधि',
    abbr: 'Independent',
    symbolEmoji: '🏛️',
    symbolLabel: 'Public Service',
    badgeBg: 'bg-gradient-to-r from-slate-800 via-zinc-800 to-gray-900',
    textColor: 'text-amber-200',
    borderColor: 'border-amber-400/60',
    glowColor: 'rgba(251, 191, 36, 0.3)',
    keywords: ['independent', 'ind', 'nirdaliye', 'public representative', 'swatantra']
  }
];

const POLITICAL_POSITION_KEYWORDS = [
  'mp', 'member of parliament', 'parliamentarian', 'saansad', 'sansad',
  'mla', 'member of legislative assembly', 'vidhayak', 'mlc',
  'minister', 'cabinet minister', 'state minister', 'mantri',
  'mayor', 'deputy mayor', 'mahapour',
  'councillor', 'councilor', 'parshad', 'sabhasad', 'municipal councillor', 'nagar palika', 'nagar panchayat', 'nagar nigam',
  'sarpanch', 'gram pradhan', 'mukhiya', 'pradhan',
  'zila panchayat', 'district panchayat', 'panchayat president',
  'party president', 'state president', 'district president', 'jila adhyaksh', 'mandal president', 'block president', 'party office bearer',
  'politician', 'political leader', 'public representative', 'political', 'rajneetik', 'political worker', 'rajneeti'
];

/**
 * Detects if a profile belongs to a political figure and returns the PoliticalPartyInfo if applicable.
 * Returns null if the person is non-political.
 */
export function detectPoliticalParty(profile: {
  id?: string;
  politicalParty?: string;
  designation?: string;
  occupation?: string;
  organization?: string;
  categoryId?: string;
  biography?: { en?: string; hi?: string; ur?: string } | string;
  majorAchievements?: string[];
  isPolitical?: boolean;
}): PoliticalPartyInfo | null {
  if (!profile) return null;

  // Explicitly exclude these individuals from having any political party symbol
  const excludedIds = ['socialist-munshi-khan', 'socialist-rafiq-ahmad', 'socialist-nishar-khan', 'haji-asgar-sahab'];
  if (profile.id && excludedIds.includes(profile.id)) {
    return null;
  }

  const rawParty = (profile.politicalParty || '').toLowerCase().trim();

  // Do not automatically detect political party or position based on generic keywords in the future
  if (!rawParty || rawParty === 'none' || rawParty === 'auto-detect') {
    // Preserve political party only for Fakhruddin Khan explicitly
    if (profile.id === 'politician-fakhruddin-khan') {
      return POLITICAL_PARTIES.find(p => p.id === 'bjp') || null;
    }
    return null;
  }

  // If explicit party ID or party name matches directly in rawParty
  const directMatch = POLITICAL_PARTIES.find(p => 
    p.id === rawParty || 
    p.abbr.toLowerCase() === rawParty || 
    p.nameEn.toLowerCase() === rawParty || 
    p.keywords.some(k => rawParty.includes(k.toLowerCase()))
  );
  if (directMatch) return directMatch;

  return null;
}
