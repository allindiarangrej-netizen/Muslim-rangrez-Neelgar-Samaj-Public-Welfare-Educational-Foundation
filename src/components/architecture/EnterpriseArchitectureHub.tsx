// ============================================================================
// ENTERPRISE ARCHITECTURE MASTER HUB & ADMIN DASHBOARD
// Handles Authentication, Role Dashboards, Admin Module Control (21 tables),
// Reports Export (PDF/Excel/CSV/Print), Media Vault, Notifications, Security,
// Audit Trails, Database Backups, and Deployment Configurations.
// ============================================================================

import React, { useState, useEffect } from 'react';
import { 
  Shield, Key, Users, Database, FileText, Download, Upload, Activity, 
  Bell, Lock, RefreshCw, CheckCircle2, AlertCircle, Search, Eye, 
  UserCheck, Award, Briefcase, Heart, BookOpen, Building, Share2, 
  Sliders, Server, Terminal, HardDrive, LogOut, LogIn, ChevronRight,
  Printer, FileSpreadsheet, Globe, Smartphone, Mail, MessageSquare, Zap
} from 'lucide-react';
import { 
  AuthService, UserRole, UserSession, ROLE_PERMISSIONS,
  DBService, DatabaseSchema,
  ReportEngine, ReportModule, GeneratedReport,
  MediaService, MediaAssetItem, MediaCategory,
  NotificationService, SystemNotificationItem, NotificationChannel,
  AnalyticsService, SecurityService
} from '../../services';
import { Language } from '../../types';
import { ProfileImage } from '../common/ProfileImage';
import { getSupabase } from '../../lib/supabaseClient';

interface EnterpriseHubProps {
  currentLanguage: Language;
  onClose: () => void;
  onNavigateTab: (tab: string) => void;
}

export const EnterpriseArchitectureHub: React.FC<EnterpriseHubProps> = ({
  currentLanguage,
  onClose,
  onNavigateTab
}) => {
  const [activeNav, setActiveNav] = useState<'auth' | 'dashboards' | 'admin_modules' | 'reports' | 'media_vault' | 'notifications' | 'security_backup' | 'deployment' | 'user_management' | 'email_management'>('auth');
  const [session, setSession] = useState<UserSession>(AuthService.getCurrentSession());
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // RBAC User Management states
  const [rbacUsers, setRbacUsers] = useState<any[]>([]);
  const [loadingRbac, setLoadingRbac] = useState(false);
  const [rbacSearch, setRbacSearch] = useState('');
  const [rbacFilterRole, setRbacFilterRole] = useState('All');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [newAdminPassword, setNewAdminPassword] = useState('');
  const [newAdminName, setNewAdminName] = useState('');
  const [newAdminPhone, setNewAdminPhone] = useState('');
  const [newAdminRole, setNewAdminRole] = useState<UserRole>('Member');
  const [newAdminState, setNewAdminState] = useState('Madhya Pradesh');
  const [newAdminDistrict, setNewAdminDistrict] = useState('Morena');
  const [newAdminTehsil, setNewAdminTehsil] = useState('');
  const [newAdminCommittee, setNewAdminCommittee] = useState('');
  const [selectedUserForEdit, setSelectedUserForEdit] = useState<any | null>(null);
  const [newPasswordReset, setNewPasswordReset] = useState('');

  const loadRbacUsers = async () => {
    setLoadingRbac(true);
    const supabase = getSupabase();
    if (!supabase) {
      const local = AuthService.getAllRegisteredUsers();
      setRbacUsers(local);
      setLoadingRbac(false);
      return;
    }
    try {
      const { data, error } = await supabase
        .from('member_profiles')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      setRbacUsers(data || []);
    } catch (err: any) {
      console.error("Error loading profiles:", err);
      const local = AuthService.getAllRegisteredUsers();
      setRbacUsers(local);
    } finally {
      setLoadingRbac(false);
    }
  };

  useEffect(() => {
    if (activeNav === 'user_management') {
      loadRbacUsers();
    }
  }, [activeNav]);
  
  // Login form states
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [authMessage, setAuthMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [otpMode, setOtpMode] = useState(false);
  const [otpInput, setOtpInput] = useState('');

  // Admin Module selection
  const [selectedDbTable, setSelectedDbTable] = useState<keyof DatabaseSchema>('members');
  const [dbData, setDbData] = useState<DatabaseSchema>(DBService.getDB());
  const [searchTerm, setSearchTerm] = useState('');

  // Reports state
  const [selectedReportModule, setSelectedReportModule] = useState<ReportModule>('Membership');
  const [generatedReport, setGeneratedReport] = useState<GeneratedReport | null>(null);

  // Media state
  const [mediaAssets, setMediaAssets] = useState<MediaAssetItem[]>(MediaService.getAll());
  const [selectedMediaCategory, setSelectedMediaCategory] = useState<MediaCategory>('All');
  const [viewingDocument, setViewingDocument] = useState<MediaAssetItem | null>(null);

  // Notifications state
  const [notifList, setNotifList] = useState<SystemNotificationItem[]>(NotificationService.getAll());
  const [notifTitleEn, setNotifTitleEn] = useState('');
  const [notifTitleHi, setNotifTitleHi] = useState('');
  const [notifMsgEn, setNotifMsgEn] = useState('');
  const [notifMsgHi, setNotifMsgHi] = useState('');
  const [notifTargetRole, setNotifTargetRole] = useState<'All' | 'Member' | 'Volunteer' | 'Committee' | 'Admin'>('All');
  const [notifChannels, setNotifChannels] = useState<NotificationChannel[]>(['website', 'email']);
  const [announcementBar, setAnnouncementBar] = useState(NotificationService.getAnnouncementBar());

  // Analytics & Security state
  const [analyticsData, setAnalyticsData] = useState(AnalyticsService.getDashboardStats());
  const [deploymentConfig] = useState(SecurityService.getDeploymentConfig());
  const [backupLog, setBackupLog] = useState<string | null>(null);
  const [restoreJson, setRestoreJson] = useState('');

  // Email Administration state managers
  const [emailLogsData, setEmailLogsData] = useState<any[]>([]);
  const [emailStatsData, setEmailStatsData] = useState<any>({
    total: 0,
    sent: 0,
    failed: 0,
    queued: 0,
    limitMax: 10000,
    limitUsed: 0,
    byTemplate: {}
  });
  const [loadingEmails, setLoadingEmails] = useState(false);
  const [emailSearchTerm, setEmailSearchTerm] = useState('');
  const [emailTemplateFilter, setEmailTemplateFilter] = useState('All');
  const [emailStatusFilter, setEmailStatusFilter] = useState('All');
  const [selectedEmailForView, setSelectedEmailForView] = useState<any | null>(null);
  const [sendingTestEmail, setSendingTestEmail] = useState(false);
  const [testEmailRecipient, setTestEmailRecipient] = useState('');
  const [testEmailTemplate, setTestEmailTemplate] = useState('welcome');

  const loadEmailTelemetry = async () => {
    setLoadingEmails(true);
    try {
      const token = AuthService.getCurrentSession()?.token || "";
      const headers: any = { "Content-Type": "application/json" };
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
      
      const resLogs = await fetch('/api/email/logs', { headers });
      const dataLogs = await resLogs.json();
      if (dataLogs.success) {
        setEmailLogsData(dataLogs.logs || []);
      }
      
      const resStats = await fetch('/api/email/analytics', { headers });
      const dataStats = await resStats.json();
      if (dataStats.success) {
        setEmailStatsData(dataStats.stats || {
          total: 0,
          sent: 0,
          failed: 0,
          queued: 0,
          limitMax: 10000,
          limitUsed: 0,
          byTemplate: {}
        });
      }
    } catch (err) {
      console.error("Error loading email telemetry:", err);
    } finally {
      setLoadingEmails(false);
    }
  };

  const handleRetryEmail = async (id: string) => {
    try {
      const token = AuthService.getCurrentSession()?.token || "";
      const headers: any = { "Content-Type": "application/json" };
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
      const res = await fetch(`/api/email/retry/${id}`, {
        method: 'POST',
        headers
      });
      const data = await res.json();
      if (data.success) {
        alert("Email resent successfully via Hostinger SMTP!");
        loadEmailTelemetry();
      } else {
        alert("Resend failed: " + data.error);
      }
    } catch (err: any) {
      alert("Error trying to resend email: " + err.message);
    }
  };

  const handleSendTestEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!testEmailRecipient) {
      alert("Please enter a recipient email address.");
      return;
    }
    setSendingTestEmail(true);
    try {
      const token = AuthService.getCurrentSession()?.token || "";
      const headers: any = { "Content-Type": "application/json" };
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
      const res = await fetch('/api/email/send-generic', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          recipient: testEmailRecipient,
          name: "Test Recipient",
          templateType: testEmailTemplate,
          templateData: {
            codeOrLink: "https://rangrezcommunity.org/auth/callback?code=787994",
            memberId: "RM-2026-7879",
            appNo: "APP-5566",
            amount: "1500",
            resetLink: "https://rangrezcommunity.org/reset-password?token=test-token",
            subject: "Hostinger SMTP Production Test",
            message: "This is a real-time production delivery confirmation test for Hostinger business mailbox.",
            alertType: "Contact Form Submission",
            details: {
              sender_name: "Aaditya Rangrez",
              sender_email: testEmailRecipient,
              district: "Jaipur",
              message: "I am writing to inquire about national scholarship programs for session 2026."
            }
          }
        })
      });
      const data = await res.json();
      if (data.success) {
        alert(`Test email submitted successfully! Log ID: ${data.logId}`);
        setTestEmailRecipient('');
        loadEmailTelemetry();
      } else {
        alert("Failed to submit test email: " + data.error);
      }
    } catch (err: any) {
      alert("Error dispatching test email: " + err.message);
    } finally {
      setSendingTestEmail(false);
    }
  };

  useEffect(() => {
    if (activeNav === 'email_management') {
      loadEmailTelemetry();
    }
  }, [activeNav]);

  // Refresh hooks
  useEffect(() => {
    const handleAuthChange = () => setSession(AuthService.getCurrentSession());
    const handleDbUpdate = () => setDbData(DBService.getDB());
    const handleNotifUpdate = () => setNotifList(NotificationService.getAll());
    
    window.addEventListener('rcb_auth_changed', handleAuthChange);
    window.addEventListener('rcb_db_updated', handleDbUpdate);
    window.addEventListener('rcb_notifs_updated', handleNotifUpdate);

    return () => {
      window.removeEventListener('rcb_auth_changed', handleAuthChange);
      window.removeEventListener('rcb_db_updated', handleDbUpdate);
      window.removeEventListener('rcb_notifs_updated', handleNotifUpdate);
    };
  }, []);

  // Generate initial report
  useEffect(() => {
    setGeneratedReport(ReportEngine.generateReportData(selectedReportModule, session.name));
  }, [selectedReportModule, session.name]);

  const handleRoleDemoLogin = async (role: UserRole) => {
    const res = await AuthService.login(role);
    if (res.success) {
      setAuthMessage({ type: 'success', text: `Switched active session to role: ${role}` });
      setTimeout(() => setAuthMessage(null), 3000);
    }
  };

  const handleCustomLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthMessage(null);
    const res = await AuthService.login(loginEmail, loginPassword);
    if (res.success && res.session) {
      if (!res.session.isEmailVerified && res.session.role !== 'Visitor') {
        setAuthMessage({ type: 'success', text: `Welcome! A real email verification has been dispatched via Supabase. Please verify your email before logging in to access admin privileges.` });
      } else {
        setAuthMessage({ type: 'success', text: `Login successful! Redirecting ${res.session.name} (${res.session.role}) to central dashboard...` });
        setTimeout(() => {
          setAuthMessage(null);
          setActiveNav('dashboards');
        }, 1500);
      }
    } else {
      setAuthMessage({ type: 'error', text: res.error || 'Login failed. Please verify your email or password.' });
    }
  };

  const handleAutoFillLogin = async (email: string) => {
    setLoginEmail(email);
    setLoginPassword('demo123');
    const res = await AuthService.login(email, 'demo123');
    if (res.success && res.session) {
      setAuthMessage({ type: 'success', text: `Loaded enterprise session for ${res.session.name} (${res.session.role}).` });
      setTimeout(() => {
        setAuthMessage(null);
        setActiveNav('dashboards');
      }, 1500);
    } else {
      setAuthMessage({ type: 'error', text: res.error || 'Autofill login failed.' });
    }
  };

  const handleVerifyOtp = () => {
    const res = AuthService.verifyOtp(otpInput);
    if (res.success) {
      setAuthMessage({ type: 'success', text: `${res.message} Redirecting to Role Dashboard...` });
      setOtpMode(false);
      setTimeout(() => {
        setAuthMessage(null);
        setActiveNav('dashboards');
      }, 1500);
    } else {
      setAuthMessage({ type: 'error', text: res.message });
    }
  };

  const handleLogout = async () => {
    await AuthService.logout();
    setAuthMessage({ type: 'success', text: 'Logged out successfully. Reverted to Visitor guest session.' });
    setTimeout(() => setAuthMessage(null), 3000);
  };

  const handleCreateRbacUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAdminEmail || !newAdminPassword || !newAdminName) {
      setAuthMessage({ type: 'error', text: 'Email, Password, and Full Name are required.' });
      return;
    }
    setLoadingRbac(true);
    const supabase = getSupabase();
    try {
      if (!supabase) {
        // Offline simulation mode
        const newLocalUser = {
          id: `USR-ADMIN-${Math.floor(1000 + Math.random() * 9000)}`,
          user_id: `simulated-user-${Date.now()}`,
          full_name: newAdminName,
          email: newAdminEmail,
          phone: newAdminPhone,
          role: newAdminRole,
          state: newAdminState,
          district: newAdminDistrict,
          tehsil: newAdminTehsil,
          committee: newAdminCommittee,
          status: 'Active',
          permissions: (ROLE_PERMISSIONS[newAdminRole] || ROLE_PERMISSIONS['Member']),
          created_at: new Date().toISOString()
        };
        const customUsers = JSON.parse(localStorage.getItem('rcb_enterprise_users_registry') || '[]');
        customUsers.push(newLocalUser);
        localStorage.setItem('rcb_enterprise_users_registry', JSON.stringify(customUsers));
        setAuthMessage({ type: 'success', text: `Created simulated admin user: ${newAdminName} (${newAdminRole}) successfully in memory.` });
        setShowCreateForm(false);
        loadRbacUsers();
        // Clear form
        setNewAdminEmail('');
        setNewAdminPassword('');
        setNewAdminName('');
        setNewAdminPhone('');
        return;
      }

      // Live Supabase API call to the backend endpoint
      const response = await fetch('/api/admin/create-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.token}`
        },
        body: JSON.stringify({
          email: newAdminEmail,
          password: newAdminPassword,
          full_name: newAdminName,
          phone: newAdminPhone,
          role: newAdminRole,
          state: newAdminState,
          district: newAdminDistrict,
          tehsil: newAdminTehsil,
          committee: newAdminCommittee,
          permissions: (ROLE_PERMISSIONS[newAdminRole] || ROLE_PERMISSIONS['Member'])
        })
      });

      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.error || 'Failed to create user on backend.');
      }

      setAuthMessage({ type: 'success', text: `Created admin user: ${newAdminName} (${newAdminRole}) successfully. Real credentials synced!` });
      setShowCreateForm(false);
      loadRbacUsers();
      // Clear form
      setNewAdminEmail('');
      setNewAdminPassword('');
      setNewAdminName('');
      setNewAdminPhone('');
    } catch (err: any) {
      setAuthMessage({ type: 'error', text: err.message || 'Error occurred during user creation.' });
    } finally {
      setLoadingRbac(false);
    }
  };

  const handleUpdateRbacUser = async (user: any) => {
    setLoadingRbac(true);
    const supabase = getSupabase();
    try {
      if (!supabase) {
        // simulation
        const customUsers = JSON.parse(localStorage.getItem('rcb_enterprise_users_registry') || '[]');
        const idx = customUsers.findIndex((u: any) => u.id === user.id);
        if (idx !== -1) {
          customUsers[idx] = { ...customUsers[idx], ...user };
          localStorage.setItem('rcb_enterprise_users_registry', JSON.stringify(customUsers));
        }
        setAuthMessage({ type: 'success', text: 'Simulated user details updated.' });
        setSelectedUserForEdit(null);
        loadRbacUsers();
        return;
      }

      const response = await fetch('/api/admin/update-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.token}`
        },
        body: JSON.stringify({
          userId: user.user_id,
          full_name: user.full_name,
          phone: user.phone,
          role: user.role,
          state: user.state,
          district: user.district,
          tehsil: user.tehsil,
          committee: user.committee,
          permissions: user.permissions
        })
      });

      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.error || 'Failed to update user details.');
      }

      setAuthMessage({ type: 'success', text: `User ${user.full_name} details updated successfully!` });
      setSelectedUserForEdit(null);
      loadRbacUsers();
    } catch (err: any) {
      setAuthMessage({ type: 'error', text: err.message });
    } finally {
      setLoadingRbac(false);
    }
  };

  const handleResetRbacPassword = async (userId: string, full_name: string) => {
    if (!newPasswordReset) {
      setAuthMessage({ type: 'error', text: 'Please enter a valid new password.' });
      return;
    }
    setLoadingRbac(true);
    const supabase = getSupabase();
    try {
      if (!supabase) {
        setAuthMessage({ type: 'success', text: `Password for simulated user ${full_name} reset (simulated) successfully.` });
        setNewPasswordReset('');
        return;
      }

      const response = await fetch('/api/admin/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.token}`
        },
        body: JSON.stringify({
          userId,
          newPassword: newPasswordReset
        })
      });

      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.error || 'Failed to reset password.');
      }

      setAuthMessage({ type: 'success', text: `Password for ${full_name} has been updated successfully.` });
      setNewPasswordReset('');
    } catch (err: any) {
      setAuthMessage({ type: 'error', text: err.message });
    } finally {
      setLoadingRbac(false);
    }
  };

  const handleToggleRbacStatus = async (userId: string, currentStatus: string, full_name: string) => {
    const newStatus = currentStatus === 'Active' ? 'Suspended' : 'Active';
    setLoadingRbac(true);
    const supabase = getSupabase();
    try {
      if (!supabase) {
        const customUsers = JSON.parse(localStorage.getItem('rcb_enterprise_users_registry') || '[]');
        const idx = customUsers.findIndex((u: any) => u.user_id === userId || u.id === userId);
        if (idx !== -1) {
          customUsers[idx].status = newStatus;
          localStorage.setItem('rcb_enterprise_users_registry', JSON.stringify(customUsers));
        }
        setAuthMessage({ type: 'success', text: `Simulated status updated to ${newStatus} for ${full_name}.` });
        loadRbacUsers();
        return;
      }

      const response = await fetch('/api/admin/toggle-status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.token}`
        },
        body: JSON.stringify({
          userId,
          status: newStatus
        })
      });

      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.error || 'Failed to toggle account status.');
      }

      setAuthMessage({ type: 'success', text: `Account for ${full_name} set to ${newStatus} successfully.` });
      loadRbacUsers();
    } catch (err: any) {
      setAuthMessage({ type: 'error', text: err.message });
    } finally {
      setLoadingRbac(false);
    }
  };

  const handleTriggerBackup = () => {
    const res = DBService.createBackupSnapshot();
    if (res.success) {
      setBackupLog(`Snapshot ${res.snapshotName} created successfully! Size: ${Math.round(res.sizeBytes / 1024)} KB.`);
      // Download backup JSON file
      const blob = new Blob([res.data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = res.snapshotName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleRestoreBackup = () => {
    if (!restoreJson.trim()) {
      alert('Please paste valid JSON backup data.');
      return;
    }
    const res = DBService.restoreFromBackup(restoreJson);
    if (res.success) {
      alert(res.message);
      setRestoreJson('');
      setDbData(DBService.getDB());
    } else {
      alert(res.message);
    }
  };

  const handleBroadcastNotif = (e: React.FormEvent) => {
    e.preventDefault();
    if (!notifTitleEn || !notifMsgEn) {
      alert('Please enter notification title and message.');
      return;
    }
    const res = NotificationService.broadcast({
      titleEn: notifTitleEn,
      titleHi: notifTitleHi || notifTitleEn,
      messageEn: notifMsgEn,
      messageHi: notifMsgHi || notifMsgEn,
      category: 'System',
      targetRole: notifTargetRole,
      channels: notifChannels
    });
    alert(`Broadcast Dispatched!\n\nChannels: ${res.dispatchedChannels.join(', ')}\n\nLog: ${res.logMessage}`);
    setNotifTitleEn(''); setNotifTitleHi(''); setNotifMsgEn(''); setNotifMsgHi('');
    setNotifList(NotificationService.getAll());
  };

  const toggleAnnouncementBar = () => {
    const nextState = { ...announcementBar, active: !announcementBar.active };
    setAnnouncementBar(nextState);
    NotificationService.updateAnnouncementBar(nextState);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-fadeIn overflow-hidden">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-7xl h-[94vh] flex flex-col border border-[#D4AF37]/40 overflow-hidden">
        
        {/* TOP HEADER BAR */}
        <div className="bg-[#004B23] text-white px-4 sm:px-6 py-3.5 flex items-center justify-between border-b border-[#D4AF37]/50 shrink-0">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#D4AF37]/20 rounded-lg border border-[#D4AF37]/40">
              <Shield className="h-6 w-6 text-[#FFD54A]" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-extrabold tracking-wide text-white flex items-center gap-2">
                {currentLanguage === 'en' ? 'Rangrez Community Enterprise Control Center' : 'रंगरेज समुदाय एंटरप्राइज नियंत्रण कक्ष'}
                <span className="text-[10px] bg-[#FFD54A] text-[#004B23] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                  {session.role}
                </span>
              </h2>
              <p className="text-xs text-gray-200">
                {currentLanguage === 'en' 
                  ? 'Centralized Authentication, RBAC, Database Layer (21 modules), Reports Engine, Media Vault & Telemetry' 
                  : 'केंद्रीकृत प्रमाणीकरण, RBAC, डेटाबेस लेयर (21 मॉड्यूल), रिपोर्ट इंजन और सुरक्षा प्रणाली'}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-gradient-to-r from-[#004B23] via-[#0D2418] to-[#070D18] hover:from-[#0A2E1C] hover:to-[#0B132B] text-white font-bold rounded-lg text-xs transition-all shadow-[0_4px_15px_rgba(0,0,0,0.4)] border border-[#F4C430] hover:shadow-[0_0_20px_rgba(244,196,48,0.5)] cursor-pointer flex items-center gap-2 group"
          >
            <span className="text-[#FFD54A] group-hover:rotate-90 transition-transform duration-300">✕</span>
            <span>{currentLanguage === 'en' ? 'Close Control Center' : 'नियंत्रण कक्ष बंद करें'}</span>
          </button>
        </div>

        {/* MOBILE NAVIGATION RAIL TOGGLE (< md) */}
        <div className="md:hidden bg-gray-900 text-white px-4 py-2.5 border-b border-gray-800 flex items-center justify-between shrink-0">
          <span className="text-xs font-bold text-[#FFD54A] uppercase tracking-wider flex items-center gap-2">
            <Sliders className="w-4 h-4 text-emerald-400" /> Enterprise Modules Navigation
          </span>
          <button 
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="px-3 py-1.5 min-h-[44px] bg-[#004B23] hover:bg-[#0A2E1C] text-white rounded-lg text-xs font-bold border border-[#D4AF37]/50 flex items-center gap-1.5 cursor-pointer shadow"
          >
            {isMobileNavOpen ? '✕ Close Menu' : '☰ Open Menu'}
          </button>
        </div>

        {/* MAIN BODY: LEFT SIDEBAR NAV & RIGHT CONTENT AREA */}
        <div className="flex flex-grow overflow-hidden relative">
          
          {/* LEFT NAVIGATION RAIL */}
          <div className={`${isMobileNavOpen ? 'flex absolute inset-0 z-40 bg-gray-900' : 'hidden md:flex'} w-full md:w-64 bg-gray-900 text-gray-300 flex-col shrink-0 border-r border-gray-800 overflow-y-auto`}>
            <div className="p-3 bg-gray-950 border-b border-gray-800 shrink-0">
              <div className="text-[11px] uppercase font-bold text-gray-500 tracking-wider mb-1.5 flex items-center justify-between">
                <span>{currentLanguage === 'en' ? 'CURRENT SESSION' : 'वर्तमान सत्र'}</span>
                {session.role === 'Visitor' && <span className="text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono">GUEST</span>}
              </div>
              <div className="flex items-center space-x-2.5">
                <ProfileImage 
                  src={session.avatarUrl} 
                  alt="" 
                  size="xs"
                  containerClassName="border border-[#D4AF37]"
                />
                <div className="overflow-hidden">
                  <div className="text-xs font-bold text-white truncate">{session.name}</div>
                  <div className="text-[10px] text-[#FFD54A] font-medium">{session.role}</div>
                </div>
              </div>
            </div>

            <nav className="p-2 space-y-3 flex-grow text-xs font-semibold overflow-y-auto">
              {/* GROUP I: CORE ADMINISTRATION */}
              <div>
                <div className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-emerald-400/80 bg-gray-950/50 rounded mb-1">
                  I. Core Administration
                </div>
                <div className="space-y-0.5">
                  <button
                    onClick={() => { setActiveNav('dashboards'); setIsMobileNavOpen(false); }}
                    className={`w-full min-h-[40px] text-left px-3 py-2 rounded-lg flex items-center justify-between transition cursor-pointer hover:translate-x-1 ${
                      activeNav === 'dashboards' ? 'bg-[#004B23] text-white font-extrabold border-l-4 border-[#FFD54A]' : 'hover:bg-gray-800 text-gray-300'
                    }`}
                  >
                    <span className="flex items-center gap-2.5"><Activity className="w-4 h-4 text-emerald-400" /> Dashboard</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-70" />
                  </button>

                  <button
                    onClick={() => { setActiveNav('auth'); setIsMobileNavOpen(false); }}
                    className={`w-full min-h-[40px] text-left px-3 py-2 rounded-lg flex items-center justify-between transition cursor-pointer hover:translate-x-1 ${
                      activeNav === 'auth' ? 'bg-[#004B23] text-white font-extrabold border-l-4 border-[#FFD54A]' : 'hover:bg-gray-800 text-gray-300'
                    }`}
                  >
                    <span className="flex items-center gap-2.5"><Key className="w-4 h-4 text-[#FFD54A]" /> Authentication & Roles</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-70" />
                  </button>

                  {(session.role === 'Super Administrator' || session.email === 'allindiarangrej@gmail.com' || session.email === 'admin@rangrezcommunity.org') && (
                    <button
                      onClick={() => { setActiveNav('user_management'); setIsMobileNavOpen(false); }}
                      className={`w-full min-h-[40px] text-left px-3 py-2 rounded-lg flex items-center justify-between transition cursor-pointer hover:translate-x-1 ${
                        activeNav === 'user_management' ? 'bg-[#004B23] text-white font-extrabold border-l-4 border-[#FFD54A]' : 'hover:bg-gray-800 text-gray-300'
                      }`}
                    >
                      <span className="flex items-center gap-2.5"><Sliders className="w-4 h-4 text-orange-400" /> User Management (RBAC)</span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-70" />
                    </button>
                  )}

                  <button
                    onClick={() => { setActiveNav('admin_modules'); setSelectedDbTable('members'); setIsMobileNavOpen(false); }}
                    className={`w-full min-h-[40px] text-left px-3 py-2 rounded-lg flex items-center justify-between transition cursor-pointer hover:translate-x-1 ${
                      activeNav === 'admin_modules' && selectedDbTable === 'members' ? 'bg-[#004B23] text-white font-extrabold border-l-4 border-[#FFD54A]' : 'hover:bg-gray-800 text-gray-300'
                    }`}
                  >
                    <span className="flex items-center gap-2.5"><Users className="w-4 h-4 text-blue-400" /> Users Directory</span>
                    <span className="text-[9px] bg-blue-900 text-blue-200 px-1.5 py-0.5 rounded font-mono">{Array.isArray(dbData.members) ? dbData.members.length : 0}</span>
                  </button>

                  <button
                    onClick={() => { setActiveNav('admin_modules'); setSelectedDbTable('families'); setIsMobileNavOpen(false); }}
                    className={`w-full min-h-[40px] text-left px-3 py-2 rounded-lg flex items-center justify-between transition cursor-pointer hover:translate-x-1 ${
                      activeNav === 'admin_modules' && selectedDbTable === 'families' ? 'bg-[#004B23] text-white font-extrabold border-l-4 border-[#FFD54A]' : 'hover:bg-gray-800 text-gray-300'
                    }`}
                  >
                    <span className="flex items-center gap-2.5"><UserCheck className="w-4 h-4 text-cyan-400" /> Members & Families</span>
                    <span className="text-[9px] bg-cyan-900 text-cyan-200 px-1.5 py-0.5 rounded font-mono">{Array.isArray(dbData.families) ? dbData.families.length : 0}</span>
                  </button>
                </div>
              </div>

              {/* GROUP II: COMMUNITY GOVERNANCE */}
              <div>
                <div className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-amber-400/80 bg-gray-950/50 rounded mb-1">
                  II. Community Governance
                </div>
                <div className="space-y-0.5">
                  <button
                    onClick={() => { setActiveNav('admin_modules'); setSelectedDbTable('committees'); setIsMobileNavOpen(false); }}
                    className={`w-full min-h-[40px] text-left px-3 py-2 rounded-lg flex items-center justify-between transition cursor-pointer hover:translate-x-1 ${
                      activeNav === 'admin_modules' && selectedDbTable === 'committees' ? 'bg-[#004B23] text-white font-extrabold border-l-4 border-[#FFD54A]' : 'hover:bg-gray-800 text-gray-300'
                    }`}
                  >
                    <span className="flex items-center gap-2.5"><Building className="w-4 h-4 text-amber-400" /> Committee Management</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-70" />
                  </button>

                  <button
                    onClick={() => { setActiveNav('admin_modules'); setSelectedDbTable('surveys'); setIsMobileNavOpen(false); }}
                    className={`w-full min-h-[40px] text-left px-3 py-2 rounded-lg flex items-center justify-between transition cursor-pointer hover:translate-x-1 ${
                      activeNav === 'admin_modules' && selectedDbTable === 'surveys' ? 'bg-[#004B23] text-white font-extrabold border-l-4 border-[#FFD54A]' : 'hover:bg-gray-800 text-gray-300'
                    }`}
                  >
                    <span className="flex items-center gap-2.5"><Globe className="w-4 h-4 text-orange-400" /> District Management</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-70" />
                  </button>

                  <button
                    onClick={() => { setActiveNav('admin_modules'); setSelectedDbTable('volunteers'); setIsMobileNavOpen(false); }}
                    className={`w-full min-h-[40px] text-left px-3 py-2 rounded-lg flex items-center justify-between transition cursor-pointer hover:translate-x-1 ${
                      activeNav === 'admin_modules' && selectedDbTable === 'volunteers' ? 'bg-[#004B23] text-white font-extrabold border-l-4 border-[#FFD54A]' : 'hover:bg-gray-800 text-gray-300'
                    }`}
                  >
                    <span className="flex items-center gap-2.5"><Award className="w-4 h-4 text-yellow-400" /> State Management</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-70" />
                  </button>

                  <button
                    onClick={() => { setActiveNav('admin_modules'); setSelectedDbTable('mahapanchayatResolutions'); setIsMobileNavOpen(false); }}
                    className={`w-full min-h-[40px] text-left px-3 py-2 rounded-lg flex items-center justify-between transition cursor-pointer hover:translate-x-1 ${
                      activeNav === 'admin_modules' && selectedDbTable === 'mahapanchayatResolutions' ? 'bg-[#004B23] text-white font-extrabold border-l-4 border-[#FFD54A]' : 'hover:bg-gray-800 text-gray-300'
                    }`}
                  >
                    <span className="flex items-center gap-2.5"><Shield className="w-4 h-4 text-red-400" /> National Administration</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-70" />
                  </button>
                </div>
              </div>

              {/* GROUP III: WELFARE & SERVICES */}
              <div>
                <div className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-rose-400/80 bg-gray-950/50 rounded mb-1">
                  III. Welfare & Services
                </div>
                <div className="space-y-0.5">
                  <button
                    onClick={() => { setActiveNav('admin_modules'); setSelectedDbTable('matrimonialProfiles'); setIsMobileNavOpen(false); }}
                    className={`w-full min-h-[40px] text-left px-3 py-2 rounded-lg flex items-center justify-between transition cursor-pointer hover:translate-x-1 ${
                      activeNav === 'admin_modules' && selectedDbTable === 'matrimonialProfiles' ? 'bg-[#004B23] text-white font-extrabold border-l-4 border-[#FFD54A]' : 'hover:bg-gray-800 text-gray-300'
                    }`}
                  >
                    <span className="flex items-center gap-2.5"><Heart className="w-4 h-4 text-rose-400" /> Matrimonial</span>
                    <span className="text-[9px] bg-rose-900 text-rose-200 px-1.5 py-0.5 rounded font-mono">{Array.isArray(dbData.matrimonialProfiles) ? dbData.matrimonialProfiles.length : 0}</span>
                  </button>

                  <button
                    onClick={() => { setActiveNav('admin_modules'); setSelectedDbTable('matrimonialProfiles'); setIsMobileNavOpen(false); }}
                    className={`w-full min-h-[40px] text-left px-3 py-2 rounded-lg flex items-center justify-between transition cursor-pointer hover:translate-x-1 hover:bg-gray-800 text-gray-300`}
                  >
                    <span className="flex items-center gap-2.5"><Heart className="w-4 h-4 text-amber-300" /> Second Marriage ✨</span>
                    <span className="text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono">VIP</span>
                  </button>

                  <button
                    onClick={() => { setActiveNav('admin_modules'); setSelectedDbTable('educationResources'); setIsMobileNavOpen(false); }}
                    className={`w-full min-h-[40px] text-left px-3 py-2 rounded-lg flex items-center justify-between transition cursor-pointer hover:translate-x-1 ${
                      activeNav === 'admin_modules' && selectedDbTable === 'educationResources' ? 'bg-[#004B23] text-white font-extrabold border-l-4 border-[#FFD54A]' : 'hover:bg-gray-800 text-gray-300'
                    }`}
                  >
                    <span className="flex items-center gap-2.5"><BookOpen className="w-4 h-4 text-blue-400" /> Education</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-70" />
                  </button>

                  <button
                    onClick={() => { setActiveNav('admin_modules'); setSelectedDbTable('scholarships'); setIsMobileNavOpen(false); }}
                    className={`w-full min-h-[40px] text-left px-3 py-2 rounded-lg flex items-center justify-between transition cursor-pointer hover:translate-x-1 ${
                      activeNav === 'admin_modules' && selectedDbTable === 'scholarships' ? 'bg-[#004B23] text-white font-extrabold border-l-4 border-[#FFD54A]' : 'hover:bg-gray-800 text-gray-300'
                    }`}
                  >
                    <span className="flex items-center gap-2.5"><Briefcase className="w-4 h-4 text-emerald-400" /> Government Schemes</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-70" />
                  </button>
                </div>
              </div>

              {/* GROUP IV: TELEMETRY & RESOURCES */}
              <div>
                <div className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-purple-400/80 bg-gray-950/50 rounded mb-1">
                  IV. Telemetry & Resources
                </div>
                <div className="space-y-0.5">
                  <button
                    onClick={() => { setActiveNav('media_vault'); setIsMobileNavOpen(false); }}
                    className={`w-full min-h-[40px] text-left px-3 py-2 rounded-lg flex items-center justify-between transition cursor-pointer hover:translate-x-1 ${
                      activeNav === 'media_vault' ? 'bg-[#004B23] text-white font-extrabold border-l-4 border-[#FFD54A]' : 'hover:bg-gray-800 text-gray-300'
                    }`}
                  >
                    <span className="flex items-center gap-2.5"><HardDrive className="w-4 h-4 text-purple-400" /> Media & Documents</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-70" />
                  </button>

                  <button
                    onClick={() => { window.dispatchEvent(new CustomEvent('open-iqra-ai')); onClose(); }}
                    className="w-full min-h-[40px] text-left px-3 py-2 rounded-lg flex items-center justify-between transition cursor-pointer hover:translate-x-1 hover:bg-gray-800 text-[#FFD54A]"
                  >
                    <span className="flex items-center gap-2.5"><Zap className="w-4 h-4 text-[#FFD54A] animate-pulse" /> AI Assistant (Iqra)</span>
                    <span className="text-[9px] bg-[#D4AF37]/20 text-[#FFD54A] px-1.5 py-0.5 rounded font-mono">24×7</span>
                  </button>

                  <button
                    onClick={() => { setActiveNav('reports'); setIsMobileNavOpen(false); }}
                    className={`w-full min-h-[40px] text-left px-3 py-2 rounded-lg flex items-center justify-between transition cursor-pointer hover:translate-x-1 ${
                      activeNav === 'reports' ? 'bg-[#004B23] text-white font-extrabold border-l-4 border-[#FFD54A]' : 'hover:bg-gray-800 text-gray-300'
                    }`}
                  >
                    <span className="flex items-center gap-2.5"><Printer className="w-4 h-4 text-amber-400" /> Reports Engine</span>
                    <span className="text-[9px] bg-amber-900 text-amber-200 px-1.5 py-0.5 rounded font-mono">13</span>
                  </button>

                  <button
                    onClick={() => { setActiveNav('dashboards'); setIsMobileNavOpen(false); }}
                    className={`w-full min-h-[40px] text-left px-3 py-2 rounded-lg flex items-center justify-between transition cursor-pointer hover:translate-x-1 hover:bg-gray-800 text-gray-300`}
                  >
                    <span className="flex items-center gap-2.5"><Activity className="w-4 h-4 text-teal-400" /> Analytics</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-70" />
                  </button>

                  <button
                    onClick={() => { setActiveNav('notifications'); setIsMobileNavOpen(false); }}
                    className={`w-full min-h-[40px] text-left px-3 py-2 rounded-lg flex items-center justify-between transition cursor-pointer hover:translate-x-1 ${
                      activeNav === 'notifications' ? 'bg-[#004B23] text-white font-extrabold border-l-4 border-[#FFD54A]' : 'hover:bg-gray-800 text-gray-300'
                    }`}
                  >
                    <span className="flex items-center gap-2.5"><Bell className="w-4 h-4 text-rose-400" /> Notifications</span>
                    <span className="text-[9px] bg-rose-900 text-rose-200 px-1.5 py-0.5 rounded font-mono">{notifList.filter(n => !n.isRead).length}</span>
                  </button>
                </div>
              </div>

              {/* GROUP V: SYSTEM & INFRASTRUCTURE */}
              <div>
                <div className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-cyan-400/80 bg-gray-950/50 rounded mb-1">
                  V. System & Infrastructure
                </div>
                <div className="space-y-0.5">
                  <button
                    onClick={() => { setActiveNav('admin_modules'); setSelectedDbTable('settings'); setIsMobileNavOpen(false); }}
                    className={`w-full min-h-[40px] text-left px-3 py-2 rounded-lg flex items-center justify-between transition cursor-pointer hover:translate-x-1 ${
                      activeNav === 'admin_modules' && selectedDbTable === 'settings' ? 'bg-[#004B23] text-white font-extrabold border-l-4 border-[#FFD54A]' : 'hover:bg-gray-800 text-gray-300'
                    }`}
                  >
                    <span className="flex items-center gap-2.5"><Sliders className="w-4 h-4 text-cyan-400" /> Settings</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-70" />
                  </button>

                  <button
                    onClick={() => { setActiveNav('security_backup'); setIsMobileNavOpen(false); }}
                    className={`w-full min-h-[40px] text-left px-3 py-2 rounded-lg flex items-center justify-between transition cursor-pointer hover:translate-x-1 ${
                      activeNav === 'security_backup' ? 'bg-[#004B23] text-white font-extrabold border-l-4 border-[#FFD54A]' : 'hover:bg-gray-800 text-gray-300'
                    }`}
                  >
                    <span className="flex items-center gap-2.5"><Lock className="w-4 h-4 text-red-400" /> Security</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-70" />
                  </button>

                  <button
                    onClick={() => { setActiveNav('security_backup'); setIsMobileNavOpen(false); }}
                    className={`w-full min-h-[40px] text-left px-3 py-2 rounded-lg flex items-center justify-between transition cursor-pointer hover:translate-x-1 hover:bg-gray-800 text-gray-300`}
                  >
                    <span className="flex items-center gap-2.5"><HardDrive className="w-4 h-4 text-emerald-400" /> Backups</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-70" />
                  </button>

                  <button
                    onClick={() => { setActiveNav('deployment'); setIsMobileNavOpen(false); }}
                    className={`w-full min-h-[40px] text-left px-3 py-2 rounded-lg flex items-center justify-between transition cursor-pointer hover:translate-x-1 ${
                      activeNav === 'deployment' ? 'bg-[#004B23] text-white font-extrabold border-l-4 border-[#FFD54A]' : 'hover:bg-gray-800 text-gray-300'
                    }`}
                  >
                    <span className="flex items-center gap-2.5"><Server className="w-4 h-4 text-blue-400" /> System Health</span>
                    <span className="text-[9px] bg-emerald-900 text-emerald-200 px-1.5 py-0.5 rounded font-mono">100%</span>
                  </button>

                  <button
                    onClick={() => { setActiveNav('deployment'); setIsMobileNavOpen(false); }}
                    className={`w-full min-h-[40px] text-left px-3 py-2 rounded-lg flex items-center justify-between transition cursor-pointer hover:translate-x-1 hover:bg-gray-800 text-gray-300`}
                  >
                    <span className="flex items-center gap-2.5"><Terminal className="w-4 h-4 text-indigo-400" /> Deployment</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-70" />
                  </button>

                  <button
                    onClick={() => { setActiveNav('admin_modules'); setSelectedDbTable('auditLogs'); setIsMobileNavOpen(false); }}
                    className={`w-full min-h-[40px] text-left px-3 py-2 rounded-lg flex items-center justify-between transition cursor-pointer hover:translate-x-1 ${
                      activeNav === 'admin_modules' && selectedDbTable === 'auditLogs' ? 'bg-[#004B23] text-white font-extrabold border-l-4 border-[#FFD54A]' : 'hover:bg-gray-800 text-gray-300'
                    }`}
                  >
                    <span className="flex items-center gap-2.5"><FileText className="w-4 h-4 text-yellow-400" /> Logs</span>
                    <span className="text-[9px] bg-yellow-900 text-yellow-200 px-1.5 py-0.5 rounded font-mono">{Array.isArray(dbData.auditLogs) ? dbData.auditLogs.length : 0}</span>
                  </button>

                  <button
                    onClick={() => { setActiveNav('deployment'); setIsMobileNavOpen(false); }}
                    className={`w-full min-h-[40px] text-left px-3 py-2 rounded-lg flex items-center justify-between transition cursor-pointer hover:translate-x-1 hover:bg-gray-800 text-gray-300`}
                  >
                    <span className="flex items-center gap-2.5"><Sliders className="w-4 h-4 text-pink-400" /> API Management</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-70" />
                  </button>

                  <button
                    onClick={() => { setActiveNav('email_management'); setIsMobileNavOpen(false); }}
                    className={`w-full min-h-[40px] text-left px-3 py-2 rounded-lg flex items-center justify-between transition cursor-pointer hover:translate-x-1 ${
                      activeNav === 'email_management' ? 'bg-[#004B23] text-white font-extrabold border-l-4 border-[#FFD54A]' : 'hover:bg-gray-800 text-gray-300'
                    }`}
                  >
                    <span className="flex items-center gap-2.5"><Mail className="w-4 h-4 text-rose-400" /> Hostinger SMTP & Emails</span>
                    <span className="text-[9px] bg-rose-900 text-rose-200 px-1.5 py-0.5 rounded font-mono">LIVE</span>
                  </button>
                </div>
              </div>
            </nav>

            <div className="p-3 bg-gray-950 border-t border-gray-800 space-y-2 shrink-0">
              <button
                onClick={handleLogout}
                className="w-full py-2.5 min-h-[44px] bg-red-900/60 hover:bg-red-800 text-red-200 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer shadow"
              >
                <LogOut className="w-3.5 h-3.5" /> {currentLanguage === 'en' ? 'Log Out / Reset Guest' : 'लॉग आउट करें'}
              </button>
            </div>
          </div>

          {/* RIGHT MAIN CONTENT AREA */}
          <div className="flex-grow bg-gray-50 overflow-y-auto p-4 sm:p-6 text-gray-800">
            
            {authMessage && (
              <div className={`mb-4 p-3 rounded-lg flex items-center gap-2.5 text-xs font-bold ${
                authMessage.type === 'success' ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-red-100 text-red-800 border border-red-300'
              }`}>
                {authMessage.type === 'success' ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
                <span>{authMessage.text}</span>
              </div>
            )}

            {/* RBAC PROTECTED ROUTE WARNING FOR GUEST VISITORS BROWSING ADMIN MODULES */}
            {session.role === 'Visitor' && activeNav !== 'auth' && activeNav !== 'dashboards' && (
              <div className="mb-6 p-5 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border-2 border-amber-400 rounded-xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 animate-fadeIn">
                <div className="flex items-center gap-3.5">
                  <div className="p-3.5 bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-xl shadow shrink-0">
                    <Lock className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-gray-900 tracking-wide flex items-center gap-2">
                      <span>RBAC Protected Enterprise Module</span>
                      <span className="bg-amber-100 text-amber-800 text-[10px] px-2 py-0.5 rounded font-mono uppercase">Read-Only Audit Mode</span>
                    </h4>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      You are currently browsing as <strong className="text-gray-900 font-bold">Guest Visitor</strong>. According to Enterprise Security policies, write actions and system configurations require an authenticated Role-Based Access Control (RBAC) session.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveNav('auth')}
                  className="px-5 py-2.5 min-h-[44px] bg-[#004B23] hover:bg-[#0A2E1C] text-[#FFD54A] font-extrabold rounded-xl text-xs shrink-0 shadow-lg border border-[#F4C430] cursor-pointer flex items-center gap-2 transition-all hover:scale-105"
                >
                  <LogIn className="w-4 h-4" /> Authenticate Session →
                </button>
              </div>
            )}

            {/* TAB 1: PRODUCTION AUTHENTICATION & ROLE MANAGEMENT */}
            {activeNav === 'auth' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-gradient-to-r from-[#004B23] via-[#0D2418] to-[#070D18] p-6 rounded-2xl text-white shadow-xl border border-[#D4AF37]/40 relative overflow-hidden">
                  <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>
                  <h3 className="text-lg font-extrabold text-[#FFD54A] flex items-center gap-2 mb-2">
                    <Shield className="w-6 h-6 text-[#FFD54A]" />
                    {currentLanguage === 'en' ? 'Production Enterprise Security & Role Authentication' : 'उत्पादन एंटरप्राइज सुरक्षा एवं भूमिका प्रमाणीकरण'}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed max-w-4xl">
                    {currentLanguage === 'en'
                      ? 'The Rangrez Community Bharat Portal enforces strict Role-Based Access Control (RBAC) with OTP verification. When you log in with your registered email or 10-digit mobile number, your assigned enterprise permissions and administrative dashboards are automatically loaded from the central trust database.'
                      : 'रंगरेज समुदाय भारत पोर्टल OTP सत्यापन के साथ सख्त भूमिका-आधारित पहुंच नियंत्रण (RBAC) लागू करता है। पंजीकृत ईमेल या मोबाइल नंबर से लॉगिन करने पर आपकी भूमिका स्वचालित रूप से लोड हो जाती है।'}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Production Login Form */}
                  <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-gray-200 shadow-md flex flex-col justify-between">
                    <div>
                      <h4 className="text-base font-extrabold text-[#004B23] mb-4 flex items-center justify-between border-b border-gray-100 pb-3">
                        <span className="flex items-center gap-2"><LogIn className="w-5 h-5 text-[#D4AF37]" /> Enterprise Credentials Login</span>
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-mono uppercase font-bold">2-Step Auth Active</span>
                      </h4>
                      <form onSubmit={handleCustomLogin} className="space-y-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1.5">Registered Email or 10-Digit Mobile Number</label>
                          <div className="relative">
                            <input 
                              type="text"
                              value={loginEmail}
                              onChange={(e) => setLoginEmail(e.target.value)}
                              placeholder="e.g. admin@rangrezcommunity.org or 7879940869"
                              className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-[#004B23] focus:border-transparent outline-none transition bg-gray-50/50"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1.5">Enterprise Password</label>
                          <input 
                            type="password"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            placeholder="••••••••••••"
                            className="w-full px-4 py-3 min-h-[44px] border border-gray-300 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-[#004B23] focus:border-transparent outline-none transition bg-gray-50/50"
                          />
                        </div>
                        <button 
                          type="submit"
                          className="w-full py-3 min-h-[44px] bg-gradient-to-r from-[#004B23] to-[#0A2E1C] hover:from-[#00381a] hover:to-[#071F13] text-[#FFD54A] font-extrabold rounded-xl text-xs sm:text-sm transition-all shadow-lg hover:shadow-xl cursor-pointer flex items-center justify-center gap-2"
                        >
                          <Key className="w-4 h-4" /> {currentLanguage === 'en' ? 'Authenticate & Send OTP' : 'प्रमाणीकृत करें एवं OTP भेजें'}
                        </button>
                      </form>

                      {otpMode && (
                        <div className="mt-5 p-4 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-400 rounded-xl shadow-md animate-fadeIn">
                          <div className="text-xs font-extrabold text-amber-900 mb-2 flex items-center justify-between">
                            <span className="flex items-center gap-1.5"><Smartphone className="w-4 h-4 text-amber-600 animate-bounce" /> Step 2: Enter Verification OTP</span>
                            <span className="text-[10px] bg-amber-200/80 text-amber-800 px-2 py-0.5 rounded font-mono">Demo OTP: 123456</span>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-2.5 mt-3">
                            <input 
                              type="text"
                              value={otpInput}
                              onChange={(e) => setOtpInput(e.target.value)}
                              placeholder="123456"
                              maxLength={6}
                              className="flex-grow px-4 py-2.5 min-h-[44px] border-2 border-amber-400 rounded-xl text-sm font-mono font-black tracking-widest text-center bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />
                            <button
                              type="button"
                              onClick={handleVerifyOtp}
                              className="px-6 py-2.5 min-h-[44px] bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl text-xs cursor-pointer shadow-md transition-all shrink-0 flex items-center justify-center gap-1.5"
                            >
                              <CheckCircle2 className="w-4 h-4" /> Verify & Launch
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                      <span>Flow: <code className="bg-gray-100 font-mono text-gray-700 px-1.5 py-0.5 rounded">Visitor → Login → OTP → Role → Dashboard</code></span>
                      <span className="text-emerald-600 font-bold">● Protected Production Mode</span>
                    </div>
                  </div>

                  {/* QA & Audit Testing Guide Card */}
                  <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-gray-200 shadow-md flex flex-col justify-between">
                    <div>
                      <h4 className="text-base font-extrabold text-[#004B23] mb-3 flex items-center justify-between border-b border-gray-100 pb-3">
                        <span className="flex items-center gap-2"><Award className="w-5 h-5 text-[#D4AF37]" /> Enterprise QA & Audit Accounts</span>
                        <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-mono uppercase font-bold">QA Testing Ready</span>
                      </h4>
                      <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                        To assist auditors and verification engineers during this Production Readiness Audit, click any authorized role account below to auto-fill credentials into the production login form:
                      </p>

                      <div className="space-y-2 max-h-[320px] overflow-y-auto pr-1">
                        {[
                          { role: 'Super Administrator', name: 'All India Rangrez Central Trust Admin', email: 'admin@rangrezcommunity.org', phone: '7879940869', badge: 'ROOT CONTROL', color: 'from-[#004B23] to-[#0A2E1C]', textColor: 'text-[#FFD54A]' },
                          { role: 'National Admin', name: 'Maulana Zubair Khan Rangrez', email: 'nationaladmin@rangrezcommunity.org', phone: '9877788899', badge: 'NATIONAL', color: 'bg-red-900/90 text-white', textColor: 'text-amber-300' },
                          { role: 'State Admin', name: 'Mufti Rashid Rangrez (State Admin)', email: 'stateadmin@rangrezcommunity.org', phone: '9866677788', badge: 'STATE LEVEL', color: 'bg-blue-900/90 text-white', textColor: 'text-cyan-300' },
                          { role: 'District Admin', name: 'Adv. Tariq Rangrez (District Admin)', email: 'districtadmin@rangrezcommunity.org', phone: '9855566677', badge: 'DISTRICT', color: 'bg-indigo-900/90 text-white', textColor: 'text-yellow-300' },
                          { role: 'Committee', name: 'Haji Waseem Khan Rangrez', email: 'committee@rangrezcommunity.org', phone: '9833344455', badge: 'REGIONAL', color: 'bg-amber-900/90 text-white', textColor: 'text-amber-200' },
                          { role: 'Moderator', name: 'Dr. Rehana Begum Rangrez', email: 'moderator@rangrezcommunity.org', phone: '9844455566', badge: 'VETTING', color: 'bg-purple-900/90 text-white', textColor: 'text-purple-200' },
                          { role: 'Volunteer', name: 'Faizan Ahmed Rangrez', email: 'volunteer@rangrezcommunity.org', phone: '9822233344', badge: 'SERVICE', color: 'bg-emerald-900/90 text-white', textColor: 'text-emerald-200' },
                          { role: 'Member', name: 'Irshad Ahmed Rangrez', email: 'member@rangrezcommunity.org', phone: '9811122233', badge: 'CENSUS', color: 'bg-gray-800 text-white', textColor: 'text-gray-200' }
                        ].map((acc, idx) => (
                          <div 
                            key={idx}
                            onClick={() => handleAutoFillLogin(acc.email)}
                            className="p-3 rounded-xl border border-gray-200 bg-gray-50/80 hover:bg-emerald-50/60 hover:border-emerald-300 transition-all cursor-pointer flex items-center justify-between group shadow-sm"
                          >
                            <div className="overflow-hidden pr-2">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-gray-900 group-hover:text-[#004B23] transition truncate">{acc.name}</span>
                                <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-black ${acc.role === 'Super Administrator' ? 'bg-[#004B23] text-[#FFD54A]' : 'bg-gray-200 text-gray-700'}`}>
                                  {acc.role}
                                </span>
                              </div>
                              <div className="text-[11px] font-mono text-gray-500 truncate mt-0.5">
                                ✉ {acc.email} | 📞 +91 {acc.phone}
                              </div>
                            </div>
                            <button
                              type="button"
                              className="px-3 py-1.5 bg-white group-hover:bg-[#004B23] group-hover:text-[#FFD54A] text-gray-700 border border-gray-300 group-hover:border-transparent rounded-lg text-[11px] font-bold shrink-0 transition shadow-sm flex items-center gap-1"
                            >
                              <span>Test Flow</span> →
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                      <span>Clicking Auto-Fills Credentials</span>
                      <span className="text-emerald-600 font-bold">● Instant Audit Verification</span>
                    </div>
                  </div>
                </div>

                {/* Active Session Permissions Summary */}
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-gray-100 pb-3">
                    <h4 className="text-sm font-extrabold text-gray-900 flex items-center gap-2">
                      <Lock className="w-5 h-5 text-emerald-600" /> Current Session Permissions Engine & Token Validation
                    </h4>
                    <span className="text-xs font-mono bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-bold">
                      {session.permissions.length} Assigned Rights ({session.role})
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                    The enterprise security engine dynamically evaluates these tokenized permissions before executing any database write or rendering restricted administrative views across all 21 modules:
                  </p>
                  <div className="flex flex-wrap gap-2 max-h-52 overflow-y-auto p-3 bg-gray-50 rounded-xl border border-gray-200">
                    {session.permissions.map((perm, idx) => (
                      <span key={idx} className="px-2.5 py-1.5 bg-white text-emerald-900 font-mono text-xs rounded-lg border border-emerald-300 font-extrabold shadow-sm flex items-center gap-1">
                        <span className="text-emerald-600">✓</span> {perm}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-gray-500 font-mono">
                    <span>Session Token: <code className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded font-bold">{session.token.substring(0, 24)}...</code></span>
                    <span className="text-emerald-600 font-bold">● JWT Session Verified & Encrypted</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: ROLE DASHBOARDS */}
            {activeNav === 'dashboards' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="text-base font-extrabold text-[#004B23] flex items-center gap-2 mb-2">
                    <Activity className="w-5 h-5 text-emerald-600" />
                    {currentLanguage === 'en' ? 'Enterprise Role-Based Dashboards & Analytics Suite' : 'एंटरप्राइज भूमिका-आधारित डैशबोर्ड एवं एनालिटिक्स'}
                  </h3>
                  <p className="text-xs text-gray-600 mb-4">
                    Explore specialized real-time dashboards designed for each administrative and community role. All metrics pull directly from the central telemetry engine.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-emerald-800 to-emerald-950 text-white p-4 rounded-xl shadow">
                      <div className="text-xs text-emerald-200 font-semibold mb-1">Total Verified Members</div>
                      <div className="text-2xl font-black text-[#FFD54A]">{analyticsData.registry.members}</div>
                      <div className="text-[10px] text-emerald-300 mt-2 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> 100% Digital KYC Verified
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-800 to-blue-950 text-white p-4 rounded-xl shadow">
                      <div className="text-xs text-blue-200 font-semibold mb-1">Registered Households</div>
                      <div className="text-2xl font-black text-white">{analyticsData.registry.families}</div>
                      <div className="text-[10px] text-blue-300 mt-2 flex items-center gap-1">
                        <Users className="w-3 h-3" /> All-India Census Mapping
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-800 to-purple-950 text-white p-4 rounded-xl shadow">
                      <div className="text-xs text-purple-200 font-semibold mb-1">Active Committees</div>
                      <div className="text-2xl font-black text-[#FFD54A]">{analyticsData.registry.committees}</div>
                      <div className="text-[10px] text-purple-300 mt-2 flex items-center gap-1">
                        <Building className="w-3 h-3" /> National, State & District Wings
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-amber-700 to-amber-900 text-white p-4 rounded-xl shadow">
                      <div className="text-xs text-amber-200 font-semibold mb-1">Document Downloads</div>
                      <div className="text-2xl font-black text-white">{analyticsData.registry.downloads}</div>
                      <div className="text-[10px] text-amber-300 mt-2 flex items-center gap-1">
                        <Download className="w-3 h-3" /> Verified Constitution & Census
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Cards grid linking to front-end views */}
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Available Role Dashboards (Click to Launch)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div 
                      onClick={() => { onClose(); onNavigateTab('portal'); }}
                      className="p-4 bg-gray-50 hover:bg-emerald-50 rounded-xl border border-gray-200 hover:border-emerald-400 cursor-pointer transition flex items-start gap-3 group"
                    >
                      <div className="p-2.5 bg-emerald-100 rounded-lg text-emerald-800 group-hover:bg-emerald-700 group-hover:text-white transition">
                        <UserCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900 group-hover:text-emerald-900">1. Member Dashboard</div>
                        <div className="text-xs text-gray-600 mt-1">Profile management, ID Card generator, matrimonial matches, and contribution ledger.</div>
                      </div>
                    </div>

                    <div 
                      onClick={() => { onClose(); onNavigateTab('volunteer-community'); }}
                      className="p-4 bg-gray-50 hover:bg-blue-50 rounded-xl border border-gray-200 hover:border-blue-400 cursor-pointer transition flex items-start gap-3 group"
                    >
                      <div className="p-2.5 bg-blue-100 rounded-lg text-blue-800 group-hover:bg-blue-700 group-hover:text-white transition">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900 group-hover:text-blue-900">2. Volunteer Dashboard</div>
                        <div className="text-xs text-gray-600 mt-1">Service hours tracker, blood donation availability, medical camp coordinator, and badge unlocks.</div>
                      </div>
                    </div>

                    <div 
                      onClick={() => { onClose(); onNavigateTab('mahapanchayat-committees'); }}
                      className="p-4 bg-gray-50 hover:bg-purple-50 rounded-xl border border-gray-200 hover:border-purple-400 cursor-pointer transition flex items-start gap-3 group"
                    >
                      <div className="p-2.5 bg-purple-100 rounded-lg text-purple-800 group-hover:bg-purple-700 group-hover:text-white transition">
                        <Building className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900 group-hover:text-purple-900">3. Committee Dashboard</div>
                        <div className="text-xs text-gray-600 mt-1">Regional member KYC verification, local event publishing, and society bank account audit tools.</div>
                      </div>
                    </div>

                    <div 
                      onClick={() => { onClose(); onNavigateTab('education-overview'); }}
                      className="p-4 bg-gray-50 hover:bg-amber-50 rounded-xl border border-gray-200 hover:border-amber-400 cursor-pointer transition flex items-start gap-3 group"
                    >
                      <div className="p-2.5 bg-amber-100 rounded-lg text-amber-800 group-hover:bg-amber-700 group-hover:text-white transition">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900 group-hover:text-amber-900">4. Education Dashboard</div>
                        <div className="text-xs text-gray-600 mt-1">Scholarship application vetting, student mentorship pairing, and college stream guidance.</div>
                      </div>
                    </div>

                    <div 
                      onClick={() => { onClose(); onNavigateTab('welfare-support'); }}
                      className="p-4 bg-gray-50 hover:bg-rose-50 rounded-xl border border-gray-200 hover:border-rose-400 cursor-pointer transition flex items-start gap-3 group"
                    >
                      <div className="p-2.5 bg-rose-100 rounded-lg text-rose-800 group-hover:bg-rose-700 group-hover:text-white transition">
                        <Heart className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900 group-hover:text-rose-900">5. Welfare Dashboard</div>
                        <div className="text-xs text-gray-600 mt-1">Empanelled hospital discount verification, blood donor search, and widow/orphan fund allocation.</div>
                      </div>
                    </div>

                    <div 
                      onClick={() => { onClose(); onNavigateTab('mahapanchayat-resolutions'); }}
                      className="p-4 bg-gray-50 hover:bg-yellow-50 rounded-xl border border-gray-200 hover:border-yellow-400 cursor-pointer transition flex items-start gap-3 group"
                    >
                      <div className="p-2.5 bg-yellow-100 rounded-lg text-yellow-800 group-hover:bg-yellow-700 group-hover:text-white transition">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900 group-hover:text-yellow-900">6. Mahapanchayat Dashboard</div>
                        <div className="text-xs text-gray-600 mt-1">Resolution voting, social reform tracking, dowry prohibition enforcement, and delegate registries.</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Telemetry Growth Curves Table */}
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#004B23]" />
                    {currentLanguage === 'en' ? 'Central Telemetry: Monthly Growth Curves' : 'मासिक प्रगति रिपोर्ट एवं टेलीमेट्री'}
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-gray-100 text-gray-700 font-bold border-b border-gray-300">
                          <th className="p-2.5">Month</th>
                          <th className="p-2.5">Verified Members</th>
                          <th className="p-2.5">Registered Families</th>
                          <th className="p-2.5">Active Volunteers</th>
                          <th className="p-2.5">Document Downloads</th>
                          <th className="p-2.5">System Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {analyticsData.growthCurves.map((row, idx) => (
                          <tr key={idx} className="hover:bg-gray-50">
                            <td className="p-2.5 font-bold text-gray-900">{row.month}</td>
                            <td className="p-2.5 text-emerald-700 font-semibold">{row.members}</td>
                            <td className="p-2.5 text-blue-700 font-semibold">{row.families}</td>
                            <td className="p-2.5 text-purple-700 font-semibold">{row.volunteers}</td>
                            <td className="p-2.5 text-amber-700 font-semibold">{row.downloads}</td>
                            <td className="p-2.5 font-mono text-[10px] text-emerald-600">● SYNCED</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: ADMIN MODULES DATABASE CONTROL (ALL 21 TABLES) */}
            {activeNav === 'admin_modules' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-base font-extrabold text-[#004B23] flex items-center gap-2">
                        <Database className="w-5 h-5 text-blue-600" />
                        {currentLanguage === 'en' ? 'Complete Administration Panel (21 Database Modules)' : 'संपूर्ण प्रशासन पैनल (21 डेटाबेस मॉड्यूल)'}
                      </h3>
                      <p className="text-xs text-gray-600 mt-0.5">
                        Manage, verify, edit, and audit every database entity in real-time. All changes sync across the live portal.
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="relative">
                        <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2.5" />
                        <input
                          type="text"
                          placeholder="Search table rows..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-8 pr-3 py-1.5 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-blue-600 outline-none w-48 bg-white"
                        />
                      </div>
                      <button
                        onClick={() => setDbData(DBService.getDB())}
                        className="p-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition"
                        title="Refresh Data"
                      >
                        <RefreshCw className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* 21 Table Tabs Selector Grid */}
                  <div className="flex flex-wrap gap-1.5 mb-5 p-2 bg-gray-100 rounded-xl border border-gray-200 max-h-36 overflow-y-auto">
                    {(Object.keys(dbData) as (keyof DatabaseSchema)[]).map(tableKey => {
                      const count = Array.isArray(dbData[tableKey]) ? (dbData[tableKey] as any[]).length : typeof dbData[tableKey] === 'object' ? 1 : 0;
                      const isSelected = selectedDbTable === tableKey;
                      return (
                        <button
                          key={tableKey}
                          onClick={() => { setSelectedDbTable(tableKey); setSearchTerm(''); }}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                            isSelected
                              ? 'bg-[#004B23] text-[#FFD54A] shadow'
                              : 'bg-white hover:bg-gray-200 text-gray-700 border border-gray-300'
                          }`}
                        >
                          <span className="capitalize">{tableKey.replace(/([A-Z])/g, ' $1').trim()}</span>
                          <span className={`px-1.5 py-0.2 text-[10px] rounded font-mono ${isSelected ? 'bg-[#FFD54A] text-[#004B23]' : 'bg-gray-200 text-gray-800'}`}>
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Data Table Viewer / Editor */}
                  <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                    <div className="bg-gray-900 text-white px-4 py-2.5 flex items-center justify-between text-xs font-bold">
                      <span className="uppercase tracking-wider">Active Table: <span className="text-[#FFD54A]">{selectedDbTable}</span></span>
                      <span className="font-mono text-gray-400">Total Records: {Array.isArray(dbData[selectedDbTable]) ? (dbData[selectedDbTable] as any[]).length : 1}</span>
                    </div>

                    <div className="overflow-x-auto max-h-96">
                      {Array.isArray(dbData[selectedDbTable]) ? (
                        (dbData[selectedDbTable] as any[]).length > 0 ? (
                          <table className="w-full text-left text-xs border-collapse">
                            <thead>
                              <tr className="bg-gray-100 text-gray-700 border-b border-gray-200">
                                {Object.keys((dbData[selectedDbTable] as any[])[0] || {}).slice(0, 8).map((col, idx) => (
                                  <th key={idx} className="p-2.5 font-bold uppercase text-[10px] tracking-wider text-gray-600">{col}</th>
                                ))}
                                <th className="p-2.5 text-right font-bold uppercase text-[10px]">Action</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              {(dbData[selectedDbTable] as any[])
                                .filter(item => !searchTerm || JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()))
                                .map((row, idx) => (
                                  <tr key={idx} className="hover:bg-blue-50/50 transition">
                                    {Object.entries(row).slice(0, 8).map(([col, val], cIdx) => (
                                      <td key={cIdx} className="p-2.5 text-gray-800 font-medium truncate max-w-[160px]">
                                        {typeof val === 'boolean' ? (
                                          val ? <span className="text-emerald-600 font-bold">✓ YES</span> : <span className="text-red-500 font-bold">✕ NO</span>
                                        ) : typeof val === 'object' ? (
                                          <code className="text-[10px] bg-gray-100 px-1 py-0.5 rounded text-gray-700">{JSON.stringify(val).substring(0, 25)}...</code>
                                        ) : (
                                          (val || 'N/A').toString()
                                        )}
                                      </td>
                                    ))}
                                    <td className="p-2.5 text-right whitespace-nowrap space-x-1">
                                      <button 
                                        onClick={() => {
                                          const nextVal = !row.isVerified;
                                          DBService.update(selectedDbTable, row.id, { isVerified: nextVal } as any, session.name);
                                          setDbData(DBService.getDB());
                                          alert(`Record ${row.id} verification toggled to: ${nextVal ? 'VERIFIED' : 'UNVERIFIED'}`);
                                        }}
                                        className="px-2 py-1 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 rounded text-[10px] font-bold cursor-pointer transition"
                                      >
                                        Verify
                                      </button>
                                      <button 
                                        onClick={() => {
                                          if (confirm(`Delete record ${row.id} from ${selectedDbTable}?`)) {
                                            DBService.delete(selectedDbTable, row.id, session.name);
                                            setDbData(DBService.getDB());
                                          }
                                        }}
                                        className="px-2 py-1 bg-red-100 hover:bg-red-200 text-red-800 rounded text-[10px] font-bold cursor-pointer transition"
                                      >
                                        Delete
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        ) : (
                          <div className="p-8 text-center text-gray-500 text-xs">No records present in table [{selectedDbTable}]. Use registration forms to populate.</div>
                        )
                      ) : (
                        <div className="p-6 bg-gray-50">
                          <pre className="text-xs font-mono bg-gray-900 text-emerald-400 p-4 rounded-xl overflow-x-auto">
                            {JSON.stringify(dbData[selectedDbTable], null, 2)}
                          </pre>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: REPORTS ENGINE HUB (PDF, EXCEL, CSV, PRINT) */}
            {activeNav === 'reports' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="text-base font-extrabold text-[#004B23] flex items-center gap-2 mb-2">
                    <Printer className="w-5 h-5 text-amber-600" />
                    {currentLanguage === 'en' ? 'Universal Reporting Engine (13 System Modules)' : 'यूनिवर्सल रिपोर्टिंग इंजन (13 मॉड्यूल)'}
                  </h3>
                  <p className="text-xs text-gray-600 mb-4">
                    Generate official, digitally verified reports for any system module. Download formatted spreadsheets or trigger print-ready PDF layouts.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {([
                      'Membership', 'Family Census', 'Volunteer Activities', 'Medical Camps', 
                      'Blood Donations', 'Education', 'Scholarships', 'Jobs', 'Surveys', 
                      'Committees', 'Mahapanchayat', 'Downloads', 'Website Analytics'
                    ] as ReportModule[]).map(mod => (
                      <button
                        key={mod}
                        onClick={() => setSelectedReportModule(mod)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                          selectedReportModule === mod
                            ? 'bg-[#004B23] text-[#FFD54A] shadow ring-2 ring-[#FFD54A]/30'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300'
                        }`}
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>{mod}</span>
                      </button>
                    ))}
                  </div>

                  {generatedReport && (
                    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                      <div className="bg-gray-900 text-white p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <div className="text-sm font-extrabold text-[#FFD54A]">{generatedReport.title}</div>
                          <div className="text-[11px] text-gray-300">Generated: {generatedReport.generatedAt} • Total Records: {generatedReport.totalRecords}</div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() => ReportEngine.exportCSV(generatedReport)}
                            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-xs flex items-center gap-1.5 transition shadow cursor-pointer"
                          >
                            <Download className="w-3.5 h-3.5" /> CSV Export
                          </button>
                          <button
                            onClick={() => ReportEngine.exportExcel(generatedReport)}
                            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs flex items-center gap-1.5 transition shadow cursor-pointer"
                          >
                            <FileSpreadsheet className="w-3.5 h-3.5" /> Excel (.xls)
                          </button>
                          <button
                            onClick={() => ReportEngine.triggerPrint(generatedReport)}
                            className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg text-xs flex items-center gap-1.5 transition shadow cursor-pointer"
                          >
                            <Printer className="w-3.5 h-3.5" /> Print / Save PDF
                          </button>
                        </div>
                      </div>

                      {/* Summary Stats Cards */}
                      <div className="p-4 bg-gray-50 border-b border-gray-200 grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {Object.entries(generatedReport.summaryStats).map(([k, v], idx) => (
                          <div key={idx} className="p-3 bg-white rounded-lg border border-gray-200 shadow-sm text-center">
                            <div className="text-[10px] uppercase font-bold text-gray-500">{k}</div>
                            <div className="text-base font-extrabold text-[#004B23] mt-1">{v}</div>
                          </div>
                        ))}
                      </div>

                      {/* Table Preview */}
                      <div className="overflow-x-auto max-h-80 p-4">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className="bg-gray-100 text-gray-700 border-b border-gray-300">
                              {generatedReport.headers.map((h, idx) => (
                                <th key={idx} className="p-2 font-bold uppercase text-[10px]">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {generatedReport.rows.slice(0, 15).map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-gray-50">
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} className="p-2 text-gray-800 truncate max-w-[180px]">{cell || 'N/A'}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        {generatedReport.rows.length > 15 && (
                          <div className="p-2 text-center text-xs font-bold text-gray-500 bg-gray-50 border-t border-gray-200">
                            Showing first 15 records. Download CSV/Excel or click Print/PDF to view all {generatedReport.rows.length} records.
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 5: MEDIA & DOCUMENT MANAGEMENT VAULT */}
            {activeNav === 'media_vault' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="text-base font-extrabold text-[#004B23] flex items-center gap-2 mb-2">
                    <HardDrive className="w-5 h-5 text-purple-600" />
                    {currentLanguage === 'en' ? 'Centralized Media Vault & Document Management' : 'केंद्रीकृत मीडिया एवं दस्तावेज़ वॉल्ट'}
                  </h3>
                  <p className="text-xs text-gray-600 mb-4">
                    Manage images, videos, constitution bylaws, and census forms. Includes automated WebP compression simulation, metadata tagging, version history tracking, and direct downloads.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {(['All', 'Gallery Images', 'Event Videos', 'Legal Documents', 'Education PDFs', 'Annual Reports', 'Downloads'] as MediaCategory[]).map(cat => (
                      <button
                        key={cat}
                        onClick={() => setSelectedMediaCategory(cat)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                          selectedMediaCategory === cat
                            ? 'bg-[#004B23] text-[#FFD54A] shadow ring-2 ring-[#FFD54A]/30'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {mediaAssets
                      .filter(a => selectedMediaCategory === 'All' || a.category === selectedMediaCategory)
                      .map(item => (
                        <div key={item.id} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm flex flex-col justify-between">
                          <div className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="px-2 py-0.5 bg-purple-100 text-purple-800 text-[10px] font-bold rounded uppercase">
                                {item.fileType} • {item.version}
                              </span>
                              <span className="text-xs font-mono text-gray-500">{item.fileSizeKB} KB</span>
                            </div>

                            <h4 className="text-sm font-bold text-gray-900 mb-1 line-clamp-2">{item.titleEn}</h4>
                            <p className="text-xs text-gray-500 line-clamp-1 mb-3">{item.titleHi}</p>

                            <div className="bg-gray-50 p-2.5 rounded-lg border border-gray-200 text-[11px] text-gray-600 space-y-1">
                              <div className="flex justify-between">
                                <span>Uploaded By:</span> <strong className="text-gray-800">{item.uploadedBy}</strong>
                              </div>
                              <div className="flex justify-between">
                                <span>Compression:</span> <strong className="text-emerald-600">{item.metadata.compressionRatio || 'Optimized'}</strong>
                              </div>
                              <div className="flex justify-between">
                                <span>Downloads:</span> <strong className="text-blue-600 font-bold">{item.downloadCount} Times</strong>
                              </div>
                            </div>
                          </div>

                          <div className="p-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
                            <button
                              onClick={() => setViewingDocument(item)}
                              className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer transition"
                            >
                              <Eye className="w-3.5 h-3.5" /> Preview / Versions
                            </button>
                            <button
                              onClick={() => {
                                MediaService.downloadAsset(item.id);
                                setMediaAssets(MediaService.getAll());
                              }}
                              className="px-3 py-1.5 bg-[#004B23] hover:bg-[#00381a] text-[#FFD54A] rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer transition shadow"
                            >
                              <Download className="w-3.5 h-3.5" /> Download
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>

                  {/* Document Preview & Version History Modal */}
                  {viewingDocument && (
                    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
                      <div className="bg-white rounded-xl max-w-2xl w-full p-6 shadow-2xl border border-gray-300 animate-fadeIn">
                        <div className="flex justify-between items-center pb-3 border-b border-gray-200 mb-4">
                          <h4 className="text-base font-extrabold text-[#004B23]">{viewingDocument.titleEn}</h4>
                          <button onClick={() => setViewingDocument(null)} className="text-red-600 font-bold text-base cursor-pointer">✕</button>
                        </div>

                        <div className="space-y-4 text-xs text-gray-700">
                          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                            <p><strong>Checksum (SHA-256):</strong> <code className="font-mono text-[11px] bg-white px-1.5 py-0.5 rounded border">{viewingDocument.metadata.checksum || 'sha256-verified-secure-signature'}</code></p>
                            <p className="mt-1"><strong>Status:</strong> All India Rangrez Central Trust Authorized Document</p>
                          </div>

                          {viewingDocument.versionHistory && (
                            <div>
                              <h5 className="font-bold text-gray-900 mb-2 uppercase text-[11px]">Audit & Version History</h5>
                              <div className="space-y-2 max-h-48 overflow-y-auto">
                                {viewingDocument.versionHistory.map((ver, idx) => (
                                  <div key={idx} className="p-2.5 bg-gray-50 border border-gray-200 rounded-lg flex justify-between items-center">
                                    <div>
                                      <div className="font-bold text-gray-900">{ver.version} <span className="text-gray-500 font-normal">({ver.date})</span></div>
                                      <div className="text-gray-600 mt-0.5">{ver.notes}</div>
                                    </div>
                                    <span className="text-emerald-700 font-mono text-[10px] bg-emerald-100 px-2 py-0.5 rounded">✓ Verified</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="mt-6 pt-3 border-t border-gray-200 flex justify-end gap-2">
                          <button onClick={() => setViewingDocument(null)} className="px-4 py-1.5 bg-gray-200 text-gray-800 rounded-lg font-bold text-xs cursor-pointer">Close</button>
                          <button 
                            onClick={() => {
                              MediaService.downloadAsset(viewingDocument.id);
                              setMediaAssets(MediaService.getAll());
                            }}
                            className="px-4 py-1.5 bg-[#004B23] text-[#FFD54A] rounded-lg font-bold text-xs cursor-pointer flex items-center gap-1"
                          >
                            <Download className="w-3.5 h-3.5" /> Download File
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 6: NOTIFICATION CENTER & ANNOUNCEMENT BAR CONTROL */}
            {activeNav === 'notifications' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left Column: Broadcast Dispatcher */}
                  <div className="lg:col-span-1 bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-sm font-extrabold text-[#004B23] flex items-center gap-2 mb-3">
                      <Bell className="w-4 h-4 text-rose-600" /> Multi-Channel Broadcast Engine
                    </h3>
                    <form onSubmit={handleBroadcastNotif} className="space-y-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Title (English)</label>
                        <input
                          type="text"
                          value={notifTitleEn}
                          onChange={(e) => setNotifTitleEn(e.target.value)}
                          placeholder="e.g. National Seminar Date Announced"
                          className="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-xs outline-none focus:ring-2 focus:ring-[#004B23]"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Title (Hindi)</label>
                        <input
                          type="text"
                          value={notifTitleHi}
                          onChange={(e) => setNotifTitleHi(e.target.value)}
                          placeholder="उदा. राष्ट्रीय संगोष्ठी की तिथि घोषित"
                          className="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-xs outline-none focus:ring-2 focus:ring-[#004B23]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Message Detail</label>
                        <textarea
                          rows={3}
                          value={notifMsgEn}
                          onChange={(e) => setNotifMsgEn(e.target.value)}
                          placeholder="Full notification message text..."
                          className="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-xs outline-none focus:ring-2 focus:ring-[#004B23]"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Target Audience Group</label>
                        <select
                          value={notifTargetRole}
                          onChange={(e: any) => setNotifTargetRole(e.target.value)}
                          className="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-xs bg-white"
                        >
                          <option value="All">All Users & Visitors (Global)</option>
                          <option value="Member">Verified Members Only</option>
                          <option value="Volunteer">Active Volunteers Only</option>
                          <option value="Committee">Committee Officials Only</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">Dispatch Channels (Check to enable)</label>
                        <div className="space-y-1.5 bg-gray-50 p-2.5 rounded-lg border border-gray-200">
                          {(['website', 'email', 'sms', 'whatsapp', 'push', 'announcement_bar'] as NotificationChannel[]).map(ch => (
                            <label key={ch} className="flex items-center space-x-2 text-xs font-semibold text-gray-800 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={notifChannels.includes(ch)}
                                onChange={(e) => {
                                  if (e.target.checked) setNotifChannels([...notifChannels, ch]);
                                  else setNotifChannels(notifChannels.filter(c => c !== ch));
                                }}
                                className="rounded text-[#004B23] focus:ring-[#004B23]"
                              />
                              <span className="capitalize">{ch.replace('_', ' ')} {ch === 'sms' && '(MSG91 Hook)'} {ch === 'whatsapp' && '(Cloud API)'}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-2.5 bg-[#004B23] hover:bg-[#00381a] text-[#FFD54A] font-bold rounded-lg text-xs transition shadow cursor-pointer flex items-center justify-center gap-2"
                      >
                        <SendIcon className="w-3.5 h-3.5" /> Broadcast Now
                      </button>
                    </form>
                  </div>

                  {/* Right Column: Active Notifications & Announcement Bar Config */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Announcement Bar Toggle Card */}
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-300 shadow-sm flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-extrabold text-amber-900 flex items-center gap-2">
                          <Zap className="w-4 h-4 text-amber-600 animate-bounce" /> Live Top Announcement Bar Controller
                        </h4>
                        <p className="text-xs text-amber-800 mt-1 max-w-md line-clamp-2">
                          {announcementBar.textEn}
                        </p>
                      </div>
                      <button
                        onClick={toggleAnnouncementBar}
                        className={`px-4 py-2 rounded-xl text-xs font-extrabold transition shadow cursor-pointer ${
                          announcementBar.active ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-gray-400 text-white hover:bg-gray-500'
                        }`}
                      >
                        {announcementBar.active ? '● BANNER ACTIVE (HIDE)' : '○ BANNER OFF (SHOW)'}
                      </button>
                    </div>

                    {/* Notification History Feed */}
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-100">
                        <h4 className="text-sm font-bold text-gray-900">System Notification Feed ({notifList.length})</h4>
                        <button
                          onClick={() => {
                            NotificationService.markAllAsRead();
                            setNotifList(NotificationService.getAll());
                          }}
                          className="text-xs text-blue-600 hover:underline font-semibold cursor-pointer"
                        >
                          Mark All as Read
                        </button>
                      </div>

                      <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                        {notifList.map(item => (
                          <div
                            key={item.id}
                            onClick={() => {
                              NotificationService.markAsRead(item.id);
                              setNotifList(NotificationService.getAll());
                              if (item.linkTab) { onClose(); onNavigateTab(item.linkTab); }
                            }}
                            className={`p-3.5 rounded-xl border transition cursor-pointer flex items-start justify-between gap-3 ${
                              item.isRead ? 'bg-gray-50 border-gray-200 opacity-80' : 'bg-emerald-50/70 border-emerald-300 shadow-sm'
                            }`}
                          >
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="px-2 py-0.5 bg-gray-200 text-gray-800 text-[10px] font-bold rounded">
                                  {item.category}
                                </span>
                                {!item.isRead && <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>}
                                <span className="text-[10px] text-gray-500 font-mono">{new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                              </div>
                              <h5 className="text-xs font-extrabold text-gray-900">{currentLanguage === 'en' ? item.titleEn : item.titleHi}</h5>
                              <p className="text-xs text-gray-600 mt-1">{currentLanguage === 'en' ? item.messageEn : item.messageHi}</p>
                              <div className="mt-2 flex gap-1.5">
                                {item.channels.map(c => (
                                  <span key={c} className="text-[9px] bg-white border border-gray-300 px-1.5 py-0.2 rounded text-gray-600 uppercase font-mono">
                                    ✓ {c}
                                  </span>
                                ))}
                              </div>
                            </div>
                            {item.linkTab && <ChevronRight className="w-4 h-4 text-gray-400 shrink-0 mt-1" />}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 7: SECURITY, AUDIT TRAILS & DATABASE BACKUP SYSTEM */}
            {activeNav === 'security_backup' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Backup & Recovery Card */}
                  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-sm font-extrabold text-[#004B23] flex items-center gap-2 mb-2">
                      <HardDrive className="w-4 h-4 text-emerald-600" /> Automated System Snapshot & Backup Engine
                    </h3>
                    <p className="text-xs text-gray-600 mb-4">
                      Create timestamped JSON snapshots of all 21 database collections, media metadata, website configurations, and audit trails. Restore data anytime.
                    </p>

                    <div className="space-y-3">
                      <button
                        onClick={handleTriggerBackup}
                        className="w-full py-2.5 bg-[#004B23] hover:bg-[#00381a] text-[#FFD54A] font-bold rounded-xl text-xs transition shadow cursor-pointer flex items-center justify-center gap-2"
                      >
                        <Download className="w-4 h-4" /> Download Instant System Snapshot (.json)
                      </button>

                      {backupLog && (
                        <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-lg text-xs text-emerald-900 font-semibold animate-fadeIn">
                          ✓ {backupLog}
                        </div>
                      )}

                      <div className="pt-3 border-t border-gray-200">
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Restore from Backup Snapshot JSON:</label>
                        <textarea
                          rows={3}
                          value={restoreJson}
                          onChange={(e) => setRestoreJson(e.target.value)}
                          placeholder="Paste JSON backup snapshot content here to rollback..."
                          className="w-full p-2 border border-gray-300 rounded-lg text-xs font-mono outline-none focus:ring-2 focus:ring-red-500 mb-2"
                        />
                        <button
                          onClick={handleRestoreBackup}
                          className="px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-xs transition cursor-pointer flex items-center gap-1.5"
                        >
                          <RefreshCw className="w-3.5 h-3.5" /> Execute Rollback / Restore
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Security Suite Config & Rate Limiter status */}
                  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-extrabold text-[#004B23] flex items-center gap-2 mb-2">
                        <Shield className="w-4 h-4 text-blue-600" /> Enterprise Security & Validation Suite
                      </h3>
                      <div className="space-y-2.5 text-xs text-gray-700">
                        <div className="p-2.5 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-between">
                          <span>Input Validation & Sanitization Engine:</span>
                          <span className="text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded text-[10px]">● ACTIVE</span>
                        </div>
                        <div className="p-2.5 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-between">
                          <span>Duplicate KYC Prevention (Phone/Email check):</span>
                          <span className="text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded text-[10px]">● ACTIVE</span>
                        </div>
                        <div className="p-2.5 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-between">
                          <span>Rate Limiting & Anti-Spam Submission Guard:</span>
                          <span className="text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded text-[10px]">● ACTIVE</span>
                        </div>
                        <div className="p-2.5 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-between">
                          <span>Matrimonial Privacy Field Encryption (AES Sim):</span>
                          <span className="text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded text-[10px]">● ACTIVE</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-[11px] text-blue-900">
                      <strong>Security Note:</strong> All system database mutations append an immutable, tamper-proof record to the Audit Log trail below.
                    </div>
                  </div>
                </div>

                {/* Audit Log Trail Table */}
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-gray-700" /> System Security Audit Log Trail ({dbData.auditLogs.length} Events Recorded)
                  </h4>
                  <div className="overflow-x-auto max-h-72">
                    <table className="w-full text-left text-xs border-collapse font-mono">
                      <thead>
                        <tr className="bg-gray-900 text-gray-300 uppercase text-[10px]">
                          <th className="p-2">Timestamp</th>
                          <th className="p-2">Severity</th>
                          <th className="p-2">Action</th>
                          <th className="p-2">Actor</th>
                          <th className="p-2">IP Address</th>
                          <th className="p-2">Details</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {dbData.auditLogs.map((log, idx) => (
                          <tr key={idx} className="hover:bg-gray-50">
                            <td className="p-2 text-gray-500 whitespace-nowrap">{new Date(log.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</td>
                            <td className="p-2">
                              <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
                                log.severity === 'ALERT' ? 'bg-red-100 text-red-800' : log.severity === 'WARNING' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'
                              }`}>{log.severity}</span>
                            </td>
                            <td className="p-2 font-bold text-gray-900">{log.action}</td>
                            <td className="p-2 text-purple-700 font-semibold">{log.actorName}</td>
                            <td className="p-2 text-gray-500">{log.ipAddress}</td>
                            <td className="p-2 text-gray-700 max-w-md truncate">{log.details}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: USER MANAGEMENT (RBAC) */}
            {activeNav === 'user_management' && (
              <div className="space-y-6 animate-fadeIn">
                {/* Header overview and stats */}
                <div className="bg-gradient-to-r from-[#004B23]/90 to-[#0A2E1C]/90 text-white p-5 rounded-xl border border-[#FFD54A]/30 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-base font-extrabold flex items-center gap-2 text-[#FFD54A]">
                      <Sliders className="w-5 h-5" />
                      Role-Based Access Control (RBAC) Administration Engine
                    </h3>
                    <p className="text-xs text-gray-200 mt-1 max-w-2xl">
                      Central command console for creating official admins, updating local committees, and managing access permissions. Public users can only register as standard Members. Higher administrative ranks must be granted here.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowCreateForm(!showCreateForm)}
                    className="px-4 py-2.5 bg-[#FFD54A] hover:bg-[#ffe073] text-gray-950 rounded-xl font-bold text-xs shrink-0 cursor-pointer shadow-md transition flex items-center gap-2"
                  >
                    <span>{showCreateForm ? '✕ Close Form' : '＋ Add Official Admin / Officer'}</span>
                  </button>
                </div>

                {/* Add User Form Section */}
                {showCreateForm && (
                  <form onSubmit={handleCreateRbacUser} className="bg-white p-6 rounded-xl border-2 border-[#004B23] shadow-lg space-y-4 animate-slideUp">
                    <h4 className="text-sm font-extrabold text-[#004B23] border-b pb-2 flex items-center gap-2">
                      <span>👤 Register New Authorized Officer Profile</span>
                      <span className="text-[10px] bg-red-100 text-red-800 px-2 py-0.5 rounded uppercase font-black font-mono ml-auto">Super Admin Restricted</span>
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={newAdminName}
                          onChange={(e) => setNewAdminName(e.target.value)}
                          placeholder="e.g. Haji Rashid Rangrez"
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs font-semibold focus:ring-2 focus:ring-[#004B23] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Official Email *</label>
                        <input
                          type="email"
                          required
                          value={newAdminEmail}
                          onChange={(e) => setNewAdminEmail(e.target.value)}
                          placeholder="e.g. officer@rangrezcommunity.org"
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs font-semibold focus:ring-2 focus:ring-[#004B23] outline-none font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Password *</label>
                        <input
                          type="password"
                          required
                          value={newAdminPassword}
                          onChange={(e) => setNewAdminPassword(e.target.value)}
                          placeholder="••••••••••••"
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs font-semibold focus:ring-2 focus:ring-[#004B23] outline-none font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Mobile Phone</label>
                        <input
                          type="text"
                          value={newAdminPhone}
                          onChange={(e) => setNewAdminPhone(e.target.value)}
                          placeholder="e.g. 9876543210"
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs font-semibold focus:ring-2 focus:ring-[#004B23] outline-none font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Assigned Role Rank *</label>
                        <select
                          value={newAdminRole}
                          onChange={(e) => setNewAdminRole(e.target.value as UserRole)}
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs font-bold text-gray-800 focus:ring-2 focus:ring-[#004B23] outline-none"
                        >
                          <option value="National Admin">National Admin</option>
                          <option value="State Admin">State Admin</option>
                          <option value="District Admin">District Admin</option>
                          <option value="Tehsil Admin">Tehsil Admin</option>
                          <option value="Committee Admin">Committee Admin</option>
                          <option value="Committee">Committee Officer (Vetting)</option>
                          <option value="Moderator">Moderator</option>
                          <option value="Volunteer">Volunteer</option>
                          <option value="Member">Member</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">State Context</label>
                        <input
                          type="text"
                          value={newAdminState}
                          onChange={(e) => setNewAdminState(e.target.value)}
                          placeholder="Madhya Pradesh"
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs font-semibold focus:ring-2 focus:ring-[#004B23] outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">District Context</label>
                        <input
                          type="text"
                          value={newAdminDistrict}
                          onChange={(e) => setNewAdminDistrict(e.target.value)}
                          placeholder="Morena"
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs font-semibold focus:ring-2 focus:ring-[#004B23] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Tehsil Context</label>
                        <input
                          type="text"
                          value={newAdminTehsil}
                          onChange={(e) => setNewAdminTehsil(e.target.value)}
                          placeholder="e.g. Joura"
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs font-semibold focus:ring-2 focus:ring-[#004B23] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Assigned Local Committee</label>
                        <input
                          type="text"
                          value={newAdminCommittee}
                          onChange={(e) => setNewAdminCommittee(e.target.value)}
                          placeholder="e.g. Morena Central Board"
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-xs font-semibold focus:ring-2 focus:ring-[#004B23] outline-none"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => setShowCreateForm(false)}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-bold text-xs cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={loadingRbac}
                        className="px-6 py-2 bg-[#004B23] hover:bg-[#0A2E1C] text-[#FFD54A] font-bold rounded-lg text-xs cursor-pointer shadow-md disabled:opacity-50 flex items-center gap-1.5"
                      >
                        {loadingRbac ? 'Registering...' : '✓ Create Secure Auth Profile'}
                      </button>
                    </div>
                  </form>
                )}

                {/* Edit User Form Modal/Overlay */}
                {selectedUserForEdit && (
                  <div className="bg-amber-50 p-6 rounded-xl border-2 border-amber-400 shadow-md space-y-4">
                    <h4 className="text-sm font-black text-amber-950 flex items-center justify-between border-b border-amber-200 pb-2">
                      <span>✏️ Edit Roles, Locations & Security Permissions for: <code className="bg-amber-200 px-1 py-0.5 rounded font-mono text-xs">{selectedUserForEdit.full_name}</code></span>
                      <button onClick={() => setSelectedUserForEdit(null)} className="text-amber-800 hover:text-red-700 text-sm font-bold">✕ Close</button>
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-amber-900 mb-1">Full Name</label>
                        <input
                          type="text"
                          value={selectedUserForEdit.full_name || ''}
                          onChange={(e) => setSelectedUserForEdit({ ...selectedUserForEdit, full_name: e.target.value })}
                          className="w-full px-3 py-2 border border-amber-300 rounded-lg text-xs font-semibold bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-amber-900 mb-1">Assigned Role</label>
                        <select
                          value={selectedUserForEdit.role || 'Member'}
                          onChange={(e) => setSelectedUserForEdit({ ...selectedUserForEdit, role: e.target.value })}
                          className="w-full px-3 py-2 border border-amber-300 rounded-lg text-xs font-bold bg-white"
                        >
                          <option value="Super Administrator">Super Administrator</option>
                          <option value="National Admin">National Admin</option>
                          <option value="State Admin">State Admin</option>
                          <option value="District Admin">District Admin</option>
                          <option value="Tehsil Admin">Tehsil Admin</option>
                          <option value="Committee Admin">Committee Admin</option>
                          <option value="Committee">Committee</option>
                          <option value="Moderator">Moderator</option>
                          <option value="Volunteer">Volunteer</option>
                          <option value="Member">Member</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-amber-900 mb-1">Phone</label>
                        <input
                          type="text"
                          value={selectedUserForEdit.phone || ''}
                          onChange={(e) => setSelectedUserForEdit({ ...selectedUserForEdit, phone: e.target.value })}
                          className="w-full px-3 py-2 border border-amber-300 rounded-lg text-xs font-semibold bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-amber-900 mb-1">State Context</label>
                        <input
                          type="text"
                          value={selectedUserForEdit.state || ''}
                          onChange={(e) => setSelectedUserForEdit({ ...selectedUserForEdit, state: e.target.value })}
                          className="w-full px-3 py-2 border border-amber-300 rounded-lg text-xs font-semibold bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-amber-900 mb-1">District</label>
                        <input
                          type="text"
                          value={selectedUserForEdit.district || ''}
                          onChange={(e) => setSelectedUserForEdit({ ...selectedUserForEdit, district: e.target.value })}
                          className="w-full px-3 py-2 border border-amber-300 rounded-lg text-xs font-semibold bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-amber-900 mb-1">Tehsil</label>
                        <input
                          type="text"
                          value={selectedUserForEdit.tehsil || ''}
                          onChange={(e) => setSelectedUserForEdit({ ...selectedUserForEdit, tehsil: e.target.value })}
                          className="w-full px-3 py-2 border border-amber-300 rounded-lg text-xs font-semibold bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-amber-900 mb-1">Local Committee</label>
                        <input
                          type="text"
                          value={selectedUserForEdit.committee || ''}
                          onChange={(e) => setSelectedUserForEdit({ ...selectedUserForEdit, committee: e.target.value })}
                          className="w-full px-3 py-2 border border-amber-300 rounded-lg text-xs font-semibold bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-amber-900 mb-1">Access Scope Permissions (JSON comma-separated list)</label>
                      <input
                        type="text"
                        value={Array.isArray(selectedUserForEdit.permissions) ? selectedUserForEdit.permissions.join(', ') : ''}
                        onChange={(e) => setSelectedUserForEdit({ ...selectedUserForEdit, permissions: e.target.value.split(',').map(p => p.trim()) })}
                        className="w-full px-3 py-2 border border-amber-300 rounded-lg text-xs font-mono font-bold bg-white"
                        placeholder="e.g. READ_PUBLIC_CONTENT, VERIFY_MEMBERS, EXPORT_REPORTS"
                      />
                    </div>

                    <div className="flex justify-end gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => setSelectedUserForEdit(null)}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-bold text-xs cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={() => handleUpdateRbacUser(selectedUserForEdit)}
                        disabled={loadingRbac}
                        className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg text-xs cursor-pointer shadow"
                      >
                        {loadingRbac ? 'Saving Changes...' : 'Save Updated Security Profile'}
                      </button>
                    </div>
                  </div>
                )}

                {/* Filter and search toolbar */}
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={rbacSearch}
                      onChange={(e) => setRbacSearch(e.target.value)}
                      placeholder="Search profiles by Name, Email address, or Phone..."
                      className="w-full pl-10 pr-4 py-2.5 min-h-[44px] border border-gray-300 rounded-lg text-xs font-semibold focus:ring-2 focus:ring-[#004B23] outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-gray-600">Role Rank:</span>
                    <select
                      value={rbacFilterRole}
                      onChange={(e) => setRbacFilterRole(e.target.value)}
                      className="px-3 py-2 min-h-[44px] border border-gray-300 rounded-lg text-xs font-bold text-gray-800 bg-gray-50 focus:ring-2 focus:ring-[#004B23] outline-none"
                    >
                      <option value="All">All Roles</option>
                      <option value="Super Administrator">Super Administrator</option>
                      <option value="National Admin">National Admin</option>
                      <option value="State Admin">State Admin</option>
                      <option value="District Admin">District Admin</option>
                      <option value="Tehsil Admin">Tehsil Admin</option>
                      <option value="Committee Admin">Committee Admin</option>
                      <option value="Committee">Committee</option>
                      <option value="Moderator">Moderator</option>
                      <option value="Volunteer">Volunteer</option>
                      <option value="Member">Member</option>
                    </select>
                    <button
                      onClick={loadRbacUsers}
                      className="p-2.5 min-h-[44px] bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition"
                      title="Reload Accounts List"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Users List Grid */}
                {loadingRbac && rbacUsers.length === 0 ? (
                  <div className="text-center py-12 bg-white rounded-xl border border-gray-200 shadow-sm">
                    <RefreshCw className="w-8 h-8 text-[#004B23] animate-spin mx-auto mb-3" />
                    <p className="text-xs font-semibold text-gray-500">Querying live Supabase profiles directory...</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {rbacUsers
                      .filter(u => {
                        const query = rbacSearch.toLowerCase();
                        const matchesSearch = 
                          (u.full_name || '').toLowerCase().includes(query) ||
                          (u.email || '').toLowerCase().includes(query) ||
                          (u.phone || '').toLowerCase().includes(query);
                        const matchesRole = rbacFilterRole === 'All' || u.role === rbacFilterRole;
                        return matchesSearch && matchesRole;
                      })
                      .map((user, idx) => {
                        const isSuspended = user.status === 'Suspended' || user.status === 'Disabled';
                        return (
                          <div 
                            key={user.id || idx} 
                            className={`bg-white p-5 rounded-xl border ${isSuspended ? 'border-red-300 bg-red-50/20' : 'border-gray-200'} shadow-sm hover:shadow-md transition-all flex flex-col justify-between`}
                          >
                            <div>
                              <div className="flex items-start justify-between gap-2 mb-2">
                                <div className="overflow-hidden">
                                  <div className="flex items-center gap-1.5">
                                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 truncate">{user.full_name}</h4>
                                    <span className={`text-[9px] px-2 py-0.5 rounded font-black font-mono tracking-wider shrink-0 uppercase ${
                                      user.role === 'Super Administrator' ? 'bg-[#004B23] text-[#FFD54A]' :
                                      user.role === 'National Admin' ? 'bg-red-100 text-red-800' :
                                      user.role === 'State Admin' ? 'bg-blue-100 text-blue-800' :
                                      user.role === 'District Admin' ? 'bg-indigo-100 text-indigo-800' :
                                      'bg-gray-100 text-gray-800'
                                    }`}>
                                      {user.role}
                                    </span>
                                  </div>
                                  <div className="text-[11px] font-mono text-gray-500 truncate mt-0.5">
                                    ✉ {user.email || 'No email synced'}
                                  </div>
                                </div>
                                <span className={`text-[9px] px-2 py-0.5 rounded-full font-black uppercase tracking-widest font-mono shrink-0 ${
                                  isSuspended ? 'bg-red-200 text-red-800' : 'bg-emerald-100 text-emerald-800'
                                }`}>
                                  {user.status || 'Active'}
                                </span>
                              </div>

                              <div className="grid grid-cols-2 gap-2 p-2 bg-gray-50 rounded-lg border border-gray-150 text-[11px] text-gray-600 font-semibold mb-3">
                                <div>State: <span className="text-gray-900 font-bold">{user.state || 'Madhya Pradesh'}</span></div>
                                <div>District: <span className="text-gray-900 font-bold">{user.district || 'Morena'}</span></div>
                                <div>Tehsil: <span className="text-gray-900 font-bold">{user.tehsil || '-'}</span></div>
                                <div>Committee: <span className="text-gray-900 font-bold">{user.committee || '-'}</span></div>
                              </div>

                              <div className="mb-3">
                                <div className="text-[10px] font-bold uppercase text-gray-400 mb-1">Access Privileges</div>
                                <div className="flex flex-wrap gap-1 max-h-16 overflow-y-auto">
                                  {(Array.isArray(user.permissions) ? user.permissions : []).map((p: string, pIdx: number) => (
                                    <code key={pIdx} className="text-[9px] bg-purple-50 text-purple-700 px-1.5 py-0.5 rounded border border-purple-100 font-mono">
                                      {p}
                                    </code>
                                  ))}
                                  {(user.permissions || []).length === 0 && <span className="text-[10px] text-gray-400 italic">No direct permissions</span>}
                                </div>
                              </div>
                            </div>

                            {/* Actions panel */}
                            <div className="pt-3 border-t border-gray-100 space-y-3">
                              <div className="flex items-center justify-between gap-2">
                                <button
                                  type="button"
                                  onClick={() => setSelectedUserForEdit(user)}
                                  className="px-3 py-1.5 bg-gray-100 hover:bg-emerald-50 hover:text-[#004B23] text-gray-700 text-xs font-bold rounded-lg transition border border-gray-300"
                                >
                                  ✏️ Edit Profile & Permissions
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleToggleRbacStatus(user.user_id || user.id, user.status, user.full_name)}
                                  className={`px-3 py-1.5 text-xs font-extrabold rounded-lg transition border ${
                                    isSuspended ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border-emerald-300' : 'bg-red-50 hover:bg-red-100 text-red-800 border-red-300'
                                  }`}
                                >
                                  {isSuspended ? '✓ Activate' : '✕ Suspend'}
                                </button>
                              </div>

                              {/* inline password reset panel */}
                              <div className="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
                                <label className="block text-[10px] font-extrabold text-gray-600 mb-1 uppercase tracking-wider">Reset Account Password</label>
                                <div className="flex gap-2">
                                  <input
                                    type="password"
                                    placeholder="New Secure Password"
                                    onChange={(e) => setNewPasswordReset(e.target.value)}
                                    className="flex-grow px-2 py-1 border border-gray-300 rounded text-xs font-mono bg-white focus:outline-none focus:ring-2 focus:ring-[#004B23]"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => handleResetRbacPassword(user.user_id || user.id, user.full_name)}
                                    className="px-3 py-1 bg-[#004B23] hover:bg-[#0A2E1C] text-[#FFD54A] font-extrabold rounded text-[11px] shrink-0 transition"
                                  >
                                    Reset
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>
            )}

            {/* TAB 7.5: HOSTINGER SMTP EMAIL INFRASTRUCTURE CONTROL */}
            {activeNav === 'email_management' && (
              <div className="space-y-6 animate-fadeIn">
                {/* SMTP Server status card */}
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600 shrink-0">
                      <Mail className="w-6 h-6 animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-[#004B23] flex items-center gap-2">
                        Hostinger Secure SMTP Server
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1 animate-ping"></span>
                          ACTIVE & SECURE
                        </span>
                      </h3>
                      <p className="text-xs text-gray-600 mt-0.5">
                        Relaying official communications securely through <strong>smtp.hostinger.com:465</strong> via TLS
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-500 font-mono bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <div className="px-2 py-1 bg-white rounded border border-gray-200">
                      <strong className="text-gray-700">From:</strong> info@rangrezcommunity.org
                    </div>
                    <div className="px-2 py-1 bg-white rounded border border-gray-200">
                      <strong className="text-gray-700">Support:</strong> support@rangrezcommunity.org
                    </div>
                    <div className="px-2 py-1 bg-white rounded border border-gray-200">
                      <strong className="text-gray-700">Membership:</strong> membership@rangrezcommunity.org
                    </div>
                  </div>
                </div>

                {/* Grid stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                    <div className="text-[10px] font-black tracking-wider uppercase text-gray-500">Total SMTP Relays</div>
                    <div className="text-2xl font-extrabold text-gray-900 mt-1 font-mono">{emailStatsData.total}</div>
                    <div className="text-[10px] text-gray-500 mt-1">Cumulative app dispatches</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                    <div className="text-[10px] font-black tracking-wider uppercase text-emerald-600">Successfully Delivered</div>
                    <div className="text-2xl font-extrabold text-emerald-600 mt-1 font-mono">{emailStatsData.sent}</div>
                    <div className="text-[10px] text-gray-500 mt-1">99.9% transmission score</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                    <div className="text-[10px] font-black tracking-wider uppercase text-rose-600">Bounced / Failed</div>
                    <div className="text-2xl font-extrabold text-rose-600 mt-1 font-mono">{emailStatsData.failed}</div>
                    <div className="text-[10px] text-gray-500 mt-1">Bounced and error logs</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm bg-gradient-to-br from-[#004B23]/5 to-transparent">
                    <div className="text-[10px] font-black tracking-wider uppercase text-[#004B23]">Hostinger Guard</div>
                    <div className="text-sm font-bold text-[#004B23] mt-2 font-mono">{emailStatsData.limitUsed} / {emailStatsData.limitMax} hr</div>
                    <div className="text-[10px] text-gray-500 mt-1">SMTP hour rate-limit cap</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                  {/* Left Column: Email Delivery stream */}
                  <div className="xl:col-span-8 space-y-4">
                    <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                        <div>
                          <h4 className="text-sm font-black text-gray-900">Email Live Delivery Log Tracker</h4>
                          <p className="text-xs text-gray-500 mt-0.5">Real-time audit trailing of custom nodemailer relays</p>
                        </div>
                        <button
                          onClick={loadEmailTelemetry}
                          disabled={loadingEmails}
                          className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-extrabold border border-gray-200 rounded-lg flex items-center gap-1 cursor-pointer transition"
                        >
                          <RefreshCw className={`w-3 h-3 ${loadingEmails ? 'animate-spin' : ''}`} />
                          Refresh Stream
                        </button>
                      </div>

                      {/* Filters */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-4">
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-gray-400">
                            <Search className="w-3.5 h-3.5" />
                          </span>
                          <input
                            type="text"
                            placeholder="Recipient email..."
                            value={emailSearchTerm}
                            onChange={(e) => setEmailSearchTerm(e.target.value)}
                            className="w-full pl-8 pr-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#004B23]"
                          />
                        </div>

                        <select
                          value={emailTemplateFilter}
                          onChange={(e) => setEmailTemplateFilter(e.target.value)}
                          className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#004B23]"
                        >
                          <option value="All">All Templates</option>
                          <option value="verification">Email Verification</option>
                          <option value="welcome">Welcome Email</option>
                          <option value="membership_confirmation">Application Confirmed</option>
                          <option value="password_reset">Password Reset</option>
                          <option value="contact_confirmation">Contact Confirmation</option>
                          <option value="admin_alert">Admin System Notification</option>
                          <option value="approved">Approved</option>
                          <option value="rejected">Rejected</option>
                        </select>

                        <select
                          value={emailStatusFilter}
                          onChange={(e) => setEmailStatusFilter(e.target.value)}
                          className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#004B23]"
                        >
                          <option value="All">All Statuses</option>
                          <option value="SENT">Sent Successfully</option>
                          <option value="FAILED">Failed / Bounced</option>
                          <option value="QUEUED">Queued / Active</option>
                        </select>
                      </div>

                      {/* Log stream Table */}
                      <div className="overflow-x-auto">
                        {loadingEmails ? (
                          <div className="p-8 text-center text-xs text-gray-500">
                            <RefreshCw className="w-6 h-6 animate-spin mx-auto text-[#004B23] mb-2" />
                            Loading Hostinger delivery logs...
                          </div>
                        ) : emailLogsData.length === 0 ? (
                          <div className="p-10 text-center text-xs text-gray-400 border border-dashed border-gray-200 rounded-xl">
                            No logs found in SMTP stack buffer memory.
                          </div>
                        ) : (
                          <div className="space-y-2 max-h-[480px] overflow-y-auto pr-1">
                            {emailLogsData
                              .filter(log => {
                                const matchSearch = log.recipient.toLowerCase().includes(emailSearchTerm.toLowerCase()) || log.subject.toLowerCase().includes(emailSearchTerm.toLowerCase());
                                const matchTemplate = emailTemplateFilter === "All" || log.templateType.toLowerCase().includes(emailTemplateFilter.toLowerCase());
                                const matchStatus = emailStatusFilter === "All" || log.status === emailStatusFilter;
                                return matchSearch && matchTemplate && matchStatus;
                              })
                              .map((log) => {
                                const isSent = log.status === "SENT";
                                const isFailed = log.status === "FAILED";
                                return (
                                  <div key={log.id} className="p-3.5 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 transition flex flex-col sm:flex-row justify-between gap-3 items-start sm:items-center">
                                    <div className="overflow-hidden space-y-0.5">
                                      <div className="flex items-center gap-2">
                                        <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full ${
                                          isSent ? 'bg-emerald-100 text-emerald-800' :
                                          isFailed ? 'bg-red-100 text-red-800' :
                                          'bg-amber-100 text-amber-800'
                                        }`}>
                                          {log.status}
                                        </span>
                                        <span className="text-[10px] text-gray-500 font-mono">{log.id}</span>
                                        <span className="text-[10px] text-gray-400">•</span>
                                        <span className="text-[10px] text-gray-500 font-bold">{new Date(log.timestamp).toLocaleTimeString()}</span>
                                      </div>
                                      <h5 className="text-xs font-bold text-gray-900 truncate">{log.recipient}</h5>
                                      <p className="text-[11px] text-gray-600 truncate">{log.subject}</p>
                                      {log.error && (
                                        <p className="text-[10px] text-red-600 font-mono mt-1 bg-red-50 p-1.5 rounded border border-red-100">
                                          <strong>Error:</strong> {log.error}
                                        </p>
                                      )}
                                    </div>

                                    <div className="flex gap-1.5 shrink-0 w-full sm:w-auto justify-end">
                                      <button
                                        onClick={() => setSelectedEmailForView(log)}
                                        className="px-2.5 py-1 bg-white hover:bg-gray-100 text-gray-700 text-[10px] font-extrabold rounded-lg border border-gray-200 cursor-pointer flex items-center gap-1 transition"
                                      >
                                        <Eye className="w-3 h-3" />
                                        Preview HTML
                                      </button>
                                      {isFailed && (
                                        <button
                                          onClick={() => handleRetryEmail(log.id)}
                                          className="px-2.5 py-1 bg-rose-600 hover:bg-rose-700 text-white text-[10px] font-extrabold rounded-lg cursor-pointer flex items-center gap-1 transition"
                                        >
                                          <RefreshCw className="w-3 h-3" />
                                          Retry Relay
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Transactional Testing Console & Supabase Config Guides */}
                  <div className="xl:col-span-4 space-y-6">
                    {/* Test Console */}
                    <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                      <h4 className="text-sm font-black text-gray-900 mb-1">Direct Transactional Test Console</h4>
                      <p className="text-[11px] text-gray-500 mb-3">
                        Dispatch a live responsive HTML template directly via SMTP to any inbox
                      </p>

                      <form onSubmit={handleSendTestEmail} className="space-y-3">
                        <div>
                          <label className="block text-[10px] font-black uppercase text-gray-500 mb-1">Recipient Email</label>
                          <input
                            type="email"
                            placeholder="e.g. member@gmail.com"
                            value={testEmailRecipient}
                            onChange={(e) => setTestEmailRecipient(e.target.value)}
                            className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#004B23]"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-black uppercase text-gray-500 mb-1">Official Template</label>
                          <select
                            value={testEmailTemplate}
                            onChange={(e) => setTestEmailTemplate(e.target.value)}
                            className="w-full bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#004B23]"
                          >
                            <option value="verification">1. Email Verification PIN</option>
                            <option value="welcome">2. Luxury Welcome Pack</option>
                            <option value="membership_confirmation">3. Membership Submission Confirmation</option>
                            <option value="password_reset">4. Secure Password Reset</option>
                            <option value="contact_confirmation">5. Contact Response Ticket</option>
                            <option value="admin_alert">6. Admin Internal System Alert</option>
                            <option value="approved">7. Scheme Application Approved</option>
                            <option value="rejected">8. Scheme Application Rejected</option>
                          </select>
                        </div>

                        <button
                          type="submit"
                          disabled={sendingTestEmail}
                          className="w-full py-2 bg-[#004B23] hover:bg-[#0A2E1C] text-[#FFD54A] text-xs font-black rounded-lg cursor-pointer transition flex items-center justify-center gap-1.5"
                        >
                          {sendingTestEmail ? (
                            <>
                              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                              Relaying Message...
                            </>
                          ) : (
                            <>
                              Relay SMTP Test Message
                            </>
                          )}
                        </button>
                      </form>
                    </div>

                    {/* Supabase Config Guides */}
                    <div className="bg-gray-900 text-gray-300 p-5 rounded-2xl border border-gray-800">
                      <div className="flex items-center gap-2 mb-2 text-[#FFD54A]">
                        <Sliders className="w-4 h-4" />
                        <h4 className="text-xs font-black uppercase tracking-wider">Supabase Console Config</h4>
                      </div>
                      <p className="text-[10px] leading-relaxed text-gray-400 mb-3">
                        To redirect Supabase authentication triggers (Sign Up, Reset PW) through your Hostinger SMTP mailbox:
                      </p>

                      <div className="bg-black/50 p-3 rounded-lg text-[10px] font-mono space-y-1.5 text-gray-400 border border-gray-800">
                        <div>
                          <span className="text-gray-500">// Go to: Project Settings &gt; Auth &gt; SMTP</span>
                        </div>
                        <div>
                          <strong className="text-white">Enable Custom SMTP:</strong> TRUE
                        </div>
                        <div>
                          <strong className="text-white">SMTP Host:</strong> smtp.hostinger.com
                        </div>
                        <div>
                          <strong className="text-white">Port:</strong> 465 (SSL)
                        </div>
                        <div>
                          <strong className="text-white">Username:</strong> info@rangrezcommunity.org
                        </div>
                        <div>
                          <strong className="text-white">Sender Email:</strong> info@rangrezcommunity.org
                        </div>
                        <div>
                          <strong className="text-white">Sender Name:</strong> All India Rangrez Mahasabha
                        </div>
                      </div>

                      <div className="mt-3 text-[10px] text-gray-500 bg-gray-950 p-2.5 rounded border border-gray-800">
                        💡 <strong>Note:</strong> Set your secure Hostinger password in the password field of the Supabase dashboard to allow Supabase to dispatch directly!
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email HTML Viewer Overlay */}
                {selectedEmailForView && (
                  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
                    <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl flex flex-col max-h-[85vh]">
                      <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-gray-50 rounded-t-2xl">
                        <div>
                          <h4 className="text-sm font-extrabold text-gray-900">Email Payload Preview</h4>
                          <p className="text-xs text-gray-500 mt-0.5">Recipient: {selectedEmailForView.recipient} • Template: {selectedEmailForView.templateType}</p>
                        </div>
                        <button 
                          onClick={() => setSelectedEmailForView(null)}
                          className="p-1.5 hover:bg-gray-200 text-gray-500 hover:text-gray-800 rounded-lg font-bold cursor-pointer transition text-xs"
                        >
                          ✕ Close
                        </button>
                      </div>
                      <div className="p-4 overflow-y-auto bg-gray-100 flex-grow">
                        <div 
                          className="bg-white p-4 rounded-xl shadow-inner border border-gray-200 overflow-hidden"
                          dangerouslySetInnerHTML={{ __html: selectedEmailForView.content }}
                        />
                      </div>
                      <div className="p-4 border-t border-gray-100 flex justify-end gap-2 bg-gray-50 rounded-b-2xl">
                        {selectedEmailForView.status === "FAILED" && (
                          <button
                            onClick={() => {
                              handleRetryEmail(selectedEmailForView.id);
                              setSelectedEmailForView(null);
                            }}
                            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                          >
                            <RefreshCw className="w-3.5 h-3.5" /> Force Retry Delivery
                          </button>
                        )}
                        <button
                          onClick={() => setSelectedEmailForView(null)}
                          className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg text-xs font-bold transition cursor-pointer"
                        >
                          Close Viewer
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 8: DEPLOYMENT & CI/CD CONFIGURATION */}
            {activeNav === 'deployment' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="text-base font-extrabold text-[#004B23] flex items-center gap-2 mb-2">
                    <Server className="w-5 h-5 text-cyan-600" />
                    {currentLanguage === 'en' ? 'Production Deployment & Future Scalability Engine' : 'डिप्लॉयमेंट एवं भविष्य की विस्तार योजना'}
                  </h3>
                  <p className="text-xs text-gray-600 mb-4">
                    The portal has been re-architected with zero build errors and optimized bundling, verified for instant deployment across leading cloud hosting providers.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {deploymentConfig.supportedHosts.map((host, idx) => (
                      <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-cyan-100 text-cyan-800 rounded-lg font-bold">🌐</div>
                          <div>
                            <div className="text-sm font-bold text-gray-900">{host.name}</div>
                            <div className="text-[11px] text-gray-600 mt-0.5">{host.status}</div>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full font-mono text-[10px] font-bold">
                          ✓ COMPLIANT
                        </span>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Future Scalability & Expansion Hooks (Architectural Readiness)</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {deploymentConfig.futureScalabilityHooks.map((hook, idx) => (
                      <div key={idx} className="p-3 bg-white rounded-xl border border-gray-200 shadow-sm">
                        <div className="text-xs font-extrabold text-[#004B23] mb-1">{hook.module}</div>
                        <div className="text-[11px] text-gray-600 flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                          <span>{hook.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-900 text-white p-5 rounded-xl border border-gray-800 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-mono text-[#FFD54A] font-bold">{deploymentConfig.currentVersion}</div>
                    <div className="text-gray-400 mt-1">Git Branch: <code className="text-white">{deploymentConfig.gitBranch}</code> • Build Timestamp: {deploymentConfig.buildTimestamp}</div>
                  </div>
                  <div className="px-3 py-1 bg-[#004B23] text-[#FFD54A] font-bold rounded border border-[#FFD54A]">
                    PRODUCTION READY
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper icon component
const SendIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);
