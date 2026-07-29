// ============================================================================
// ENTERPRISE AUTHENTICATION SYSTEM FOR RANGREZ COMMUNITY BHARAT PORTAL
// Supports Visitor, Member, Volunteer, Committee, Moderator, Super Administrator
// ============================================================================

import { getSupabase } from '../lib/supabaseClient';

export type UserRole = 
  | 'Visitor' 
  | 'Member' 
  | 'Volunteer' 
  | 'Committee' 
  | 'District Admin'
  | 'State Admin'
  | 'National Admin'
  | 'Moderator' 
  | 'Super Administrator';

export interface UserSession {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  isEmailVerified: boolean;
  isOtpVerified: boolean;
  district: string;
  state: string;
  tehsil?: string;
  committee?: string;
  avatarUrl?: string;
  memberId?: string;
  createdAt: string;
  lastLoginAt: string;
  token: string;
  permissions: string[];
}

export interface RegisterPayload {
  name: string;
  email: string;
  phone: string;
  password?: string;
  role: UserRole;
  district: string;
  state: string;
}

// Role-to-Permissions Mapping Table
export const ROLE_PERMISSIONS: Record<UserRole, string[]> = {
  'Visitor': [
    'READ_PUBLIC_CONTENT',
    'SEARCH_GLOBAL_DIRECTORY',
    'VIEW_SCHEMES',
    'VIEW_NEWS'
  ],
  'Member': [
    'READ_PUBLIC_CONTENT',
    'SEARCH_GLOBAL_DIRECTORY',
    'VIEW_SCHEMES',
    'VIEW_NEWS',
    'MANAGE_OWN_PROFILE',
    'REGISTER_FAMILY_CENSUS',
    'CREATE_MATRIMONIAL_PROFILE',
    'SUBMIT_SUGGESTION',
    'APPLY_SCHOLARSHIP',
    'APPLY_JOB',
    'VIEW_MEMBER_DASHBOARD'
  ],
  'Volunteer': [
    'READ_PUBLIC_CONTENT',
    'SEARCH_GLOBAL_DIRECTORY',
    'VIEW_SCHEMES',
    'VIEW_NEWS',
    'MANAGE_OWN_PROFILE',
    'REGISTER_FAMILY_CENSUS',
    'MANAGE_SERVICE_ACTIVITIES',
    'ORGANIZE_MEDICAL_CAMP',
    'LOG_BLOOD_DONATION',
    'RECORD_TREE_PLANTATION',
    'VIEW_VOLUNTEER_DASHBOARD',
    'RECEIVE_DIGITAL_BADGE'
  ],
  'Committee': [
    'READ_PUBLIC_CONTENT',
    'SEARCH_GLOBAL_DIRECTORY',
    'VIEW_SCHEMES',
    'VIEW_NEWS',
    'MANAGE_OWN_PROFILE',
    'MANAGE_AREA_COMMITTEE',
    'VERIFY_LOCAL_MEMBERS',
    'PUBLISH_LOCAL_EVENTS',
    'VIEW_COMMITTEE_DASHBOARD',
    'GENERATE_REGIONAL_REPORTS',
    'PARTICIPATE_MAHAPANCHAYAT'
  ],
  'District Admin': [
    'READ_PUBLIC_CONTENT',
    'SEARCH_GLOBAL_DIRECTORY',
    'VIEW_SCHEMES',
    'VIEW_NEWS',
    'MANAGE_OWN_PROFILE',
    'MANAGE_AREA_COMMITTEE',
    'VERIFY_LOCAL_MEMBERS',
    'PUBLISH_LOCAL_EVENTS',
    'VIEW_COMMITTEE_DASHBOARD',
    'GENERATE_REGIONAL_REPORTS',
    'PARTICIPATE_MAHAPANCHAYAT',
    'MANAGE_DISTRICT_MEMBERS',
    'APPROVE_DISTRICT_SCHOLARSHIPS',
    'VIEW_DISTRICT_ANALYTICS'
  ],
  'State Admin': [
    'READ_PUBLIC_CONTENT',
    'SEARCH_GLOBAL_DIRECTORY',
    'VIEW_SCHEMES',
    'VIEW_NEWS',
    'MANAGE_OWN_PROFILE',
    'MANAGE_AREA_COMMITTEE',
    'VERIFY_LOCAL_MEMBERS',
    'PUBLISH_LOCAL_EVENTS',
    'VIEW_COMMITTEE_DASHBOARD',
    'GENERATE_REGIONAL_REPORTS',
    'PARTICIPATE_MAHAPANCHAYAT',
    'MANAGE_DISTRICT_MEMBERS',
    'MANAGE_STATE_COMMITTEES',
    'APPROVE_STATE_SCHEMES',
    'VIEW_STATE_ANALYTICS'
  ],
  'National Admin': [
    'READ_PUBLIC_CONTENT',
    'SEARCH_GLOBAL_DIRECTORY',
    'VIEW_SCHEMES',
    'VIEW_NEWS',
    'MANAGE_OWN_PROFILE',
    'MANAGE_AREA_COMMITTEE',
    'VERIFY_LOCAL_MEMBERS',
    'PUBLISH_LOCAL_EVENTS',
    'VIEW_COMMITTEE_DASHBOARD',
    'GENERATE_REGIONAL_REPORTS',
    'PARTICIPATE_MAHAPANCHAYAT',
    'MANAGE_DISTRICT_MEMBERS',
    'MANAGE_STATE_COMMITTEES',
    'MANAGE_NATIONAL_PROGRAMS',
    'APPROVE_GLOBAL_RESOLUTIONS',
    'VIEW_NATIONAL_ANALYTICS'
  ],
  'Moderator': [
    'READ_PUBLIC_CONTENT',
    'SEARCH_GLOBAL_DIRECTORY',
    'VIEW_SCHEMES',
    'VIEW_NEWS',
    'MANAGE_OWN_PROFILE',
    'VERIFY_MATRIMONIAL_PROFILES',
    'MODERATE_SUGGESTIONS',
    'APPROVE_VOLUNTEER_HOURS',
    'MANAGE_MEDIA_UPLOADS',
    'REVIEW_JOB_LISTINGS',
    'VIEW_ANALYTICS_DASHBOARD'
  ],
  'Super Administrator': [
    'READ_PUBLIC_CONTENT',
    'SEARCH_GLOBAL_DIRECTORY',
    'VIEW_SCHEMES',
    'VIEW_NEWS',
    'MANAGE_OWN_PROFILE',
    'FULL_WEBSITE_CONTROL',
    'MANAGE_ALL_USERS',
    'ASSIGN_ROLES_PERMISSIONS',
    'MANAGE_SYSTEM_SETTINGS',
    'EXECUTE_DATABASE_BACKUPS',
    'VIEW_SECURITY_AUDIT_LOGS',
    'GENERATE_ALL_REPORTS',
    'MANAGE_MAHAPANCHAYAT_RESOLUTIONS',
    'DEPLOYMENT_CONFIG_CONTROL'
  ]
};

const SESSION_STORAGE_KEY = 'rcb_enterprise_auth_session';
const REGISTERED_USERS_KEY = 'rcb_registered_users_mock';

export const DEFAULT_VISITOR_SESSION: UserSession = {
  id: 'guest_visitor',
  name: 'Guest Visitor',
  email: 'visitor@rangrezcommunity.org',
  phone: '',
  role: 'Visitor',
  isEmailVerified: true,
  isOtpVerified: true,
  district: 'Gwalior',
  state: 'Madhya Pradesh',
  createdAt: new Date().toISOString(),
  lastLoginAt: new Date().toISOString(),
  token: 'guest_token_visitor_public_access',
  permissions: ROLE_PERMISSIONS['Visitor']
};

export class AuthService {
  /**
   * Retrieves all mock registered users from local storage
   */
  static getAllRegisteredUsers(): UserSession[] {
    try {
      const stored = localStorage.getItem(REGISTERED_USERS_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed to parse registered users:', e);
    }
    return [];
  }

  /**
   * Production session validation and security check
   */
  static validateSession(): { valid: boolean; session: UserSession | null; reason?: string } {
    const session = this.getCurrentSession();
    if (!session || session.role === 'Visitor' || !session.token) {
      return { valid: false, session: null, reason: 'No active session found.' };
    }
    const lastLogin = new Date(session.lastLoginAt || 0).getTime();
    const now = Date.now();
    const ttlMillis = 24 * 60 * 60 * 1000;
    if (now - lastLogin > ttlMillis) {
      this.logout();
      return { valid: false, session: null, reason: 'Session expired (TTL 24h). Please log in again.' };
    }
    return { valid: true, session };
  }

  /**
   * Retrieves the current active user session from local persistence
   */
  static getCurrentSession(): UserSession {
    try {
      const stored = localStorage.getItem(SESSION_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed === 'object' && parsed.role) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to parse user session:', e);
    }
    return DEFAULT_VISITOR_SESSION;
  }

  /**
   * Saves user session and triggers audit event
   */
  static setSession(session: UserSession): void {
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
    window.dispatchEvent(new CustomEvent('rcb_auth_changed', { detail: session }));
  }

  /**
   * Log in with email/password or Google Sign-In (Temporarily set to Information Portal Mode)
   */
  static async login(email: string, password?: string): Promise<{ success: boolean; session?: UserSession; error?: string }> {
    return {
      success: false,
      error: 'Portal Authentication is currently in Public Information Mode. User registration and login will open following the official enterprise launch.'
    };
  }

  /**
   * Register a new user (Temporarily set to Information Portal Mode)
   */
  static async register(payload: RegisterPayload): Promise<{ success: boolean; session?: UserSession; error?: string }> {
    return {
      success: false,
      error: 'User Registration is temporarily paused for system upgrade. Registration will re-open with Google Sign-In and Mobile OTP verification.'
    };
  }

  /**
   * Log out and revert to Visitor session
   */
  static async logout(): Promise<void> {
    try {
      localStorage.removeItem(SESSION_STORAGE_KEY);
    } catch (e) {
      // Ignore local storage clear error
    }
    window.dispatchEvent(new CustomEvent('rcb_auth_changed', { detail: DEFAULT_VISITOR_SESSION }));
  }

  /**
   * Simulate OTP verification (Bypassed in production mode in favor of real email confirmation)
   */
  static verifyOtp(otpCode: string): { success: boolean; message: string } {
    const current = this.getCurrentSession();
    const updated: UserSession = { ...current, isOtpVerified: true, isEmailVerified: true };
    this.setSession(updated);
    return { success: true, message: 'OTP verified successfully! Full secure access granted.' };
  }

  /**
   * Simulate sending verification email or OTP SMS
   */
  static sendVerificationOtp(phoneOrEmail: string): { success: boolean; message: string } {
    return {
      success: true,
      message: `Verification link/code dispatched to ${phoneOrEmail} successfully.`
    };
  }

  /**
   * Role-Based Access Control check
   */
  static hasRole(requiredRoles: UserRole[]): boolean {
    const session = this.getCurrentSession();
    if (!session) return false;
    if (session.role === 'Super Administrator') return true; // Super admin bypass
    return requiredRoles.includes(session.role);
  }

  /**
   * Permission verification helper
   */
  static hasPermission(permission: string): boolean {
    const session = this.getCurrentSession();
    if (!session) return false;
    if (session.role === 'Super Administrator') return true;
    return session.permissions.includes(permission);
  }

  /**
   * Only Super Admin can assign roles to other users.
   * Enforces constraint: No more than one Super Admin.
   */
  static async assignRole(targetUserId: string, newRole: UserRole): Promise<{ success: boolean; error?: string }> {
    const supabase = getSupabase();
    if (!supabase) return { success: false, error: 'Supabase not initialized' };

    const session = this.getCurrentSession();
    if (!session || session.role !== 'Super Administrator') {
      return { success: false, error: 'Unauthorized' };
    }

    if (newRole === 'Super Administrator') {
      // Check if another Super Admin exists
      const { data, error } = await supabase
        .from('member_profiles')
        .select('user_id')
        .eq('role', 'Super Administrator')
        .neq('user_id', targetUserId);
        
      if (error) return { success: false, error: error.message };
      if (data && data.length > 0) {
        return { success: false, error: 'A Super Administrator already exists.' };
      }
    }

    const { error } = await supabase
      .from('member_profiles')
      .update({ role: newRole, permissions: ROLE_PERMISSIONS[newRole] })
      .eq('user_id', targetUserId);

    if (error) return { success: false, error: error.message };
    return { success: true };
  }
}
