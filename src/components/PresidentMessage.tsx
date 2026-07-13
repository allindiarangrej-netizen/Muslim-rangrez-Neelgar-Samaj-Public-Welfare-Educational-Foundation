import React from 'react';
import { Quote, Landmark, FileText, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { IMAGES } from '../data/mediaRegistry';

interface PresidentMessageProps {
  currentLanguage: Language;
  onNavigate: (tabId: string) => void;
}

export default function PresidentMessage({ currentLanguage, onNavigate }: PresidentMessageProps) {
  return (
    <section className="py-16 bg-white border-b border-gray-50" id="president_address_section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column Left: Visual Frame / Profile Photo */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end relative" id="president_image_frame">
            <div className="relative">
              {/* Islamic Pattern Border Wrapper */}
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-tr from-[#004B23] to-[#F4C430] opacity-10 blur-sm"></div>
              
              <div className="relative overflow-hidden rounded-xl border-4 border-white shadow-2xl w-72 sm:w-80 h-96">
                <img
                  src={IMAGES.leaders.president}
                  alt="Al-Haaj Gulam Rasool Rangrez"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-105 transition duration-500"
                />
                {/* Decorative Gold Leaf Trim Frame Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-center">
                  <p className="text-sm font-bold text-[#F4C430]">Al-Haaj Gulam Rasool Rangrez</p>
                  <p className="text-[10px] text-gray-300 uppercase tracking-widest">National President • अखिल भारतीय महासभा</p>
                </div>
              </div>

              {/* Decorative Floating Emblem */}
              <div className="absolute -top-4 -left-4 bg-[#F4C430] text-[#0B132B] p-2.5 rounded-full shadow-lg border-2 border-white">
                <Landmark className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Column Right: Message Text & Signature */}
          <div className="lg:col-span-7 space-y-6" id="president_message_body">
            <div className="space-y-2">
              <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest block">
                {currentLanguage === 'en' ? 'LEADERSHIP INSPIRATION' : 'सदर-ए-मोहतरम का पैग़ाम'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0B132B] tracking-tight">
                {currentLanguage === 'en' ? "President's Executive National Address" : 'क़ौमी सदर का अवाम के नाम ख़िताब'}
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-[#004B23] to-[#F4C430] rounded"></div>
            </div>

            {/* Custom styled blockquote for Islamic greeting and message */}
            <div className="relative">
              <Quote className="absolute -top-6 -left-6 h-12 w-12 text-[#004B23]/10" />
              
              <div className="space-y-4 text-gray-700 font-serif italic text-base leading-relaxed pl-4 border-l-4 border-[#F4C430]" id="quote_box">
                <p className="font-sans font-semibold text-emerald-800 text-lg">
                  Assalamu Alaikum Wa Rahmatullahi Wa Barakatuhu,
                </p>
                <p>
                  {currentLanguage === 'en'
                    ? "Our legacy is built on craftsmanship, colors, and deep community brotherhood. Today, as we transition towards a digitized community model, our priority is threefold: education for every child (particularly our daughters), professional growth through micro-finance, and secure family tracking through the national census. Let us join hands as one."
                    : "हमारी तारीख़ रंगसाजी, शिल्प कौशल (हुनरमंदी) और आपसी भाईचारे पर टिकी है। आज, जब हम डिजिटल बिरादरी मॉडल की तरफ़ बढ़ रहे हैं, हमारी प्राथमिकताएं तीन हैं: हर बच्चे (ख़ास तौर पर हमारी बेटियों) के लिए तालीम (शिक्षा), छोटे कारोबार (सूक्ष्म-वित्तपोषण) के ज़रिए आर्थिक तरक़्क़ी और मर्दुमशुमारी (जनगणना) के ज़रिए ख़ानदानी तस्दीक़ (सत्यापन)। आइए हम सब मिलकर एक महासभा के रूप में आगे बढ़ें।"}
                </p>
              </div>
            </div>

            {/* Digital Signature Showcase */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-6 border-t border-gray-100">
              <div>
                <p className="font-semibold text-gray-900">Al-Haaj Gulam Rasool Rangrez</p>
                <p className="text-xs text-gray-500">
                  {currentLanguage === 'en' ? 'President, Rangrez Community Bharat Trust' : 'राष्ट्रीय अध्यक्ष, रंगरेज महासभा भारत'}
                </p>
              </div>

              {/* Animated Signature Representation */}
              <div className="text-right">
                <div className="font-serif text-[#004B23] italic font-bold tracking-widest text-lg select-none">
                  ~ G.R. Rangrez ~
                </div>
                <span className="text-[10px] text-gray-400 block font-mono">DIGITALLY VERIFIED SIGNATURE</span>
              </div>
            </div>

            {/* Link button to Constitution manifesto */}
            <div className="pt-2">
              <button
                onClick={() => onNavigate('media')}
                className="inline-flex items-center space-x-2 text-xs font-bold text-[#004B23] hover:text-[#F4C430] uppercase tracking-wider transition"
              >
                <FileText className="h-4 w-4" />
                <span>{currentLanguage === 'en' ? 'Read Constitutional Manifesto / पूर्ण घोषणापत्र पढ़ें' : 'महासभा का मुकम्मल दस्तूर (नियमावली) पढ़ें'}</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
