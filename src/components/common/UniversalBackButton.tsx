import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface UniversalBackButtonProps {
  onBack?: () => void;
  labelEn?: string;
  labelHi?: string;
  labelUr?: string;
  currentLanguage?: string;
  className?: string;
}

export default function UniversalBackButton({
  onBack,
  labelEn = 'Back to Previous Page',
  labelHi = 'पिछली श्रेणी / पृष्ठ पर लौटें',
  labelUr = 'پچھلے صفحے پر واپس جائیں',
  currentLanguage = 'en',
  className = ''
}: UniversalBackButtonProps) {
  const getLabel = () => {
    if (currentLanguage === 'hi') return labelHi;
    if (currentLanguage === 'ur') return labelUr;
    return labelEn;
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      window.history.back();
    }
  };

  return (
    <button
      onClick={handleBack}
      type="button"
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/90 hover:bg-stone-100 text-[#004B23] border border-stone-200/80 shadow-xs hover:shadow transition-all duration-200 font-extrabold text-xs group cursor-pointer active:scale-95 ${className}`}
      aria-label={getLabel()}
      title={getLabel()}
    >
      <ArrowLeft className="w-4 h-4 text-[#004B23] group-hover:-translate-x-1 transition-transform duration-200 shrink-0 stroke-[2.5]" />
      <span className="truncate">{getLabel()}</span>
    </button>
  );
}
