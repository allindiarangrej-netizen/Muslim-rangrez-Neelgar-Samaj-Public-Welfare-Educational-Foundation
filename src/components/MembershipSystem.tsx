import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Turnstile } from '@marsidev/react-turnstile';
import { XCircle, Mail, UserPlus, LogIn, Layout, ShieldCheck, Download, Users, User, ArrowRight, CheckCircle, FileText, Printer, QrCode, Search, Filter, CheckCircle2, AlertTriangle, RefreshCw, Sliders, Database, Lock, Bell, Award, Briefcase, Heart, Activity, Eye, Settings, Check, X, Shield, FileCheck, PhoneCall, MapPin, Grid, Layers, ExternalLink, Phone, Plus, MessageSquare } from 'lucide-react';
import { Language } from '../types';
import { IMAGES } from '../data/mediaRegistry';
import { useAuth } from '../context/AuthContext';
import { getSupabase } from '../lib/supabaseClient';
import { INDIAN_STATES, DISTRICTS, TEHSILS } from '../data/indiaData';

interface Volunteer {
  id: string;
  name: string;
  phone: string;
  email: string;
  timing: string;
  districtId?: string;
  stateId?: string;
}

const SUPPORT_VOLUNTEERS: Volunteer[] = [
  { id: 'V1', name: 'Community Volunteer (Morena)', phone: '+91 78799 40869', email: 'help@rangrezportal.com', timing: '10:00 AM - 06:00 PM', districtId: 'MP01' },
  { id: 'V2', name: 'Zonal Coordinator (Gwalior)', phone: '+91 99999 88888', email: 'zonal@rangrezportal.com', timing: '11:00 AM - 05:00 PM', districtId: 'MP02' },
  { id: 'V3', name: 'National Support Desk', phone: '+91 11111 22222', email: 'admin@rangrezportal.com', timing: '09:00 AM - 08:00 PM' },
];

interface MembershipSystemProps {
  currentLanguage: Language;
  defaultSubTab?: 'login' | 'register' | 'dashboard' | 'directory' | 'overview' | 'admin';
  focusSection?: 'id_card';
}

export default function MembershipSystem({ currentLanguage, defaultSubTab = 'dashboard', focusSection }: MembershipSystemProps) {
  const [activeSubTab, setActiveSubTab] = useState<'login' | 'register' | 'dashboard' | 'directory' | 'overview' | 'admin'>(defaultSubTab);

  useEffect(() => {
    if (defaultSubTab) {
      setActiveSubTab(defaultSubTab);
    }
  }, [defaultSubTab]);

  useEffect(() => {
    if (focusSection === 'id_card') {
      setTimeout(() => {
        const el = document.getElementById('digital_id_card_visual');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 250);
    }
  }, [focusSection, activeSubTab]);
  const { session, user } = useAuth();
  const supabase = getSupabase();
  const [registeredSuccess, setRegisteredSuccess] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  // Dashboard member data (should be fetched from database)
  const [memberProfile, setMemberProfile] = useState({
    id: '',
    name: '',
    fatherName: '',
    gender: 'M',
    dob: '',
    phone: '',
    whatsapp: '',
    whatsappAvailable: true,
    showWhatsAppPublicly: false,
    email: '',
    district: '',
    area: '',
    education: '',
    occupation: '',
    bloodGroup: '',
    status: '',
    qrToken: ''
  });

  useEffect(() => {
    async function fetchProfile() {
      if (!user || !supabase) return;
      try {
        const { data, error } = await supabase
          .from('member_profiles')
          .select('*')
          .eq('user_id', user.id)
          .maybeSingle();

        if (error) {
          console.error('Error fetching member profile:', error);
          return;
        }

        if (data) {
          setMemberProfile(prev => ({
            ...prev,
            id: data.id || prev.id,
            name: data.full_name || user.user_metadata?.full_name || prev.name,
            fatherName: user.user_metadata?.fatherName || prev.fatherName,
            gender: user.user_metadata?.gender || prev.gender,
            dob: user.user_metadata?.dob || prev.dob,
            phone: data.phone || user.user_metadata?.phone || prev.phone,
            whatsapp: data.phone || user.user_metadata?.phone || prev.whatsapp,
            district: data.district || user.user_metadata?.district || prev.district,
            area: data.tehsil || user.user_metadata?.area || prev.area,
            education: user.user_metadata?.education || prev.education,
            occupation: data.role || user.user_metadata?.occupation || prev.occupation,
            bloodGroup: user.user_metadata?.bloodGroup || prev.bloodGroup,
            status: data.status || prev.status,
            email: user.email || prev.email,
            qrToken: `SECURE_TOKEN_RCB_VERIFIED_${data.id}`
          }));
        } else {
          // Auto-create a default profile in db if none exists
          const newProfile = {
            user_id: user.id,
            full_name: user.user_metadata?.full_name || user.email?.split('@')[0] || 'Member',
            phone: user.user_metadata?.phone || '',
            district: user.user_metadata?.district || '',
            tehsil: user.user_metadata?.area || '',
            role: user.user_metadata?.occupation || 'Member',
            status: 'Pending'
          };
          const { data: inserted, error: insertError } = await supabase
            .from('member_profiles')
            .insert(newProfile)
            .select()
            .single();

          if (!insertError && inserted) {
            setMemberProfile(prev => ({
              ...prev,
              id: inserted.id,
              name: inserted.full_name,
              fatherName: user.user_metadata?.fatherName || prev.fatherName,
              gender: user.user_metadata?.gender || prev.gender,
              dob: user.user_metadata?.dob || prev.dob,
              phone: inserted.phone || prev.phone,
              whatsapp: inserted.phone || prev.whatsapp,
              district: inserted.district || prev.district,
              area: inserted.tehsil || prev.area,
              education: user.user_metadata?.education || prev.education,
              occupation: inserted.role || prev.occupation,
              bloodGroup: user.user_metadata?.bloodGroup || prev.bloodGroup,
              status: inserted.status || prev.status,
              email: user.email || prev.email,
              qrToken: `SECURE_TOKEN_RCB_VERIFIED_${inserted.id}`
            }));
          }
        }
      } catch (err) {
        console.error('Failed to load user profile:', err);
      }
    }
    fetchProfile();
  }, [user, supabase]);

  const isLoggedIn = user !== null;

  // Simulated registration form state
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    gender: 'M',
    dob: '',
    phone: '',
    whatsapp: '',
    whatsappAvailable: true,
    showWhatsAppPublicly: false,
    email: '',
    password: '',
    confirmPassword: '',
    stateId: '',
    districtId: '',
    tehsilId: '',
    city: '',
    education: 'Graduate',
    occupation: '',
    bloodGroup: 'O+',
    photoUrl: '',
    aadhaar: '',
    address: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    documentName: '',
    otpSent: false,
    otpVerified: false,
    emailVerified: false,
    otpInput: ''
  });

  // Dynamic Volunteer Selection
  const activeVolunteer = useMemo(() => {
    const localized = SUPPORT_VOLUNTEERS.find(v => v.districtId === formData.districtId);
    return localized || SUPPORT_VOLUNTEERS.find(v => v.id === 'V3');
  }, [formData.districtId]);

  // Admin & Verification Console state
  const [adminTab, setAdminTab] = useState<'members' | 'families' | 'verification' | 'areas' | 'matrimonial' | 'reports' | 'logs' | 'roles' | 'queue' | 'website_settings' | 'volunteers'>('verification');
  const [verificationQueue, setVerificationQueue] = useState<any[]>([]);
  const [adminNotification, setAdminNotification] = useState('');

  // Directory search filters
  const [dirSearch, setDirSearch] = useState('');
  const [dirBloodFilter, setDirBloodFilter] = useState('All');
  
  const [directoryData, setDirectoryData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchDirectory() {
      if (!supabase) return;
      try {
        const { data, error } = await supabase.from('member_profiles').select('*').order('created_at', { ascending: false });
        if (data && !error) {
          setDirectoryData(data.map(d => ({
            id: d.id.substring(0, 8).toUpperCase(), // Short visual ID
            name: d.full_name || 'Unknown',
            district: d.district || 'N/A',
            area: d.tehsil || 'N/A',
            occupation: d.role || 'Member',
            bloodGroup: '-', // Not available in base schema, pull from auth if needed
            status: d.status || 'Active',
            phone: d.phone || '',
            whatsapp: d.whatsapp || '',
            showWhatsAppPublicly: d.show_whatsapp_publicly || false
          })));

          // set verification queue
          setVerificationQueue(data.filter(d => d.status === 'Pending').map(d => ({
            id: d.id,
            name: d.full_name || 'Unknown',
            fatherName: '-', // missing in schema
            district: d.district || 'N/A',
            area: d.tehsil || 'N/A',
            bloodGroup: '-',
            date: new Date(d.created_at).toLocaleDateString(),
            status: d.status,
            docVerified: false,
            photoVerified: false
          })));
        }
      } catch (err) {
        console.error("Error fetching directory:", err);
      }
    }
    fetchDirectory();
  }, [supabase, activeSubTab]);

  const [registering, setRegistering] = useState(false);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [documentFile, setDocumentFile] = useState<File | null>(null);


  const [emailVerifySent, setEmailVerifySent] = useState(false);
  const [emailVerifyTimer, setEmailVerifyTimer] = useState(0);
  const [otpTimer, setOtpTimer] = useState(0);

  const handleSendOTP = async () => {
    if (!formData.phone) {
      alert(currentLanguage === 'en' ? 'Please enter Mobile Number first.' : 'कृपया पहले मोबाइल नंबर दर्ज करें।');
      return;
    }
    // Simulate sending OTP for production-grade feel
    setFormData(prev => ({ ...prev, otpSent: true }));
    setOtpTimer(60);
    const timer = setInterval(() => {
      setOtpTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    alert(currentLanguage === 'en' ? 'OTP sent successfully to ' + formData.phone : 'ओटीपी सफलतापूर्वक ' + formData.phone + ' पर भेजा गया।');
  };

  const handleVerifyOTP = () => {
    if (formData.otpInput === '123456') {
      setFormData(prev => ({ ...prev, otpVerified: true }));
      alert(currentLanguage === 'en' ? 'Mobile Verified Successfully!' : 'मोबाइल सफलतापूर्वक सत्यापित!');
    } else {
      alert(currentLanguage === 'en' ? 'Invalid OTP. Please enter 123456 for testing.' : 'अमान्य ओटीपी। कृपया परीक्षण के लिए 123456 दर्ज करें।');
    }
  };

  // Automatically detect the verified session
  useEffect(() => {
    if (!supabase) return;

    // Direct check on mount/email change
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user && session.user.email === formData.email) {
        setFormData(prev => ({ ...prev, emailVerified: true }));
      }
    };
    checkSession();

    // Listen for auth state changes (e.g. from other tabs)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user && session.user.email === formData.email) {
        setFormData(prev => ({ ...prev, emailVerified: true }));
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase, formData.email]);

  const handleSendEmailVerification = async () => {
    if (!formData.email || !formData.name || !formData.phone) {
      alert(currentLanguage === 'en' ? 'Please enter Name, Email, and Mobile Number first.' : 'कृपया पहले नाम, ईमेल और मोबाइल नंबर दर्ज करें।');
      return;
    }
    if (!supabase) return;

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email: formData.email,
        options: {
          emailRedirectTo: window.location.origin
        }
      });
      
      if (error) throw error;
      
      setEmailVerifySent(true);
      setEmailVerifyTimer(60);
      alert(currentLanguage === 'en' ? 'Verification email sent successfully. Please check your inbox.' : 'सत्यापन ईमेल सफलतापूर्वक भेजा गया। कृपया अपना इनबॉक्स जांचें।');
      
      const timer = setInterval(() => {
        setEmailVerifyTimer((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (err: any) {
      alert(err.message || 'Failed to send verification email.');
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.name) {
      setLoginError(currentLanguage === 'en' ? 'Email, Password, and Name are required.' : 'ईमेल, पासवर्ड और नाम आवश्यक हैं।');
      return;
    }
    if (!supabase) return;

    if (!captchaToken) {
      setLoginError(currentLanguage === 'en' ? 'Please complete the CAPTCHA.' : 'कृपया CAPTCHA पूरा करें।');
      return;
    }

    setRegistering(true);
    setLoginError('');
    try {
      // 1. Verify CAPTCHA
      const verifyRes = await fetch('/api/verify-captcha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: captchaToken }),
      });
      const verifyData = await verifyRes.json();

      if (!verifyData.success) {
        setLoginError(currentLanguage === 'en' ? 'CAPTCHA verification failed.' : 'CAPTCHA सत्यापन विफल रहा।');
        setRegistering(false);
        return;
      }

      // Create a unique ID for files just in case
      const tempId = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2);

      let photoUrl = '';
      if (photoFile) {
        const fileExt = photoFile.name.split('.').pop();
        const fileName = `${tempId}-photo.${fileExt}`;
        const { error: uploadError } = await supabase.storage
          .from('member-photos')
          .upload(fileName, photoFile);
        
        if (!uploadError) {
          photoUrl = supabase.storage.from('member-photos').getPublicUrl(fileName).data.publicUrl;
        }
      }

      let documentUrl = '';
      if (documentFile) {
        const fileExt = documentFile.name.split('.').pop();
        const fileName = `${tempId}-doc.${fileExt}`;
        const { error: uploadError } = await supabase.storage
          .from('documents')
          .upload(fileName, documentFile);
        
        if (!uploadError) {
          documentUrl = supabase.storage.from('documents').getPublicUrl(fileName).data.publicUrl;
        }
      }

      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: window.location.origin,
          data: {
            full_name: formData.name,
            phone: formData.phone,
            whatsapp: formData.whatsapp,
            whatsapp_available: formData.whatsappAvailable,
            show_whatsapp_publicly: formData.showWhatsAppPublicly,
            district: formData.districtId,
            state: formData.stateId,
            fatherName: formData.fatherName,
            gender: formData.gender,
            dob: formData.dob,
            bloodGroup: formData.bloodGroup,
            tehsil: formData.tehsilId,
            city: formData.city,
            education: formData.education,
            occupation: formData.occupation,
            aadhaar: formData.aadhaar,
            address: formData.address,
            emergencyContactName: formData.emergencyContactName,
            emergencyContactPhone: formData.emergencyContactPhone,
            photoUrl: photoUrl,
            documentUrl: documentUrl
          }
        }
      });
      
      if (authError) throw authError;

      // Ensure data is saved into member_profiles if possible
      if (authData.user) {
        // Attempt to insert/upsert into member_profiles directly (might fail if RLS prevents it for unconfirmed email, but we try)
        await supabase.from('member_profiles').upsert({
          user_id: authData.user.id,
          full_name: formData.name,
          phone: formData.phone,
          whatsapp: formData.whatsapp,
          whatsapp_available: formData.whatsappAvailable,
          show_whatsapp_publicly: formData.showWhatsAppPublicly,
          district: formData.districtId,
          state: formData.stateId,
          tehsil: formData.tehsilId,
          role: 'Member',
          status: 'Pending',
          email_verified: true
        }).select();
      }

      setRegisteredSuccess(true);
      setTimeout(() => {
        setRegisteredSuccess(false);
        setActiveSubTab('login');
        alert('Please check your email to verify your account before logging in.');
      }, 3000);
    } catch (error: any) {
      setLoginError(error.message);
    } finally {
      setRegistering(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    if (!supabase) return;

    if (!captchaToken) {
      setLoginError(currentLanguage === 'en' ? 'Please complete the CAPTCHA.' : 'कृपया CAPTCHA पूरा करें।');
      return;
    }

    try {
      // 1. Verify CAPTCHA
      const verifyRes = await fetch('/api/verify-captcha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: captchaToken }),
      });
      const verifyData = await verifyRes.json();

      if (!verifyData.success) {
        setLoginError(currentLanguage === 'en' ? 'CAPTCHA verification failed.' : 'CAPTCHA सत्यापन विफल रहा।');
        return;
      }

      const { error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password
      });
      if (error) {
        if (error.message.includes('Email not confirmed')) {
          throw new Error('Please verify your email address before logging in.');
        }
        throw error;
      }
      setActiveSubTab('dashboard');
    } catch (error: any) {
      setLoginError(error.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!formData.email) {
      setLoginError(currentLanguage === 'en' ? 'Please enter your email address to reset password.' : 'कृपया पासवर्ड रीसेट करने के लिए अपना ईमेल पता दर्ज करें।');
      return;
    }
    if (!supabase) return;

    if (!captchaToken) {
      setLoginError(currentLanguage === 'en' ? 'Please complete the CAPTCHA.' : 'कृपया CAPTCHA पूरा करें।');
      return;
    }

    try {
      setLoginError('');

      // 1. Verify CAPTCHA
      const verifyRes = await fetch('/api/verify-captcha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: captchaToken }),
      });
      const verifyData = await verifyRes.json();

      if (!verifyData.success) {
        setLoginError(currentLanguage === 'en' ? 'CAPTCHA verification failed.' : 'CAPTCHA सत्यापन विफल रहा।');
        return;
      }

      const { error } = await supabase.auth.resetPasswordForEmail(formData.email, {
        redirectTo: `${window.location.origin}/auth/callback`,
      });
      if (error) throw error;
      alert(currentLanguage === 'en' ? 'Password reset email sent! Please check your inbox.' : 'पासवर्ड रीसेट ईमेल भेजा गया! कृपया अपना इनबॉक्स चेक करें।');
    } catch (error: any) {
      setLoginError(error.message);
    }
  };

  return (
    <div className="py-12 bg-white" id="membership_system_module">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation bar for sub-modules */}
        <div className="flex flex-wrap border-b border-gray-200 mb-8 gap-2" id="membership_sub_tabs">
          <button
            onClick={() => setActiveSubTab('overview')}
            className={`px-4 py-3 text-xs font-bold uppercase tracking-wider flex items-center space-x-2 border-b-2 transition ${
              activeSubTab === 'overview'
                ? 'border-[#004B23] text-[#004B23]'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            <Grid className="h-4 w-4" />
            <span>{currentLanguage === 'en' ? 'ERP Overview Hub' : 'सामुदायिक ईआरपी हब'}</span>
          </button>

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
            onClick={() => setActiveSubTab('admin')}
            className={`px-4 py-3 text-xs font-bold uppercase tracking-wider flex items-center space-x-2 border-b-2 transition ${
              activeSubTab === 'admin'
                ? 'border-[#004B23] text-[#004B23]'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            <Shield className="h-4 w-4 text-[#F4C430]" />
            <span>{currentLanguage === 'en' ? 'Admin & Verification' : 'प्रशासन एवं सत्यापन'}</span>
          </button>

          <button
            onClick={async () => {
              if (isLoggedIn) {
                if (supabase) await supabase.auth.signOut();
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

        {/* 0. ERP OVERVIEW HUB & MASTER COMMUNITY DASHBOARD */}
        {activeSubTab === 'overview' && (
          <div className="space-y-10 animate-fadeIn" id="erp_overview_hub_module">
            {/* Master Portal Intro Ribbon */}
            <div className="bg-gradient-to-r from-[#004B23] via-[#00381a] to-[#0B132B] text-white p-8 rounded-2xl shadow-xl border-2 border-[#F4C430]/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#F4C430_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="space-y-2 text-center md:text-left">
                  <span className="bg-[#F4C430] text-[#0B132B] text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-widest inline-block font-mono">
                    {currentLanguage === 'en' ? 'Unified Community ERP System' : 'एकीकृत सामुदायिक ईआरपी प्रणाली'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-white tracking-tight">
                    {currentLanguage === 'en' ? 'National Rangrez Community Bharat Portal' : 'राष्ट्रीय रंगरेज समुदाय भारत पोर्टल'}
                  </h2>
                  <p className="text-gray-200 text-xs sm:text-sm max-w-2xl">
                    {currentLanguage === 'en' 
                      ? 'Complete Digital Membership Management, Hierarchical Regional Census, Interactive Family Tree Genograms, and Shadi Platform synchronized into a single high-fidelity enterprise ecosystem.' 
                      : 'संपूर्ण डिजिटल सदस्यता प्रबंधन, क्षेत्रीय जनगणना, वंशावली वृक्ष और वैवाहिक केंद्र को एक उच्च तकनीकी ईआरपी प्रणाली में एकीकृत किया गया है।'}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={() => setActiveSubTab('register')}
                    className="px-6 py-3 bg-[#F4C430] hover:bg-[#e0b020] text-[#0B132B] text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg transition flex items-center justify-center space-x-2"
                  >
                    <UserPlus className="h-4 w-4" />
                    <span>{currentLanguage === 'en' ? 'New Member Register' : 'नया पंजीकरण'}</span>
                  </button>
                  <button 
                    onClick={() => setActiveSubTab('admin')}
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs font-bold uppercase tracking-wider rounded-lg transition flex items-center justify-center space-x-2"
                  >
                    <Shield className="h-4 w-4 text-[#F4C430]" />
                    <span>{currentLanguage === 'en' ? 'Admin Console' : 'प्रशासन पैनल'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 7 Global Master Dashboard Statistics Cards */}
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider flex items-center space-x-2">
                  <Activity className="h-4 w-4 text-[#004B23]" />
                  <span>{currentLanguage === 'en' ? 'Real-Time Community Demographics & ERP Metrics' : 'रीयल-टाइम सामुदायिक आंकड़े एवं ईआरपी मेट्रिक्स'}</span>
                </h3>
                <span className="text-[11px] font-mono text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded font-bold border border-emerald-200">
                  ⚡ SYNCHRONIZED ACROSS 11 AREA LEVELS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition flex items-center space-x-4 border-l-4 border-l-[#004B23]">
                  <div className="p-3 bg-emerald-50 text-[#004B23] rounded-xl"><Users className="h-6 w-6" /></div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase font-mono">{currentLanguage === 'en' ? 'Registered Members' : 'पंजीकृत सदस्य'}</p>
                    <h4 className="text-xl font-black text-gray-900">14,250+</h4>
                    <p className="text-[10px] text-emerald-700 font-semibold mt-0.5">✔ 13,100 Verified • 1,150 Pending</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition flex items-center space-x-4 border-l-4 border-l-[#F4C430]">
                  <div className="p-3 bg-amber-50 text-amber-800 rounded-xl"><User className="h-6 w-6" /></div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase font-mono">{currentLanguage === 'en' ? 'Active Families' : 'सक्रिय परिवार'}</p>
                    <h4 className="text-xl font-black text-gray-900">3,420+</h4>
                    <p className="text-[10px] text-amber-700 font-semibold mt-0.5">🏡 92% National Census Coverage</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition flex items-center space-x-4 border-l-4 border-l-blue-600">
                  <div className="p-3 bg-blue-50 text-blue-700 rounded-xl"><MapPin className="h-6 w-6" /></div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase font-mono">{currentLanguage === 'en' ? 'Total Areas & Committees' : 'कुल क्षेत्र एवं समितियां'}</p>
                    <h4 className="text-xl font-black text-gray-900">850+ Nodes</h4>
                    <p className="text-[10px] text-blue-700 font-semibold mt-0.5">📍 11 Hierarchical Levels Active</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition flex items-center space-x-4 border-l-4 border-l-purple-600">
                  <div className="p-3 bg-purple-50 text-purple-700 rounded-xl"><QrCode className="h-6 w-6" /></div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase font-mono">{currentLanguage === 'en' ? 'Verified ID Cards' : 'सत्यापित पहचान पत्र'}</p>
                    <h4 className="text-xl font-black text-gray-900">13,100+</h4>
                    <p className="text-[10px] text-purple-700 font-semibold mt-0.5">🛡 RFID & QR Tokens Active</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition flex items-center space-x-4 border-l-4 border-l-rose-600">
                  <div className="p-3 bg-rose-50 text-rose-700 rounded-xl"><Heart className="h-6 w-6" /></div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase font-mono">{currentLanguage === 'en' ? 'Matrimonial Profiles' : 'वैवाहिक प्रोफाइल'}</p>
                    <h4 className="text-xl font-black text-gray-900">640+ Active</h4>
                    <p className="text-[10px] text-rose-700 font-semibold mt-0.5">💖 Verified Shadi Registry</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition flex items-center space-x-4 border-l-4 border-l-emerald-600">
                  <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl"><Award className="h-6 w-6" /></div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase font-mono">{currentLanguage === 'en' ? 'Community Services' : 'सामुदायिक सेवाएं'}</p>
                    <h4 className="text-xl font-black text-gray-900">45+ Projects</h4>
                    <p className="text-[10px] text-emerald-700 font-semibold mt-0.5">📚 Scholarships & Welfare Grants</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition flex items-center space-x-4 border-l-4 border-l-amber-600">
                  <div className="p-3 bg-amber-50 text-amber-800 rounded-xl"><FileCheck className="h-6 w-6" /></div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase font-mono">{currentLanguage === 'en' ? 'Verification Queue' : 'सत्यापन कतार'}</p>
                    <h4 className="text-xl font-black text-gray-900">1,150 Pending</h4>
                    <p className="text-[10px] text-amber-800 font-semibold mt-0.5">⚡ Admin Review in Progress</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition flex items-center space-x-4 border-l-4 border-l-teal-600">
                  <div className="p-3 bg-teal-50 text-teal-700 rounded-xl"><Briefcase className="h-6 w-6" /></div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase font-mono">{currentLanguage === 'en' ? 'Business Network' : 'व्यावसायिक नेटवर्क'}</p>
                    <h4 className="text-xl font-black text-gray-900">1,820+ Units</h4>
                    <p className="text-[10px] text-teal-700 font-semibold mt-0.5">🏢 Legacy Artisans & MSMEs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 7-Module Navigation Jump Matrix */}
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-2 flex justify-between items-center">
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider flex items-center space-x-2">
                  <Layers className="h-4 w-4 text-[#004B23]" />
                  <span>{currentLanguage === 'en' ? 'Synchronized Community Modules (Direct Launch)' : 'एकीकृत सामुदायिक मॉड्यूल (सीधा प्रवेश)'}</span>
                </h3>
                <span className="text-xs text-gray-500 font-medium">Click any card to launch specific ERP feature</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* 1. Areas & Regional Directory */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <span className="p-2.5 bg-emerald-50 text-[#004B23] rounded-lg font-bold"><MapPin className="h-5 w-5" /></span>
                      <span className="text-[9px] font-mono bg-gray-100 text-gray-600 px-2 py-0.5 rounded uppercase font-bold">11 Hierarchy Levels</span>
                    </div>
                    <h4 className="text-base font-bold text-gray-900">1. Areas & Regional Directory</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Explore Country, State, Division, District, Tehsil, Block, City, Town, Village, Ward & Mohalla census registries, office bearers, and interactive GIS maps.
                    </p>
                  </div>
                  <button 
                    onClick={() => {
                      const btn = document.querySelector('button[onClick*="areas"]') as HTMLButtonElement;
                      if (btn) btn.click();
                      else alert('Please click "Areas Directory" in the top navigation pills!');
                    }}
                    className="w-full py-2.5 bg-gray-100 hover:bg-[#004B23] hover:text-white text-gray-800 font-bold text-xs rounded transition flex items-center justify-center space-x-2"
                  >
                    <span>{currentLanguage === 'en' ? 'Open Regional Directory' : 'क्षेत्रीय निर्देशिका खोलें'}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                {/* 2. Membership Dashboard & Portal */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <span className="p-2.5 bg-blue-50 text-blue-700 rounded-lg font-bold"><Layout className="h-5 w-5" /></span>
                      <span className="text-[9px] font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded uppercase font-bold">Active Member Portal</span>
                    </div>
                    <h4 className="text-base font-bold text-gray-900">2. Membership Dashboard & Portal</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Access member dashboard, registration status, profile updates, notifications, membership validity tracker, family details, and digital services.
                    </p>
                  </div>
                  <button 
                    onClick={() => setActiveSubTab('dashboard')}
                    className="w-full py-2.5 bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-800 font-bold text-xs rounded transition flex items-center justify-center space-x-2"
                  >
                    <span>{currentLanguage === 'en' ? 'Launch Member Dashboard' : 'डैशबोर्ड खोलें'}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                {/* 3. Member Registration */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <span className="p-2.5 bg-amber-50 text-amber-800 rounded-lg font-bold"><UserPlus className="h-5 w-5" /></span>
                      <span className="text-[9px] font-mono bg-amber-100 text-amber-800 px-2 py-0.5 rounded uppercase font-bold">OTP & Doc Verified</span>
                    </div>
                    <h4 className="text-base font-bold text-gray-900">3. Member Registration Form</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Complete 10-step digital registration workflow with Aadhaar (Optional), Mobile OTP verification, email confirmation, document & photo upload, and emergency contact.
                    </p>
                  </div>
                  <button 
                    onClick={() => setActiveSubTab('register')}
                    className="w-full py-2.5 bg-amber-50 hover:bg-amber-600 hover:text-white text-amber-900 font-bold text-xs rounded transition flex items-center justify-center space-x-2"
                  >
                    <span>{currentLanguage === 'en' ? 'Start New Registration' : 'नया पंजीकरण करें'}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                {/* 4. Family Census & Registration */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <span className="p-2.5 bg-purple-50 text-purple-700 rounded-lg font-bold"><Users className="h-5 w-5" /></span>
                      <span className="text-[9px] font-mono bg-purple-100 text-purple-800 px-2 py-0.5 rounded uppercase font-bold">Socio-Economic Data</span>
                    </div>
                    <h4 className="text-base font-bold text-gray-900">4. Family Census & Registration</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Register family head, dependents, address, occupation, income category (EWS/Middle), education status, and generate comprehensive family census statistics.
                    </p>
                  </div>
                  <button 
                    onClick={() => {
                      const btn = document.querySelector('button[onClick*="membership-census"]') as HTMLButtonElement;
                      if (btn) btn.click();
                      else alert('Please click "Family Census" in the top navigation pills!');
                    }}
                    className="w-full py-2.5 bg-purple-50 hover:bg-purple-600 hover:text-white text-purple-800 font-bold text-xs rounded transition flex items-center justify-center space-x-2"
                  >
                    <span>{currentLanguage === 'en' ? 'Open Family Census' : 'पारिवारिक जनगणना खोलें'}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                {/* 5. Family Tree Mapping */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <span className="p-2.5 bg-teal-50 text-teal-700 rounded-lg font-bold"><Sliders className="h-5 w-5" /></span>
                      <span className="text-[9px] font-mono bg-teal-100 text-teal-800 px-2 py-0.5 rounded uppercase font-bold">Generational Lineage</span>
                    </div>
                    <h4 className="text-base font-bold text-gray-900">5. Family Tree Mapping</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Interactive visual genogram chart mapping parent-child relationships, marriage links, generational lineage views, search member tool, and printable PDF tree.
                    </p>
                  </div>
                  <button 
                    onClick={() => {
                      const btn = document.querySelector('button[onClick*="membership-tree"]') as HTMLButtonElement;
                      if (btn) btn.click();
                      else alert('Please click "Family Tree" in the top navigation pills!');
                    }}
                    className="w-full py-2.5 bg-teal-50 hover:bg-teal-600 hover:text-white text-teal-800 font-bold text-xs rounded transition flex items-center justify-center space-x-2"
                  >
                    <span>{currentLanguage === 'en' ? 'Explore Genogram Tree' : 'वंशावली वृक्ष देखें'}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                {/* 6. Digital ID Card & Verification */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <span className="p-2.5 bg-rose-50 text-rose-700 rounded-lg font-bold"><QrCode className="h-5 w-5" /></span>
                      <span className="text-[9px] font-mono bg-rose-100 text-rose-800 px-2 py-0.5 rounded uppercase font-bold">RFID Smart Token</span>
                    </div>
                    <h4 className="text-base font-bold text-gray-900">6. Digital ID Card & Verification</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Smart digital ID with verified QR code, photo, membership number, family ID, emergency contact, wallet-friendly version, print version, and verification status.
                    </p>
                  </div>
                  <button 
                    onClick={() => {
                      setActiveSubTab('dashboard');
                      setTimeout(() => {
                        const el = document.getElementById('digital_id_card_visual');
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }, 150);
                    }}
                    className="w-full py-2.5 bg-rose-50 hover:bg-rose-600 hover:text-white text-rose-800 font-bold text-xs rounded transition flex items-center justify-center space-x-2"
                  >
                    <span>{currentLanguage === 'en' ? 'View Smart ID Card' : 'स्मार्ट पहचान पत्र देखें'}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                {/* 7. Matrimonial & Nikah Platform */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <span className="p-2.5 bg-pink-50 text-pink-700 rounded-lg font-bold"><Heart className="h-5 w-5" /></span>
                      <span className="text-[9px] font-mono bg-pink-100 text-pink-800 px-2 py-0.5 rounded uppercase font-bold">Dowry-Free Sunnah</span>
                    </div>
                    <h4 className="text-base font-bold text-gray-900">7. Matrimonial & Nikah Platform</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Secure Shadi portal with photo privacy locks, verified family badges, society reform rules against dahej, digital proposal system, and family approval workflow.
                    </p>
                  </div>
                  <button 
                    onClick={() => {
                      const btn = document.querySelector('button[onClick*="matrimonial"]') as HTMLButtonElement;
                      if (btn) btn.click();
                      else alert('Please click "Matrimonial" in the top navigation pills!');
                    }}
                    className="w-full py-2.5 bg-pink-50 hover:bg-pink-600 hover:text-white text-pink-800 font-bold text-xs rounded transition flex items-center justify-center space-x-2"
                  >
                    <span>{currentLanguage === 'en' ? 'Launch Matrimonial Portal' : 'वैवाहिक केंद्र खोलें'}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

              </div>
            </div>

            {/* Global ERP Download Toolbar & Recent Activity Logs */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left 6 cols: Global Reports & Downloads */}
              <div className="lg:col-span-6 bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-4">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider flex items-center space-x-2">
                    <Download className="h-4 w-4 text-[#004B23]" />
                    <span>{currentLanguage === 'en' ? 'Global Community Reports & Exports' : 'सामुदायिक रिपोर्ट एवं डेटा निर्यात'}</span>
                  </h4>
                  <span className="text-[10px] font-mono bg-gray-200 px-2 py-0.5 rounded font-bold text-gray-700">EXCEL / PDF / CSV</span>
                </div>

                <p className="text-xs text-gray-600">
                  {currentLanguage === 'en' 
                    ? 'Download verified national demographic data, monthly registration growth reports, and official committee directories.' 
                    : 'सत्यापित राष्ट्रीय आंकड़े, मासिक पंजीकरण रिपोर्ट और आधिकारिक समिति निर्देशिका डाउनलोड करें।'}
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button 
                    onClick={() => alert('Exporting Master Community ERP Census in Excel format...')}
                    className="p-3 bg-white border border-gray-200 hover:border-[#004B23] rounded-lg text-left text-xs font-bold text-gray-800 hover:text-[#004B23] transition flex items-center justify-between shadow-sm"
                  >
                    <span>📊 {currentLanguage === 'en' ? 'Master Excel Database' : 'मास्टर एक्सेल डेटा'}</span>
                    <Download className="h-3.5 w-3.5 text-gray-400" />
                  </button>

                  <button 
                    onClick={() => alert('Generating PDF Demographics Report & Committee Index...')}
                    className="p-3 bg-white border border-gray-200 hover:border-[#004B23] rounded-lg text-left text-xs font-bold text-gray-800 hover:text-[#004B23] transition flex items-center justify-between shadow-sm"
                  >
                    <span>📑 {currentLanguage === 'en' ? 'Annual PDF Report' : 'वार्षिक पीडीएफ रिपोर्ट'}</span>
                    <Download className="h-3.5 w-3.5 text-gray-400" />
                  </button>

                  <button 
                    onClick={() => alert('Exporting CSV File for GIS Mapping & Analytics...')}
                    className="p-3 bg-white border border-gray-200 hover:border-[#004B23] rounded-lg text-left text-xs font-bold text-gray-800 hover:text-[#004B23] transition flex items-center justify-between shadow-sm"
                  >
                    <span>📁 {currentLanguage === 'en' ? 'Export Analytics CSV' : 'सीएसवी डेटा निर्यात'}</span>
                    <Download className="h-3.5 w-3.5 text-gray-400" />
                  </button>

                  <button 
                    onClick={() => window.print()}
                    className="p-3 bg-white border border-gray-200 hover:border-[#004B23] rounded-lg text-left text-xs font-bold text-gray-800 hover:text-[#004B23] transition flex items-center justify-between shadow-sm"
                  >
                    <span>🖨️ {currentLanguage === 'en' ? 'Print Summary Sheet' : 'सारांश प्रिंट करें'}</span>
                    <Printer className="h-3.5 w-3.5 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Right 6 cols: Live System Activity Feed */}
              <div className="lg:col-span-6 bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-4">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider flex items-center space-x-2">
                    <Bell className="h-4 w-4 text-[#F4C430] fill-current animate-pulse" />
                    <span>{currentLanguage === 'en' ? 'Real-Time Community Activity Feed' : 'रीयल-टाइम गतिविधि सूची'}</span>
                  </h4>
                  <span className="text-[10px] font-mono bg-emerald-100 text-[#004B23] px-2 py-0.5 rounded font-bold">● LIVE SYNC</span>
                </div>

                <div className="space-y-3 max-h-48 overflow-y-auto pr-1 text-xs">
                  {[
                    { time: '2 mins ago', text: 'New Member ID RCB-2026-MP-001245 verified in Morena Tehsil committee.', icon: '✔' },
                    { time: '14 mins ago', text: 'Family Census updated for Al-Haaj Gulam Nabi household in Kailaras.', icon: '🏡' },
                    { time: '38 mins ago', text: 'New Bride Matrimonial profile registered from Bhopal district (Photo Locked).', icon: '💖' },
                    { time: '1 hour ago', text: 'District Committee Indore approved 12 welfare educational grant requests.', icon: '📚' },
                    { time: '3 hours ago', text: 'New Ward & Mohalla level committee formed in Johari Bazar, Jaipur.', icon: '📍' }
                  ].map((log, i) => (
                    <div key={i} className="bg-white p-3 rounded-lg border border-gray-150 shadow-2xs flex items-start space-x-3">
                      <span className="text-sm">{log.icon}</span>
                      <div className="flex-grow">
                        <p className="text-gray-800 font-medium leading-tight">{log.text}</p>
                        <span className="text-[10px] font-mono text-gray-400 mt-1 block">{log.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

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
                <div className="flex justify-center py-2">
                  <Turnstile
                    siteKey={(import.meta as any).env.VITE_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
                    onSuccess={(token) => setCaptchaToken(token)}
                  />
                </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                  {currentLanguage === 'en' ? 'Email or Mobile Number' : 'ईमेल या मोबाइल नंबर'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••"
                  className="w-full bg-white border border-gray-200 text-xs p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                />
                <div className="text-right mt-1">
                  <button 
                    type="button" 
                    onClick={handleForgotPassword}
                    className="text-[10px] text-gray-500 hover:text-[#004B23] hover:underline"
                  >
                    {currentLanguage === 'en' ? 'Forgot Password?' : 'पासवर्ड भूल गए?'}
                  </button>
                </div>
              </div>

              {loginError && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs font-bold rounded flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  <span>{loginError}</span>
                </div>
              )}

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
              <div className="text-[10px] text-emerald-800 bg-emerald-50 border border-emerald-100 py-1.5 px-3 rounded-lg max-w-lg mx-auto font-serif">
                {currentLanguage === 'en' ? 'Official Registering Authority:' : 'आधिकारिक पंजीकरण प्राधिकरण:'}{' '}
                <strong className="font-serif">Muslim Rangrez Neelgar Samaj Public Welfare & Educational Foundation</strong>
              </div>
              <p className="text-xs text-gray-500">
                {currentLanguage === 'en' ? 'After submission, local area committee will verify your entry to activate your digital card.' : 'पंजीकरण के बाद, डिजिटल कार्ड सक्रिय करने के लिए स्थानीय समिति आपकी प्रविष्टि की पुष्टि करेगी।'}
              </p>
            </div>

            {registeredSuccess ? (
              <div className="bg-white border border-emerald-200 text-emerald-800 p-8 rounded-2xl text-center space-y-4 shadow-xl animate-scaleIn">
                <div className="relative mx-auto w-20 h-20">
                  <div className="absolute inset-0 bg-emerald-100 rounded-full animate-ping opacity-25"></div>
                  <CheckCircle2 className="h-20 w-20 text-emerald-600 relative z-10" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-xl text-gray-900">{currentLanguage === 'en' ? 'Registration Submitted Successfully!' : 'पंजीकरण सफलतापूर्वक जमा किया गया!'}</h4>
                  <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold">
                    <Activity className="h-3 w-3" />
                    <span>{currentLanguage === 'en' ? 'Status: Pending Committee Verification' : 'स्थिति: समिति सत्यापन लंबित'}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm max-w-xs mx-auto">
                  {currentLanguage === 'en' 
                    ? 'Your application is being processed. You will be notified once your membership is approved by the committee.' 
                    : 'आपके आवेदन पर कार्रवाई की जा रही है। समिति द्वारा आपकी सदस्यता स्वीकृत होने पर आपको सूचित किया जाएगा।'}
                </p>
                <div className="pt-4 flex flex-col items-center space-y-2">
                  <div className="flex items-center space-x-2 text-[#004B23] font-bold text-sm animate-pulse">
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    <span>{currentLanguage === 'en' ? 'Redirecting to Dashboard...' : 'डैशबोर्ड पर पुनर्निर्देशित किया जा रहा है...'}</span>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? 'Full Name' : 'पूरा नाम'} <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mohammad Salim Rangrez"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-gray-200 text-xs p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                    />
                  </div>

                  {/* Father's Name */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      ★ {currentLanguage === 'en' ? "Father's Name" : 'पिता का नाम'}
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
                      ★ {currentLanguage === 'en' ? 'Gender' : 'लिंग'}
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
                      ★ {currentLanguage === 'en' ? 'Date of Birth' : 'जन्म तिथि'}
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                      className="w-full bg-white border border-gray-200 text-xs p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                    />
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      ★ {currentLanguage === 'en' ? 'Mobile Number (Primary)' : 'मोबाइल नंबर (प्राथमिक)'}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value, whatsapp: formData.whatsapp || e.target.value })}
                      className="w-full bg-white border border-gray-200 text-xs p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                    />
                  </div>

                  {/* WhatsApp Number */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? 'WhatsApp Number (Optional)' : 'व्हाट्सएप नंबर (वैकल्पिक)'}
                    </label>
                    <input
                      type="tel"
                      placeholder="+91"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full bg-white border border-gray-200 text-xs p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                    />
                  </div>

                  {/* WhatsApp Available */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? 'WhatsApp Available?' : 'व्हाट्सएप उपलब्ध है?'}
                    </label>
                    <select
                      value={formData.whatsappAvailable ? 'yes' : 'no'}
                      onChange={(e) => setFormData({ ...formData, whatsappAvailable: e.target.value === 'yes' })}
                      className="w-full bg-white border border-gray-200 text-xs p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                    >
                      <option value="yes">{currentLanguage === 'en' ? 'Yes (हाँ)' : 'हाँ'}</option>
                      <option value="no">{currentLanguage === 'en' ? 'No (नहीं)' : 'नहीं'}</option>
                    </select>
                  </div>

                  {/* Show WhatsApp Publicly */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? 'Show WhatsApp publicly?' : 'व्हाट्सएप सार्वजनिक रूप से दिखाएं?'}
                    </label>
                    <select
                      value={formData.showWhatsAppPublicly ? 'yes' : 'no'}
                      onChange={(e) => setFormData({ ...formData, showWhatsAppPublicly: e.target.value === 'yes' })}
                      className="w-full bg-white border border-gray-200 text-xs p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                    >
                      <option value="no">{currentLanguage === 'en' ? 'No (नहीं) - Private' : 'नहीं - निजी'}</option>
                      <option value="yes">{currentLanguage === 'en' ? 'Yes (हाँ) - Public' : 'हाँ - सार्वजनिक'}</option>
                    </select>
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

                  {/* State */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      ★ {currentLanguage === 'en' ? 'State' : 'राज्य'}
                    </label>
                    <select
                      required
                      value={formData.stateId}
                      onChange={(e) => setFormData({ ...formData, stateId: e.target.value, districtId: '', tehsilId: '' })}
                      className="w-full bg-white border border-gray-200 text-xs p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                    >
                      <option value="">{currentLanguage === 'en' ? '-- Select State --' : '-- राज्य चुनें --'}</option>
                      {INDIAN_STATES.map(s => (
                        <option key={s.id} value={s.id}>{currentLanguage === 'en' ? s.nameEn : s.nameHi}</option>
                      ))}
                    </select>
                  </div>

                  {/* District */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      ★ {currentLanguage === 'en' ? 'District' : 'जिला'}
                    </label>
                    <select
                      required
                      disabled={!formData.stateId}
                      value={formData.districtId}
                      onChange={(e) => setFormData({ ...formData, districtId: e.target.value, tehsilId: '' })}
                      className="w-full bg-white border border-gray-200 text-xs p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23] disabled:opacity-50"
                    >
                      <option value="">{currentLanguage === 'en' ? '-- Select District --' : '-- जिला चुनें --'}</option>
                      {DISTRICTS.filter(d => d.stateId === formData.stateId).map(d => (
                        <option key={d.id} value={d.id}>{currentLanguage === 'en' ? d.nameEn : d.nameHi}</option>
                      ))}
                    </select>
                  </div>

                  {/* Tehsil / Area */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      ★ {currentLanguage === 'en' ? 'Tehsil / Block' : 'तहसील / ब्लॉक'}
                    </label>
                    <select
                      required
                      disabled={!formData.districtId}
                      value={formData.tehsilId}
                      onChange={(e) => setFormData({ ...formData, tehsilId: e.target.value })}
                      className="w-full bg-white border border-gray-200 text-xs p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23] disabled:opacity-50"
                    >
                      <option value="">{currentLanguage === 'en' ? '-- Select Tehsil --' : '-- तहसील चुनें --'}</option>
                      {TEHSILS.filter(t => t.districtId === formData.districtId).map(t => (
                        <option key={t.id} value={t.id}>{currentLanguage === 'en' ? t.nameEn : t.nameHi}</option>
                      ))}
                    </select>
                  </div>

                  {/* City / Village */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      ★ {currentLanguage === 'en' ? 'City / Village' : 'शहर / गाँव'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={currentLanguage === 'en' ? 'e.g. Morena Town' : 'जैसे, मुरैना टाउन'}
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-white border border-gray-200 text-xs p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="flex items-center text-[10px] font-bold text-gray-700 uppercase mb-1 space-x-2">
                      <span>{currentLanguage === 'en' ? "Email Address" : 'ईमेल'} <span className="text-red-600">*</span></span>
                      {formData.emailVerified && (
                        <span className="text-[9px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded flex items-center space-x-0.5">
                          <CheckCircle className="h-3 w-3" />
                          <span>VERIFIED</span>
                        </span>
                      )}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. salim@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-gray-200 text-xs p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? "Password" : 'पासवर्ड'} <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="password"
                      required
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full bg-white border border-gray-200 text-xs p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                    />
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? "Confirm Password" : 'पासवर्ड की पुष्टि'} <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="password"
                      required
                      placeholder="Re-enter your password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
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

                  {/* Aadhaar (Optional) */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1 flex items-center space-x-1">
                      <span>{currentLanguage === 'en' ? 'Aadhaar Number (Optional / Encrypted)' : 'आधार नंबर (वैकल्पिक)'}</span>
                      <Shield className="h-3 w-3 text-emerald-600" />
                    </label>
                    <input
                      type="text"
                      maxLength={12}
                      placeholder="XXXX XXXX XXXX"
                      value={formData.aadhaar}
                      onChange={(e) => setFormData({ ...formData, aadhaar: e.target.value })}
                      className="w-full bg-white border border-gray-200 text-xs p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23] font-mono"
                    />
                  </div>

                  {/* Address */}
                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? 'Full Residential Address (Ward / Mohalla / Landmark)' : 'पूर्ण आवासीय पता (वार्ड / मोहल्ला)'}
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Enter complete house number, street, ward, mohalla and pincode..."
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-white border border-gray-200 text-xs p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                    />
                  </div>

                  {/* Emergency Contact Name */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? 'Emergency Contact Name' : 'आपातकालीन संपर्क नाम'}
                    </label>
                    <input
                      type="text"
                      placeholder="Relative or Family Member Name"
                      value={formData.emergencyContactName}
                      onChange={(e) => setFormData({ ...formData, emergencyContactName: e.target.value })}
                      className="w-full bg-white border border-gray-200 text-xs p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                    />
                  </div>

                  {/* Emergency Contact Phone */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? 'Emergency Contact Phone' : 'आपातकालीन फोन नंबर'}
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.emergencyContactPhone}
                      onChange={(e) => setFormData({ ...formData, emergencyContactPhone: e.target.value })}
                      className="w-full bg-white border border-gray-200 text-xs p-3 rounded focus:outline-none focus:ring-1 focus:ring-[#004B23]"
                    />
                  </div>

                  {/* Document Upload */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? 'Document Upload (ID / Address Proof)' : 'पहचान या पता प्रमाण पत्र अपलोड'}
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="file"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            setDocumentFile(file);
                            setFormData({ ...formData, documentName: file.name });
                          }
                        }}
                        className="w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 file:text-[#004B23] hover:file:bg-emerald-100 bg-white border border-gray-200 rounded p-1.5"
                      />
                    </div>
                  </div>

                  {/* Photo Upload */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">
                      {currentLanguage === 'en' ? 'Profile Photo Upload (Passport Size)' : 'पासपोर्ट साइज फोटो अपलोड'}
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setPhotoFile(file);
                          setFormData({ ...formData, photoUrl: file.name });
                        }
                      }}
                      className="w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-amber-50 file:text-amber-800 hover:file:bg-amber-100 bg-white border border-gray-200 rounded p-1.5"
                    />
                  </div>
                </div>

                {/* 🔒 VERIFICATION GATEWAY (Email & Mobile) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" id="registration_verification_gateway">
                  {/* Card 1: Email Verification */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xl flex flex-col h-full ring-1 ring-gray-900/5 hover:shadow-2xl transition-shadow duration-300"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="p-2.5 bg-blue-50 rounded-xl">
                          <Mail className="h-6 w-6 text-blue-600" />
                        </div>
                        <h4 className="font-bold text-slate-900 tracking-tight text-sm">
                          {currentLanguage === 'en' ? 'Email Verification' : 'ईमेल सत्यापन'}
                        </h4>
                      </div>
                      <div className="shrink-0">
                        {formData.emailVerified ? (
                          <motion.span 
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 shadow-sm border border-emerald-200"
                          >
                            <CheckCircle2 className="h-3 w-3" />
                            {currentLanguage === 'en' ? 'Verified' : 'सत्यापित'}
                          </motion.span>
                        ) : (
                          <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 border border-rose-200">
                            <XCircle className="h-3 w-3" />
                            {currentLanguage === 'en' ? 'Not Verified' : 'सत्यापित नहीं'}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex-grow flex flex-col justify-between space-y-4">
                      <div className="space-y-1.5">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Registered Identity</p>
                        <p className="text-xs font-semibold text-gray-800 break-all bg-gray-50/80 p-3 rounded-lg border border-gray-100/50">
                          {formData.email || (currentLanguage === 'en' ? 'No email provided' : 'ईमेल प्रदान नहीं किया गया')}
                        </p>
                      </div>
                      
                      {!formData.emailVerified ? (
                        <div className="pt-2">
                          <p className="text-[11px] text-gray-500 mb-4 leading-relaxed italic">
                            {currentLanguage === 'en' ? 'Required: Please verify your email to activate membership credentials.' : 'अनिवार्य: सदस्यता क्रेडेंशियल्स सक्रिय करने के लिए अपना ईमेल सत्यापित करें।'}
                          </p>
                          <button
                            type="button"
                            disabled={emailVerifyTimer > 0 || !formData.email || !formData.name}
                            onClick={handleSendEmailVerification}
                            className="w-full py-3 bg-[#004B23] text-white text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-[#00381a] transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-900/10 disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                          >
                            {emailVerifyTimer > 0 ? (
                              <>
                                <RefreshCw className="h-3 w-3 animate-spin" />
                                <span>{currentLanguage === 'en' ? 'Resend in' : 'पुनः भेजें'} {emailVerifyTimer}s</span>
                              </>
                            ) : (
                              <span>{currentLanguage === 'en' ? 'Send Verification Link' : 'सत्यापन लिंक भेजें'}</span>
                            )}
                          </button>
                        </div>
                      ) : (
                        <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100 flex items-center space-x-3 mt-auto">
                          <div className="p-2 bg-white rounded-full shadow-sm text-emerald-600">
                            <Check className="h-5 w-5" />
                          </div>
                          <p className="text-[11px] font-bold text-emerald-800 leading-tight">
                            {currentLanguage === 'en' ? 'Authentication successful! Identity confirmed.' : 'प्रमाणीकरण सफल! पहचान की पुष्टि हो गई।'}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>

                  {/* Card 2: Mobile Verification */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xl flex flex-col h-full ring-1 ring-gray-900/5 hover:shadow-2xl transition-shadow duration-300"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="p-2.5 bg-emerald-50 rounded-xl">
                          <Phone className="h-6 w-6 text-[#004B23]" />
                        </div>
                        <h4 className="font-bold text-slate-900 tracking-tight text-sm">
                          {currentLanguage === 'en' ? 'Mobile Verification' : 'मोबाइल सत्यापन'}
                        </h4>
                      </div>
                      <div className="shrink-0">
                        {formData.otpVerified ? (
                          <motion.span 
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 shadow-sm border border-emerald-200"
                          >
                            <CheckCircle2 className="h-3 w-3" />
                            {currentLanguage === 'en' ? 'Verified' : 'सत्यापित'}
                          </motion.span>
                        ) : (
                          <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 border border-amber-200">
                            <AlertTriangle className="h-3 w-3" />
                            {currentLanguage === 'en' ? 'Optional' : 'वैकल्पिक'}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex-grow flex flex-col justify-between space-y-4">
                      <div className="space-y-1.5">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Primary Contact</p>
                        <p className="text-xs font-semibold text-gray-800 bg-gray-50/80 p-3 rounded-lg border border-gray-100/50">
                          {formData.phone || (currentLanguage === 'en' ? 'No number provided' : 'नंबर प्रदान नहीं किया गया')}
                        </p>
                      </div>

                      {!formData.otpVerified ? (
                        <div className="space-y-4 pt-2">
                          <AnimatePresence mode="wait">
                            {!formData.otpSent ? (
                              <motion.div
                                key="send-otp"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="space-y-3"
                              >
                                <p className="text-[11px] text-gray-500 leading-relaxed italic">
                                  {currentLanguage === 'en' ? 'Optional: Enhanced security with Mobile OTP verification.' : 'वैकल्पिक: मोबाइल ओटीपी सत्यापन के साथ बेहतर सुरक्षा।'}
                                </p>
                                <button
                                  type="button"
                                  disabled={otpTimer > 0 || !formData.phone}
                                  onClick={handleSendOTP}
                                  className="w-full py-3 bg-[#0B132B] text-white text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-900 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-slate-900/10 disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                                >
                                  {otpTimer > 0 ? (
                                    <>
                                      <RefreshCw className="h-3 w-3 animate-spin" />
                                      <span>{currentLanguage === 'en' ? 'Resend in' : 'पुनः भेजें'} {otpTimer}s</span>
                                    </>
                                  ) : (
                                    <span>{currentLanguage === 'en' ? 'Generate OTP' : 'ओटीपी जनरेट करें'}</span>
                                  )}
                                </button>
                              </motion.div>
                            ) : (
                              <motion.div
                                key="verify-otp"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="space-y-4"
                              >
                                <div className="space-y-2">
                                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block text-center">Enter 6-Digit Code</label>
                                  <div className="flex items-center space-x-2">
                                    <input
                                      type="text"
                                      maxLength={6}
                                      placeholder="••••••"
                                      value={formData.otpInput}
                                      onChange={(e) => setFormData({ ...formData, otpInput: e.target.value })}
                                      className="flex-grow p-3 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B23] font-mono tracking-[0.5em] text-center bg-gray-50 font-bold"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => setFormData({ ...formData, otpSent: false })}
                                      className="p-3 bg-gray-100 text-gray-500 rounded-xl hover:bg-gray-200 transition"
                                    >
                                      <RefreshCw className="h-4 w-4" />
                                    </button>
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  onClick={handleVerifyOTP}
                                  className="w-full py-3 bg-[#004B23] text-white text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-[#00381a] transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-900/10"
                                >
                                  {currentLanguage === 'en' ? 'Verify OTP' : 'ओटीपी सत्यापित करें'}
                                </button>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100 flex items-center space-x-3 mt-auto">
                          <div className="p-2 bg-white rounded-full shadow-sm text-emerald-600">
                            <Check className="h-5 w-5" />
                          </div>
                          <p className="text-[11px] font-bold text-emerald-800 leading-tight">
                            {currentLanguage === 'en' ? 'Mobile bound successfully! Fingerprint secured.' : 'मोबाइल सफलतापूर्वक जुड़ गया! फ़िंगरप्रिंट सुरक्षित।'}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>

                <div className="flex justify-center pt-2">
                  <Turnstile
                    siteKey={(import.meta as any).env.VITE_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
                    onSuccess={(token) => setCaptchaToken(token)}
                  />
                </div>

                <div className="space-y-4 pt-6 border-t border-gray-100">
                  <button
                    type="submit"
                    disabled={registering || !formData.emailVerified || !captchaToken}
                    className="w-full py-4 bg-[#004B23] text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-[#00381a] transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-xl shadow-emerald-900/20 disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed flex items-center justify-center space-x-3 group"
                  >
                    {registering ? (
                      <>
                        <RefreshCw className="h-4 w-4 animate-spin" />
                        <span>{currentLanguage === 'en' ? 'Transmitting Data...' : 'डाटा भेजा जा रहा है...'}</span>
                      </>
                    ) : (
                      <>
                        <span>{currentLanguage === 'en' ? 'Submit Registration Details' : 'पंजीकरण विवरण जमा करें'}</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  
                  {!formData.emailVerified && (
                    <p className="text-center text-[10px] text-rose-600 font-black uppercase tracking-widest bg-rose-50 py-2.5 rounded-xl border border-rose-100">
                      {currentLanguage === 'en' 
                        ? '⛔ Action Required: Complete Email Verification' 
                        : '⛔ कार्रवाई आवश्यक: ईमेल सत्यापन पूरा करें'}
                    </p>
                  )}

                  {!captchaToken && formData.emailVerified && (
                    <p className="text-center text-[10px] text-amber-600 font-black uppercase tracking-widest bg-amber-50 py-2.5 rounded-xl border border-amber-100">
                      {currentLanguage === 'en' 
                        ? '⚠️ Action Required: Complete CAPTCHA Verification' 
                        : '⚠️ कार्रवाई आवश्यक: कैप्चा सत्यापन पूरा करें'}
                    </p>
                  )}
                </div>

                {/* Removed Volunteer Assistance Card as per user request */}
              </form>
            )}
          </div>
        )}

        {/* 3. MEMBER PORTAL DASHBOARD (SIMULATED FOR LOGGED IN) */}
        {activeSubTab === 'dashboard' && isLoggedIn && (
          <div className="space-y-8 animate-fadeIn" id="dashboard_sub_module">
            {/* 7 Specific Dashboard Statistics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
              <div className="bg-emerald-50/70 p-3.5 rounded-xl border border-emerald-200 shadow-2xs">
                <p className="text-[9px] text-emerald-800 font-bold uppercase font-mono">{currentLanguage === 'en' ? 'Registered Members' : 'पंजीकृत सदस्य'}</p>
                <h4 className="text-lg font-black text-[#004B23] mt-0.5">14,250+</h4>
              </div>
              <div className="bg-blue-50/70 p-3.5 rounded-xl border border-blue-200 shadow-2xs">
                <p className="text-[9px] text-blue-800 font-bold uppercase font-mono">{currentLanguage === 'en' ? 'Verified Members' : 'सत्यापित सदस्य'}</p>
                <h4 className="text-lg font-black text-blue-900 mt-0.5">13,100+</h4>
              </div>
              <div className="bg-amber-50/70 p-3.5 rounded-xl border border-amber-200 shadow-2xs">
                <p className="text-[9px] text-amber-800 font-bold uppercase font-mono">{currentLanguage === 'en' ? 'Pending Verification' : 'सत्यापन लंबित'}</p>
                <h4 className="text-lg font-black text-amber-900 mt-0.5">1,150</h4>
              </div>
              <div className="bg-purple-50/70 p-3.5 rounded-xl border border-purple-200 shadow-2xs">
                <p className="text-[9px] text-purple-800 font-bold uppercase font-mono">{currentLanguage === 'en' ? 'Active Families' : 'सक्रिय परिवार'}</p>
                <h4 className="text-lg font-black text-purple-900 mt-0.5">3,420+</h4>
              </div>
              <div className="bg-teal-50/70 p-3.5 rounded-xl border border-teal-200 shadow-2xs">
                <p className="text-[9px] text-teal-800 font-bold uppercase font-mono">{currentLanguage === 'en' ? 'Total Areas' : 'कुल क्षेत्र'}</p>
                <h4 className="text-lg font-black text-teal-900 mt-0.5">850+ Nodes</h4>
              </div>
              <div className="bg-rose-50/70 p-3.5 rounded-xl border border-rose-200 shadow-2xs">
                <p className="text-[9px] text-rose-800 font-bold uppercase font-mono">{currentLanguage === 'en' ? 'Matrimonial Profiles' : 'वैवाहिक प्रोफाइल'}</p>
                <h4 className="text-lg font-black text-rose-900 mt-0.5">640+ Active</h4>
              </div>
              <div className="bg-gray-100 p-3.5 rounded-xl border border-gray-250 shadow-2xs">
                <p className="text-[9px] text-gray-700 font-bold uppercase font-mono">{currentLanguage === 'en' ? 'Community Services' : 'सामुदायिक सेवाएं'}</p>
                <h4 className="text-lg font-black text-gray-900 mt-0.5">45+ Projects</h4>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Box: Welcome panel & Stats */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
                  <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-[#004B23] text-[#F4C430] rounded-full">
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
              <div className="max-w-md mx-auto relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#004B23] via-[#00381a] to-[#0B132B] text-white p-6 shadow-2xl border-2 border-[#F4C430]" id="digital_id_card_visual">
                {/* Islamic Pattern Background Grid Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(#F4C430_1px,transparent_1px)] [background-size:12px_12px] opacity-10"></div>
                
                {/* ID Card Header */}
                <div className="relative z-10 flex justify-between items-start border-b border-white/10 pb-4 mb-4">
                  <div>
                    <h4 className="font-serif font-extrabold text-xs tracking-wider text-[#F4C430]">RANGREZ COMMUNITY BHARAT</h4>
                    <p className="text-[8px] tracking-widest text-gray-300 uppercase font-mono">National Registered NGO Portal</p>
                  </div>
                  <span className="text-[10px] font-bold text-[#F4C430] border border-[#F4C430]/30 px-1.5 py-0.5 rounded uppercase tracking-widest bg-[#F4C430]/10 font-mono">
                    MEMBER
                  </span>
                </div>

                {/* Card Body */}
                <div className="relative z-10 grid grid-cols-12 gap-4 items-center">
                  
                  {/* Photo Frame */}
                  <div className="col-span-4 flex justify-center">
                    <div className="w-20 h-24 rounded-lg bg-gray-800 border-2 border-[#F4C430]/40 overflow-hidden flex items-center justify-center">
                      <img
                        src={IMAGES.avatars.placeholder}
                        alt="Profile Photo"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>

                  {/* Profile Details fields */}
                  <div className="col-span-5 space-y-1 text-[11px] font-mono leading-tight">
                    <p className="text-[9px] text-gray-400">NAME (नाम)</p>
                    <p className="font-bold text-[#F4C430] uppercase">{memberProfile.name}</p>
                    
                    <p className="text-[9px] text-gray-400 mt-1">FATHER (पिता)</p>
                    <p className="font-semibold text-gray-200">{memberProfile.fatherName}</p>
                    
                    <p className="text-[9px] text-gray-400 mt-1">AREA / TEHSIL</p>
                    <p className="font-semibold text-gray-200">{memberProfile.area} ({memberProfile.district})</p>
                  </div>

                  {/* QR Security Token & Stamp */}
                  <div className="col-span-3 flex flex-col items-center space-y-2">
                    {/* Simulated High-Res QR code box */}
                    <div className="p-1.5 bg-white rounded-lg shadow-md border-2 border-[#F4C430]">
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
                  <span className="text-[#F4C430] font-bold">BLOOD: {memberProfile.bloodGroup}</span>
                </div>
              </div>

              {/* Action: Download Card & Options */}
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <button
                  onClick={() => alert('Digital membership card dispatches to download pool successfully!')}
                  className="px-5 py-2.5 bg-[#004B23] hover:bg-[#00381a] text-white text-xs font-bold uppercase tracking-wider rounded shadow-md transition inline-flex items-center space-x-2"
                >
                  <Download className="h-4 w-4 text-[#F4C430]" />
                  <span>{currentLanguage === 'en' ? 'Download PDF ID' : 'पीडीएफ कार्ड डाउनलोड'}</span>
                </button>

                <button
                  onClick={() => alert('Wallet-friendly compact RFID card format rendered for Apple/Google Wallet storage!')}
                  className="px-5 py-2.5 bg-[#F4C430] hover:bg-[#e0b020] text-[#0B132B] text-xs font-bold uppercase tracking-wider rounded shadow-md transition inline-flex items-center space-x-2"
                >
                  <QrCode className="h-4 w-4 text-[#004B23]" />
                  <span>{currentLanguage === 'en' ? 'Wallet Card Version' : 'वॉलेट कार्ड रूप'}</span>
                </button>

                <button
                  onClick={() => window.print()}
                  className="px-5 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-bold uppercase tracking-wider rounded shadow-sm transition inline-flex items-center space-x-2"
                >
                  <Printer className="h-4 w-4 text-gray-600" />
                  <span>{currentLanguage === 'en' ? 'Print Card' : 'कार्ड प्रिंट करें'}</span>
                </button>

                <button
                  onClick={() => alert('Reprint / Correction request dispatched to admin secretariat review queue!')}
                  className="px-5 py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 text-xs font-bold uppercase tracking-wider rounded shadow-2xs transition inline-flex items-center space-x-2"
                >
                  <ShieldCheck className="h-4 w-4 text-rose-600" />
                  <span>{currentLanguage === 'en' ? 'Request Reprint' : 'पुनः प्रिंट अनुरोध'}</span>
                </button>
              </div>

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
              {directoryData
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
                      {m.phone && (
                        <p className="text-[10px] text-gray-400 mt-1">
                          {currentLanguage === 'en' ? 'Mobile' : 'मोबाइल'}: {m.phone ? m.phone.replace(/(\d{5})\d{5}/, '$1XXXXX') : 'N/A'}
                        </p>
                      )}
                    </div>

                    <div className="border-t border-gray-100 pt-3 flex justify-between items-center text-[10px] font-mono">
                      <span className="text-[#F4C430] font-bold">Blood: {m.bloodGroup}</span>
                      <span className="text-emerald-700 font-bold uppercase flex items-center space-x-1">
                        <CheckCircle className="h-3 w-3" />
                        <span>Verified</span>
                      </span>
                    </div>

                    {/* Chat on WhatsApp Button */}
                    {m.showWhatsAppPublicly && m.whatsapp && (
                      <a
                        href={`https://wa.me/${m.whatsapp.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 bg-[#25D366] hover:bg-[#128C7E] text-white text-[10px] font-bold uppercase tracking-wider rounded flex items-center justify-center gap-2 transition shadow-sm"
                      >
                        <MessageSquare className="h-3.5 w-3.5" />
                        <span>{currentLanguage === 'en' ? 'Chat on WhatsApp' : 'व्हाट्सएप पर चैट'}</span>
                      </a>
                    )}
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* 5. ADMIN CONSOLE & VERIFICATION SECRETARIAT */}
        {activeSubTab === 'admin' && (
          <div className="space-y-8 animate-fadeIn" id="admin_console_module">
            <div className="hidden">
              <Turnstile
                siteKey={(import.meta as any).env.VITE_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
                onSuccess={(token) => setCaptchaToken(token)}
              />
            </div>
            {/* Admin Header Ribbon */}
            <div className="bg-[#0B132B] text-white p-6 rounded-2xl shadow-xl border-t-4 border-t-[#F4C430] flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="space-y-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <span className="bg-[#F4C430] text-[#0B132B] font-extrabold text-[10px] uppercase px-2.5 py-0.5 rounded font-mono">SECRETARIAT ACCESS</span>
                  <span className="text-emerald-400 font-bold text-xs">● ONLINE (राष्ट्रीय प्रशासनिक बोर्ड)</span>
                </div>
                <h3 className="text-xl font-serif font-extrabold tracking-tight">
                  {currentLanguage === 'en' ? 'Community ERP Administrative Console & Verification Hub' : 'सामुदायिक ईआरपी प्रशासन एवं सत्यापन केंद्र'}
                </h3>
                <p className="text-xs text-gray-400">
                  {currentLanguage === 'en' 
                    ? 'Manage member verification queue, family census data, area committees, matrimonial approvals, and global ERP data exports.' 
                    : 'सदस्य सत्यापन, पारिवारिक जनगणना, क्षेत्रीय समितियां, वैवाहिक प्रोफाइल और डेटा निर्यात का प्रबंधन करें।'}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => alert('Database backup JSON generated and saved to administrator archive!')}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-lg border border-white/20 transition flex items-center space-x-1.5"
                >
                  <Download className="h-3.5 w-3.5 text-[#F4C430]" />
                  <span>{currentLanguage === 'en' ? 'Backup JSON' : 'बैकअप सुरक्षित करें'}</span>
                </button>
                <button 
                  onClick={() => setActiveSubTab('overview')}
                  className="px-4 py-2 bg-[#F4C430] hover:bg-[#e0b020] text-[#0B132B] text-xs font-bold rounded-lg transition"
                >
                  {currentLanguage === 'en' ? 'Exit Admin' : 'बाहर जाएं'}
                </button>
              </div>
            </div>

            {/* Admin Notification Banner */}
            {adminNotification && (
              <div className="bg-amber-50 border border-amber-300 text-amber-900 p-4 rounded-xl flex items-center justify-between text-xs shadow-2xs animate-fadeIn">
                <div className="flex items-center space-x-3">
                  <Bell className="h-5 w-5 text-amber-600 animate-bounce" />
                  <span className="font-bold">{adminNotification}</span>
                </div>
                <button onClick={() => setAdminNotification(null)} className="text-gray-500 hover:text-gray-800 font-bold ml-4">✕</button>
              </div>
            )}

            {/* Admin Sub-Navigation Pills */}
            <div className="flex flex-wrap border-b border-gray-200 gap-2 pb-3">
              <button
                onClick={() => setAdminTab('queue')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition flex items-center space-x-2 ${
                  adminTab === 'queue' ? 'bg-[#004B23] text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <FileCheck className="h-4 w-4 text-[#F4C430]" />
                <span>{currentLanguage === 'en' ? 'Verification Queue' : 'सत्यापन कतार'} ({verificationQueue.length})</span>
              </button>

              <button
                onClick={() => setAdminTab('members')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition flex items-center space-x-2 ${
                  adminTab === 'members' ? 'bg-[#004B23] text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Users className="h-4 w-4" />
                <span>{currentLanguage === 'en' ? 'Member Management' : 'सदस्य प्रबंधन'}</span>
              </button>

              <button
                onClick={() => setAdminTab('families')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition flex items-center space-x-2 ${
                  adminTab === 'families' ? 'bg-[#004B23] text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <User className="h-4 w-4" />
                <span>{currentLanguage === 'en' ? 'Family Census Management' : 'पारिवारिक जनगणना'}</span>
              </button>

              <button
                onClick={() => setAdminTab('areas')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition flex items-center space-x-2 ${
                  adminTab === 'areas' ? 'bg-[#004B23] text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <MapPin className="h-4 w-4" />
                <span>{currentLanguage === 'en' ? 'Area Committees (11 Levels)' : 'क्षेत्रीय समितियां'}</span>
              </button>

              <button
                onClick={() => setAdminTab('matrimonial')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition flex items-center space-x-2 ${
                  adminTab === 'matrimonial' ? 'bg-[#004B23] text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Heart className="h-4 w-4 text-rose-500" />
                <span>{currentLanguage === 'en' ? 'Matrimonial Shadi Desk' : 'वैवाहिक प्रबंधन'}</span>
              </button>

              <button
                onClick={() => setAdminTab('reports')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition flex items-center space-x-2 ${
                  adminTab === 'reports' ? 'bg-[#004B23] text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Activity className="h-4 w-4 text-emerald-400" />
                <span>{currentLanguage === 'en' ? 'Reports & Analytics' : 'रिपोर्ट एवं विश्लेषण'}</span>
              </button>

              <button
                onClick={() => setAdminTab('website_settings')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition flex items-center space-x-2 ${
                  adminTab === 'website_settings' ? 'bg-[#004B23] text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Settings className="h-4 w-4 text-blue-500" />
                <span>{currentLanguage === 'en' ? 'Website Settings' : 'वेबसाइट सेटिंग्स'}</span>
              </button>

              <button
                onClick={() => setAdminTab('volunteers')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition flex items-center space-x-2 ${
                  adminTab === 'volunteers' ? 'bg-[#004B23] text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <UserPlus className="h-4 w-4 text-amber-500" />
                <span>{currentLanguage === 'en' ? 'Support Volunteers' : 'स्वयंसेवक प्रबंधन'}</span>
              </button>
            </div>

            {/* TAB 1: VERIFICATION QUEUE */}
            {adminTab === 'queue' && (
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{currentLanguage === 'en' ? 'Pending Member & Card Verification Queue' : 'लंबित सदस्य सत्यापन कतार'}</h4>
                    <p className="text-xs text-gray-500">Review document uploads, Aadhaar encryption verification, and approve digital ID activation.</p>
                  </div>
                  <span className="text-xs font-mono bg-amber-100 text-amber-800 px-3 py-1 rounded font-bold">{verificationQueue.length} Pending Actions</span>
                </div>

                {verificationQueue.length === 0 ? (
                  <div className="text-center py-12 text-gray-400 text-xs font-medium">
                    ✔ All pending verification applications have been reviewed and processed!
                  </div>
                ) : (
                  <div className="space-y-4">
                    {verificationQueue.map((item) => (
                      <div key={item.id} className="bg-gray-50 p-5 rounded-xl border border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-[#004B23] transition">
                        <div className="space-y-1.5">
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-bold text-[#004B23] bg-emerald-100 px-2.5 py-0.5 rounded font-mono">{item.id}</span>
                            <span className="text-sm font-extrabold text-gray-900">{item.name}</span>
                            <span className="text-[10px] bg-gray-200 text-gray-700 font-bold px-2 py-0.5 rounded">{item.bloodGroup}</span>
                          </div>
                          <p className="text-xs text-gray-600">Father: <strong>{item.fatherName}</strong> | Occupation: <strong>{item.occupation}</strong></p>
                          <p className="text-xs text-gray-500 font-medium">📍 Area: <strong className="text-[#004B23]">{item.area}, {item.district}</strong> | Phone: <strong className="font-mono">{item.phone}</strong></p>
                          <div className="flex items-center space-x-3 text-[11px] text-emerald-800 pt-1">
                            <span>📄 Doc: <strong>{item.docType}</strong></span>
                            <span>📅 Submitted: <strong>{item.submittedDate}</strong></span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 w-full md:w-auto justify-end">
                          <button
                            onClick={() => {
                              setVerificationQueue(prev => prev.filter(q => q.id !== item.id));
                              setAdminNotification(`✔ Approved Member ID ${item.id} (${item.name}). Digital ID card activated!`);
                            }}
                            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded shadow-sm transition flex items-center space-x-1"
                          >
                            <CheckCircle className="h-3.5 w-3.5" />
                            <span>{currentLanguage === 'en' ? 'Approve & Issue ID' : 'स्वीकार करें'}</span>
                          </button>

                          <button
                            onClick={() => alert(`Opening document review viewer for ${item.docType} (ID: ${item.id})...`)}
                            className="px-3 py-2 bg-white border border-gray-300 hover:border-[#004B23] text-gray-700 text-xs font-bold rounded transition"
                          >
                            <span>🔍 Review Doc</span>
                          </button>

                          <button
                            onClick={() => {
                              const reason = prompt('Enter reason for correction/rejection:', 'Photo blurry or document unreadable');
                              if (reason) {
                                setVerificationQueue(prev => prev.filter(q => q.id !== item.id));
                                setAdminNotification(`⚠️ Application ${item.id} sent back for correction: "${reason}"`);
                              }
                            }}
                            className="px-3 py-2 bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 text-xs font-bold rounded transition"
                          >
                            <span>Reject / Edit</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: MEMBER MANAGEMENT */}
            {adminTab === 'members' && (
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{currentLanguage === 'en' ? 'Verified Member Database & Directory Control' : 'सत्यापित सदस्य डेटाबेस एवं निर्देशिका नियंत्रण'}</h4>
                    <p className="text-xs text-gray-500">Manage 13,100+ active members across India. Filter, export, edit profile permissions, or suspend accounts.</p>
                  </div>
                  <button onClick={() => alert('Exporting complete verified member database to CSV/Excel...')} className="px-4 py-2 bg-[#004B23] text-white text-xs font-bold rounded flex items-center space-x-1.5 shadow-sm">
                    <Download className="h-3.5 w-3.5 text-[#F4C430]" />
                    <span>Export All Excel</span>
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-100 text-gray-700 text-[10px] font-bold uppercase tracking-wider border-b border-gray-200">
                        <th className="p-3">ID / Card Number</th>
                        <th className="p-3">Member Name</th>
                        <th className="p-3">District & Area</th>
                        <th className="p-3">Occupation</th>
                        <th className="p-3">Blood Group</th>
                        <th className="p-3">Status</th>
                        <th className="p-3 text-right">Admin Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-150 text-xs">
                      {directoryData.map((m) => (
                        <tr key={m.id} className="hover:bg-gray-50 transition">
                          <td className="p-3 font-mono font-bold text-[#004B23]">{m.id}</td>
                          <td className="p-3 font-bold text-gray-900">{m.name}</td>
                          <td className="p-3 text-gray-600">{m.area}, {m.district}</td>
                          <td className="p-3 text-gray-600">{m.occupation}</td>
                          <td className="p-3"><span className="px-2 py-0.5 bg-amber-50 text-amber-900 font-bold rounded text-[10px]">{m.bloodGroup}</span></td>
                          <td className="p-3"><span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded text-[10px]">VERIFIED</span></td>
                          <td className="p-3 text-right space-x-2">
                            <button onClick={() => alert(`Editing profile data for ${m.name}...`)} className="text-blue-600 hover:underline font-bold text-[11px]">Edit</button>
                            <button onClick={() => alert(`Account ID ${m.id} temporarily suspended by admin.`)} className="text-rose-600 hover:underline font-bold text-[11px]">Suspend</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 3: FAMILY CENSUS MANAGEMENT */}
            {adminTab === 'families' && (
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{currentLanguage === 'en' ? 'Family Census & Household Registrations' : 'पारिवारिक जनगणना एवं घर पंजीकरण प्रबंधन'}</h4>
                    <p className="text-xs text-gray-500">Monitor household records, income categories (EWS/Middle Class), educational statistics, and demographic reports.</p>
                  </div>
                  <button 
                    onClick={() => {
                      const btn = document.querySelector('button[onClick*="membership-census"]') as HTMLButtonElement;
                      if (btn) btn.click();
                    }}
                    className="px-4 py-2 bg-purple-600 text-white text-xs font-bold rounded shadow-sm hover:bg-purple-700 transition"
                  >
                    Launch Census Portal
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                    <p className="text-[10px] font-bold text-purple-800 uppercase font-mono">Total Households Registered</p>
                    <h4 className="text-2xl font-black text-gray-900 mt-1">3,420+ Families</h4>
                    <p className="text-xs text-purple-700 mt-1">Average Household Size: 5.2 Members</p>
                  </div>
                  <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                    <p className="text-[10px] font-bold text-emerald-800 uppercase font-mono">EWS & Welfare Eligible</p>
                    <h4 className="text-2xl font-black text-gray-900 mt-1">840 Families</h4>
                    <p className="text-xs text-emerald-700 mt-1">Eligible for educational scholarships & grants</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <p className="text-[10px] font-bold text-blue-800 uppercase font-mono">Family Genogram Trees</p>
                    <h4 className="text-2xl font-black text-gray-900 mt-1">2,890+ Mapped</h4>
                    <p className="text-xs text-blue-700 mt-1">Generational lineage linked digitally</p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: AREA COMMITTEES */}
            {adminTab === 'areas' && (
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{currentLanguage === 'en' ? 'Regional Area Committees & Office Bearer Governance' : 'क्षेत्रीय समितियां एवं पदाधिकारी प्रबंधन'}</h4>
                    <p className="text-xs text-gray-500">Manage 11 hierarchical regional levels: Country, State, Division, District, Tehsil, Block, City, Town, Village, Ward & Mohalla.</p>
                  </div>
                  <button 
                    onClick={() => {
                      const btn = document.querySelector('button[onClick*="areas"]') as HTMLButtonElement;
                      if (btn) btn.click();
                    }}
                    className="px-4 py-2 bg-[#004B23] text-white text-xs font-bold rounded shadow-sm hover:bg-[#00381a] transition"
                  >
                    Open 11-Level Directory
                  </button>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-700 space-y-2">
                  <p className="font-bold text-gray-900">📍 Active Regional Infrastructure Summary:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li><strong>National Body (Country):</strong> All India Muslim Rangrez Neelgar Foundation Headquarters</li>
                    <li><strong>State Chapters (18 States):</strong> Madhya Pradesh, Rajasthan, Uttar Pradesh, Maharashtra, Gujarat, Delhi NCR, etc.</li>
                    <li><strong>Districts & Divisions (120+ Nodes):</strong> Indore, Bhopal, Jaipur, Jodhpur, Lucknow, Kanpur, Mumbai, Ahmedabad, etc.</li>
                    <li><strong>Tehsils, Blocks & Villages (700+ Nodes):</strong> Kailaras, Morena, Sabalgarh, Sikar, Churu, Tonk, etc.</li>
                  </ul>
                </div>
              </div>
            )}

            {/* TAB 5: MATRIMONIAL SHADI DESK */}
            {adminTab === 'matrimonial' && (
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{currentLanguage === 'en' ? 'Matrimonial Shadi Portal Governance & Photo Privacy Locks' : 'वैवाहिक केंद्र प्रशासन एवं फोटो गोपनीयता नियंत्रण'}</h4>
                    <p className="text-xs text-gray-500">Enforce society reform rules (dowry-free Nikah / Sunnah marriage), verify family backgrounds, and manage photo unlock requests.</p>
                  </div>
                  <button 
                    onClick={() => {
                      const btn = document.querySelector('button[onClick*="matrimonial"]') as HTMLButtonElement;
                      if (btn) btn.click();
                    }}
                    className="px-4 py-2 bg-rose-600 text-white text-xs font-bold rounded shadow-sm hover:bg-rose-700 transition"
                  >
                    Launch Shadi Platform
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-rose-50 rounded-xl border border-rose-200 space-y-2">
                    <p className="font-bold text-rose-900">💖 Verified Shadi Profiles Active:</p>
                    <p className="text-2xl font-black text-gray-900">640+ Candidates</p>
                    <p className="text-rose-700">All candidates verified against national census registry.</p>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 space-y-2">
                    <p className="font-bold text-amber-900">🔒 Photo Privacy Lock Requests:</p>
                    <p className="text-2xl font-black text-gray-900">18 Pending</p>
                    <p className="text-amber-800">Requires mutual family consent before unblurring bride photos.</p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 6: REPORTS & ANALYTICS */}
            {adminTab === 'reports' && (
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{currentLanguage === 'en' ? 'Enterprise ERP Analytics & Master Data Exports' : 'सामुदायिक ईआरपी विश्लेषणात्मक रिपोर्ट एवं डेटा निर्यात'}</h4>
                    <p className="text-xs text-gray-500">Generate consolidated PDF reports, Excel database dumps, and view demographic charts.</p>
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-100 text-[#004B23] px-2.5 py-1 rounded font-bold">● SYSTEM HEALTH 100%</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 space-y-3">
                    <h5 className="font-bold text-xs uppercase text-gray-800">📑 Annual Consolidated Report (PDF)</h5>
                    <p className="text-xs text-gray-600">Includes population demographics, literacy growth, regional committee index, and welfare financial audits.</p>
                    <button onClick={() => alert('Generating 48-page Annual Consolidated PDF Report...')} className="w-full py-2 bg-[#004B23] text-white text-xs font-bold rounded transition">Download PDF Report</button>
                  </div>
                  <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 space-y-3">
                    <h5 className="font-bold text-xs uppercase text-gray-800">📊 Master Member Database (Excel / CSV)</h5>
                    <p className="text-xs text-gray-600">Export all 14,250+ member records with area filters, blood group directory, and contact numbers.</p>
                    <button onClick={() => alert('Exporting master database sheet to Excel (.xlsx)...')} className="w-full py-2 bg-blue-600 text-white text-xs font-bold rounded transition">Export Excel Sheet</button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 7: WEBSITE SETTINGS (TOP NOTICE MANAGEMENT) */}
            {adminTab === 'website_settings' && (
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{currentLanguage === 'en' ? 'Top Notice & Scrolling Notification Management' : 'शीर्ष सूचना एवं स्क्रॉलिंग अधिसूचना प्रबंधन'}</h4>
                    <p className="text-xs text-gray-500">Add, edit, or reorder urgent community notifications and announcements.</p>
                  </div>
                  <button onClick={() => alert('New notice template added!')} className="px-4 py-2 bg-[#004B23] text-white text-xs font-bold rounded flex items-center space-x-1.5">
                    <Plus className="h-3.5 w-3.5" />
                    <span>{currentLanguage === 'en' ? 'Add New Notice' : 'नई सूचना जोड़ें'}</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {[
                    { id: 1, textEn: 'URGENT: Community ID Card mandatory for Matrimonial registration 2026', color: 'bg-rose-50', status: 'Active' },
                    { id: 2, textEn: 'SCHOLARSHIPS 2026: Merit-based educational scholarships open for registration', color: 'bg-emerald-50', status: 'Active' }
                  ].map(notice => (
                    <div key={notice.id} className={`p-4 rounded-xl border border-gray-200 flex items-center justify-between ${notice.color}`}>
                      <div className="flex items-center gap-3">
                        <Grid className="h-4 w-4 text-gray-400 cursor-move" />
                        <div>
                          <p className="text-xs font-bold text-gray-900">{notice.textEn}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[10px] bg-white border border-gray-200 px-1.5 py-0.5 rounded text-emerald-700 font-bold uppercase tracking-widest">● {notice.status}</span>
                            <span className="text-[10px] text-gray-500 font-medium">Priority: High</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-white/50 rounded-lg text-gray-600 transition"><Settings className="h-4 w-4" /></button>
                        <button className="p-2 hover:bg-rose-100 rounded-lg text-rose-600 transition"><XCircle className="h-4 w-4" /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 8: VOLUNTEER MANAGEMENT */}
            {adminTab === 'volunteers' && (
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{currentLanguage === 'en' ? 'Support Volunteers & Helpdesk Staff' : 'सहायता स्वयंसेवक एवं हेल्पडेस्क स्टाफ'}</h4>
                    <p className="text-xs text-gray-500">Assign volunteers to specific States, Districts, or Tehsil areas for localized member support.</p>
                  </div>
                  <button onClick={() => alert('Opening volunteer assignment wizard...')} className="px-4 py-2 bg-amber-500 text-white text-xs font-bold rounded flex items-center space-x-1.5 hover:bg-amber-600 transition">
                    <UserPlus className="h-3.5 w-3.5" />
                    <span>{currentLanguage === 'en' ? 'Add Volunteer' : 'स्वयंसेवक जोड़ें'}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: 'Community Volunteer', level: 'District (Morena)', phone: '+91 78799 40869', status: 'Active' },
                    { name: 'Zonal Coordinator', level: 'Division (Gwalior)', phone: '+91 99999 88888', status: 'Active' },
                    { name: 'National Desk', level: 'National (Bharat)', phone: '+91 11111 22222', status: 'Active' }
                  ].map((v, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-3 hover:border-[#004B23] transition">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-[#004B23]">
                            <User className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-xs font-black text-gray-900">{v.name}</p>
                            <p className="text-[10px] text-emerald-700 font-bold uppercase tracking-widest">{v.level}</p>
                          </div>
                        </div>
                        <span className="text-[9px] bg-emerald-100 text-emerald-800 font-black px-1.5 py-0.5 rounded">ONLINE</span>
                      </div>
                      <div className="pt-2 border-t border-gray-200 flex justify-between items-center">
                        <span className="text-[10px] font-mono text-gray-500">{v.phone}</span>
                        <div className="flex gap-2">
                          <button className="text-[10px] font-bold text-blue-600 hover:underline">Edit</button>
                          <button className="text-[10px] font-bold text-rose-600 hover:underline">Delete</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
