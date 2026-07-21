import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useDragControls, PanInfo } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Play, Pause, Maximize, Minimize, Download, Info } from 'lucide-react';
import { resolveDriveUrl, EVENT_FALLBACK_IMAGE } from '../../lib/driveUtils';
import SmartImage from './SmartImage';

interface PremiumLightboxProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  metadata?: string;
}

export default function PremiumLightbox({ 
  images, initialIndex, isOpen, onClose, title, description, metadata 
}: PremiumLightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);
  const [slideshow, setSlideshow] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIndex(initialIndex);
    setZoom(1);
  }, [initialIndex, isOpen]);

  useEffect(() => {
    if (slideshow && isOpen) {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [slideshow, isOpen, images.length]);

  const handleNext = useCallback(() => {
    setZoom(1);
    setIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setZoom(1);
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') onClose();
      if (e.key === 'f') toggleFullscreen();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, onClose]);

  const handleDragEnd = (event: any, info: PanInfo) => {
    if (zoom > 1) return; // Disable swipe when zoomed in
    const threshold = 50;
    if (info.offset.x < -threshold) handleNext();
    else if (info.offset.x > threshold) handlePrev();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black flex flex-col select-none"
      >
        {/* Top bar */}
        <div className="absolute top-0 inset-x-0 h-16 flex items-center justify-between px-6 bg-gradient-to-b from-black/80 to-transparent text-white z-50">
          <div className="flex flex-col max-w-[60%]">
            <h3 className="font-bold text-sm md:text-base truncate">{title || 'Event Gallery'}</h3>
            {metadata && <p className="text-[10px] md:text-xs text-gray-300 truncate">{metadata}</p>}
          </div>
          
          <div className="flex items-center space-x-3 md:space-x-5">
            <button 
              onClick={() => setShowInfo(!showInfo)}
              className="p-2 hover:bg-white/10 rounded-full transition"
              title="Show info"
            >
              <Info className={`h-5 w-5 ${showInfo ? 'text-emerald-400' : 'text-white'}`} />
            </button>
            <button 
              onClick={() => setSlideshow(!slideshow)}
              className="p-2 hover:bg-white/10 rounded-full transition"
              title={slideshow ? 'Pause' : 'Play'}
            >
              {slideshow ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </button>
            <button 
              onClick={toggleFullscreen}
              className="hidden md:block p-2 hover:bg-white/10 rounded-full transition"
              title="Toggle Fullscreen"
            >
              {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
            </button>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition bg-white/10"
              title="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Main Stage */}
        <div className="relative flex-1 flex items-center justify-center overflow-hidden">
          {/* Navigation Arrows (Desktop) */}
          <button 
            className="absolute left-6 z-50 p-3 bg-black/30 hover:bg-black/50 text-white rounded-full transition hidden md:block" 
            onClick={handlePrev}
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button 
            className="absolute right-6 z-50 p-3 bg-black/30 hover:bg-black/50 text-white rounded-full transition hidden md:block" 
            onClick={handleNext}
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Info Panel Overlay */}
          <AnimatePresence>
            {showInfo && description && (
              <motion.div
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 300 }}
                className="absolute right-0 inset-y-0 w-80 bg-black/90 backdrop-blur-xl border-l border-white/10 p-8 z-[60] overflow-y-auto text-white"
              >
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-bold text-xl text-emerald-400">Information</h4>
                  <button onClick={() => setShowInfo(false)} className="p-1 hover:bg-white/10 rounded"><X className="h-5 w-5" /></button>
                </div>
                <div className="space-y-6">
                  <div>
                    <h5 className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-bold">About this image</h5>
                    <p className="text-sm leading-relaxed text-gray-200 whitespace-pre-wrap">{description}</p>
                  </div>
                  <div>
                    <h5 className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-bold">Event Details</h5>
                    <p className="text-xs text-gray-400">{metadata}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Image Container with Gestures & Zoom */}
          <motion.div
            key={index}
            drag={zoom === 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            className="w-full h-full flex items-center justify-center p-4 md:p-12"
          >
            <motion.div 
              className="relative w-full h-full flex items-center justify-center"
              animate={{ scale: zoom }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <SmartImage
                src={images[index]}
                containerClassName="bg-transparent"
                className="max-h-full max-w-full object-contain shadow-2xl rounded-sm"
                objectFit="contain"
                priority={true}
              />
            </motion.div>
          </motion.div>

          {/* Zoom Controls Overlay */}
          <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white z-50">
            <button onClick={() => setZoom(z => Math.max(1, z - 0.5))} className="p-1 hover:bg-white/10 rounded-full"><ZoomOut className="h-5 w-5" /></button>
            <span className="text-xs font-mono w-12 text-center">{Math.round(zoom * 100)}%</span>
            <button onClick={() => setZoom(z => Math.min(5, z + 0.5))} className="p-1 hover:bg-white/10 rounded-full"><ZoomIn className="h-5 w-5" /></button>
          </div>
        </div>

        {/* Thumbnails / Strip */}
        <div className="h-24 bg-black/90 border-t border-white/5 flex items-center justify-center px-6 z-50">
          <div className="flex space-x-2 overflow-x-auto py-2 no-scrollbar max-w-7xl">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => { setIndex(idx); setZoom(1); }}
                className={`
                  relative flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all duration-300
                  ${idx === index ? 'border-emerald-500 scale-110 shadow-[0_0_15px_rgba(16,185,129,0.4)]' : 'border-transparent opacity-40 hover:opacity-100'}
                `}
              >
                <SmartImage 
                  src={img} 
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
