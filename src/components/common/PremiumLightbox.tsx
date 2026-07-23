import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useDragControls, PanInfo } from 'motion/react';
import { 
  X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, 
  Play, Pause, Maximize2, Download, 
  Info, RotateCw, Share2, Image as ImageIcon,
  Volume2, VolumeX, FastForward, Rewind,
  Video, MapPin
} from 'lucide-react';
import { resolveDriveUrl } from '../../lib/driveUtils';
import SmartImage from './SmartImage';

interface PremiumLightboxProps {
  items: {
    src: string;
    type: 'image' | 'video';
    title?: string;
    description?: string;
    metadata?: string;
    albumName?: string;
    regionName?: string;
  }[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function PremiumLightbox({ 
  items, initialIndex, isOpen, onClose 
}: PremiumLightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [slideshow, setSlideshow] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const [lastTap, setLastTap] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setIndex(initialIndex);
      setZoom(1);
      setRotation(0);
      document.body.style.overflow = 'hidden';
      
      // Push state to history so back button closes lightbox
      window.history.pushState({ lightbox: true }, '');
    } else {
      document.body.style.overflow = '';
    }
  }, [initialIndex, isOpen]);

  const handleClose = useCallback(() => {
    if (window.history.state?.lightbox) {
      window.history.back();
    }
    onClose();
  }, [onClose]);

  // Handle browser back button
  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      if (isOpen) {
        onClose();
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (slideshow && isOpen && items[index] && items[index].type === 'image') {
      const timer = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [slideshow, isOpen, items.length, index]);

  const handleNext = useCallback(() => {
    setZoom(1);
    setRotation(0);
    setIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setZoom(1);
    setRotation(0);
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  const setZoomLevel = (level: number) => {
    setZoom(level);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resolveDriveUrl(items[index].src) || '';
    link.download = `media-${index + 1}`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Double tap to zoom logic
  const handleDoubleTap = (e: React.MouseEvent | React.TouchEvent) => {
    const now = Date.now();
    if (now - lastTap < 300) {
      setZoom(prev => (prev > 1 ? 1 : 2.5));
    }
    setLastTap(now);
  };

  // Wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.2 : 0.2;
      setZoom(prev => Math.min(5, Math.max(1, prev + delta)));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') handleClose();
      if (e.key === 'f') toggleFullscreen();
      if (e.key === 'r') handleRotate();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, handleClose]);

  const handleDragEnd = (event: any, info: PanInfo) => {
    if (zoom > 1) return;
    const threshold = 100;
    if (info.offset.x < -threshold) handleNext();
    else if (info.offset.x > threshold) handlePrev();
    else if (info.offset.y > threshold * 1.5) handleClose();
  };

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[index];
  if (!currentItem) return null;
  const isVideo = currentItem.type === 'video';

  return (
    <AnimatePresence>
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onWheel={handleWheel}
        className="fixed inset-0 top-[96px] z-[8000] bg-black/95 backdrop-blur-xl flex flex-col select-none touch-none border-t border-white/10"
      >
        {/* Top bar - Professional Metadata & Controls */}
        <div className="absolute top-0 inset-x-0 h-24 flex items-center justify-between px-4 md:px-8 bg-gradient-to-b from-black to-transparent text-white z-[70]">
          <div className="flex flex-col min-w-0">
            {/* Breadcrumb row */}
            <div className="flex items-center space-x-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
              <span className="hover:text-[#F4C430] cursor-pointer">Media</span>
              <ChevronRight className="h-2 w-2" />
              <span className="hover:text-[#F4C430] cursor-pointer truncate max-w-[100px]">{currentItem.regionName || 'Regional'}</span>
              <ChevronRight className="h-2 w-2" />
              <span className="text-[#F4C430] truncate max-w-[120px]">{currentItem.albumName || 'Album'}</span>
            </div>
            
            <div className="flex items-center space-x-4 overflow-hidden">
              <div className="hidden sm:flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg backdrop-blur-md border border-white/10 shadow-lg shrink-0">
                {isVideo ? <Video className="h-5 w-5 text-[#F4C430]" /> : <ImageIcon className="h-5 w-5 text-[#F4C430]" />}
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center space-x-2">
                  <h3 className="font-bold text-sm md:text-lg truncate tracking-tight">{currentItem.title || 'Digital Archive'}</h3>
                  <span className="px-1.5 py-0.5 bg-white/10 rounded text-[9px] font-bold text-[#F4C430] uppercase shrink-0">
                    {index + 1} / {items.length}
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-[10px] text-gray-400 font-mono mt-0.5">
                  {currentItem.metadata && (
                    <span className="flex items-center truncate">
                      <MapPin className="h-3 w-3 mr-1 text-[#F4C430]" />
                      {currentItem.metadata}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-1.5 md:space-x-3">
            {/* Gallery Navigation */}
            <div className="hidden sm:flex items-center bg-white/10 rounded-xl p-1 border border-white/5">
              <button 
                onClick={handleClose}
                className="flex items-center space-x-1 px-3 py-1.5 text-[10px] font-bold text-white hover:bg-white/10 rounded-lg transition"
              >
                <ChevronLeft className="h-3 w-3" />
                <span>Back to Album</span>
              </button>
            </div>

            {/* Zoom Controls Bar */}
            <div className="hidden md:flex items-center bg-white/10 rounded-xl p-1 border border-white/5 mr-1 lg:mr-2">
              <button 
                onClick={() => setZoomLevel(1)} 
                className={`px-2 py-1.5 text-[10px] font-bold rounded-lg transition-colors ${zoom === 1 ? 'bg-[#F4C430] text-black' : 'hover:bg-white/10 text-gray-300'}`}
              >
                Fit
              </button>
              <button 
                onClick={() => setZoomLevel(0.75)} 
                className={`px-2 py-1.5 text-[10px] font-bold rounded-lg transition-colors ${zoom === 0.75 ? 'bg-[#F4C430] text-black' : 'hover:bg-white/10 text-gray-300'}`}
              >
                75%
              </button>
              <button 
                onClick={() => setZoomLevel(1.25)} 
                className={`px-2 py-1.5 text-[10px] font-bold rounded-lg transition-colors ${zoom === 1.25 ? 'bg-[#F4C430] text-black' : 'hover:bg-white/10 text-gray-300'}`}
              >
                125%
              </button>
              <div className="h-4 w-px bg-white/10 mx-1"></div>
              <button onClick={() => setZoom(z => Math.max(0.25, z - 0.25))} className="p-1.5 hover:bg-white/10 rounded-lg transition" title="Zoom Out"><ZoomOut className="h-4 w-4" /></button>
              <span className="text-[10px] font-mono w-10 text-center">{Math.round(zoom * 100)}%</span>
              <button onClick={() => setZoom(z => Math.min(5, z + 0.25))} className="p-1.5 hover:bg-white/10 rounded-lg transition" title="Zoom In"><ZoomIn className="h-4 w-4" /></button>
            </div>

            <div className="flex items-center bg-white/10 rounded-xl p-1 border border-white/5">
              <button onClick={handleRotate} className="p-2 hover:bg-white/10 rounded-lg transition" title="Rotate (R)"><RotateCw className="h-4 w-4" /></button>
              <button onClick={handleDownload} className="p-2 hover:bg-white/10 rounded-lg transition" title="Download"><Download className="h-4 w-4" /></button>
              <button onClick={toggleFullscreen} className="p-2 hover:bg-white/10 rounded-lg transition hidden sm:block" title="Fullscreen (F)"><Maximize2 className="h-4 w-4" /></button>
              <button 
                onClick={() => setShowInfo(!showInfo)} 
                className={`p-2 rounded-lg transition ${showInfo ? 'bg-[#F4C430] text-black' : 'hover:bg-white/10 text-white'}`}
                title="Details"
              >
                <Info className="h-4 w-4" />
              </button>
            </div>

            <button 
              onClick={handleClose} 
              className="w-10 h-10 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded-xl transition shadow-lg ml-1 md:ml-3 shrink-0" 
              title="Close (Esc)"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Main Stage - Ensuring maximum space usage */}
        <div className="relative flex-1 flex items-center justify-center overflow-hidden bg-black/40">
          {/* Navigation Arrows (Desktop) */}
          <button 
            className="absolute left-6 z-50 p-4 bg-black/40 hover:bg-black/60 text-white rounded-full transition-all border border-white/10 hidden md:block group" 
            onClick={handlePrev}
          >
            <ChevronLeft className="h-8 w-8 group-hover:scale-110 transition-transform" />
          </button>
          <button 
            className="absolute right-6 z-50 p-4 bg-black/40 hover:bg-black/60 text-white rounded-full transition-all border border-white/10 hidden md:block group" 
            onClick={handleNext}
          >
            <ChevronRight className="h-8 w-8 group-hover:scale-110 transition-transform" />
          </button>

          {/* Info Panel Overlay */}
          <AnimatePresence>
            {showInfo && currentItem.description && (
              <motion.div
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 300 }}
                className="absolute right-0 inset-y-0 w-full sm:w-96 bg-black/95 backdrop-blur-2xl border-l border-white/10 p-8 z-[80] overflow-y-auto text-white shadow-2xl"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <Info className="h-5 w-5 text-[#F4C430]" />
                    <h4 className="font-bold text-xl tracking-tight">Media Details</h4>
                  </div>
                  <button onClick={() => setShowInfo(false)} className="p-2 hover:bg-white/10 rounded-full transition"><X className="h-5 w-5" /></button>
                </div>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <h5 className="text-[10px] uppercase tracking-[0.2em] text-[#F4C430] font-bold">Metadata</h5>
                    <p className="text-sm text-gray-400 font-mono">{currentItem.metadata}</p>
                  </div>
                  <div className="space-y-3">
                    <h5 className="text-[10px] uppercase tracking-[0.2em] text-[#F4C430] font-bold">Description</h5>
                    <p className="text-base leading-relaxed text-gray-100 whitespace-pre-wrap">{currentItem.description}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Media Container */}
          <motion.div
            key={index}
            drag={zoom === 1 ? "x" : true}
            dragConstraints={zoom === 1 ? { left: 0, right: 0 } : false}
            onDragEnd={handleDragEnd}
            onClick={handleDoubleTap}
            className="w-full h-full flex items-center justify-center p-2 sm:p-4"
          >
            <motion.div 
              className="relative w-full h-full flex items-center justify-center"
              animate={{ 
                scale: zoom,
                rotate: rotation
              }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              {isVideo ? (
                <div className="w-full h-full flex items-center justify-center max-w-7xl">
                  {currentItem.src.includes('youtube.com') || currentItem.src.includes('youtu.be') ? (
                    <iframe
                      src={`${currentItem.src.replace('watch?v=', 'embed/')}?autoplay=1&mute=${isMuted ? 1 : 0}`}
                      className="w-full aspect-video rounded-lg shadow-2xl"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video
                      src={resolveDriveUrl(currentItem.src) || currentItem.src}
                      autoPlay
                      controls
                      muted={isMuted}
                      className="max-h-full max-w-full rounded-lg shadow-2xl"
                    />
                  )}
                </div>
              ) : (
                <SmartImage
                  src={currentItem.src}
                  containerClassName="bg-transparent w-full h-full"
                  className="max-h-full max-w-full object-contain shadow-2xl"
                  objectFit="contain"
                  priority={true}
                />
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom bar with Thumbnails & Controls */}
        <div className="bg-black/95 backdrop-blur-md border-t border-white/5 flex flex-col z-[70]">
          {/* Progress / Strip */}
          <div className="h-24 flex items-center justify-center px-4 overflow-x-auto no-scrollbar scroll-smooth">
            <div className="flex space-x-3 py-4">
              {items.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => { setIndex(idx); setZoom(1); setRotation(0); }}
                  className={`
                    relative flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden border-2 transition-all duration-300
                    ${idx === index ? 'border-[#F4C430] scale-110 shadow-[0_0_20px_rgba(244,196,48,0.5)] z-10' : 'border-transparent opacity-50 hover:opacity-100'}
                  `}
                >
                  <SmartImage 
                    src={item.src} 
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover"
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <Play className="h-5 w-5 text-white fill-current" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Secondary Controls (Mobile friendly) */}
          <div className="h-14 flex items-center justify-around px-4 border-t border-white/5 sm:hidden">
            <button onClick={handlePrev} className="p-2"><ChevronLeft className="h-6 w-6 text-white" /></button>
            <button onClick={() => setSlideshow(!slideshow)} className="p-2 text-white">
              {slideshow ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </button>
            <button onClick={handleNext} className="p-2"><ChevronRight className="h-6 w-6 text-white" /></button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
