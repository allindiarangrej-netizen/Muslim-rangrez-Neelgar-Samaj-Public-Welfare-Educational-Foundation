import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { initialHeritageAlbums } from '../data/heritageMedia';

interface CommunityHighlightsGalleryProps {
  currentLanguage: 'en' | 'hi' | 'ur';
}

export default function CommunityHighlightsGallery({ currentLanguage }: CommunityHighlightsGalleryProps) {
  const [images, setImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    // Collect all images from albums, flatten them
    const allImages = initialHeritageAlbums
      .flatMap(album => album.images)
      .reverse(); // Latest first assuming newer ones added later
    setImages(allImages.slice(0, 20));
  }, []);

  if (images.length === 0) return null;

  return (
    <section className="py-12 bg-white" id="community_highlights_gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex justify-between items-end">
            <h2 className="text-2xl font-serif font-extrabold text-[#004B23]">
                {currentLanguage === 'en' ? 'Community Highlights' : 'सामुदायिक झलकियां'}
            </h2>
        </div>

        {/* Horizontal Slider */}
        <div className="relative overflow-hidden group">
          <motion.div
            className="flex gap-4 cursor-grab"
            drag="x"
            dragConstraints={{ right: 0, left: -((images.length - 3) * 320) }}
            whileTap={{ cursor: 'grabbing' }}
          >
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                className="w-80 h-60 shrink-0 rounded-2xl overflow-hidden shadow-md cursor-pointer"
                onClick={() => setLightboxIndex(idx)}
                whileHover={{ scale: 1.02 }}
              >
                <img src={img} alt={`Highlight ${idx}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="text-center pt-4">
            <button className="px-6 py-2 bg-[#004B23] text-white rounded-lg font-bold text-sm hover:bg-emerald-900 transition">
                {currentLanguage === 'en' ? 'View All Photos' : 'सभी तस्वीरें देखें'}
            </button>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setLightboxIndex(null)}
            >
              <button className="absolute top-4 right-4 text-white p-2" onClick={() => setLightboxIndex(null)}><X /></button>
              <button className="absolute left-4 text-white p-2" onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : images.length - 1)); }}><ChevronLeft /></button>
              <img src={images[lightboxIndex]} alt="Lightbox" className="max-h-[90vh] max-w-[90vw] object-contain" referrerPolicy="no-referrer" />
              <button className="absolute right-4 text-white p-2" onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev! < images.length - 1 ? prev! + 1 : 0)); }}><ChevronRight /></button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
