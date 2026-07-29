import React from 'react';

// Official Community Social Media URLs
export const COMMUNITY_SOCIAL_URLS = {
  facebook: 'https://www.facebook.com/share/g/1ChFrRk5yq/?mibextid=wwXIfr',
  youtube: 'https://youtube.com/@allindiarangrej?si=G6afDaAB4t6p9xuA',
  telegram: 'https://t.me/+LWzXFGa5mHQzMmVl',
  whatsappChannel: 'https://whatsapp.com/channel/0029Vb8Mq6G6mYPF8BfWpL2N',
  whatsappHelp: 'https://wa.me/917879940869',
  instagram: 'https://www.instagram.com/allindiarangrej',
  twitter: 'https://x.com/allindiarangrej',
  linkedin: 'https://www.linkedin.com/company/rangrezcommunity',
  website: 'https://rangrezcommunity.org',
};

// Helper function to resolve social URLs (replaces '#' or empty with official community links)
export function resolveSocialUrl(url: string | undefined, platform: string): string {
  if (url && url !== '#' && url.trim() !== '' && !url.includes('example.com')) {
    return url;
  }
  const key = platform.toLowerCase().trim();
  if (key.includes('facebook') || key === 'fb') return COMMUNITY_SOCIAL_URLS.facebook;
  if (key.includes('youtube') || key === 'yt') return COMMUNITY_SOCIAL_URLS.youtube;
  if (key.includes('telegram') || key === 'tg') return COMMUNITY_SOCIAL_URLS.telegram;
  if (key.includes('whatsapp') || key === 'wa') return COMMUNITY_SOCIAL_URLS.whatsappChannel;
  if (key.includes('instagram') || key === 'ig') return COMMUNITY_SOCIAL_URLS.instagram;
  if (key.includes('twitter') || key === 'x') return COMMUNITY_SOCIAL_URLS.twitter;
  if (key.includes('linkedin')) return COMMUNITY_SOCIAL_URLS.linkedin;
  if (key.includes('website') || key.includes('web')) return COMMUNITY_SOCIAL_URLS.website;
  return COMMUNITY_SOCIAL_URLS.facebook;
}

// Brand SVG Icon Components
export function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function YouTubeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.488 2.01 14.039.998 11.517.998c-5.442 0-9.87 4.372-9.874 9.802-.001 1.73.454 3.42 1.316 4.921L1.97 21.09l5.061-1.31.393.233z" />
    </svg>
  );
}

export function TelegramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

export function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function TwitterIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function LinkedInIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

interface SocialItemProps {
  platform: 'facebook' | 'youtube' | 'whatsapp' | 'telegram' | 'instagram' | 'twitter' | 'linkedin';
  url?: string;
  title?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline' | 'ghost' | 'pills';
}

export function SocialButton({
  platform,
  url,
  title,
  className = '',
  size = 'md',
  variant = 'ghost'
}: SocialItemProps) {
  const targetUrl = resolveSocialUrl(url, platform);

  const getIcon = () => {
    const iconSize = size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5';
    switch (platform) {
      case 'facebook': return <FacebookIcon className={iconSize} />;
      case 'youtube': return <YouTubeIcon className={iconSize} />;
      case 'whatsapp': return <WhatsAppIcon className={iconSize} />;
      case 'telegram': return <TelegramIcon className={iconSize} />;
      case 'instagram': return <InstagramIcon className={iconSize} />;
      case 'twitter': return <TwitterIcon className={iconSize} />;
      case 'linkedin': return <LinkedInIcon className={iconSize} />;
      default: return <FacebookIcon className={iconSize} />;
    }
  };

  const getHoverStyles = () => {
    switch (platform) {
      case 'facebook': return 'hover:text-[#1877F2] hover:border-[#1877F2]';
      case 'youtube': return 'hover:text-[#FF0000] hover:border-[#FF0000]';
      case 'whatsapp': return 'hover:text-[#25D366] hover:border-[#25D366]';
      case 'telegram': return 'hover:text-[#229ED9] hover:border-[#229ED9]';
      case 'instagram': return 'hover:text-[#E4405F] hover:border-[#E4405F]';
      case 'twitter': return 'hover:text-[#1DA1F2] hover:border-[#1DA1F2]';
      case 'linkedin': return 'hover:text-[#0A66C2] hover:border-[#0A66C2]';
    }
  };

  const getSolidStyles = () => {
    switch (platform) {
      case 'facebook': return 'bg-[#1877F2] text-white hover:bg-[#166FE5]';
      case 'youtube': return 'bg-[#FF0000] text-white hover:bg-[#E60000]';
      case 'whatsapp': return 'bg-[#25D366] text-white hover:bg-[#20BD5A]';
      case 'telegram': return 'bg-[#229ED9] text-white hover:bg-[#1E8EC3]';
      case 'instagram': return 'bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white hover:opacity-90';
      case 'twitter': return 'bg-[#1DA1F2] text-white hover:bg-[#1A90DA]';
      case 'linkedin': return 'bg-[#0A66C2] text-white hover:bg-[#0958A8]';
    }
  };

  const defaultTitle = platform.charAt(0).toUpperCase() + platform.slice(1);

  if (variant === 'solid') {
    return (
      <a
        href={targetUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={title || defaultTitle}
        aria-label={title || defaultTitle}
        className={`inline-flex items-center justify-center p-2 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-0.5 shadow-md ${getSolidStyles()} ${className}`}
      >
        {getIcon()}
      </a>
    );
  }

  if (variant === 'pills') {
    return (
      <a
        href={targetUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={title || defaultTitle}
        aria-label={title || defaultTitle}
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border border-gray-200 bg-white/10 hover:bg-white/20 transition-all duration-300 ${getHoverStyles()} ${className}`}
      >
        {getIcon()}
        <span>{title || defaultTitle}</span>
      </a>
    );
  }

  return (
    <a
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      title={title || defaultTitle}
      aria-label={title || defaultTitle}
      className={`inline-flex items-center justify-center p-2 text-gray-300 hover:scale-110 transition-all duration-300 cursor-pointer ${getHoverStyles()} ${className}`}
    >
      {getIcon()}
    </a>
  );
}

export function OfficialSocialChannelsList({ className = "" }: { className?: string }) {
  const channels = [
    { platform: 'facebook' as const, name: 'Facebook Group', desc: '120,000+ Community Members' },
    { platform: 'youtube' as const, name: 'YouTube Channel', desc: 'Official Speeches & Event Highlights' },
    { platform: 'whatsapp' as const, name: 'WhatsApp Channel', desc: 'Instant Official Broadcast Updates' },
    { platform: 'telegram' as const, name: 'Telegram Circle', desc: 'National Gazette & Circular Bulletins' },
    { platform: 'instagram' as const, name: 'Instagram Page', desc: 'Heritage Photos & Achiever Stories' },
  ];

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 ${className}`}>
      {channels.map((ch) => (
        <a
          key={ch.platform}
          href={resolveSocialUrl(undefined, ch.platform)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 p-3 rounded-2xl bg-white border border-gray-200 hover:border-[#004B23] hover:shadow-md transition group cursor-pointer"
        >
          <div className="p-2.5 rounded-xl bg-gray-50 group-hover:bg-[#004B23] text-gray-700 group-hover:text-white transition shrink-0">
            <SocialButton platform={ch.platform} variant="ghost" size="md" className="p-0 text-current" />
          </div>
          <div className="min-w-0">
            <h5 className="text-xs font-bold text-gray-900 group-hover:text-[#004B23] truncate transition">{ch.name}</h5>
            <p className="text-[10px] text-gray-500 font-mono truncate">{ch.desc}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
