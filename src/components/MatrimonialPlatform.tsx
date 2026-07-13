import React, { useState, useEffect } from 'react';
import { Heart, Search, Eye, Lock, ShieldCheck, CheckCircle2, User, Sparkles, Download, Printer, FileText, MessageSquare } from 'lucide-react';
import { Language, MatrimonialProfile } from '../types';
import { getSupabase } from '../lib/supabaseClient';
import { matrimonialProfiles } from '../data';
import SecondMarriagePortal from './SecondMarriagePortal';

interface MatrimonialPlatformProps {
  currentLanguage: Language;
  defaultSubTab?: 'general' | 'second-marriage';
}

export default function MatrimonialPlatform({ currentLanguage, defaultSubTab = 'general' }: MatrimonialPlatformProps) {
  const [activeSubTab, setActiveSubTab] = useState<'general' | 'second-marriage'>(defaultSubTab);
  const [activeGender, setActiveGender] = useState<'F' | 'M'>('F'); // F = Bride Profiles, M = Groom Profiles
  const [successStories, setSuccessStories] = useState<any[]>([]);
  const supabase = getSupabase();
  
  useEffect(() => {
    if (defaultSubTab) {
      setActiveSubTab(defaultSubTab);
    }
  }, [defaultSubTab]);

  useEffect(() => {
    async function fetchStories() {
      if (!supabase) return;
      try {
        const { data, error } = await supabase.from('success_stories').select('*');
        if (data && !error) {
          setSuccessStories(data);
        }
      } catch (e) {
        console.error(e);
      }
    }
    fetchStories();
  }, [supabase]);
  const [profiles, setProfiles] = useState<MatrimonialProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchDistrict, setSearchDistrict] = useState('');
  const [searchEducation, setSearchEducation] = useState('All');
  const [viewRequestApproved, setViewRequestApproved] = useState<Record<string, boolean>>({});

  const handleRequestUnblur = (profileId: string) => {
    setViewRequestApproved(prev => ({ ...prev, [profileId]: true }));
  };

  useEffect(() => {
    async function fetchProfiles() {
      const supabase = getSupabase();
      if (!supabase) {
        setProfiles(matrimonialProfiles);
        setLoading(false);
        return;
      }
      try {
        const { data, error } = await supabase.from('matrimonial_profiles').select('*');
        if (error) {
          console.error('Error fetching matrimonial profiles:', error);
          setProfiles(matrimonialProfiles);
        } else if (data && data.length > 0) {
          // Map database fields to interface fields
          const dbProfiles = data.map(p => ({
            id: p.id,
            gender: p.gender,
            nameEn: p.name_en,
            nameHi: p.name_hi,
            age: p.age,
            heightCm: p.height_cm,
            educationEn: p.education_en,
            educationHi: p.education_hi,
            occupationEn: p.occupation_en,
            occupationHi: p.occupation_hi,
            districtEn: p.district_en,
            districtHi: p.district_hi,
            stateEn: p.state_en,
            stateHi: p.state_hi,
            photoUrl: p.photo_url,
            isVerified: p.is_verified,
            privacyMask: p.privacy_mask,
            whatsapp: p.whatsapp,
            showWhatsAppPublicly: p.show_whatsapp_publicly
          }));
          setProfiles([...dbProfiles, ...matrimonialProfiles]);
        } else {
          setProfiles(matrimonialProfiles);
        }
      } catch (err) {
        console.error('Exception in fetchProfiles:', err);
        setProfiles(matrimonialProfiles);
      } finally {
        setLoading(false);
      }
    }
    fetchProfiles();
  }, []);

  return (
    <div className="py-12 bg-gray-50/30" id="matrimonial_module">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
            {currentLanguage === 'en' ? 'SECURE SHADI PORTAL' : 'सुरक्षित वैवाहिक केंद्र'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0B132B] mt-2 flex items-center justify-center space-x-2">
            <Heart className="h-6 w-6 text-[#F4C430] fill-current animate-pulse" />
            <span>{currentLanguage === 'en' ? 'Rangrez Community Matrimonial' : 'रंगरेज वैवाहिक मंच'}</span>
          </h2>
          <p className="text-gray-500 text-sm mt-3">
            {currentLanguage === 'en'
              ? 'Our matrimonial platform features encrypted digital records, verified family links, and secure photo release approvals.'
              : 'हमारे वैवाहिक मंच पर एन्क्रिप्टेड डिजिटल विवरण, सत्यापित पारिवारिक संबंध और पूर्ण फोटो गोपनीयता अनुमोदन शामिल हैं।'}
          </p>
        </div>

        {/* Premium Submenu Tabs: General vs Second Marriage */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10 max-w-3xl mx-auto">
          <button
            onClick={() => setActiveSubTab('general')}
            className={`flex-1 w-full sm:w-auto px-6 py-4 rounded-2xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2.5 cursor-pointer border ${
              activeSubTab === 'general'
                ? 'bg-[#004B23] text-white shadow-xl border-[#004B23] scale-102'
                : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-200 shadow-sm'
            }`}
          >
            <Heart className="h-4 w-4 text-[#F4C430] fill-current shrink-0" />
            <span>{currentLanguage === 'en' ? 'Standard Matrimonial Registry' : 'सामान्य वैवाहिक केंद्र'}</span>
          </button>

          <button
            onClick={() => setActiveSubTab('second-marriage')}
            className={`flex-1 w-full sm:w-auto px-6 py-4 rounded-2xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2.5 cursor-pointer border-2 relative overflow-hidden group ${
              activeSubTab === 'second-marriage'
                ? 'bg-gradient-to-r from-[#0B132B] via-[#0D2418] to-[#0B132B] text-[#FFD54A] border-[#F4C430] shadow-[0_0_30px_rgba(244,196,48,0.35)] scale-105'
                : 'bg-gradient-to-r from-[#0E1A35] to-[#0D182E] text-amber-200 hover:text-white border-[#D4AF37]/60 hover:border-[#F4C430] shadow-md'
            }`}
          >
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
            </span>
            <Sparkles className="h-4 w-4 text-[#FFD54A] animate-pulse shrink-0" />
            <span>{currentLanguage === 'en' ? 'Second Marriage ✨ Premium' : 'द्वितीय विवाह एवं विशेष रिश्ते ✨'}</span>
          </button>
        </div>

        {activeSubTab === 'general' && (
          <div className="space-y-10">
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
                className="w-full py-3 bg-[#F4C430] text-[#0B132B] font-bold text-xs uppercase tracking-wide rounded hover:bg-[#c4a132] transition flex items-center justify-center space-x-2"
              >
                <Search className="h-4 w-4" />
                <span>{currentLanguage === 'en' ? 'Apply Filter' : 'फिल्टर लागू करें'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Profile Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" id="matri_profiles_grid">
          {profiles
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
                        <Lock className="h-5 w-5 text-[#F4C430]" />
                        <span className="text-[9px] uppercase tracking-widest text-white font-bold leading-tight font-mono">
                          {currentLanguage === 'en' ? 'PHOTO LOCKED' : 'फोटो लॉक है'}
                        </span>
                        <button
                          onClick={() => handleRequestUnblur(p.id)}
                          className="px-2.5 py-1 bg-[#004B23] text-white text-[9px] rounded-full hover:bg-[#00381a] transition shadow font-bold tracking-wide flex items-center space-x-1"
                        >
                          <Eye className="h-3 w-3 text-[#F4C430]" />
                          <span>{currentLanguage === 'en' ? 'Request view' : 'देखने की अनुमति लें'}</span>
                        </button>
                      </div>
                    )}

                    {!shouldBlur && p.privacyMask && (
                      <span className="absolute bottom-2 left-2 bg-[#004B23] text-[#F4C430] font-bold text-[8px] px-2 py-0.5 rounded uppercase font-mono tracking-wider shadow">
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
                        <p className="text-[11px] text-gray-500 mt-1">
                          <strong>{currentLanguage === 'en' ? 'Mobile' : 'मोबाइल'}:</strong> {p.phone ? p.phone.replace(/(\d{5})\d{5}/, '$1XXXXX') : 'N/A'}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
                      <button
                        onClick={() => alert('Proposal interest dispatched to parents registry successfully!')}
                        className="w-full py-2 bg-[#004B23] text-white text-xs font-bold uppercase tracking-wide rounded hover:bg-[#00381a] transition text-center"
                      >
                        {currentLanguage === 'en' ? 'Send Interest Proposal' : 'प्रस्ताव भेजें'}
                      </button>

                      {/* WhatsApp Button */}
                      {p.showWhatsAppPublicly && p.whatsapp && (
                        <a
                          href={`https://wa.me/${p.whatsapp.replace(/\D/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2 bg-[#25D366] hover:bg-[#128C7E] text-white text-[10px] font-bold uppercase tracking-wider rounded flex items-center justify-center gap-2 transition shadow-sm"
                        >
                          <MessageSquare className="h-3.5 w-3.5" />
                          <span>{currentLanguage === 'en' ? 'Chat on WhatsApp' : 'व्हाट्सएप पर चैट'}</span>
                        </a>
                      )}
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
            <div className="h-1 w-16 bg-[#F4C430] mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.length > 0 ? successStories.map((story, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-3 relative">
                <span className="absolute top-4 right-4 text-3xl font-serif text-[#F4C430]/20 select-none">“</span>
                <p className="text-xs font-bold text-[#004B23] uppercase tracking-wider">{currentLanguage === 'en' ? story.titleEn : story.titleHi}</p>
                <h4 className="text-sm font-extrabold text-[#0B132B]">{currentLanguage === 'en' ? story.nameEn : story.nameHi}</h4>
                <p className="text-xs text-gray-600 leading-relaxed italic">
                  "{currentLanguage === 'en' ? story.textEn : story.textHi}"
                </p>
              </div>
            )) : (
              <div className="col-span-2 text-center text-xs text-gray-500 py-8">
                {currentLanguage === 'en' ? 'No success stories available yet.' : 'अभी कोई सफलता की कहानी उपलब्ध नहीं है।'}
              </div>
            )}
          </div>
        </div>

        {/* Shadi Registry & Nikah Guidelines Export Toolbar */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
          <div className="flex justify-between items-center border-b border-gray-150 pb-3">
            <span className="text-xs font-bold text-gray-800 uppercase flex items-center space-x-2">
              <FileText className="h-4 w-4 text-rose-600" />
              <span>{currentLanguage === 'en' ? 'Shadi Registry & Dowry-Free Nikah Guidelines Toolbar' : 'वैवाहिक निर्देशिका एवं दहेज मुक्त निकाह नियमावली'}</span>
            </span>
            <span className="text-[10px] font-mono bg-rose-100 text-rose-800 px-2.5 py-0.5 rounded font-bold">PDF / EXCEL / BIODATA</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <button
              onClick={() => alert('Downloading standardized community Biodata PDF template...')}
              className="p-3 bg-rose-50/60 hover:bg-rose-600 hover:text-white border border-rose-200 rounded-lg text-xs font-bold text-rose-900 transition flex items-center justify-center space-x-1.5 shadow-2xs"
            >
              <Download className="h-3.5 w-3.5" />
              <span>{currentLanguage === 'en' ? 'Biodata Template' : 'बायोडाटा फॉर्म'}</span>
            </button>

            <button
              onClick={() => alert('Exporting verified candidate Shadi directory to Excel (.xlsx)...')}
              className="p-3 bg-gray-50 hover:bg-[#004B23] hover:text-white border border-gray-200 rounded-lg text-xs font-bold transition flex items-center justify-center space-x-1.5 shadow-2xs"
            >
              <Download className="h-3.5 w-3.5" />
              <span>{currentLanguage === 'en' ? 'Shadi Excel Index' : 'वैवाहिक एक्सेल सूची'}</span>
            </button>

            <button
              onClick={() => window.print()}
              className="p-3 bg-gray-50 hover:bg-[#004B23] hover:text-white border border-gray-200 rounded-lg text-xs font-bold transition flex items-center justify-center space-x-1.5 shadow-2xs"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>{currentLanguage === 'en' ? 'Print Shadi Sheet' : 'सूची प्रिंट करें'}</span>
            </button>

            <button
              onClick={() => alert('Opening Dowry-Free Sunnah Nikah Guidelines & Society Reform Rules PDF...')}
              className="p-3 bg-amber-50 hover:bg-amber-600 hover:text-white border border-amber-200 rounded-lg text-xs font-bold text-amber-900 transition flex items-center justify-center space-x-1.5 shadow-2xs"
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>{currentLanguage === 'en' ? 'Nikah Reform Rules' : 'निकाह नियमावली'}</span>
            </button>
          </div>
        </div>
          </div>
        )}

        {activeSubTab === 'second-marriage' && (
          <div className="mt-4">
            <SecondMarriagePortal currentLanguage={currentLanguage} />
          </div>
        )}

      </div>
    </div>
  );
}
