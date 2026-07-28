import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  Search, Grid, MapPin, Play,
  Sparkles, X, ZoomIn, Image as ImageIcon,
  LayoutGrid, ArrowUpRight
} from 'lucide-react';
import { HeritageAlbum, HeritageVideo } from '../../data/heritageMedia';
import PremiumLightbox from '../common/PremiumLightbox';
import { Language } from '../../types';
import SmartImage from '../common/SmartImage';

interface PremiumGalleryViewerProps {
  albums: HeritageAlbum[];
  videos: HeritageVideo[];
  currentLanguage: Language;
  initialCategory?: string;
}

export default function PremiumGalleryViewer({ 
  albums, 
  videos, 
  currentLanguage, 
  initialCategory 
}: PremiumGalleryViewerProps) {
  // Category selection tab
  const [activeTab, setActiveTab] = useState<string>(initialCategory || 'All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [gridDensity, setGridDensity] = useState<'compact' | 'standard'>('standard');
  
  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Extract all unique districts/tehsils for filter
  const locationOptions = useMemo(() => {
    const locs = new Set<string>();
    albums.forEach(a => {
      if (a.location.district) locs.add(a.location.district);
      if (a.location.tehsil) locs.add(a.location.tehsil);
    });
    return ['All', ...Array.from(locs).sort()];
  }, [albums]);

  // Extract all unique years for filter
  const yearOptions = useMemo(() => {
    const years = new Set<number>();
    albums.forEach(a => { if (a.year) years.add(a.year); });
    videos.forEach(v => { if (v.year) years.add(v.year); });
    return ['All', ...Array.from(years).sort((a, b) => b - a).map(String)];
  }, [albums, videos]);

  // Main flat list of all items (images + videos) with full metadata
  const allMediaItems = useMemo(() => {
    const items: Array<{
      id: string;
      src: string;
      type: 'image' | 'video';
      title: string;
      description: string;
      category: string;
      district: string;
      tehsil?: string;
      date?: string;
      year?: number;
      albumTitle: string;
      videoUrl?: string;
    }> = [];

    // Add images from albums
    albums.forEach(alb => {
      const albTitle = currentLanguage === 'en' ? alb.titleEn : alb.titleHi;
      const albDesc = currentLanguage === 'en' ? alb.descriptionEn : alb.descriptionHi;

      alb.images.forEach((img, idx) => {
        items.push({
          id: `${alb.id}-img-${idx}`,
          src: img,
          type: 'image',
          title: albTitle,
          description: albDesc,
          category: alb.category || 'Photo Gallery',
          district: alb.location.district || 'Morena',
          tehsil: alb.location.tehsil,
          date: alb.date,
          year: alb.year,
          albumTitle: albTitle
        });
      });
    });

    // Add videos
    videos.forEach(vid => {
      const vidTitle = currentLanguage === 'en' ? vid.titleEn : vid.titleHi;
      items.push({
        id: vid.id,
        src: vid.thumbnailUrl || vid.videoUrl,
        type: 'video',
        title: vidTitle,
        description: vidTitle,
        category: 'Video Gallery',
        district: vid.location.district || 'Morena',
        date: vid.uploadDate,
        year: vid.year,
        albumTitle: vidTitle,
        videoUrl: vid.videoUrl
      });
    });

    return items;
  }, [albums, videos, currentLanguage]);

  // Filter items based on tab, search, year, and location
  const filteredItems = useMemo(() => {
    return allMediaItems.filter(item => {
      // 1. Tab matching
      if (activeTab === 'Regional Galleries') {
        const isRegional = item.category === 'Regional Galleries' || 
                           item.district.toLowerCase().includes('morena') ||
                           item.district.toLowerCase().includes('dholpur') ||
                           item.district.toLowerCase().includes('gwalior') ||
                           (item.tehsil && item.tehsil.length > 0);
        if (!isRegional) return false;
      } else if (activeTab === 'Video Gallery') {
        if (item.type !== 'video') return false;
      } else if (activeTab === 'Photo Gallery') {
        if (item.type !== 'image') return false;
      } else if (activeTab === 'Event Albums') {
        if (item.category !== 'Event Albums' && !item.albumTitle.toLowerCase().includes('mahapanchayat') && !item.albumTitle.toLowerCase().includes('sammelan')) return false;
      } else if (activeTab !== 'All') {
        const matchesCategory = item.category === activeTab || item.albumTitle.toLowerCase().includes(activeTab.toLowerCase());
        if (!matchesCategory) return false;
      }

      // 2. Search query matching
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        const matchDistrict = item.district.toLowerCase().includes(q);
        const matchTehsil = item.tehsil ? item.tehsil.toLowerCase().includes(q) : false;
        if (!matchTitle && !matchDesc && !matchDistrict && !matchTehsil) return false;
      }

      // 3. Year matching
      if (selectedYear !== 'All') {
        if (String(item.year) !== selectedYear) return false;
      }

      // 4. Location matching
      if (selectedLocation !== 'All') {
        const matchDist = item.district.toLowerCase() === selectedLocation.toLowerCase();
        const matchTehsil = item.tehsil ? item.tehsil.toLowerCase() === selectedLocation.toLowerCase() : false;
        if (!matchDist && !matchTehsil) return false;
      }

      return true;
    });
  }, [allMediaItems, activeTab, searchQuery, selectedYear, selectedLocation]);

  // Lightbox Items List
  const lightboxItems = useMemo(() => {
    return filteredItems.map(item => ({
      src: item.videoUrl || item.src,
      type: item.type,
      title: item.title,
      description: item.description,
      metadata: `${item.district}${item.tehsil ? ', ' + item.tehsil : ''} • ${item.year || '2026'}`
    }));
  }, [filteredItems]);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const categoryTabs = [
    { id: 'All', labelEn: '✨ All Photos', labelHi: '✨ सभी तस्वीरें' },
    { id: 'Regional Galleries', labelEn: '📍 Regional Photos', labelHi: '📍 क्षेत्रीय तस्वीरें' },
    { id: 'Event Albums', labelEn: '🏛️ Event Albums', labelHi: '🏛️ कार्यक्रम एल्बम' },
    { id: 'Photo Gallery', labelEn: '🖼️ General Gallery', labelHi: '🖼️ मुख्य गैलरी' },
    { id: 'Video Gallery', labelEn: '🎥 Video Documentaries', labelHi: '🎥 वीडियो दस्तावेजी' },
  ];

  return (
    <div className="space-y-6">
      {/* 1. TOP HEADER & MAIN CONTROLS */}
      <div className="bg-[#004B23] text-white p-6 sm:p-8 rounded-3xl border border-[#F4C430]/30 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#F4C430]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-[#F4C430] uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{filteredItems.length} High-Res Verified Assets</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-white">
              {currentLanguage === 'en' ? 'Community Digital Photo Gallery' : 'सामुदायिक डिजिटल फोटो गैलरी'}
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/80 max-w-2xl leading-relaxed">
              {currentLanguage === 'en'
                ? 'Click any photo to open full-screen HD viewer with instant zoom, slideshow, and direct download.'
                : 'किसी भी फोटो पर क्लिक करके फुल-स्क्रीन एचडी व्यूअर खोलें, ज़ूम करें और डाउनलोड करें।'}
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-300" />
            <input 
              type="text"
              placeholder={currentLanguage === 'en' ? "Search photos, region, events..." : "तस्वीरें, क्षेत्र या कार्यक्रम खोजें..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 bg-black/30 border border-emerald-400/30 rounded-2xl text-xs text-white placeholder-emerald-200/60 focus:outline-none focus:ring-2 focus:ring-[#F4C430] backdrop-blur-md"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-300 hover:text-white">
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* 2. CATEGORY TABS STRIP */}
        <div className="relative z-10 mt-6 pt-6 border-t border-emerald-800/60 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none w-full md:w-auto">
            {categoryTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  activeTab === tab.id
                    ? 'bg-[#F4C430] text-[#004B23] shadow-lg font-black scale-105'
                    : 'bg-emerald-900/60 hover:bg-emerald-800/80 text-emerald-100 border border-emerald-700/50'
                }`}
              >
                <span>{currentLanguage === 'en' ? tab.labelEn : tab.labelHi}</span>
              </button>
            ))}
          </div>

          {/* Grid Layout Switcher & Quick Filters */}
          <div className="flex items-center gap-2 text-xs font-medium">
            {/* Location Selector */}
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="bg-emerald-950/80 border border-emerald-700 text-emerald-100 rounded-xl px-3 py-1.5 text-xs focus:outline-none focus:border-[#F4C430]"
            >
              <option value="All">All Regions</option>
              {locationOptions.filter(l => l !== 'All').map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>

            {/* Year Selector */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="bg-emerald-950/80 border border-emerald-700 text-emerald-100 rounded-xl px-3 py-1.5 text-xs focus:outline-none focus:border-[#F4C430]"
            >
              <option value="All">All Years</option>
              {yearOptions.filter(y => y !== 'All').map(yr => (
                <option key={yr} value={yr}>{yr}</option>
              ))}
            </select>

            {/* Density Toggle */}
            <div className="hidden sm:flex items-center bg-emerald-950/80 p-1 rounded-xl border border-emerald-700">
              <button
                onClick={() => setGridDensity('standard')}
                className={`p-1.5 rounded-lg transition ${gridDensity === 'standard' ? 'bg-[#F4C430] text-[#004B23]' : 'text-emerald-300 hover:text-white'}`}
                title="Standard Grid"
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setGridDensity('compact')}
                className={`p-1.5 rounded-lg transition ${gridDensity === 'compact' ? 'bg-[#F4C430] text-[#004B23]' : 'text-emerald-300 hover:text-white'}`}
                title="Compact Grid"
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. DIRECT PHOTO GRID VIEW */}
      {filteredItems.length > 0 ? (
        <div className={`grid gap-4 sm:gap-5 ${
          gridDensity === 'compact' 
            ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'
            : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
        }`}>
          {filteredItems.map((item, idx) => (
            <motion.div
              key={`${item.id}-${idx}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: Math.min((idx % 12) * 0.03, 0.3) }}
              onClick={() => handleOpenLightbox(idx)}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-2xl hover:border-[#004B23]/40 transition-all duration-300 flex flex-col cursor-pointer relative"
            >
              {/* Image Canvas */}
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-900">
                <SmartImage 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                />

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="px-2 py-0.5 rounded-md bg-[#004B23] text-white text-[9px] font-bold uppercase tracking-wider shadow">
                      {item.district}
                    </span>
                    <span className="p-2 rounded-full bg-white/20 text-[#F4C430] backdrop-blur-md transform group-hover:scale-110 transition-transform">
                      <ZoomIn className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="text-white space-y-0.5">
                    <p className="text-xs font-bold line-clamp-1 text-emerald-300">
                      {item.title}
                    </p>
                    <p className="text-[10px] text-stone-300 font-mono flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-[#F4C430]" /> {item.district}{item.tehsil ? `, ${item.tehsil}` : ''} • {item.year || '2026'}
                    </p>
                  </div>
                </div>

                {/* Media Type Badge */}
                {item.type === 'video' && (
                  <div className="absolute top-2.5 right-2.5 bg-[#F4C430] text-[#004B23] p-1.5 rounded-lg shadow-md flex items-center gap-1 text-[10px] font-bold">
                    <Play className="h-3 w-3 fill-current" />
                    <span>Video</span>
                  </div>
                )}
              </div>

              {/* Card Footer Info */}
              <div className="p-3 bg-white flex flex-col justify-between flex-1 border-t border-gray-100 space-y-1.5">
                <h4 className="text-xs font-bold text-[#004B23] line-clamp-1 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h4>
                <div className="flex items-center justify-between text-[10px] text-gray-400 font-mono">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-emerald-600" />
                    {item.district}
                  </span>
                  <span className="text-[#004B23] font-bold group-hover:underline flex items-center">
                    Open HD <ArrowUpRight className="h-3 w-3 ml-0.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center bg-white rounded-3xl border border-gray-200 p-8 space-y-4">
          <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-[#004B23]">
            <ImageIcon className="h-8 w-8" />
          </div>
          <h3 className="text-lg font-bold text-gray-700 font-serif">
            {currentLanguage === 'en' ? 'No photos match your current filters' : 'कोई तस्वीर आपके फिल्टर से मेल नहीं खाती'}
          </h3>
          <p className="text-xs text-gray-500 max-w-md mx-auto">
            Try resetting your search query or choosing "All Regions" and "All Years".
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedYear('All'); setSelectedLocation('All'); setActiveTab('All'); }}
            className="px-5 py-2.5 bg-[#004B23] text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-emerald-900 transition"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* 4. FULL HD UNIVERSAL LIGHTBOX */}
      <PremiumLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={lightboxItems}
        initialIndex={lightboxIndex}
        albumTitle={activeTab === 'All' ? 'All Community Photos' : activeTab}
      />
    </div>
  );
}
