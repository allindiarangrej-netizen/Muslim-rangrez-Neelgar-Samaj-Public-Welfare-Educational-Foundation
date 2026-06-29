import React, { useState } from 'react';
import { Search, ShieldAlert, Sparkles, HelpCircle, CheckCircle, Award, CheckCircle2 } from 'lucide-react';
import { Language, GovernmentScheme } from '../types';
import { governmentSchemes } from '../data';

interface GovernmentSchemesProps {
  currentLanguage: Language;
}

export default function GovernmentSchemes({ currentLanguage }: GovernmentSchemesProps) {
  const [activeTab, setActiveTab] = useState<'directory' | 'wizard'>('wizard');
  const [searchScheme, setSearchScheme] = useState('');
  
  // Wizard states
  const [wizardAge, setWizardAge] = useState<number>(20);
  const [wizardIncome, setWizardIncome] = useState<number>(180000);
  const [wizardGroup, setWizardGroup] = useState<'Students' | 'Women' | 'Minority' | 'Seniors'>('Students');
  const [wizardResults, setWizardResults] = useState<GovernmentScheme[]>([]);
  const [wizardCompleted, setWizardCompleted] = useState(false);

  const handleRunWizard = (e: React.FormEvent) => {
    e.preventDefault();
    const matches = governmentSchemes.filter(s => {
      const matchIncome = wizardIncome <= s.maxIncome;
      const matchGroup = s.targetGroup === 'All' || s.targetGroup === wizardGroup || (wizardGroup === 'Students' && s.targetGroup === 'Students') || (wizardGroup === 'Women' && s.targetGroup === 'Women');
      return matchIncome && matchGroup;
    });

    setWizardResults(matches);
    setWizardCompleted(true);
  };

  return (
    <div className="py-12 bg-white" id="government_schemes_module">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
            {currentLanguage === 'en' ? 'GOVERNMENT WELFARE LINK DESK' : 'शासकीय कल्याणकारी योजनाएं प्रकोष्ठ'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0B132B] mt-2">
            {currentLanguage === 'en' ? 'Government Welfare Schemes & Eligibility Checker' : 'सरकारी योजनाएं एवं ऑनलाइन पात्रता टूल'}
          </h2>
          <p className="text-gray-500 text-sm mt-3">
            {currentLanguage === 'en'
              ? 'Discover minority scholarships, central employment grants, housing benefits, and run our eligibility wizard.'
              : 'अल्पसंख्यक छात्रवृत्तियों, केंद्रीय रोजगार सहायता, आवास योजनाओं का पता लगाएं और हमारे पात्रता जांच टूल का उपयोग करें।'}
          </p>
        </div>

        {/* Inner Tab bar: Schemes Catalogue vs Eligibility Wizard */}
        <div className="flex justify-center border-b border-gray-100 pb-4 gap-4 mb-8" id="schemes_inner_tabs">
          <button
            onClick={() => { setActiveTab('wizard'); setWizardCompleted(false); }}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded transition flex items-center space-x-1.5 ${
              activeTab === 'wizard'
                ? 'bg-[#004B23] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Sparkles className="h-4 w-4 text-[#D4AF37]" />
            <span>{currentLanguage === 'en' ? 'Eligibility Checker Wizard' : 'पात्रता कैलकुलेटर टूल'}</span>
          </button>

          <button
            onClick={() => setActiveTab('directory')}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded transition flex items-center space-x-1.5 ${
              activeTab === 'directory'
                ? 'bg-[#004B23] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Search className="h-4 w-4 text-[#D4AF37]" />
            <span>{currentLanguage === 'en' ? 'Full Schemes Catalogue' : 'योजनाएं संपूर्ण निर्देशिका'}</span>
          </button>
        </div>

        {/* 1. DYNAMIC ELIGIBILITY CHECKER WIZARD */}
        {activeTab === 'wizard' && (
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn" id="eligibility_wizard">
            
            {/* Input Form Column */}
            <form onSubmit={handleRunWizard} className="lg:col-span-5 bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
              <h3 className="text-xs font-extrabold uppercase text-gray-400 tracking-wider mb-2 flex items-center space-x-1.5">
                <HelpCircle className="h-4.5 w-4.5 text-[#004B23]" />
                <span>{currentLanguage === 'en' ? 'Calculate Your Welfare Eligibility' : 'अपनी योग्यता मापदंड चुनें'}</span>
              </h3>

              <div>
                <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                  {currentLanguage === 'en' ? 'Beneficiary Group' : 'लाभार्थी का वर्ग'}
                </label>
                <select
                  value={wizardGroup}
                  onChange={(e) => setWizardGroup(e.target.value as any)}
                  className="w-full bg-white border border-gray-200 text-xs p-2.5 rounded focus:outline-none text-gray-800 font-medium"
                >
                  <option value="Students">{currentLanguage === 'en' ? 'Students (छात्र)' : 'छात्र'}</option>
                  <option value="Women">{currentLanguage === 'en' ? 'Women (महिलाएं)' : 'महिलाएं'}</option>
                  <option value="Minority">{currentLanguage === 'en' ? 'Minority Youth' : 'अल्पसंख्यक युवा'}</option>
                  <option value="Seniors">{currentLanguage === 'en' ? 'Senior Citizens' : 'वरिष्ठ नागरिक'}</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                  {currentLanguage === 'en' ? 'Beneficiary Age (आयु)' : 'लाभार्थी की आयु'}
                </label>
                <input
                  type="number"
                  required
                  value={wizardAge}
                  onChange={(e) => setWizardAge(parseInt(e.target.value) || 18)}
                  className="w-full bg-white border border-gray-200 text-xs p-2.5 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                  {currentLanguage === 'en' ? 'Family Annual Income (₹)' : 'पारिवारिक वार्षिक आय (₹)'}
                </label>
                <input
                  type="number"
                  required
                  value={wizardIncome}
                  onChange={(e) => setWizardIncome(parseInt(e.target.value) || 150000)}
                  className="w-full bg-white border border-gray-200 text-xs p-2.5 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#004B23] text-white font-bold text-xs uppercase tracking-wider rounded hover:bg-[#00381a] transition"
              >
                {currentLanguage === 'en' ? 'Check Eligible Schemes' : 'पात्र योजनाओं की जांच करें'}
              </button>
            </form>

            {/* Results Column */}
            <div className="lg:col-span-7 space-y-4">
              {wizardCompleted ? (
                <div className="space-y-4 animate-fadeIn">
                  <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg flex items-center space-x-3 text-emerald-800 text-xs">
                    <CheckCircle2 className="h-5 w-5 text-[#004B23]" />
                    <span>
                      {currentLanguage === 'en'
                        ? `Found ${wizardResults.length} Government schemes matching your eligibility profile.`
                        : `आपके विवरण के आधार पर ${wizardResults.length} सरकारी योजनाएं पाई गईं।`}
                    </span>
                  </div>

                  {wizardResults.map((s) => (
                    <div key={s.id} className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm space-y-3 hover:shadow-md transition">
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] font-bold text-[#004B23] bg-emerald-50 px-2 py-0.5 rounded">
                          {currentLanguage === 'en' ? s.categoryEn : s.categoryHi}
                        </span>
                        <span className="text-[10px] text-gray-400 font-mono">ID: {s.id}</span>
                      </div>
                      <h4 className="text-xs font-bold text-[#0B132B]">
                        {currentLanguage === 'en' ? s.nameEn : s.nameHi}
                      </h4>
                      <p className="text-xs text-gray-600 font-medium">
                        <strong>{currentLanguage === 'en' ? 'Benefits' : 'लाभ'}:</strong> {currentLanguage === 'en' ? s.benefitsEn : s.benefitsHi}
                      </p>
                      <p className="text-xs text-gray-500 font-light leading-relaxed">
                        <strong>{currentLanguage === 'en' ? 'Criteria' : 'शर्तें'}:</strong> {currentLanguage === 'en' ? s.eligibilityEn : s.eligibilityHi}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 border border-gray-100 p-8 rounded-xl text-center text-xs text-gray-500 space-y-3 min-h-[300px] flex flex-col justify-center items-center">
                  <Award className="h-10 w-10 text-[#D4AF37] animate-bounce" />
                  <p className="font-bold text-gray-700">
                    {currentLanguage === 'en' ? 'Eligibility Output Panel' : 'पात्रता परिणाम विज़ुअल बोर्ड'}
                  </p>
                  <p className="max-w-xs mx-auto text-gray-400">
                    {currentLanguage === 'en'
                      ? 'Adjust parameters and click the calculator button. Qualified central/state schemes will display instantly here.'
                      : 'मापदंडों को समायोजित करें और बटन दबाएं। योग्यता के अनुसार केंद्र व राज्य की योजनाएं तुरंत यहां दिखाई देंगी।'}
                  </p>
                </div>
              )}
            </div>

          </div>
        )}

        {/* 2. SCHEMES CATALOGUE DIRECTORY */}
        {activeTab === 'directory' && (
          <div className="space-y-6 animate-fadeIn" id="schemes_catalogue">
            <div className="max-w-md mx-auto">
              <input
                type="text"
                placeholder={currentLanguage === 'en' ? 'Search schemes by keywords...' : 'योजना का नाम खोजें...'}
                value={searchScheme}
                onChange={(e) => setSearchScheme(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 text-xs p-3 rounded-full pl-10 focus:outline-none focus:ring-1 focus:ring-[#004B23]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {governmentSchemes
                .filter(s => s.nameEn.toLowerCase().includes(searchScheme.toLowerCase()) || s.nameHi.toLowerCase().includes(searchScheme.toLowerCase()))
                .map((s) => (
                  <div key={s.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-3 hover:shadow-md transition">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-bold text-[#004B23] bg-emerald-50 px-2.5 py-0.5 rounded font-mono">
                        {currentLanguage === 'en' ? s.categoryEn : s.categoryHi}
                      </span>
                      <span className="text-[10px] text-gray-400 font-mono">ID: {s.id}</span>
                    </div>

                    <h4 className="text-sm font-bold text-[#0B132B]">
                      {currentLanguage === 'en' ? s.nameEn : s.nameHi}
                    </h4>

                    <p className="text-xs text-gray-600 leading-normal">
                      <strong>{currentLanguage === 'en' ? 'Benefits' : 'योजना के तहत लाभ'}:</strong> {currentLanguage === 'en' ? s.benefitsEn : s.benefitsHi}
                    </p>

                    <p className="text-xs text-gray-500 leading-normal font-light">
                      <strong>{currentLanguage === 'en' ? 'Eligibility' : 'पात्रता मानदंड'}:</strong> {currentLanguage === 'en' ? s.eligibilityEn : s.eligibilityHi}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
