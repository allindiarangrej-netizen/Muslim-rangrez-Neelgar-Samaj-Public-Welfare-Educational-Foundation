import React, { useState } from 'react';
import { UserPlus, LogIn, Layout, ShieldCheck, Download, Users, User, ArrowRight, CheckCircle } from 'lucide-react';
import { Language } from '../types';

interface MembershipSystemProps {
  currentLanguage: Language;
}

export default function MembershipSystem({ currentLanguage }: MembershipSystemProps) {
  const [activeSubTab, setActiveSubTab] = useState<'login' | 'register' | 'dashboard' | 'directory'>('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Default logged in to show the dashboard immediately
  const [registeredSuccess, setRegisteredSuccess] = useState(false);
  const [loginError, setLoginError] = useState('');
  
  // Simulated logged-in member data
  const [memberProfile, setMemberProfile] = useState({
    id: 'RCB-2026-MP-001244',
    name: 'Mohammed Shakeel Rangrez',
    fatherName: 'Al-Haaj Gulam Nabi',
    gender: 'M',
    dob: '1992-04-12',
    phone: '+91 98765 43210',
    whatsapp: '+91 98765 43210',
    email: 'shakeel.rangrez@gmail.com',
    district: 'Morena',
    area: 'Kailaras',
    education: 'Graduate (B.Tech Computer Science)',
    occupation: 'Software Developer & Artisan Mentor',
    bloodGroup: 'B+',
    status: 'Verified_Active',
    qrToken: 'SECURE_TOKEN_RCB_VERIFIED_SHA256_MP_001244_EXPIRE_2030'
  });

  // Simulated registration form state
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    gender: 'M',
    dob: '',
    phone: '',
    whatsapp: '',
    email: '',
    district: 'Morena',
    area: 'Kailaras',
    education: 'Graduate',
    occupation: '',
    bloodGroup: 'O+',
    photoUrl: ''
  });

  // Directory search filters
  const [dirSearch, setDirSearch] = useState('');
  const [dirBloodFilter, setDirBloodFilter] = useState('All');
  
  // Mock directory list
  const mockDirectory = [
    { id: 'RCB-2026-MP-001102', name: 'Al-Haaj Gulam Nabi Rangrez', district: 'Morena', area: 'Kailaras', occupation: 'Retired Govt Officer', bloodGroup: 'O+', status: 'Verified_Active' },
    { id: 'RCB-2026-MP-001150', name: 'Dr. Imtiaz Rangrez', district: 'Bhopal', area: 'Huzur', occupation: 'MD Cardiologist', bloodGroup: 'A+', status: 'Verified_Active' },
    { id: 'RCB-2026-RJ-002104', name: 'Faisal Ahmed Rangrez', district: 'Jaipur', area: 'Sanganer', occupation: 'Textile Designer', bloodGroup: 'B+', status: 'Verified_Active' },
    { id: 'RCB-2026-UP-003450', name: 'Zainab Bano Rangrez', district: 'Lucknow', area: 'Lucknow Center', occupation: 'School Teacher', bloodGroup: 'AB-', status: 'Verified_Active' }
  ];

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setRegisteredSuccess(true);
    // Simulate updating profile with registered values
    setMemberProfile({
      id: `RCB-2026-MP-00${Math.floor(1000 + Math.random() * 9000)}`,
      name: formData.name,
      fatherName: formData.fatherName,
      gender: formData.gender,
      dob: formData.dob || '1995-01-01',
      phone: formData.phone,
      whatsapp: formData.whatsapp || formData.phone,
      email: formData.email || 'member@rangrezcommunity.org',
      district: formData.district,
      area: formData.area,
      education: formData.education,
      occupation: formData.occupation || 'Artisan',
      bloodGroup: formData.bloodGroup,
      status: 'Verified_Active', // Pre-verified for prototype smoothness
      qrToken: `SECURE_TOKEN_RCB_VERIFIED_NEW_${Math.random().toString(36).substr(2, 9)}`
    });
    setTimeout(() => {
      setRegisteredSuccess(false);
      setIsLoggedIn(true);
      setActiveSubTab('dashboard');
    }, 2000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setActiveSubTab('dashboard');
  };

  return (
    <div className="py-12 bg-white" id="membership_system_module">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation bar for sub-modules */}
        <div className="flex flex-wrap border-b border-gray-200 mb-8 gap-2" id="membership_sub_tabs">
          <button
            onClick={() => setActiveSubTab('dashboard')}
            className={`px-4 py-3 text-xs font-bold uppercase tracking-wider flex items-center space-x-2 border-b-2 transition ${
              activeSubTab === 'dashboard'
                ? 'border-[#004B23] text-[#004B23]'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            <Layout className="h-4 w-4" />
            <span>{currentLanguage === 'en' ? 'My Dashboard' : 'मेरा डैशबोर्ड'}</span>
          </button>

          <button
            onClick={() => setActiveSubTab('register')}
            className={`px-4 py-3 text-xs font-bold uppercase tracking-wider flex items-center space-x-2 border-b-2 transition ${
              activeSubTab === 'register'
                ? 'border-[#004B23] text-[#004B23]'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            <UserPlus className="h-4 w-4" />
            <span>{currentLanguage === 'en' ? 'Register Account' : 'सदस्य पंजीकरण'}</span>
          </button>

          <button
            onClick={() => setActiveSubTab('directory')}
            className={`px-4 py-3 text-xs font-bold uppercase tracking-wider flex items-center space-x-2 border-b-2 transition ${
              activeSubTab === 'directory'
                ? 'border-[#004B23] text-[#004B23]'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            <Users className="h-4 w-4" />
            <span>{currentLanguage === 'en' ? 'Member Directory' : 'सदस्य निर्देशिका'}</span>
          </button>

          <button
            onClick={() => {
              if (isLoggedIn) {
                setIsLoggedIn(false);
                setActiveSubTab('login');
              } else {
                setActiveSubTab('login');
              }
            }}
            className={`px-4 py-3 text-xs font-bold uppercase tracking-wider flex items-center space-x-2 border-b-2 transition ml-auto ${
              activeSubTab === 'login'
                ? 'border-[#004B23] text-[#004B23]'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            <LogIn className="h-4 w-4" />
            <span>
              {isLoggedIn
                ? (currentLanguage === 'en' ? 'Logout' : 'लॉगआउट')
                : (currentLanguage === 'en' ? 'Login' : 'लॉगिन')}
            </span>
          </button>
        </div>

        {/* 1. MEMBER LOGIN */}
        {activeSubTab === 'login' && !isLoggedIn && (
          <div className="max-w-md mx-auto bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm animate-fadeIn" id="login_sub_module">
            <div className="text-center space-y-2 mb-6">
              <div className="inline-flex p-3 bg-emerald-100 text-[#004B23] rounded-full">
                <LogIn className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif font-extrabold text-[#0B132B]">
                {currentLanguage === 'en' ? 'Secure Member Login' : 'महासभा सदस्य लॉगिन'}
              </h3>
              <p className="text-xs text-gray-500">
                {currentLanguage === 'en' ? 'Enter your registered email or phone to access portal' : 'अपने पंजीकृत ईमेल या फोन नंबर से लॉगिन करें'}
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                  {currentLanguage === 'en' ? 'Email or Mobile Number' : 'ईमेल या मोबाइल नंबर'}
                </label>
                <input
                  type="text"
                  required
                  placeholder="shakeel.rangrez@gmail.com"
                  className="w-full bg-white border border-gray-200 text-xs p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                  {currentLanguage === 'en' ? 'OTP or Password' : 'ओटीपी या पासवर्ड'}
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full bg-white border border-gray-200 text-xs p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#004B23] text-white font-bold text-xs uppercase tracking-wider rounded hover:bg-[#00381a] transition flex items-center justify-center space-x-2"
              >
                <span>{currentLanguage === 'en' ? 'Secure Sign In' : 'लॉगिन करें'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        )}

        {/* 2. MEMBER REGISTRATION FORM */}
        {activeSubTab === 'register' && (
          <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm animate-fadeIn" id="register_sub_module">
            <div className="text-center space-y-2 mb-8">
              <span className="text-[#004B23] font-bold text-xs uppercase tracking-wider">
                {currentLanguage === 'en' ? 'ALL INDIA MEMBERSHIP REGISTRATION' : 'अखिल भारतीय सदस्य पंजीकरण'}
              </span>
              <h3 className="text-2xl font-serif font-extrabold text-[#0B132B]">
                {currentLanguage === 'en' ? 'Create Your Verified Digital Profile' : 'अपना डिजिटल प्रोफ़ाइल बनाएं'}
              </h3>
              <p className="text-xs text-gray-500">
                {currentLanguage === 'en' ? 'After submission, local area committee will verify your entry to activate your digital card.' : 'पंजीकरण के बाद, डिजिटल कार्ड सक्रिय करने के लिए स्थानीय समिति आपकी प्रविष्टि की पुष्टि करेगी।'}
              </p>
            </div>

            {registeredSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-lg text-center text-xs space-y-3">
                <CheckCircle className="h-10 w-10 text-[#004B23] mx-auto animate-bounce" />
                <h4 className="font-bold text-base">{currentLanguage === 'en' ? 'Registration Request Received!' : 'पंजीकरण अनुरोध प्राप्त हुआ!'}</h4>
                <p>{currentLanguage === 'en' ? 'We are compiling your details and generating your secure QR code...' : 'हम आपका विवरण संकलित कर रहे हैं और सुरक्षित क्यूआर कोड तैयार कर रहे हैं...'}</p>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? "Full Name (In English)" : 'पूरा नाम (अंग्रेजी में)'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Salim Rangrez"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-gray-200 text-xs p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                    />
                  </div>

                  {/* Father's Name */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? "Father's Name" : 'पिता का नाम'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Al-Haaj Mohammad Yusuf"
                      value={formData.fatherName}
                      onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                      className="w-full bg-white border border-gray-200 text-xs p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                    />
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? 'Gender' : 'लिंग'}
                    </label>
                    <select
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value as any })}
                      className="w-full bg-white border border-gray-200 text-xs p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                    >
                      <option value="M">{currentLanguage === 'en' ? 'Male (पुरुष)' : 'पुरुष'}</option>
                      <option value="F">{currentLanguage === 'en' ? 'Female (महिला)' : 'महिला'}</option>
                    </select>
                  </div>

                  {/* DOB */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? 'Date of Birth' : 'जन्म तिथि'}
                    </label>
                    <input
                      type="date"
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                      className="w-full bg-white border border-gray-200 text-xs p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                    />
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? 'Mobile Number (Primary)' : 'मोबाइल नंबर (प्राथमिक)'}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-gray-200 text-xs p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                    />
                  </div>

                  {/* Blood Group */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? 'Blood Group' : 'रक्त समूह'}
                    </label>
                    <select
                      value={formData.bloodGroup}
                      onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value as any })}
                      className="w-full bg-white border border-gray-200 text-xs p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                    >
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>

                  {/* District */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? 'District' : 'जिला'}
                    </label>
                    <input
                      type="text"
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full bg-white border border-gray-200 text-xs p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                    />
                  </div>

                  {/* Area / Tehsil */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? 'Tehsil / Area' : 'तहसील / क्षेत्र'}
                    </label>
                    <input
                      type="text"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full bg-white border border-gray-200 text-xs p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                    />
                  </div>

                  {/* Education */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? 'Highest Education' : 'उच्चतम शिक्षा'}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Graduate, PG, ITI, etc."
                      value={formData.education}
                      onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                      className="w-full bg-white border border-gray-200 text-xs p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                    />
                  </div>

                  {/* Occupation */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? 'Occupation / Business' : 'व्यवसाय / नौकरी'}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Shopkeeper, Teacher, Engineer"
                      value={formData.occupation}
                      onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                      className="w-full bg-white border border-gray-200 text-xs p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#004B23] text-white font-bold text-xs uppercase tracking-wider rounded hover:bg-[#00381a] transition"
                >
                  {currentLanguage === 'en' ? 'Submit Registration for Verification' : 'सत्यापन के लिए विवरण जमा करें'}
                </button>
              </form>
            )}
          </div>
        )}

        {/* 3. MEMBER PORTAL DASHBOARD (SIMULATED FOR LOGGED IN) */}
        {activeSubTab === 'dashboard' && isLoggedIn && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn" id="dashboard_sub_module">
            {/* Left Box: Welcome panel & Stats */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-[#004B23] text-[#D4AF37] rounded-full">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-400 font-mono tracking-wider uppercase">Assalamu Alaikum</h4>
                    <p className="text-base font-bold text-gray-900">{memberProfile.name}</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-3 flex justify-between items-center text-xs">
                  <span className="text-gray-500">{currentLanguage === 'en' ? 'Status' : 'सत्यापन स्थिति'}</span>
                  <span className="px-2 py-0.5 bg-emerald-100 text-[#004B23] font-bold text-[10px] rounded flex items-center space-x-1">
                    <ShieldCheck className="h-3 w-3" />
                    <span>ACTIVE / सत्यापित</span>
                  </span>
                </div>
              </div>

              {/* Mini quick links */}
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm space-y-2">
                <h4 className="text-[10px] font-bold uppercase text-gray-400 tracking-wider mb-2">QUICK CONTROLS</h4>
                <button onClick={() => alert('Feature coming soon in full production build!')} className="w-full text-left p-2 hover:bg-white text-xs font-semibold text-gray-700 hover:text-[#004B23] rounded transition">
                  • {currentLanguage === 'en' ? 'Request Profile Correction' : 'प्रोफ़ाइल सुधार अनुरोध'}
                </button>
                <button onClick={() => alert('Certificate PDF generator will execute in production.')} className="w-full text-left p-2 hover:bg-white text-xs font-semibold text-gray-700 hover:text-[#004B23] rounded transition">
                  • {currentLanguage === 'en' ? 'Request Welfare Grant' : 'कल्याणकारी सहायता के लिए आवेदन'}
                </button>
              </div>
            </div>

            {/* Right Box: Digital Membership Card & Verification QR */}
            <div className="lg:col-span-8 bg-gray-50 p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm space-y-8">
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-serif font-extrabold text-[#0B132B]">
                  {currentLanguage === 'en' ? 'Your Digital Membership ID Card' : 'आपका डिजिटल सदस्यता पहचान पत्र'}
                </h3>
                <p className="text-xs text-gray-500">
                  {currentLanguage === 'en' ? 'This represents your registered identity within the National Rangrez Mahasabha.' : 'यह राष्ट्रीय रंगरेज महासभा के भीतर आपकी पंजीकृत पहचान का प्रतिनिधित्व करता है।'}
                </p>
              </div>

              {/* The RFID-Style Digital ID Card */}
              <div className="max-w-md mx-auto relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#004B23] via-[#00381a] to-[#0B132B] text-white p-6 shadow-2xl border-2 border-[#D4AF37]" id="digital_id_card_visual">
                {/* Islamic Pattern Background Grid Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:12px_12px] opacity-10"></div>
                
                {/* ID Card Header */}
                <div className="relative z-10 flex justify-between items-start border-b border-white/10 pb-4 mb-4">
                  <div>
                    <h4 className="font-serif font-extrabold text-xs tracking-wider text-[#D4AF37]">RANGREZ COMMUNITY BHARAT</h4>
                    <p className="text-[8px] tracking-widest text-gray-300 uppercase font-mono">National Registered NGO Portal</p>
                  </div>
                  <span className="text-[10px] font-bold text-[#D4AF37] border border-[#D4AF37]/30 px-1.5 py-0.5 rounded uppercase tracking-widest bg-[#D4AF37]/10 font-mono">
                    MEMBER
                  </span>
                </div>

                {/* Card Body */}
                <div className="relative z-10 grid grid-cols-12 gap-4 items-center">
                  
                  {/* Photo Frame */}
                  <div className="col-span-4 flex justify-center">
                    <div className="w-20 h-24 rounded-lg bg-gray-800 border-2 border-[#D4AF37]/40 overflow-hidden flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                        alt="Profile Photo"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>

                  {/* Profile Details fields */}
                  <div className="col-span-5 space-y-1 text-[11px] font-mono leading-tight">
                    <p className="text-[9px] text-gray-400">NAME (नाम)</p>
                    <p className="font-bold text-[#D4AF37] uppercase">{memberProfile.name}</p>
                    
                    <p className="text-[9px] text-gray-400 mt-1">FATHER (पिता)</p>
                    <p className="font-semibold text-gray-200">{memberProfile.fatherName}</p>
                    
                    <p className="text-[9px] text-gray-400 mt-1">AREA / TEHSIL</p>
                    <p className="font-semibold text-gray-200">{memberProfile.area} ({memberProfile.district})</p>
                  </div>

                  {/* QR Security Token & Stamp */}
                  <div className="col-span-3 flex flex-col items-center space-y-2">
                    {/* Simulated High-Res QR code box */}
                    <div className="p-1.5 bg-white rounded-lg shadow-md border-2 border-[#D4AF37]">
                      <svg className="w-16 h-16 text-[#0B132B]" viewBox="0 0 100 100">
                        {/* Beautiful procedural QR pattern representation */}
                        <rect x="0" y="0" width="20" height="20" fill="currentColor"/>
                        <rect x="80" y="0" width="20" height="20" fill="currentColor"/>
                        <rect x="0" y="80" width="20" height="20" fill="currentColor"/>
                        <rect x="10" y="10" width="10" height="10" fill="white"/>
                        <rect x="80" y="10" width="10" height="10" fill="white"/>
                        <rect x="10" y="80" width="10" height="10" fill="white"/>
                        <rect x="35" y="35" width="30" height="30" fill="currentColor"/>
                        <rect x="45" y="45" width="10" height="10" fill="white"/>
                        <rect x="75" y="45" width="15" height="10" fill="currentColor"/>
                        <rect x="45" y="75" width="20" height="15" fill="currentColor"/>
                        <rect x="15" y="45" width="15" height="15" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="text-[7px] text-gray-300 font-mono tracking-widest text-center select-all">VERIFIED CODE</span>
                  </div>

                </div>

                {/* Card Footer */}
                <div className="relative z-10 flex justify-between items-center border-t border-white/10 pt-3 mt-4 text-[9px] font-mono text-gray-300">
                  <span>ID: {memberProfile.id}</span>
                  <span className="text-[#D4AF37] font-bold">BLOOD: {memberProfile.bloodGroup}</span>
                </div>
              </div>

              {/* Action: Download Card */}
              <div className="text-center pt-2">
                <button
                  onClick={() => alert('Digital membership card dispatches to download pool successfully!')}
                  className="px-6 py-2.5 bg-[#004B23] hover:bg-[#00381a] text-white text-xs font-bold uppercase tracking-wider rounded shadow-md transition inline-flex items-center space-x-2"
                >
                  <Download className="h-4 w-4 text-[#D4AF37]" />
                  <span>{currentLanguage === 'en' ? 'Download PDF ID Card' : 'पीडीएफ पहचान पत्र डाउनलोड करें'}</span>
                </button>
              </div>

            </div>
          </div>
        )}

        {/* 4. MEMBER DIRECTORY (STATIC INDEX) */}
        {activeSubTab === 'directory' && (
          <div className="space-y-6 animate-fadeIn" id="directory_sub_module">
            {/* Search and Filters */}
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 flex flex-wrap gap-4 items-center justify-between">
              <div className="max-w-xs w-full">
                <input
                  type="text"
                  placeholder={currentLanguage === 'en' ? 'Search by name or area...' : 'नाम या क्षेत्र से खोजें...'}
                  value={dirSearch}
                  onChange={(e) => setDirSearch(e.target.value)}
                  className="w-full bg-white border border-gray-200 text-xs p-2.5 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                />
              </div>

              <div>
                <select
                  value={dirBloodFilter}
                  onChange={(e) => setDirBloodFilter(e.target.value)}
                  className="bg-white border border-gray-200 text-xs p-2.5 rounded focus:outline-none font-medium text-gray-800"
                >
                  <option value="All">{currentLanguage === 'en' ? 'All Blood Groups' : 'सभी रक्त समूह'}</option>
                  <option value="O+">O+</option>
                  <option value="A+">A+</option>
                  <option value="B+">B+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
            </div>

            {/* Grid display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockDirectory
                .filter(m => {
                  const matchSearch = m.name.toLowerCase().includes(dirSearch.toLowerCase()) || m.area.toLowerCase().includes(dirSearch.toLowerCase());
                  const matchBlood = dirBloodFilter === 'All' || m.bloodGroup === dirBloodFilter;
                  return matchSearch && matchBlood;
                })
                .map((m) => (
                  <div key={m.id} className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition">
                    <div>
                      <span className="text-[9px] bg-emerald-50 text-[#004B23] font-bold px-2 py-0.5 rounded">
                        {m.id}
                      </span>
                      <h4 className="text-xs font-bold text-gray-900 mt-2">
                        {m.name}
                      </h4>
                      <p className="text-[11px] text-gray-500 mt-1">{m.occupation}</p>
                      <p className="text-[11px] text-[#004B23] font-medium mt-1">📍 {m.area}, {m.district}</p>
                    </div>

                    <div className="border-t border-gray-100 pt-3 flex justify-between items-center text-[10px] font-mono">
                      <span className="text-[#D4AF37] font-bold">Blood: {m.bloodGroup}</span>
                      <span className="text-emerald-700 font-bold uppercase flex items-center space-x-1">
                        <CheckCircle className="h-3 w-3" />
                        <span>Verified</span>
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
