import React from 'react';
import { Trash2, Calendar, HardDrive, ExternalLink, Loader2 } from 'lucide-react';
import { AdminImage } from '../types/admin';
import { motion } from 'motion/react';

interface ImageGalleryProps {
  images: AdminImage[];
  onDelete: (name: string) => void;
  loading: boolean;
  deleting: string | null;
}

export default function ImageGallery({ images, onDelete, loading, deleting }: ImageGalleryProps) {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Loader2 className="h-10 w-10 text-indigo-600 animate-spin mb-4" />
        <p className="text-gray-500 font-medium">Fetching gallery...</p>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
        <p className="text-gray-400 font-medium italic">No images found in the admin-photos folder.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {images.map((image, index) => (
        <motion.div
          key={image.name}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
          <div className="relative aspect-square overflow-hidden bg-gray-100">
            <img
              src={image.url}
              alt={image.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
              <a
                href={image.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full text-gray-900 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                title="View Full Size"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
              <button
                onClick={() => onDelete(image.name)}
                disabled={deleting === image.name}
                className="p-2 bg-red-500 rounded-full text-white hover:bg-red-600 transition-colors disabled:opacity-50"
                title="Delete Image"
              >
                {deleting === image.name ? <Loader2 className="h-5 w-5 animate-spin" /> : <Trash2 className="h-5 w-5" />}
              </button>
            </div>
          </div>
          
          <div className="p-4">
            <h4 className="text-sm font-semibold text-gray-900 truncate mb-2" title={image.name}>
              {image.name.split('-').slice(1).join('-')}
            </h4>
            <div className="flex items-center justify-between text-[10px] text-gray-500 uppercase tracking-wider font-bold">
              <div className="flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                {new Date(image.created_at).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <HardDrive className="h-3 w-3 mr-1" />
                {(image.size / 1024 / 1024).toFixed(2)} MB
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
