import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, Award, Sparkles, ShieldCheck } from 'lucide-react';

interface ProfileImageProps {
  src?: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'custom';
  style?: React.CSSProperties;
  objectPosition?: 'center' | 'top' | 'bottom';
  enableHoverPreview?: boolean;
  name?: string;
  designation?: string;
  badge?: string;
}

const sizeMap = {
  'xs': 'w-8 h-8',
  'sm': 'w-12 h-12',
  'md': 'w-16 h-16',
  'lg': 'w-24 h-24',
  'xl': 'w-32 h-32',
  '2xl': 'w-48 h-48',
  '3xl': 'w-64 h-64',
  'custom': '',
};

/**
 * Global Profile Image Component with Ultra Premium Image Hover Preview
 * Ensures images fill containers, handles fallback placeholders, and shows a 
 * 350-500px floating glassmorphic preview with golden border on hover/tap.
 */
export const ProfileImage: React.FC<ProfileImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  containerClassName = '',
  size = 'md',
  style,
  objectPosition = 'center',
  enableHoverPreview = true,
  name,
  designation,
  badge
}) => {
  const defaultPlaceholder = '/images/committees/profile_avatar_placeholder.svg';
  const finalSrc = src || defaultPlaceholder;
  const [imgSrc, setImgSrc] = useState<string>(finalSrc);

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setImgSrc(src || defaultPlaceholder);
  }, [src]);

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
  }, []);

  const handleMouseEnter = () => {
    if (!enableHoverPreview || isTouchDevice) return;
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    // Instant smooth show
    hoverTimeoutRef.current = setTimeout(() => {
      setIsPreviewOpen(true);
    }, 80);
  };

  const handleMouseLeave = () => {
    if (!enableHoverPreview || isTouchDevice) return;
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setIsPreviewOpen(false);
    }, 150);
  };

  const handleImageClick = (e: React.MouseEvent) => {
    if (!enableHoverPreview) return;
    // On touch devices or when user explicitly taps photo
    if (isTouchDevice) {
      e.stopPropagation();
      setIsPreviewOpen((prev) => !prev);
    }
  };

  const displayName = name || alt;

  return (
    <>
      {/* Thumbnail Container */}
      <div 
        className={`group/img relative ${sizeMap[size] || ''} rounded-full overflow-hidden border-2 border-white shadow-md bg-gray-50 flex-shrink-0 cursor-pointer transition-transform duration-300 hover:z-20 ${containerClassName}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleImageClick}
      >
        <img
          src={imgSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110 ${className}`}
          referrerPolicy="no-referrer"
          loading="lazy"
          style={{ ...style, objectPosition }}
          onError={() => {
            setImgSrc(defaultPlaceholder);
          }}
        />

        {/* Hover Lens Indicator */}
        {enableHoverPreview && (
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
            <div className="bg-[#0B132B]/80 text-[#FFD54A] p-1.5 rounded-full border border-[#FFD54A]/60 shadow-lg transform scale-75 group-hover/img:scale-100 transition-transform duration-300">
              <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFD54A]" />
            </div>
          </div>
        )}
      </div>

      {/* Floating Ultra Premium Image Preview Modal / Portal */}
      {enableHoverPreview && typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isPreviewOpen && (
            <div 
              className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 pointer-events-auto select-none"
              onMouseEnter={() => {
                if (!isTouchDevice && hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
              }}
              onMouseLeave={handleMouseLeave}
            >
              {/* Dimmed Background Overlay with Soft Blur */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-black/70 backdrop-blur-md cursor-pointer"
                onClick={() => setIsPreviewOpen(false)}
              />

              {/* Floating Glassmorphic Golden Card Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.82, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 10 }}
                transition={{ type: "spring", damping: 26, stiffness: 380 }}
                className="relative z-10 w-[92vw] sm:w-[440px] md:w-[480px] max-w-[500px] bg-gradient-to-b from-[#0B132B]/95 via-[#1C2541]/95 to-[#0B132B]/95 backdrop-blur-2xl border-2 sm:border-4 border-[#FFD54A] rounded-3xl p-4 sm:p-6 shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_40px_rgba(255,213,74,0.35)] flex flex-col items-center overflow-hidden"
              >
                {/* Background Golden Glow Accents */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#FFD54A]/15 rounded-full blur-3xl pointer-events-none" />
                
                {/* Top Header Bar */}
                <div className="w-full flex items-center justify-between pb-3 mb-2 border-b border-white/10 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#FFD54A]/20 border border-[#FFD54A]/50 text-[#FFD54A] p-1.5 rounded-xl">
                      <Sparkles className="w-4 h-4 text-[#FFD54A]" />
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#FFD54A] flex items-center gap-1">
                        <span>Hall of Excellence</span>
                        <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      </span>
                      <p className="text-xs text-gray-300 font-semibold truncate max-w-[240px]">
                        High Resolution Preview
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsPreviewOpen(false)}
                    className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full border border-white/20 transition-colors cursor-pointer"
                    title="Close Preview"
                  >
                    <X className="w-4 h-4 text-[#FFD54A]" />
                  </button>
                </div>

                {/* High-Resolution Uncropped Image Display */}
                <div className="relative w-full max-h-[55vh] sm:max-h-[62vh] rounded-2xl overflow-hidden bg-black/60 border border-[#FFD54A]/30 p-2 flex items-center justify-center shadow-inner my-2">
                  <img
                    src={imgSrc}
                    alt={alt}
                    className="max-h-[50vh] sm:max-h-[58vh] w-auto max-w-full object-contain rounded-xl drop-shadow-2xl transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    onError={() => setImgSrc(defaultPlaceholder)}
                  />
                </div>

                {/* Person Info / Crest Label */}
                <div className="w-full text-center mt-3 pt-2 border-t border-white/10 relative z-10">
                  <h4 className="text-lg sm:text-xl font-black text-white tracking-tight flex items-center justify-center gap-2">
                    <span>{displayName}</span>
                    <Award className="w-4 h-4 text-[#FFD54A] shrink-0" />
                  </h4>
                  {designation && (
                    <p className="text-xs sm:text-sm text-[#FFD54A] font-bold mt-0.5 line-clamp-1">
                      {designation}
                    </p>
                  )}
                  {badge && (
                    <span className="inline-block mt-2 bg-amber-500/20 text-[#FFD54A] border border-amber-400/40 text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-full">
                      {badge}
                    </span>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

