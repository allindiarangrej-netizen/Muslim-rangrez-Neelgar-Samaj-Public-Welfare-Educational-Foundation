import React, { useState } from 'react';
import { AchieverProfile, detectCategoryTier, detectProfessionTag } from '../data/hallOfExcellenceData';
import { detectPoliticalParty } from '../data/politicalParties';
import { PoliticalPartyBadge } from './common/PoliticalPartyBadge';
import { getText } from '../utils/i18nHelpers';
import {
  MapPin,
  CheckCircle2,
  Sparkles,
  Building2,
  Share2,
  Check,
  Briefcase,
  Star,
  Award,
  Medal,
  ChevronRight,
  ShieldCheck,
  User
} from 'lucide-react';
import { ProfileImage } from './common/ProfileImage';

export interface AchieverCardProps {
  achiever: AchieverProfile;
  currentLanguage: 'en' | 'hi' | 'ur';
  onSelect: (achiever: AchieverProfile) => void;
  variant?: 'featured' | 'directory' | 'mentor';
  onSecondaryAction?: (achiever: AchieverProfile) => void;
  secondaryActionLabel?: string;
  rankIndex?: number;
}

const AchieverCard: React.FC<AchieverCardProps> = ({
  achiever,
  currentLanguage,
  onSelect,
  variant = 'directory',
  onSecondaryAction,
  secondaryActionLabel,
  rankIndex
}) => {
  // Determine language text for bio/journey
  const bioText = getText(achiever.biography, currentLanguage) || getText(achiever.careerJourney, currentLanguage) || '';
  const name = getText(achiever.name, currentLanguage);
  const displayName = getText(achiever.displayName, currentLanguage);
  const fatherName = getText(achiever.fatherName, currentLanguage);
  const designation = getText(achiever.designation, currentLanguage);
  const organization = getText(achiever.organization, currentLanguage);
  const currentCity = getText(achiever.currentCity, currentLanguage);
  const state = getText(achiever.state, currentLanguage);
  
  // Custom Translation for Contribution Highlight (if any)
  const contributionHighlight = getText(achiever.socialContributions, currentLanguage);

  const [copied, setCopied] = useState(false);

  // Dynamic Tier visual config
  const isHajj = achiever.categoryTier === 'hajj' || (achiever.categoryTier as string) === 'hajj-pilgrims' || Boolean(achiever.hajjYear) || achiever.categoryId === 'hajj-pilgrims';
  const computedTier = achiever.categoryTier || detectCategoryTier(getText(achiever.designation, 'en'), getText(achiever.occupation, 'en'), achiever.categoryId);
  const professionTagRaw = detectProfessionTag(getText(achiever.designation, 'en'), getText(achiever.occupation, 'en'), achiever.categoryId);
  // Optional: translate professionTag based on dictionary if needed. We'll leave it as is or handle it similarly.
  const professionTag = professionTagRaw; 
  const party = detectPoliticalParty(achiever);

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const shareUrl = `${window.location.origin}${window.location.pathname}?achiever=${achiever.id}`;
    const shareData = {
      title: `${name} - All India Rangrez Community Hall of Excellence`,
      text: `Explore the achievements of ${name} in the All India Rangrez Community Hall of Excellence.`,
      url: shareUrl,
    };
    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try { await navigator.share(shareData); return; } catch (err) {}
    }
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {}
  };

  return (
    <div
      id={`hall-of-excellence-achiever-card-${achiever.id}`}
      data-testid="hall-of-excellence-achiever-card"
      role="button"
      tabIndex={0}
      onClick={() => onSelect(achiever)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect(achiever); } }}
      className={`interactive-card group relative rounded-3xl border shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer select-none bg-white/95 backdrop-blur-md border-gray-100 hover:border-[#FFD54A] active:scale-[0.985]`}
    >
      {/* Shine overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
      {/* Decorative Golden Glow Border on Hover */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#FFD54A]/50 pointer-events-none transition-colors duration-500"></div>

      <div className="p-6 pb-5 flex flex-col items-center text-center relative z-10">
        
        {/* Large Circular Photo with Verification Badge */}
        <div className="relative shrink-0 mb-4 group-hover:scale-105 transition-transform duration-500 ease-out">
          <ProfileImage
            src={achiever.photoUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80'}
            alt={name}
            name={displayName ? `${name} (${displayName})` : name}
            designation={designation}
            badge={isHajj ? '🕋 Haji' : (achiever.badges?.[0] ? getText(achiever.badges[0] as any, currentLanguage) : 'Hall of Excellence')}
            politicalParty={achiever.politicalParty}
            size="xl"
            containerClassName={`w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 shadow-xl ${
              isHajj ? 'border-amber-400 shadow-amber-200' : 'border-[#F4C430] shadow-[#F4C430]/20'
            }`}
          />
          {achiever.isVerified && (
            <div
              className="absolute bottom-1 right-1 bg-blue-500 text-white p-1.5 rounded-full shadow-lg border-2 border-white group-hover:scale-110 group-hover:rotate-12 transition-transform"
              title={currentLanguage === 'en' ? 'Verified Profile' : 'प्रमाणित प्रोफाइल'}
            >
              <CheckCircle2 className="w-5 h-5" />
            </div>
          )}
          {party && (
            <div className="absolute top-0 right-0 z-20 shadow-lg scale-100">
              <PoliticalPartyBadge party={party} variant="photo-overlay" />
            </div>
          )}
        </div>

        {/* Achievement Badges */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-3 group-hover:animate-pulse">
          {isHajj && (
            <span className="inline-flex items-center gap-1 bg-gradient-to-r from-emerald-800 to-[#004B23] text-[#FFD54A] font-black text-[10px] px-2.5 py-1 rounded-full shadow-sm">
              <span>🕋 {currentLanguage === 'en' ? 'Haji' : currentLanguage === 'ur' ? 'حاجی' : 'हाजी'} {achiever.hajjYear ? `(${achiever.hajjYear})` : ''}</span>
            </span>
          )}
          {computedTier === 'diamond' && !isHajj && (
            <span className="inline-flex items-center gap-1 bg-cyan-50 text-cyan-700 font-extrabold text-[10px] px-2.5 py-1 rounded-full border border-cyan-200 shadow-sm">
              💎 Diamond Tier
            </span>
          )}
          {computedTier === 'platinum' && !isHajj && (
            <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-700 font-extrabold text-[10px] px-2.5 py-1 rounded-full border border-slate-300 shadow-sm">
              🏆 Platinum Tier
            </span>
          )}
          {computedTier === 'gold' && !isHajj && (
            <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 font-extrabold text-[10px] px-2.5 py-1 rounded-full border border-amber-300 shadow-sm">
              🥇 Gold Tier
            </span>
          )}
          {achiever.isMentor && (
            <span className="inline-flex items-center gap-1 bg-[#004B23] text-[#FFD54A] font-extrabold text-[10px] px-2.5 py-1 rounded-full shadow-sm">
              <Sparkles className="w-3 h-3 text-[#FFD54A]" /> Mentor
            </span>
          )}
        </div>

        {/* Large Name */}
        <h3 className="text-xl sm:text-2xl font-black text-[#004B23] group-hover:text-[#00381a] transition-colors leading-tight mb-1 font-serif drop-shadow-sm group-hover:drop-shadow-md">
          {name}
        </h3>
        {displayName && (
          <p className="text-sm font-bold text-gray-500 mb-1">({displayName})</p>
        )}

        {/* Father's Name */}
        {fatherName && (
          <p className="text-xs font-semibold text-gray-500 mb-3 flex items-center gap-1">
            <User className="w-3 h-3" />
            {currentLanguage === 'en' ? 'Father:' : currentLanguage === 'ur' ? 'والد:' : 'पिता:'} {fatherName}
          </p>
        )}

        {/* Position & Organization */}
        <div className="bg-slate-50 border border-gray-100 rounded-xl p-3 w-full mb-3 shadow-inner">
          <p className="text-sm font-black text-[#0B132B] mb-0.5">
            {designation}
          </p>
          <p className="text-xs text-gray-600 font-medium flex items-center justify-center gap-1">
            <Building2 className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <span className="truncate">{organization}</span>
          </p>
        </div>

        {/* One-line Contribution Highlight */}
        {contributionHighlight && (
          <div className="w-full relative bg-gradient-to-r from-emerald-50 to-amber-50 border-l-4 border-l-[#F4C430] p-2.5 rounded-r-xl shadow-sm mb-3 group-hover:bg-gradient-to-r group-hover:from-emerald-100 transition-colors">
            <p className="text-xs font-bold text-emerald-900 flex items-center justify-center gap-1.5 line-clamp-1">
              <Star className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span className="truncate">{contributionHighlight}</span>
            </p>
          </div>
        )}

      </div>

      {/* BODY / BIOGRAPHY & EXPERTISE */}
      <div className="px-6 py-4 bg-slate-50/50 group-hover:bg-white flex-1 flex flex-col justify-start gap-3 transition-colors border-t border-gray-100">
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3 text-center sm:text-left">
          {bioText}
        </p>
        
        {/* Expertise Tags */}
        {achiever.expertise && achiever.expertise.length > 0 && (
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 pt-2 mt-auto">
            {achiever.expertise.slice(0, 3).map((exp, idx) => (
              <span
                key={idx}
                className="text-[10px] font-extrabold bg-white text-[#004B23] px-2.5 py-1 rounded-lg border border-gray-200 shadow-sm group-hover:border-[#F4C430] transition-colors"
              >
                {getText(exp, currentLanguage)}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* FOOTER WITH LOCATION & SHARE ACTION */}
      <div className="p-4 px-6 bg-white flex items-center justify-between gap-3 relative z-10 border-t border-gray-100">
        {/* Location / City & State */}
        <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 truncate max-w-[50%]">
          <MapPin className="w-4 h-4 text-[#004B23] shrink-0" />
          <span className="truncate">
            {currentCity}{state ? `, ${state}` : ''}
          </span>
        </div>

        {/* Action Buttons Container */}
        <div className="flex items-center gap-2 ml-auto shrink-0 z-10">
          {onSecondaryAction && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onSecondaryAction(achiever); }}
              className="px-3 py-1.5 bg-[#004B23] hover:bg-[#00381a] text-[#FFD54A] text-[10px] sm:text-xs font-black uppercase tracking-wider rounded-xl shadow-md transition flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <Sparkles className="w-3 h-3 text-[#FFD54A]" />
              <span>{secondaryActionLabel || (currentLanguage === 'en' ? 'Guidance' : currentLanguage === 'ur' ? 'رہنمائی' : 'मार्गदर्शन')}</span>
            </button>
          )}

          {/* Share Profile Icon Button */}
          <button
            type="button"
            data-testid="share-button"
            aria-label="Share"
            onClick={handleShare}
            className={`p-2 rounded-xl border text-xs font-bold transition-all flex items-center justify-center shrink-0 shadow-sm cursor-pointer ${
              copied
                ? 'bg-emerald-500 text-white border-emerald-600 scale-105'
                : 'bg-slate-50 hover:bg-slate-100 text-[#004B23] border-gray-200 hover:border-[#004B23]/40'
            }`}
          >
            {copied ? <Check className="w-4 h-4 text-white animate-bounce" /> : <Share2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AchieverCard;
