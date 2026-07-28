import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageOff, Loader2, RefreshCcw } from 'lucide-react';
import { getDriveCandidateUrls } from '../../lib/driveUtils';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string | null | undefined;
  fallbackSrc?: string;
  className?: string;
  containerClassName?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  priority?: boolean;
}

export default function SmartImage({
  src,
  fallbackSrc,
  className = '',
  containerClassName = '',
  objectFit = 'cover',
  priority = false,
  onLoad,
  onError,
  ...props
}: SmartImageProps) {
  const [status, setStatus] = useState<'loading' | 'success' | 'error' | 'retrying'>('loading');
  const [candidateIndex, setCandidateIndex] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);

  // Compute candidates list for this src
  const candidates = useMemo(() => {
    return getDriveCandidateUrls(src);
  }, [src]);

  const activeSrc = candidates[candidateIndex] || fallbackSrc || null;

  // Reset candidate index & status on src change
  useEffect(() => {
    setCandidateIndex(0);
    setStatus('loading');
  }, [src]);

  // Check if image is already cached/loaded in DOM
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setStatus('success');
      onLoad?.({ target: imgRef.current } as any);
    }
  }, [activeSrc]);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setStatus('success');
    onLoad?.(e);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // If we have remaining candidate URLs to try
    if (candidateIndex + 1 < candidates.length) {
      setStatus('retrying');
      setTimeout(() => {
        setCandidateIndex(prev => prev + 1);
        setStatus('loading');
      }, 200);
    } else if (fallbackSrc && activeSrc !== fallbackSrc) {
      // Try optional custom fallbackSrc
      setStatus('retrying');
      setTimeout(() => {
        setCandidateIndex(candidates.length);
        setStatus('loading');
      }, 200);
    } else {
      setStatus('error');
      onError?.(e);
      console.warn(`SmartImage failed all ${candidates.length} candidate URLs for:`, src);
    }
  };

  const handleManualRetry = () => {
    setCandidateIndex(0);
    setStatus('loading');
  };

  return (
    <div className={`relative overflow-hidden bg-gray-100 flex items-center justify-center ${containerClassName}`}>
      <AnimatePresence mode="wait">
        {status === 'loading' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-gray-900/10 backdrop-blur-xs z-10"
          >
            <Loader2 className="h-6 w-6 text-[#F4C430] animate-spin" />
          </motion.div>
        )}

        {status === 'retrying' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/20 p-2 text-center z-10"
          >
            <RefreshCcw className="h-5 w-5 text-amber-400 animate-spin mb-1" />
            <span className="text-[10px] text-amber-200 font-mono font-medium">Trying Mirror {candidateIndex + 1}...</span>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-stone-900/90 p-4 text-center z-20 space-y-2"
          >
            <ImageOff className="h-7 w-7 text-amber-400/80" />
            <p className="text-[11px] text-stone-300 font-medium leading-tight">
              Photo temporarily unavailable
            </p>
            <button
              type="button"
              onClick={handleManualRetry}
              className="px-3 py-1 rounded-lg bg-[#004B23] hover:bg-[#00381a] text-white text-[10px] font-bold flex items-center gap-1 shadow cursor-pointer"
            >
              <RefreshCcw className="w-3 h-3" /> Retry
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {activeSrc ? (
        <img
          {...props}
          ref={imgRef}
          src={activeSrc}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          referrerPolicy="no-referrer"
          className={`
            w-full h-full transition-opacity duration-300 
            ${status === 'success' ? 'opacity-100' : 'opacity-0'}
            ${className}
          `}
          style={{ objectFit, ...props.style }}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-900 p-4 text-center">
          <ImageOff className="h-8 w-8 text-gray-400 mb-2" />
          <p className="text-xs text-gray-400 font-medium">Invalid Image Source</p>
        </div>
      )}
    </div>
  );
}

