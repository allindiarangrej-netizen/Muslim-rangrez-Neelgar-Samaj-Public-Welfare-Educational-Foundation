import React, { useState } from 'react';
import { motion } from 'motion/react';

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
