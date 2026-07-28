import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, ZoomIn } from 'lucide-react';
import { initialHeritageAlbums } from '../data/heritageMedia';
import { Language } from '../types';
import PremiumLightbox from './common/PremiumLightbox';
import SmartImage from './common/SmartImage';

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
        region: album.location.tehsil || album.location.district || 'General Archive',
        title: currentLanguage === 'en' ? album.titleEn : album.titleHi,
        year: album.year
      }))
    );
  }, [currentLanguage]);

  const regions = useMemo(() => {
    return ['All', ...Array.from(new Set(initialHeritageAlbums.map(a => a.location.tehsil || a.location.district || 'General Archive')))];
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
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#004B23]">
              {currentLanguage === 'en' ? 'Community Media Center' : 'सामुदायिक मीडिया केंद्र'}
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              {currentLanguage === 'en' ? 'Explore high-resolution regional community photos and historical archives.' : 'क्षेत्रीय सामुदायिक तस्वीरों और ऐतिहासिक अभिलेखागारों को देखें।'}
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder={currentLanguage === 'en' ? "Search Photos..." : "तस्वीरें खोजें..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-[#004B23] outline-none text-xs"
            />
          </div>
        </div>

        {/* Region Filters */}
        <div className="flex flex-wrap gap-2">
          {regions.map(region => (
            <button
              key={region}
              onClick={() => setActiveFilter(region)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${activeFilter === region ? 'bg-[#004B23] text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* High Res Grid */}
        {filteredImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl border border-gray-200 bg-stone-900 transition-all duration-300"
                onClick={() => setSelectedImageIndex(idx)}
                whileHover={{ y: -3 }}
              >
                <SmartImage 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="px-2 py-0.5 rounded bg-[#004B23] text-white text-[9px] font-bold uppercase">
                      {img.region}
                    </span>
                    <span className="p-1.5 rounded-full bg-white/20 text-[#F4C430] backdrop-blur-md">
                      <ZoomIn className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="text-white">
                    <p className="text-xs font-bold line-clamp-1 text-emerald-300">{img.title}</p>
                    <p className="text-[10px] text-stone-300 font-mono flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-[#F4C430]" /> {img.region} • {img.year}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500 text-lg font-medium">
            {currentLanguage === 'en' ? "No Photos Available" : "कोई तस्वीरें उपलब्ध नहीं"}
          </div>
        )}

        {/* Premium Lightbox */}
        <PremiumLightbox
          isOpen={selectedImageIndex !== null}
          onClose={() => setSelectedImageIndex(null)}
          items={filteredImages.map(img => ({
            src: img.url,
            type: 'image',
            title: img.title,
            description: `Region: ${img.region} • Year: ${img.year}`,
            metadata: img.region
          }))}
          initialIndex={selectedImageIndex || 0}
        />
      </div>
    </div>
  );
}
