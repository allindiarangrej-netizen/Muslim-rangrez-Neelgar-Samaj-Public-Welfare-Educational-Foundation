export interface HeritageAlbum {
  id: string;
  titleEn: string;
  titleHi: string;
  eventType: string;
  category: 'Photo Gallery' | 'Event Albums' | 'Historical Archive' | 'Community Memories' | 'Awards & Achievements' | 'Press & News Gallery';
  location: {
    state: string;
    district: string;
    tehsil?: string;
    village?: string;
  };
  date: string;
  year: number;
  photographerEn: string;
  photographerHi: string;
  uploadedBy: string;
  images: string[];
  descriptionEn: string;
  descriptionHi: string;
  views: number;
  likes: number;
  featured?: boolean;
}

export interface HeritageVideo {
  id: string;
  titleEn: string;
  titleHi: string;
  eventType: string;
  category: 'Video Gallery' | 'Documentary Library';
  thumbnailUrl: string;
  videoUrl: string; // YouTube/Embed or local simulation
  platform: 'YouTube' | 'Facebook' | 'Instagram' | 'Local';
  duration: string;
  location: {
    state: string;
    district: string;
    tehsil?: string;
    village?: string;
  };
  uploadDate: string;
  year: number;
  views: number;
  likes: number;
  featured?: boolean;
}

export const eventCategories = [
  "Community Meetings",
  "Mahapanchayat",
  "Nikah",
  "Walima",
  "Education Programs",
  "Scholarship Distribution",
  "Social Reform Campaign",
  "Blood Donation",
  "Health Camp",
  "Women's Program",
  "Youth Program",
  "Religious Events",
  "Eid",
  "Ramadan",
  "Charity",
  "NGO Activities",
  "Sports",
  "Business Meet",
  "Committee Formation",
  "Historical Photos",
  "Old Memories",
  "Volunteer Activities"
];

export const initialHeritageAlbums: HeritageAlbum[] = [
  {
    id: 'alb_mahapanchayat_2026',
    titleEn: 'All India Rangrez MahaPanchayat Rally Bhopal',
    titleHi: 'अखिल भारतीय रंगरेज महापंचायत रैली भोपाल',
    eventType: 'Mahapanchayat',
    category: 'Event Albums',
    location: {
      state: 'Madhya Pradesh',
      district: 'Bhopal',
      tehsil: 'Huzur',
      village: 'Lal Parade Ground'
    },
    date: '2026-05-10',
    year: 2026,
    photographerEn: 'Siddharth Studio',
    photographerHi: 'सिद्धार्थ स्टूडियो',
    uploadedBy: 'Mohammed Adil Rangrez',
    images: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop'
    ],
    descriptionEn: 'The massive community mahapanchayat focused on education reform, dynamic socio-census updates, and state reservation representation.',
    descriptionHi: 'शिक्षा सुधार, सामाजिक जनगणना और आरक्षण प्रतिनिधित्व पर केंद्रित विशाल राष्ट्रीय सामुदायिक महापंचायत महाधिवेशन।',
    views: 1420,
    likes: 420,
    featured: true
  },
  {
    id: 'alb_heritage_leaders',
    titleEn: 'Pre-Independence Rangrez Leaders Assembly & Archive',
    titleHi: 'स्वतंत्रता पूर्व रंगरेज महापुरुषों की दुर्लभ बैठक',
    eventType: 'Historical Photos',
    category: 'Community Memories',
    location: {
      state: 'Rajasthan',
      district: 'Jaipur',
      tehsil: 'Sanganer',
      village: 'Heritage Chhipa Mohalla'
    },
    date: '1942-08-15',
    year: 2023, // Mapped to Older timeline
    photographerEn: 'Imperial Archive Jaipur',
    photographerHi: 'शाही अभिलेखागार जयपुर',
    uploadedBy: 'Al-Haaj Gulam Rasool Rangrez',
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop'
    ],
    descriptionEn: 'Extremely rare photographs preserving the historical national leadership and freedom fighters of the dyer guild.',
    descriptionHi: 'रंगाई उद्योग बिरादरी के स्वतंत्रता सेनानियों और ऐतिहासिक नेताओं की दुर्लभ ऐतिहासिक तस्वीरें।',
    views: 3100,
    likes: 980,
    featured: true
  },
  {
    id: 'alb_education_seminar_2026',
    titleEn: 'National Merit Scholarship Distribution Ceremony',
    titleHi: 'राष्ट्रीय मेधावी छात्रवृत्ति वितरण एवं सम्मान समारोह',
    eventType: 'Scholarship Distribution',
    category: 'Awards & Achievements',
    location: {
      state: 'Madhya Pradesh',
      district: 'Morena',
      tehsil: 'Kailaras',
      village: 'Town Hall'
    },
    date: '2026-06-20',
    year: 2026,
    photographerEn: 'Anas Media House',
    photographerHi: 'अनस मीडिया हाउस',
    uploadedBy: 'Janab Shakeel Ahmed Rangrez',
    images: [
      'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop'
    ],
    descriptionEn: 'Honoring top high school and university rankers with golden merit certificates and micro-scholarship funds.',
    descriptionHi: 'कक्षा 10वीं, 12वीं और विश्वविद्यालय के मेधावी छात्र-छात्राओं को स्वर्ण पदक और छात्रवृत्ति वितरण कार्यक्रम।',
    views: 850,
    likes: 310,
    featured: false
  },
  {
    id: 'alb_nikah_sammar_2025',
    titleEn: '51st Collective Marriage Sammelan Morena',
    titleHi: '51वां आदर्श सामूहिक निकाह सम्मेलन मुरैना',
    eventType: 'Nikah',
    category: 'Event Albums',
    location: {
      state: 'Madhya Pradesh',
      district: 'Morena',
      tehsil: 'Morena Tehsil',
      village: 'Bypass Shadi Ground'
    },
    date: '2025-11-25',
    year: 2025,
    photographerEn: 'Welfare Cell',
    photographerHi: 'जनकल्याण सेल',
    uploadedBy: 'Haji Mohammad Iqbal',
    images: [
      'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop'
    ],
    descriptionEn: 'The annual community wedding initiative facilitating seamless, dowry-free marriages for 51 couples with complete household kits.',
    descriptionHi: 'प्रतिवर्ष आयोजित होने वाला दहेज मुक्त सामूहिक निकाह सम्मेलन, जिसमें 51 जोड़ों का निकाह संपन्न कराया गया।',
    views: 2200,
    likes: 670,
    featured: true
  },
  {
    id: 'alb_charity_covid',
    titleEn: 'Welfare Kitchen & Ration Kit Distribution Campaign',
    titleHi: 'निःशुल्क राशन किट एवं भोजन वितरण अभियान',
    eventType: 'Charity',
    category: 'Press & News Gallery',
    location: {
      state: 'Uttar Pradesh',
      district: 'Lucknow',
      village: 'Chowk Area'
    },
    date: '2024-04-12',
    year: 2024,
    photographerEn: 'Lucknow Bureau',
    photographerHi: 'लखनऊ ब्यूरो',
    uploadedBy: 'Er. Irfan Rangrez',
    images: [
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop'
    ],
    descriptionEn: 'Emergency support program managed by state youth volunteers providing food security kits and free health checkups.',
    descriptionHi: 'युवा स्वयंसेवकों द्वारा आयोजित खाद्य सुरक्षा एवं निःशुल्क चिकित्सा शिविर कार्यक्रम।',
    views: 950,
    likes: 290,
    featured: false
  }
];

export const initialHeritageVideos: HeritageVideo[] = [
  {
    id: 'vid_documentary_rangrez',
    titleEn: 'Heritage of Dyeing: The Historical Journey of Rangrez Bharat',
    titleHi: 'रंगसाजी की विरासत: भारतीय रंगरेजों की ऐतिहासिक यात्रा',
    eventType: 'Historical Photos',
    category: 'Documentary Library',
    thumbnailUrl: 'https://images.unsplash.com/photo-1513829096999-4978602297f7?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder embed
    platform: 'YouTube',
    duration: '14:25',
    location: {
      state: 'Rajasthan',
      district: 'Jaipur',
      tehsil: 'Sanganer'
    },
    uploadDate: '2026-02-15',
    year: 2026,
    views: 4500,
    likes: 1200,
    featured: true
  },
  {
    id: 'vid_mahapanchayat_highlight',
    titleEn: 'Highlights of National Sammelan Rally Bhopal 2026',
    titleHi: 'अखिल भारतीय रंगरेज महाधिवेशन भोपाल हाइलाइट्स 2026',
    eventType: 'Mahapanchayat',
    category: 'Video Gallery',
    thumbnailUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    platform: 'YouTube',
    duration: '08:40',
    location: {
      state: 'Madhya Pradesh',
      district: 'Bhopal'
    },
    uploadDate: '2026-05-12',
    year: 2026,
    views: 2800,
    likes: 850,
    featured: true
  },
  {
    id: 'vid_nikah_highlight_2025',
    titleEn: 'Sammelan Documentary of Morena Collective Nikah',
    titleHi: 'सामूहिक निकाह सम्मेलन मुरैना ऐतिहासिक वृत्तचित्र',
    eventType: 'Nikah',
    category: 'Video Gallery',
    thumbnailUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    platform: 'Local',
    duration: '22:15',
    location: {
      state: 'Madhya Pradesh',
      district: 'Morena'
    },
    uploadDate: '2025-11-28',
    year: 2025,
    views: 1950,
    likes: 640,
    featured: false
  }
];
