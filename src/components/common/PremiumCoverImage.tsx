import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PremiumCoverImageProps {
  src: string;
  alt?: string;
  overlayOpacity?: number; // E.g., 0.2 to 0.4 (20% to 40% as requested)
  focalPoint?: string; // e.g. 'center', 'top', 'center 30%' for Smart Focal Point
  className?: string;
  enableVignette?: boolean;
}

/**
 * PremiumCoverImage Component
 * Implements high-resolution optimized cover images with crisp clarity,
 * smooth fade-in animations, smart focal point alignment, and a light gradient
 * overlay to maximize visibility while maintaining excellent text contrast.
 */
export const PremiumCoverImage: React.FC<PremiumCoverImageProps> = ({
  src,
  alt = 'Premium Cover Image',
  overlayOpacity = 0.25, // default soft dark overlay (25%)
  focalPoint = 'center',
  className = '',
  enableVignette = true
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Parse width and high resolution parameters to ensure maximum clarity (HD/4K optimized)
  const getOptimizedUrl = (url: string) => {
    if (!url) return '';
    if (url.includes('unsplash.com')) {
      // Remove any existing width/quality params and inject ultra-high resolution (4K ready, optimized)
      const baseUrl = url.split('?')[0];
      return `${baseUrl}?q=90&w=2560&auto=format&fit=crop`;
    }
    return url;
  };

  const optimizedSrc = getOptimizedUrl(src);

  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden z-0 select-none ${className}`}>
      {/* Crisp and sharp image with premium enhancements */}
      <motion.img
        src={optimizedSrc}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="eager"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ 
          opacity: isLoaded ? 1 : 0, 
          scale: isLoaded ? 1 : 1.05 
        }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        onLoad={() => setIsLoaded(true)}
        className="w-full h-full object-cover select-none transition-all duration-700"
        style={{
          objectPosition: focalPoint,
          filter: 'contrast(1.08) brightness(1.05) saturate(1.02) sharpness(1.2px)',
        }}
      />

      {/* Loading placeholder skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/20 via-slate-900/20 to-[#0B132B]/20 animate-pulse" />
      )}

      {/* Intelligent, subtle readability overlay instead of heavy black filter */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/5 mix-blend-multiply pointer-events-none transition-opacity duration-500"
        style={{ opacity: overlayOpacity }}
      />

      {/* Soft Premium Vignette to frame the borders elegantly and highlight central subjects */}
      {enableVignette && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.45)_95%)] mix-blend-overlay pointer-events-none" />
      )}
    </div>
  );
};

interface PremiumCoverSlideshowProps {
  srcs: string[];
  intervalMs?: number; // default 7000 (7 seconds)
  alt?: string;
  overlayOpacity?: number;
  focalPoint?: string;
  className?: string;
  enableVignette?: boolean;
}

/**
 * PremiumCoverSlideshow Component
 * Displays a rotating slideshow of HD/4K responsive images with a smooth fade transition.
 * Uses a premium gradient overlay to ensure excellent text contrast and legibility.
 */
export const PremiumCoverSlideshow: React.FC<PremiumCoverSlideshowProps> = ({
  srcs,
  intervalMs = 7000,
  alt = 'Premium Slideshow Cover',
  overlayOpacity = 0.25,
  focalPoint = 'center',
  className = '',
  enableVignette = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!srcs || srcs.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % srcs.length);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [srcs, intervalMs]);

  const getOptimizedUrl = (url: string) => {
    if (!url) return '';
    if (url.includes('unsplash.com')) {
      const baseUrl = url.split('?')[0];
      return `${baseUrl}?q=90&w=2560&auto=format&fit=crop`;
    }
    return url;
  };

  if (!srcs || srcs.length === 0) return null;

  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden z-0 select-none ${className}`}>
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={getOptimizedUrl(srcs[currentIndex])}
          alt={`${alt} - Slide ${currentIndex + 1}`}
          referrerPolicy="no-referrer"
          loading="eager"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full object-cover select-none"
          style={{
            objectPosition: focalPoint,
            filter: 'contrast(1.06) brightness(1.05) saturate(1.02)',
          }}
        />
      </AnimatePresence>

      {/* Intelligent, subtle readability gradient overlay instead of heavy black filter */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent mix-blend-multiply pointer-events-none transition-opacity duration-500"
        style={{ opacity: overlayOpacity }}
      />

      {/* Soft Premium Vignette to frame the borders elegantly and highlight central subjects */}
      {enableVignette && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.4)_90%)] mix-blend-overlay pointer-events-none" />
      )}
    </div>
  );
};

