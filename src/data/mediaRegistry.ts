/**
 * Centralized Media Asset Registry
 * Stores paths to static media files located in /public/images and /public/videos
 * Replacing the files in the public directory directly updates the app without changing any code.
 */

export const IMAGES = {
  logo: {
    main: '/images/logo/logo.svg'
  },
  hero: {
    community: '/images/hero/community_empowerment.svg',
    education: '/images/hero/student_education.svg',
    matrimonial: '/images/hero/matrimonial_privacy.svg'
  },
  leaders: {
    president: '/images/committees/mufti_sirajuddin.jpg',
    mufti_sirajuddin: 'https://lh3.googleusercontent.com/d/1Y1WZyKPrZDIIB1a2hvofprnIpmmkb3hn',
    secretary: '/images/committees/leader_secretary_rafiq.jpg',
    member_irfan: '/images/committees/leader_member_irfan.svg',
    member_shakeel: '/images/committees/leader_member_shakeel.svg'
  },
  avatars: {
    placeholder: '/images/committees/profile_avatar_placeholder.svg'
  },
  albums: {
    mahapanchayat_1: '/images/gallery/album_mahapanchayat_1.svg',
    mahapanchayat_2: '/images/gallery/album_mahapanchayat_2.svg',
    historical_1: '/images/gallery/album_historical_leaders_1.svg',
    historical_2: '/images/gallery/album_historical_leaders_2.svg',
    scholarship_1: '/images/gallery/album_scholarship_distribution_1.svg',
    scholarship_2: '/images/gallery/album_scholarship_distribution_2.svg',
    marriage_1: '/images/gallery/album_collective_marriage_1.svg',
    marriage_2: '/images/gallery/album_collective_marriage_2.svg',
    charity_1: '/images/gallery/album_charity_ration_1.svg',
    charity_2: '/images/gallery/album_charity_ration_2.svg'
  },
  thumbnails: {
    historical_journey: '/images/gallery/video_thumb_historical_journey.svg',
    mahapanchayat_highlights: '/images/gallery/video_thumb_mahapanchayat_highlights.svg',
    nikah_highlights: '/images/gallery/video_thumb_nikah_highlights.svg'
  }
} as const;

export const VIDEOS = {
  documentary_history: '/videos/gallery/documentary_rangrez_history.mp4',
  mahapanchayat_highlights: '/videos/events/mahapanchayat_bhopal_highlights.mp4',
  nikah_highlights: '/videos/events/nikah_morena_highlights.mp4'
} as const;

export type ImageKey = typeof IMAGES;
export type VideoKey = typeof VIDEOS;
