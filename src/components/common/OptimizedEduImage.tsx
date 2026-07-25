import React, { useState } from 'react';

interface OptimizedEduImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  sizes?: string;
  onClick?: () => void;
  title?: string;
}

export const FALLBACK_EDU_IMAGE = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80';

export function OptimizedEduImage({
  src,
  alt,
  className = '',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  onClick,
  title
}: OptimizedEduImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Clean, SEO-optimized ALT tag
  const seoAlt = alt ? `${alt} - Care Point Classes & Educational Mission` : 'Care Point Educational Asset & Student Merit';

  const imageSrc = hasError ? FALLBACK_EDU_IMAGE : src;

  return (
    <div className={`relative overflow-hidden bg-emerald-950/20 ${className}`} onClick={onClick}>
      {/* Blur Placeholder Background while loading */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-emerald-900/40 animate-pulse flex items-center justify-center z-10 backdrop-blur-sm">
          <div className="w-6 h-6 border-2 border-[#F4C430] border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Main Image with Smooth Fade-In on Load */}
      <img
        src={imageSrc}
        alt={seoAlt}
        title={title || seoAlt}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        sizes={sizes}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true);
          setIsLoaded(true);
        }}
        className={`w-full h-full object-cover transition-all duration-500 ${
          isLoaded ? 'opacity-100 filter-none' : 'opacity-0 filter blur-md scale-105'
        }`}
      />

      {/* Broken image error indicator */}
      {hasError && (
        <div className="absolute inset-0 bg-stone-900/90 flex flex-col items-center justify-center p-2 text-center z-20 text-amber-200 text-[10px]">
          <span>Educational Asset</span>
        </div>
      )}
    </div>
  );
}

export default OptimizedEduImage;
