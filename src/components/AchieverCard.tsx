import React, { useState } from 'react';
import { AchieverProfile } from '../data/hallOfExcellenceData';
import {
  Eye,
  MapPin,
  CheckCircle2,
  Sparkles,
  Briefcase,
  Award,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Building2,
  Medal,
  Star,
  UserCheck,
  Share2,
  Check
} from 'lucide-react';

export interface AchieverCardProps {
  achiever: AchieverProfile;
  currentLanguage: 'en' | 'hi' | 'ur';
  onSelect: (achiever: AchieverProfile) => void;
  variant?: 'featured' | 'directory' | 'mentor';
  onSecondaryAction?: (achiever: AchieverProfile) => void;
  secondaryActionLabel?: string;
}

const AchieverCard: React.FC<AchieverCardProps> = ({
  achiever,
  currentLanguage,
  onSelect,
  variant = 'directory',
  onSecondaryAction,
  secondaryActionLabel
}) => {
  // Determine language text for bio/journey
  const bioText =
    achiever.biography?.[currentLanguage] ||
    achiever.biography?.en ||
    achiever.careerJourney?.[currentLanguage] ||
    achiever.careerJourney?.en ||
    'Dedicated professional serving the community with distinction.';

  const [copied, setCopied] = useState(false);

  // Handle share profile action (native share or clipboard copy fallback)
  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const shareUrl = `${window.location.origin}${window.location.pathname}?achiever=${achiever.id}`;
    const shareData = {
      title: `${achiever.name} - All India Rangrez Community Hall of Excellence`,
      text: `Explore the achievements and biography of ${achiever.name} (${achiever.designation}, ${achiever.organization}) in the All India Rangrez Community Hall of Excellence.`,
      url: shareUrl,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        // Fallback to clipboard if native share was cancelled or unavailable
      }
    } else if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        // Fallback to clipboard if native share failed
      }
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      // Quiet fallback
    }
  };

  return (
    <a
      id={achiever.id === 'ach-1' ? 'hall-of-excellence-achiever-card' : `hall-of-excellence-achiever-card-${achiever.id}`}
      data-testid="hall-of-excellence-achiever-card"
      href="#"
      onClick={(e) => { e.preventDefault(); onSelect(achiever); }}
      style={{ transition: 'transform 250ms ease-out, box-shadow 250ms ease-out, border-color 250ms ease-out, background-color 250ms ease-out' }}
      className={`group relative bg-white rounded-3xl border border-gray-200/90 shadow-md hover:shadow-2xl hover:shadow-[#004B23]/20 hover:scale-[1.03] hover:-translate-y-1 hover:border-[#004B23]/80 transition-[transform,box-shadow,border-color,background-color] duration-[250ms] ease-out flex flex-col justify-between overflow-hidden cursor-pointer transform select-none ${
        variant === 'featured' ? 'ring-1 ring-[#F4C430]/30' : ''
      }`}
    >
      {/* Decorative Top Accent Glow on Hover */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#004B23] via-[#F4C430] to-[#004B23] opacity-0 group-hover:opacity-100 transition-opacity duration-[250ms] ease-out z-20"></div>

      {/* Perfectly Centered Hover CTA Button Overlaying Card Content */}
      <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center p-4">
        <button
          type="button"
          style={{ transition: 'transform 250ms ease-out, opacity 250ms ease-out, box-shadow 250ms ease-out, background-color 250ms ease-out, border-color 250ms ease-out' }}
          className="px-5 py-3 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider bg-gradient-to-r from-[#0B132B] via-[#1C2541] to-[#0B132B] text-[#FFD54A] hover:from-[#152243] hover:to-[#152243] hover:scale-105 border-2 border-[#FFD54A] shadow-2xl shadow-[#0B132B]/60 ring-4 ring-[#0B132B]/10 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto transition-[transform,opacity,box-shadow,background-color,border-color] duration-[250ms] ease-out cursor-pointer whitespace-nowrap"
        >
          <Eye className="w-4 h-4 text-[#FFD54A] shrink-0" />
          <span>
            {currentLanguage === 'en' ? 'View Profile' : currentLanguage === 'ur' ? 'پروفائل دیکھیں' : 'प्रोफाइल देखें'}
          </span>
          <ArrowRight className="w-4 h-4 text-[#FFD54A] shrink-0 group-hover:translate-x-1 transition-transform duration-[250ms] ease-out" />
        </button>
      </div>

      {/* 1. HEADER / INFO & PHOTO BLOCK */}
      <div className="p-5 pb-4 flex items-start gap-4 relative z-10">
        {/* Achiever Photo with Hover Zoom */}
        <div className="relative shrink-0">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#F4C430] shadow-md bg-slate-100 relative">
            <img
              src={achiever.photoUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80'}
              alt={achiever.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[250ms] ease-out"
            />
          </div>

          {/* Verified Badge Icon */}
          {achiever.isVerified && (
            <div
              className="absolute -bottom-1.5 -right-1.5 bg-[#004B23] text-[#FFD54A] p-1.5 rounded-full shadow-md border-2 border-white group-hover:scale-110 transition-transform duration-[250ms] ease-out"
              title={currentLanguage === 'en' ? 'Verified Community Achiever' : 'प्रमाणित विभूति'}
            >
              <CheckCircle2 className="w-4 h-4" />
            </div>
          )}
        </div>

        {/* Achiever Core Identification */}
        <div className="flex-1 min-w-0 space-y-1.5">
          {/* Top Badges (Conditional Mentorship Badge / Govt / NRI / Profession Chips) */}
          <div className="flex flex-wrap items-center gap-1.5">
            {/* Conditional UI Badge: Available for Mentorship */}
            {achiever.isMentor && (
              <span
                data-testid="mentorship-badge"
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#004B23] via-[#00381a] to-[#0B132B] text-[#FFD54A] font-black text-[11px] sm:text-xs px-2.5 py-1 rounded-md border border-[#FFD54A]/50 shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#FFD54A] fill-[#FFD54A] animate-pulse shrink-0" />
                <span>
                  {currentLanguage === 'en'
                    ? 'Available for Mentorship'
                    : currentLanguage === 'ur'
                    ? 'رہنمائی کے لیے دستیاب'
                    : 'मार्गदर्शन हेतु उपलब्ध'}
                </span>
              </span>
            )}
            {achiever.isGovt && (
              <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-900 font-extrabold text-[10px] px-2 py-0.5 rounded-md border border-blue-300/80 shadow-2xs">
                <ShieldCheck className="w-3 h-3 text-blue-700" />
                <span>{currentLanguage === 'en' ? '👮 Govt Officer' : '👮 सरकारी सेवा'}</span>
              </span>
            )}
            {achiever.isOverseas && (
              <span className="inline-flex items-center gap-1 bg-purple-100 text-purple-900 font-extrabold text-[10px] px-2 py-0.5 rounded-md border border-purple-300/80 shadow-2xs">
                <span>🌍 NRI</span>
              </span>
            )}
            {!achiever.isMentor && !achiever.isGovt && achiever.badges.slice(0, 1).map((badge, idx) => (
              <span key={idx} className="bg-slate-100 text-[#004B23] font-extrabold text-[10px] px-2 py-0.5 rounded-md border border-gray-200">
                {badge}
              </span>
            ))}
          </div>

          {/* Achiever Name */}
          <h3 className="text-base sm:text-lg font-black text-[#0B132B] group-hover:text-[#004B23] transition-colors duration-[250ms] ease-out leading-tight truncate">
            {achiever.name}
          </h3>

          {/* Profession Highlight Pill */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-[#004B23] font-black text-xs max-w-full shadow-2xs group-hover:bg-[#004B23] group-hover:text-white transition-colors duration-[250ms] ease-out">
            <Briefcase className="w-3.5 h-3.5 shrink-0 text-emerald-600 group-hover:text-[#FFD54A] transition-colors duration-[250ms] ease-out" />
            <span className="truncate">{achiever.occupation || achiever.categoryId || 'Professional'}</span>
          </div>

          {/* Designation & Organization */}
          <div className="space-y-0.5 pt-0.5">
            <p className="text-xs font-bold text-gray-800 leading-tight truncate">
              {achiever.designation}
            </p>
            <p className="text-xs text-gray-500 font-medium truncate flex items-center gap-1">
              <Building2 className="w-3 h-3 text-gray-400 shrink-0" />
              <span className="truncate">{achiever.organization}</span>
            </p>
          </div>
        </div>
      </div>

      {/* 2. BODY / BIOGRAPHY & EXPERTISE */}
      <div className="px-5 py-3.5 bg-slate-50/70 group-hover:bg-slate-100/80 border-t border-b border-gray-100 flex-1 flex flex-col justify-between gap-3 transition-colors duration-[250ms] ease-out">
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-2 italic">
          "{bioText}"
        </p>
        
        {/* Expertise Tags */}
        {achiever.expertise && achiever.expertise.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {achiever.expertise.slice(0, 3).map((exp, idx) => (
              <span
                key={idx}
                className="text-[10px] font-extrabold bg-white text-gray-700 px-2 py-0.5 rounded-md border border-gray-200/80 shadow-2xs group-hover:border-emerald-300/80 transition-colors"
              >
                {exp}
              </span>
            ))}
            {achiever.expertise.length > 3 && (
              <span className="text-[10px] font-bold text-gray-400">
                +{achiever.expertise.length - 3}
              </span>
            )}
          </div>
        )}
      </div>

      {/* 3. FOOTER WITH LOCATION & SHARE ACTION */}
      <div className="p-4 px-5 bg-white flex items-center justify-between gap-3 relative z-10 border-t border-gray-100/60 min-h-[56px]">
        {/* Left: Location / City & State */}
        <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 truncate max-w-[45%]">
          <MapPin className="w-3.5 h-3.5 text-[#F4C430] shrink-0" />
          <span className="truncate">
            {achiever.currentCity}, {achiever.state}
          </span>
        </div>

        {/* Right: Buttons Container (Share Icon Button & Secondary Guidance Action) */}
        <div className="flex items-center gap-2 ml-auto shrink-0 z-10">
          {onSecondaryAction && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSecondaryAction(achiever);
              }}
              className="px-3 py-1.5 bg-[#004B23] hover:bg-[#00381a] text-[#FFD54A] text-xs font-black uppercase tracking-wider rounded-xl shadow-xs transition flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <Sparkles className="w-3 h-3 text-[#FFD54A]" />
              <span>{secondaryActionLabel || (currentLanguage === 'en' ? 'Guidance' : 'मार्गदर्शन')}</span>
            </button>
          )}

          {/* Share Profile Icon Button */}
          <button
            type="button"
            data-testid="share-button"
            aria-label="Share"
            onClick={handleShare}
            title={
              currentLanguage === 'en'
                ? copied
                  ? 'Copied profile link!'
                  : 'Share Profile'
                : currentLanguage === 'ur'
                ? copied
                  ? 'لنک کاپی ہو گیا!'
                  : 'پروفائل شیئر کریں'
                : copied
                ? 'लिंक कॉपी हुआ!'
                : 'प्रोफाइल शेयर करें'
            }
            className={`p-2 rounded-xl border text-xs font-bold transition-all duration-[250ms] ease-out flex items-center justify-center shrink-0 shadow-2xs cursor-pointer ${
              copied
                ? 'bg-emerald-500 text-white border-emerald-600 shadow-sm scale-105'
                : 'bg-slate-50 hover:bg-slate-100 text-gray-600 hover:text-[#004B23] border-gray-200/80 hover:border-[#004B23]/40 hover:scale-105'
            }`}
          >
            {copied ? (
              <Check className="w-4 h-4 text-white animate-bounce" />
            ) : (
              <Share2 className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </a>
  );
};

export default AchieverCard;
