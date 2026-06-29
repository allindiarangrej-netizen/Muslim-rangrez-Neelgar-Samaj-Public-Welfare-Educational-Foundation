import React, { useState, useEffect, useMemo } from 'react';
import {
  Calendar,
  Image as ImageIcon,
  Video,
  FileText,
  ArrowRight,
  Clock,
  MapPin,
  X,
  Search,
  Filter,
  Heart,
  Eye,
  Share2,
  Download,
  Maximize2,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  Plus,
  Compass,
  Play,
  Tv,
  Globe,
  Settings,
  User,
  Camera,
  FolderPlus,
  Send,
  MessageSquare,
  Sparkles,
  Layers,
  Copy,
  Check,
  QrCode
} from 'lucide-react';
import { Language } from '../types';
import {
  initialHeritageAlbums,
  initialHeritageVideos,
  eventCategories,
  HeritageAlbum,
  HeritageVideo
} from '../data/heritageMedia';
import { indianStates, initialDistricts, initialTehsils, initialVillages } from '../data/nationalDirectory';

interface MediaCenterProps {
  currentLanguage: Language;
}

export default function MediaCenter({ currentLanguage }: MediaCenterProps) {
  // Navigation & Sub-Tab State
  // Media categories mapping to main menu items requested
  const [activeMenuTab, setActiveMenuTab] = useState<'Photo Gallery' | 'Video Gallery' | 'Event Albums' | 'Historical Archive' | 'Community Memories' | 'Documentary Library' | 'Awards & Achievements' | 'Press & News Gallery'>('Photo Gallery');
  
  // Storage for user uploads / modified stats (initialized from localStorage or seed data)
  const [albums, setAlbums] = useState<HeritageAlbum[]>(() => {
    const saved = localStorage.getItem('rcb_heritage_albums');
    return saved ? JSON.parse(saved) : initialHeritageAlbums;
  });

  const [videos, setVideos] = useState<HeritageVideo[]>(() => {
    const saved = localStorage.getItem('rcb_heritage_videos');
    return saved ? JSON.parse(saved) : initialHeritageVideos;
  });

  // Local comments engine mapped by item ID
  const [commentsMap, setCommentsMap] = useState<Record<string, { author: string; text: string; date: string }[]>>(() => {
    const saved = localStorage.getItem('rcb_heritage_comments');
    if (saved) return JSON.parse(saved);
    return {
      'alb_mahapanchayat_2026': [
        { author: 'Yasmeen Rangrez', text: 'This historic assembly represents our shared progress!', date: '2026-05-11 10:30' },
        { author: 'Mohammed Anas', text: 'Stunning capture of the community unity.', date: '2026-05-11 14:15' }
      ],
      'vid_documentary_rangrez': [
        { author: 'Al-Haaj Gulam Rasool', text: 'MashaAllah, extremely well-researched documentary of our dyeing roots!', date: '2026-02-16 11:00' }
      ]
    };
  });

  // Save changes to local storage
  useEffect(() => {
    localStorage.setItem('rcb_heritage_albums', JSON.stringify(albums));
  }, [albums]);

  useEffect(() => {
    localStorage.setItem('rcb_heritage_videos', JSON.stringify(videos));
  }, [videos]);

  useEffect(() => {
    localStorage.setItem('rcb_heritage_comments', JSON.stringify(commentsMap));
  }, [commentsMap]);

  // Active Hierarchical Location Filter State
  const [selectedState, setSelectedState] = useState<string>('All');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('All');
  const [selectedTehsil, setSelectedTehsil] = useState<string>('All');
  const [selectedVillage, setSelectedVillage] = useState<string>('All');

  // Event type and year filters
  const [selectedEventType, setSelectedEventType] = useState<string>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Auto-derived cascading options
  const availableDistricts = useMemo(() => {
    if (selectedState === 'All') return [];
    return initialDistricts.filter(d => d.stateId === selectedState);
  }, [selectedState]);

  const availableTehsils = useMemo(() => {
    if (selectedDistrict === 'All') return [];
    return initialTehsils.filter(t => t.districtId === selectedDistrict);
  }, [selectedDistrict]);

  const availableVillages = useMemo(() => {
    if (selectedTehsil !== 'All') {
      return initialVillages.filter(v => v.tehsilId === selectedTehsil);
    }
    if (selectedDistrict !== 'All') {
      return initialVillages.filter(v => v.districtId === selectedDistrict);
    }
    return [];
  }, [selectedTehsil, selectedDistrict]);

  // Reset cascade states on parent change
  useEffect(() => {
    setSelectedDistrict('All');
    setSelectedTehsil('All');
    setSelectedVillage('All');
  }, [selectedState]);

  useEffect(() => {
    setSelectedTehsil('All');
    setSelectedVillage('All');
  }, [selectedDistrict]);

  useEffect(() => {
    setSelectedVillage('All');
  }, [selectedTehsil]);

  // Advanced Filters & Search Logic
  const filteredAlbums = useMemo(() => {
    return albums.filter(alb => {
      // Menu Tab filter
      if (alb.category !== activeMenuTab) return false;

      // Location cascade checks
      if (selectedState !== 'All') {
        // Resolve State Name from ID
        const stateName = indianStates.find(s => s.id === selectedState)?.nameEn || '';
        if (alb.location.state.toLowerCase() !== stateName.toLowerCase()) return false;
      }
      if (selectedDistrict !== 'All') {
        const distName = initialDistricts.find(d => d.id === selectedDistrict)?.nameEn || '';
        if (alb.location.district.toLowerCase() !== distName.toLowerCase()) return false;
      }
      if (selectedTehsil !== 'All') {
        const tehName = initialTehsils.find(t => t.id === selectedTehsil)?.nameEn || '';
        if (alb.location.tehsil?.toLowerCase() !== tehName.toLowerCase()) return false;
      }
      if (selectedVillage !== 'All') {
        const vilName = initialVillages.find(v => v.id === selectedVillage)?.nameEn || '';
        if (alb.location.village?.toLowerCase() !== vilName.toLowerCase()) return false;
      }

      // Event Type filter
      if (selectedEventType !== 'All' && alb.eventType !== selectedEventType) return false;

      // Timeline Year filter
      if (selectedYear !== 'All') {
        if (selectedYear === 'Older') {
          if (alb.year >= 2023) return false;
        } else if (alb.year !== Number(selectedYear)) {
          return false;
        }
      }

      // Keyword query match
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const inTitle = alb.titleEn.toLowerCase().includes(q) || alb.titleHi.includes(q);
        const inDesc = alb.descriptionEn.toLowerCase().includes(q) || alb.descriptionHi.includes(q);
        const inAuthor = alb.photographerEn.toLowerCase().includes(q) || alb.uploadedBy.toLowerCase().includes(q);
        const inEvent = alb.eventType.toLowerCase().includes(q);
        if (!inTitle && !inDesc && !inAuthor && !inEvent) return false;
      }

      return true;
    });
  }, [albums, activeMenuTab, selectedState, selectedDistrict, selectedTehsil, selectedVillage, selectedEventType, selectedYear, searchQuery]);

  const filteredVideos = useMemo(() => {
    return videos.filter(vid => {
      // Map Video Gallery or Documentary categories to corresponding menu tabs
      if (activeMenuTab === 'Video Gallery' && vid.category !== 'Video Gallery') return false;
      if (activeMenuTab === 'Documentary Library' && vid.category !== 'Documentary Library') return false;
      if (activeMenuTab !== 'Video Gallery' && activeMenuTab !== 'Documentary Library') return false;

      // Location checks
      if (selectedState !== 'All') {
        const stateName = indianStates.find(s => s.id === selectedState)?.nameEn || '';
        if (vid.location.state.toLowerCase() !== stateName.toLowerCase()) return false;
      }
      if (selectedDistrict !== 'All') {
        const distName = initialDistricts.find(d => d.id === selectedDistrict)?.nameEn || '';
        if (vid.location.district.toLowerCase() !== distName.toLowerCase()) return false;
      }

      // Event Type check
      if (selectedEventType !== 'All' && vid.eventType !== selectedEventType) return false;

      // Timeline Year
      if (selectedYear !== 'All') {
        if (selectedYear === 'Older') {
          if (vid.year >= 2023) return false;
        } else if (vid.year !== Number(selectedYear)) {
          return false;
        }
      }

      // Search
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const match = vid.titleEn.toLowerCase().includes(q) || vid.titleHi.includes(q) || vid.eventType.toLowerCase().includes(q);
        if (!match) return false;
      }

      return true;
    });
  }, [videos, activeMenuTab, selectedState, selectedDistrict, selectedEventType, selectedYear, searchQuery]);

  // Featured and trending computations
  const featuredEvent = useMemo(() => albums.find(a => a.featured), [albums]);
  const trendingAlbum = useMemo(() => [...albums].sort((a, b) => b.views - a.views)[0], [albums]);
  const mostLikedPhoto = useMemo(() => [...albums].sort((a, b) => b.likes - a.likes)[0], [albums]);
  const mostViewedVideo = useMemo(() => [...videos].sort((a, b) => b.views - a.views)[0], [videos]);

  // Photo Lightbox State
  const [activeLightboxAlbum, setActiveLightboxAlbum] = useState<HeritageAlbum | null>(null);
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number>(0);
  const [lightboxZoom, setLightboxZoom] = useState<boolean>(false);
  const [slideshowActive, setSlideshowActive] = useState<boolean>(false);
  const [lightboxFullscreen, setLightboxFullscreen] = useState<boolean>(false);

  // Video Player State
  const [activePlayerVideo, setActivePlayerVideo] = useState<HeritageVideo | null>(null);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [simulatedPiP, setSimulatedPiP] = useState<boolean>(false);

  // Social Sharing modal states
  const [sharingItemUrl, setSharingItemUrl] = useState<string | null>(null);
  const [sharingItemTitle, setSharingItemTitle] = useState<string | null>(null);
  const [copyFeedback, setCopyFeedback] = useState<boolean>(false);
  const [showQrCode, setShowQrCode] = useState<boolean>(false);

  // Comment Writing Inputs
  const [commentName, setCommentName] = useState<string>('');
  const [commentText, setCommentText] = useState<string>('');

  // Admin upload states
  const [adminActive, setAdminActive] = useState<boolean>(false);
  const [adminMediaType, setAdminMediaType] = useState<'photo' | 'video'>('photo');
  const [newAlbumData, setNewAlbumData] = useState({
    titleEn: '',
    titleHi: '',
    eventType: 'Community Meetings',
    category: 'Photo Gallery' as any,
    stateId: 'MP',
    districtId: 'mp_morena',
    tehsilId: 'mp_morena_kailaras',
    villageName: '',
    photographerEn: '',
    photographerHi: '',
    uploadedBy: '',
    imagesInput: '',
    descriptionEn: '',
    descriptionHi: ''
  });

  const [newVideoData, setNewVideoData] = useState({
    titleEn: '',
    titleHi: '',
    eventType: 'Community Meetings',
    category: 'Video Gallery' as any,
    thumbnailUrl: '',
    videoUrl: '',
    platform: 'YouTube' as any,
    duration: '05:00',
    stateId: 'MP',
    districtId: 'mp_morena',
    descriptionEn: '',
    descriptionHi: ''
  });

  // Slideshow auto loop handler
  useEffect(() => {
    let timer: any;
    if (slideshowActive && activeLightboxAlbum) {
      timer = setInterval(() => {
        setLightboxImageIndex(prev => (prev + 1) % activeLightboxAlbum.images.length);
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [slideshowActive, activeLightboxAlbum]);

  // Social Sharing triggers
  const handleShareClick = (title: string, urlPath: string) => {
    setSharingItemTitle(title);
    setSharingItemUrl(urlPath);
  };

  const copyToClipboard = () => {
    if (sharingItemUrl) {
      navigator.clipboard.writeText(sharingItemUrl);
      setCopyFeedback(true);
      setTimeout(() => setCopyFeedback(false), 2000);
    }
  };

  // Like Handlers
  const handleLikeAlbum = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setAlbums(prev => prev.map(a => a.id === id ? { ...a, likes: a.likes + 1 } : a));
  };

  const handleLikeVideo = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setVideos(prev => prev.map(v => v.id === id ? { ...v, likes: v.likes + 1 } : v));
  };

  // Incremental View Count Simulators
  const handleViewAlbum = (album: HeritageAlbum) => {
    setAlbums(prev => prev.map(a => a.id === album.id ? { ...a, views: a.views + 1 } : a));
    setActiveLightboxAlbum(album);
    setLightboxImageIndex(0);
    setLightboxZoom(false);
    setSlideshowActive(false);
  };

  const handlePlayVideo = (vid: HeritageVideo) => {
    setVideos(prev => prev.map(v => v.id === vid.id ? { ...v, views: v.views + 1 } : v));
    setActivePlayerVideo(vid);
    setPlaybackSpeed(1);
    setSimulatedPiP(false);
  };

  // Post dynamic comment
  const handlePostComment = (itemId: string, e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    const author = commentName.trim() || 'Anonymous Member';
    const newComment = {
      author,
      text: commentText,
      date: new Date().toISOString().replace('T', ' ').slice(0, 16)
    };
    setCommentsMap(prev => ({
      ...prev,
      [itemId]: [newComment, ...(prev[itemId] || [])]
    }));
    setCommentText('');
    setCommentName('');
  };

  // Handle Admin Submissions
  const handleAdminCreateAlbum = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAlbumData.titleEn || !newAlbumData.imagesInput) {
      alert('Please fill out the Title and provide image URLs.');
      return;
    }

    // Parse Cascading locations names
    const resolvedStateName = indianStates.find(s => s.id === newAlbumData.stateId)?.nameEn || 'Madhya Pradesh';
    const resolvedDistrictName = initialDistricts.find(d => d.id === newAlbumData.districtId)?.nameEn || 'Morena';
    const resolvedTehsilName = initialTehsils.find(t => t.id === newAlbumData.tehsilId)?.nameEn || '';

    const imageArray = newAlbumData.imagesInput.split('\n').map(s => s.trim()).filter(s => s !== '');

    const added: HeritageAlbum = {
      id: `alb_${Date.now()}`,
      titleEn: newAlbumData.titleEn,
      titleHi: newAlbumData.titleHi || newAlbumData.titleEn,
      eventType: newAlbumData.eventType,
      category: newAlbumData.category,
      location: {
        state: resolvedStateName,
        district: resolvedDistrictName,
        tehsil: resolvedTehsilName || undefined,
        village: newAlbumData.villageName || undefined
      },
      date: new Date().toISOString().slice(0, 10),
      year: 2026,
      photographerEn: newAlbumData.photographerEn || 'Community Media Cell',
      photographerHi: newAlbumData.photographerHi || 'सामुदायिक मीडिया सेल',
      uploadedBy: newAlbumData.uploadedBy || 'Portal Administrator',
      images: imageArray.length > 0 ? imageArray : ['https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop'],
      descriptionEn: newAlbumData.descriptionEn || 'Custom uploaded memory album.',
      descriptionHi: newAlbumData.descriptionHi || 'कस्टम अपलोड किया गया मेमोरी एल्बम।',
      views: 12,
      likes: 2
    };

    setAlbums(prev => [added, ...prev]);
    alert('Heritage Album successfully cataloged in digital archives!');
    setNewAlbumData({
      titleEn: '',
      titleHi: '',
      eventType: 'Community Meetings',
      category: 'Photo Gallery',
      stateId: 'MP',
      districtId: 'mp_morena',
      tehsilId: 'mp_morena_kailaras',
      villageName: '',
      photographerEn: '',
      photographerHi: '',
      uploadedBy: '',
      imagesInput: '',
      descriptionEn: '',
      descriptionHi: ''
    });
    setAdminActive(false);
  };

  const handleAdminCreateVideo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newVideoData.titleEn || !newVideoData.videoUrl) {
      alert('Please fill out the Video Title and URL.');
      return;
    }

    const resolvedStateName = indianStates.find(s => s.id === newVideoData.stateId)?.nameEn || 'Madhya Pradesh';
    const resolvedDistrictName = initialDistricts.find(d => d.id === newVideoData.districtId)?.nameEn || 'Morena';

    const added: HeritageVideo = {
      id: `vid_${Date.now()}`,
      titleEn: newVideoData.titleEn,
      titleHi: newVideoData.titleHi || newVideoData.titleEn,
      eventType: newVideoData.eventType,
      category: newVideoData.category,
      thumbnailUrl: newVideoData.thumbnailUrl || 'https://images.unsplash.com/photo-1513829096999-4978602297f7?q=80&w=600&auto=format&fit=crop',
      videoUrl: newVideoData.videoUrl,
      platform: newVideoData.platform,
      duration: newVideoData.duration,
      location: {
        state: resolvedStateName,
        district: resolvedDistrictName
      },
      uploadDate: new Date().toISOString().slice(0, 10),
      year: 2026,
      views: 8,
      likes: 1
    };

    setVideos(prev => [added, ...prev]);
    alert('Heritage Video documentary added successfully!');
    setNewVideoData({
      titleEn: '',
      titleHi: '',
      eventType: 'Community Meetings',
      category: 'Video Gallery',
      thumbnailUrl: '',
      videoUrl: '',
      platform: 'YouTube',
      duration: '05:00',
      stateId: 'MP',
      districtId: 'mp_morena',
      descriptionEn: '',
      descriptionHi: ''
    });
    setAdminActive(false);
  };

  return (
    <div className="py-16 bg-[#FDFBF7] relative overflow-hidden" id="digital_heritage_gallery">
      {/* Visual background element: Islamic motif lines */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100 text-[#004B23] text-xs font-bold uppercase tracking-widest font-mono">
            <Sparkles className="h-4 w-4 text-[#D4AF37]" />
            <span>{currentLanguage === 'en' ? 'NATIONAL DIGITAL ARCHIVE' : 'राष्ट्रीय डिजिटल विरासत अभिलेखागार'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#004B23] tracking-tight">
            {currentLanguage === 'en' ? 'Digital Community Heritage Gallery' : 'डिजिटल सामुदायिक विरासत गैलरी'}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            {currentLanguage === 'en'
              ? 'A permanent visual chronicle preserving ancient artifacts, dyer guild handprints, historic resolutions, educational milestones, and social reform movements of the Rangrez biradari across Bharat.'
              : 'अखिल भारतीय स्तर पर रंगरेज बिरादरी के ऐतिहासिक प्रलेखों, सामाजिक सुधार अभियानों, सामूहिक निकाह कार्यक्रमों और मेधावी छात्र सम्मान समारोहों को संजोने वाला एक डिजिटल संग्रहालय।'}
          </p>
        </div>

        {/* ================= AUTOMATIC ORGANIZATION FOLDERS & STATS CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" id="heritage_organization_folders">
          
          <div className="bg-[#004B23] text-white p-5 rounded-2xl border border-[#D4AF37]/30 shadow-md flex items-center space-x-4 group hover:border-[#D4AF37] transition duration-300">
            <div className="p-3 bg-white/10 rounded-xl text-[#D4AF37]">
              <Layers className="h-6 w-6" />
            </div>
            <div>
              <p className="text-[10px] text-emerald-200 uppercase tracking-widest font-mono">Archive Structure</p>
              <p className="text-sm font-bold text-white mt-1">/Media/Photos/2026</p>
              <p className="text-[9px] text-[#D4AF37] font-mono mt-0.5">Auto-categorized folders</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-150 shadow-sm flex items-center space-x-4 hover:shadow-md transition">
            <div className="p-3 bg-amber-50 rounded-xl text-[#D4AF37]">
              <Compass className="h-6 w-6" />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">Featured Event</p>
              <p className="text-sm font-serif font-extrabold text-[#004B23] truncate max-w-[160px]">
                {featuredEvent ? (currentLanguage === 'en' ? featuredEvent.titleEn : featuredEvent.titleHi) : 'MahaPanchayat'}
              </p>
              <p className="text-[9px] text-gray-400 font-mono mt-0.5">Top featured campaign</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-150 shadow-sm flex items-center space-x-4 hover:shadow-md transition">
            <div className="p-3 bg-red-50 rounded-xl text-red-600">
              <Heart className="h-6 w-6" />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">Most Liked Photo</p>
              <p className="text-sm font-serif font-extrabold text-[#004B23] truncate max-w-[160px]">
                {mostLikedPhoto ? (currentLanguage === 'en' ? mostLikedPhoto.titleEn : mostLikedPhoto.titleHi) : 'Wedding'}
              </p>
              <p className="text-[9px] text-gray-400 font-mono mt-0.5">With {mostLikedPhoto?.likes || 0} ♥ reactions</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-150 shadow-sm flex items-center space-x-4 hover:shadow-md transition">
            <div className="p-3 bg-emerald-50 rounded-xl text-[#004B23]">
              <Eye className="h-6 w-6" />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">Trending Video</p>
              <p className="text-sm font-serif font-extrabold text-[#004B23] truncate max-w-[160px]">
                {mostViewedVideo ? (currentLanguage === 'en' ? mostViewedVideo.titleEn : mostViewedVideo.titleHi) : 'Documentary'}
              </p>
              <p className="text-[9px] text-gray-400 font-mono mt-0.5">Views: {mostViewedVideo?.views || 0}</p>
            </div>
          </div>

        </div>

        {/* ================= MAIN MEDIA CENTER MENU ================= */}
        <div className="bg-[#004B23]/5 p-2 rounded-2xl border border-[#004B23]/10 flex flex-wrap justify-center gap-1 sm:gap-2">
          {([
            'Photo Gallery',
            'Video Gallery',
            'Event Albums',
            'Historical Archive',
            'Community Memories',
            'Documentary Library',
            'Awards & Achievements',
            'Press & News Gallery'
          ] as const).map(tab => (
            <button
              key={tab}
              onClick={() => {
                setActiveMenuTab(tab);
                setSearchQuery('');
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeMenuTab === tab
                  ? 'bg-[#004B23] text-white shadow-lg border border-[#D4AF37]/50'
                  : 'text-gray-700 hover:bg-white hover:text-[#004B23]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ================= ADVANCED DRILLDOWN SEARCH & CASCADING FILTERS ================= */}
        <div className="bg-white p-6 rounded-3xl border border-gray-150 shadow-sm space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            
            {/* Real-time search keyword */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder={currentLanguage === 'en' ? "Search archives by keyword, tags, photographer, year..." : "कीवर्ड, टैग, वर्ष या फोटोग्राफर द्वारा खोजें..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 text-xs sm:text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B23] focus:border-transparent text-gray-800"
              />
            </div>

            {/* Quick Action: Open Upload Panel */}
            <button
              onClick={() => setAdminActive(true)}
              className="px-5 py-3 bg-[#004B23] text-white hover:bg-emerald-950 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center space-x-2 border border-[#D4AF37]/40 transition"
            >
              <FolderPlus className="h-4 w-4 text-[#D4AF37]" />
              <span>{currentLanguage === 'en' ? 'Upload Heritage Media' : 'मीडिया अपलोड करें'}</span>
            </button>
          </div>

          {/* Cascading Location Filter Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
            
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">State Coverage</label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full bg-white border border-gray-200 text-xs text-gray-700 p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#004B23]"
              >
                <option value="All">All of India</option>
                {indianStates.map(s => (
                  <option key={s.id} value={s.id}>{currentLanguage === 'en' ? s.nameEn : s.nameHi}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">District Node</label>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                disabled={selectedState === 'All'}
                className="w-full bg-white border border-gray-200 text-xs text-gray-700 p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#004B23] disabled:opacity-50"
              >
                <option value="All">All Districts</option>
                {availableDistricts.map(d => (
                  <option key={d.id} value={d.id}>{currentLanguage === 'en' ? d.nameEn : d.nameHi}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Tehsil Hub</label>
              <select
                value={selectedTehsil}
                onChange={(e) => setSelectedTehsil(e.target.value)}
                disabled={selectedDistrict === 'All'}
                className="w-full bg-white border border-gray-200 text-xs text-gray-700 p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#004B23] disabled:opacity-50"
              >
                <option value="All">All Tehsils</option>
                {availableTehsils.map(t => (
                  <option key={t.id} value={t.id}>{currentLanguage === 'en' ? t.nameEn : t.nameHi}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Village/Ward</label>
              <select
                value={selectedVillage}
                onChange={(e) => setSelectedVillage(e.target.value)}
                disabled={selectedDistrict === 'All'}
                className="w-full bg-white border border-gray-200 text-xs text-gray-700 p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#004B23] disabled:opacity-50"
              >
                <option value="All">All Villages/Wards</option>
                {availableVillages.map(v => (
                  <option key={v.id} value={v.id}>{currentLanguage === 'en' ? v.nameEn : v.nameHi}</option>
                ))}
              </select>
            </div>

            {/* Event & Timeline Filters */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Event Type</label>
                <select
                  value={selectedEventType}
                  onChange={(e) => setSelectedEventType(e.target.value)}
                  className="w-full bg-white border border-gray-200 text-xs text-gray-700 p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                >
                  <option value="All">All Events</option>
                  {eventCategories.map(ev => (
                    <option key={ev} value={ev}>{ev}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Timeline Mode</label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full bg-white border border-gray-200 text-xs text-gray-700 p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                >
                  <option value="All">All Years</option>
                  <option value="2026">2026</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="Older">Older Years</option>
                </select>
              </div>
            </div>

          </div>

          {/* Quick Clear Filter feedback */}
          {(selectedState !== 'All' || selectedEventType !== 'All' || selectedYear !== 'All' || searchQuery !== '') && (
            <div className="flex items-center justify-between text-xs bg-amber-50 p-3 rounded-xl border border-amber-100">
              <span className="text-[#004B23] font-medium">
                Active Filter parameters: {selectedState !== 'All' && `State Code: ${selectedState} • `} {selectedEventType !== 'All' && `Event: ${selectedEventType} • `} {selectedYear !== 'All' && `Timeline Year: ${selectedYear}`}
              </span>
              <button
                onClick={() => {
                  setSelectedState('All');
                  setSelectedEventType('All');
                  setSelectedYear('All');
                  setSearchQuery('');
                }}
                className="text-xs font-bold text-red-600 hover:text-red-700 uppercase tracking-wider font-mono"
              >
                Reset Filter Panel
              </button>
            </div>
          )}

        </div>

        {/* ================= PHOTO ALBUMS / VIDEO GALLERY CARDS RENDERER ================= */}
        <div id="media_center_main_view">
          
          {/* A: Photo Archives View */}
          {activeMenuTab !== 'Video Gallery' && activeMenuTab !== 'Documentary Library' ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-gray-150 pb-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#004B23] font-mono flex items-center space-x-2">
                  <ImageIcon className="h-4 w-4 text-[#D4AF37]" />
                  <span>{activeMenuTab} Archives ({filteredAlbums.length} available)</span>
                </h3>
                <span className="text-xs text-gray-400 font-mono">India / {selectedState === 'All' ? 'National' : selectedState}</span>
              </div>

              {filteredAlbums.length === 0 ? (
                <div className="bg-gray-50 border border-gray-150 rounded-2xl p-12 text-center space-y-4">
                  <div className="p-4 bg-emerald-50 rounded-full inline-block text-[#D4AF37]">
                    <SlidersHorizontal className="h-8 w-8" />
                  </div>
                  <h4 className="text-base font-serif font-extrabold text-[#004B23]">No Heritage Archives Found</h4>
                  <p className="text-xs text-gray-500 max-w-md mx-auto">
                    Try adjusting your cascading filters or search keyword above. You can also upload your own family memoirs via the upload portal.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="heritage_photo_grid">
                  {filteredAlbums.map(album => (
                    <div
                      key={album.id}
                      onClick={() => handleViewAlbum(album)}
                      className="group bg-white rounded-2xl overflow-hidden border border-gray-150 shadow-sm hover:shadow-xl hover:shadow-[#004B23]/5 hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between cursor-pointer"
                    >
                      <div className="relative h-48 overflow-hidden bg-gray-100">
                        <img
                          src={album.images[0]}
                          alt={album.titleEn}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center group-hover:scale-110 group-hover:brightness-105 transition-all duration-500"
                        />
                        {/* Overlay Category badge */}
                        <span className="absolute top-3 left-3 bg-[#004B23] text-white font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm border border-[#D4AF37]/30">
                          {album.eventType}
                        </span>
                        
                        {/* Interactive reaction bar */}
                        <div className="absolute bottom-3 right-3 flex space-x-1.5 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg text-white text-[10px] font-mono">
                          <button
                            onClick={(e) => handleLikeAlbum(album.id, e)}
                            className="flex items-center space-x-1 hover:text-red-400 transition"
                          >
                            <Heart className="h-3 w-3 fill-red-500 text-red-500" />
                            <span>{album.likes}</span>
                          </button>
                          <span className="opacity-50">|</span>
                          <span className="flex items-center space-x-1">
                            <Eye className="h-3 w-3 text-gray-300" />
                            <span>{album.views}</span>
                          </span>
                        </div>
                      </div>

                      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-1 text-[10px] text-gray-400 font-mono">
                            <MapPin className="h-3 w-3 text-[#D4AF37]" />
                            <span className="truncate max-w-[150px]">{album.location.district}, {album.location.state}</span>
                            <span>•</span>
                            <span>{album.year}</span>
                          </div>

                          <h4 className="text-sm font-serif font-extrabold text-[#004B23] line-clamp-2 group-hover:text-[#D4AF37] transition">
                            {currentLanguage === 'en' ? album.titleEn : album.titleHi}
                          </h4>

                          <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed font-light">
                            {currentLanguage === 'en' ? album.descriptionEn : album.descriptionHi}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-gray-50 flex items-center justify-between">
                          <span className="text-[10px] text-gray-400 font-mono">
                            {album.images.length} {currentLanguage === 'en' ? 'Photos' : 'तस्वीरें'}
                          </span>
                          <span className="text-[10px] font-bold text-[#004B23] uppercase tracking-wider group-hover:text-[#D4AF37] flex items-center space-x-1 transition">
                            <span>{currentLanguage === 'en' ? 'View Album' : 'एल्बम देखें'}</span>
                            <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            
            /* B: Video Gallery View */
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-gray-150 pb-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#004B23] font-mono flex items-center space-x-2">
                  <Video className="h-4 w-4 text-[#D4AF37]" />
                  <span>{activeMenuTab} ({filteredVideos.length} Documentaries)</span>
                </h3>
              </div>

              {filteredVideos.length === 0 ? (
                <div className="bg-gray-50 border border-gray-150 rounded-2xl p-12 text-center space-y-4">
                  <div className="p-4 bg-emerald-50 rounded-full inline-block text-[#D4AF37]">
                    <Video className="h-8 w-8" />
                  </div>
                  <h4 className="text-base font-serif font-extrabold text-[#004B23]">No Community Documentaries Available</h4>
                  <p className="text-xs text-gray-500">No videos exist matching the current search parameters.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="heritage_video_grid">
                  {filteredVideos.map(vid => (
                    <div
                      key={vid.id}
                      onClick={() => handlePlayVideo(vid)}
                      className="group bg-white rounded-2xl overflow-hidden border border-gray-150 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between cursor-pointer"
                    >
                      <div className="relative h-44 bg-black overflow-hidden">
                        <img
                          src={vid.thumbnailUrl}
                          alt={vid.titleEn}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-95 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-80 group-hover:opacity-100 transition">
                          <div className="p-3 bg-[#004B23]/90 text-white rounded-full border border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-emerald-950 shadow-lg transform transition duration-300">
                            <Play className="h-6 w-6 fill-current text-white" />
                          </div>
                        </div>

                        <span className="absolute bottom-3 left-3 bg-black/60 text-white text-[10px] font-mono px-2 py-0.5 rounded">
                          {vid.duration}
                        </span>

                        <span className="absolute top-3 right-3 bg-[#D4AF37] text-[#004B23] font-mono text-[9px] font-bold px-2 py-0.5 rounded">
                          {vid.platform}
                        </span>
                      </div>

                      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                        <div className="space-y-1">
                          <p className="text-[10px] text-gray-400 font-mono flex items-center space-x-1">
                            <MapPin className="h-3 w-3 text-[#D4AF37]" />
                            <span>{vid.location.state} • {vid.year}</span>
                          </p>
                          <h4 className="text-sm font-serif font-extrabold text-[#004B23] line-clamp-2">
                            {currentLanguage === 'en' ? vid.titleEn : vid.titleHi}
                          </h4>
                        </div>

                        <div className="pt-2 border-t border-gray-50 flex items-center justify-between text-xs text-gray-500">
                          <span className="font-mono text-[10px]">{vid.views} views</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleShareClick(vid.titleEn, `https://rangrezcommunity.org/videos/${vid.id}`);
                            }}
                            className="p-1.5 hover:bg-emerald-50 rounded-lg text-gray-500 hover:text-[#004B23] transition"
                            title="Share Video"
                          >
                            <Share2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          )}

        </div>

        {/* ================= PRESERVED SPECIAL SECTION: "COMMUNITY MEMORIES" DIGITAL MUSEUM ================= */}
        <section className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 p-6 sm:p-10 rounded-3xl border-2 border-[#D4AF37]/40 shadow-2xl relative overflow-hidden" id="community_memories_museum">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-block bg-[#D4AF37]/15 border border-[#D4AF37]/40 px-3.5 py-1.5 rounded-full text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-widest">
                🏺 DIGITAL MUSEUM FRAME
              </div>
              <h3 className="text-2xl sm:text-4xl font-serif font-extrabold text-[#D4AF37] tracking-tight">
                {currentLanguage === 'en' ? 'The Heritage Memorial Room' : 'ऐतिहासिक स्मृति वीथिका'}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 font-light leading-relaxed">
                Step inside our digital vault of pre-independence records, guild charters from Mughal eras, traditional dyewood formulas, freedom fighters journals, and portraits of early reform leaders.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    setActiveMenuTab('Community Memories');
                    setSearchQuery('');
                  }}
                  className="px-5 py-2.5 bg-[#D4AF37] text-[#004B23] font-bold text-xs uppercase rounded-xl border border-[#D4AF37] hover:bg-[#c49f27] transition"
                >
                  {currentLanguage === 'en' ? 'Enter Memories Archive' : 'संग्रह प्रवेश करें'}
                </button>
              </div>
            </div>

            {/* Render 3 horizontal museum style items side by side */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {albums.filter(a => a.category === 'Community Memories').slice(0, 3).map(mem => (
                <div
                  key={mem.id}
                  onClick={() => handleViewAlbum(mem)}
                  className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-[#D4AF37] transition duration-300 cursor-pointer space-y-3"
                >
                  <img
                    src={mem.images[0]}
                    alt={mem.titleEn}
                    referrerPolicy="no-referrer"
                    className="w-full h-24 object-cover rounded-lg filter sepia"
                  />
                  <div className="space-y-1">
                    <span className="text-[9px] text-[#D4AF37] font-mono">{mem.date}</span>
                    <h5 className="text-xs font-serif font-bold text-white line-clamp-1">{mem.titleEn}</h5>
                    <p className="text-[10px] text-emerald-200 line-clamp-2">{mem.descriptionEn}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= METADATA & SEO ENGINE ROTATION PREVIEW ================= */}
        <div className="bg-white p-6 rounded-3xl border border-gray-150 shadow-sm space-y-4" id="seo_engine_panel">
          <div className="flex items-center space-x-2 border-b border-gray-100 pb-2">
            <Globe className="h-5 w-5 text-[#D4AF37]" />
            <h4 className="text-xs font-bold text-[#004B23] uppercase tracking-widest font-mono">
              Live Search Engine Schema Generator
            </h4>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-xs font-mono">
            
            <div className="p-4 bg-gray-50 rounded-xl space-y-2">
              <span className="font-bold text-[#004B23]">Generated SEO Canonical URL:</span>
              <p className="text-gray-600 truncate bg-white p-2 rounded border border-gray-200">
                https://rangrezcommunity.org/photos/{selectedState.toLowerCase()}/{selectedDistrict.toLowerCase()}/{activeMenuTab.toLowerCase().replace(/\s+/g, '-')}
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl space-y-2">
              <span className="font-bold text-[#004B23]">SEO Meta Title & Desc:</span>
              <p className="text-gray-800 font-bold font-sans">
                {activeMenuTab} - State: {selectedState} | National Archives
              </p>
              <p className="text-gray-500 font-sans line-clamp-2 text-[11px]">
                Explore verified media albums for {activeMenuTab} in India. Track historic dyer guild photographs and social campaigns.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#004B23]">Schema.org Breadcrumb JSON:</span>
                <span className="text-[10px] text-green-700 bg-green-50 px-2 rounded font-sans font-bold">Validated</span>
              </div>
              <pre className="text-[9px] text-gray-500 max-h-[80px] overflow-y-auto bg-white p-1 rounded border">
{`{
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "${activeMenuTab}",
  "provider": "MahaSabha Digital Board"
}`}
              </pre>
            </div>

          </div>
        </div>

      </div>

      {/* ======================================================== */}
      {/* PHOTO GALLERY LIGHTBOX VIEW COMPONENT MODAL */}
      {/* ======================================================== */}
      {activeLightboxAlbum && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4" id="photo_lightbox_modal">
          
          <div className="absolute inset-x-0 top-0 p-4 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between z-20 text-white">
            <div>
              <span className="text-[10px] text-[#D4AF37] font-mono tracking-widest uppercase">
                {activeLightboxAlbum.category} • Image {lightboxImageIndex + 1} of {activeLightboxAlbum.images.length}
              </span>
              <h3 className="text-sm sm:text-lg font-serif font-bold truncate max-w-sm sm:max-w-xl">
                {currentLanguage === 'en' ? activeLightboxAlbum.titleEn : activeLightboxAlbum.titleHi}
              </h3>
            </div>

            <div className="flex items-center space-x-2">
              {/* Slideshow mode */}
              <button
                onClick={() => {
                  setSlideshowActive(!slideshowActive);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition ${slideshowActive ? 'bg-red-600 text-white' : 'bg-white/10 hover:bg-white/25 text-white'}`}
              >
                {slideshowActive ? '■ STOP' : '▶ AUTO PLAY'}
              </button>

              <button
                onClick={() => setLightboxZoom(!lightboxZoom)}
                className="p-2 hover:bg-white/15 rounded-lg text-white"
                title="Toggle Zoom"
              >
                <Maximize2 className="h-5 w-5" />
              </button>

              <button
                onClick={() => {
                  setActiveLightboxAlbum(null);
                  setSlideshowActive(false);
                }}
                className="p-2 bg-white/15 hover:bg-white/30 rounded-lg text-white transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Left Arrow */}
          <button
            onClick={() => setLightboxImageIndex(prev => (prev - 1 + activeLightboxAlbum.images.length) % activeLightboxAlbum.images.length)}
            className="absolute left-4 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full z-20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Core Image Display View */}
          <div className="flex flex-col items-center justify-center max-w-4xl max-h-[75vh] transition-all duration-300 z-10">
            <img
              src={activeLightboxAlbum.images[lightboxImageIndex]}
              alt={activeLightboxAlbum.titleEn}
              referrerPolicy="no-referrer"
              className={`max-w-full max-h-[60vh] object-contain rounded-xl border border-white/10 transition-transform duration-300 ${lightboxZoom ? 'scale-125 cursor-zoom-out' : 'scale-100'}`}
              onClick={() => setLightboxZoom(!lightboxZoom)}
            />

            {/* Caption Info Plate */}
            <div className="mt-4 text-center max-w-2xl text-white space-y-1">
              <p className="text-xs text-gray-300 font-light px-4">
                {currentLanguage === 'en' ? activeLightboxAlbum.descriptionEn : activeLightboxAlbum.descriptionHi}
              </p>
              <div className="flex justify-center items-center space-x-4 text-[10px] text-gray-400 font-mono pt-1">
                <span>📍 {activeLightboxAlbum.location.village || activeLightboxAlbum.location.district}, {activeLightboxAlbum.location.state}</span>
                <span>•</span>
                <span>📷 {currentLanguage === 'en' ? activeLightboxAlbum.photographerEn : activeLightboxAlbum.photographerHi}</span>
                <span>•</span>
                <span>Uploaded by: {activeLightboxAlbum.uploadedBy}</span>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => setLightboxImageIndex(prev => (prev + 1) % activeLightboxAlbum.images.length)}
            className="absolute right-4 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full z-20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Lightbox Sidebar Panel: Stateful Reactions & Verified Commenting */}
          <div className="absolute right-0 bottom-0 top-16 w-full lg:w-96 bg-[#001f0e]/95 backdrop-blur-md border-l border-white/10 p-5 overflow-y-auto text-white z-20 flex flex-col justify-between hidden lg:flex">
            
            <div className="space-y-6 flex-1">
              {/* Metrics Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs text-[#D4AF37] font-mono uppercase tracking-widest">Digital Vault reactions</span>
                <div className="flex space-x-2 text-xs">
                  <button
                    onClick={() => handleLikeAlbum(activeLightboxAlbum.id)}
                    className="flex items-center space-x-1 hover:text-red-400 transition"
                  >
                    <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                    <span>{activeLightboxAlbum.likes} Likes</span>
                  </button>
                  <span className="opacity-45">|</span>
                  <span>{activeLightboxAlbum.views} views</span>
                </div>
              </div>

              {/* Action Buttons: Download & Social Share Link */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => alert('Your download request has been dispatched to high-speed CDN. Check downloads directory.')}
                  className="py-2.5 bg-emerald-800 hover:bg-emerald-700 text-xs font-bold rounded-lg flex items-center justify-center space-x-1.5 transition"
                >
                  <Download className="h-3.5 w-3.5 text-[#D4AF37]" />
                  <span>Download High-Res</span>
                </button>

                <button
                  onClick={() => handleShareClick(activeLightboxAlbum.titleEn, `https://rangrezcommunity.org/photos/${activeLightboxAlbum.id}`)}
                  className="py-2.5 bg-white/10 hover:bg-white/20 text-xs font-bold rounded-lg flex items-center justify-center space-x-1.5 transition"
                >
                  <Share2 className="h-3.5 w-3.5 text-white" />
                  <span>Share Album</span>
                </button>
              </div>

              {/* Real-time Verified Comments Log */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-gray-400 font-mono uppercase">Verified Community Log ({commentsMap[activeLightboxAlbum.id]?.length || 0})</span>
                  <MessageSquare className="h-4 w-4 text-[#D4AF37]" />
                </div>

                <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
                  {(commentsMap[activeLightboxAlbum.id] || []).length === 0 ? (
                    <p className="text-[10px] text-gray-400 text-center py-4">No comments posted yet. Be the first to express solidarity!</p>
                  ) : (
                    commentsMap[activeLightboxAlbum.id].map((c, i) => (
                      <div key={i} className="p-2.5 bg-white/5 rounded-lg space-y-1 text-[11px] border border-white/5">
                        <div className="flex justify-between items-center">
                          <p className="font-bold text-[#D4AF37]">{c.author}</p>
                          <span className="text-[9px] text-gray-400">{c.date}</span>
                        </div>
                        <p className="text-gray-200">{c.text}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Quick comment writer */}
            <form onSubmit={(e) => handlePostComment(activeLightboxAlbum.id, e)} className="border-t border-white/10 pt-4 space-y-2.5">
              <input
                type="text"
                placeholder="Your Name (optional)"
                value={commentName}
                onChange={(e) => setCommentName(e.target.value)}
                className="w-full bg-white/10 border border-white/10 p-2 text-xs rounded focus:outline-none text-white focus:border-[#D4AF37]"
              />
              <div className="relative">
                <input
                  type="text"
                  placeholder="Express your congratulations..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="w-full bg-white/10 border border-white/10 p-2 pr-10 text-xs rounded focus:outline-none text-white focus:border-[#D4AF37]"
                />
                <button type="submit" className="absolute right-2 top-2 text-[#D4AF37] hover:text-white transition">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>

          </div>

        </div>
      )}

      {/* ======================================================== */}
      {/* VIDEO PLAYER VIEW COMPONENT MODAL */}
      {/* ======================================================== */}
      {activePlayerVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" id="video_player_modal">
          
          <div className="bg-[#002B15] border-2 border-[#D4AF37]/50 w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]">
            
            {/* Left: Responsive Video stage */}
            <div className="flex-1 bg-black flex flex-col justify-between p-4 relative">
              
              <div className="flex items-center justify-between text-white z-10 pb-3">
                <div>
                  <span className="text-[9px] text-[#D4AF37] font-mono tracking-widest uppercase">Verified Documentary Play</span>
                  <h3 className="text-sm font-serif font-bold">{activePlayerVideo.titleEn}</h3>
                </div>
                <button
                  onClick={() => setActivePlayerVideo(null)}
                  className="p-1.5 bg-white/15 hover:bg-white/25 rounded-lg text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Embed Screen / Video player box */}
              <div className="aspect-video w-full bg-neutral-900 rounded-xl relative overflow-hidden border border-white/10 flex items-center justify-center">
                
                {/* Simulated Youtube/Local iframe */}
                <iframe
                  width="100%"
                  height="100%"
                  src={`${activePlayerVideo.videoUrl}?autoplay=1&mute=1`}
                  title="Documentary Viewer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>

                {/* PiP Overlay indicator if active */}
                {simulatedPiP && (
                  <div className="absolute bottom-4 right-4 bg-emerald-950/90 text-white p-3 rounded-lg border border-[#D4AF37] text-xs font-mono z-20 flex items-center space-x-2 animate-pulse">
                    <Tv className="h-4 w-4 text-[#D4AF37]" />
                    <span>Picture-in-Picture active</span>
                  </div>
                )}
              </div>

              {/* Dynamic Video Player Controls (custom duration, speed modifiers, likes) */}
              <div className="flex items-center justify-between text-white text-xs pt-4 border-t border-white/10 mt-3">
                <div className="flex items-center space-x-4">
                  <span className="text-[10px] text-gray-400 font-mono">Platform: {activePlayerVideo.platform}</span>
                  <div className="flex items-center space-x-1 text-[11px]">
                    <span className="text-gray-400">Speed:</span>
                    <button onClick={() => setPlaybackSpeed(0.5)} className={`px-1.5 py-0.5 rounded ${playbackSpeed === 0.5 ? 'bg-[#D4AF37] text-emerald-950 font-bold' : 'hover:bg-white/10'}`}>0.5x</button>
                    <button onClick={() => setPlaybackSpeed(1)} className={`px-1.5 py-0.5 rounded ${playbackSpeed === 1 ? 'bg-[#D4AF37] text-emerald-950 font-bold' : 'hover:bg-white/10'}`}>1x</button>
                    <button onClick={() => setPlaybackSpeed(1.5)} className={`px-1.5 py-0.5 rounded ${playbackSpeed === 1.5 ? 'bg-[#D4AF37] text-emerald-950 font-bold' : 'hover:bg-white/10'}`}>1.5x</button>
                    <button onClick={() => setPlaybackSpeed(2)} className={`px-1.5 py-0.5 rounded ${playbackSpeed === 2 ? 'bg-[#D4AF37] text-emerald-950 font-bold' : 'hover:bg-white/10'}`}>2x</button>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setSimulatedPiP(!simulatedPiP)}
                    className={`px-3 py-1 rounded text-[10px] font-mono border transition ${simulatedPiP ? 'bg-[#D4AF37] text-emerald-950 border-[#D4AF37]' : 'border-white/20 hover:bg-white/10'}`}
                  >
                    PIP MODE
                  </button>
                  <button
                    onClick={() => handleLikeVideo(activePlayerVideo.id)}
                    className="p-1 text-red-400 hover:text-red-500 flex items-center space-x-1 font-mono text-[11px]"
                  >
                    <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                    <span>{activePlayerVideo.likes}</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Right: Comments, Stats and Related Playlists */}
            <div className="w-full lg:w-80 bg-[#001D0F] p-5 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 overflow-y-auto max-h-[450px] lg:max-h-none">
              
              <div className="space-y-6 flex-1">
                <div>
                  <span className="text-[10px] text-[#D4AF37] font-mono uppercase tracking-widest">Census Location Tags</span>
                  <p className="text-xs text-gray-300 mt-1">📍 {activePlayerVideo.location.state} National Chapter</p>
                  <p className="text-[11px] text-gray-400 mt-1">Uploaded on: {activePlayerVideo.uploadDate}</p>
                </div>

                {/* Related Videos Playlist */}
                <div className="space-y-2">
                  <span className="text-[10px] text-gray-400 font-mono uppercase">Related documentaries</span>
                  <div className="space-y-2">
                    {videos.filter(v => v.id !== activePlayerVideo.id).slice(0, 2).map(rv => (
                      <div
                        key={rv.id}
                        onClick={() => handlePlayVideo(rv)}
                        className="flex items-center space-x-2.5 p-2 bg-white/5 rounded-lg hover:bg-white/10 cursor-pointer transition text-xs border border-white/5"
                      >
                        <img src={rv.thumbnailUrl} alt={rv.titleEn} referrerPolicy="no-referrer" className="w-12 h-10 object-cover rounded" />
                        <div className="flex-1 truncate">
                          <p className="font-bold truncate text-gray-200">{rv.titleEn}</p>
                          <p className="text-[9px] text-gray-400 font-mono">{rv.duration} • {rv.views} views</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Video Comment Log */}
                <div className="space-y-2.5">
                  <div className="flex justify-between text-[10px] text-gray-400 uppercase font-mono">
                    <span>Video comments ({commentsMap[activePlayerVideo.id]?.length || 0})</span>
                  </div>

                  <div className="space-y-2 max-h-[120px] overflow-y-auto">
                    {(commentsMap[activePlayerVideo.id] || []).length === 0 ? (
                      <p className="text-[10px] text-gray-400 text-center py-2">Express your opinion below!</p>
                    ) : (
                      commentsMap[activePlayerVideo.id].map((c, i) => (
                        <div key={i} className="p-2 bg-white/5 rounded text-[10px]">
                          <p className="font-bold text-[#D4AF37]">{c.author}</p>
                          <p className="text-gray-300 mt-0.5">{c.text}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>

              </div>

              {/* Comment submission form */}
              <form onSubmit={(e) => handlePostComment(activePlayerVideo.id, e)} className="pt-4 border-t border-white/10 space-y-2">
                <input
                  type="text"
                  placeholder="Express your name"
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 p-1.5 text-[10px] text-white focus:outline-none focus:border-[#D4AF37]"
                />
                <input
                  type="text"
                  placeholder="Add public video feedback..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 p-1.5 text-[10px] text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </form>

            </div>

          </div>

        </div>
      )}

      {/* ======================================================== */}
      {/* SOCIAL SHARING MODAL CONTROLLER */}
      {/* ======================================================== */}
      {sharingItemUrl && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border-2 border-[#D4AF37] rounded-3xl p-6 w-full max-w-md shadow-2xl relative space-y-6">
            
            <button
              onClick={() => {
                setSharingItemUrl(null);
                setShowQrCode(false);
              }}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 rounded-lg transition"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center space-y-2">
              <span className="text-[#004B23] text-[10px] font-mono font-bold uppercase tracking-widest block">SOCIAL MULTI-CHANNEL SHARE</span>
              <h3 className="text-sm sm:text-base font-serif font-extrabold text-[#004B23] line-clamp-2">
                {sharingItemTitle}
              </h3>
            </div>

            {/* Simulated Share Channel links */}
            <div className="grid grid-cols-4 gap-3 text-center text-xs">
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(sharingItemTitle || '')}%20${encodeURIComponent(sharingItemUrl)}`}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition text-emerald-800 font-bold space-y-1"
              >
                <div className="mx-auto text-emerald-700">💬</div>
                <span>WhatsApp</span>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition text-blue-800 font-bold space-y-1"
              >
                <div className="mx-auto text-blue-700">👥</div>
                <span>Facebook</span>
              </a>

              <a
                href="https://telegram.me"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-sky-50 hover:bg-sky-100 rounded-xl transition text-sky-800 font-bold space-y-1"
              >
                <div className="mx-auto text-sky-700">✈️</div>
                <span>Telegram</span>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition text-gray-800 font-bold space-y-1"
              >
                <div className="mx-auto text-black">✖</div>
                <span>Twitter / X</span>
              </a>
            </div>

            {/* Direct Copy link and QR simulation */}
            <div className="space-y-3 pt-3 border-t border-gray-100">
              <div className="flex items-center justify-between text-xs font-mono bg-gray-50 p-2.5 rounded-lg border border-gray-200">
                <span className="text-gray-500 truncate mr-2">{sharingItemUrl}</span>
                <button
                  onClick={copyToClipboard}
                  className="p-1.5 bg-emerald-50 text-[#004B23] hover:bg-[#004B23] hover:text-white rounded transition flex items-center space-x-1"
                >
                  {copyFeedback ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  <span className="text-[10px] font-bold font-sans">{copyFeedback ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* QR Toggle button */}
              <button
                onClick={() => setShowQrCode(!showQrCode)}
                className="w-full py-2 bg-[#004B23] hover:bg-emerald-950 text-[#D4AF37] rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2"
              >
                <QrCode className="h-4 w-4" />
                <span>{showQrCode ? 'Hide QR Code' : 'Generate Shareable QR Code'}</span>
              </button>

              {showQrCode && (
                <div className="flex flex-col items-center justify-center p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-2 animate-fadeIn">
                  <div className="w-32 h-32 bg-white border-2 border-emerald-900 p-2 flex items-center justify-center">
                    {/* Simulated High-Res QR code box */}
                    <div className="w-full h-full bg-[repeating-linear-gradient(45deg,#000_0px,#000_10px,#fff_10px,#fff_20px)] opacity-60"></div>
                  </div>
                  <span className="text-[9px] font-mono text-gray-400">Scan using mobile camera to open immediately</span>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* ADMINISTRATOR CREATION PORTAL MODAL */}
      {/* ======================================================== */}
      {adminActive && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" id="heritage_admin_panel">
          <div className="bg-white border-2 border-[#D4AF37] rounded-3xl p-6 w-full max-w-2xl shadow-2xl relative overflow-y-auto max-h-[90vh]">
            
            <button
              onClick={() => setAdminActive(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 rounded-lg transition"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="space-y-4">
              <div className="text-center space-y-1">
                <span className="text-[#D4AF37] text-xs font-mono font-bold tracking-widest uppercase block">MahaSabha Administrative Center</span>
                <h3 className="text-lg sm:text-2xl font-serif font-extrabold text-[#004B23]">
                  Archive New Historical Record
                </h3>
                <p className="text-xs text-gray-500 font-light">
                  Map community media albums with exact State, District, Tehsil cascade keys to automate organizing.
                </p>
              </div>

              {/* Media type toggle */}
              <div className="flex justify-center border-b border-gray-100 pb-3 gap-4">
                <button
                  type="button"
                  onClick={() => setAdminMediaType('photo')}
                  className={`px-4 py-2 text-xs font-bold uppercase rounded-lg ${adminMediaType === 'photo' ? 'bg-[#004B23] text-white' : 'bg-gray-100 text-gray-600'}`}
                >
                  Create Photo Album
                </button>
                <button
                  type="button"
                  onClick={() => setAdminMediaType('video')}
                  className={`px-4 py-2 text-xs font-bold uppercase rounded-lg ${adminMediaType === 'video' ? 'bg-[#004B23] text-white' : 'bg-gray-100 text-gray-600'}`}
                >
                  Create Video Documentary
                </button>
              </div>

              {/* 1: Photo Album Admin Form */}
              {adminMediaType === 'photo' ? (
                <form onSubmit={handleAdminCreateAlbum} className="space-y-4 text-xs text-gray-700">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold mb-1">Album Title (English) *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Traditional Dyer Exhibition 2026"
                        value={newAlbumData.titleEn}
                        onChange={(e) => setNewAlbumData({...newAlbumData, titleEn: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold mb-1">Album Title (Hindi)</label>
                      <input
                        type="text"
                        placeholder="जैसे: पारंपरिक रंगसाजी कला प्रदर्शनी"
                        value={newAlbumData.titleHi}
                        onChange={(e) => setNewAlbumData({...newAlbumData, titleHi: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold mb-1">Event category *</label>
                      <select
                        value={newAlbumData.eventType}
                        onChange={(e) => setNewAlbumData({...newAlbumData, eventType: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded focus:outline-none"
                      >
                        {eventCategories.map(ec => (
                          <option key={ec} value={ec}>{ec}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold mb-1">Main Menu Folder category *</label>
                      <select
                        value={newAlbumData.category}
                        onChange={(e) => setNewAlbumData({...newAlbumData, category: e.target.value as any})}
                        className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded focus:outline-none"
                      >
                        <option value="Photo Gallery">Photo Gallery</option>
                        <option value="Event Albums">Event Albums</option>
                        <option value="Historical Archive">Historical Archive</option>
                        <option value="Community Memories">Community Memories</option>
                        <option value="Awards & Achievements">Awards & Achievements</option>
                        <option value="Press & News Gallery">Press & News Gallery</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 bg-emerald-50/50 p-3 rounded-lg border border-emerald-100">
                    <div>
                      <label className="block font-bold mb-1">State ID *</label>
                      <select
                        value={newAlbumData.stateId}
                        onChange={(e) => setNewAlbumData({...newAlbumData, stateId: e.target.value})}
                        className="w-full bg-white border border-gray-200 p-2 rounded focus:outline-none"
                      >
                        {indianStates.map(s => (
                          <option key={s.id} value={s.id}>{s.nameEn}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold mb-1">District ID *</label>
                      <select
                        value={newAlbumData.districtId}
                        onChange={(e) => setNewAlbumData({...newAlbumData, districtId: e.target.value})}
                        className="w-full bg-white border border-gray-200 p-2 rounded focus:outline-none"
                      >
                        {initialDistricts.filter(d => d.stateId === newAlbumData.stateId).map(d => (
                          <option key={d.id} value={d.id}>{d.nameEn}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold mb-1">Tehsil Node</label>
                      <select
                        value={newAlbumData.tehsilId}
                        onChange={(e) => setNewAlbumData({...newAlbumData, tehsilId: e.target.value})}
                        className="w-full bg-white border border-gray-200 p-2 rounded focus:outline-none"
                      >
                        <option value="">No Tehsil (Direct District level)</option>
                        {initialTehsils.filter(t => t.districtId === newAlbumData.districtId).map(t => (
                          <option key={t.id} value={t.id}>{t.nameEn}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block font-bold mb-1">Village/City Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Nepari"
                        value={newAlbumData.villageName}
                        onChange={(e) => setNewAlbumData({...newAlbumData, villageName: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 p-2 rounded focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-bold mb-1">Photographer Name</label>
                      <input
                        type="text"
                        placeholder="Imperial Studio"
                        value={newAlbumData.photographerEn}
                        onChange={(e) => setNewAlbumData({...newAlbumData, photographerEn: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 p-2 rounded focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-bold mb-1">Uploaded By</label>
                      <input
                        type="text"
                        placeholder="Committee Coordinator"
                        value={newAlbumData.uploadedBy}
                        onChange={(e) => setNewAlbumData({...newAlbumData, uploadedBy: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 p-2 rounded focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold mb-1">Multiple Image URLs * (One URL per line)</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="https://images.unsplash.com/photo-1511578314322-379afb476865"
                      value={newAlbumData.imagesInput}
                      onChange={(e) => setNewAlbumData({...newAlbumData, imagesInput: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 p-2 rounded focus:outline-none font-mono"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block font-bold mb-1">Album Description (English) *</label>
                    <textarea
                      rows={2}
                      placeholder="Provide historical context or event highlights..."
                      value={newAlbumData.descriptionEn}
                      onChange={(e) => setNewAlbumData({...newAlbumData, descriptionEn: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 p-2 rounded focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#004B23] text-white hover:bg-emerald-900 rounded-xl font-bold uppercase tracking-widest border border-[#D4AF37]/50 transition"
                  >
                    Commit Album to Archives
                  </button>
                </form>
              ) : (
                
                /* 2: Video Album Admin Form */
                <form onSubmit={handleAdminCreateVideo} className="space-y-4 text-xs text-gray-700">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold mb-1">Video Title (English) *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mass Wedding Documentary"
                        value={newVideoData.titleEn}
                        onChange={(e) => setNewVideoData({...newVideoData, titleEn: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-bold mb-1">Video Title (Hindi)</label>
                      <input
                        type="text"
                        placeholder="जैसे: सामूहिक विवाह वृत्तचित्र"
                        value={newVideoData.titleHi}
                        onChange={(e) => setNewVideoData({...newVideoData, titleHi: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block font-bold mb-1">Embed Play URL *</label>
                      <input
                        type="text"
                        required
                        placeholder="https://www.youtube.com/embed/..."
                        value={newVideoData.videoUrl}
                        onChange={(e) => setNewVideoData({...newVideoData, videoUrl: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded focus:outline-none font-mono"
                      />
                    </div>
                    <div>
                      <label className="block font-bold mb-1">Thumbnail Cover Photo URL</label>
                      <input
                        type="text"
                        placeholder="https://images.unsplash.com/photo-..."
                        value={newVideoData.thumbnailUrl}
                        onChange={(e) => setNewVideoData({...newVideoData, thumbnailUrl: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded focus:outline-none font-mono"
                      />
                    </div>
                    <div>
                      <label className="block font-bold mb-1">Duration Format</label>
                      <input
                        type="text"
                        placeholder="05:24"
                        value={newVideoData.duration}
                        onChange={(e) => setNewVideoData({...newVideoData, duration: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block font-bold mb-1">Platform Hub *</label>
                      <select
                        value={newVideoData.platform}
                        onChange={(e) => setNewVideoData({...newVideoData, platform: e.target.value as any})}
                        className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded focus:outline-none"
                      >
                        <option value="YouTube">YouTube</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Local">Local Storage</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold mb-1">State ID *</label>
                      <select
                        value={newVideoData.stateId}
                        onChange={(e) => setNewVideoData({...newVideoData, stateId: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded focus:outline-none"
                      >
                        {indianStates.map(s => (
                          <option key={s.id} value={s.id}>{s.nameEn}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold mb-1">District Hub *</label>
                      <select
                        value={newVideoData.districtId}
                        onChange={(e) => setNewVideoData({...newVideoData, districtId: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 p-2.5 rounded focus:outline-none"
                      >
                        {initialDistricts.filter(d => d.stateId === newVideoData.stateId).map(d => (
                          <option key={d.id} value={d.id}>{d.nameEn}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#004B23] text-white hover:bg-emerald-900 rounded-xl font-bold uppercase tracking-widest border border-[#D4AF37]/50 transition"
                  >
                    Commit Video to Archive
                  </button>
                </form>
              )}

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
