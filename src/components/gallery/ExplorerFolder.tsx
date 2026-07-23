import React from 'react';
import { motion } from 'motion/react';
import { Folder, Image as ImageIcon, Video, Calendar, MapPin } from 'lucide-react';
import SmartImage from '../common/SmartImage';

interface ExplorerFolderProps {
  title: string;
  itemCount: number;
  videoCount?: number;
  date?: string;
  coverImage?: string;
  onClick: () => void;
  location?: string;
}

export default function ExplorerFolder({
  title,
  itemCount,
  videoCount = 0,
  date,
  coverImage,
  onClick,
  location
}: ExplorerFolderProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group cursor-pointer select-none"
    >
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm group-hover:shadow-md transition-all duration-300">
        {/* Folder Cover Image */}
        <div className="absolute inset-0">
          {coverImage ? (
            <SmartImage
              src={coverImage}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-emerald-50 flex items-center justify-center text-emerald-200">
              <Folder className="h-16 w-16" />
            </div>
          )}
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        </div>

        {/* Folder Icon Overlay (Windows Style) */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md p-2 rounded-lg shadow-sm border border-white/50">
          <Folder className="h-5 w-5 text-[#004B23]" />
        </div>

        {/* Stats Badges */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-bold">
              <ImageIcon className="h-3 w-3" />
              <span>{itemCount}</span>
            </div>
            {videoCount > 0 && (
              <div className="flex items-center space-x-1 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-bold">
                <Video className="h-3 w-3" />
                <span>{videoCount}</span>
              </div>
            )}
          </div>
          {date && (
            <div className="flex items-center space-x-1 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-bold">
              <Calendar className="h-3 w-3" />
              <span>{date}</span>
            </div>
          )}
        </div>
      </div>

      {/* Title & Info */}
      <div className="mt-3 px-1">
        <h4 className="text-sm font-bold text-[#004B23] group-hover:text-[#F4C430] transition-colors truncate">
          {title}
        </h4>
        {location && (
          <div className="flex items-center space-x-1 mt-0.5 text-gray-400">
            <MapPin className="h-3 w-3" />
            <span className="text-[10px] truncate">{location}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
