import React from 'react';
import { FileText, Download, ShieldCheck, Landmark } from 'lucide-react';
import { Language } from '../types';

interface ResourcesCenterProps {
  currentLanguage: Language;
}

export default function ResourcesCenter({ currentLanguage }: ResourcesCenterProps) {
  const documents = [
    { titleEn: 'M महासभा Constitution Rulebook v2026', titleHi: 'महासभा संविधान एवं नियमावली v2026', size: '2.4 MB', format: 'PDF', category: 'Constitution' },
    { titleEn: 'Scholarship Application Form 2026 (Physical)', titleHi: 'उच्च शिक्षा छात्रवृत्ति आवेदन पत्र (भौतिक)', size: '1.2 MB', format: 'PDF', category: 'Grants' },
    { titleEn: 'Traditional Dyer Business Loan Application', titleHi: 'शिल्पकार लघु उद्योग ऋण सहायता आवेदन पत्र', size: '1.8 MB', format: 'PDF', category: 'Welfare' }
  ];

  return (
    <div className="py-12 bg-white border-b border-gray-100" id="resources_center_module">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
            {currentLanguage === 'en' ? 'OFFICIAL RESOLUTIONS CELL' : 'अधिकारिक घोषणापत्र एवं प्रलेख'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0B132B] mt-2">
            {currentLanguage === 'en' ? 'Resources & Constitution Documents' : 'महासभा दस्तावेज, नियमावली एवं फॉर्म'}
          </h2>
          <p className="text-gray-500 text-sm mt-3">
            {currentLanguage === 'en'
              ? 'Download official trust registration certificates, physical registration forms, and regional bylaws.'
              : 'अधिकारिक महासभा पंजीकरण प्रमाण पत्र, भौतिक पंजीकरण फॉर्म और क्षेत्रीय नियमावलियां डाउनलोड करें।'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Document Table List */}
          <div className="lg:col-span-8 bg-gray-50 p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-4 flex items-center space-x-2">
              <FileText className="h-5 w-5 text-[#004B23]" />
              <span>{currentLanguage === 'en' ? 'Verified Document Library' : 'सत्यापित प्रलेख एवं फॉर्म लाइब्रेरी'}</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-gray-200 text-gray-400 font-bold uppercase tracking-wider text-[10px]">
                    <th className="pb-3">{currentLanguage === 'en' ? 'Document Name' : 'दस्तावेज नाम'}</th>
                    <th className="pb-3 hidden sm:table-cell">{currentLanguage === 'en' ? 'Category' : 'श्रेणी'}</th>
                    <th className="pb-3">{currentLanguage === 'en' ? 'Size / Format' : 'साइज / फॉर्मेट'}</th>
                    <th className="pb-3 text-right">{currentLanguage === 'en' ? 'Action' : 'डाउनलोड'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
                  {documents.map((doc, idx) => (
                    <tr key={idx} className="hover:bg-gray-100/50 transition">
                      <td className="py-3.5 pr-3 font-semibold text-gray-900">
                        {currentLanguage === 'en' ? doc.titleEn : doc.titleHi}
                      </td>
                      <td className="py-3.5 hidden sm:table-cell text-gray-500">
                        <span className="px-2 py-0.5 bg-emerald-50 text-[#004B23] rounded text-[10px]">
                          {doc.category}
                        </span>
                      </td>
                      <td className="py-3.5 font-mono text-gray-400">{doc.size} • {doc.format}</td>
                      <td className="py-3.5 text-right">
                        <button
                          onClick={() => alert(`Initiating secure direct download for ${doc.titleEn}...`)}
                          className="px-3 py-1.5 bg-[#004B23] text-white hover:bg-[#00381a] rounded font-bold transition inline-flex items-center space-x-1"
                        >
                          <Download className="h-3.5 w-3.5 text-[#D4AF37]" />
                          <span>{currentLanguage === 'en' ? 'Get PDF' : 'डाउनलोड'}</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Constitution brief panel */}
          <div className="lg:col-span-4 bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm space-y-6">
            <div>
              <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider flex items-center space-x-2">
                <Landmark className="h-5 w-5 text-[#004B23]" />
                <span>{currentLanguage === 'en' ? 'The Constitutional Charter' : 'महासभा संविधान की मुख्य धाराएं'}</span>
              </h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                {currentLanguage === 'en'
                  ? 'Our community operates under a registered national constitution, audited annually for absolute regulatory compliance.'
                  : 'हमारा समुदाय एक पंजीकृत राष्ट्रीय संविधान के तहत संचालित होता है, जो पूर्ण विनियामक अनुपालन के लिए वार्षिक रूप से ऑडिट किया जाता है।'}
              </p>
            </div>

            <div className="space-y-3 text-xs text-gray-600 pl-4 border-l-2 border-[#D4AF37]">
              <p>• <strong>{currentLanguage === 'en' ? 'Resolution 12 (Education)' : 'धारा 12 (शिक्षा)'}:</strong> {currentLanguage === 'en' ? 'Complete tuition aid for single mother children.' : 'एकल माताओं के बच्चों के लिए पूर्ण शिक्षण सहायता।'}</p>
              <p>• <strong>{currentLanguage === 'en' ? 'Resolution 15 (Electoral)' : 'धारा 15 (चुनाव नियमावली)'}:</strong> {currentLanguage === 'en' ? 'District officers elected democratically every 3 Years.' : 'हर 3 वर्ष में लोकतांत्रिक रूप से जिला पदाधिकारियों का चुनाव।'}</p>
            </div>

            <div className="border-t border-gray-200 pt-4 flex items-center justify-between text-[11px] font-mono text-emerald-700">
              <span className="flex items-center space-x-1">
                <ShieldCheck className="h-4 w-4" />
                <span>GOVT OF INDIA COMPLIANT</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
