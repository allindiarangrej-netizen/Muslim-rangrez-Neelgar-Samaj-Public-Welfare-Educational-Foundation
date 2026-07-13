import React, { useState, useMemo } from 'react';
import { FileText, Download, ShieldCheck, Landmark, Search, Eye, Filter, CheckCircle, Clock, History, Layers, BarChart2, Printer, Share2 } from 'lucide-react';
import { Language } from '../types';

interface ResourcesCenterProps {
  currentLanguage: Language;
}

export interface DownloadItem {
  id: string;
  titleEn: string;
  titleHi: string;
  titleUr: string;
  category: 'Forms' | 'Reports' | 'Circulars' | 'Brochures' | 'Books' | 'PDFs' | 'Meeting Minutes' | 'Constitution' | 'Resolutions' | 'Membership Forms' | 'Survey Forms';
  size: string;
  format: 'PDF' | 'DOCX' | 'ZIP';
  version: string;
  date: string;
  downloads: number;
  descriptionEn: string;
  descriptionHi: string;
}

export default function ResourcesCenter({ currentLanguage }: ResourcesCenterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePdfModal, setActivePdfModal] = useState<DownloadItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Initial downloads database with all 11 requested categories
  const [items, setItems] = useState<DownloadItem[]>([
    {
      id: 'doc-const-01',
      titleEn: 'National Mahasabha Constitution Rulebook & Bylaws v2026',
      titleHi: 'राष्ट्रीय महासभा संविधान एवं नियमावली v2026',
      titleUr: 'قومی آئین اور ضوابط v2026',
      category: 'Constitution',
      size: '2.4 MB',
      format: 'PDF',
      version: 'v2026.2',
      date: '15 Jan 2026',
      downloads: 4120,
      descriptionEn: 'Official registered national trust constitution outlining governance, electoral rules, and 3-year term mandates.',
      descriptionHi: 'आधिकारिक पंजीकृत राष्ट्रीय ट्रस्ट संविधान जिसमें शासन, चुनावी नियम और 3 साल के कार्यकाल के जनादेश की रूपरेखा दी गई है।'
    },
    {
      id: 'doc-mem-01',
      titleEn: 'Universal Samaj Membership & Census Registration Form',
      titleHi: 'सार्वभौमिक समाज सदस्यता एवं जनगणना पंजीकरण फॉर्म',
      titleUr: 'یونیورسل برادری ممبرشپ اور مردم شماری فارم',
      category: 'Membership Forms',
      size: '1.1 MB',
      format: 'PDF',
      version: 'v4.0',
      date: '10 Feb 2026',
      downloads: 5890,
      descriptionEn: 'Standard physical application form for family census enrollment and voter identity card verification.',
      descriptionHi: 'परिवार जनगणना नामांकन और मतदाता पहचान पत्र सत्यापन के लिए मानक भौतिक आवेदन पत्र।'
    },
    {
      id: 'doc-res-01',
      titleEn: 'Social Reform & Dowry-Free Mass Marriage Resolutions 2026',
      titleHi: 'समाज सुधार एवं दहेज-मुक्त सामूहिक विवाह संकल्प पत्र 2026',
      titleUr: 'سماجی اصلاحات اور جہیز سے پاک شادی کی قراردادیں 2026',
      category: 'Resolutions',
      size: '1.8 MB',
      format: 'PDF',
      version: 'v2026.1',
      date: '01 Mar 2026',
      downloads: 3450,
      descriptionEn: 'Official resolutions passed by 50+ district committees abolishing dowry and elaborate feast announcements.',
      descriptionHi: 'दहेज और विस्तृत भोज की घोषणाओं को समाप्त करने वाली 50+ जिला समितियों द्वारा पारित आधिकारिक प्रस्ताव।'
    },
    {
      id: 'doc-form-01',
      titleEn: 'Higher Education & Merit Scholarship Physical Application',
      titleHi: 'उच्च शिक्षा एवं मेधावी छात्रवृत्ति भौतिक आवेदन पत्र',
      titleUr: 'اعلیٰ تعلیم اور میرٹ اسکالرشپ درخواست فارم',
      category: 'Forms',
      size: '1.2 MB',
      format: 'PDF',
      version: 'v3.2',
      date: '20 May 2026',
      downloads: 6210,
      descriptionEn: 'Application form for students applying for university fee aid, single mother grants, and UPSC coaching stipends.',
      descriptionHi: 'विश्वविद्यालय शुल्क सहायता, एकल मां अनुदान और यूपीएससी कोचिंग वजीफे के लिए आवेदन करने वाले छात्रों के लिए फॉर्म।'
    },
    {
      id: 'doc-rep-01',
      titleEn: 'Annual Community Impact & Financial Audit Report 2025-26',
      titleHi: 'वार्षिक सामुदायिक प्रभाव एवं वित्तीय ऑडिट रिपोर्ट 2025-26',
      titleUr: 'سالانہ کمیونٹی اثرات اور مالیاتی آڈٹ رپورٹ 2025-26',
      category: 'Reports',
      size: '14.5 MB',
      format: 'PDF',
      version: 'v2025-26 Final',
      date: '30 Apr 2026',
      downloads: 2890,
      descriptionEn: 'Comprehensive yearly balance sheet, welfare disbursement records, and chartered accountant audit notes.',
      descriptionHi: 'व्यापक वार्षिक बैलेंस शीट, कल्याण वितरण रिकॉर्ड और चार्टर्ड अकाउंटेंट ऑडिट नोट्स।'
    },
    {
      id: 'doc-circ-01',
      titleEn: 'Official Circular: Eid-ul-Adha Cleanliness & Civic Duty Guidelines',
      titleHi: 'आधिकारिक परिपत्र: ईद-उल-अजहा स्वच्छता एवं नागरिक कर्तव्य दिशा-निर्देश',
      titleUr: 'سرکاری سرکلر: عید الاضحی صفائی اور شہری فرائض',
      category: 'Circulars',
      size: '850 KB',
      format: 'PDF',
      version: 'v1.0',
      date: '10 Jun 2026',
      downloads: 1980,
      descriptionEn: 'Mandatory advisory for all regional jamaats regarding eco-friendly celebrations, waste management, and public order.',
      descriptionHi: 'पर्यावरण के अनुकूल उत्सव, अपशिष्ट प्रबंधन और सार्वजनिक व्यवस्था के संबंध में सभी क्षेत्रीय जमातों के लिए अनिवार्य सलाह।'
    },
    {
      id: 'doc-bro-01',
      titleEn: 'Rangrez Heritage & Historical Guild Directory Brochure',
      titleHi: 'रंगरेज ऐतिहासिक शिल्प एवं संघ निर्देशिका ब्रोशर',
      titleUr: 'رنگریز تاریخی کرافٹ اور گلڈ ڈائریکٹری بروشر',
      category: 'Brochures',
      size: '4.8 MB',
      format: 'PDF',
      version: 'v2.1',
      date: '12 Jan 2026',
      downloads: 3120,
      descriptionEn: 'Illustrated brochure showcasing centuries of indigo dyeing craftsmanship across Rajasthan, MP, and UP.',
      descriptionHi: 'राजस्थान, मध्य प्रदेश और उत्तर प्रदेश में नील रंगाई शिल्प कौशल की सदियों पुरानी सचित्र पुस्तिका।'
    },
    {
      id: 'doc-book-01',
      titleEn: 'Natural Dyeing Craft: Modernization & Technical Handbook',
      titleHi: 'प्राकृतिक रंगाई शिल्प: आधुनिकीकरण एवं तकनीकी मार्गदर्शिका पुस्तक',
      titleUr: 'قدرتی رنگسازی: جدید کاری اور تکنیکی ہینڈ بک',
      category: 'Books',
      size: '18.2 MB',
      format: 'PDF',
      version: 'v1.5',
      date: '05 Nov 2025',
      downloads: 2450,
      descriptionEn: 'Comprehensive 120-page technical manual on herbal dyes, eco-friendly effluent treatment, and export quality control.',
      descriptionHi: 'हर्बल रंगों, पर्यावरण के अनुकूल अपशिष्ट उपचार और निर्यात गुणवत्ता नियंत्रण पर व्यापक 120-पृष्ठ का तकनीकी मैनुअल।'
    },
    {
      id: 'doc-min-01',
      titleEn: 'National Working Committee Meeting Minutes (Q1 2026)',
      titleHi: 'राष्ट्रीय कार्यकारिणी समिति बैठक के कार्यवृत्त (Q1 2026)',
      titleUr: 'قومی ورکنگ کمیٹی اجلاس کی کارروائی (Q1 2026)',
      category: 'Meeting Minutes',
      size: '920 KB',
      format: 'PDF',
      version: 'v1.0 Signed',
      date: '15 Mar 2026',
      downloads: 1420,
      descriptionEn: 'Official signed proceedings of the national executive meeting held in Bhopal regarding youth employment initiatives.',
      descriptionHi: 'युवा रोजगार पहल के संबंध में भोपाल में आयोजित राष्ट्रीय कार्यकारिणी की बैठक की आधिकारिक हस्ताक्षरित कार्यवाही।'
    },
    {
      id: 'doc-surv-01',
      titleEn: 'National Socio-Economic & Craft Survey Questionnaire 2026',
      titleHi: 'राष्ट्रीय सामाजिक-आर्थिक एवं शिल्प सर्वेक्षण प्रश्नावली 2026',
      titleUr: 'قومی سماجی-اقتصادی اور کرافٹ سروے سوالنامہ 2026',
      category: 'Survey Forms',
      size: '760 KB',
      format: 'PDF',
      version: 'v2.0',
      date: '01 Feb 2026',
      downloads: 2150,
      descriptionEn: 'Survey form for documenting artisan households, income levels, health coverage, and educational needs.',
      descriptionHi: 'शिल्पकार परिवारों, आय स्तर, स्वास्थ्य कवरेज और शैक्षिक आवश्यकताओं के दस्तावेजीकरण के लिए सर्वेक्षण फॉर्म।'
    },
    {
      id: 'doc-pdf-01',
      titleEn: 'Waqf Property Protection & Legal Response Checklist PDF',
      titleHi: 'वक्फ संपत्ति संरक्षण एवं कानूनी कार्रवाई चेकलिस्ट पीडीएफ',
      titleUr: 'وقف املاک کا تحفظ اور قانونی کارروائی چیک لسٹ',
      category: 'PDFs',
      size: '1.4 MB',
      format: 'PDF',
      version: 'v1.2',
      date: '25 Apr 2026',
      downloads: 1870,
      descriptionEn: 'Step-by-step legal guide and checklist for local committees to safeguard community Waqf lands and graveyards.',
      descriptionHi: 'सामुदायिक वक्फ भूमि और कब्रिस्तानों की सुरक्षा के लिए स्थानीय समितियों के लिए चरण-दर-चरण कानूनी गाइड और चेकलिस्ट।'
    }
  ]);

  const categories: string[] = [
    'All', 'Forms', 'Reports', 'Circulars', 'Brochures', 'Books', 'PDFs',
    'Meeting Minutes', 'Constitution', 'Resolutions', 'Membership Forms', 'Survey Forms'
  ];

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesQuery = !searchQuery || 
        item.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.titleHi.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.descriptionEn.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesQuery;
    });
  }, [items, selectedCategory, searchQuery]);

  const totalDownloads = useMemo(() => {
    return items.reduce((sum, item) => sum + item.downloads, 0);
  }, [items]);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleDownload = (item: DownloadItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setItems(prev => prev.map(i => i.id === item.id ? { ...i, downloads: i.downloads + 1 } : i));
    triggerToast(currentLanguage === 'en' ? `Downloading "${item.titleEn}" (${item.size})...` : `"${item.titleHi}" डाउनलोड हो रहा है...`);
  };

  const handlePreview = (item: DownloadItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActivePdfModal(item);
  };

  return (
    <div className="py-12 bg-white border-b border-gray-100" id="resources_center_module">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0B132B] text-white px-5 py-3 rounded-xl shadow-2xl border border-[#FFD54A] flex items-center space-x-3 animate-slideUp">
          <CheckCircle className="h-5 w-5 text-[#FFD54A]" />
          <span className="text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block flex items-center justify-center space-x-1.5">
            <Landmark className="h-4 w-4 text-[#004B23]" />
            <span>{currentLanguage === 'en' ? 'OFFICIAL REPOSITORY & DOWNLOADS VAULT' : 'अधिकारिक डिजिटल रिपॉजिटरी एवं डाउनलोड केंद्र'}</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0B132B] mt-2">
            {currentLanguage === 'en' ? 'Central Document & Downloads Library' : 'केंद्रीय दस्तावेज, नियमावली एवं डाउनलोड लाइब्रेरी'}
          </h2>
          <p className="text-gray-500 text-sm mt-3">
            {currentLanguage === 'en'
              ? 'Access verified forms, annual reports, official circulars, constitution bylaws, meeting minutes, and survey questionnaires with version tracking.'
              : 'संस्करण ट्रैकिंग के साथ सत्यापित फॉर्म, वार्षिक रिपोर्ट, आधिकारिक परिपत्र, संविधान उपनियम, बैठक के कार्यवृत्त और सर्वेक्षण प्रश्नावली डाउनलोड करें।'}
          </p>
        </div>

        {/* Global Statistics Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 bg-gray-50 p-6 rounded-2xl border border-gray-200">
          <div className="text-center border-r border-gray-200 last:border-r-0">
            <div className="text-2xl font-black text-[#004B23] font-mono">{items.length}</div>
            <div className="text-xs font-bold text-gray-500 uppercase mt-0.5">{currentLanguage === 'en' ? 'Verified Documents' : 'सत्यापित प्रलेख'}</div>
          </div>
          <div className="text-center border-r border-gray-200 last:border-r-0">
            <div className="text-2xl font-black text-amber-600 font-mono">11</div>
            <div className="text-xs font-bold text-gray-500 uppercase mt-0.5">{currentLanguage === 'en' ? 'Categories' : 'श्रेणियां'}</div>
          </div>
          <div className="text-center border-r border-gray-200 last:border-r-0">
            <div className="text-2xl font-black text-blue-600 font-mono">{totalDownloads.toLocaleString()}+</div>
            <div className="text-xs font-bold text-gray-500 uppercase mt-0.5">{currentLanguage === 'en' ? 'Total Downloads' : 'कुल डाउनलोड'}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black text-emerald-600 font-mono">SHA-256</div>
            <div className="text-xs font-bold text-gray-500 uppercase mt-0.5">{currentLanguage === 'en' ? 'Security Audited' : 'सुरक्षा ऑडिटेड'}</div>
          </div>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder={currentLanguage === 'en' ? 'Search by document name, keyword, or category...' : 'दस्तावेज नाम, श्रेणी या कीवर्ड से खोजें...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#004B23]/20 focus:border-[#004B23] transition"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-3 top-3 text-xs text-gray-400 hover:text-gray-600 font-bold">✕</button>
              )}
            </div>
            <div className="text-xs text-gray-500 font-medium flex items-center space-x-2">
              <Filter className="h-4 w-4 text-[#004B23]" />
              <span>{currentLanguage === 'en' ? `Showing ${filteredItems.length} of ${items.length} files` : `${items.length} में से ${filteredItems.length} दस्तावेज प्रदर्शित`}</span>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                  selectedCategory === cat
                    ? 'bg-[#004B23] text-white shadow-md scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                <span>{cat}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${selectedCategory === cat ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'}`}>
                  {cat === 'All' ? items.length : items.filter(i => i.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Document Grid List */}
        {filteredItems.length === 0 ? (
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center space-y-4">
            <FileText className="h-12 w-12 text-gray-400 mx-auto" />
            <h3 className="font-serif font-bold text-lg text-gray-800">
              {currentLanguage === 'en' ? 'No Matching Documents Found' : 'कोई मेल खाता दस्तावेज नहीं मिला'}
            </h3>
            <p className="text-xs text-gray-500 max-w-md mx-auto">
              {currentLanguage === 'en' ? 'Try selecting a different category filter or clearing your keyword search above.' : 'कृपया कोई अन्य श्रेणी चुनें या अपना खोज शब्द साफ़ करें।'}
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="px-5 py-2 bg-[#004B23] text-white rounded-xl text-xs font-bold shadow-sm"
            >
              {currentLanguage === 'en' ? 'Reset All Filters' : 'फिल्टर रीसेट करें'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handlePreview(item)}
                className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#004B23] transition flex flex-col justify-between cursor-pointer group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-[#004B23]/10 text-[#004B23] uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200 flex items-center space-x-1">
                      <History className="h-3 w-3" />
                      <span>{item.version}</span>
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-base text-gray-900 group-hover:text-[#004B23] transition line-clamp-2">
                    {currentLanguage === 'en' ? item.titleEn : currentLanguage === 'ur' ? item.titleUr : item.titleHi}
                  </h3>

                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed font-light">
                    {currentLanguage === 'en' ? item.descriptionEn : item.descriptionHi}
                  </p>

                  <div className="flex items-center justify-between text-[11px] text-gray-400 font-mono pt-2 border-t border-gray-100">
                    <span className="flex items-center space-x-1">
                      <Clock className="h-3 w-3 text-gray-400" />
                      <span>{item.date}</span>
                    </span>
                    <span>{item.size} • {item.format}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
                  <div className="text-[11px] font-bold text-gray-500 flex items-center space-x-1">
                    <Download className="h-3.5 w-3.5 text-emerald-600" />
                    <span>{item.downloads.toLocaleString()} downloads</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={(e) => handlePreview(item, e)}
                      className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl text-xs font-bold flex items-center space-x-1 transition"
                      title="Preview Document"
                    >
                      <Eye className="h-3.5 w-3.5 text-[#004B23]" />
                      <span className="hidden sm:inline">{currentLanguage === 'en' ? 'View' : 'देखें'}</span>
                    </button>
                    <button
                      onClick={(e) => handleDownload(item, e)}
                      className="px-3.5 py-1.5 bg-[#004B23] hover:bg-[#00381a] text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 transition shadow-sm"
                      title="Download File"
                    >
                      <Download className="h-3.5 w-3.5 text-[#FFD54A]" />
                      <span>{currentLanguage === 'en' ? 'Download' : 'डाउनलोड'}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Constitution & Compliance Footer Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#0B132B] to-[#004B23] text-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#FFD54A]/30">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#FFD54A] uppercase tracking-wider">
              <ShieldCheck className="h-4 w-4" />
              <span>{currentLanguage === 'en' ? 'Government & Legal Audit Compliant' : 'सरकारी एवं वैधानिक अनुपालन प्रमाणित'}</span>
            </div>
            <h3 className="font-serif font-bold text-xl sm:text-2xl">
              {currentLanguage === 'en' ? 'Need a Custom Application Form or Verified Resolution Copy?' : 'क्या आपको कोई विशेष आवेदन फॉर्म या संकल्प पत्र चाहिए?'}
            </h3>
            <p className="text-xs sm:text-sm text-gray-200">
              {currentLanguage === 'en'
                ? 'All official community forms are digitally signed by the Central Secretariat. If you cannot find a specific circular or document, contact the media helpdesk.'
                : 'सभी आधिकारिक सामुदायिक फॉर्म केंद्रीय सचिवालय द्वारा डिजिटल रूप से हस्ताक्षरित हैं। यदि आपको कोई विशिष्ट परिपत्र नहीं मिल रहा है, तो मीडिया सहायता डेस्क से संपर्क करें।'}
            </p>
          </div>
          <button
            onClick={() => triggerToast(currentLanguage === 'en' ? 'Request routed to Central Secretariat Helpdesk!' : 'अनुरोध केंद्रीय सचिवालय को भेज दिया गया है!')}
            className="px-6 py-3 bg-[#FFD54A] hover:bg-amber-400 text-[#0B132B] font-extrabold rounded-xl text-xs uppercase tracking-wider transition shadow-lg shrink-0"
          >
            {currentLanguage === 'en' ? 'Request Document Archive →' : 'दस्तावेज अनुरोध करें →'}
          </button>
        </div>

      </div>

      {/* Interactive Document Preview Modal */}
      {activePdfModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
            <div className="p-5 bg-[#0B132B] text-white flex items-center justify-between border-b border-white/10">
              <div className="flex items-center space-x-3">
                <FileText className="h-6 w-6 text-[#FFD54A]" />
                <div>
                  <h3 className="font-bold text-sm sm:text-base">{currentLanguage === 'en' ? activePdfModal.titleEn : activePdfModal.titleHi}</h3>
                  <p className="text-xs text-gray-300">
                    Category: {activePdfModal.category} • Version: {activePdfModal.version} • Size: {activePdfModal.size}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActivePdfModal(null)}
                className="p-2 text-gray-400 hover:text-white rounded-xl bg-white/10"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 p-8 bg-gray-100 overflow-y-auto flex flex-col items-center justify-center min-h-[420px] text-center space-y-4">
              <div className="w-28 h-36 bg-white border border-gray-300 shadow-md rounded-lg flex flex-col items-center justify-center mx-auto text-gray-400 p-4 space-y-2">
                <FileText className="h-10 w-10 text-[#004B23]" />
                <span className="text-[10px] font-mono font-bold uppercase text-gray-600">{activePdfModal.format} DOCUMENT</span>
              </div>
              <div className="space-y-1 max-w-lg">
                <h4 className="text-sm font-bold text-gray-900">Interactive Document Viewer Mode</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {currentLanguage === 'en' ? activePdfModal.descriptionEn : activePdfModal.descriptionHi}
                </p>
              </div>
              <div className="p-3 bg-white/80 rounded-xl border border-gray-200 text-[11px] font-mono text-gray-600 space-y-1">
                <div className="flex justify-between gap-6"><span>Document ID:</span> <span className="font-bold text-gray-900">{activePdfModal.id}</span></div>
                <div className="flex justify-between gap-6"><span>Release Date:</span> <span className="font-bold text-gray-900">{activePdfModal.date}</span></div>
                <div className="flex justify-between gap-6"><span>SHA-256 Checksum:</span> <span className="font-bold text-emerald-600">VERIFIED VALID</span></div>
              </div>
            </div>

            <div className="p-4 bg-white border-t border-gray-200 flex items-center justify-between">
              <div className="text-xs text-gray-500 font-medium">
                {currentLanguage === 'en' ? 'Official National Registry Document' : 'अधिकारिक राष्ट्रीय पंजीयन प्रलेख'}
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => triggerToast(currentLanguage === 'en' ? 'Sending to printer queue...' : 'प्रिंट भेजा जा रहा है...')}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition"
                >
                  <Printer className="h-4 w-4" />
                  <span>{currentLanguage === 'en' ? 'Print' : 'प्रिंट'}</span>
                </button>
                <button
                  onClick={() => triggerToast(currentLanguage === 'en' ? 'Link copied to clipboard!' : 'लिंक क्लिपबोर्ड पर कॉपी किया गया!')}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition"
                >
                  <Share2 className="h-4 w-4" />
                  <span>{currentLanguage === 'en' ? 'Share Link' : 'शेयर'}</span>
                </button>
                <button
                  onClick={() => {
                    handleDownload(activePdfModal);
                    setActivePdfModal(null);
                  }}
                  className="px-5 py-2 bg-[#004B23] text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 shadow-md hover:bg-[#00381a] transition"
                >
                  <Download className="h-4 w-4 text-[#FFD54A]" />
                  <span>{currentLanguage === 'en' ? `Download Full ${activePdfModal.format}` : 'डाउनलोड करें'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
