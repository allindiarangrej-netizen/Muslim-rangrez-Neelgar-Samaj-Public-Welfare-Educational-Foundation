import React from 'react';
import { motion } from 'motion/react';
import { Play, ZoomIn, Eye, Heart } from 'lucide-react';
import SmartImage from '../common/SmartImage';

interface MediaCardProps {
  src: string;
  type: 'image' | 'video';
  onClick: () => void;
  title?: string;
  views?: number;
  likes?: number;
}

export default function MediaCard({ src, type, onClick, title, views, likes }: MediaCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="group relative aspect-square rounded-xl overflow-hidden bg-gray-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <SmartImage
        src={src}
        alt={title || "Media item"}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="bg-white/20 backdrop-blur-md p-3 rounded-full transform scale-50 group-hover:scale-100 transition-transform duration-300">
          {type === 'video' ? (
            <Play className="h-6 w-6 text-white fill-current" />
          ) : (
            <ZoomIn className="h-6 w-6 text-white" />
          )}
        </div>
      </div>

      {/* Type Badge */}
      {type === 'video' && (
        <div className="absolute top-2 right-2 bg-[#F4C430] p-1 rounded-md shadow-sm">
          <Play className="h-3 w-3 text-[#004B23] fill-current" />
        </div>
      )}

      {/* Meta Overlay */}
      {(views !== undefined || likes !== undefined) && (
        <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
          <div className="flex items-center space-x-3 text-white text-[10px] font-bold">
            {views !== undefined && (
              <div className="flex items-center space-x-1">
                <Eye className="h-3 w-3" />
                <span>{views}</span>
              </div>
            )}
            {likes !== undefined && (
              <div className="flex items-center space-x-1">
                <Heart className="h-3 w-3" />
                <span>{likes}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}
