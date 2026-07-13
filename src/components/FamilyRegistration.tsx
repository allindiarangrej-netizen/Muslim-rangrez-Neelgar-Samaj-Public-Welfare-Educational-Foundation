import React, { useState, useEffect } from 'react';
import { UserPlus, Trash, ChevronDown, Award, Users, Info, Plus, Sparkles, Network, Download, Printer, FileText } from 'lucide-react';
import { Language, FamilyMember } from '../types';
import { getSupabase } from '../lib/supabaseClient';

interface FamilyRegistrationProps {
  currentLanguage: Language;
  focusSection?: 'census' | 'tree';
}

const DEFAULT_MEMBERS: FamilyMember[] = [
  { id: '1', nameEn: 'Mohammed Shakeel Rangrez', nameHi: 'मोहम्मद शकील रंगरेज़', relationship: 'Self', gender: 'M', age: 34, educationEn: 'B.Tech CS', educationHi: 'बी.टेक सीएस', occupationEn: 'Software Developer', occupationHi: 'सॉफ्टवेयर डेवलपर' },
  { id: '2', nameEn: 'Al-Haaj Gulam Nabi', nameHi: 'अल-हाज गुलाम नबी', relationship: 'Father', gender: 'M', age: 68, educationEn: 'Graduate', educationHi: 'स्नातक', occupationEn: 'Retired Government Officer', occupationHi: 'सेवानिवृत्त सरकारी अधिकारी' },
  { id: '3', nameEn: 'Zainab Begum', nameHi: 'जैनब बेगम', relationship: 'Mother', gender: 'F', age: 61, educationEn: 'Matric', educationHi: 'मैट्रिक', occupationEn: 'Homemaker', occupationHi: 'गृहणी' },
  { id: '4', nameEn: 'Yasmin Rangrez', nameHi: 'यास्मीन रंगरेज़', relationship: 'Spouse', gender: 'F', age: 30, educationEn: 'B.Ed', educationHi: 'बी.एड', occupationEn: 'School Teacher', occupationHi: 'शिक्षिका' },
  { id: '5', nameEn: 'Rehan Rangrez', nameHi: 'रेहान रंगरेज़', relationship: 'Son', gender: 'M', age: 6, educationEn: 'Primary School', educationHi: 'प्राथमिक विद्यालय', occupationEn: 'Student', occupationHi: 'छात्र' }
];

export default function FamilyRegistration({ currentLanguage, focusSection }: FamilyRegistrationProps) {
  useEffect(() => {
    if (focusSection === 'tree') {
      setTimeout(() => {
        const el = document.getElementById('family_tree_display');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 250);
    }
  }, [focusSection]);
  const [householdIncome, setHouseholdIncome] = useState('Middle');
  const [legacyArtisan, setLegacyArtisan] = useState(false);
  const [censusWarning, setCensusWarning] = useState<string | null>(null);
  
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([]);
  const [loading, setLoading] = useState(true);

  // Form states for new relative input
  const [newMember, setNewMember] = useState({
    nameEn: '',
    nameHi: '',
    relationship: 'Son' as any,
    gender: 'M' as any,
    age: '',
    educationEn: '',
    educationHi: '',
    occupationEn: '',
    occupationHi: ''
  });

  useEffect(() => {
    async function fetchFamilyMembers() {
      const supabase = getSupabase();
      if (!supabase) {
        setFamilyMembers(DEFAULT_MEMBERS);
        setLoading(false);
        return;
      }
      try {
        const { data, error } = await supabase.from('family_members').select('*');
        if (error) {
          console.error('Error fetching family members:', error);
          setFamilyMembers(DEFAULT_MEMBERS);
        } else if (data && data.length > 0) {
          // Map database fields to interface fields
          const dbMembers = data.map(m => ({
            id: m.id,
            nameEn: m.name_en,
            nameHi: m.name_hi,
            relationship: m.relationship,
            gender: m.gender,
            age: m.age,
            educationEn: m.education_en,
            educationHi: m.education_hi,
            occupationEn: m.occupation_en,
            occupationHi: m.occupation_hi
          }));
          setFamilyMembers([...DEFAULT_MEMBERS, ...dbMembers]);
        } else {
          setFamilyMembers(DEFAULT_MEMBERS);
        }
      } catch (err) {
        console.error('Exception fetching family members:', err);
        setFamilyMembers(DEFAULT_MEMBERS);
      } finally {
        setLoading(false);
      }
    }
    fetchFamilyMembers();
  }, []);

  const handleAddMember = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMember.nameEn) return;
    setCensusWarning(null);
    
    const supabase = getSupabase();
    if (!supabase) {
      const localMember: FamilyMember = {
        id: 'LOCAL-' + Date.now(),
        nameEn: newMember.nameEn,
        nameHi: newMember.nameHi || newMember.nameEn,
        relationship: newMember.relationship,
        gender: newMember.gender,
        age: Number(newMember.age),
        educationEn: newMember.educationEn || 'Secondary',
        educationHi: newMember.educationHi || 'माध्यमिक',
        occupationEn: newMember.occupationEn || 'Student',
        occupationHi: newMember.occupationHi || 'छात्र'
      };
      setFamilyMembers(prev => [...prev, localMember]);
      setNewMember({
        nameEn: '',
        nameHi: '',
        relationship: 'Son',
        gender: 'M',
        age: '',
        educationEn: '',
        educationHi: '',
        occupationEn: '',
        occupationHi: ''
      });
      return;
    }

    try {
      const { data: { user } } = await supabase.auth.getUser();

      const created = {
        user_id: user?.id,
        name_en: newMember.nameEn,
        name_hi: newMember.nameHi || newMember.nameEn,
        relationship: newMember.relationship,
        gender: newMember.gender,
        age: parseInt(newMember.age) || 20,
        education_en: newMember.educationEn || 'Secondary',
        education_hi: newMember.educationHi || 'माध्यमिक',
        occupation_en: newMember.occupationEn || 'Student',
        occupation_hi: newMember.occupationHi || 'छात्र'
      };

      const { data, error } = await supabase.from('family_members').insert(created).select().single();

      if (error) {
        console.error('Error adding member:', error);
        return;
      }

      if (data) {
        setFamilyMembers(prev => [...prev, {
          id: data.id,
          nameEn: data.name_en,
          nameHi: data.name_hi,
          relationship: data.relationship,
          gender: data.gender,
          age: data.age,
          educationEn: data.education_en,
          educationHi: data.education_hi,
          occupationEn: data.occupation_en,
          occupationHi: data.occupation_hi
        }]);
      }
    } catch (err) {
      console.error('Failed to add family member:', err);
    }

    setNewMember({
      nameEn: '',
      nameHi: '',
      relationship: 'Son',
      gender: 'M',
      age: '',
      educationEn: '',
      educationHi: '',
      occupationEn: '',
      occupationHi: ''
    });
  };

  const handleRemoveMember = async (id: string) => {
    setCensusWarning(null);
    const target = familyMembers.find(m => m.id === id);
    if (target?.relationship === 'Self') {
      setCensusWarning(currentLanguage === 'en' ? 'The Household Head (Self) cannot be removed from the census form.' : 'घर के मुखिया (Self) को जनगणना प्रपत्र से हटाया नहीं जा सकता है।');
      return;
    }
    
    const supabase = getSupabase();
    if (!supabase) {
      setFamilyMembers(prev => prev.filter(m => m.id !== id));
      return;
    }

    try {
      const { error } = await supabase.from('family_members').delete().eq('id', id);
      if (error) {
        console.error('Error removing member:', error);
        return;
      }
      setFamilyMembers(prev => prev.filter(m => m.id !== id));
    } catch (err) {
      console.error('Failed to remove family member:', err);
    }
  };

  return (
    <div className="py-12 bg-white border-b border-gray-100" id="family_census_module">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
            {currentLanguage === 'en' ? 'NATIONAL FAMILY CENSUS ENGINE' : 'राष्ट्रीय पारिवारिक जनगणना प्रणाली'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0B132B] mt-2">
            {currentLanguage === 'en' ? 'Socio-Economic Family Tree Mapping' : 'पारिवारिक जनगणना एवं वंशावली'}
          </h2>
          <div className="text-[10px] text-emerald-800 bg-emerald-50 border border-emerald-100 py-1.5 px-3 rounded-lg max-w-lg mx-auto font-serif font-bold">
            {currentLanguage === 'en' ? 'Registrant Entity:' : 'पंजीकरण निकाय:'}{' '}
            <span className="uppercase tracking-wide">Muslim Rangrez Neelgar Samaj Public Welfare & Educational Foundation</span>
          </div>
          <p className="text-gray-500 text-sm mt-3">
            {currentLanguage === 'en'
              ? 'Formulate your complete family census records below. The system automatically creates a high-fidelity visual generation map/tree.'
              : 'नीचे अपना संपूर्ण पारिवारिक जनगणना डेटा दर्ज करें। हमारा सिस्टम स्वचालित रूप से एक सुंदर दृश्य वंशावली चार्ट (फैमिली ट्री) तैयार करता है।'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column Left: Input Form / Add Dependents */}
          <div className="lg:col-span-5 bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm space-y-6" id="family_input_panel">
            
            <div className="border-b border-gray-200 pb-3">
              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider flex items-center space-x-2">
                <Plus className="h-4 w-4 text-[#004B23]" />
                <span>{currentLanguage === 'en' ? 'Add Relative Dependents' : 'नया पारिवारिक सदस्य जोड़ें'}</span>
              </h3>
            </div>

            {censusWarning && (
              <div className="bg-red-50 border border-red-200 text-red-900 text-xs px-4 py-2.5 rounded-lg flex items-center justify-between font-bold animate-fadeIn">
                <span>⚠️ {censusWarning}</span>
                <button onClick={() => setCensusWarning(null)} className="text-red-500 hover:text-red-700 font-extrabold ml-2">✕</button>
              </div>
            )}

            <form onSubmit={handleAddMember} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                    {currentLanguage === 'en' ? 'Relative Name (EN)' : 'नाम (अंग्रेजी)'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Adnan Rangrez"
                    value={newMember.nameEn}
                    onChange={(e) => setNewMember({ ...newMember, nameEn: e.target.value })}
                    className="w-full bg-white border border-gray-200 text-xs p-2.5 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                    {currentLanguage === 'en' ? 'Relative Name (HI)' : 'नाम (हिन्दी)'}
                  </label>
                  <input
                    type="text"
                    placeholder="उदा. अदनान रंगरेज"
                    value={newMember.nameHi}
                    onChange={(e) => setNewMember({ ...newMember, nameHi: e.target.value })}
                    className="w-full bg-white border border-gray-200 text-xs p-2.5 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                    {currentLanguage === 'en' ? 'Relationship' : 'संबंध'}
                  </label>
                  <select
                    value={newMember.relationship}
                    onChange={(e) => setNewMember({ ...newMember, relationship: e.target.value as any })}
                    className="w-full bg-white border border-gray-200 text-xs p-2.5 rounded focus:outline-none"
                  >
                    <option value="Spouse">{currentLanguage === 'en' ? 'Spouse (जीवनसाथी)' : 'जीवनसाथी'}</option>
                    <option value="Son">{currentLanguage === 'en' ? 'Son (पुत्र)' : 'पुत्र'}</option>
                    <option value="Daughter">{currentLanguage === 'en' ? 'Daughter (पुत्री)' : 'पुत्री'}</option>
                    <option value="Father">{currentLanguage === 'en' ? 'Father (पिता)' : 'पिता'}</option>
                    <option value="Mother">{currentLanguage === 'en' ? 'Mother (माता)' : 'माता'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                    {currentLanguage === 'en' ? 'Age (आयु)' : 'आयु'}
                  </label>
                  <input
                    type="number"
                    required
                    value={newMember.age}
                    onChange={(e) => setNewMember({ ...newMember, age: e.target.value })}
                    className="w-full bg-white border border-gray-200 text-xs p-2.5 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                    {currentLanguage === 'en' ? 'Gender' : 'लिंग'}
                  </label>
                  <select
                    value={newMember.gender}
                    onChange={(e) => setNewMember({ ...newMember, gender: e.target.value as any })}
                    className="w-full bg-white border border-gray-200 text-xs p-2.5 rounded focus:outline-none"
                  >
                    <option value="M">{currentLanguage === 'en' ? 'Male' : 'पुरुष'}</option>
                    <option value="F">{currentLanguage === 'en' ? 'Female' : 'महिला'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                    {currentLanguage === 'en' ? 'Education' : 'शिक्षा'}
                  </label>
                  <input
                    type="text"
                    placeholder="B.A., Class 8, etc."
                    value={newMember.educationEn}
                    onChange={(e) => setNewMember({ ...newMember, educationEn: e.target.value })}
                    className="w-full bg-white border border-gray-200 text-xs p-2.5 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#004B23] text-white font-bold text-xs uppercase tracking-wider rounded hover:bg-[#00381a] transition inline-flex items-center justify-center space-x-2"
                >
                  <Plus className="h-4 w-4 text-[#F4C430]" />
                  <span>{currentLanguage === 'en' ? 'Link Relative Dependent' : 'परिवार से सम्बद्ध करें'}</span>
                </button>
              </div>
            </form>

            {/* Extra Household Parameters */}
            <div className="border-t border-gray-200 pt-4 space-y-3">
              <div>
                <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                  {currentLanguage === 'en' ? 'Household Income Group' : 'पारिवारिक वार्षिक आय वर्ग'}
                </label>
                <select
                  value={householdIncome}
                  onChange={(e) => setHouseholdIncome(e.target.value)}
                  className="w-full bg-white border border-gray-200 text-xs p-2.5 rounded focus:outline-none text-gray-800"
                >
                  <option value="EWS">{currentLanguage === 'en' ? 'EWS (Less than ₹1.5 Lakh PA)' : 'ईडब्ल्यूएस (₹1.5 लाख से कम)'}</option>
                  <option value="Lower_Middle">{currentLanguage === 'en' ? 'Lower Middle (₹1.5L - ₹3L PA)' : 'निम्न मध्यम (₹1.5 लाख - ₹3 लाख)'}</option>
                  <option value="Middle">{currentLanguage === 'en' ? 'Middle (₹3L - ₹8L PA)' : 'मध्यम (₹3 लाख - ₹8 लाख)'}</option>
                  <option value="Upper_Middle">{currentLanguage === 'en' ? 'Upper Middle (₹8L - ₹15L PA)' : 'उच्च मध्यम (₹8 लाख - ₹15 लाख)'}</option>
                  <option value="High">{currentLanguage === 'en' ? 'High Income (> ₹15L PA)' : 'उच्च आय (> ₹15 लाख)'}</option>
                </select>
              </div>

              {/* Legacy Artisan checkbox */}
              <label className="flex items-center space-x-3 cursor-pointer p-2 bg-white rounded border border-gray-100">
                <input
                  type="checkbox"
                  checked={legacyArtisan}
                  onChange={(e) => setLegacyArtisan(e.target.checked)}
                  className="h-4 w-4 text-[#004B23]"
                />
                <span className="text-xs text-gray-700 font-medium">
                  {currentLanguage === 'en'
                    ? 'Our ancestors practiced traditional dyeing/printing (Legacy Artisan)'
                    : 'पारंपरिक रंगाई-छपाई विरासत कारीगर (शिल्पकार) पृष्ठभूमि है'}
                </span>
              </label>
            </div>

          </div>

          {/* Column Right: Interactive Family Tree Model */}
          <div className="lg:col-span-7 bg-gray-50 p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm space-y-6" id="family_tree_display">
            
            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
              <h3 className="text-sm font-bold text-[#0B132B] uppercase tracking-wider flex items-center space-x-2">
                <Network className="h-4 w-4 text-[#F4C430]" />
                <span>{currentLanguage === 'en' ? 'Interactive Visual Genogram Chart' : 'सामुदायिक गतिशील वंशावली वृक्ष'}</span>
              </h3>
              <span className="text-[10px] font-mono bg-[#004B23]/10 text-[#004B23] px-2 py-0.5 rounded font-bold">
                {familyMembers.length} MEMBERS
              </span>
            </div>

            {/* HIGH FIDELITY FAMILY TREE COMPONENT USING CSS FLEXBOX & HIERARCHICAL NODES */}
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-inner overflow-x-auto min-h-[400px] flex flex-col justify-between items-center" id="family_tree_graph">
              
              {/* Father Generation Block (Parent) */}
              {familyMembers.some(m => m.relationship === 'Father' || m.relationship === 'Mother') && (
                <div className="flex flex-wrap justify-center gap-6 pb-6 border-b border-gray-100 w-full">
                  {familyMembers
                    .filter(m => m.relationship === 'Father' || m.relationship === 'Mother')
                    .map(m => (
                      <div key={m.id} className="relative bg-emerald-50 text-emerald-900 border-2 border-[#004B23]/30 px-4 py-2.5 rounded-lg shadow-sm text-center min-w-[140px]">
                        <span className="text-[8px] uppercase tracking-wider bg-[#004B23] text-white px-1.5 py-0.5 rounded absolute -top-2.5 left-1/2 transform -translate-x-1/2 font-bold">
                          {currentLanguage === 'en' ? m.relationship : (m.relationship === 'Father' ? 'पिता' : 'माता')}
                        </span>
                        <p className="text-xs font-bold text-gray-900 mt-1">{currentLanguage === 'en' ? m.nameEn : m.nameHi}</p>
                        <p className="text-[9px] text-gray-500 mt-0.5">{m.age} Yrs • {m.occupationEn}</p>
                      </div>
                    ))}
                </div>
              )}

              {/* Core Self & Spouse Node Block */}
              <div className="flex flex-wrap justify-center gap-8 py-8 w-full relative">
                {familyMembers
                  .filter(m => m.relationship === 'Self' || m.relationship === 'Spouse')
                  .map(m => (
                    <div key={m.id} className="relative bg-white text-gray-900 border-2 border-[#F4C430] px-5 py-3 rounded-xl shadow-md text-center min-w-[160px] transform hover:scale-102 transition">
                      <span className="text-[8px] uppercase tracking-wider bg-[#F4C430] text-gray-900 px-2 py-0.5 rounded absolute -top-2.5 left-1/2 transform -translate-x-1/2 font-extrabold">
                        {currentLanguage === 'en' ? m.relationship : (m.relationship === 'Self' ? 'स्वयं (मुखिया)' : 'जीवनसाथी')}
                      </span>
                      <p className="text-xs font-extrabold text-gray-900 mt-1">{currentLanguage === 'en' ? m.nameEn : m.nameHi}</p>
                      <p className="text-[10px] text-gray-600 mt-0.5 font-medium">{m.educationEn} • {m.occupationEn}</p>
                      <p className="text-[9px] text-gray-400 font-mono mt-1">{m.age} Years Old</p>
                    </div>
                  ))}
              </div>

              {/* Dependents Generation Block (Children) */}
              {familyMembers.some(m => m.relationship === 'Son' || m.relationship === 'Daughter') && (
                <div className="flex flex-wrap justify-center gap-6 pt-6 border-t border-gray-100 w-full">
                  {familyMembers
                    .filter(m => m.relationship === 'Son' || m.relationship === 'Daughter')
                    .map(m => (
                      <div key={m.id} className="relative bg-amber-50/60 text-gray-900 border border-amber-200 px-4 py-2 rounded-lg text-center min-w-[130px]">
                        <span className="text-[8px] uppercase tracking-wider bg-[#F4C430]/20 text-amber-950 border border-amber-300 px-1.5 py-0.5 rounded absolute -top-2.5 left-1/2 transform -translate-x-1/2 font-bold">
                          {currentLanguage === 'en' ? m.relationship : (m.relationship === 'Son' ? 'पुत्र' : 'पुत्री')}
                        </span>
                        <p className="text-xs font-bold text-gray-900 mt-1">{currentLanguage === 'en' ? m.nameEn : m.nameHi}</p>
                        <p className="text-[9px] text-gray-500 mt-0.5">{m.age} Yrs • {m.occupationEn}</p>
                        <button
                          onClick={() => handleRemoveMember(m.id)}
                          className="absolute -top-1 -right-1.5 bg-red-100 hover:bg-red-200 text-red-700 p-0.5 rounded-full shadow transition"
                          title="Remove dependent"
                        >
                          <Trash className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                </div>
              )}

            </div>

            {/* Verification & Trust Disclaimer info block */}
            <div className="bg-amber-50 border border-amber-200 text-amber-950 text-xs p-4 rounded-lg flex items-start space-x-3">
              <Info className="h-4.5 w-4.5 text-[#F4C430] flex-shrink-0 mt-0.5" />
              <p className="leading-normal">
                {currentLanguage === 'en'
                  ? 'All linked children are eligible for the central trust educational grants directory. Ensure high school results or tuition slips are scanned and updated correctly in the support panel.'
                  : 'सम्बद्ध बच्चे केंद्रीय ट्रस्ट शैक्षिक सहायता सूची के पात्र हैं। सुनिश्चित करें कि माध्यमिक बोर्ड परिणाम या शिक्षण शुल्क पर्ची सहायता पैनल में सही ढंग से अपलोड की गई हो।'}
              </p>
            </div>

            {/* Census Reports & Genogram Export Toolbar */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-3">
              <div className="flex justify-between items-center border-b border-gray-150 pb-2">
                <span className="text-xs font-bold text-gray-800 uppercase flex items-center space-x-2">
                  <FileText className="h-4 w-4 text-[#004B23]" />
                  <span>{currentLanguage === 'en' ? 'Family Census & Genogram Reports Toolbar' : 'परिवार जनगणना एवं वंशावली रिपोर्ट टूलबार'}</span>
                </span>
                <span className="text-[10px] font-mono bg-purple-100 text-purple-800 px-2 py-0.5 rounded font-bold">EXCEL / PDF / PRINT</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <button
                  onClick={() => alert('Exporting Household Census sheet to Excel (.xlsx) format...')}
                  className="p-2.5 bg-gray-50 hover:bg-[#004B23] hover:text-white border border-gray-200 rounded text-xs font-bold transition flex items-center justify-center space-x-1.5 shadow-2xs"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>{currentLanguage === 'en' ? 'Excel Census Dump' : 'एक्सेल शीट डाउनलोड'}</span>
                </button>

                <button
                  onClick={() => alert('Generating PDF Family Genogram Chart & Lineage Report...')}
                  className="p-2.5 bg-gray-50 hover:bg-[#004B23] hover:text-white border border-gray-200 rounded text-xs font-bold transition flex items-center justify-center space-x-1.5 shadow-2xs"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>{currentLanguage === 'en' ? 'PDF Genogram Tree' : 'पीडीएफ वंशावली'}</span>
                </button>

                <button
                  onClick={() => window.print()}
                  className="p-2.5 bg-gray-50 hover:bg-[#004B23] hover:text-white border border-gray-200 rounded text-xs font-bold transition flex items-center justify-center space-x-1.5 shadow-2xs"
                >
                  <Printer className="h-3.5 w-3.5" />
                  <span>{currentLanguage === 'en' ? 'Print Tree Chart' : 'वृक्ष प्रिंट करें'}</span>
                </button>

                <button
                  onClick={() => alert('Family socio-economic analytics & education statistics summary compiled for review!')}
                  className="p-2.5 bg-purple-50 hover:bg-purple-600 hover:text-white text-purple-900 border border-purple-200 rounded text-xs font-bold transition flex items-center justify-center space-x-1.5 shadow-2xs"
                >
                  <Award className="h-3.5 w-3.5" />
                  <span>{currentLanguage === 'en' ? 'Census Analytics' : 'जनगणना आंकड़े'}</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
