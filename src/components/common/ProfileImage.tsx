import React from 'react';

interface ProfileImageProps {
  src?: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'custom';
  style?: React.CSSProperties;
  objectPosition?: 'center' | 'top' | 'bottom';
}

const sizeMap = {
  'xs': 'w-8 h-8',
  'sm': 'w-12 h-12',
  'md': 'w-16 h-16',
  'lg': 'w-24 h-24',
  'xl': 'w-32 h-32',
  '2xl': 'w-48 h-48',
  '3xl': 'w-64 h-64',
  'custom': '',
};

/**
 * Global Profile Image Component
 * Ensures images always fill their container and handle placeholders correctly.
 */
export const ProfileImage: React.FC<ProfileImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  containerClassName = '',
  size = 'md',
  style,
  objectPosition = 'center'
}) => {
  const defaultPlaceholder = '/images/committees/profile_avatar_placeholder.svg';
  const finalSrc = src || defaultPlaceholder;

  return (
    <div className={`relative ${sizeMap[size] || ''} rounded-full overflow-hidden border-2 border-white shadow-md bg-gray-50 flex-shrink-0 ${containerClassName}`}>
      <img
        src={finalSrc}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
        referrerPolicy="no-referrer"
        loading="lazy"
        style={{ ...style, objectPosition }}
        onError={(e) => {
          e.currentTarget.src = defaultPlaceholder;
        }}
      />
    </div>
  );
};
