import React, { useState } from 'react';
import { AchieverProfile } from '../data/hallOfExcellenceData';
import {
  X,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  Mail,
  Globe,
  Linkedin,
  Share2,
  Heart,
  MessageSquare,
  Send,
  BookOpen,
  Sparkles,
  User,
  Phone,
  HelpCircle,
  Building2,
  Calendar,
  Layers,
  ShieldCheck
} from 'lucide-react';

interface ExcellenceProfileModalProps {
  achiever: AchieverProfile | null;
  currentLanguage: 'en' | 'hi' | 'ur';
  onClose: () => void;
  onRequestMentorship: (achiever: AchieverProfile) => void;
}

const ExcellenceProfileModal: React.FC<ExcellenceProfileModalProps> = ({
  achiever,
  currentLanguage,
  onClose,
  onRequestMentorship
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'journey' | 'achievements' | 'advice' | 'contact'>('journey');

  if (!achiever) return null;

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${url}#profile-${achiever.id}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const getLocalizedText = (obj: { en: string; hi: string; ur: string }) => {
    return obj[currentLanguage] || obj.en;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-gray-200 relative flex flex-col">
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-[#0B132B] via-[#004B23] to-[#0B132B] p-6 sm:p-8 text-white relative rounded-t-3xl overflow-hidden">
          {/* Decorative pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F4C430]/10 rounded-full blur-3xl transform translate-x-16 -translate-y-16 pointer-events-none"></div>
          
          <div className="flex justify-between items-start relative z-10">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="bg-[#F4C430] text-[#0B132B] font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#004B23]" />
                {currentLanguage === 'en' ? 'Hall of Excellence Profile' : 'गौरवशाली विभूति प्रोफाइल'}
              </span>
              {achiever.isVerified && (
                <span className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-bold text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {currentLanguage === 'en' ? 'Verified Member' : 'सत्यापित सदस्य'}
                </span>
              )}
              {achiever.isMentor && (
                <span className="bg-blue-500/20 border border-blue-400/40 text-blue-300 font-bold text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFD54A]" />
                  ✅ {currentLanguage === 'en' ? 'Available for Guidance' : 'मार्गदर्शन हेतु उपलब्ध'}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition"
                title="Share Profile"
              >
                {copied ? <CheckCircle2 className="w-5 h-5 text-[#F4C430]" /> : <Share2 className="w-5 h-5" />}
              </button>
              <button
                onClick={onClose}
                className="p-2 bg-white/10 hover:bg-red-500/80 text-white rounded-full transition"
                title="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Profile Identity Hero */}
          <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
            <div className="relative shrink-0">
              <img
                src={achiever.photoUrl}
                alt={achiever.name}
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border-4 border-[#F4C430] shadow-xl"
              />
              {achiever.isFeatured && (
                <div className="absolute -bottom-2 -right-2 bg-[#F4C430] text-[#0B132B] p-1.5 rounded-full shadow-lg" title="Featured Achiever">
                  <Sparkles className="w-5 h-5" />
                </div>
              )}
            </div>

            <div className="text-center sm:text-left flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {achiever.name}
                </h2>
              </div>

              <p className="text-[#FFD54A] font-bold text-base sm:text-lg mt-1 flex items-center justify-center sm:justify-start gap-2">
                <Briefcase className="w-4 h-4 shrink-0" />
                <span>{achiever.designation} — <strong className="text-white">{achiever.organization}</strong></span>
              </p>

              {achiever.fatherName && (
                <p className="text-gray-300 text-xs sm:text-sm mt-1">
                  <span className="text-gray-400">{currentLanguage === 'en' ? 'S/o / D/o / W/o:' : 'पुत्र / पुत्री / पत्नी:'}</span> {achiever.fatherName}
                </p>
              )}

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-3 text-xs text-gray-200">
                <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-lg">
                  <MapPin className="w-3.5 h-3.5 text-[#FFD54A]" />
                  {achiever.currentCity}, {achiever.state} ({achiever.country})
                </span>
                <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-lg">
                  <GraduationCap className="w-3.5 h-3.5 text-[#FFD54A]" />
                  {achiever.qualification}
                </span>
                <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-lg font-bold text-[#FFD54A]">
                  <Calendar className="w-3.5 h-3.5" />
                  {currentLanguage === 'en' ? `Achievement: ${achiever.yearOfAchievement}` : `उपलब्धि वर्ष: ${achiever.yearOfAchievement}`}
                </span>
              </div>

              {/* Badges Bar */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 mt-4">
                {achiever.badges.map((b, i) => (
                  <span key={i} className="bg-[#004B23] border border-[#FFD54A]/40 text-[#FFD54A] font-extrabold text-[11px] px-2.5 py-1 rounded-md shadow-sm">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-gray-200 bg-slate-50 px-4 sm:px-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('journey')}
            className={`py-4 px-5 text-sm font-bold border-b-2 transition flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'journey'
                ? 'border-[#004B23] text-[#004B23] bg-white shadow-sm'
                : 'border-transparent text-gray-600 hover:text-[#004B23]'
            }`}
          >
            <User className="w-4 h-4 text-[#F4C430]" />
            <span>{currentLanguage === 'en' ? 'Journey & Biography' : 'जीवन यात्रा व परिचय'}</span>
          </button>
          <button
            onClick={() => setActiveTab('achievements')}
            className={`py-4 px-5 text-sm font-bold border-b-2 transition flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'achievements'
                ? 'border-[#004B23] text-[#004B23] bg-white shadow-sm'
                : 'border-transparent text-gray-600 hover:text-[#004B23]'
            }`}
          >
            <Award className="w-4 h-4 text-amber-500" />
            <span>{currentLanguage === 'en' ? 'Achievements & Honors' : 'उपलब्धियां एवं सम्मान'}</span>
          </button>
          <button
            onClick={() => setActiveTab('advice')}
            className={`py-4 px-5 text-sm font-bold border-b-2 transition flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'advice'
                ? 'border-[#004B23] text-[#004B23] bg-white shadow-sm'
                : 'border-transparent text-gray-600 hover:text-[#004B23]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span>{currentLanguage === 'en' ? 'Career Advice & Message' : 'युवाओं के लिए सलाह'}</span>
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`py-4 px-5 text-sm font-bold border-b-2 transition flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'contact'
                ? 'border-[#004B23] text-[#004B23] bg-white shadow-sm'
                : 'border-transparent text-gray-600 hover:text-[#004B23]'
            }`}
          >
            <Mail className="w-4 h-4 text-blue-500" />
            <span>{currentLanguage === 'en' ? 'Contact & Mentorship' : 'संपर्क एवं मार्गदर्शन'}</span>
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 flex-1 space-y-6">
          {activeTab === 'journey' && (
            <div className="space-y-6">
              {/* Native Place & Institutional Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div>
                  <div className="text-[11px] font-extrabold text-gray-400 uppercase tracking-wider">{currentLanguage === 'en' ? 'Native Place (मूल स्थान)' : 'मूल वतन'}</div>
                  <div className="font-bold text-gray-800 mt-0.5">{achiever.nativePlace}</div>
                </div>
                <div>
                  <div className="text-[11px] font-extrabold text-gray-400 uppercase tracking-wider">{currentLanguage === 'en' ? 'University / Alma Mater' : 'विश्वविद्यालय / संस्थान'}</div>
                  <div className="font-bold text-gray-800 mt-0.5">{achiever.university}</div>
                </div>
                <div>
                  <div className="text-[11px] font-extrabold text-gray-400 uppercase tracking-wider">{currentLanguage === 'en' ? 'Occupation Category' : 'पेशा / श्रेणी'}</div>
                  <div className="font-bold text-[#004B23] mt-0.5">{achiever.occupation}</div>
                </div>
              </div>

              {/* Biography */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-base font-black text-[#0B132B] uppercase tracking-wider flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-[#004B23]" />
                  <span>{currentLanguage === 'en' ? 'Professional Biography' : 'पेशेवर परिचय'}</span>
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {getLocalizedText(achiever.biography)}
                </p>
              </div>

              {/* Career Journey */}
              <div className="bg-emerald-50/60 p-5 rounded-2xl border border-emerald-200/80">
                <h3 className="text-base font-black text-[#004B23] uppercase tracking-wider flex items-center gap-2 mb-3">
                  <Layers className="w-5 h-5 text-[#F4C430]" />
                  <span>{currentLanguage === 'en' ? 'Inspiring Career Journey' : 'प्रेरक जीवन यात्रा'}</span>
                </h3>
                <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
                  {getLocalizedText(achiever.careerJourney)}
                </p>
              </div>

              {/* Languages & Expertise */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <h4 className="text-xs font-black uppercase text-gray-500 mb-2">{currentLanguage === 'en' ? 'Languages Known' : 'ज्ञात भाषाएँ'}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {achiever.languagesKnown.map((lang, i) => (
                      <span key={i} className="bg-white border border-gray-300 text-gray-700 font-bold text-xs px-3 py-1 rounded-full shadow-2xs">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <h4 className="text-xs font-black uppercase text-gray-500 mb-2">{currentLanguage === 'en' ? 'Areas of Expertise' : 'विशेषज्ञता के क्षेत्र'}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {achiever.expertise.map((exp, i) => (
                      <span key={i} className="bg-[#004B23]/10 text-[#004B23] font-extrabold text-xs px-3 py-1 rounded-full">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="space-y-6">
              {/* Major Achievements */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-black text-[#0B132B] flex items-center gap-2 mb-4">
                  <Award className="w-6 h-6 text-[#F4C430]" />
                  <span>{currentLanguage === 'en' ? 'Major Professional Achievements' : 'प्रमुख व्यावसायिक उपलब्धियां'}</span>
                </h3>
                <ul className="space-y-3">
                  {achiever.majorAchievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                      <div className="w-6 h-6 rounded-full bg-[#004B23] text-[#FFD54A] flex items-center justify-center shrink-0 font-black text-xs">
                        {i + 1}
                      </div>
                      <span className="text-gray-800 font-medium text-sm sm:text-base">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Awards & Honors */}
              <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-200">
                <h3 className="text-lg font-black text-[#004B23] flex items-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-amber-600" />
                  <span>{currentLanguage === 'en' ? 'Awards, Medals & Honors' : 'पुरस्कार, पदक एवं सम्मान'}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {achiever.awardsHonors.map((award, i) => (
                    <div key={i} className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-amber-200 shadow-2xs">
                      <span className="text-xl shrink-0">🏅</span>
                      <span className="text-gray-800 font-bold text-sm">{award}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Contributions */}
              <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-200">
                <h3 className="text-lg font-black text-blue-900 flex items-center gap-2 mb-3">
                  <Heart className="w-6 h-6 text-rose-500" />
                  <span>{currentLanguage === 'en' ? 'Social & Community Contributions' : 'सामाजिक एवं सामुदायिक योगदान'}</span>
                </h3>
                <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
                  {getLocalizedText(achiever.socialContributions)}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'advice' && (
            <div className="space-y-6">
              {/* Inspirational Message Banner */}
              <div className="bg-gradient-to-br from-[#0B132B] to-[#142244] p-6 sm:p-8 rounded-3xl text-white relative overflow-hidden shadow-lg border border-[#D4AF37]/30">
                <div className="absolute top-0 right-0 text-white/5 text-9xl font-serif pointer-events-none -mt-4 mr-4">“</div>
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#FFD54A] mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>{currentLanguage === 'en' ? 'Inspirational Message for Community Youth' : 'युवाओं के लिए प्रेरक संदेश'}</span>
                </h3>
                <p className="text-lg sm:text-xl font-medium italic text-gray-100 leading-relaxed relative z-10">
                  "{getLocalizedText(achiever.inspirationalMessage)}"
                </p>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                  <span>— {achiever.name} ({achiever.designation})</span>
                  <span className="text-[#FFD54A] font-bold">🌟 Hall of Excellence Role Model</span>
                </div>
              </div>

              {/* Practical Career Advice */}
              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200">
                <h3 className="text-base font-black text-[#004B23] uppercase tracking-wider flex items-center gap-2 mb-3">
                  <GraduationCap className="w-6 h-6 text-[#004B23]" />
                  <span>{currentLanguage === 'en' ? 'Step-by-Step Career Advice for Students' : 'छात्रों के लिए चरणबद्ध करियर मार्गदर्शन'}</span>
                </h3>
                <p className="text-gray-800 leading-relaxed text-sm sm:text-base font-medium">
                  {getLocalizedText(achiever.careerAdvice)}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="space-y-6">
              {/* Contact Info Box if Permission granted */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h3 className="text-lg font-black text-[#0B132B] mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#004B23]" />
                  <span>{currentLanguage === 'en' ? 'Contact Details & Public Profiles' : 'संपर्क विवरण एवं प्रोफाइल'}</span>
                </h3>

                {achiever.contactPermission ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {achiever.email && (
                      <div className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-gray-200">
                        <Mail className="w-5 h-5 text-gray-500 shrink-0" />
                        <div className="overflow-hidden">
                          <div className="text-[10px] text-gray-400 font-bold uppercase">{currentLanguage === 'en' ? 'Email Address' : 'ईमेल पता'}</div>
                          <a href={`mailto:${achiever.email}`} className="text-sm font-bold text-[#004B23] hover:underline truncate block">
                            {achiever.email}
                          </a>
                        </div>
                      </div>
                    )}
                    {achiever.phone && (
                      <div className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-gray-200">
                        <Phone className="w-5 h-5 text-emerald-600 shrink-0" />
                        <div className="overflow-hidden">
                          <div className="text-[10px] text-gray-400 font-bold uppercase">{currentLanguage === 'en' ? 'Mobile Number' : 'मोबाइल नंबर'}</div>
                          <p className="text-sm font-bold text-gray-800">
                            {achiever.phone.replace(/(\d{5})\d{5}/, '$1XXXXX')}
                          </p>
                        </div>
                      </div>
                    )}
                    {achiever.whatsapp && (
                      <div className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-gray-200">
                        <MessageSquare className="w-5 h-5 text-emerald-500 shrink-0" />
                        <div className="overflow-hidden">
                          <div className="text-[10px] text-gray-400 font-bold uppercase">{currentLanguage === 'en' ? 'WhatsApp' : 'व्हाट्सएप'}</div>
                          <a 
                            href={`https://wa.me/${achiever.whatsapp.replace(/\D/g, '')}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm font-bold text-emerald-600 hover:underline truncate block"
                          >
                            {currentLanguage === 'en' ? 'Chat on WhatsApp' : 'व्हाट्सएप पर चैट'}
                          </a>
                        </div>
                      </div>
                    )}
                    {achiever.linkedin && (
                      <div className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-gray-200">
                        <Linkedin className="w-5 h-5 text-blue-600 shrink-0" />
                        <div className="overflow-hidden">
                          <div className="text-[10px] text-gray-400 font-bold uppercase">LinkedIn Profile</div>
                          <a href={achiever.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-blue-600 hover:underline truncate block">
                            Connect on LinkedIn
                          </a>
                        </div>
                      </div>
                    )}
                    {achiever.website && (
                      <div className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-gray-200">
                        <Globe className="w-5 h-5 text-emerald-600 shrink-0" />
                        <div className="overflow-hidden">
                          <div className="text-[10px] text-gray-400 font-bold uppercase">Organization Website</div>
                          <a href={achiever.website} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-emerald-600 hover:underline truncate block">
                            Visit Website
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm italic">
                    {currentLanguage === 'en'
                      ? 'Direct contact details are protected for privacy. You may submit a mentorship request below if available.'
                      : 'गोपनीयता के लिए सीधे संपर्क विवरण सुरक्षित हैं। आप नीचे मार्गदर्शन अनुरोध सबमिट कर सकते हैं।'}
                  </p>
                )}
              </div>

              {/* Mentorship Guidance Box */}
              <div className="bg-gradient-to-r from-[#004B23] to-[#00381a] p-6 sm:p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
                  <div className="space-y-2 text-center sm:text-left">
                    <div className="inline-flex items-center gap-2 bg-[#FFD54A] text-[#0B132B] font-black text-xs px-3 py-1 rounded-full">
                      <Sparkles className="w-4 h-4" />
                      <span>{currentLanguage === 'en' ? 'Community Mentor Program' : 'सामुदायिक मेंटर कार्यक्रम'}</span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-black text-white">
                      {currentLanguage === 'en' ? 'Seeking Career Guidance or Exam Tips?' : 'करियर मार्गदर्शन या परीक्षा टिप्स चाहिए?'}
                    </h4>
                    <p className="text-sm text-gray-200 max-w-xl">
                      {achiever.isMentor
                        ? `${achiever.name} has graciously agreed to provide 1-on-1 career guidance, scholarship tips, and competitive exam mentorship to community students.`
                        : `${achiever.name} inspires thousands of youth across India. Join our community portal to access mentorship resources.`}
                    </p>
                  </div>

                  {achiever.isMentor && (
                    <button
                      onClick={() => onRequestMentorship(achiever)}
                      className="px-6 py-4 bg-[#FFD54A] hover:bg-amber-400 text-[#0B132B] font-black text-sm uppercase tracking-wider rounded-2xl shadow-lg hover:shadow-xl transition flex items-center gap-2 shrink-0 transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      <MessageSquare className="w-5 h-5" />
                      <span>{currentLanguage === 'en' ? 'Request Mentorship' : 'मार्गदर्शन का अनुरोध करें'}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-gray-200 bg-gray-50 rounded-b-3xl flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-bold text-gray-500">
            {currentLanguage === 'en' ? `Achiever ID: ${achiever.id} • All India Rangrez Samaj Trust` : `विभूति आईडी: ${achiever.id} • ऑल इंडिया रंगरेज समाज ट्रस्ट`}
          </div>

          <div className="flex items-center gap-3">
            {achiever.isMentor && (
              <button
                onClick={() => onRequestMentorship(achiever)}
                className="px-5 py-2.5 bg-[#004B23] hover:bg-[#00381a] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow transition flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#FFD54A]" />
                <span>{currentLanguage === 'en' ? 'Request Guidance' : 'मार्गदर्शन मांगें'}</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-bold uppercase tracking-wider rounded-xl transition cursor-pointer"
            >
              {currentLanguage === 'en' ? 'Close Profile' : 'बंद करें'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcellenceProfileModal;
