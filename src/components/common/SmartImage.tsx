import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageOff, Loader2, RefreshCcw } from 'lucide-react';
import { resolveDriveUrl } from '../../lib/driveUtils';

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
  ...props
}: SmartImageProps) {
  const [status, setStatus] = useState<'loading' | 'success' | 'error' | 'retrying'>('loading');
  const [retryCount, setRetryCount] = useState(0);
  const [resolvedSrc, setResolvedSrc] = useState<string | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const MAX_RETRIES = 2;

  useEffect(() => {
    const resolved = resolveDriveUrl(src);
    setResolvedSrc(resolved);
    setStatus('loading');
    setRetryCount(0);
  }, [src]);

  const handleLoad = () => {
    setStatus('success');
  };

  const handleError = () => {
    if (retryCount < MAX_RETRIES) {
      setStatus('retrying');
      setTimeout(() => {
        setRetryCount(prev => prev + 1);
        // Force re-load by appending a small cache buster if needed, 
        // but for Drive images, usually a retry is enough if it was a transient 429/500
        setStatus('loading');
      }, 1000 * (retryCount + 1));
    } else {
      setStatus('error');
      console.error(`SmartImage failed to load: ${resolvedSrc}`);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-gray-100 flex items-center justify-center ${containerClassName}`}>
      <AnimatePresence mode="wait">
        {status === 'loading' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-gray-50"
          >
            <Loader2 className="h-5 w-5 text-emerald-600 animate-spin" />
          </motion.div>
        )}

        {status === 'retrying' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 p-2 text-center"
          >
            <RefreshCcw className="h-5 w-5 text-amber-500 animate-spin mb-1" />
            <span className="text-[10px] text-gray-500 font-medium">Retrying...</span>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 p-4 text-center"
          >
            <ImageOff className="h-8 w-8 text-gray-300 mb-2" />
            <p className="text-[10px] md:text-xs text-gray-400 font-medium leading-tight">
              Image temporarily unavailable
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {resolvedSrc ? (
        <img
          {...props}
          ref={imgRef}
          src={resolvedSrc}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          referrerPolicy="no-referrer"
          className={`
            w-full h-full transition-opacity duration-500 
            ${status === 'success' ? 'opacity-100' : 'opacity-0'}
            ${className}
          `}
          style={{ objectFit, ...props.style }}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 p-4">
          <ImageOff className="h-8 w-8 text-gray-300 mb-2" />
          <p className="text-xs text-gray-400 font-medium">Invalid source</p>
        </div>
      )}
    </div>
  );
}
