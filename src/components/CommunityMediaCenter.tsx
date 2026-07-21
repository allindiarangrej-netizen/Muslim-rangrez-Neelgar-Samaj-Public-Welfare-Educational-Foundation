import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ZoomIn, Filter } from 'lucide-react';
import { initialHeritageAlbums } from '../data/heritageMedia';
import { Language } from '../types';
import PremiumLightbox from './common/PremiumLightbox';

interface CommunityMediaCenterProps {
  currentLanguage: Language;
}

export default function CommunityMediaCenter({ currentLanguage }: CommunityMediaCenterProps) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const allImages = useMemo(() => {
    return initialHeritageAlbums.flatMap(album => 
      album.images.map(img => ({
        url: img,
        region: album.location.tehsil || 'Unknown',
        title: currentLanguage === 'en' ? album.titleEn : album.titleHi
      }))
    );
  }, [currentLanguage]);

  const regions = useMemo(() => {
    return ['All', ...Array.from(new Set(initialHeritageAlbums.map(a => a.location.tehsil || 'Unknown')))];
  }, []);

  const filteredImages = useMemo(() => {
    return allImages.filter(img => {
      const matchesRegion = activeFilter === 'All' || img.region === activeFilter;
      const matchesSearch = img.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRegion && matchesSearch;
    });
  }, [allImages, activeFilter, searchQuery]);

  return (
    <div className="py-12 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-4xl font-serif font-extrabold text-[#004B23]">
          {currentLanguage === 'en' ? 'Community Media Center' : 'सामुदायिक मीडिया केंद्र'}
        </h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {regions.map(region => (
            <button
              key={region}
              onClick={() => setActiveFilter(region)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition ${activeFilter === region ? 'bg-[#004B23] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder={currentLanguage === 'en' ? "Search Photos..." : "तस्वीरें खोजें..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#004B23] outline-none"
          />
        </div>

        {/* Masonry Grid */}
        {filteredImages.length > 0 ? (
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
            {filteredImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-4 break-inside-avoid rounded-2xl overflow-hidden cursor-pointer shadow-md"
                onClick={() => setSelectedImageIndex(idx)}
                whileHover={{ scale: 1.02 }}
              >
                <img src={img.url} alt={img.title} className="w-full h-auto" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500 text-xl font-medium">
            {currentLanguage === 'en' ? "No Photos Available" : "कोई तस्वीरें उपलब्ध नहीं"}
          </div>
        )}

        {/* Premium Lightbox */}
        <PremiumLightbox
          isOpen={selectedImageIndex !== null}
          onClose={() => setSelectedImageIndex(null)}
          images={filteredImages.map(img => img.url)}
          initialIndex={selectedImageIndex || 0}
          title={selectedImageIndex !== null ? filteredImages[selectedImageIndex].title : ''}
          metadata={selectedImageIndex !== null ? filteredImages[selectedImageIndex].region : ''}
        />
      </div>
    </div>
  );
}
