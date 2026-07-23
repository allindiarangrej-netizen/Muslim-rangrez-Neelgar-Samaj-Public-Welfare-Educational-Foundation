const fs = require('fs');
let lines = fs.readFileSync('src/App.tsx', 'utf8').split('\n');
const replacement = `            {/* A. HOME PAGE RENDER */}
            {activeTab === 'home' && (
              <HomeView currentLanguage={currentLanguage} onNavigate={setActiveTab} />
            )}

            {/* B. ABOUT US SUB-PAGES & TAB CONTENT */}
            {activeTab.startsWith('about') && (
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-10 space-y-8 animate-fadeIn">
                {/* About Header */}
                <div className="text-center space-y-2">
                  <span className="text-[#004B23] font-bold text-xs uppercase tracking-widest">
                    {currentLanguage === 'en' ? 'KNOW OUR HERITAGE & RULES' : 'हमारी महासभा का परिचय एवं संविधान'}
                  </span>
                  <h2 className="text-3xl font-serif font-extrabold text-[#0B132B]">
                    {currentLanguage === 'en' ? 'Rangrez Community Trust Constitution & History' : 'महासभा संविधान, नियमावली एवं इतिहास'}
                  </h2>
                  <div className="h-1 w-16 bg-[#F4C430] mx-auto rounded"></div>
                </div>

                {/* About Sub-Navigation Pills */}
                <div className="flex flex-wrap items-center justify-center gap-2 py-2 border-b border-gray-200/60 pb-6">
                  <button
                    onClick={() => setActiveTab('about-constitution')}
                    className={\`px-4 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 shadow-sm \${
                      activeTab === 'about' || activeTab === 'about-constitution'
                        ? 'bg-[#004B23] text-[#F4C430] scale-105 ring-2 ring-emerald-500/30'
                        : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200'
                    }\`}
                  >
                    <span>📜</span>
                    <span>{currentLanguage === 'en' ? 'Trust Constitution & By-Laws' : currentLanguage === 'ur' ? 'ٹرسٹ کا آئین' : 'महासभा संविधान एवं नियमावली'}</span>
                    <span className="bg-[#F4C430] text-[#0B132B] text-[9px] px-1.5 py-0.5 rounded-full uppercase font-black ml-1">NEW</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('about-history')}
                    className={\`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 \${
                      activeTab === 'about-history'
                        ? 'bg-[#004B23] text-white shadow-sm'
                        : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200'
                    }\`}
                  >
                    <span>🏛️</span>
                    <span>{currentLanguage === 'en' ? 'Community History' : currentLanguage === 'ur' ? 'برادری کی تاریخ' : 'बिरादरी का इतिहास'}</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('about-vision')}
                    className={\`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 \${
                      activeTab === 'about-vision'
                        ? 'bg-[#004B23] text-white shadow-sm'
                        : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200'
                    }\`}
                  >
                    <span>🎯</span>
                    <span>{currentLanguage === 'en' ? 'Mission & Vision' : currentLanguage === 'ur' ? 'مشن اور مقصد' : 'मक़सद और नज़रिया'}</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('about-leadership')}
                    className={\`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 \${
                      activeTab === 'about-leadership'
                        ? 'bg-[#004B23] text-white shadow-sm'
                        : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200'
                    }\`}
                  >
                    <span>👥</span>
                    <span>{currentLanguage === 'en' ? 'Leadership' : currentLanguage === 'ur' ? 'قائدین' : 'बानी और क़ियादत'}</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('about-certificate')}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200 transition flex items-center gap-1.5"
                  >
                    <span>📑</span>
                    <span>{currentLanguage === 'en' ? 'Registration Certificate' : currentLanguage === 'ur' ? 'سوسائٹی رجسٹریشن' : 'सोसाइटी रजिस्ट्रेशन'}</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('about-faq')}
                    className={\`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 \${
                      activeTab === 'about-faq'
                        ? 'bg-[#004B23] text-white shadow-sm'
                        : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200'
                    }\`}
                  >
                    <span>❓</span>
                    <span>{currentLanguage === 'en' ? 'FAQ' : currentLanguage === 'ur' ? 'عام سوالات' : 'सामान्य प्रश्न (FAQ)'}</span>
                  </button>
                </div>`.split('\n');

lines.splice(261, 92, ...replacement);
fs.writeFileSync('src/App.tsx', lines.join('\n'), 'utf8');
console.log('Successfully fixed App.tsx syntax!');
