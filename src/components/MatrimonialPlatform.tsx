import React, { useState } from 'react';
import { Heart, Search, Eye, Lock, ShieldCheck, CheckCircle2, User, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { matrimonialProfiles, mockSuccessStories } from '../data';

interface MatrimonialPlatformProps {
  currentLanguage: Language;
}

export default function MatrimonialPlatform({ currentLanguage }: MatrimonialPlatformProps) {
  const [activeGender, setActiveGender] = useState<'F' | 'M'>('F'); // F = Bride Profiles, M = Groom Profiles
  const [searchDistrict, setSearchDistrict] = useState('');
  const [searchEducation, setSearchEducation] = useState('All');
  const [viewRequestApproved, setViewRequestApproved] = useState<Record<string, boolean>>({});

  const handleRequestUnblur = (profileId: string) => {
    setViewRequestApproved(prev => ({ ...prev, [profileId]: true }));
  };

  return (
    <div className="py-12 bg-gray-50/30" id="matrimonial_module">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
            {currentLanguage === 'en' ? 'SECURE SHADI PORTAL' : 'सुरक्षित वैवाहिक केंद्र'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0B132B] mt-2 flex items-center justify-center space-x-2">
            <Heart className="h-6 w-6 text-[#D4AF37] fill-current animate-pulse" />
            <span>{currentLanguage === 'en' ? 'Rangrez Community Matrimonial' : 'रंगरेज वैवाहिक मंच'}</span>
          </h2>
          <p className="text-gray-500 text-sm mt-3">
            {currentLanguage === 'en'
              ? 'Our matrimonial platform features encrypted digital records, verified family links, and secure photo release approvals.'
              : 'हमारे वैवाहिक मंच पर एन्क्रिप्टेड डिजिटल विवरण, सत्यापित पारिवारिक संबंध और पूर्ण फोटो गोपनीयता अनुमोदन शामिल हैं।'}
          </p>
        </div>

        {/* Filter & Portal Controls */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-6 mb-10" id="matri_filters">
          
          {/* Gender Selector: Bride (F) vs Groom (M) */}
          <div className="flex justify-center border-b border-gray-100 pb-4 gap-4" id="gender_selectors">
            <button
              onClick={() => setActiveGender('F')}
              className={`px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-md transition flex items-center space-x-2 ${
                activeGender === 'F'
                  ? 'bg-[#004B23] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <User className="h-4 w-4" />
              <span>{currentLanguage === 'en' ? 'Bride Profiles (वधु खोजें)' : 'वधु प्रोफाइल'}</span>
            </button>

            <button
              onClick={() => setActiveGender('M')}
              className={`px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-md transition flex items-center space-x-2 ${
                activeGender === 'M'
                  ? 'bg-[#004B23] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <User className="h-4 w-4" />
              <span>{currentLanguage === 'en' ? 'Groom Profiles (वर खोजें)' : 'वर प्रोफाइल'}</span>
            </button>
          </div>

          {/* Search Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-[10px] font-bold text-gray-700 uppercase mb-2">
                {currentLanguage === 'en' ? 'Filter by District (जिला)' : 'जिला द्वारा खोजें'}
              </label>
              <input
                type="text"
                placeholder={currentLanguage === 'en' ? 'e.g. Morena, Bhopal...' : 'जैसे: मुरैना, भोपाल...'}
                value={searchDistrict}
                onChange={(e) => setSearchDistrict(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 text-xs p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-700 uppercase mb-2">
                {currentLanguage === 'en' ? 'Filter by Education' : 'उच्चतम योग्यता'}
              </label>
              <select
                value={searchEducation}
                onChange={(e) => setSearchEducation(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 text-xs p-3 rounded focus:outline-none font-medium text-gray-800"
              >
                <option value="All">{currentLanguage === 'en' ? 'All Degrees' : 'सभी योग्यताएं'}</option>
                <option value="B.Tech">{currentLanguage === 'en' ? 'Engineering' : 'इंजीनियरिंग'}</option>
                <option value="MD">{currentLanguage === 'en' ? 'Medical' : 'चिकित्सा'}</option>
                <option value="B.Ed">{currentLanguage === 'en' ? 'Education/Teaching' : 'शिक्षण'}</option>
              </select>
            </div>

            <div className="flex flex-col justify-end">
              <span className="text-[10px] text-gray-400 block font-mono italic mb-2">
                * Note: Secure access is only granted to verified accounts.
              </span>
              <button
                onClick={() => alert('Search parameters applied!')}
                className="w-full py-3 bg-[#D4AF37] text-[#0B132B] font-bold text-xs uppercase tracking-wide rounded hover:bg-[#c4a132] transition flex items-center justify-center space-x-2"
              >
                <Search className="h-4 w-4" />
                <span>{currentLanguage === 'en' ? 'Apply Filter' : 'फिल्टर लागू करें'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Profile Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" id="matri_profiles_grid">
          {matrimonialProfiles
            .filter(p => p.gender === activeGender)
            .filter(p => p.districtEn.toLowerCase().includes(searchDistrict.toLowerCase()))
            .map((p) => {
              const isApproved = viewRequestApproved[p.id];
              const shouldBlur = p.privacyMask && !isApproved;

              return (
                <div key={p.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col sm:flex-row gap-6 hover:shadow-md transition">
                  {/* Left Column: Blurred/Normal Photo Frame */}
                  <div className="w-full sm:w-40 h-48 relative rounded-lg overflow-hidden border border-gray-100 bg-gray-100 flex-shrink-0">
                    <img
                      src={p.photoUrl}
                      alt={p.nameEn}
                      referrerPolicy="no-referrer"
                      className={`w-full h-full object-cover object-center transition duration-500 ${shouldBlur ? 'blur-md filter scale-105' : ''}`}
                    />
                    
                    {/* Blurring Security Overlay Block */}
                    {shouldBlur && (
                      <div className="absolute inset-0 bg-black/45 flex flex-col justify-center items-center text-center p-3 space-y-2">
                        <Lock className="h-5 w-5 text-[#D4AF37]" />
                        <span className="text-[9px] uppercase tracking-widest text-white font-bold leading-tight font-mono">
                          {currentLanguage === 'en' ? 'PHOTO LOCKED' : 'फोटो लॉक है'}
                        </span>
                        <button
                          onClick={() => handleRequestUnblur(p.id)}
                          className="px-2.5 py-1 bg-[#004B23] text-white text-[9px] rounded-full hover:bg-[#00381a] transition shadow font-bold tracking-wide flex items-center space-x-1"
                        >
                          <Eye className="h-3 w-3 text-[#D4AF37]" />
                          <span>{currentLanguage === 'en' ? 'Request view' : 'देखने की अनुमति लें'}</span>
                        </button>
                      </div>
                    )}

                    {!shouldBlur && p.privacyMask && (
                      <span className="absolute bottom-2 left-2 bg-[#004B23] text-[#D4AF37] font-bold text-[8px] px-2 py-0.5 rounded uppercase font-mono tracking-wider shadow">
                        UNLOCKED ✔
                      </span>
                    )}
                  </div>

                  {/* Right Column: Profile details */}
                  <div className="flex-grow flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono text-gray-400 bg-gray-50 px-2 py-0.5 rounded">
                          {p.id}
                        </span>
                        {p.isVerified && (
                          <span className="text-[9px] text-[#004B23] font-bold flex items-center space-x-0.5 bg-emerald-50 px-1.5 py-0.5 rounded">
                            <ShieldCheck className="h-3.5 w-3.5 text-[#004B23]" />
                            <span>FAMILY VERIFIED</span>
                          </span>
                        )}
                      </div>

                      <h4 className="text-base font-extrabold text-[#0B132B] mt-2">
                        {currentLanguage === 'en' ? p.nameEn : p.nameHi}
                      </h4>

                      <div className="text-xs text-gray-600 space-y-1 mt-2">
                        <p><strong>{currentLanguage === 'en' ? 'Age / Height' : 'आयु / लम्बाई'}:</strong> {p.age} Yrs • {p.heightCm} cm</p>
                        <p><strong>{currentLanguage === 'en' ? 'Education' : 'योग्यता'}:</strong> {currentLanguage === 'en' ? p.educationEn : p.educationHi}</p>
                        <p><strong>{currentLanguage === 'en' ? 'Occupation' : 'व्यवसाय'}:</strong> {currentLanguage === 'en' ? p.occupationEn : p.occupationHi}</p>
                        <p className="text-[#004B23] font-semibold mt-1">📍 {currentLanguage === 'en' ? `${p.districtEn}, ${p.stateEn}` : `${p.districtHi}, ${p.stateHi}`}</p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-gray-100 flex items-center justify-between gap-2">
                      <button
                        onClick={() => alert('Proposal interest dispatched to parents registry successfully!')}
                        className="flex-grow py-2 bg-[#004B23] text-white text-xs font-bold uppercase tracking-wide rounded hover:bg-[#00381a] transition text-center"
                      >
                        {currentLanguage === 'en' ? 'Send Interest Proposal' : 'प्रस्ताव भेजें'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Success Stories Section */}
        <div className="bg-emerald-50/50 rounded-2xl p-8 sm:p-10 border border-emerald-100 shadow-sm" id="matri_success_stories">
          <div className="text-center space-y-2 mb-8">
            <span className="text-[#004B23] font-bold text-xs uppercase tracking-wider block">
              {currentLanguage === 'en' ? 'ESTABLISHED HARMONY' : 'सफल वैवाहिक कहानियां'}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-[#0B132B]">
              {currentLanguage === 'en' ? 'Verified Success Stories' : 'समुदाय की सफल कहानियां'}
            </h3>
            <div className="h-1 w-16 bg-[#D4AF37] mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mockSuccessStories.map((story, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-3 relative">
                <span className="absolute top-4 right-4 text-3xl font-serif text-[#D4AF37]/20 select-none">“</span>
                <p className="text-xs font-bold text-[#004B23] uppercase tracking-wider">{currentLanguage === 'en' ? story.titleEn : story.titleHi}</p>
                <h4 className="text-sm font-extrabold text-[#0B132B]">{currentLanguage === 'en' ? story.nameEn : story.nameHi}</h4>
                <p className="text-xs text-gray-600 leading-relaxed italic">
                  "{currentLanguage === 'en' ? story.textEn : story.textHi}"
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
