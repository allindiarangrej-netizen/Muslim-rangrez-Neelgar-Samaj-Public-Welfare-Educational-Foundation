import React, { Suspense } from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface PremiumHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  video?: string;
  overlayColor?: string;
  overlayOpacity?: number;
  threeIcon?: React.ReactNode;
  breadcrumb?: { label: string; action: () => void }[];
  children?: React.ReactNode;
}

export default function PremiumHero({
  title,
  subtitle,
  image,
  video,
  overlayColor = '#003118',
  overlayOpacity = 0.7,
  breadcrumb,
  children
}: PremiumHeroProps) {
  return (
    <div className="relative min-h-[60vh] flex items-center overflow-hidden bg-emerald-950">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {video ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.8)' }}
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : image ? (
          <img
            src={image}
            alt={title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        ) : null}
        
        {/* Overlay */}
        <div 
          className="absolute inset-0 z-10" 
          style={{ 
            background: `linear-gradient(to bottom, transparent, ${overlayColor})`,
            opacity: 1
          }} 
        />
        <div 
          className="absolute inset-0 z-10" 
          style={{ 
            backgroundColor: overlayColor,
            opacity: overlayOpacity
          }} 
        />
      </div>

      {/* 3D Background Layer */}
      <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
      </div>

      {/* Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Breadcrumb */}
          {breadcrumb && (
            <nav className="flex items-center space-x-2 text-[#F4C430] mb-8 text-xs font-bold uppercase tracking-widest">
              {breadcrumb.map((item, index) => (
                <React.Fragment key={index}>
                  <button 
                    onClick={item.action}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                  {index < breadcrumb.length - 1 && <ChevronRight className="w-3 h-3" />}
                </React.Fragment>
              ))}
            </nav>
          )}

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-extrabold text-white leading-tight mb-6">
            {title}
            <span className="block h-1.5 w-24 bg-[#F4C430] mt-4 rounded-full"></span>
          </h1>
          
          {subtitle && (
            <p className="text-lg md:text-xl text-emerald-100 font-light leading-relaxed mb-8 max-w-2xl">
              {subtitle}
            </p>
          )}

          {children}
        </motion.div>
      </div>

      {/* Decorative Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 70C840 80 960 100 1080 105C1200 110 1320 100 1380 95L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#FDFBF7"/>
        </svg>
      </div>
    </div>
  );
}
