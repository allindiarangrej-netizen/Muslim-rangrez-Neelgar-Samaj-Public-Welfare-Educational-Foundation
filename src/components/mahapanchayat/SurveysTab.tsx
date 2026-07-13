import React from 'react';
import { Wrench, Sliders, Vote, ChevronRight, PieChart, Users, Calendar } from 'lucide-react';
import { Language, Survey } from './types';
import { getText } from './utils';

interface SurveysTabProps {
  currentLanguage: Language;
  surveys: Survey[];
  setActiveTab: (tab: any) => void;
  handleVote: (survey: Survey) => void;
  onOpenAnalytics?: () => void;
}

export const SurveysTab: React.FC<SurveysTabProps> = ({ 
  currentLanguage, 
  surveys, 
  setActiveTab, 
  handleVote,
  onOpenAnalytics
}) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Admin Survey Builder Launch Banner - Premium gold gradients */}
      <div className="bg-gradient-to-r from-[#F4C430]/15 via-yellow-500/5 to-transparent p-6 rounded-3xl border-2 border-[#F4C430]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 inset-x-0 h-1 bg-[#F4C430]"></div>
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-[#F4C430] text-[#0B132B] rounded-xl flex items-center justify-center font-extrabold shadow shrink-0">
            <Wrench className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-serif font-extrabold text-gray-900">
              {getText('Admin Survey Builder Panel (Create Unlimited Surveys)', 'एडमिन सर्वे बिल्डर (असीमित सर्वे बनाएं)', 'ایڈمن سروے بلڈر (لامحدود سروے بنائیں)', currentLanguage)}
            </h4>
            <p className="text-xs text-gray-600">
              {getText('Support 12 Question Types (Matrix, Ranking, Video, PDF, Star Scale) with Create, Edit, Schedule, Archive & Duplicate actions.', '12 प्रकार के प्रश्नों (मैट्रिक्स, वीडियो, पीडीएफ, स्टार रेटिंग) के साथ सर्वे बनाएं, शेड्यूल और आर्काइव करें।', '12 قسم کے سوالات کے ساتھ سروے بنائیں، شیڈول اور آرکائیو کریں۔', currentLanguage)}
            </p>
          </div>
        </div>
        <button
          onClick={() => setActiveTab('admin_builder')}
          className="w-full sm:w-auto px-6 py-3 bg-[#004B23] hover:bg-[#00381a] text-[#FFD54A] hover:text-white border border-[#FFD54A]/20 font-extrabold text-xs sm:text-sm rounded-xl shadow-lg hover:shadow-emerald-950/20 transition-all duration-300 flex items-center justify-center space-x-2 shrink-0 cursor-pointer transform hover:-translate-y-0.5"
        >
          <Wrench className="h-4 w-4" />
          <span>{getText('Open Survey Builder', 'सर्वे बिल्डर खोलें', 'سروے بلڈر کھولیں', currentLanguage)}</span>
        </button>
      </div>

      {/* Filter and Action Banner - Premium Left Accent border */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-lg relative group overflow-hidden">
        <div className="absolute left-0 inset-y-0 w-1.5 bg-[#004B23]"></div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 flex items-center">
            <Sliders className="h-5 w-5 mr-2 text-[#004B23]" />
            {getText('Active Community Surveys & Ballot Boxes', 'सक्रिय सामुदायिक सर्वेक्षण एवं मतदान', 'فعال کمیونٹی سروے اور بیلٹ بکس', currentLanguage)}
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            {getText('Showing 2 verified active surveys based on your district membership.', 'आपके जिले की सदस्यता के आधार पर 2 सत्यापित सक्रिय सर्वेक्षण दिखा रहा है।', 'آپ کی ضلعی رکنیت کی بنیاد پر 2 تصدیق شدہ فعال سروے دکھائے جا رہے ہیں۔', currentLanguage)}
          </p>
        </div>
      </div>

      {/* Surveys List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {surveys.map((survey) => (
          <div key={survey.id} className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-lg hover:shadow-xl hover:border-[#F4C430]/30 transition-all duration-300 relative group overflow-hidden space-y-6 flex flex-col">
            <div className="absolute top-0 inset-x-0 h-1 bg-[#F4C430] opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <div className="flex justify-between items-start">
              <span className="bg-emerald-50 text-emerald-700 text-[10px] font-black px-3 py-1 rounded-full uppercase border border-emerald-100 shadow-sm">
                {getText(survey.categoryEn, survey.categoryHi, survey.categoryUr, currentLanguage)}
              </span>
              <span className="flex items-center text-[10px] font-mono font-bold text-gray-400 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                <Calendar className="h-3 w-3 mr-1 text-[#004B23]" />
                {getText(`Ends: ${survey.endDate}`, `समाप्त: ${survey.endDate}`, `ختم: ${survey.endDate}`, currentLanguage)}
              </span>
            </div>

            <div className="space-y-3 flex-1">
              <h3 className="text-xl sm:text-2xl font-serif font-black text-emerald-950 leading-tight tracking-tight">
                {getText(survey.titleEn, survey.titleHi, survey.titleUr, currentLanguage)}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                {getText(survey.descriptionEn, survey.descriptionHi, survey.descriptionUr, currentLanguage)}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-50 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-400 shadow-sm">
                        <Users className="h-3 w-3" />
                      </div>
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-gray-500 font-mono">
                    {survey.totalVotes.toLocaleString()} {getText('Voted', 'वोट दिए', 'ووٹ دئیے', currentLanguage)}
                  </span>
                </div>
                <div className="flex items-center space-x-1.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                  <PieChart className="h-3.5 w-3.5" />
                  <span>{getText('Verified Data', 'सत्यापित डेटा', 'تصدیق شدہ ڈیٹا', currentLanguage)}</span>
                </div>
              </div>

              <button
                onClick={() => handleVote(survey)}
                className="w-full bg-gradient-to-r from-[#004B23] to-[#00381a] hover:from-[#056633] hover:to-[#004B23] text-[#FFD54A] hover:text-white font-extrabold py-4 rounded-2xl shadow-lg hover:shadow-emerald-900/20 transition-all duration-300 flex items-center justify-center space-x-2 group cursor-pointer border border-[#FFD54A]/30"
              >
                <Vote className="h-5 w-5 text-[#FFD54A] group-hover:text-white transition group-hover:animate-bounce" />
                <span>{getText('Review & Cast Digital Vote', 'समीक्षा करें और वोट डालें', 'جائزہ لیں اور ڈیجیٹل ووٹ ڈالیں', currentLanguage)}</span>
                <ChevronRight className="h-5 w-5 ml-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition" />
              </button>
              {onOpenAnalytics && (
                <button
                  onClick={onOpenAnalytics}
                  className="w-full bg-emerald-50 hover:bg-emerald-100 text-[#004B23] font-bold py-3 rounded-xl transition flex items-center justify-center space-x-2 border border-emerald-200 cursor-pointer text-xs shadow-sm"
                >
                  <PieChart className="h-4 w-4 text-[#004B23]" />
                  <span>{getText('View AI Consensus & Demographic Analytics', 'AI जनमत एवं जनसांख्यिकीय विश्लेषण देखें', 'اے آئی رائے عامہ اور آبادیاتی تجزیہ دیکھیں', currentLanguage)}</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
