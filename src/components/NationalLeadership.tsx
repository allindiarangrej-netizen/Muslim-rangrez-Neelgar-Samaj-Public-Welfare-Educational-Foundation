import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Facebook, Instagram, Youtube, Image as ImageIcon, Linkedin, Copy, Check, Code, MapPin, Mail, Phone } from 'lucide-react';
import { Language } from '../types';

interface LeaderProfile {
  id: string;
  nameEn: string;
  nameHi: string;
  designationEn: string;
  designationHi: string;
  locationEn: string;
  locationHi: string;
  descriptionEn: string;
  descriptionHi: string;
  image: string;
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
  const [showCodeHub, setShowCodeHub] = useState(false);
  const [copied, setCopied] = useState(false);

  // Leadership Profiles List - fully customizable by administrator
  const leaders: LeaderProfile[] = [
    {
      id: 'leader_1',
      nameEn: 'Al-Haaj Gulam Rasool Rangrez',
      nameHi: 'अल-हाज गुलाम रसूल रंगरेज',
      designationEn: 'National President',
      designationHi: 'राष्ट्रीय अध्यक्ष',
      locationEn: 'Morena, Madhya Pradesh',
      locationHi: 'मुरैना, मध्य प्रदेश',
      descriptionEn: 'Dedicated to education, social welfare, artisan empowerment and community development across India.',
      descriptionHi: 'संपूर्ण भारत में शिक्षा, समाज कल्याण, कारीगर सशक्तिकरण और सामुदायिक विकास के लिए समर्पित।',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300',
      socials: {
        whatsapp: 'https://wa.me/910000000000?text=Salam%20President%20Saheb',
        facebook: 'https://facebook.com/rangrezcommunity',
        instagram: 'https://instagram.com/rangrezcommunity',
        youtube: 'https://youtube.com/@rangrezcommunity',
        gallery: '#gallery',
      },
    },
    {
      id: 'leader_2',
      nameEn: 'Janab Shakeel Ahmed Rangrez',
      nameHi: 'जनाब शकील अहमद रंगरेज',
      designationEn: 'National Secretary General',
      designationHi: 'राष्ट्रीय महासचिव',
      locationEn: 'Kailaras, Madhya Pradesh',
      locationHi: 'कैलारस, मध्य प्रदेश',
      descriptionEn: 'Driving digital transformation, streamlining national registries, and managing executive state boards.',
      descriptionHi: 'डिजिटल परिवर्तन, राष्ट्रीय रजिस्ट्रियों को सुव्यवस्थित करने और राज्य बोर्डों का प्रबंधन करने में सक्रिय।',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300',
      socials: {
        whatsapp: 'https://wa.me/910000000001?text=Salam%20Secretary%20Saheb',
        facebook: 'https://facebook.com/rangrezcommunity',
        instagram: 'https://instagram.com/rangrezcommunity',
        youtube: 'https://youtube.com/@rangrezcommunity',
        gallery: '#gallery',
      },
    },
    {
      id: 'leader_3',
      nameEn: 'Mohammed Adil Rangrez',
      nameHi: 'मोहम्मद आदिल रंगरेज',
      designationEn: 'Director of Academic Affairs',
      designationHi: 'शैक्षणिक प्रकोष्ठ समन्वयक',
      locationEn: 'Bhopal, Madhya Pradesh',
      locationHi: 'भोपाल, मध्य प्रदेश',
      descriptionEn: 'Managing school sponsorships, scholarship distribution, and digital computer literacy hubs.',
      descriptionHi: 'स्कूल प्रायोजन, छात्रवृत्ति वितरण और डिजिटल कंप्यूटर साक्षरता केंद्रों का संचालन।',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300',
      socials: {
        whatsapp: 'https://wa.me/910000000002?text=Salam%20Adil%20Saheb',
        facebook: 'https://facebook.com/rangrezcommunity',
        instagram: 'https://instagram.com/rangrezcommunity',
        youtube: 'https://youtube.com/@rangrezcommunity',
        gallery: '#gallery',
      },
    },
    {
      id: 'leader_4',
      nameEn: 'Haji Mohammad Iqbal',
      nameHi: 'हाजी मोहम्मद इकबाल',
      designationEn: 'Welfare Funds Coordinator',
      designationHi: 'कोषाध्यक्ष एवं जन कल्याण समन्वयक',
      locationEn: 'Gwalior, Madhya Pradesh',
      locationHi: 'ग्वालियर, मध्य प्रदेश',
      descriptionEn: 'Overseeing transparent donation structures, 80G tax receipt systems, and interest-free artisan grants.',
      descriptionHi: 'पारदर्शी दान संरचना, 80G कर रसीद प्रणालियों और ब्याज मुक्त कारीगर ऋणों की निगरानी।',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300',
      socials: {
        whatsapp: 'https://wa.me/910000000003?text=Salam%20Iqbal%20Saheb',
        facebook: 'https://facebook.com/rangrezcommunity',
        instagram: 'https://instagram.com/rangrezcommunity',
        youtube: 'https://youtube.com/@rangrezcommunity',
        gallery: '#gallery',
      },
    },
  ];

  const copyElementorCode = () => {
    const code = `
<!-- ======================================================= -->
<!-- ELEMENTOR PRO CUSTOM CODE BLOCK (SECTION 2)             -->
<!-- Copy this directly into an HTML Widget inside Elementor -->
<!-- ======================================================= -->

<div class="rangrez-leadership-section">
  <div class="rangrez-section-header">
    <span class="rangrez-badge">TRUSTED COUNCILS</span>
    <h2 class="rangrez-section-title">National Community Leadership</h2>
    <p class="rangrez-section-subtitle">Serving the community with dedication, transparency and vision.</p>
  </div>

  <div class="rangrez-leadership-grid">
    ${leaders
      .map(
        (leader) => `
    <div class="rangrez-leader-card">
      <div class="rangrez-avatar-wrapper">
        <div class="rangrez-avatar-circle">
          <img src="${leader.image}" alt="${leader.nameEn}" class="rangrez-leader-img">
        </div>
        <div class="rangrez-social-panel">
          <a href="${leader.socials.whatsapp}" class="rangrez-social-icon icon-wa" target="_blank" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
          <a href="${leader.socials.facebook}" class="rangrez-social-icon icon-fb" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="${leader.socials.instagram}" class="rangrez-social-icon icon-ig" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="${leader.socials.youtube}" class="rangrez-social-icon icon-yt" target="_blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
          <a href="${leader.socials.gallery}" class="rangrez-social-icon icon-gl" target="_blank" aria-label="Gallery"><i class="fas fa-images"></i></a>
        </div>
      </div>
      <div class="rangrez-leader-info">
        <h3 class="rangrez-leader-name">${leader.nameEn}</h3>
        <p class="rangrez-leader-designation">${leader.designationEn}</p>
        <p class="rangrez-leader-location">
          <span class="location-pin">📍</span> ${leader.locationEn}
        </p>
        <p class="rangrez-leader-description">${leader.descriptionEn}</p>
      </div>
    </div>`
      )
      .join('')}
  </div>
</div>

<style>
/* Include FontAwesome for icons in your WordPress/Elementor settings */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.rangrez-leadership-section {
  width: 100%;
  padding: 80px 20px;
  background: #FDFBF7;
  color: #1a2e22;
  font-family: 'Inter', sans-serif;
  overflow: hidden;
}

.rangrez-section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 60px;
}

.rangrez-badge {
  display: inline-block;
  background: rgba(0, 75, 35, 0.08);
  border: 1px solid rgba(0, 75, 35, 0.2);
  color: #004B23;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 6px 16px;
  border-radius: 50px;
  margin-bottom: 15px;
}

.rangrez-section-title {
  font-size: 38px;
  font-family: 'Playfair Display', serif;
  font-weight: 800;
  color: #004B23;
  margin: 0 0 12px;
}

.rangrez-section-subtitle {
  font-size: 15px;
  color: #666;
  margin: 0;
  line-height: 1.6;
}

.rangrez-leadership-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

@media (max-width: 1199px) {
  .rangrez-leadership-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 991px) {
  .rangrez-leadership-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 575px) {
  .rangrez-leadership-grid {
    grid-template-columns: 1fr;
  }
}

.rangrez-leader-card {
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #f1ece1;
  padding: 35px 24px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
  position: relative;
}

.rangrez-leader-card:hover {
  transform: translateY(-12px);
  border-color: #D4AF37;
  box-shadow: 0 20px 40px rgba(0, 75, 35, 0.08);
}

.rangrez-avatar-wrapper {
  position: relative;
  width: 150px;
  height: 150px;
  margin: 0 auto 24px;
}

.rangrez-avatar-circle {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #ffffff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: all 0.4s ease;
  position: relative;
  z-index: 2;
}

.rangrez-leader-card:hover .rangrez-avatar-circle {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
  border-color: #D4AF37;
}

.rangrez-leader-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

/* Social sliding icons setup */
.rangrez-social-panel {
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  z-index: 3;
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s ease;
  background: rgba(0, 75, 35, 0.8);
}

.rangrez-avatar-wrapper:hover .rangrez-social-panel {
  opacity: 1;
  pointer-events: auto;
}

.rangrez-social-icon {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #ffffff;
  color: #004B23;
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s ease;
  transform: translateY(15px);
  opacity: 0;
}

.rangrez-avatar-wrapper:hover .rangrez-social-icon {
  transform: translateY(0);
  opacity: 1;
}

/* Staggered social item effects */
.rangrez-avatar-wrapper:hover .rangrez-social-icon:nth-child(1) { transition-delay: 0.05s; }
.rangrez-avatar-wrapper:hover .rangrez-social-icon:nth-child(2) { transition-delay: 0.1s; }
.rangrez-avatar-wrapper:hover .rangrez-social-icon:nth-child(3) { transition-delay: 0.15s; }
.rangrez-avatar-wrapper:hover .rangrez-social-icon:nth-child(4) { transition-delay: 0.2s; }
.rangrez-avatar-wrapper:hover .rangrez-social-icon:nth-child(5) { transition-delay: 0.25s; }

.rangrez-social-icon:hover {
  background: #D4AF37;
  color: #ffffff;
  transform: scale(1.15) translateY(-2px) !important;
}

.rangrez-leader-name {
  font-size: 18px;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  color: #1a2e22;
  margin: 0 0 4px;
  transition: color 0.3s ease;
}

.rangrez-leader-card:hover .rangrez-leader-name {
  color: #004B23;
}

.rangrez-leader-designation {
  font-size: 13px;
  font-weight: 700;
  color: #D4AF37;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0 8px;
  transition: color 0.3s ease;
}

.rangrez-leader-card:hover .rangrez-leader-designation {
  color: #C59B27;
}

.rangrez-leader-location {
  font-size: 11px;
  font-weight: 500;
  color: #888;
  margin: 0 0 15px;
  font-family: 'JetBrains Mono', monospace;
}

.rangrez-leader-description {
  font-size: 12px;
  line-height: 1.6;
  color: #666;
  margin: 0;
}
</style>

<script>
// Lightweight vanilla JS interactive effect for cursor tracking on images
document.addEventListener('DOMContentLoaded', function() {
  const avatars = document.querySelectorAll('.rangrez-avatar-circle');
  
  avatars.forEach(avatar => {
    const img = avatar.querySelector('.rangrez-leader-img');
    
    avatar.addEventListener('mousemove', function(e) {
      const rect = avatar.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      
      img.style.transform = "scale(1.12) translate(" + (x * 12) + "px, " + (y * 12) + "px)";
    });
    
    avatar.addEventListener('mouseleave', function() {
      img.style.transform = "scale(1) translate(0, 0)";
    });
  });
});
</script>
`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="py-24 bg-[#FCFAF5] border-t border-[#f1ece1]" id="national_leadership_section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full mb-1">
            <span className="text-[10px] sm:text-xs font-mono font-bold text-[#004B23] tracking-widest uppercase">
              {currentLanguage === 'en' ? 'TRUSTED COUNCILS' : 'विश्वस्त राष्ट्रीय परिषद'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#004B23] tracking-tight">
            {currentLanguage === 'en' ? 'National Community Leadership' : 'राष्ट्रीय सामुदायिक नेतृत्व'}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded"></div>
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            {currentLanguage === 'en' 
              ? 'Serving the community with dedication, transparency and vision.' 
              : 'समर्पण, पारदर्शिता और दूरदर्शिता के साथ समाज की सेवा में निरंतर तत्पर।'}
          </p>
        </div>

        {/* 4 Cards Grid - Desktop (4), Laptop (3), Tablet (2), Mobile (1) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" id="leadership_cards_grid">
          {leaders.map((leader, index) => (
            <LeaderCard key={leader.id} leader={leader} currentLanguage={currentLanguage} index={index} />
          ))}
        </div>

        {/* Admin Pro Integration Center block */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setShowCodeHub(!showCodeHub)}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 text-xs font-mono font-bold text-[#004B23] transition duration-300 shadow-sm"
            aria-label="Toggle Elementor Code Export"
          >
            <Code className="h-4 w-4" />
            <span>{currentLanguage === 'en' ? 'ELEMENTOR PRO CODE HUB' : 'एलिमेंटोर प्रो कोड हब'}</span>
          </button>

          {showCodeHub && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-6 max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl text-left space-y-4 shadow-xl"
              id="elementor_leadership_code_hub"
            >
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <div>
                  <h4 className="text-sm font-bold text-[#004B23] font-serif">
                    Section 2: Elementor Pro Leadership Profile Cards Widget
                  </h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    Includes beautiful cursor-bound avatar parallax movement, staggered social icon hover sliding, and emerald gold styling!
                  </p>
                </div>
                <button
                  onClick={copyElementorCode}
                  className="px-4 py-1.5 bg-[#004B23] text-white hover:bg-emerald-900 rounded text-xs font-mono font-bold flex items-center space-x-1.5 transition"
                >
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy HTML & CSS Code'}</span>
                </button>
              </div>

              <div className="bg-gray-50 p-4 rounded border border-gray-150 overflow-x-auto max-h-48 text-xs font-mono text-gray-700">
                <pre>{`<!-- Paste directly into an Elementor "HTML Code" block. 
You can edit the image URLs, Names, Designations, and description text inside the HTML blocks directly without rewriting any JS. -->`}</pre>
              </div>
            </motion.div>
          )}
        </div>

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
      className="group relative bg-white border border-[#f1ece1] rounded-2xl p-6 text-center transition-all duration-400 ease-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#004B23]/10 hover:border-[#D4AF37]"
      id={`leader_card_${leader.id}`}
    >
      {/* Top golden border flare */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-[#D4AF37] transition-all duration-500 rounded-t-2xl"></div>

      {/* Image Parallax Container */}
      <div 
        className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:border-[#D4AF37] group-hover:shadow-lg transition-all duration-300 flex items-center justify-center bg-gray-50 cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={leader.image}
          alt={currentLanguage === 'en' ? leader.nameEn : leader.nameHi}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-300 ease-out select-none"
          style={{
            transform: isHovered 
              ? `scale(1.05) translate(${coords.x}px, ${coords.y}px)` 
              : 'scale(1) translate(0px, 0px)',
            filter: isHovered ? 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.4))' : 'none',
          }}
        />

        {/* 5 Circular Social Icons overlay on Hover */}
        <div className="absolute inset-0 bg-[#004B23]/85 flex items-center justify-center gap-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          {[
            { icon: <MessageSquare className="h-3.5 w-3.5" />, url: leader.socials.whatsapp, label: 'WhatsApp', color: 'hover:bg-green-500 hover:text-white' },
            { icon: <Facebook className="h-3.5 w-3.5" />, url: leader.socials.facebook, label: 'Facebook', color: 'hover:bg-blue-600 hover:text-white' },
            { icon: <Instagram className="h-3.5 w-3.5" />, url: leader.socials.instagram, label: 'Instagram', color: 'hover:bg-pink-600 hover:text-white' },
            { icon: <Youtube className="h-3.5 w-3.5" />, url: leader.socials.youtube, label: 'YouTube', color: 'hover:bg-red-600 hover:text-white' },
            { icon: <ImageIcon className="h-3.5 w-3.5" />, url: leader.socials.gallery, label: 'Gallery', color: 'hover:bg-[#D4AF37] hover:text-emerald-950' }
          ].map((soc, sIdx) => {
            return (
              <a
                key={sIdx}
                href={soc.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`${leader.nameEn} ${soc.label}`}
                className={`w-7 h-7 rounded-full bg-white text-emerald-900 flex items-center justify-center transition-all duration-300 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 ${soc.color} shadow-sm`}
                style={{
                  transitionDelay: `${sIdx * 60}ms`,
                }}
              >
                {soc.icon}
              </a>
            );
          })}
        </div>
      </div>

      {/* Leader Details */}
      <div className="space-y-3">
        <div className="space-y-1">
          <h3 className="text-lg font-serif font-bold text-gray-950 group-hover:text-[#004B23] transition-colors duration-300">
            {currentLanguage === 'en' ? leader.nameEn : leader.nameHi}
          </h3>
          <p className="text-xs font-bold text-[#D4AF37] group-hover:text-[#C59B27] uppercase tracking-widest font-mono transition-colors duration-300">
            {currentLanguage === 'en' ? leader.designationEn : leader.designationHi}
          </p>
        </div>

        {/* Location badge */}
        <div className="inline-flex items-center space-x-1.5 text-[11px] font-mono font-medium text-gray-400 bg-gray-50 border border-gray-100 rounded px-2 py-0.5 mx-auto">
          <MapPin className="h-3 w-3 text-[#D4AF37]" />
          <span>{currentLanguage === 'en' ? leader.locationEn : leader.locationHi}</span>
        </div>

        <p className="text-xs text-gray-500 leading-relaxed max-w-[240px] mx-auto font-light">
          {currentLanguage === 'en' ? leader.descriptionEn : leader.descriptionHi}
        </p>
      </div>

      {/* Aesthetic card foot indicator */}
      <div className="mt-5 pt-4 border-t border-gray-50 flex items-center justify-center space-x-4 text-gray-300 group-hover:text-[#D4AF37] transition-colors duration-300">
        <Mail className="h-3.5 w-3.5 cursor-pointer hover:text-[#004B23]" />
        <Phone className="h-3.5 w-3.5 cursor-pointer hover:text-[#004B23]" />
      </div>

    </motion.div>
  );
}
