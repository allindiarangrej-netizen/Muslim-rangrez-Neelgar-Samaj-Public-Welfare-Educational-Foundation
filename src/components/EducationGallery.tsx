import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Folder, FolderOpen, Image as ImageIcon, Grid, List, Maximize2, 
  ChevronLeft, ChevronRight, Search, Download, Share2, Copy, Check, 
  RotateCcw, ZoomIn, ZoomOut, Play, Pause, HardDrive, Info, X, 
  Sparkles, RefreshCw, Layers, SortAsc, LayoutGrid, Table, Eye, 
  ExternalLink, PanelLeftClose, PanelLeftOpen, ShieldCheck, Tag,
  ArrowUp, Sliders, Smartphone, CheckCircle2, HelpCircle, Columns
} from 'lucide-react';
import { 
  educationGalleryImages, 
  EducationImageItem, 
  RAW_EDUCATION_IMAGE_URLS 
} from '../data/educationGalleryImages';
import { Language } from '../types';
import PremiumLightbox from './common/PremiumLightbox';

interface EducationGalleryProps {
  currentLanguage: Language;
  onClose?: () => void;
}

type ViewLayout = 'masonry' | 'explorer-grid' | 'explorer-details' | 'compact-tiles';
type SortField = 'id' | 'category' | 'name';

export default function EducationGallery({ currentLanguage, onClose }: EducationGalleryProps) {
  // 1. Navigation & Filter State
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewLayout, setViewLayout] = useState<ViewLayout>('masonry');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [sortBy, setSortBy] = useState<SortField>('id');
  const [sortAsc, setSortAsc] = useState<boolean>(true);
  
  // 2. Thumbnail Customization
  const [thumbnailSize, setThumbnailSize] = useState<number>(2); // 1 = small, 2 = medium HD, 3 = large, 4 = xl
  
  // 3. Infinite Vertical Scrolling
  const BATCH_SIZE = 32;
  const [visibleCount, setVisibleCount] = useState<number>(BATCH_SIZE);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const observerTargetRef = useRef<HTMLDivElement>(null);

  // 4. Lightbox & Multi-Media Viewer State
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [zoomScale, setZoomScale] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  
  const [isPlayingSlideshow, setIsPlayingSlideshow] = useState<boolean>(false);
  const [showInfoPanel, setShowInfoPanel] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // 5. Selected Items for Windows Explorer style multi-select
  const [selectedItemIds, setSelectedItemIds] = useState<Set<string>>(new Set());

  // Deduplicate and filter images strictly
  const allDedupedImages = useMemo(() => {
    const seen = new Set<string>();
    const result: EducationImageItem[] = [];
    for (const img of educationGalleryImages) {
      if (!seen.has(img.driveId)) {
        seen.add(img.driveId);
        result.push(img);
      }
    }
    return result;
  }, []);

  // Category counts map
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      'All': allDedupedImages.length,
      'Care Point Classes': 0,
      'Educational Seminar': 0,
      'Community Movement': 0,
      'General Education': 0
    };
    allDedupedImages.forEach(img => {
      if (counts[img.category] !== undefined) {
        counts[img.category]++;
      }
    });
    return counts;
  }, [allDedupedImages]);

  // Filtered and Sorted Images
  const filteredImages = useMemo(() => {
    let list = [...allDedupedImages];

    if (selectedCategory !== 'All') {
      list = list.filter(img => img.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(img => 
        img.titleEn.toLowerCase().includes(q) ||
        img.titleHi.toLowerCase().includes(q) ||
        img.driveId.toLowerCase().includes(q) ||
        img.category.toLowerCase().includes(q)
      );
    }

    list.sort((a, b) => {
      let comparison = 0;
      if (sortBy === 'name') {
        comparison = a.titleEn.localeCompare(b.titleEn);
      } else if (sortBy === 'category') {
        comparison = a.category.localeCompare(b.category);
      } else {
        // ID sorting
        comparison = a.id.localeCompare(b.id);
      }
      return sortAsc ? comparison : -comparison;
    });

    return list;
  }, [allDedupedImages, selectedCategory, searchQuery, sortBy, sortAsc]);

  // Currently visible slice for infinite scroll
  const visibleImages = useMemo(() => {
    return filteredImages.slice(0, visibleCount);
  }, [filteredImages, visibleCount]);

  // Reset infinite scroll whenever filter changes
  useEffect(() => {
    setVisibleCount(BATCH_SIZE);
  }, [selectedCategory, searchQuery, sortBy, sortAsc]);

  // IntersectionObserver for Infinite Vertical Scrolling
  useEffect(() => {
    const target = observerTargetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (visibleCount < filteredImages.length) {
            setIsLoadingMore(true);
            setTimeout(() => {
              setVisibleCount(prev => Math.min(prev + BATCH_SIZE, filteredImages.length));
              setIsLoadingMore(false);
            }, 250);
          }
        }
      },
      { rootMargin: '400px' }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [visibleCount, filteredImages.length]);

  // Lightbox Navigation Functions
  const educationLightboxItems = useMemo(() => {
    return filteredImages.map(img => ({
      src: img.url,
      title: currentLanguage === 'en' ? img.titleEn : img.titleHi,
      description: `Category: ${img.category} • Drive ID: ${img.driveId}`,
      category: img.category,
      album: 'Education Gallery'
    }));
  }, [filteredImages, currentLanguage]);

  const openLightbox = useCallback((index: number) => {
    setActiveIndex(index);
    setZoomScale(1);
    setPanOffset({ x: 0, y: 0 });
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setIsPlayingSlideshow(false);
    setZoomScale(1);
    setPanOffset({ x: 0, y: 0 });
  }, []);

  const nextImage = useCallback(() => {
    if (filteredImages.length === 0) return;
    setActiveIndex(prev => (prev + 1) % filteredImages.length);
    setZoomScale(1);
    setPanOffset({ x: 0, y: 0 });
  }, [filteredImages.length]);

  const prevImage = useCallback(() => {
    if (filteredImages.length === 0) return;
    setActiveIndex(prev => (prev - 1 + filteredImages.length) % filteredImages.length);
    setZoomScale(1);
    setPanOffset({ x: 0, y: 0 });
  }, [filteredImages.length]);

  // Slideshow Auto Play Loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlayingSlideshow && lightboxOpen) {
      timer = setInterval(() => {
        nextImage();
      }, 3500);
    }
    return () => clearInterval(timer);
  }, [isPlayingSlideshow, lightboxOpen, nextImage]);

  // Keyboard Shortcuts for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevImage();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        closeLightbox();
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsPlayingSlideshow(p => !p);
      } else if (e.key === 'i' || e.key === 'I') {
        setShowInfoPanel(p => !p);
      } else if (e.key === '+' || e.key === '=') {
        setZoomScale(z => Math.min(z + 0.5, 4));
      } else if (e.key === '-') {
        setZoomScale(z => Math.max(z - 0.5, 1));
      } else if (e.key === '0') {
        setZoomScale(1);
        setPanOffset({ x: 0, y: 0 });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, nextImage, prevImage, closeLightbox]);

  // Copy Link Helper
  const handleCopyLink = (url: string, driveId: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(driveId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Toggle item selection
  const toggleItemSelect = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setSelectedItemIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectAllVisible = () => {
    if (selectedItemIds.size === filteredImages.length) {
      setSelectedItemIds(new Set());
    } else {
      setSelectedItemIds(new Set(filteredImages.map(img => img.id)));
    }
  };

  // Touch Swipe Gesture for Lightbox
  const touchStartRef = useRef<number>(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartRef.current;
    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) nextImage();
      else prevImage();
    }
  };

  // Zoom Dragging logic for Lightbox
  const handleMouseDownPan = (e: React.MouseEvent) => {
    if (zoomScale <= 1) return;
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX - panOffset.x, y: e.clientY - panOffset.y };
  };

  const handleMouseMovePan = (e: React.MouseEvent) => {
    if (!isDragging || zoomScale <= 1) return;
    setPanOffset({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y
    });
  };

  const handleMouseUpPan = () => {
    setIsDragging(false);
  };

  const currentActiveImage = filteredImages[activeIndex] || filteredImages[0];

  return (
    <div className="w-full bg-[#F4F6F9] text-gray-800 rounded-2xl shadow-2xl border border-gray-200 overflow-hidden font-sans select-none flex flex-col min-h-[85vh]">
      
      {/* ========================================================= */}
      {/* 1. WINDOWS FILE EXPLORER HEADER & TITLE BAR               */}
      {/* ========================================================= */}
      <div className="bg-gradient-to-r from-[#00381A] via-[#004B23] to-[#002812] text-white px-4 py-3 flex items-center justify-between border-b border-[#005c2b]">
        {/* Title & Explorer Badge */}
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-[#F4C430]/20 rounded-xl border border-[#F4C430]/40 flex items-center justify-center">
            <HardDrive className="h-5 w-5 text-[#F4C430]" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-base font-extrabold tracking-wide text-white">
                {currentLanguage === 'en' ? 'Education Image Library' : 'शिक्षा छवि पुस्तकालय'}
              </h2>
              <span className="bg-[#F4C430] text-[#00381A] text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                {allDedupedImages.length} {currentLanguage === 'en' ? 'HD Assets' : 'एचडी चित्र'}
              </span>
            </div>
            <p className="text-[11px] text-emerald-200/80 font-medium">
              {currentLanguage === 'en' ? 'All India Rangrez Community Educational Repository' : 'ऑल इंडिया रंगरेज समुदाय शैक्षणिक संग्रह'}
            </p>
          </div>
        </div>

        {/* Top Right Controls & Close */}
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => setSidebarOpen(p => !p)}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition text-xs flex items-center gap-1.5"
            title="Toggle Explorer Sidebar"
          >
            {sidebarOpen ? <PanelLeftClose className="h-4 w-4" /> : <PanelLeftOpen className="h-4 w-4" />}
            <span className="hidden sm:inline font-semibold text-[11px]">
              {sidebarOpen ? 'Hide Navigation' : 'Show Navigation'}
            </span>
          </button>
          {onClose && (
            <button 
              onClick={onClose}
              className="p-2 rounded-lg bg-red-600/80 hover:bg-red-600 text-white transition"
              title="Close Gallery"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. WINDOWS FILE EXPLORER TOOLBAR & ADDRESS BAR           */}
      {/* ========================================================= */}
      <div className="bg-white border-b border-gray-200 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 shadow-xs">
        
        {/* Address Bar Breadcrumbs */}
        <div className="flex items-center space-x-1.5 bg-gray-100 hover:bg-gray-100/80 border border-gray-300 rounded-lg px-3 py-1.5 flex-grow max-w-xl text-xs font-semibold text-gray-700 overflow-x-auto">
          <HardDrive className="h-4 w-4 text-[#004B23] shrink-0" />
          <span className="text-gray-400">/</span>
          <button onClick={() => setSelectedCategory('All')} className="hover:text-[#004B23] hover:underline shrink-0">
            This PC
          </button>
          <span className="text-gray-400">/</span>
          <button onClick={() => setSelectedCategory('All')} className="hover:text-[#004B23] hover:underline shrink-0 font-bold text-[#004B23]">
            Education Image Library
          </button>
          {selectedCategory !== 'All' && (
            <>
              <span className="text-gray-400">/</span>
              <span className="text-[#004B23] font-bold bg-[#004B23]/10 px-2 py-0.5 rounded text-[11px] shrink-0">
                {selectedCategory}
              </span>
            </>
          )}
        </div>

        {/* Global Search Bar */}
        <div className="relative flex-grow max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
          <input 
            type="text"
            placeholder={currentLanguage === 'en' ? "Search 508 HD photos..." : "508 तस्वीरें खोजें..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-8 py-1.5 bg-gray-50 border border-gray-300 focus:border-[#004B23] focus:bg-white rounded-lg text-xs outline-none transition"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Toolbar View Mode Controls */}
        <div className="flex items-center space-x-1.5 bg-gray-100 p-1 rounded-xl border border-gray-200">
          <button 
            onClick={() => setViewLayout('masonry')}
            className={`p-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${viewLayout === 'masonry' ? 'bg-[#004B23] text-white shadow-xs' : 'text-gray-600 hover:bg-gray-200'}`}
            title="Masonry Gallery Grid"
          >
            <Columns className="h-3.5 w-3.5" />
            <span className="hidden lg:inline">Masonry</span>
          </button>

          <button 
            onClick={() => setViewLayout('explorer-grid')}
            className={`p-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${viewLayout === 'explorer-grid' ? 'bg-[#004B23] text-white shadow-xs' : 'text-gray-600 hover:bg-gray-200'}`}
            title="Windows Explorer Icons Grid"
          >
            <LayoutGrid className="h-3.5 w-3.5" />
            <span className="hidden lg:inline">Explorer Grid</span>
          </button>

          <button 
            onClick={() => setViewLayout('explorer-details')}
            className={`p-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${viewLayout === 'explorer-details' ? 'bg-[#004B23] text-white shadow-xs' : 'text-gray-600 hover:bg-gray-200'}`}
            title="Details List Table View"
          >
            <Table className="h-3.5 w-3.5" />
            <span className="hidden lg:inline">Details</span>
          </button>

          <button 
            onClick={() => setViewLayout('compact-tiles')}
            className={`p-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${viewLayout === 'compact-tiles' ? 'bg-[#004B23] text-white shadow-xs' : 'text-gray-600 hover:bg-gray-200'}`}
            title="Compact HD Tiles"
          >
            <Grid className="h-3.5 w-3.5" />
            <span className="hidden lg:inline">Tiles</span>
          </button>
        </div>

      </div>

      {/* ========================================================= */}
      {/* 3. MAIN EXPLORER BODY (SIDEBAR + GALLERY AREA)            */}
      {/* ========================================================= */}
      <div className="flex-grow flex overflow-hidden relative">

        {/* LEFT WINDOWS EXPLORER NAVIGATION TREE SIDEBAR */}
        <AnimatePresence initial={false}>
          {sidebarOpen && (
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 260, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-50 border-r border-gray-200 flex-shrink-0 flex flex-col overflow-y-auto select-none"
            >
              {/* Quick Access Section Header */}
              <div className="p-3 border-b border-gray-200 bg-gray-100/80">
                <p className="text-[10px] font-black uppercase text-gray-400 tracking-wider">
                  {currentLanguage === 'en' ? 'Quick Access Folders' : 'त्वरित पहुंच फ़ोल्डर'}
                </p>
              </div>

              {/* Folder List */}
              <div className="p-2 space-y-1">
                {Object.entries(categoryCounts).map(([catName, count]) => {
                  const isSelected = selectedCategory === catName;
                  return (
                    <button
                      key={catName}
                      onClick={() => setSelectedCategory(catName)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition flex items-center justify-between group ${
                        isSelected 
                          ? 'bg-[#004B23] text-white shadow-xs' 
                          : 'text-gray-700 hover:bg-gray-200/70'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5 truncate">
                        {isSelected ? (
                          <FolderOpen className="h-4 w-4 text-[#F4C430] shrink-0" />
                        ) : (
                          <Folder className="h-4 w-4 text-[#004B23] group-hover:scale-110 transition shrink-0" />
                        )}
                        <span className="truncate">{catName}</span>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* System Storage Info Card */}
              <div className="mt-auto p-3 border-t border-gray-200 bg-emerald-50/50 m-2 rounded-xl border border-emerald-200/60 text-xs">
                <div className="flex items-center space-x-2 text-[#004B23] font-extrabold mb-1">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>{currentLanguage === 'en' ? 'Google Edge CDN' : 'गूगल एज सीडीएन'}</span>
                </div>
                <p className="text-[11px] text-gray-600 leading-snug">
                  {currentLanguage === 'en' ? 'Direct high-res lh3 edge caching active for 508 education assets.' : '508 शैक्षणिक चित्रों के लिए सीधा हाई-रेजोनेंस एज कैशिंग सक्रिय।'}
                </p>
                <div className="mt-2 text-[10px] text-gray-500 font-mono flex items-center justify-between border-t border-emerald-200/50 pt-1.5">
                  <span>Duplicates: 0</span>
                  <span className="text-emerald-700 font-bold">100% Verified</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* RIGHT GALLERY CONTENT CANVAS */}
        <div className="flex-grow overflow-y-auto p-4 sm:p-6 bg-[#F8FAFC]">
          
          {/* Top Bar inside Content Area */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-3 border-b border-gray-200">
            
            {/* Filter Summary Badge */}
            <div className="flex items-center space-x-2">
              <span className="text-sm font-extrabold text-[#004B23]">
                {selectedCategory === 'All' 
                  ? (currentLanguage === 'en' ? 'All Educational Media' : 'सभी शैक्षणिक मीडिया')
                  : selectedCategory}
              </span>
              <span className="text-xs font-bold text-gray-500 bg-gray-200 px-2.5 py-0.5 rounded-full">
                {filteredImages.length} {currentLanguage === 'en' ? 'Items' : 'आइटम'}
              </span>
            </div>

            {/* Sorting & Selection Controls */}
            <div className="flex items-center space-x-3 text-xs">
              <button 
                onClick={selectAllVisible}
                className="px-2.5 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold transition"
              >
                {selectedItemIds.size === filteredImages.length ? 'Deselect All' : `Select All (${selectedItemIds.size})`}
              </button>

              <div className="flex items-center space-x-1.5 text-gray-600 font-medium">
                <SortAsc className="h-3.5 w-3.5 text-gray-400" />
                <span>Sort:</span>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value as SortField)}
                  className="bg-white border border-gray-300 rounded px-2 py-1 text-xs font-semibold outline-none focus:border-[#004B23]"
                >
                  <option value="id">Asset ID</option>
                  <option value="category">Category</option>
                  <option value="name">Name</option>
                </select>
                <button 
                  onClick={() => setSortAsc(p => !p)}
                  className="p-1 hover:bg-gray-200 rounded font-bold"
                  title="Toggle Asc/Desc"
                >
                  {sortAsc ? '↑' : '↓'}
                </button>
              </div>
            </div>

          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="py-20 text-center space-y-3">
              <Folder className="h-16 w-16 text-gray-300 mx-auto" />
              <p className="text-base font-bold text-gray-600">
                {currentLanguage === 'en' ? 'No education images match your search' : 'आपकी खोज से मेल खाने वाली कोई तस्वीर नहीं मिली'}
              </p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="px-4 py-2 bg-[#004B23] text-white text-xs font-bold rounded-xl shadow-md hover:bg-[#00381A] transition"
              >
                {currentLanguage === 'en' ? 'Reset Filters' : 'फ़िल्टर रीसेट करें'}
              </button>
            </div>
          )}

          {/* ========================================================= */}
          {/* LAYOUT MODE 1: MASONRY GRID                               */}
          {/* ========================================================= */}
          {viewLayout === 'masonry' && filteredImages.length > 0 && (
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
              {visibleImages.map((img, idx) => (
                <MasonryCard 
                  key={img.id}
                  item={img}
                  index={idx}
                  totalCount={filteredImages.length}
                  isSelected={selectedItemIds.has(img.id)}
                  onSelect={(e) => toggleItemSelect(e, img.id)}
                  onClick={() => openLightbox(idx)}
                  onCopyLink={() => handleCopyLink(img.url, img.driveId)}
                  isCopied={copiedId === img.driveId}
                  currentLanguage={currentLanguage}
                />
              ))}
            </div>
          )}

          {/* ========================================================= */}
          {/* LAYOUT MODE 2: WINDOWS FILE EXPLORER ICON GRID           */}
          {/* ========================================================= */}
          {viewLayout === 'explorer-grid' && filteredImages.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
              {visibleImages.map((img, idx) => (
                <ExplorerIconCard 
                  key={img.id}
                  item={img}
                  index={idx}
                  isSelected={selectedItemIds.has(img.id)}
                  onSelect={(e) => toggleItemSelect(e, img.id)}
                  onClick={() => openLightbox(idx)}
                  currentLanguage={currentLanguage}
                />
              ))}
            </div>
          )}

          {/* ========================================================= */}
          {/* LAYOUT MODE 3: DETAILS LIST TABLE VIEW                   */}
          {/* ========================================================= */}
          {viewLayout === 'explorer-details' && filteredImages.length > 0 && (
            <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto shadow-xs">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-100 text-gray-600 font-extrabold uppercase border-b border-gray-200 text-[10px] tracking-wider select-none">
                  <tr>
                    <th className="p-3 w-8">#</th>
                    <th className="p-3">Title / Asset Name</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Google Drive ID</th>
                    <th className="p-3">Resolution</th>
                    <th className="p-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
                  {visibleImages.map((img, idx) => (
                    <tr 
                      key={img.id}
                      onClick={() => openLightbox(idx)}
                      className="hover:bg-emerald-50/60 cursor-pointer transition group"
                    >
                      <td className="p-3 text-gray-400 font-mono text-[10px]">{idx + 1}</td>
                      <td className="p-3 font-bold text-gray-900 flex items-center space-x-2.5">
                        <img 
                          src={img.url} 
                          alt={img.titleEn}
                          className="h-8 w-8 object-cover rounded border border-gray-200 shrink-0"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = img.fallbackUrl;
                          }}
                        />
                        <span className="truncate max-w-xs group-hover:text-[#004B23]">
                          {currentLanguage === 'en' ? img.titleEn : img.titleHi}
                        </span>
                      </td>
                      <td className="p-3 text-gray-600 font-semibold">
                        <span className="bg-gray-100 px-2 py-0.5 rounded text-[10px] border border-gray-200">
                          {img.category}
                        </span>
                      </td>
                      <td className="p-3 font-mono text-[11px] text-gray-500">{img.driveId}</td>
                      <td className="p-3 text-emerald-700 font-bold text-[10px]">
                        <span className="bg-emerald-100/80 px-2 py-0.5 rounded">1080p HD</span>
                      </td>
                      <td className="p-3 text-right space-x-2" onClick={(e) => e.stopPropagation()}>
                        <button 
                          onClick={() => handleCopyLink(img.url, img.driveId)}
                          className="p-1.5 rounded hover:bg-gray-200 text-gray-600"
                          title="Copy Link"
                        >
                          <Copy className="h-3.5 w-3.5" />
                        </button>
                        <a 
                          href={img.originalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded hover:bg-gray-200 text-gray-600 inline-block"
                          title="Open in Google Drive"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* ========================================================= */}
          {/* LAYOUT MODE 4: COMPACT TILES                             */}
          {/* ========================================================= */}
          {viewLayout === 'compact-tiles' && filteredImages.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              {visibleImages.map((img, idx) => (
                <div 
                  key={img.id}
                  onClick={() => openLightbox(idx)}
                  className="group relative aspect-square rounded-xl overflow-hidden bg-gray-200 border border-gray-300 shadow-xs hover:shadow-md cursor-pointer transition transform hover:-translate-y-1"
                >
                  <img 
                    src={img.url} 
                    alt={img.titleEn}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = img.fallbackUrl;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition p-2 flex flex-col justify-between">
                    <span className="self-end bg-[#F4C430] text-[#00381A] text-[9px] font-black px-1.5 py-0.5 rounded">
                      HD
                    </span>
                    <p className="text-[10px] text-white font-bold truncate">
                      #{idx + 1} • {img.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* INFINITE SCROLL LOADER INTERSECTION TARGET */}
          <div ref={observerTargetRef} className="py-8 text-center flex flex-col items-center justify-center space-y-2">
            {isLoadingMore && (
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-200 text-xs font-bold text-[#004B23]">
                <RefreshCw className="h-4 w-4 animate-spin text-[#004B23]" />
                <span>
                  {currentLanguage === 'en' ? 'Loading more HD photos...' : 'और तस्वीरें लोड हो रही हैं...'}
                </span>
              </div>
            )}
            {visibleCount >= filteredImages.length && filteredImages.length > 0 && (
              <div className="text-xs text-gray-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                <span>
                  {currentLanguage === 'en' 
                    ? `Loaded all ${filteredImages.length} HD educational photos` 
                    : `सभी ${filteredImages.length} तस्वीरें लोड की गईं`}
                </span>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* 4. WINDOWS FILE EXPLORER FOOTER & STATUS BAR             */}
      {/* ========================================================= */}
      <div className="bg-gray-100 border-t border-gray-300 px-4 py-2 flex flex-wrap items-center justify-between text-[11px] text-gray-600 font-medium select-none shadow-inner">
        <div className="flex items-center space-x-4">
          <span>
            <strong>{filteredImages.length}</strong> {currentLanguage === 'en' ? 'Items total' : 'कुल आइटम'}
          </span>
          <span className="text-gray-300">|</span>
          <span>
            {currentLanguage === 'en' ? 'Showing:' : 'प्रदर्शित:'} <strong>{visibleImages.length}</strong>
          </span>
          <span className="text-gray-300">|</span>
          <span>
            {currentLanguage === 'en' ? 'Selected:' : 'चयनित:'} <strong>{selectedItemIds.size}</strong>
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <span className="hidden sm:inline text-emerald-700 font-bold">
            ⚡ High-Res Edge Cache Active
          </span>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 5. UNIVERSAL PREMIUM LIGHTBOX VIEWER                      */}
      {/* ========================================================= */}
      <PremiumLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={educationLightboxItems}
        initialIndex={activeIndex}
        albumTitle="Education Gallery Archive"
      />

    </div>
  );
}

/* ==================================================================== */
/* MASONRY CARD SUB-COMPONENT                                          */
/* ==================================================================== */
interface MasonryCardProps {
  item: EducationImageItem;
  index: number;
  totalCount: number;
  isSelected: boolean;
  onSelect: (e: React.MouseEvent) => void;
  onClick: () => void;
  onCopyLink: () => void;
  isCopied: boolean;
  currentLanguage: Language;
}

function MasonryCard({
  item, index, totalCount, isSelected, onSelect, onClick, onCopyLink, isCopied, currentLanguage
}: MasonryCardProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.3) }}
      onClick={onClick}
      className={`group relative rounded-2xl overflow-hidden bg-white border cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 select-none ${
        isSelected ? 'ring-4 ring-[#004B23] border-transparent' : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      {/* Shimmer Placeholder */}
      {!loaded && !error && (
        <div className="w-full aspect-4/3 bg-gray-200 animate-pulse flex items-center justify-center">
          <ImageIcon className="h-8 w-8 text-gray-400" />
        </div>
      )}

      {/* Main Image */}
      <img 
        src={item.url} 
        alt={item.titleEn}
        onLoad={() => setLoaded(true)}
        onError={() => {
          setError(true);
          setLoaded(true);
        }}
        className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
          loaded ? 'block' : 'hidden'
        }`}
        loading="lazy"
      />

      {/* Checkbox Selector for Windows Explorer Mode */}
      <button 
        onClick={onSelect}
        className={`absolute top-2.5 left-2.5 p-1 rounded-lg z-10 transition ${
          isSelected 
            ? 'bg-[#004B23] text-white shadow-md' 
            : 'bg-black/40 text-white/70 opacity-0 group-hover:opacity-100 hover:bg-black/70'
        }`}
        title="Select Item"
      >
        <Check className="h-3.5 w-3.5 font-bold" />
      </button>

      {/* Category Badge */}
      <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-md text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full border border-white/20">
        {item.category}
      </div>

      {/* Hover Information Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 p-3.5 flex flex-col justify-end text-white">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-[#F4C430] font-black uppercase">
              Asset #{index + 1}
            </span>
            <span className="text-[9px] bg-emerald-500/80 text-white px-1.5 py-0.5 rounded font-bold">
              HD Edge
            </span>
          </div>

          <h4 className="text-xs font-bold line-clamp-2 leading-snug text-white">
            {currentLanguage === 'en' ? item.titleEn : item.titleHi}
          </h4>

          <div className="flex items-center justify-between pt-1 border-t border-white/20 text-[10px] text-gray-300">
            <span className="font-mono truncate max-w-[120px]">ID: {item.driveId}</span>
            <div className="flex items-center space-x-1" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={onCopyLink}
                className="p-1 rounded bg-white/20 hover:bg-white/40 text-white transition"
                title="Copy Direct Link"
              >
                {isCopied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ==================================================================== */
/* EXPLORER ICON CARD SUB-COMPONENT                                    */
/* ==================================================================== */
interface ExplorerIconCardProps {
  item: EducationImageItem;
  index: number;
  isSelected: boolean;
  onSelect: (e: React.MouseEvent) => void;
  onClick: () => void;
  currentLanguage: Language;
}

function ExplorerIconCard({
  item, index, isSelected, onSelect, onClick, currentLanguage
}: ExplorerIconCardProps) {
  return (
    <div 
      onClick={onClick}
      className={`group p-2 rounded-xl border transition cursor-pointer flex flex-col items-center text-center space-y-1.5 select-none ${
        isSelected 
          ? 'bg-emerald-50 border-[#004B23] shadow-xs' 
          : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300'
      }`}
    >
      <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
        <img 
          src={item.url} 
          alt={item.titleEn}
          className="w-full h-full object-cover transition group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = item.fallbackUrl;
          }}
        />
        <button 
          onClick={onSelect}
          className={`absolute top-1 left-1 p-0.5 rounded z-10 transition ${
            isSelected ? 'bg-[#004B23] text-white' : 'bg-black/30 text-white/70 opacity-0 group-hover:opacity-100'
          }`}
        >
          <Check className="h-3 w-3" />
        </button>
      </div>

      <p className="text-[11px] font-bold text-gray-800 line-clamp-1 w-full group-hover:text-[#004B23]">
        {currentLanguage === 'en' ? item.titleEn : item.titleHi}
      </p>
      <span className="text-[9px] text-gray-400 font-mono">
        {item.driveId.slice(0, 8)}...
      </span>
    </div>
  );
}
