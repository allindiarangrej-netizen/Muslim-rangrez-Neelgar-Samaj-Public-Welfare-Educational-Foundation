import React from 'react';
import { ArrowLeft, CheckCircle, Clock, Users, Globe, ShieldCheck, Heart, BookOpen, UserPlus, FileText } from 'lucide-react';
import { Language } from '../types';

interface CommunityServiceDetailProps {
  serviceId: string;
  currentLanguage: Language;
  onNavigate: (tabId: string) => void;
}

const SERVICE_DATA: Record<string, any> = {
  'academic-support-it-literacy': {
    titleEn: 'Academic Support & IT Literacy',
    titleHi: 'अकादमिक सहायता और आईटी साक्षरता',
    descriptionEn: 'Empowering students through high-quality educational resources, IT training, and academic mentorship to bridge the digital divide.',
    descriptionHi: 'डिजिटल विभाजन को पाटने के लिए उच्च गुणवत्ता वाले शैक्षिक संसाधनों, आईटी प्रशिक्षण और शैक्षणिक मार्गदर्शन के माध्यम से छात्रों को सशक्त बनाना।',
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2070',
    featuresEn: [
      'Digital Literacy Bootcamps',
      'Higher Education Scholarships',
      'Career Guidance Counseling',
      'Online Resource Libraries'
    ],
    featuresHi: [
      'डिजिटल साक्षरता बूटकैंप',
      'उच्च शिक्षा छात्रवृत्ति',
      'करियर मार्गदर्शन परामर्श',
      'ऑनलाइन संसाधन पुस्तकालय'
    ]
  },
  'medical-assistance-blood-bank': {
    titleEn: 'Medical Assistance & Blood Bank',
    titleHi: 'चिकित्सा सहायता और ब्लड बैंक',
    descriptionEn: 'Providing essential medical support and maintaining a robust blood donor registry to ensure timely assistance during emergencies.',
    descriptionHi: 'आवश्यक चिकित्सा सहायता प्रदान करना और आपात स्थिति के दौरान समय पर सहायता सुनिश्चित करने के लिए एक मजबूत रक्तदाता रजिस्ट्री बनाए रखना।',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1584362924243-d7f42ee9a467?auto=format&fit=crop&q=80&w=2070',
    featuresEn: [
      '24/7 Blood Donor Hotline',
      'Medical Expense Assistance',
      'Community Health Camps',
      'Hospital Networking Support'
    ],
    featuresHi: [
      '24/7 ब्लड डोनर हेल्पलाइन',
      'चिकित्सा व्यय सहायता',
      'सामुदायिक स्वास्थ्य शिविर',
      'अस्पताल नेटवर्किंग सहायता'
    ]
  },
  'mass-marriage-reform': {
    titleEn: 'Mass Marriage & Reform Counseling',
    titleHi: 'सामूहिक विवाह और सुधार परामर्श',
    descriptionEn: 'Promoting simplified marriage ceremonies and providing counseling to reform outdated customs within the community.',
    descriptionHi: 'सरलीकृत विवाह समारोहों को बढ़ावा देना और समुदाय के भीतर पुरानी प्रथाओं को सुधारने के लिए परामर्श प्रदान करना।',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2072',
    featuresEn: [
      'Simplified Nikah Ceremonies',
      'Pre-Marital Counseling',
      'Social Reform Workshops',
      'Legal Guidance for Families'
    ],
    featuresHi: [
      'सरलीकृत निकाह समारोह',
      'विवाह पूर्व परामर्श',
      'सामाजिक सुधार कार्यशालाएं',
      'परिवारों के लिए कानूनी मार्गदर्शन'
    ]
  },
  'traditional-textile-art': {
    titleEn: 'Preserving Traditional Textile Art',
    titleHi: 'पारंपरिक वस्त्र कला का संरक्षण',
    descriptionEn: 'Safeguarding our heritage by supporting traditional weavers and dyers, ensuring the continuity of our unique textile arts.',
    descriptionHi: 'पारंपरिक बुनकरों और रंगरेजों का समर्थन करके हमारी विरासत की रक्षा करना, हमारी अनूठी वस्त्र कला की निरंतरता सुनिश्चित करना।',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1528154032358-99b29472871f?auto=format&fit=crop&q=80&w=2070',
    featuresEn: [
      'Artisan Skill Workshops',
      'Direct-to-Market Platforms',
      'Heritage Documentation',
      'Tool & Equipment Grants'
    ],
    featuresHi: [
      'कारीगर कौशल कार्यशालाएं',
      'डायरेक्ट-टू-मार्केट प्लेटफॉर्म',
      'विरासत दस्तावेजीकरण',
      'उपकरण और मशीनरी अनुदान'
    ]
  },
  'digital-id-census': {
    titleEn: 'Digital ID Cards & Census Registry',
    titleHi: 'डिजिटल आईडी कार्ड और जनगणना रजिस्ट्री',
    descriptionEn: 'Modernizing community records through digital identity verification and a comprehensive family census system.',
    descriptionHi: 'डिजिटल पहचान सत्यापन और व्यापक पारिवारिक जनगणना प्रणाली के माध्यम से सामुदायिक रिकॉर्ड का आधुनिकीकरण करना।',
    icon: UserPlus,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2072',
    featuresEn: [
      'Secure Digital ID Issuance',
      'Comprehensive Family Census',
      'Verified Membership Portal',
      'Dynamic Population Analytics'
    ],
    featuresHi: [
      'सुरक्षित डिजिटल आईडी जारी करना',
      'व्यापक पारिवारिक जनगणना',
      'सत्यापित सदस्यता पोर्टल',
      'गतिशील जनसंख्या विश्लेषण'
    ]
  },
  'government-scheme-guidance': {
    titleEn: 'Government Scheme Guidance',
    titleHi: 'सरकारी योजना मार्गदर्शन',
    descriptionEn: 'Navigating community members through state and national welfare schemes to ensure they receive entitled benefits.',
    descriptionHi: 'सामुदायिक सदस्यों को राज्य और राष्ट्रीय कल्याणकारी योजनाओं के माध्यम से मार्गदर्शन करना ताकि यह सुनिश्चित हो सके कि उन्हें हकदार लाभ मिले।',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2070',
    featuresEn: [
      'Scheme Eligibility Audits',
      'Application Filing Support',
      'Direct Benefit Education',
      'Policy Advocacy'
    ],
    featuresHi: [
      'योजना पात्रता ऑडिट',
      'आवेदन दाखिल करने में सहायता',
      'प्रत्यक्ष लाभ शिक्षा',
      'नीति वकालत'
    ]
  }
};

export default function CommunityServiceDetail({ serviceId, currentLanguage, onNavigate }: CommunityServiceDetailProps) {
  const data = SERVICE_DATA[serviceId] || SERVICE_DATA['academic-support-it-literacy'];
  const Icon = data.icon;

  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      {/* Header/Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img 
          src={data.image} 
          alt={data.titleEn}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#003118] via-[#003118]/60 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center space-x-2 text-[#F4C430] hover:text-white transition-colors mb-6 group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-bold uppercase tracking-widest">{currentLanguage === 'en' ? 'Back to Home' : 'वापस होम पर'}</span>
            </button>
            
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-[#F4C430]/20 border border-[#F4C430]/40 px-3 py-1 rounded-full">
                <Icon className="w-4 h-4 text-[#F4C430]" />
                <span className="text-[10px] font-bold text-[#F4C430] uppercase tracking-widest">
                  {currentLanguage === 'en' ? 'Community Service' : 'सामुदायिक सेवा'}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-serif font-extrabold text-white">
                {currentLanguage === 'en' ? data.titleEn : data.titleHi}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-emerald-950 mb-6 border-b border-gray-100 pb-4">
                {currentLanguage === 'en' ? 'About this Service' : 'इस सेवा के बारे में'}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                {currentLanguage === 'en' ? data.descriptionEn : data.descriptionHi}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(currentLanguage === 'en' ? data.featuresEn : data.featuresHi).map((feature: string, idx: number) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start space-x-4">
                  <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600 shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-emerald-950">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-emerald-950 rounded-2xl p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-serif font-bold">
                  {currentLanguage === 'en' ? 'Need Assistance or Want to Help?' : 'सहायता चाहिए या मदद करना चाहते हैं?'}
                </h3>
                <p className="text-emerald-100 font-light leading-relaxed">
                  {currentLanguage === 'en' 
                    ? 'Our volunteer teams are ready to support you. Whether you need access to these services or wish to contribute your time and expertise, get in touch with our national coordination cell.'
                    : 'हमारी स्वयंसेवक टीमें आपकी सहायता के लिए तैयार हैं। चाहे आपको इन सेवाओं तक पहुँच की आवश्यकता हो या आप अपना समय और विशेषज्ञता योगदान देना चाहते हों, हमारे राष्ट्रीय समन्वय प्रकोष्ठ से संपर्क करें।'}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button 
                    onClick={() => onNavigate('helplines')}
                    className="px-6 py-3 bg-[#F4C430] hover:bg-[#c29f2e] text-emerald-950 font-bold rounded-lg transition-all shadow-lg cursor-pointer"
                  >
                    {currentLanguage === 'en' ? 'Contact Helpline' : 'हेल्पलाइन से संपर्क करें'}
                  </button>
                  <button 
                    onClick={() => onNavigate('volunteer-registration')}
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-lg transition-all cursor-pointer"
                  >
                    {currentLanguage === 'en' ? 'Become a Volunteer' : 'स्वयंसेवक बनें'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-emerald-950 mb-6 flex items-center space-x-2">
                <Clock className="w-5 h-5 text-[#F4C430]" />
                <span>{currentLanguage === 'en' ? 'Operating Status' : 'परिचालन स्थिति'}</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-gray-50">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">{currentLanguage === 'en' ? 'Status' : 'स्थिति'}</span>
                  <span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700 uppercase tracking-widest">
                    Active
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-50">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">{currentLanguage === 'en' ? 'Coverage' : 'कवरेज'}</span>
                  <span className="text-xs font-bold text-emerald-900">National</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">{currentLanguage === 'en' ? 'Verification' : 'सत्यापन'}</span>
                  <span className="text-xs font-bold text-emerald-900 flex items-center">
                    <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                    Required
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#F4C430]/10 rounded-2xl p-8 border border-[#F4C430]/30">
              <h3 className="text-lg font-serif font-bold text-emerald-950 mb-4">
                {currentLanguage === 'en' ? 'Official Documentation' : 'आधिकारिक दस्तावेज़'}
              </h3>
              <p className="text-sm text-emerald-900 mb-6 font-light">
                {currentLanguage === 'en' ? 'Download guidelines and application forms for this service.' : 'इस सेवा के लिए दिशानिर्देश और आवेदन पत्र डाउनलोड करें।'}
              </p>
              <button 
                onClick={() => onNavigate('media-downloads')}
                className="w-full py-3 bg-[#004B23] hover:bg-[#003118] text-white font-bold rounded-lg transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-md"
              >
                <FileText className="w-4 h-4" />
                <span>{currentLanguage === 'en' ? 'Resource Hub' : 'संसाधन केंद्र'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
