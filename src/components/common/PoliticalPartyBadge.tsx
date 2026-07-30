import React from 'react';
import { PoliticalPartyInfo, detectPoliticalParty } from '../../data/politicalParties';

interface PoliticalPartyBadgeProps {
  party?: PoliticalPartyInfo | null;
  profile?: {
    politicalParty?: string;
    designation?: string;
    occupation?: string;
    organization?: string;
    categoryId?: string;
    biography?: { en?: string; hi?: string; ur?: string } | string;
    majorAchievements?: string[];
  };
  variant?: 'compact' | 'full' | 'inline' | 'photo-overlay';
  className?: string;
}

/**
 * Premium Political Party Badge Component
 * Renders official party symbol/logo and party name for political representatives.
 * Returns null for non-political persons.
 */
export const PoliticalPartyBadge: React.FC<PoliticalPartyBadgeProps> = ({
  party,
  profile,
  variant = 'compact',
  className = ''
}) => {
  const activeParty = party || (profile ? detectPoliticalParty(profile) : null);

  if (!activeParty) return null; // Non-political person

  if (variant === 'photo-overlay') {
    return (
      <div 
        className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border shadow-md backdrop-blur-md transition-all duration-300 ${activeParty.badgeBg} ${activeParty.textColor} ${activeParty.borderColor} ${className}`}
        title={`${activeParty.nameEn} (${activeParty.abbr}) - Symbol: ${activeParty.symbolLabel}`}
      >
        <span className="text-sm leading-none filter drop-shadow">{activeParty.symbolEmoji}</span>
        <span className="text-[10px] font-black tracking-wider uppercase">{activeParty.abbr}</span>
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div 
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-xl border shadow-lg backdrop-blur-md ${activeParty.badgeBg} ${activeParty.textColor} ${activeParty.borderColor} ${className}`}
      >
        <div className="w-6 h-6 rounded-lg bg-black/20 flex items-center justify-center shrink-0 border border-white/20 shadow-inner">
          <span className="text-base leading-none drop-shadow-md">{activeParty.symbolEmoji}</span>
        </div>
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="text-xs font-black tracking-wide">{activeParty.abbr}</span>
            <span className="text-[10px] opacity-80 font-semibold">• {activeParty.symbolLabel}</span>
          </div>
          <span className="text-[11px] font-bold opacity-95 leading-tight mt-0.5">
            {activeParty.nameEn} ({activeParty.nameHi})
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div 
        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold border shadow-xs ${activeParty.badgeBg} ${activeParty.textColor} ${activeParty.borderColor} ${className}`}
        title={`${activeParty.nameEn} - Official Symbol: ${activeParty.symbolLabel}`}
      >
        <span className="text-xs leading-none">{activeParty.symbolEmoji}</span>
        <span>{activeParty.abbr}</span>
        <span className="opacity-80 font-medium text-[10px]">({activeParty.nameEn})</span>
      </div>
    );
  }

  // Default compact badge (Medium size 20-28px badge)
  return (
    <div 
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border shadow-sm backdrop-blur-sm ${activeParty.badgeBg} ${activeParty.textColor} ${activeParty.borderColor} ${className}`}
      title={`${activeParty.nameEn} (${activeParty.nameHi})`}
    >
      <span className="text-sm sm:text-base leading-none drop-shadow">{activeParty.symbolEmoji}</span>
      <span className="text-[11px] sm:text-xs font-black tracking-wide uppercase">{activeParty.abbr}</span>
    </div>
  );
};
