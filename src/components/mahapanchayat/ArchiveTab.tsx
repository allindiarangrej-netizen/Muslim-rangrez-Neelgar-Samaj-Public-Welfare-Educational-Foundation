import React, { useState } from 'react';
import { Archive, FileText, CheckCircle2, Search, Filter, Download, Calendar, TrendingUp } from 'lucide-react';
import { Language } from './types';
import { getText } from './utils';
import ResolutionManagementCard from './ResolutionManagementCard';

interface ArchiveTabProps {
  currentLanguage: Language;
  resolutions: any[];
}

export const ArchiveTab: React.FC<ArchiveTabProps> = ({ currentLanguage, resolutions }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');

  const categories = ['All', 'Social Reform', 'Education', 'Welfare & Support', 'Legal & Sharia', 'Marriage & Social Norms'];
  const years = ['All', '2026', '2025', '2024', '2023'];

  const filteredResolutions = resolutions.filter((res) => {
    const matchesSearch = 
      (res.titleEn && res.titleEn.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (res.titleHi && res.titleHi.includes(searchQuery)) ||
      (res.resolutionNo && res.resolutionNo.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || 
      (res.categoryEn && res.categoryEn.toLowerCase().includes(selectedCategory.toLowerCase()));

    const matchesYear = selectedYear === 'All' || res.year === selectedYear;

    return matchesSearch && matchesCategory && matchesYear;
  });

  const handleExportAll = () => {
    alert(getText(
      'Exporting Complete Historical Resolutions Dossier (PDF & Excel with SHA-256 digital seals)...',
      'संपूर्ण ऐतिहासिक प्रस्ताव दस्तावेज (SHA-256 मुहर के साथ PDF एवं Excel) डाउनलोड हो रहा है...',
      'مکمل تاریخی قراردادوں کا ڈوزیئر (SHA-256 ڈیجیٹل مہروں کے ساتھ پی ڈی ایف اور ایکسل) ڈاؤن لوڈ ہو رہا ہے...',
      currentLanguage
    ));
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#004B23] to-[#07351B] p-6 sm:p-8 rounded-3xl border-2 border-[#F4C430] shadow-xl text-white relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="bg-[#F4C430] text-[#0B132B] px-3 py-1 rounded-full text-xs font-mono font-extrabold uppercase shadow">
              📜 {getText('Official Gazette', 'आधिकारिक गजट', 'سرکاری گزٹ', currentLanguage)}
            </span>
            <span className="bg-emerald-900/80 text-emerald-300 px-3 py-1 rounded-full text-xs font-mono border border-emerald-500/30">
              {getText('100% Cryptographic Signed Seals', '100% सत्यापित डिजिटल मुहर', '100% تصدیق شدہ ڈیجیٹل مہریں', currentLanguage)}
            </span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-serif font-black text-white tracking-tight leading-tight">
            {getText('National Mahapanchayat Historical Decisions Archive', 'राष्ट्रीय महापंचायत ऐतिहासिक निर्णय अभिलेखागार', 'قومی مہاپنچایت تاریخی فیصلوں کا آرکائیو', currentLanguage)}
          </h3>
          <p className="text-xs sm:text-sm text-gray-200 mt-1">
            {getText(
              'An immutable digital gazette preserving every official resolution passed by the All India Rangrez Assembly. Fully legally auditable with real-time implementation scorecards.',
              'अखिल भारतीय रंगरेज महासभा द्वारा पारित प्रत्येक आधिकारिक प्रस्ताव को संरक्षित करने वाला एक डिजिटल गजट। पूर्ण कानूनी मान्यता और पारदर्शिता के साथ।',
              'آل انڈیا رنگریز اسمبلی کی طرف سے منظور کردہ ہر سرکاری قرارداد کو محفوظ رکھنے والا ایک ڈیجیٹل گزٹ۔ مکمل قانونی شناخت کے ساتھ۔',
              currentLanguage
            )}
          </p>
        </div>
        <button
          onClick={handleExportAll}
          className="bg-[#F4C430] hover:bg-yellow-400 text-[#0B132B] px-5 py-3 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg hover:shadow-yellow-500/20 transition duration-300 shrink-0 cursor-pointer transform hover:-translate-y-0.5"
        >
          <Download className="h-4 w-4 text-[#0B132B]" />
          <span>{getText('Export Full Gazette Archive (PDF/Excel)', 'संपूर्ण गजट आर्काइव निर्यात करें', 'مکمل گزٹ آرکائیو برآمد کریں', currentLanguage)}</span>
        </button>
      </div>

      {/* Advanced Search & Smart Filters */}
      <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={getText('Search resolution number, title, or keywords...', 'प्रस्ताव संख्या, शीर्षक या कीवर्ड खोजें...', 'قرارداد نمبر، عنوان یا مطلوبہ الفاظ تلاش کریں...', currentLanguage)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#004B23] text-xs sm:text-sm text-gray-800 bg-gray-50/50"
            />
          </div>
          
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-600 bg-gray-100 px-3 py-2 rounded-xl">
              <Filter className="h-3.5 w-3.5 text-[#004B23]" />
              <span>{getText('Filter by Category:', 'श्रेणी:', 'زمرہ:', currentLanguage)}</span>
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold text-gray-800 focus:outline-none focus:border-[#004B23]"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold text-gray-800 focus:outline-none focus:border-[#004B23]"
            >
              {years.map((yr) => (
                <option key={yr} value={yr}>{yr === 'All' ? getText('All Years', 'सभी वर्ष', 'تمام سال', currentLanguage) : `Year ${yr}`}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="flex justify-between items-center text-xs text-gray-500 font-mono pt-2 border-t border-gray-100">
          <span>📊 {getText(`Showing ${filteredResolutions.length} verified resolutions`, `${filteredResolutions.length} सत्यापित प्रस्ताव दिखाए जा रहे हैं`, `${filteredResolutions.length} تصدیق شدہ قراردادیں دکھائی جا رہی ہیں`, currentLanguage)}</span>
          {(searchQuery || selectedCategory !== 'All' || selectedYear !== 'All') && (
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setSelectedYear('All'); }}
              className="text-[#004B23] hover:underline font-bold cursor-pointer"
            >
              ✕ {getText('Reset Filters', 'फ़िल्टर रीसेट करें', 'فلٹرز ری سیٹ کریں', currentLanguage)}
            </button>
          )}
        </div>
      </div>

      {/* Resolutions List using rich ResolutionManagementCard */}
      <div className="space-y-8">
        {filteredResolutions.length === 0 ? (
          <div className="bg-white p-12 rounded-3xl border border-gray-200 text-center space-y-3">
            <Archive className="h-12 w-12 text-gray-300 mx-auto" />
            <h4 className="text-lg font-bold text-gray-800">{getText('No matching resolutions found in the gazette archive', 'अभिलेखागार में कोई मेल खाता प्रस्ताव नहीं मिला', 'آرکائیو میں کوئی مماثل قرارداد نہیں ملی', currentLanguage)}</h4>
            <p className="text-xs text-gray-500">{getText('Try adjusting your search query or category filters.', 'कृपया अपनी खोज या श्रेणी फ़िल्टर बदलें।', 'براہ کرم اپنی تلاش یا زمرہ کے فلٹرز کو تبدیل کریں۔', currentLanguage)}</p>
          </div>
        ) : (
          filteredResolutions.map((res) => (
            <ResolutionManagementCard
              key={res.id}
              resolution={res}
              getText={(en, hi, ur) => getText(en, hi, ur, currentLanguage)}
              isArchiveView={true}
            />
          ))
        )}
      </div>
    </div>
  );
};
