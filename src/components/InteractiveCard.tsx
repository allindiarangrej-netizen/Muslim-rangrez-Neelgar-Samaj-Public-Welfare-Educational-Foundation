import React, { useState } from 'react';

interface InteractiveCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'emerald' | 'gold' | 'glass' | 'light' | 'dark';
  glowOnHover?: boolean;
  liftOnHover?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  ariaLabel?: string;
  role?: string;
  tabIndex?: number;
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({
  children,
  className = '',
  variant = 'emerald',
  glowOnHover = true,
  liftOnHover = true,
  onClick,
  ariaLabel,
  role = 'button',
  tabIndex = 0,
  ...props
}) => {
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);
  const [isRippling, setIsRippling] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setIsRippling(true);
    setTimeout(() => setIsRippling(false), 500);

    if (onClick) {
      onClick(e);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if ((e.key === 'Enter' || e.key === ' ') && onClick) {
      e.preventDefault();
      onClick(e as unknown as React.MouseEvent<HTMLDivElement>);
    }
  };

  const variantStyles = {
    emerald: 'bg-gradient-to-b from-[#062c17] via-[#041d0f] to-[#021008] border-[#F4C430]/25 text-white',
    gold: 'bg-gradient-to-br from-[#1b1202] via-[#2c1d04] to-[#120a01] border-[#FFD54A]/40 text-white',
    glass: 'glass-card text-white',
    light: 'bg-white border-emerald-100/80 text-gray-900 shadow-md',
    dark: 'bg-[#0B132B] border-white/10 text-white',
  };

  const glowStyles = glowOnHover
    ? 'hover:border-[#FFD54A] hover:shadow-[0_20px_40px_rgba(255,213,74,0.2)]'
    : '';

  const liftStyles = liftOnHover
    ? 'hover:-translate-y-2 hover:scale-[1.02]'
    : '';

  return (
    <div
      role={onClick ? role : undefined}
      tabIndex={onClick ? tabIndex : undefined}
      aria-label={ariaLabel}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`relative rounded-2xl border transition-all duration-300 ease-out cursor-pointer overflow-hidden group select-none focus:outline-none focus:ring-2 focus:ring-[#FFD54A] focus:ring-offset-2 active:scale-[0.985] ${variantStyles[variant]} ${glowStyles} ${liftStyles} ${className}`}
      {...props}
    >
      {/* Shine overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

      {/* Ripple effect */}
      {isRippling && coords && (
        <span
          className="absolute bg-white/25 rounded-full animate-ping pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: coords.x,
            top: coords.y,
            width: '120px',
            height: '120px',
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default InteractiveCard;
