import { IMAGES, VIDEOS } from './mediaRegistry';

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
      IMAGES.albums.mahapanchayat_1,
      IMAGES.albums.mahapanchayat_2
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
      IMAGES.albums.historical_1,
      IMAGES.albums.historical_2
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
      IMAGES.albums.scholarship_1,
      IMAGES.albums.scholarship_2
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
      IMAGES.albums.marriage_1,
      IMAGES.albums.marriage_2
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
      IMAGES.albums.charity_1,
      IMAGES.albums.charity_2
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
    thumbnailUrl: IMAGES.thumbnails.historical_journey,
    videoUrl: VIDEOS.documentary_history,
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
    thumbnailUrl: IMAGES.thumbnails.mahapanchayat_highlights,
    videoUrl: VIDEOS.mahapanchayat_highlights,
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
    thumbnailUrl: IMAGES.thumbnails.nikah_highlights,
    videoUrl: VIDEOS.nikah_highlights,
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
