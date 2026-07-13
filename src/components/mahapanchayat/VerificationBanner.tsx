import React from 'react';
import { ShieldCheck, Lock, Eye, Building2, UserCheck } from 'lucide-react';
import { Language, VerifiedMember } from './types';
import { getText } from './utils';

interface VerificationBannerProps {
  currentLanguage: Language;
  verifiedMember: VerifiedMember | null;
  setShowVerificationModal: (show: boolean) => void;
}

export const VerificationBanner: React.FC<VerificationBannerProps> = ({ 
  currentLanguage, 
  verifiedMember, 
  setShowVerificationModal 
}) => {
  return (
    <div className="bg-white p-6 rounded-3xl border-2 border-[#004B23]/10 shadow-xl relative overflow-hidden">
      <div className="absolute right-0 top-0 w-32 h-32 bg-[#004B23]/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
      
      {verifiedMember ? (
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex items-center space-x-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#004B23] to-[#056633] flex items-center justify-center text-white shadow-xl border-2 border-white/20 shrink-0">
              <UserCheck className="h-8 w-8" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="bg-[#004B23] text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter shadow-sm">
                  {getText('Verified Member', 'सत्यापित सदस्य', 'تصدیق شدہ رکن', currentLanguage)}
                </span>
                <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                  ID: {verifiedMember.memberId}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-extrabold text-gray-900">
                {verifiedMember.fullName}
              </h3>
              <p className="text-xs text-gray-600 flex items-center space-x-2">
                <Building2 className="h-3.5 w-3.5 text-[#004B23] inline mr-1" />
                <span>{verifiedMember.district}, {verifiedMember.state}</span>
                <span className="text-gray-300">|</span>
                <Lock className="h-3.5 w-3.5 text-emerald-600 inline mr-1" />
                <span className="text-emerald-700 font-semibold">{getText('Privacy Protected (DPDP Act)', 'गोपनीयता सुरक्षित (DPDP एक्ट)', 'رازداری محفوظ (DPDP ایکٹ)', currentLanguage)}</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2 w-full md:w-auto">
            <div className="text-left md:text-right text-[11px] font-mono bg-gray-50 px-3 py-2 rounded-xl border border-gray-200 text-gray-700 w-full md:w-auto">
              <div className="text-[#004B23] font-bold uppercase tracking-tighter text-[9px]">SHA-256 E-KYC HASH:</div>
              <div className="truncate max-w-[180px] font-medium">{verifiedMember.verificationHash}</div>
            </div>
            <button
              onClick={() => setShowVerificationModal(true)}
              className="px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-[#004B23] rounded-xl text-xs font-bold border border-emerald-100 transition flex items-center justify-center space-x-1.5 w-full sm:w-auto shrink-0 shadow-sm"
            >
              <Eye className="h-3.5 w-3.5 text-[#004B23]" />
              <span>{getText('View / Edit E-KYC', 'E-KYC देखें / बदलें', 'E-KYC دیکھیں', currentLanguage)}</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
          <div className="flex items-center space-x-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-[#004B23] shrink-0 animate-pulse">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-serif font-extrabold text-[#004B23]">
                {getText('Mandatory Digital Member Verification (E-KYC)', 'अनिवार्य डिजिटल सदस्य सत्यापन (E-KYC)', 'لازمی ڈیجیٹل ممبر توثیق (E-KYC)', currentLanguage)}
              </h3>
              <p className="text-xs text-gray-600">
                {getText(
                  'Complete 2-minute digital E-KYC verification to unlock Voting rights and propose reform agendas. Your personal details are 100% encrypted & private.',
                  'मतदान करने और समाज सुधार प्रस्तावों के लिए 2 मिनट का डिजिटल E-KYC सत्यापन पूरा करें। आपकी जानकारी पूरी तरह सुरक्षित है।',
                  'ووٹنگ کے حقوق اور اصلاحاتی ایجنڈے پیش کرنے کے لیے 2 منٹ کی ڈیجیٹل E-KYC تصدیق مکمل کریں۔ آپ کی تفصیلات 100% خفیہ اور محفوظ ہیں۔',
                  currentLanguage
                )}
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowVerificationModal(true)}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#004B23] hover:bg-[#056633] text-white font-extrabold rounded-2xl shadow-xl transition transform hover:scale-105 flex items-center justify-center space-x-2 shrink-0"
          >
            <Lock className="h-5 w-5" />
            <span>{getText('Verify My Identity Now →', 'अपनी पहचान सत्यापित करें →', 'ابھی اپنی شناخت کی تصدیق کریں →', currentLanguage)}</span>
          </button>
        </div>
      )}
    </div>
  );
};
