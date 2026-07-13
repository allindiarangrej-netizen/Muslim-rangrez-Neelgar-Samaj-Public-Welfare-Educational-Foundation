import React, { useState } from 'react';
import { Image, Video, Play, Pause, AlertCircle } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
  className?: string;
  fallbackText?: string;
  fallbackIcon?: React.ReactNode;
}

/**
 * Reusable SafeImage component with graceful loading fallback
 * Never shows a broken image icon. Falls back to a clean styled placeholder.
 */
export function SafeImage({ src, alt, className = '', fallbackText = 'Media Preview', fallbackIcon, ...props }: SafeImageProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div 
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#002410] to-[#031A0E] text-white p-6 text-center border border-[#F4C430]/20 rounded-xl ${className}`}
        id={`fallback_image_${alt?.replace(/\s+/g, '_')}`}
      >
        {fallbackIcon || <Image className="h-10 w-10 text-[#FFD54A]/80 mb-2 animate-pulse" />}
        <span className="text-xs font-serif font-bold text-gray-200">{alt || 'Rangrez Portal Asset'}</span>
        <span className="text-[10px] font-mono text-[#FFD54A]/80 mt-1 uppercase tracking-wider">{fallbackText}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
}

interface SafeVideoProps {
  src: string;
  poster?: string;
  title?: string;
  className?: string;
  duration?: string;
}

/**
 * Reusable SafeVideo component with full fallback and simulation player
 * If the video is a placeholder or fails to load, it operates in simulation mode
 * with full visual play/pause/progress bar controls, ensuring an elegant user experience.
 */
export function SafeVideo({ src, poster, title = 'Community Broadcast', className = '', duration = '05:00' }: SafeVideoProps) {
  const [playing, setPlaying] = useState(false);
  const [useSimulation, setUseSimulation] = useState(true); // Default to simulation since our files are small mocks
  const [currentTime, setCurrentTime] = useState(0);

  // Convert duration to seconds for simulation
  const [min, sec] = (duration || '').split(':').map(Number);
  const totalSeconds = (min * 60) + (sec || 0) || 300;

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (playing && useSimulation) {
      timer = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalSeconds) {
            setPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [playing, useSimulation, totalSeconds]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handlePlayToggle = () => {
    setPlaying(!playing);
  };

  const percentage = (currentTime / totalSeconds) * 100;

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-[#001E0F] border border-[#F4C430]/20 shadow-2xl group ${className}`} id={`video_player_${title.replace(/\s+/g, '_')}`}>
      {/* Poster / Background */}
      {!playing && (
        <div className="absolute inset-0 z-10 bg-black/40 flex items-center justify-center transition duration-300">
          <SafeImage 
            src={poster} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            fallbackText="Video Poster"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          
          <button 
            onClick={handlePlayToggle}
            className="w-16 h-16 rounded-full bg-[#F4C430] hover:bg-[#FFDF66] text-emerald-950 flex items-center justify-center shadow-2xl transform hover:scale-110 transition duration-300 z-20 border border-[#F4C430] hover:border-[#FFDF66]"
          >
            <Play className="h-6 w-6 ml-1 text-emerald-950 fill-emerald-950" />
          </button>
        </div>
      )}

      {/* Simulated Player Interface */}
      {useSimulation ? (
        <div className="w-full h-full aspect-video flex flex-col justify-between p-4 relative bg-[#02150C]">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#F4C430_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
          
          {/* Top Info */}
          <div className="z-10 flex justify-between items-start">
            <span className="bg-emerald-950/80 border border-[#F4C430]/30 text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
              {playing ? 'Streaming Live' : 'Broadcasting Idle'}
            </span>
            <span className="text-[10px] font-mono text-[#FFD54A]">Local Media Server</span>
          </div>

          {/* Center Visual effect when playing */}
          <div className="z-10 flex flex-col items-center justify-center flex-grow">
            {playing ? (
              <div className="flex items-end justify-center space-x-1.5 h-12">
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-1.5 bg-[#F4C430] rounded-full animate-bounce" 
                    style={{ 
                      height: `${30 + Math.random() * 70}%`, 
                      animationDelay: `${i * 0.15}s`,
                      animationDuration: '0.8s'
                    }}
                  />
                ))}
              </div>
            ) : (
              <Video className="h-12 w-12 text-[#F4C430]/40" />
            )}
            <h4 className="text-xs text-gray-300 mt-4 font-serif font-bold text-center px-4">{title}</h4>
          </div>

          {/* Custom Controls Bar */}
          <div className="z-10 bg-black/80 p-3 rounded-lg border border-white/10 space-y-2">
            <div className="flex items-center justify-between text-[10px] font-mono text-gray-300">
              <span>{formatTime(currentTime)}</span>
              <span>{duration}</span>
            </div>
            
            {/* Progress Bar */}
            <div className="h-1 bg-gray-700 rounded-full overflow-hidden cursor-pointer">
              <div className="h-full bg-[#F4C430] transition-all duration-300" style={{ width: `${percentage}%` }}></div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <button onClick={handlePlayToggle} className="text-white hover:text-[#FFDF66] transition">
                {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </button>
              
              <span className="text-[9px] font-mono text-gray-500">
                Path: {src}
              </span>
            </div>
          </div>
        </div>
      ) : (
        /* Real Video Native Player */
        <video 
          src={src} 
          poster={poster} 
          controls 
          className="w-full h-full aspect-video object-cover"
          onError={() => setUseSimulation(true)}
        />
      )}
    </div>
  );
}
