import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, PanInfo } from 'motion/react';
import { 
  X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, 
  Play, Pause, Maximize, Minimize, Download, 
  Info, RotateCw, Share2, Image as ImageIcon,
  Heart, Printer, ArrowLeft, RefreshCw, Check, Tag, Calendar, MapPin, Camera, Folder,
  Shuffle, Repeat
} from 'lucide-react';
import { resolveDriveUrl, preloadDriveImage } from '../../lib/driveUtils';
import SmartImage from './SmartImage';

export interface LightboxItem {
  src: string;
  type?: 'image' | 'video';
  title?: string;
  description?: string;
  metadata?: string;
  category?: string;
  album?: string;
  date?: string;
  photographer?: string;
  location?: string;
  tags?: string[];
  id?: string | number;
}

export interface PremiumLightboxProps {
  items: LightboxItem[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
  onBack?: () => void;
  albumTitle?: string;
  allowDownload?: boolean;
}

export default function PremiumLightbox({ 
  items, 
  initialIndex = 0, 
  isOpen, 
  onClose,
  onBack,
  albumTitle,
  allowDownload = true
}: PremiumLightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [slideshow, setSlideshow] = useState(false);
  const [isHoverPaused, setIsHoverPaused] = useState(false);
  const [isRandomMode, setIsRandomMode] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [lastTap, setLastTap] = useState(0);
  const [imgError, setImgError] = useState(false);
  const [imgLoading, setImgLoading] = useState(true);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  // Favourites in localStorage
  const [favourites, setFavourites] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('rangrez_fav_photos') || '[]');
    } catch {
      return [];
    }
  });

  // Keep index in range and reset states
  useEffect(() => {
    if (isOpen) {
      setIndex(Math.min(Math.max(0, initialIndex), Math.max(0, items.length - 1)));
      setZoom(1);
      setRotation(0);
      setImgError(false);
      setImgLoading(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSlideshow(false);
    }
  }, [initialIndex, isOpen, items.length]);

  // Reset img state when index changes and preload adjacent images
  useEffect(() => {
    setImgError(false);
    setImgLoading(true);

    if (isOpen && items.length > 1) {
      const nextIdx = (index + 1) % items.length;
      const prevIdx = (index - 1 + items.length) % items.length;
      if (items[nextIdx]?.src) preloadDriveImage(items[nextIdx].src).catch(() => {});
      if (items[prevIdx]?.src) preloadDriveImage(items[prevIdx].src).catch(() => {});
    }
  }, [index, isOpen, items]);

  // Toast auto-hide
  useEffect(() => {
    if (toastMsg) {
      const timer = setTimeout(() => setToastMsg(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMsg]);

  // Auto scroll thumbnail into view
  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const activeThumbnail = thumbnailContainerRef.current.children[index] as HTMLElement;
      if (activeThumbnail) {
        activeThumbnail.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [index]);

  const handleNext = useCallback(() => {
    setZoom(1);
    setRotation(0);
    if (isRandomMode && items.length > 1) {
      let nextRand = Math.floor(Math.random() * items.length);
      if (nextRand === index) nextRand = (nextRand + 1) % items.length;
      setIndex(nextRand);
    } else {
      setIndex((prev) => (prev + 1) % items.length);
    }
  }, [items.length, isRandomMode, index]);

  const handlePrev = useCallback(() => {
    setZoom(1);
    setRotation(0);
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  // Slideshow timer with hover pause support
  useEffect(() => {
    if (slideshow && isOpen && !isHoverPaused && items[index] && items[index].type !== 'video') {
      const timer = setInterval(() => {
        handleNext();
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [slideshow, isOpen, isHoverPaused, items.length, index, handleNext]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };


  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  const handleResetZoom = () => {
    setZoom(1);
    setRotation(0);
  };

  const handleDownload = () => {
    if (!items[index]) return;
    const itemSrc = resolveDriveUrl(items[index].src) || items[index].src;
    const link = document.createElement('a');
    link.href = itemSrc;
    link.download = `${items[index].title || 'rangrez-portal-photo'}-${index + 1}`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setToastMsg('Download initiated');
  };

  const handlePrint = () => {
    if (!items[index]) return;
    const itemSrc = resolveDriveUrl(items[index].src) || items[index].src;
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>${items[index].title || 'Rangrez Community Photo'}</title>
            <style>
              body { margin: 0; padding: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 95vh; font-family: sans-serif; background: #fff; }
              img { max-width: 95%; max-height: 85vh; object-fit: contain; border-radius: 8px; shadow: 0 4px 12px rgba(0,0,0,0.15); }
              .meta { margin-top: 15px; text-align: center; color: #333; }
              h2 { margin: 0 0 5px 0; font-size: 18px; color: #004B23; }
              p { margin: 2px 0; font-size: 12px; color: #666; }
            </style>
          </head>
          <body>
            <img src="${itemSrc}" onload="window.print();window.close();" />
            <div class="meta">
              <h2>${items[index].title || 'Rangrez Community Bharat Portal'}</h2>
              <p>${items[index].description || ''}</p>
              <p>Official Verification Seal • Rangrez Community Bharat Portal</p>
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  const handleShare = async () => {
    if (!items[index]) return;
    const shareData = {
      title: items[index].title || 'Rangrez Community Gallery',
      text: items[index].description || 'View this photo on Rangrez Community Bharat Portal',
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled or unsupported
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setToastMsg('Photo link copied to clipboard!');
    }
  };

  const toggleFavourite = (src: string) => {
    const isFav = favourites.includes(src);
    const updated = isFav ? favourites.filter(s => s !== src) : [...favourites, src];
    setFavourites(updated);
    localStorage.setItem('rangrez_fav_photos', JSON.stringify(updated));
    setToastMsg(isFav ? 'Removed from saved photos' : 'Saved to favourites ❤️');
  };

  // Double tap to zoom logic
  const handleDoubleTap = () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      setZoom(prev => (prev > 1 ? 1 : 2.5));
    }
    setLastTap(now);
  };

  // Ctrl/Meta Wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.2 : 0.2;
      setZoom(prev => Math.min(5, Math.max(1, prev + delta)));
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') {
        if (onBack) onBack();
        else onClose();
      }
      if (e.key === 'f' || e.key === 'F') toggleFullscreen();
      if (e.key === 'r' || e.key === 'R') handleRotate();
      if (e.key === '+' || e.key === '=') setZoom(z => Math.min(5, z + 0.5));
      if (e.key === '-') setZoom(z => Math.max(1, z - 0.5));
      if (e.key === '0') handleResetZoom();
      if (e.key === 'Home') { setIndex(0); handleResetZoom(); }
      if (e.key === 'End') { setIndex(items.length - 1); handleResetZoom(); }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose, onBack, items.length]);

  const handleDragEnd = (event: any, info: PanInfo) => {
    if (zoom > 1) return;
    const threshold = 80;
    if (info.offset.x < -threshold) handleNext();
    else if (info.offset.x > threshold) handlePrev();
    else if (info.offset.y > threshold * 1.5) {
      if (onBack) onBack();
      else onClose();
    }
  };

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[index] || items[0];
  const isVideo = currentItem.type === 'video';
  const isFav = favourites.includes(currentItem.src);

  return (
    <AnimatePresence>
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onWheel={handleWheel}
        className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-2xl flex flex-col select-none touch-none overflow-hidden"
      >
        {/* Toast Notification Popup */}
        <AnimatePresence>
          {toastMsg && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-1/2 -translate-x-1/2 z-[10020] bg-[#004B23] text-white text-xs font-bold px-4 py-2 rounded-full shadow-2xl border border-[#F4C430]/40 flex items-center gap-2"
            >
              <Check className="w-4 h-4 text-[#F4C430]" />
              <span>{toastMsg}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* TOP BAR - Enterprise Header Controls */}
        <div className="relative inset-x-0 h-16 flex items-center justify-between px-3 sm:px-6 bg-black/80 backdrop-blur-md text-white z-[10010] border-b border-white/10 shrink-0">
          
          {/* Left Side: Back Button & Title Info */}
          <div className="flex items-center gap-3 overflow-hidden min-w-0 pr-2">
            <button
              onClick={onBack || onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-extrabold border border-white/15 transition duration-200 shrink-0 cursor-pointer active:scale-95"
              title="Back to Previous Page (Esc)"
            >
              <ArrowLeft className="h-4 w-4 stroke-[2.5]" />
              <span className="hidden sm:inline">Back</span>
            </button>

            <div className="flex flex-col min-w-0">
              <h3 className="font-extrabold text-xs sm:text-sm md:text-base text-stone-100 truncate">
                {currentItem.title || albumTitle || 'Rangrez Digital HD Archive'}
              </h3>
              <p className="text-[10px] sm:text-xs text-[#F4C430] font-mono flex items-center gap-2 truncate">
                <span>{index + 1} of {items.length}</span>
                {currentItem.category && <span className="hidden md:inline text-gray-400">• {currentItem.category}</span>}
                {currentItem.album && <span className="hidden lg:inline text-gray-400">• {currentItem.album}</span>}
              </p>
            </div>
          </div>

          {/* Right Side: Tool Actions */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {/* Slideshow Play / Pause Button */}
            <button
              onClick={() => {
                setSlideshow(!slideshow);
                setToastMsg(!slideshow ? 'Slideshow started (4s)' : 'Slideshow paused');
              }}
              className={`px-2.5 py-1.5 rounded-xl border transition flex items-center gap-1.5 text-xs font-bold ${
                slideshow 
                  ? 'bg-[#F4C430] text-[#004B23] border-[#F4C430] shadow-[0_0_12px_rgba(244,196,48,0.4)]' 
                  : 'bg-white/10 hover:bg-white/20 text-stone-200 border-white/10'
              }`}
              title="Toggle Auto Slideshow"
            >
              {slideshow ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              <span className="hidden lg:inline">{slideshow ? 'Pause' : 'Play'}</span>
            </button>

            {/* Shuffle / Random Mode Toggle */}
            <button
              onClick={() => {
                setIsRandomMode(!isRandomMode);
                setToastMsg(!isRandomMode ? 'Random Shuffle Mode ON 🔀' : 'Sequential Order Mode 🔁');
              }}
              className={`p-2 rounded-xl border transition ${
                isRandomMode
                  ? 'bg-amber-500/20 text-[#F4C430] border-amber-500/40'
                  : 'text-stone-300 hover:text-white hover:bg-white/15 border-transparent'
              }`}
              title="Shuffle / Random Order"
            >
              <Shuffle className="h-4.5 w-4.5" />
            </button>

            {/* Zoom Controls (Desktop) */}
            <div className="hidden md:flex items-center bg-white/10 rounded-xl p-0.5 border border-white/10 mr-1">
              <button onClick={() => setZoom(z => Math.max(1, z - 0.5))} className="p-1.5 hover:bg-white/20 rounded-lg transition" title="Zoom Out (-)"><ZoomOut className="h-4 w-4" /></button>
              <span className="text-[10px] font-mono font-bold w-12 text-center text-[#F4C430]">{Math.round(zoom * 100)}%</span>
              <button onClick={() => setZoom(z => Math.min(5, z + 0.5))} className="p-1.5 hover:bg-white/20 rounded-lg transition" title="Zoom In (+)"><ZoomIn className="h-4 w-4" /></button>
              {zoom !== 1 && (
                <button onClick={handleResetZoom} className="p-1.5 hover:bg-white/20 rounded-lg transition text-[#F4C430]" title="Reset Zoom (0)"><RotateCw className="h-3.5 w-3.5" /></button>
              )}
            </div>

            {/* Print */}
            <button onClick={handlePrint} className="p-2 hover:bg-white/15 rounded-xl transition text-stone-300 hover:text-white" title="Print Image">
              <Printer className="h-4.5 w-4.5" />
            </button>

            {/* Rotate */}
            <button onClick={handleRotate} className="p-2 hover:bg-white/15 rounded-xl transition text-stone-300 hover:text-white hidden sm:block" title="Rotate (R)">
              <RotateCw className="h-4.5 w-4.5" />
            </button>

            {/* Favourite / Bookmark */}
            <button onClick={() => toggleFavourite(currentItem.src)} className={`p-2 rounded-xl transition ${isFav ? 'text-red-500 bg-red-500/10' : 'text-stone-300 hover:text-white hover:bg-white/15'}`} title="Save / Favourite">
              <Heart className={`h-4.5 w-4.5 ${isFav ? 'fill-current' : ''}`} />
            </button>

            {/* Share */}
            <button onClick={handleShare} className="p-2 hover:bg-white/15 rounded-xl transition text-stone-300 hover:text-white" title="Share Photo">
              <Share2 className="h-4.5 w-4.5" />
            </button>

            {/* Download */}
            {allowDownload && (
              <button onClick={handleDownload} className="p-2 hover:bg-white/15 rounded-xl transition text-stone-300 hover:text-white" title="Download HD File">
                <Download className="h-4.5 w-4.5" />
              </button>
            )}

            {/* Info Panel Toggle */}
            <button onClick={() => setShowInfo(!showInfo)} className={`p-2 rounded-xl transition ${showInfo ? 'bg-[#F4C430] text-black font-bold' : 'text-stone-300 hover:text-white hover:bg-white/15'}`} title="Image Metadata & Details">
              <Info className="h-4.5 w-4.5" />
            </button>

            {/* Fullscreen Toggle */}
            <button onClick={toggleFullscreen} className="p-2 hover:bg-white/15 rounded-xl transition text-stone-300 hover:text-white hidden md:block" title="Fullscreen (F)">
              {isFullscreen ? <Minimize className="h-4.5 w-4.5" /> : <Maximize className="h-4.5 w-4.5" />}
            </button>

            {/* Close Button */}
            <button 
              onClick={onClose} 
              aria-label="Close Lightbox"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-red-600/80 hover:bg-red-600 border border-red-400/40 shadow-lg flex items-center justify-center text-white transition-all duration-200 active:scale-95 ml-1" 
              title="Close (Esc)"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>
        </div>

        {/* MAIN STAGE - Intelligent Viewport Fit (85-90% Viewport) */}
        <div 
          onMouseEnter={() => setIsHoverPaused(true)}
          onMouseLeave={() => setIsHoverPaused(false)}
          className="relative flex-1 flex items-center justify-center overflow-hidden p-2 sm:p-4 md:p-6 bg-black/40"
        >
          
          {/* Previous Arrow */}
          <button 
            className="absolute left-2 sm:left-4 md:left-6 z-50 p-3 sm:p-4 bg-black/60 hover:bg-[#004B23] text-white rounded-full transition-all duration-200 border border-white/20 shadow-2xl group cursor-pointer active:scale-95" 
            onClick={handlePrev}
            title="Previous (←)"
          >
            <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Next Arrow */}
          <button 
            className="absolute right-2 sm:right-4 md:right-6 z-50 p-3 sm:p-4 bg-black/60 hover:bg-[#004B23] text-white rounded-full transition-all duration-200 border border-white/20 shadow-2xl group cursor-pointer active:scale-95" 
            onClick={handleNext}
            title="Next (→)"
          >
            <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Metadata Information Drawer Overlay */}
          <AnimatePresence>
            {showInfo && (
              <motion.div
                initial={{ opacity: 0, x: 320 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 320 }}
                transition={{ duration: 0.25 }}
                className="absolute right-0 inset-y-0 w-full sm:w-96 bg-stone-900/95 backdrop-blur-2xl border-l border-white/10 p-6 sm:p-8 z-[10015] overflow-y-auto text-white shadow-2xl space-y-6"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center space-x-2">
                    <Info className="h-5 w-5 text-[#F4C430]" />
                    <h4 className="font-extrabold text-lg tracking-tight">Archive Record Details</h4>
                  </div>
                  <button onClick={() => setShowInfo(false)} className="p-2 hover:bg-white/10 rounded-xl transition"><X className="h-5 w-5" /></button>
                </div>

                {/* Info Fields */}
                <div className="space-y-4 text-xs sm:text-sm">
                  {currentItem.title && (
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-wider text-[#F4C430] font-bold block">Title</span>
                      <p className="font-bold text-white text-base">{currentItem.title}</p>
                    </div>
                  )}

                  {currentItem.description && (
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-wider text-[#F4C430] font-bold block">Description</span>
                      <p className="text-stone-300 leading-relaxed font-light whitespace-pre-wrap">{currentItem.description}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/10 text-xs">
                    {currentItem.category && (
                      <div className="flex items-center gap-2 text-stone-300">
                        <Folder className="w-4 h-4 text-[#F4C430] shrink-0" />
                        <div>
                          <span className="text-[10px] text-gray-400 block">Category</span>
                          <span className="font-medium text-white">{currentItem.category}</span>
                        </div>
                      </div>
                    )}

                    {currentItem.album && (
                      <div className="flex items-center gap-2 text-stone-300">
                        <ImageIcon className="w-4 h-4 text-[#F4C430] shrink-0" />
                        <div>
                          <span className="text-[10px] text-gray-400 block">Album</span>
                          <span className="font-medium text-white">{currentItem.album}</span>
                        </div>
                      </div>
                    )}

                    {currentItem.date && (
                      <div className="flex items-center gap-2 text-stone-300">
                        <Calendar className="w-4 h-4 text-[#F4C430] shrink-0" />
                        <div>
                          <span className="text-[10px] text-gray-400 block">Date</span>
                          <span className="font-medium text-white">{currentItem.date}</span>
                        </div>
                      </div>
                    )}

                    {currentItem.photographer && (
                      <div className="flex items-center gap-2 text-stone-300">
                        <Camera className="w-4 h-4 text-[#F4C430] shrink-0" />
                        <div>
                          <span className="text-[10px] text-gray-400 block">Photographer</span>
                          <span className="font-medium text-white">{currentItem.photographer}</span>
                        </div>
                      </div>
                    )}

                    {currentItem.location && (
                      <div className="flex items-center gap-2 text-stone-300 col-span-2">
                        <MapPin className="w-4 h-4 text-[#F4C430] shrink-0" />
                        <div>
                          <span className="text-[10px] text-gray-400 block">Location</span>
                          <span className="font-medium text-white">{currentItem.location}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {currentItem.tags && currentItem.tags.length > 0 && (
                    <div className="space-y-1.5 pt-2 border-t border-white/10">
                      <span className="text-[10px] uppercase tracking-wider text-[#F4C430] font-bold block flex items-center gap-1">
                        <Tag className="w-3 h-3" /> Tags
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {currentItem.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-0.5 rounded-md bg-white/10 text-[11px] text-stone-200 border border-white/10">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentItem.metadata && (
                    <div className="pt-2 border-t border-white/10 text-[11px] text-stone-400 font-mono">
                      <span>Ref Code: {currentItem.metadata}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* MEDIA DISPLAY CONTAINER */}
          <motion.div
            key={index}
            drag={zoom === 1 ? "x" : true}
            dragConstraints={zoom === 1 ? { left: 0, right: 0 } : false}
            onDragEnd={handleDragEnd}
            onClick={handleDoubleTap}
            className="w-full h-full flex items-center justify-center relative p-1 sm:p-2"
          >
            <motion.div 
              className="relative w-full h-full flex items-center justify-center max-w-[90vw] max-h-[85vh]"
              animate={{ 
                scale: zoom,
                rotate: rotation
              }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            >
              {/* Error fallback */}
              {imgError ? (
                <div className="bg-stone-900 border border-stone-800 rounded-2xl p-8 max-w-md text-center space-y-4 shadow-2xl">
                  <div className="w-16 h-16 rounded-full bg-stone-800 flex items-center justify-center mx-auto text-amber-500">
                    <ImageIcon className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-white text-base">Image Unavailable</h4>
                    <p className="text-xs text-stone-400">The requested photo URL could not be retrieved from the server or archive drive.</p>
                  </div>
                  <button
                    onClick={() => { setImgError(false); setImgLoading(true); }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#004B23] hover:bg-[#00381a] text-white text-xs font-bold transition cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4 animate-spin-slow" /> Retry Loading
                  </button>
                </div>
              ) : isVideo ? (
                <div className="w-full h-full flex items-center justify-center max-w-7xl max-h-[85vh]">
                  {currentItem.src.includes('youtube.com') || currentItem.src.includes('youtu.be') ? (
                    <iframe
                      src={`${currentItem.src.replace('watch?v=', 'embed/')}?autoplay=1`}
                      className="w-full aspect-video rounded-2xl shadow-2xl max-h-[80vh]"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video
                      src={resolveDriveUrl(currentItem.src) || currentItem.src}
                      autoPlay
                      controls
                      className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-2xl object-contain"
                    />
                  )}
                </div>
              ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                  {imgLoading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-stone-400">
                      <RefreshCw className="w-8 h-8 text-[#F4C430] animate-spin" />
                      <span className="text-xs font-mono font-medium">Loading HD Resolution...</span>
                    </div>
                  )}
                  <SmartImage
                    src={currentItem.src}
                    containerClassName="bg-transparent w-full h-full flex items-center justify-center"
                    className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl rounded-2xl"
                    objectFit="contain"
                    priority={true}
                    onLoad={() => setImgLoading(false)}
                    onError={() => { setImgLoading(false); setImgError(true); }}
                  />
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* BOTTOM THUMBNAIL STRIP & CONTROLS */}
        <div className="bg-black/90 backdrop-blur-md border-t border-white/10 flex flex-col shrink-0 z-[10010]">
          {/* Thumbnail Bar */}
          <div className="h-20 flex items-center justify-center px-4 overflow-x-auto no-scrollbar">
            <div ref={thumbnailContainerRef} className="flex space-x-2 py-2">
              {items.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => { setIndex(idx); setZoom(1); setRotation(0); }}
                  className={`
                    relative flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer
                    ${idx === index ? 'border-[#F4C430] scale-110 shadow-[0_0_15px_rgba(244,196,48,0.5)] z-10' : 'border-transparent opacity-50 hover:opacity-100'}
                  `}
                  title={item.title || `Photo ${idx + 1}`}
                >
                  <SmartImage 
                    src={item.src} 
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover"
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <Play className="h-4 w-4 text-white fill-current" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Secondary Toolbar */}
          <div className="h-12 flex items-center justify-between px-6 border-t border-white/5 sm:hidden text-white text-xs">
            <button onClick={handlePrev} className="flex items-center gap-1 font-bold text-stone-300"><ChevronLeft className="h-5 w-5" /> Prev</button>
            <button onClick={() => setSlideshow(!slideshow)} className="flex items-center gap-1 text-[#F4C430] font-extrabold">
              {slideshow ? <><Pause className="h-4 w-4" /> Pause Auto</> : <><Play className="h-4 w-4" /> Play Slideshow</>}
            </button>
            <button onClick={handleNext} className="flex items-center gap-1 font-bold text-stone-300">Next <ChevronRight className="h-5 w-5" /></button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// Alias export for universal photo viewer imports
export { PremiumLightbox as UniversalPhotoViewer };
