import React, { useState } from 'react';
import { HelpCircle, PhoneCall, ShieldAlert, CheckCircle, Search, Info, Plus, Sparkles, MessageSquare, ListTodo, Clipboard } from 'lucide-react';
import { Language, SupportTicket } from '../types';
import { bloodDonors } from '../data';

interface HelpSupportProps {
  currentLanguage: Language;
}

export default function HelpSupport({ currentLanguage }: HelpSupportProps) {
  const [activeSupportSub, setActiveSupportSub] = useState<'ticket' | 'blood'>('ticket');
  const [bloodSearchGroup, setBloodSearchGroup] = useState('All');
  
  // Ticket-based support states
  const [ticketCategory, setTicketCategory] = useState<'Medical' | 'Emergency' | 'Financial' | 'Legal' | 'Women Support' | 'Senior Citizen' | 'Other'>('Medical');
  const [ticketDesc, setTicketDesc] = useState('');
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [activeTickets, setActiveTickets] = useState<SupportTicket[]>([
    { id: 'TKT-2026-9021', subject: 'Urgent daughter education admission fee aid', category: 'Financial', description: 'Scholarship fee shortfall for admission in Nursing degree.', status: 'Area Verified', dateCreated: '2026-06-25' },
    { id: 'TKT-2026-9010', subject: 'Kailaras Medical Camp Diagnostics Aid', category: 'Medical', description: 'Requesting diagnostic sponsorship for local elderly members.', status: 'Resolved', dateCreated: '2026-06-18' }
  ]);

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketSubject || !ticketDesc) return;

    const created: SupportTicket = {
      id: `TKT-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      subject: ticketSubject,
      category: ticketCategory,
      description: ticketDesc,
      status: 'Open',
      dateCreated: new Date().toISOString().split('T')[0]
    };

    setActiveTickets([created, ...activeTickets]);
    setTicketSubmitted(true);
    setTimeout(() => {
      setTicketSubmitted(false);
      setTicketSubject('');
      setTicketDesc('');
    }, 3000);
  };

  return (
    <div className="py-12 bg-gray-50/50" id="help_support_module">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-red-700 font-bold text-xs uppercase tracking-widest block flex items-center justify-center space-x-1">
            <ShieldAlert className="h-4 w-4 animate-bounce text-red-600" />
            <span>{currentLanguage === 'en' ? '24/7 CRISIS & RESPONSE DESK' : '24/7 आपातकालीन एवं सहायता प्रकोष्ठ'}</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#0B132B] mt-2">
            {currentLanguage === 'en' ? 'Help & Support Center' : 'महासभा सहायता एवं जनसुनवाई केंद्र'}
          </h2>
          <p className="text-gray-500 text-sm mt-3">
            {currentLanguage === 'en'
              ? 'Raise a support ticket, search our blood donor directory, or call our national legal/medical response helplines.'
              : 'सहायता टिकट दर्ज करें, रक्तदाताओं की सूची देखें या हमारी राष्ट्रीय कानूनी/चिकित्सा आपातकालीन हेल्पलाइन पर कॉल करें।'}
          </p>
        </div>

        {/* Support Sub Tabs */}
        <div className="flex justify-center border-b border-gray-200 pb-4 gap-4 mb-8" id="support_sub_tabs">
          <button
            onClick={() => setActiveSupportSub('ticket')}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded transition flex items-center space-x-1.5 ${
              activeSupportSub === 'ticket'
                ? 'bg-[#004B23] text-white'
                : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'
            }`}
          >
            <MessageSquare className="h-4 w-4 text-[#D4AF37]" />
            <span>{currentLanguage === 'en' ? 'Ticket Support Helpdesk' : 'जनसुनवाई सहायता डेस्क'}</span>
          </button>

          <button
            onClick={() => setActiveSupportSub('blood')}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded transition flex items-center space-x-1.5 ${
              activeSupportSub === 'blood'
                ? 'bg-red-700 text-white'
                : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Plus className="h-4 w-4 text-[#D4AF37]" />
            <span>{currentLanguage === 'en' ? 'Blood Donors Directory' : 'रक्तदाता डायरेक्टरी'}</span>
          </button>
        </div>

        {/* 1. TICKET-BASED HELPDESK PIPELINE */}
        {activeSupportSub === 'ticket' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn" id="support_tickets_flow">
            
            {/* Raise New Ticket Form */}
            <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
              <h3 className="text-xs font-extrabold uppercase text-gray-400 tracking-wider mb-2 flex items-center space-x-2">
                <Clipboard className="h-5 w-5 text-[#004B23]" />
                <span>{currentLanguage === 'en' ? 'Raise Support Request' : 'नई सहायता याचिका दर्ज करें'}</span>
              </h3>

              {ticketSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-lg text-center text-xs space-y-3 animate-bounce">
                  <CheckCircle className="h-8 w-8 text-[#004B23] mx-auto" />
                  <p className="font-bold">{currentLanguage === 'en' ? 'Ticket Registered Securely!' : 'याचिका सफलतापूर्वक दर्ज!'}</p>
                  <p>{currentLanguage === 'en' ? 'We have dispatched notifications to your regional area secretary.' : 'हमने आपके क्षेत्रीय सचिव को सूचना भेज दी है।'}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitTicket} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? 'Crisis Category' : 'सहायता का प्रकार'}
                    </label>
                    <select
                      value={ticketCategory}
                      onChange={(e) => setTicketCategory(e.target.value as any)}
                      className="w-full bg-gray-50 border border-gray-200 text-xs p-2.5 rounded focus:outline-none text-gray-800 font-medium"
                    >
                      <option value="Medical">{currentLanguage === 'en' ? 'Medical Emergency (चिकित्सा आपातकाल)' : 'चिकित्सा आपातकाल'}</option>
                      <option value="Financial">{currentLanguage === 'en' ? 'Financial Assistance (आर्थिक सहायता)' : 'आर्थिक सहायता'}</option>
                      <option value="Legal">{currentLanguage === 'en' ? 'Legal Support (कानूनी सहायता)' : 'कानूनी सहायता'}</option>
                      <option value="Women Support">{currentLanguage === 'en' ? 'Women Support Cell (महिला प्रकोष्ठ)' : 'महिला प्रकोष्ठ'}</option>
                      <option value="Senior Citizen">{currentLanguage === 'en' ? 'Senior Citizen Assistance' : 'वरिष्ठ नागरिक सहायता'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? 'Subject Summary' : 'याचिका का विषय'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Seeking urgent medical diagnostic fee support"
                      value={ticketSubject}
                      onChange={(e) => setTicketSubject(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 text-xs p-2.5 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? 'Detailed Description' : 'विस्तृत विवरण'}
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please list coordinates, family link ID and bank verification metrics..."
                      value={ticketDesc}
                      onChange={(e) => setTicketDesc(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 text-xs p-2.5 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#004B23] text-white font-bold text-xs uppercase tracking-wider rounded hover:bg-[#00381a] transition"
                  >
                    {currentLanguage === 'en' ? 'Submit and Dispatch Ticket' : 'याचिका सबमिट करें'}
                  </button>
                </form>
              )}
            </div>

            {/* Support Tickets Queue Tracker */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xs font-extrabold uppercase text-gray-400 tracking-wider mb-2 flex items-center space-x-1.5">
                <ListTodo className="h-4.5 w-4.5 text-[#004B23]" />
                <span>{currentLanguage === 'en' ? 'Your Active Support Tickets' : 'आपकी दर्ज सक्रिय याचिकाएं (सुनवाई)'}</span>
              </h3>

              <div className="space-y-4">
                {activeTickets.map((t) => (
                  <div key={t.id} className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm space-y-3">
                    <div className="flex justify-between items-center text-[10px] font-mono">
                      <span className="text-[#004B23] font-bold uppercase bg-emerald-50 px-2 py-0.5 rounded">
                        {t.category}
                      </span>
                      <span>ID: {t.id}</span>
                    </div>

                    <h4 className="text-xs font-bold text-[#0B132B]">{t.subject}</h4>
                    <p className="text-xs text-gray-500 font-light leading-relaxed">{t.description}</p>
                    
                    <div className="border-t border-gray-100 pt-3 flex justify-between items-center text-[10px]">
                      <span className="text-gray-400 font-mono">Created: {t.dateCreated}</span>
                      
                      {/* Interactive Status Pipeline */}
                      <span className={`px-2 py-0.5 rounded font-bold uppercase font-mono ${
                        t.status === 'Open'
                          ? 'bg-blue-100 text-blue-800'
                          : t.status === 'Area Verified'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        {t.status === 'Open' ? 'OPEN / समीक्षा जारी' : (t.status === 'Area Verified' ? 'AREA VERIFIED / क्षेत्रीय सत्यापित' : 'RESOLVED / निस्तारित')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* 2. BLOOD DONOR DIRECTORY */}
        {activeSupportSub === 'blood' && (
          <div className="space-y-6 animate-fadeIn" id="blood_directory_panel">
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wide">
                  {currentLanguage === 'en' ? 'Search verified Blood Donors' : 'सत्यापित रक्तदाताओं की खोज'}
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  {currentLanguage === 'en' ? 'Filter by blood group to locate emergency donors in your district.' : 'अपने जिले में आपातकालीन रक्तदाताओं का पता लगाने के लिए रक्त समूह द्वारा फिल्टर करें।'}
                </p>
              </div>

              {/* Blood Filter Selection */}
              <div>
                <select
                  value={bloodSearchGroup}
                  onChange={(e) => setBloodSearchGroup(e.target.value)}
                  className="bg-gray-50 border border-gray-200 text-xs p-3 rounded focus:outline-none text-gray-800 font-bold"
                >
                  <option value="All">{currentLanguage === 'en' ? 'All Blood Groups' : 'सभी रक्त समूह'}</option>
                  <option value="O+">O+</option>
                  <option value="A+">A+</option>
                  <option value="B+">B+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
            </div>

            {/* Donors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {bloodDonors
                .filter(d => bloodSearchGroup === 'All' || d.bloodGroup === bloodSearchGroup)
                .map((d) => (
                  <div key={d.id} className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] text-gray-400 font-mono">{d.id}</span>
                        <span className="text-xs font-extrabold text-red-700 bg-red-50 px-2 py-0.5 rounded font-mono">
                          {d.bloodGroup}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-gray-900">{currentLanguage === 'en' ? d.nameEn : d.nameHi}</h4>
                      <p className="text-[11px] text-gray-500">📍 {currentLanguage === 'en' ? `${d.districtEn} District` : `${d.districtHi} जिला`}</p>
                    </div>

                    <div className="border-t border-gray-100 pt-3 mt-4 flex items-center justify-between">
                      {d.isAvailable ? (
                        <a
                          href={`tel:${d.phone}`}
                          className="px-3 py-1.5 bg-red-700 hover:bg-red-800 text-white rounded text-[10px] font-bold uppercase flex items-center space-x-1"
                        >
                          <PhoneCall className="h-3.5 w-3.5 text-[#D4AF37]" />
                          <span>{currentLanguage === 'en' ? 'CALL NOW' : 'कॉल करें'}</span>
                        </a>
                      ) : (
                        <span className="text-[10px] text-gray-400 font-bold uppercase">NOT AVAILABLE</span>
                      )}

                      <span className="text-[10px] font-mono font-medium text-gray-400">
                        {d.isAvailable ? 'AVAILABLE' : 'BUSY'}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
