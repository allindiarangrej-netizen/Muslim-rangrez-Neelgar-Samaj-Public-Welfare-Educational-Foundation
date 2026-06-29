import React, { useState } from 'react';
import { Landmark, Mail, Phone, MapPin, Send, HelpCircle, CheckCircle } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  currentLanguage: Language;
}

export default function Footer({ currentLanguage }: FooterProps) {
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  const [waMsg, setWaMsg] = useState('');
  const [waSent, setWaSent] = useState(false);

  const handleWASubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waMsg) return;
    setWaSent(true);
    setTimeout(() => {
      setWaSent(false);
      setWaMsg('');
      setWhatsappOpen(false);
      // Simulate launching whatsapp endpoint
      window.open(`https://wa.me/917566012345?text=${encodeURIComponent(waMsg)}`, '_blank');
    }, 1500);
  };

  return (
    <footer className="bg-[#0B132B] text-white py-16 relative overflow-hidden" id="corporate_footer">
      {/* Subtle overlay decorative lines */}
      <div className="absolute left-0 bottom-0 opacity-5 pointer-events-none transform -translate-x-20 translate-y-20">
        <div className="w-80 h-80 rounded-full border-[15px] border-[#D4AF37] rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12" id="footer_grid">
        
        {/* Column 1: NGO Branding & Registered Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#004B23] to-[#003118] border border-[#D4AF37] flex items-center justify-center text-white font-serif text-sm font-bold text-[#D4AF37]">
              R
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-white tracking-wide font-serif">RANGREZ COMMUNITY BHARAT</h4>
              <p className="text-[9px] uppercase tracking-wider text-gray-400 font-mono">National Community NGO Portal</p>
            </div>
          </div>

          <p className="text-xs text-gray-400 leading-relaxed font-light">
            {currentLanguage === 'en'
              ? 'Our national platform brings state and district committees together under a unified digital ID, verified family census, and secure matrimonial directory.'
              : 'हमारा राष्ट्रीय मंच राज्य और जिला समितियों को एक एकीकृत डिजिटल आईडी, सत्यापित पारिवारिक जनगणना और सुरक्षित वैवाहिक निर्देशिका के तहत एक साथ लाता है।'}
          </p>

          <div className="text-[10px] text-gray-500 font-mono space-y-1">
            <p>REGISTRATION NO: 02/42/01/28332/26</p>
            <p>COMPLIANCE: Section 80G Tax Exemption Eligible</p>
          </div>
        </div>

        {/* Column 2: Regional Committees Shortcut */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest border-b border-white/10 pb-2">
            {currentLanguage === 'en' ? 'COMMITTEES DIRECTORY' : 'समिति हब शॉर्टकट'}
          </h4>
          <ul className="text-xs text-gray-400 space-y-2 font-mono">
            <li>• {currentLanguage === 'en' ? 'National Central Committee' : 'राष्ट्रीय मुख्य महासभा'}</li>
            <li>• {currentLanguage === 'en' ? 'Madhya Pradesh State Wing' : 'मध्य प्रदेश राज्य प्रकोष्ठ'}</li>
            <li>• {currentLanguage === 'en' ? 'Morena District Assembly' : 'मुरैना जिला समिति सभा'}</li>
            <li>• {currentLanguage === 'en' ? 'Kailaras & Joura Chapter' : 'कैलारस और जौरा क्षेत्रीय चैप्टर'}</li>
          </ul>
        </div>

        {/* Column 3: Global Office Contacts */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest border-b border-white/10 pb-2">
            {currentLanguage === 'en' ? 'NATIONAL HEADQUARTERS' : 'मुख्य महासभा कार्यालय'}
          </h4>
          <ul className="text-xs text-gray-400 space-y-3 leading-relaxed">
            <li className="flex items-start">
              <MapPin className="h-4 w-4 mr-2 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <span>
                {currentLanguage === 'en'
                  ? 'Rangrez Bhawan, Near Gandhi Square, Bypass Road, Morena, Madhya Pradesh - 476224'
                  : 'रंगरेज भवन, गांधी चौराहे के पास, बाईपास रोड, मुरैना, मध्य प्रदेश - 476224'}
              </span>
            </li>
            <li className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-[#D4AF37]" />
              <span>+91 75660 12345</span>
            </li>
            <li className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-[#D4AF37]" />
              <span>allindiarangrej@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Social Media Channel Integrations */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest border-b border-white/10 pb-2">
            {currentLanguage === 'en' ? 'CONNECT WITH US' : 'आधिकारिक सोशल मीडिया'}
          </h4>
          <p className="text-xs text-gray-400 leading-normal">
            {currentLanguage === 'en' ? 'Follow official YouTube, Facebook and Telegram circles for assemblies.' : 'अधिकारिक घोषणाओं के लिए हमारे आधिकारिक यूट्यूब, फेसबुक और टेलीग्राम चैनलों से जुड़ें।'}
          </p>

          <div className="flex flex-wrap gap-2 pt-2" id="social_media_chips">
            <a href="https://facebook.com" target="_blank" className="px-2.5 py-1.5 bg-white/5 hover:bg-white/10 text-xs font-mono rounded text-gray-300 hover:text-white transition">Facebook</a>
            <a href="https://youtube.com" target="_blank" className="px-2.5 py-1.5 bg-white/5 hover:bg-white/10 text-xs font-mono rounded text-gray-300 hover:text-[#D4AF37] transition">YouTube</a>
            <a href="https://telegram.org" target="_blank" className="px-2.5 py-1.5 bg-white/5 hover:bg-white/10 text-xs font-mono rounded text-gray-300 hover:text-white transition">Telegram</a>
            <a href="https://whatsapp.com" target="_blank" className="px-2.5 py-1.5 bg-white/5 hover:bg-white/10 text-xs font-mono rounded text-[#D4AF37] hover:text-white transition font-bold">WhatsApp Channel</a>
          </div>
        </div>

      </div>

      {/* Floating Interactive WhatsApp Drawer widget */}
      <div className="fixed bottom-6 right-6 z-40" id="floating_whatsapp_widget">
        {whatsappOpen ? (
          <div className="bg-white rounded-xl shadow-2xl border-2 border-emerald-500 max-w-xs w-72 text-gray-800 p-4 space-y-3 animate-slideIn">
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">
                {currentLanguage === 'en' ? 'Welfare Support Assistant' : 'महासभा सहायक डेस्क'}
              </span>
              <button onClick={() => setWhatsappOpen(false)} className="text-gray-400 font-extrabold text-xs">✕</button>
            </div>

            <p className="text-[10px] text-gray-500">
              {currentLanguage === 'en' ? 'Submit your message. The system redirects to our verified WhatsApp endpoint.' : 'अपना संदेश लिखें। बटन दबाते ही यह हमारे सत्यापित व्हाट्सएप नंबर पर रीडायरेक्ट हो जाएगा।'}
            </p>

            {waSent ? (
              <div className="text-center text-emerald-800 text-xs font-bold p-3 bg-emerald-50 rounded">
                <CheckCircle className="h-5 w-5 mx-auto mb-1 animate-pulse" />
                <span>Launching Chat...</span>
              </div>
            ) : (
              <form onSubmit={handleWASubmit} className="space-y-3">
                <textarea
                  required
                  rows={2}
                  value={waMsg}
                  onChange={(e) => setWaMsg(e.target.value)}
                  placeholder={currentLanguage === 'en' ? 'How can the central trust help you?' : 'महासभा आपकी किस प्रकार सहायता कर सकती है?'}
                  className="w-full bg-gray-50 border border-gray-200 text-xs p-2 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase rounded flex items-center justify-center space-x-1.5"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>{currentLanguage === 'en' ? 'Launch Direct Chat' : 'व्हाट्सएप चैट शुरू करें'}</span>
                </button>
              </form>
            )}
          </div>
        ) : (
          <button
            onClick={() => setWhatsappOpen(true)}
            className="w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce border-2 border-white cursor-pointer"
            title="Welfare WhatsApp Help"
          >
            {/* Custom procedural representation of WhatsApp icon */}
            <svg className="w-7 h-7 text-white fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.488 2.01 14.039.998 11.517.998c-5.442 0-9.87 4.372-9.874 9.802-.001 1.73.454 3.42 1.316 4.921L1.97 21.09l5.061-1.31.393.233z"/>
            </svg>
          </button>
        )}
      </div>

      {/* Footer copyright section */}
      <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-gray-500 font-mono space-y-1" id="footer_copyright">
        <p>© 2026 RANGREZ BHARAT TRUST. ALL RIGHTS RESERVED.</p>
        <p>{currentLanguage === 'en' ? 'Bilingual Modern Portal v2.4.0 • Designed for WordPress Elementor Integration' : 'द्विभाषी मॉडर्न पोर्टल v2.4.0 • वर्डप्रेस एलिमेंटर इंटीग्रेशन के लिए डिजाइन किया गया'}</p>
      </div>

    </footer>
  );
}
