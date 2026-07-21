import React, { useState } from 'react';
import { Landmark, Mail, Phone, MapPin, Send, HelpCircle, CheckCircle, ShieldCheck, X, Sparkles, ArrowUp, Shield, Lock, Building, Users, UserCheck, Facebook, Youtube, MessageCircle } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  currentLanguage: Language;
  onNavigate: (tabId: string) => void;
  onOpenArchitectureHub?: () => void;
}

export default function Footer({ currentLanguage, onNavigate, onOpenArchitectureHub }: FooterProps) {
  const [waMsg, setWaMsg] = useState('');
  const [waSent, setWaSent] = useState(false);
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWASubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waMsg) return;
    setWaSent(true);
    setTimeout(() => {
      setWaSent(false);
      setWaMsg('');
      window.open(`https://wa.me/917879940869?text=${encodeURIComponent(waMsg)}`, '_blank');
    }, 1500);
  };

  return (
    <footer className="bg-[#061A0E] text-white py-16 relative overflow-hidden" id="corporate_footer">
      
      {/* Subtle overlay decorative patterns */}
      <div className="absolute left-0 bottom-0 opacity-5 pointer-events-none transform -translate-x-20 translate-y-20">
        <div className="w-80 h-80 rounded-full border-[15px] border-[#F4C430] rotate-45"></div>
      </div>
      <div className="absolute right-0 top-0 opacity-5 pointer-events-none transform translate-x-20 -translate-y-20">
        <div className="w-80 h-80 rounded-full border-[10px] border-[#F4C430] rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12" id="footer_grid">
        
        {/* Column 1: NGO Branding & Registered Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#004B23] to-[#003118] border border-[#F4C430] flex items-center justify-center text-white font-serif text-sm font-bold text-[#F4C430]">
              R
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-[#F4C430] tracking-wide font-serif">RANGREZ COMMUNITY BHARAT</h4>
              <p className="text-[9px] uppercase tracking-wider text-gray-400 font-mono">Government Registered Society</p>
            </div>
          </div>

          <div className="bg-emerald-950/60 border border-emerald-900 p-3 rounded text-xs space-y-1">
            <p className="text-[10px] uppercase font-bold text-gray-400">Officially Managed By:</p>
            <p className="font-serif font-bold text-emerald-100 text-xs tracking-tight leading-relaxed">
              Muslim Rangrez Neelgar Samaj Public Welfare & Educational Foundation
            </p>
          </div>

          <p className="text-xs text-gray-400 leading-relaxed font-light">
            {currentLanguage === 'en'
              ? 'Our national platform brings state and district committees together under a unified digital ID, verified family census, and secure matrimonial directory.'
              : currentLanguage === 'ur'
              ? 'ہمارا قومی پلیٹ فارم صوبائی اور ضلعی کمیٹیوں کو ایک ڈیجیٹل آئی ڈی، تصدیق شدہ خاندانی مردم شماری اور محفوظ شادی بیاہ ڈائریکٹری کے تحت ایک ساتھ جوڑتا ہے۔'
              : 'हमारा क़ौमी प्लेटफ़ॉर्म सूबाई और ज़िला कमेटियों को एक डिजिटल आईडी, तस्दीक़-शुदा ख़ानदानी मर्दुमशुमारी (जनगणना) और महफ़ूज़ शादी-ब्याह निर्देशिका के तहत एक साथ जोड़ता है।'}
          </p>

          {/* Slogans block in Footer */}
          <div className="border-t border-emerald-800/40 pt-3 space-y-1.5">
            <p className="text-[11px] italic text-[#F4C430] font-serif font-medium leading-relaxed">
              "बुराइयों और बेबुनियाद रस्मों से नजात, तालीम व इल्म की ओर रुख"
            </p>
            <p className="text-[10px] font-mono text-emerald-400">
              "दीन व दुनिया दोनों में तरक्की हमारा मकसद है"
            </p>
          </div>

          <div className="text-[10px] text-gray-500 font-mono space-y-1 pt-2">
            <p>REGISTRATION NO: 02/42/01/28332/26</p>
            <p>COMPLIANCE: Section 80G & 12A Tax Exemption Active</p>
          </div>
        </div>

        {/* Column 2: Quick Links Directory */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-[#F4C430] uppercase tracking-widest border-b border-white/10 pb-2">
            {currentLanguage === 'en' ? 'PORTAL DIRECTORY' : currentLanguage === 'ur' ? 'پورٹل ڈائریکٹری' : 'ज़रूरी लिंक्स की फेहरिस्त'}
          </h4>
          <ul className="text-xs text-gray-300 space-y-2.5 font-medium">
            <li>
              <button onClick={() => onNavigate('home')} className="hover:text-[#F4C430] transition">
                • {currentLanguage === 'en' ? 'Home Portal' : currentLanguage === 'ur' ? 'ہوم پورٹل' : 'होम पोर्टल'}
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('about')} className="hover:text-[#F4C430] transition">
                • {currentLanguage === 'en' ? 'About Us' : currentLanguage === 'ur' ? 'ہمارے بارے میں' : 'हमारे बारे में'}
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('about-constitution')} className="hover:text-[#F4C430] transition text-amber-400 font-bold">
                • {currentLanguage === 'en' ? 'Trust Constitution & By-Laws' : currentLanguage === 'ur' ? 'ٹرسٹ کا آئین اور ضوابط' : 'महासभा संविधान एवं नियमावली'}
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('about-certificate')} className="hover:text-[#F4C430] transition text-emerald-400 font-bold">
                • {currentLanguage === 'en' ? 'Society Registration Proof' : currentLanguage === 'ur' ? 'سوسائٹی رجسٹریشن سرٹیفکیٹ' : 'सोसाइटी रजिस्ट्रेशन सर्टिफिकेट'}
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('about-transparency')} className="hover:text-[#F4C430] transition text-teal-300 font-bold">
                • {currentLanguage === 'en' ? 'Transparency & Governance' : currentLanguage === 'ur' ? 'شفافیت اور حکمرانی' : 'पारदर्शिता और शासन'}
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('about-legal-governance')} className="hover:text-[#F4C430] transition text-purple-300 font-bold">
                • {currentLanguage === 'en' ? 'Legal & Governance Features' : currentLanguage === 'ur' ? 'قانونی اور انتظامی خصوصیات' : 'कानून एवं शासन विशेषताएं'}
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('about-reports')} className="hover:text-[#F4C430] transition text-blue-300 font-bold">
                • {currentLanguage === 'en' ? 'Annual Audited Reports' : currentLanguage === 'ur' ? 'سالانہ آڈٹ رپورٹس' : 'वार्षिक ऑडिट रिपोर्ट'}
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('about-excellence')} className="hover:text-[#F4C430] transition text-[#FFD54A] font-extrabold flex items-center gap-1.5">
                <span>• 🏆</span>
                <span>{currentLanguage === 'en' ? 'Hall of Excellence (Achievers)' : currentLanguage === 'ur' ? 'ہال آف ایکسیلنس' : 'गौरवशाली विभूतियाँ'}</span>
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('membership-register')} className="hover:text-[#F4C430] transition">
                • {currentLanguage === 'en' ? 'Membership Registration' : currentLanguage === 'ur' ? 'رکنیت رجسٹریشن ہب' : 'रुक्नियत (मेम्बरशिप) रजिस्ट्रेशन हब'}
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('media')} className="hover:text-[#F4C430] transition">
                • {currentLanguage === 'en' ? 'Digital Heritage Gallery' : currentLanguage === 'ur' ? 'ڈیجیٹل میڈیا اور گیلری' : 'डिजिटल मीडिया और गैलरी'}
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('islamic-calendar')} className="hover:text-[#F4C430] transition text-[#F4C430] font-bold">
                • {currentLanguage === 'en' ? 'Islamic Hijri Calendar' : currentLanguage === 'ur' ? 'اسلامی ہجری کیلنڈر' : 'इस्लामिक हिजरी कैलेंडर'}
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('helplines')} className="hover:text-[#F4C430] transition text-[#F4C430] font-bold">
                • {currentLanguage === 'en' ? 'Emergency & Helplines Directory' : currentLanguage === 'ur' ? 'ہنگامی اور ہیلپ لائنز گائیڈ' : 'आपातकालीन और हेल्पलाइन गाइड'}
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('legal-awareness')} className="hover:text-[#F4C430] transition text-amber-400 font-bold">
                • {currentLanguage === 'en' ? 'Fundamental Rights & Legal Awareness' : currentLanguage === 'ur' ? 'بنیادی حقوق اور قانونی بیداری' : 'मौलिक अधिकार और कानूनी जागरूकता'}
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('donate')} className="hover:text-[#F4C430] transition">
                • {currentLanguage === 'en' ? 'Donate / Strategic Giving' : currentLanguage === 'ur' ? 'عطیہ اور فلاحی فنڈ' : 'तआवुन (दान) और फ़लाही (कल्याण) फंड'}
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('admin-login')} className="hover:text-[#F4C430] transition text-[#F4C430] font-bold">
                • {currentLanguage === 'en' ? 'Admin Login' : currentLanguage === 'ur' ? 'ایڈمن لاگ ان' : 'एडमिन लॉगिन'}
              </button>
            </li>
            <li>
              <button onClick={() => setActiveModal('privacy')} className="hover:text-[#F4C430] text-gray-400 transition">
                • {currentLanguage === 'en' ? 'Privacy Policy' : currentLanguage === 'ur' ? 'پرائیویسی پالیسی' : 'प्राइवेसी पॉलिसी (गोपनीयता नीति)'}
              </button>
            </li>
            <li>
              <button onClick={() => setActiveModal('terms')} className="hover:text-[#F4C430] text-gray-400 transition">
                • {currentLanguage === 'en' ? 'Terms & Conditions' : currentLanguage === 'ur' ? 'شرائط و ضوابط' : 'शर्तें और क़ायदे (Terms & Conditions)'}
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Global Office Contacts */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-[#F4C430] uppercase tracking-widest border-b border-white/10 pb-2">
            {currentLanguage === 'en' ? 'NATIONAL HEADQUARTERS' : currentLanguage === 'ur' ? 'قومی ہیڈ کوارٹرز' : 'क़ौमी दफ़्तर (मुख्य कार्यालय)'}
          </h4>
          <ul className="text-xs text-gray-400 space-y-3 leading-relaxed">
            <li className="flex items-start">
              <MapPin className="h-4 w-4 mr-2 text-[#F4C430] flex-shrink-0 mt-0.5" />
              <span>
                {currentLanguage === 'en'
                  ? 'Rangrez Bhawan, Near Gandhi Square, Bypass Road, Morena, Madhya Pradesh - 476224'
                  : currentLanguage === 'ur'
                  ? 'رنگریز بھون، گاندھی چوراہے کے پاس، بائی پاس روڈ، مورینا، مدھیہ پردیش - 476224'
                  : 'रंगरेज भवन, गांधी चौराहे के पास, बाईपास रोड, मुरैना, मध्य प्रदेश - 476224'}
              </span>
            </li>
            <li className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-[#F4C430]" />
              <span>+91 78799 40869</span>
            </li>
            <li className="flex items-start">
              <Mail className="h-4 w-4 mr-2 text-[#F4C430] flex-shrink-0 mt-0.5" />
              <div className="flex flex-col space-y-1">
                <span>General: <a href="mailto:info@rangrezcommunity.org" className="hover:underline text-white font-mono">info@rangrezcommunity.org</a></span>
                <span>Membership: <a href="mailto:membership@rangrezcommunity.org" className="hover:underline text-white font-mono">membership@rangrezcommunity.org</a></span>
                <span>Admin Trust: <a href="mailto:admin@rangrezcommunity.org" className="hover:underline text-white font-mono">admin@rangrezcommunity.org</a></span>
                <span>Support: <a href="mailto:support@rangrezcommunity.org" className="hover:underline text-white font-mono">support@rangrezcommunity.org</a></span>
              </div>
            </li>
          </ul>
        </div>

        {/* Column 4: Social Media Channel Integrations */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-[#F4C430] uppercase tracking-widest border-b border-white/10 pb-2">
            {currentLanguage === 'en' ? 'CONNECT WITH US' : currentLanguage === 'ur' ? 'ہم سے رابطہ کریں' : 'आधिकारिक सोशल मीडिया'}
          </h4>
          <p className="text-xs text-gray-400 leading-normal">
            {currentLanguage === 'en' ? 'Follow official YouTube, Facebook and Telegram circles for assemblies.' : currentLanguage === 'ur' ? 'سرکاری اعلانات کے لیے ہمارے یوٹیوب، فیس بک اور ٹیلی گرام چینلز سے جڑیں۔' : 'अधिकारिक घोषणाओं के लिए हमारे आधिकारिक यूट्यूब, फेसबुक और टेलीग्राम चैनलों से जुड़ें।'}
          </p>

          <div className="flex flex-wrap gap-4 pt-2" id="social_media_chips">
            <a href="https://www.facebook.com/share/g/1ChFrRk5yq/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition" title="Facebook">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://youtube.com/@allindiarangrej?si=G6afDaAB4t6p9xuA" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#FF0000] transition" title="YouTube">
              <Youtube className="h-6 w-6" />
            </a>
            <a href="https://t.me/+LWzXFGa5mHQzMmVl" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#0088cc] transition" title="Telegram">
              <Send className="h-6 w-6" />
            </a>
            <a href="https://whatsapp.com/channel/0029Vb8Mq6G6mYPF8BfWpL2N" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#25D366] transition" title="WhatsApp Channel">
              <MessageCircle className="h-6 w-6" />
            </a>
          </div>
        </div>

      </div>

      {/* Floating Interactive Buttons: WhatsApp & AI */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3" id="floating_widgets">
        {/* Back to Top Widget */}
        {showBackToTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 bg-[#0B132B] hover:bg-[#F4C430] hover:text-[#0B132B] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 border-2 border-white/20 cursor-pointer group animate-fadeIn"
            title={currentLanguage === 'en' ? 'Back to Top' : 'ऊपर जाएं'}
            aria-label="Scroll Back to Top"
            id="floating_back_to_top_button"
          >
            <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        )}

        {/* WhatsApp Widget */}
        <div className="relative" id="floating_whatsapp_widget">
          <a
            href="https://wa.me/917879940869" 
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce border-2 border-white cursor-pointer"
            title="Welfare WhatsApp Help"
          >
            <svg className="w-7 h-7 text-white fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.488 2.01 14.039.998 11.517.998c-5.442 0-9.87 4.372-9.874 9.802-.001 1.73.454 3.42 1.316 4.921L1.97 21.09l5.061-1.31.393.233z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* 🔒 OFFICIAL PORTAL GATEWAY / AUTHORIZED ACCESS ONLY */}
      {onOpenArchitectureHub && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-10 border-t border-white/10" id="official_access_segment">
          <div className="bg-gradient-to-b from-[#091C10] to-[#040E08] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>
            
            {/* Security Warning Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-6 mb-8 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-[#004B23] border border-[#D4AF37]/50 flex items-center justify-center text-[#FFD54A] shadow-inner shrink-0">
                  <Lock className="w-5 h-5 text-[#FFD54A]" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-[#F4C430] uppercase tracking-widest font-mono flex items-center gap-2">
                    <span>🔒 Official Access Portal</span>
                    <span className="text-[10px] bg-[#004B23] text-emerald-400 font-bold px-2 py-0.5 rounded font-mono uppercase">SECURE GATEWAY</span>
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">Authorized Administrative Control and Verification Terminals</p>
                </div>
              </div>
              <div className="flex-1 max-w-2xl">
                <div className="bg-red-950/40 border border-red-900/60 rounded-xl p-3 text-[11px] text-red-200/90 font-mono leading-relaxed">
                  <span className="text-red-400 font-black">AUTHORIZED ACCESS ONLY:</span> This is a secure national information system. Unauthorised attempts to access or modify records are strictly prohibited, monitored, and subject to legal prosecution.
                </div>
              </div>
            </div>

            {/* Role-Based Secure Gateways Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  id: 'national_gate',
                  title: 'National Control',
                  subtitle: 'Super Admin / National Admin',
                  desc: 'Access national-level administration, bylaws databases, and financial audit logs.',
                  icon: Shield,
                  color: 'from-[#004B23]/10 to-emerald-950/20 hover:border-[#D4AF37]/60 text-[#FFD54A]',
                },
                {
                  id: 'state_gate',
                  title: 'State Operations',
                  subtitle: 'State Committee Admin',
                  desc: 'Manage state-level directories, volunteer assemblies, and localized registers.',
                  icon: Building,
                  color: 'from-[#041E10]/10 to-[#02140A]/20 hover:border-emerald-500/60 text-emerald-400',
                },
                {
                  id: 'district_gate',
                  title: 'District Desk',
                  subtitle: 'District & Tehsil Committees',
                  desc: 'Oversee block-level verified censuses, matrimonial token requests, and local assistance desk.',
                  icon: Users,
                  color: 'from-[#0B132B]/10 to-gray-950/20 hover:border-blue-500/60 text-blue-400',
                },
                {
                  id: 'verification_gate',
                  title: 'Verification Gate',
                  subtitle: 'Verification & Membership Officers',
                  desc: 'Verify Digital ID statuses, validate physical documentation, and approve listings.',
                  icon: UserCheck,
                  color: 'from-amber-950/10 to-yellow-950/20 hover:border-amber-500/60 text-amber-400',
                },
              ].map((gate) => (
                <button
                  key={gate.id}
                  onClick={onOpenArchitectureHub}
                  className={`group relative text-left bg-gradient-to-b ${gate.color} border border-white/5 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer focus:outline-none`}
                  id={gate.id}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 bg-white/5 group-hover:bg-white/10 rounded-lg border border-white/10 transition-colors">
                      <gate.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono opacity-40 group-hover:opacity-80 transition-opacity">CONNECT →</span>
                  </div>
                  <h4 className="text-xs font-bold text-white tracking-wide">{gate.title}</h4>
                  <p className="text-[10px] font-mono text-[#D4AF37]/90 mt-0.5">{gate.subtitle}</p>
                  <p className="text-[11px] text-gray-400 leading-normal mt-2.5 font-light group-hover:text-gray-300 transition-colors">
                    {gate.desc}
                  </p>
                  {/* Bottom gold accent line on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer copyright section */}
      <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-gray-500 font-mono space-y-1" id="footer_copyright">
        <p>© 2026 RANGREZ COMMUNITY BHARAT. ALL RIGHTS RESERVED.</p>
        <p>OFFICIALLY MANAGED BY: MUSLIM RANGREZ NEELGAR SAMAJ PUBLIC WELFARE & EDUCATIONAL FOUNDATION</p>
        <p>{currentLanguage === 'en' ? 'Multilingual National Portal v2.5.0 • Powered by Secure Enterprise Cloud' : currentLanguage === 'ur' ? 'سہ لسانی پورٹل v2.5.0 • محفوظ انٹرپرائز کلاؤڈ کے ذریعے تقویت یافتہ' : 'बहुभाषी राष्ट्रीय पोर्टल v2.5.0 • सुरक्षित एंटरप्राइज क्लाउड द्वारा संचालित'}</p>
      </div>

      {/* Interactive Modal overlay for Privacy and Terms */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn" id="footer_compliance_modal">
          <div className="bg-white text-gray-800 rounded-xl max-w-2xl w-full p-6 sm:p-8 relative space-y-4 border border-emerald-800/20 max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setActiveModal(null)} 
              className="absolute right-4 top-4 p-1.5 hover:bg-gray-100 rounded-full transition text-gray-400 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>

            {activeModal === 'privacy' ? (
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-extrabold text-emerald-950 border-b border-gray-100 pb-3 flex items-center space-x-2">
                  <ShieldCheck className="h-6 w-6 text-[#F4C430]" />
                  <span>Privacy Policy & Consent Notice</span>
                </h3>
                <div className="text-xs sm:text-sm text-gray-600 leading-relaxed space-y-3 font-light">
                  <p className="font-bold text-gray-900">
                    Muslim Rangrez Neelgar Samaj Public Welfare & Educational Foundation ("Rangrez Community Bharat")
                  </p>
                  <p>
                    We prioritize the confidentiality of our community members. Our digitized census data, matrimonial profiles, and membership credentials are securely structured with role-based access controls.
                  </p>
                  <p><strong>1. Data Collection:</strong> We collect family relationships, educational achievements, blood groups, and regional occupancy coordinates solely to formulate welfare strategies and distribute educational scholarships.</p>
                  <p><strong>2. Encryption Protocols:</strong> Matrimonial profiles are tokenized, with photos programmatically watermarked and blurred to prevent scraping. Physical contact details of prospective brides and grooms are never displayed publicly without direct family token authorization.</p>
                  <p><strong>3. Third-party Sharing:</strong> No personal details are shared with commercial advertisers or corporate marketing networks. Aggregate statistics may be shared with government departments for welfare scheme benefits advocacy.</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-extrabold text-emerald-950 border-b border-gray-100 pb-3 flex items-center space-x-2">
                  <Landmark className="h-6 w-6 text-[#F4C430]" />
                  <span>Terms & Compliance Declarations</span>
                </h3>
                <div className="text-xs sm:text-sm text-gray-600 leading-relaxed space-y-3 font-light">
                  <p className="font-bold text-gray-900">
                    Muslim Rangrez Neelgar Samaj Public Welfare & Educational Foundation ("Rangrez Community Bharat")
                  </p>
                  <p>
                    By registering on this portal or supplying family census details, you explicitly consent to our standard validation rules.
                  </p>
                  <p><strong>1. Profile Accuracy:</strong> Registrants must supply authentic identity proofs. Providing fraudulent information or misrepresenting craft/lineage coordinates will result in immediate termination of the Digital ID card status.</p>
                  <p><strong>2. Code of Conduct:</strong> The matrimonial portal is reserved exclusively for matchmaking of verified members under respectable family values. Unsolicited commercial outreach is strictly prohibited.</p>
                  <p><strong>3. Financial Donations:</strong> All online contributions received by our public trust are directly routed to community welfare accounts. Eligible Indian citizens can generate direct Section 80G tax exemption certificates through the checkout console.</p>
                </div>
              </div>
            )}

            <div className="flex justify-end pt-2">
              <button 
                onClick={() => setActiveModal(null)} 
                className="px-5 py-2 bg-emerald-800 text-white hover:bg-emerald-900 font-bold text-xs uppercase rounded transition"
              >
                Accept and Close
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}
