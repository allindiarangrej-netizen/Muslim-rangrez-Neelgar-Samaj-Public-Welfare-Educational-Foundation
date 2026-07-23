import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Folder, Search, Filter, ChevronRight, ChevronLeft, Home, 
  Grid, List, Clock, MapPin, Play,
  Calendar, Sparkles, X
} from 'lucide-react';
import { HeritageAlbum, HeritageVideo } from '../../data/heritageMedia';
import ExplorerFolder from './ExplorerFolder';
import MediaCard from './MediaCard';
import PremiumLightbox from '../common/PremiumLightbox';
import { Language } from '../../types';
import SmartImage from '../common/SmartImage';

interface PremiumGalleryViewerProps {
  albums: HeritageAlbum[];
  videos: HeritageVideo[];
  currentLanguage: Language;
  initialCategory?: string;
}

type ViewMode = 'folders' | 'items';

export default function PremiumGalleryViewer({ 
  albums, videos, currentLanguage, initialCategory 
}: PremiumGalleryViewerProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('folders');
  const [currentFolder, setCurrentFolder] = useState<string | null>(initialCategory || null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  
  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeItems, setActiveItems] = useState<{ src: string; type: 'image' | 'video'; title?: string; description?: string; metadata?: string; }[]>([]);

  // 1. Logic to filter data globally
  const filteredAlbums = useMemo(() => {
    return albums.filter(alb => {
      const matchSearch = alb.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          alb.titleHi.toLowerCase().includes(searchQuery.toLowerCase());
      const matchYear = selectedYear === 'All' || alb.year === Number(selectedYear);
      const matchLoc = selectedLocation === 'All' || alb.location.district === selectedLocation;
      return matchSearch && matchYear && matchLoc;
    });
  }, [albums, searchQuery, selectedYear, selectedLocation]);

  const filteredVideos = useMemo(() => {
    return videos.filter(vid => {
      const matchSearch = vid.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          vid.titleHi.toLowerCase().includes(searchQuery.toLowerCase());
      const matchYear = selectedYear === 'All' || vid.year === Number(selectedYear);
      return matchSearch && matchYear;
    });
  }, [videos, searchQuery, selectedYear]);

  // 2. Group items into curated "Root" folders
  const rootFolders = useMemo(() => {
    const folders: { id: string; title: string; count: number; cover?: string; type: 'category' | 'regional' | 'album'; albumId?: string }[] = [];
    
    // Add Main Categories
    folders.push({
      id: 'National Events',
      title: 'National Events',
      count: albums.filter(a => a.category === 'Event Albums').length,
      cover: albums.find(a => a.category === 'Event Albums')?.images[0],
      type: 'category'
    });

    // Add Special Albums (e.g. Mahapanchayat)
    const mahapanchayat = albums.find(a => a.titleEn.includes('Mahapanchayat'));
    if (mahapanchayat) {
      folders.push({
        id: mahapanchayat.id,
        title: 'Mahapanchayat 2025',
        count: mahapanchayat.images.length,
        cover: mahapanchayat.images[0],
        type: 'album',
        albumId: mahapanchayat.id
      });
    }

    // Add Regional Folders (Flattened as requested)
    const regionalTehsils = Array.from(new Set(
      albums.filter(a => a.category === 'Regional Galleries' && a.location.tehsil)
            .map(a => a.location.tehsil!)
    ));

    regionalTehsils.forEach(tehsil => {
      const tehsilAlbums = albums.filter(a => a.location.tehsil === tehsil);
      folders.push({
        id: `reg_${tehsil}`,
        title: `${tehsil} Regional Gallery`,
        count: tehsilAlbums.length,
        cover: tehsilAlbums[0].images[0],
        type: 'regional'
      });
    });

    return folders;
  }, [albums]);

  // Handlers
  const handleBack = () => {
    setCurrentFolder(null);
    setViewMode('folders');
  };

  const openAlbum = (album: HeritageAlbum, initialImgIndex: number = 0) => {
    const albumTitle = currentLanguage === 'en' ? album.titleEn : album.titleHi;
    const items = album.images.map((img, idx) => ({
      src: img,
      type: 'image' as const,
      title: albumTitle,
      description: currentLanguage === 'en' ? album.descriptionEn : album.descriptionHi,
      metadata: `${album.location.district}${album.location.tehsil ? ` • ${album.location.tehsil}` : ''} • ${album.year}`
    }));
    setActiveItems(items);
    setLightboxIndex(initialImgIndex);
    setLightboxOpen(true);
  };

  const openVideo = (video: HeritageVideo) => {
    setActiveItems([{
      src: video.videoUrl,
      type: 'video' as const,
      title: currentLanguage === 'en' ? video.titleEn : video.titleHi,
      description: currentLanguage === 'en' ? video.titleEn : video.titleHi,
      metadata: `${video.location.district}, ${video.year}`
    }]);
    setLightboxIndex(0);
    setLightboxOpen(true);
  };

  const handleRootFolderClick = (folder: { id: string; title: string; count: number; cover?: string; type: 'category' | 'regional' | 'album'; albumId?: string }) => {
    if (folder.type === 'album' && folder.albumId) {
      const album = albums.find(a => a.id === folder.albumId);
      if (album) openAlbum(album);
    } else {
      setCurrentFolder(folder.title);
      setViewMode('items');
    }
  };

  // Logic to filter data for the "items" view
  const itemsInView = useMemo(() => {
    if (!currentFolder) return { albums: [], videos: [] };

    // If it's a regional folder
    if (currentFolder.includes('Regional Gallery')) {
      const tehsil = currentFolder.replace(' Regional Gallery', '');
      return {
        albums: filteredAlbums.filter(a => a.location.tehsil === tehsil),
        videos: []
      };
    }

    // If it's a category
    return {
      albums: filteredAlbums.filter(a => a.category === currentFolder || (currentFolder === 'National Events' && a.category === 'Event Albums')),
      videos: filteredVideos.filter(v => v.category === currentFolder)
    };
  }, [currentFolder, filteredAlbums, filteredVideos]);

  return (
    <div className="space-y-8 min-h-[600px]">
      {/* 1. Header & Breadcrumbs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-6">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <button 
              onClick={() => { setViewMode('folders'); setCurrentFolder(null); }} 
              className="hover:text-[#004B23] transition-colors flex items-center"
            >
              <Home className="h-3 w-3 mr-1" />
              Media Gallery
            </button>
            {currentFolder && (
              <>
                <ChevronRight className="h-2 w-2" />
                <button 
                  onClick={() => setViewMode('folders')}
                  className="hover:text-[#004B23] transition-colors"
                >
                  {currentFolder.includes('Regional') ? 'Regional' : 'Categories'}
                </button>
                <ChevronRight className="h-2 w-2" />
                <span className="text-[#004B23] truncate max-w-[150px]">{currentFolder}</span>
              </>
            )}
          </div>
          <div className="flex items-center space-x-3">
            {currentFolder && (
              <button 
                onClick={handleBack}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500"
                title="Go Back"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            )}
            <h2 className="text-2xl md:text-3xl font-serif font-extrabold text-[#004B23]">
              {currentFolder || 'Digital Archive Hub'}
            </h2>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input 
            type="text"
            placeholder="Search albums, events, locations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#004B23] focus:border-transparent shadow-sm"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* 2. Global Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center space-x-2 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100 text-[#004B23] text-[10px] font-bold uppercase tracking-wider">
          <Filter className="h-3 w-3" />
          <span>Quick Filters:</span>
        </div>
        <select 
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#004B23]"
        >
          <option value="All">All Years</option>
          <option value="2026">2026</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
        </select>
        <select 
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#004B23]"
        >
          <option value="All">All Districts</option>
          <option value="Morena">Morena</option>
          <option value="Dholpur">Dholpur</option>
          <option value="Gwalior">Gwalior</option>
        </select>
      </div>

      {/* 3. Grid Content */}
      <AnimatePresence mode="wait">
        {viewMode === 'folders' ? (
          <motion.div 
            key="folders"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {rootFolders.map((folder) => (
              <ExplorerFolder
                key={folder.id}
                title={folder.title}
                itemCount={folder.count}
                coverImage={folder.cover}
                onClick={() => handleRootFolderClick(folder)}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div 
            key="items"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-12"
          >
            {/* Show Albums in this View */}
            {itemsInView.albums.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-[#004B23]">
                  <Grid className="h-5 w-5" />
                  <h3 className="font-serif font-bold text-xl uppercase tracking-wide">Photo Albums</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {itemsInView.albums.map((album) => (
                    <div key={album.id} className="space-y-3 group">
                      <div 
                        onClick={() => openAlbum(album)}
                        className="relative aspect-video rounded-2xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all cursor-pointer ring-1 ring-gray-100"
                      >
                        <SmartImage 
                          src={album.images[0]} 
                          alt={album.titleEn}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                           <div className="bg-white/20 backdrop-blur-md p-3 rounded-full">
                              <Sparkles className="h-6 w-6 text-[#F4C430]" />
                           </div>
                        </div>
                        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-[#004B23]">
                          {album.images.length} Photos
                        </div>
                      </div>
                      <div className="px-1">
                        <h4 className="text-sm font-bold text-[#004B23] leading-tight group-hover:text-[#F4C430] transition-colors line-clamp-2">
                          {currentLanguage === 'en' ? album.titleEn : album.titleHi}
                        </h4>
                        <div className="flex items-center justify-between mt-2 text-[10px] text-gray-400 font-mono">
                          <span className="flex items-center"><Calendar className="h-3 w-3 mr-1" /> {album.year}</span>
                          <span className="flex items-center"><MapPin className="h-3 w-3 mr-1" /> {album.location.district}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Show Videos in this View */}
            {itemsInView.videos.length > 0 && (
              <div className="space-y-6 pt-8 border-t border-gray-100">
                <div className="flex items-center space-x-2 text-[#004B23]">
                  <Play className="h-5 w-5" />
                  <h3 className="font-serif font-bold text-xl uppercase tracking-wide">Video Gallery</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {itemsInView.videos.map((video) => (
                    <MediaCard
                      key={video.id}
                      src={video.thumbnailUrl}
                      type="video"
                      title={currentLanguage === 'en' ? video.titleEn : video.titleHi}
                      views={video.views}
                      likes={video.likes}
                      onClick={() => openVideo(video)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Empty State */}
            {itemsInView.albums.length === 0 && 
             itemsInView.videos.length === 0 && (
              <div className="py-24 text-center space-y-4">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto text-gray-300">
                  <X className="h-10 w-10" />
                </div>
                <h4 className="text-xl font-bold text-gray-400 font-serif">No media items found</h4>
                <p className="text-sm text-gray-400">Try adjusting your search or filters.</p>
                <button 
                  onClick={() => { setSearchQuery(''); setSelectedYear('All'); setSelectedLocation('All'); }}
                  className="px-6 py-2 bg-[#004B23] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#00381a] transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Component */}
      <PremiumLightbox 
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={activeItems}
        initialIndex={lightboxIndex}
      />
    </div>
  );
}
