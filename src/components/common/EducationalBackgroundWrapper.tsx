import React, { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { educationGalleryImages } from '../../data/educationGalleryImages';

interface EducationalBackgroundWrapperProps {
  children: ReactNode;
  overlayOpacity?: number; // Default 0.65 (65% dark overlay)
  className?: string;
  sectionTitle?: string;
}

export default function EducationalBackgroundWrapper({
  children,
  overlayOpacity = 0.65,
  className = '',
  sectionTitle
}: EducationalBackgroundWrapperProps) {
  const [bgImage, setBgImage] = useState<string>('');

  useEffect(() => {
    // Pick a random image on page refresh / section mount
    if (educationGalleryImages && educationGalleryImages.length > 0) {
      const randomIndex = Math.floor(Math.random() * educationGalleryImages.length);
      setBgImage(educationGalleryImages[randomIndex].url);
    }
  }, []);

  return (
    <div className={`relative overflow-hidden w-full ${className}`}>
      {/* Random Background Image with Smooth Fade & Dark Overlay (60-70%) */}
      {bgImage && (
        <AnimatePresence mode="wait">
          <motion.div
            key={bgImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute inset-0 z-0 pointer-events-none"
          >
            <img
              src={bgImage}
              alt={sectionTitle ? `${sectionTitle} Educational Background` : 'Educational Section Background'}
              className="w-full h-full object-cover filter brightness-75 scale-102"
              loading="eager"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            {/* Dark Overlay (60-70%) for Maximum Text Readability */}
            <div 
              className="absolute inset-0 bg-gradient-to-b from-[#021109]/90 via-stone-950/80 to-[#021109]/90"
              style={{ opacity: overlayOpacity + 0.15 }}
            />
          </motion.div>
        </AnimatePresence>
      )}

      {/* Content Container (Ensures Crisp, Readable Text) */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
