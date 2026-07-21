import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Facebook, Instagram, Youtube, Image as ImageIcon, Linkedin, Copy, Check, Code, MapPin, Mail, Phone, Search, Users, Award, ShieldCheck, Briefcase } from 'lucide-react';
import { Language } from '../types';
import { IMAGES } from '../data/mediaRegistry';
import { ProfileImage } from './common/ProfileImage';

interface LeaderProfile {
  id: string;
  category?: 'founder' | 'national' | 'advisory' | 'district';
  nameEn: string;
  nameHi: string;
  designationEn: string;
  designationHi: string;
  locationEn: string;
  locationHi: string;
  descriptionEn: string;
  descriptionHi: string;
  image: string;
  tenureEn?: string;
  tenureHi?: string;
  phone?: string;
  email?: string;
  socials: {
    whatsapp: string;
    facebook: string;
    instagram: string;
    youtube: string;
    gallery: string; // or linkedin
  };
}

interface NationalLeadershipProps {
  currentLanguage: Language;
}

export default function NationalLeadership({ currentLanguage }: NationalLeadershipProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'founder' | 'national' | 'advisory' | 'district'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Leadership Profiles List - fully customizable by administrator
  const leaders: LeaderProfile[] = [
    // 4. DISTRICT & REGIONAL PRESIDENTS
    {
      id: 'leader_morena_city',
      nameEn: 'Janab Sahijad Khan Sikroda',
      nameHi: 'जनाब सहिजाद खान सिकरौदा',
      designationEn: 'City President',
      designationHi: 'शहर अध्यक्ष',
      locationEn: 'Morena City, MP',
      locationHi: 'मुरैना शहर, मध्य प्रदेश',
      descriptionEn: 'Contractor. Serving the Rangrez Community through leadership, social unity and community welfare initiatives in Morena City.',
      descriptionHi: 'ठेकेदार। मुरैना शहर में नेतृत्व, सामाजिक एकता और सामुदायिक कल्याण पहलों के माध्यम से रंगरेज समुदाय की सेवा कर रहे हैं।',
      image: 'https://lh3.googleusercontent.com/d/1YEFWWuLF_KFofFk3SliEvCu3IVHpE0VH',
      socials: { whatsapp: '#', facebook: '#', instagram: '#', youtube: '#', gallery: '#gallery' },
    },
    {
      id: 'leader_joura',
      nameEn: 'Janab Kallu Sarpanch Sahab',
      nameHi: 'जनाब कल्लू सरपंच साहब',
      designationEn: 'Tehsil President',
      designationHi: 'तहसील अध्यक्ष',
      locationEn: 'Joura, Morena, MP',
      locationHi: 'जौरा, मुरैना, मध्य प्रदेश',
      descriptionEn: 'Sarpanch (Dhamgan Village). Dedicated to rural development, community welfare and social reforms.',
      descriptionHi: 'सरपंच (धामगन ग्राम)। ग्रामीण विकास, सामुदायिक कल्याण और सामाजिक सुधारों के लिए समर्पित।',
      image: 'https://lh3.googleusercontent.com/d/1glbBBHgyZS_A_e90TZfRIiaNf-GDOEjv',
      socials: { whatsapp: '#', facebook: '#', instagram: '#', youtube: '#', gallery: '#gallery' },
    },
    {
      id: 'leader_kailaras',
      nameEn: 'Janab Musheer Khan (Munshi Khan)',
      nameHi: 'जनाब मुशीर खान (मुंशी खान)',
      designationEn: 'Tehsil President',
      designationHi: 'तहसील अध्यक्ष',
      locationEn: 'Kailaras, Morena, MP',
      locationHi: 'केलारस, मुरैना, मध्य प्रदेश',
      descriptionEn: 'Businessman. Actively working for education, social harmony and community development.',
      descriptionHi: 'व्यवसायी। शिक्षा, सामाजिक सद्भाव और सामुदायिक विकास के लिए सक्रिय रूप से काम कर रहे हैं।',
      image: 'https://lh3.googleusercontent.com/d/1v311rEiY5iaQ6maUjRJ4k_X3H6wI03YB',
      socials: { whatsapp: '#', facebook: '#', instagram: '#', youtube: '#', gallery: '#gallery' },
    },
    {
      id: 'leader_sabalgarh_habib',
      nameEn: 'Janab Habib Khan (Bidi Wale)',
      nameHi: 'जनाब हबीब खान (बीड़ी वाले)',
      designationEn: 'City President',
      designationHi: 'शहर अध्यक्ष',
      locationEn: 'Sabalgarh, Morena, MP',
      locationHi: 'सबलगढ़, मुरैना, मध्य प्रदेश',
      descriptionEn: 'Businessman. Committed to strengthening community unity and public welfare.',
      descriptionHi: 'व्यवसायी। सामुदायिक एकता और जन कल्याण को मजबूत करने के लिए प्रतिबद्ध।',
      image: 'https://lh3.googleusercontent.com/d/1M0KxjaOeboPyTAo2EDSL73cpj6n4fo-D',
      socials: { whatsapp: '#', facebook: '#', instagram: '#', youtube: '#', gallery: '#gallery' },
    },
    {
      id: 'leader_sumawali',
      nameEn: 'Janab Abdur Rahman (Ballu Khan)',
      nameHi: 'जनाब अब्दुर रहमान (बल्लू खान)',
      designationEn: 'City President',
      designationHi: 'शहर अध्यक्ष',
      locationEn: 'Sumawali, Morena, MP',
      locationHi: 'सुमावली, मुरैना, मध्य प्रदेश',
      descriptionEn: 'Farmer. Dedicated to agriculture, education and social development.',
      descriptionHi: 'किसान। कृषि, शिक्षा और सामाजिक विकास के लिए समर्पित।',
      image: 'https://lh3.googleusercontent.com/d/1Ev6pTkxH-aT-97ikZE41FozmcGMDfUn9',
      socials: { whatsapp: '#', facebook: '#', instagram: '#', youtube: '#', gallery: '#gallery' },
    },
    {
      id: 'leader_banmore',
      nameEn: 'Janab Jaan Mohammad Khan',
      nameHi: 'जनाब जान मोहम्मद खान',
      designationEn: 'City President',
      designationHi: 'शहर अध्यक्ष',
      locationEn: 'Banmore, Morena, MP',
      locationHi: 'बनमोर, मुरैना, मध्य प्रदेश',
      descriptionEn: 'Businessman. Serving society through community leadership and welfare activities.',
      descriptionHi: 'व्यवसायी। सामुदायिक नेतृत्व और कल्याणकारी गतिविधियों के माध्यम से समाज की सेवा कर रहे हैं।',
      image: 'https://lh3.googleusercontent.com/d/1x3GaUNTUZ5S41xfWdycGGgvhgeQ_6AU3',
      socials: { whatsapp: '#', facebook: '#', instagram: '#', youtube: '#', gallery: '#gallery' },
    },
    {
      id: 'leader_gwalior_mufti',
      nameEn: "Mufti Sirajuddin Isha'ati Sahab",
      nameHi: 'मुफ्ती सिराजुद्दीन इशाती साहब',
      designationEn: 'City President',
      designationHi: 'शहर अध्यक्ष',
      locationEn: 'Greater Gwalior, MP',
      locationHi: 'ग्रेटर ग्वालियर, मध्य प्रदेश',
      descriptionEn: 'Mufti, Aalim, Hafiz, Qari, Islamic Judge. Devoted to religious and social leadership.',
      descriptionHi: 'मुफ्ती, आलिम, हाफिज, कारी, इस्लामिक जज। धार्मिक और सामाजिक नेतृत्व के लिए समर्पित।',
      image: 'https://lh3.googleusercontent.com/d/1Y1WZyKPrZDIIB1a2hvofprnIpmmkb3hn',
      socials: { whatsapp: '#', facebook: '#', instagram: '#', youtube: '#', gallery: '#gallery' },
    },
    {
      id: 'leader_ambah',
      nameEn: 'Janab Salim Khan',
      nameHi: 'जनाब सलीम खान',
      designationEn: 'City President',
      designationHi: 'शहर अध्यक्ष',
      locationEn: 'Ambah, Morena, MP',
      locationHi: 'अंबाह, मुरैना, मध्य प्रदेश',
      descriptionEn: 'Businessman. Actively contributing towards community development and social welfare.',
      descriptionHi: 'व्यवसायी। सामुदायिक विकास और सामाजिक कल्याण के प्रति सक्रिय रूप से योगदान दे रहे हैं।',
      image: 'https://lh3.googleusercontent.com/d/13Tm3mPLQvgvz1tm3J967ta_NFdriwO6i',
      socials: { whatsapp: '#', facebook: '#', instagram: '#', youtube: '#', gallery: '#gallery' },
    },
    {
      id: 'leader_vijaypur',
      nameEn: 'Janab Jalaluddin Khan',
      nameHi: 'जनाब जलालुद्दीन खान',
      designationEn: 'City President',
      designationHi: 'शहर अध्यक्ष',
      locationEn: 'Vijaypur, Sheopur, MP',
      locationHi: 'विजयपुर, श्योपुर, मध्य प्रदेश',
      descriptionEn: 'Businessman & Politician. Working for public welfare, education and social progress.',
      descriptionHi: 'व्यवसायी एवं राजनीतिज्ञ। जन कल्याण, शिक्षा और सामाजिक प्रगति के लिए काम कर रहे हैं।',
      image: 'https://lh3.googleusercontent.com/d/1vaLvhCxmnOFFmvIVo--bCJYwH-yIuTki',
      socials: { whatsapp: '#', facebook: '#', instagram: '#', youtube: '#', gallery: '#gallery' },
    },
    {
      id: 'leader_veerpur',
      nameEn: 'Janab Rafiq Khan',
      nameHi: 'जनाब रफीक खान',
      designationEn: 'City President',
      designationHi: 'शहर अध्यक्ष',
      locationEn: 'Veerpur, Sheopur, MP',
      locationHi: 'वीरपुर, श्योपुर, मध्य प्रदेश',
      descriptionEn: 'Gram Panchayat Secretary. Dedicated to transparent administration and community development.',
      descriptionHi: 'ग्राम पंचायत सचिव। पारदर्शी प्रशासन और सामुदायिक विकास के लिए समर्पित।',
      image: 'https://lh3.googleusercontent.com/d/129EdwpmtL_14WMQNv6CannjSHoGmAyI8',
      socials: { whatsapp: '#', facebook: '#', instagram: '#', youtube: '#', gallery: '#gallery' },
    },
    {
      id: 'leader_manpur',
      nameEn: 'Janab Mehboob Khan',
      nameHi: 'जनाब महबूब खान',
      designationEn: 'City President',
      designationHi: 'शहर अध्यक्ष',
      locationEn: 'Manpur, Morena, MP',
      locationHi: 'मानपुर, मुरैना, मध्य प्रदेश',
      descriptionEn: 'Farmer. Serving society through agriculture and community leadership.',
      descriptionHi: 'किसान। कृषि और सामुदायिक नेतृत्व के माध्यम से समाज की सेवा कर रहे हैं।',
      image: 'https://lh3.googleusercontent.com/d/1-juybNtCiKdx7iRT_2Uvlmmp50II2h8T',
      socials: { whatsapp: '#', facebook: '#', instagram: '#', youtube: '#', gallery: '#gallery' },
    },
    {
      id: 'leader_sheopur_atiq',
      nameEn: 'Advocate Atiq Ahmad Khan',
      nameHi: 'एडवोकेट अतीक अहमद खान',
      designationEn: 'City President',
      designationHi: 'शहर अध्यक्ष',
      locationEn: 'Sheopur, MP',
      locationHi: 'श्योपुर, मध्य प्रदेश',
      descriptionEn: 'Advocate. Providing legal awareness and community leadership.',
      descriptionHi: 'अधिवक्ता। कानूनी जागरूकता और सामुदायिक नेतृत्व प्रदान कर रहे हैं।',
      image: 'https://lh3.googleusercontent.com/d/1Q9zyWY2y6-fl5YsDWPp-kjcIA8_W_dWM',
      socials: { whatsapp: '#', facebook: '#', instagram: '#', youtube: '#', gallery: '#gallery' },
    },
    {
      id: 'leader_jabrol',
      nameEn: 'Janab Akhtar Ali Khan',
      nameHi: 'जनाब अख्तर अली खान',
      designationEn: 'Village President',
      designationHi: 'ग्राम अध्यक्ष',
      locationEn: 'Jabrol, Morena, MP',
      locationHi: 'जबरोल, मुरैना, मध्य प्रदेश',
      descriptionEn: 'Farmer. Working for village development and community welfare.',
      descriptionHi: 'किसान। ग्राम विकास और सामुदायिक कल्याण के लिए काम कर रहे हैं।',
      image: 'https://lh3.googleusercontent.com/d/19LBcE-anJN1OEpK5WjU0CdaPyAMbq5Q3',
      socials: { whatsapp: '#', facebook: '#', instagram: '#', youtube: '#', gallery: '#gallery' },
    },
    {
      id: 'leader_kattoli',
      nameEn: 'Janab Zakir Khan',
      nameHi: 'जनाब ज़ाकिर खान',
      designationEn: 'City President',
      designationHi: 'शहर अध्यक्ष',
      locationEn: 'Kattoli, Morena, MP',
      locationHi: 'कट्टोली, मुरैना, मध्य प्रदेश',
      descriptionEn: 'Secretary. Committed to community service and youth empowerment.',
      descriptionHi: 'सचिव। सामुदायिक सेवा और युवा सशक्तिकरण के प्रति प्रतिबद्ध।',
      image: 'https://lh3.googleusercontent.com/d/1Uj1F5JUUtZQXVnwntislwSmW_Zamw8b7',
      socials: { whatsapp: '#', facebook: '#', instagram: '#', youtube: '#', gallery: '#gallery' },
    },
    {
      id: 'leader_dholpur',
      nameEn: 'Raju Sir',
      nameHi: 'राजू सर',
      designationEn: 'City President',
      designationHi: 'शहर अध्यक्ष',
      locationEn: 'Dholpur, Rajasthan',
      locationHi: 'धौलपुर, राजस्थान',
      descriptionEn: 'Teacher. Promoting education, social awareness and community welfare.',
      descriptionHi: 'शिक्षक। शिक्षा, सामाजिक जागरूकता और सामुदायिक कल्याण को बढ़ावा दे रहे हैं।',
      image: 'https://lh3.googleusercontent.com/d/1BxqOo6SScsQXLnuTA714pufjOch90Fz2',
      socials: { whatsapp: '#', facebook: '#', instagram: '#', youtube: '#', gallery: '#gallery' },
    },
    {
      id: 'leader_sabalgarh_shabbir',
      nameEn: 'Janab Shabbir Baba',
      nameHi: 'जनाब शब्बीर बाबा',
      designationEn: 'City President',
      designationHi: 'शहर अध्यक्ष',
      locationEn: 'Sabalgarh, Morena, MP',
      locationHi: 'सबलगढ़, मुरैना, मध्य प्रदेश',
      descriptionEn: 'Senior Social Worker. A respected social worker actively serving the community for many years.',
      descriptionHi: 'वरिष्ठ समाज सेवक। एक सम्मानित समाज सेवक जो कई वर्षों से सक्रिय रूप से समुदाय की सेवा कर रहे हैं।',
      image: 'https://lh3.googleusercontent.com/d/1xOL23KdlwLuESJsGwJfdca_TSHb2RrN5',
      socials: { whatsapp: '#', facebook: '#', instagram: '#', youtube: '#', gallery: '#gallery' },
    },
    {
      id: 'leader_mandrayal',
      nameEn: 'Janab Alauddin Khan',
      nameHi: 'जनाब अलाउद्दीन खान',
      designationEn: 'City President',
      designationHi: 'शहर अध्यक्ष',
      locationEn: 'Mandrayal, Karauli, RJ',
      locationHi: 'मण्डरायल, करौली, राजस्थान',
      descriptionEn: 'Farmer. Working for rural welfare, agriculture and social unity.',
      descriptionHi: 'किसान। ग्रामीण कल्याण, कृषि और सामाजिक एकता के लिए काम कर रहे हैं।',
      image: 'https://lh3.googleusercontent.com/d/1_Zg2LuE5Rxvgnx-oDVk7Py-uBlI-L_8G',
      socials: { whatsapp: '#', facebook: '#', instagram: '#', youtube: '#', gallery: '#gallery' },
    }
  ];

  const filteredLeaders = leaders.filter(leader => {
    const leaderCat = leader.category || 'district';
    const matchesCategory = activeCategory === 'all' || leaderCat === activeCategory;
    const matchesSearch = !searchQuery.trim() || 
      leader.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      leader.nameHi.includes(searchQuery) ||
      leader.designationEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      leader.designationHi.includes(searchQuery) ||
      leader.locationEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      leader.locationHi.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24 bg-[#FCFAF5] border-t border-[#f1ece1]" id="national_leadership_section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full mb-1">
            <span className="text-[10px] sm:text-xs font-mono font-bold text-[#004B23] tracking-widest uppercase">
              {currentLanguage === 'en' ? 'TRUSTED COUNCILS' : 'विश्वस्त राष्ट्रीय परिषद'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#004B23] tracking-tight">
            {currentLanguage === 'en' ? 'National Community Leadership' : 'राष्ट्रीय सामुदायिक नेतृत्व'}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#F4C430] to-transparent mx-auto rounded"></div>
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            {currentLanguage === 'en' 
              ? 'Serving the community with dedication, transparency and vision.' 
              : 'समर्पण, पारदर्शिता और दूरदर्शिता के साथ समाज की सेवा में निरंतर तत्पर।'}
          </p>
        </div>

        {/* Leadership Search & Category Filter Bar */}
        <div className="mb-12 space-y-6 max-w-5xl mx-auto">
          {/* Keyword Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentLanguage === 'en' ? 'Search leaders by name, district, committee or role...' : 'नाम, जिला, पद या समिति के आधार पर नेता खोजें...'}
              className="w-full pl-12 pr-16 py-3 bg-white border-2 border-gray-200 rounded-full text-sm font-medium focus:outline-none focus:border-[#004B23] focus:ring-4 focus:ring-[#004B23]/10 shadow-sm transition-all text-gray-900"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-3.5 text-xs text-gray-400 hover:text-gray-700 font-bold bg-gray-100 px-2.5 py-1 rounded-full transition"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {[
              { id: 'all', labelEn: '🌐 All Leadership', labelHi: '🌐 सभी पदाधिकारी', count: leaders.length },
              { id: 'founder', labelEn: '🌟 Founders & Patrons', labelHi: '🌟 संस्थापक एवं संरक्षक', count: leaders.filter(l => l.category === 'founder').length },
              { id: 'national', labelEn: '👑 National Executive Council', labelHi: '👑 राष्ट्रीय कार्यकारिणी', count: leaders.filter(l => l.category === 'national').length },
              { id: 'advisory', labelEn: '⚖️ Advisory & Legal Board', labelHi: '⚖️ सलाहकार एवं कानूनी बोर्ड', count: leaders.filter(l => l.category === 'advisory').length },
              { id: 'district', labelEn: '📍 District Presidents', labelHi: '📍 जिलाध्यक्ष', count: leaders.filter(l => !l.category || l.category === 'district').length },
            ].filter((cat) => cat.count > 0)
             .map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 shadow-sm flex items-center space-x-2 ${
                  activeCategory === cat.id
                    ? 'bg-[#004B23] text-white shadow-md scale-105 border-2 border-[#F4C430]'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-[#004B23]/40'
                }`}
              >
                <span>{currentLanguage === 'en' ? cat.labelEn : cat.labelHi}</span>
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                  activeCategory === cat.id ? 'bg-[#F4C430] text-[#004B23]' : 'bg-gray-100 text-gray-600'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 4 Cards Grid - Desktop (4), Laptop (3), Tablet (2), Mobile (1) */}
        {filteredLeaders.length === 0 ? (
          <div className="text-center py-16 bg-white border border-gray-200 rounded-2xl max-w-xl mx-auto shadow-sm">
            <Users className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-800">
              {currentLanguage === 'en' ? 'No leadership profiles found matching your search' : 'खोज के अनुसार कोई पदाधिकारी नहीं मिला'}
            </h3>
            <p className="text-xs text-gray-500 mt-1 mb-4">
              {currentLanguage === 'en' ? 'Try adjusting your search terms or clearing category filters.' : 'कृपया खोज शब्द बदलें या श्रेणी फ़िल्टर रीसेट करें।'}
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="px-4 py-2 bg-[#004B23] text-white text-xs font-bold rounded-lg hover:bg-emerald-900 transition shadow"
            >
              {currentLanguage === 'en' ? 'Reset All Filters' : 'फ़िल्टर रीसेट करें'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" id="leadership_cards_grid">
            {filteredLeaders.map((leader, index) => (
              <LeaderCard key={leader.id} leader={leader} currentLanguage={currentLanguage} index={index} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

interface LeaderCardProps {
  key?: string;
  leader: LeaderProfile;
  currentLanguage: Language;
  index: number;
}

// Sub-component to manage cursor hover image parallax effect
function LeaderCard({ leader, currentLanguage, index }: LeaderCardProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    // Normalize coordinates to range [-1, 1]
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);
    // Limit to max 10px offset as per specifications
    setCoords({ x: x * 10, y: y * 10 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -50px 0px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative bg-white border border-[#f1ece1] rounded-2xl p-6 text-center transition-all duration-400 ease-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#004B23]/10 hover:border-[#F4C430]"
      id={`leader_card_${leader.id}`}
    >
      {/* Top golden border flare */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-[#F4C430] transition-all duration-500 rounded-t-2xl"></div>

      {/* Image Parallax Container */}
      <div 
        className="relative w-48 h-48 mx-auto mb-6 cursor-crosshair group"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <ProfileImage
          src={leader.image}
          alt={currentLanguage === 'en' ? leader.nameEn : leader.nameHi}
          size="custom"
          containerClassName="w-full h-full border-4 group-hover:border-[#F4C430] group-hover:shadow-2xl transition-all duration-500"
          className="transition-transform duration-500 ease-out"
          style={{
            transform: isHovered 
              ? `scale(1.1) translate(${coords.x}px, ${coords.y}px)` 
              : 'scale(1) translate(0px, 0px)',
          }}
        />
      </div>

      {/* 5 Circular Social Icons */}
      <div className="flex items-center justify-center gap-2.5 mb-6 z-10">
        {[
          { icon: <MessageSquare className="h-3.5 w-3.5" />, url: leader.socials.whatsapp, label: 'WhatsApp', color: 'hover:bg-green-500 hover:text-white' },
          { icon: <Facebook className="h-3.5 w-3.5" />, url: leader.socials.facebook, label: 'Facebook', color: 'hover:bg-blue-600 hover:text-white' },
          { icon: <Instagram className="h-3.5 w-3.5" />, url: leader.socials.instagram, label: 'Instagram', color: 'hover:bg-pink-600 hover:text-white' },
          { icon: <Youtube className="h-3.5 w-3.5" />, url: leader.socials.youtube, label: 'YouTube', color: 'hover:bg-red-600 hover:text-white' },
          { icon: <ImageIcon className="h-3.5 w-3.5" />, url: leader.socials.gallery, label: 'Gallery', color: 'hover:bg-[#F4C430] hover:text-emerald-950' }
        ].map((soc, sIdx) => {
          return (
            <a
              key={sIdx}
              href={soc.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${leader.nameEn} ${soc.label}`}
              className={`w-7 h-7 rounded-full bg-gray-100 text-emerald-900 flex items-center justify-center transition-all duration-300 ${soc.color} shadow-sm`}
            >
              {soc.icon}
            </a>
          );
        })}
      </div>

      {/* Leader Details */}
      <div className="space-y-3">
        <div className="space-y-1">
          <h3 className="text-lg font-serif font-bold text-gray-950 group-hover:text-[#004B23] transition-colors duration-300">
            {currentLanguage === 'en' ? leader.nameEn : leader.nameHi}
          </h3>
          <p className="text-xs font-bold text-[#CC9900] group-hover:text-[#B38600] uppercase tracking-widest font-mono transition-colors duration-300">
            {currentLanguage === 'en' ? leader.designationEn : leader.designationHi}
          </p>
        </div>

        {/* Premium Region Badge */}
        <div className="mt-4 flex justify-center">
          <div className="relative group/badge cursor-pointer">
            <div className="absolute -top-4 left-0 right-0 text-[8px] font-bold text-gray-400 uppercase tracking-widest text-center opacity-70 group-hover/badge:opacity-100 transition-opacity">
              {currentLanguage === 'en' ? 'Region' : 'क्षेत्र'}
            </div>
            <div className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm border-2 border-[#004B23]/20 shadow-sm rounded-full px-5 py-2 transition-all duration-300 group-hover/badge:bg-[#004B23] group-hover/badge:border-[#F4C430] group-hover/badge:shadow-lg">
              <MapPin className="h-4 w-4 text-[#004B23] transition-colors duration-300 group-hover/badge:text-[#F4C430]" />
              <span className="text-sm font-bold uppercase tracking-wider text-[#004B23] transition-colors duration-300 group-hover/badge:text-white">
                {currentLanguage === 'en' ? leader.locationEn : leader.locationHi}
              </span>
            </div>
          </div>
        </div>

        {leader.tenureEn && (
          <div className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded inline-block border border-emerald-200 shadow-2xs">
            {currentLanguage === 'en' ? `Tenure: ${leader.tenureEn}` : `कार्यकाल: ${leader.tenureHi}`}
          </div>
        )}

        <p className="text-xs text-gray-500 leading-relaxed max-w-[240px] mx-auto font-light">
          {currentLanguage === 'en' ? leader.descriptionEn : leader.descriptionHi}
        </p>
      </div>

      {/* Aesthetic card foot indicator */}
      <div className="mt-5 pt-4 border-t border-gray-50 flex items-center justify-center space-x-4 text-gray-400">
        {leader.email ? (
          <a href={`mailto:${leader.email}`} title={leader.email} className="flex items-center gap-1 text-xs hover:text-[#004B23] transition font-mono">
            <Mail className="h-3.5 w-3.5 text-[#004B23]" />
            <span className="text-[10px] truncate max-w-[120px]">{leader.email}</span>
          </a>
        ) : (
          <Mail className="h-3.5 w-3.5 cursor-pointer hover:text-[#004B23] transition" />
        )}
        {leader.phone ? (
          <a href={`tel:${leader.phone}`} title={leader.phone} className="flex items-center gap-1 text-xs hover:text-[#004B23] transition font-mono">
            <Phone className="h-3.5 w-3.5 text-[#004B23]" />
            <span className="text-[10px]">{leader.phone}</span>
          </a>
        ) : (
          <Phone className="h-3.5 w-3.5 cursor-pointer hover:text-[#004B23] transition" />
        )}
      </div>

    </motion.div>
  );
}
