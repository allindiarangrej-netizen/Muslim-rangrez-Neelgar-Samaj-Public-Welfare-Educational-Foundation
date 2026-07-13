import React, { createContext, useContext, useEffect, useState } from 'react';
import { getSupabase } from '../lib/supabaseClient';
import { Session, User } from '@supabase/supabase-js';
import { AuthService, UserSession, UserRole, ROLE_PERMISSIONS } from '../services/authService';

interface AuthContextType {
  session: Session | null;
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  loading: true,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = getSupabase();
    if (!supabase) {
      setLoading(false);
      return;
    }

    const syncSession = async (currentSession: Session | null) => {
      if (currentSession && currentSession.user) {
        const u = currentSession.user;
        try {
          // 1. Fetch user's profile from member_profiles
          let { data: profile, error: profileErr } = await supabase
            .from('member_profiles')
            .select('*')
            .eq('user_id', u.id)
            .maybeSingle();

          if (profileErr) {
            console.error("Error fetching user profile from database:", profileErr);
          }

          // 2. If profile is missing, auto-create it
          if (!profile) {
            const isSuper = u.email === 'allindiarangrej@gmail.com';
            
            // Check if Super Admin already exists
            if (isSuper) {
              const { data: superAdminExists } = await supabase
                .from('member_profiles')
                .select('user_id')
                .eq('role', 'Super Administrator')
                .maybeSingle();

              if (superAdminExists) {
                // A super admin already exists, do not upgrade this user to super admin
                // This might happen if someone else tries to use this email?
                // Just fallback to Member for security
                console.warn("Super Admin account already exists. Forcing Member role.");
              }
            }

            const defaultRole: UserRole = (isSuper && !profile) ? 'Super Administrator' : (u.user_metadata?.role || 'Member');
            const defaultPermissions = ROLE_PERMISSIONS[defaultRole] || ROLE_PERMISSIONS['Member'];

            const newProfile = {
              user_id: u.id,
              full_name: u.user_metadata?.full_name || u.email?.split('@')[0] || 'Member',
              phone: u.user_metadata?.phone || '',
              district: u.user_metadata?.district || 'Morena',
              state: u.user_metadata?.state || 'Madhya Pradesh',
              tehsil: u.user_metadata?.tehsil || '',
              committee: u.user_metadata?.committee || '',
              role: defaultRole,
              permissions: defaultPermissions,
              status: 'Active'
            };

            const { data: inserted, error: insertErr } = await supabase
              .from('member_profiles')
              .insert(newProfile)
              .select()
              .single();

            if (insertErr) {
              console.error("Failed to auto-create profile in database:", insertErr);
              profile = newProfile; // Use locally constructed one as fallback
            } else {
              profile = inserted;
            }
          }

          // 3. Check if account is suspended or disabled
          if (profile.status === 'Suspended' || profile.status === 'Disabled') {
            console.warn("User account is suspended or disabled. Revoking session.");
            await supabase.auth.signOut();
            AuthService.logout();
            return;
          }

          // 4. Construct and save the UserSession inside AuthService
          const role = (profile.role || 'Member') as UserRole;
          const userSession: UserSession = {
            id: u.id,
            name: profile.full_name || u.user_metadata?.full_name || u.email?.split('@')[0] || 'Member',
            email: u.email || '',
            phone: profile.phone || u.user_metadata?.phone || '',
            role,
            isEmailVerified: !!u.email_confirmed_at,
            isOtpVerified: !!u.email_confirmed_at,
            district: profile.district || u.user_metadata?.district || 'Morena',
            state: profile.state || u.user_metadata?.state || 'Madhya Pradesh',
            tehsil: profile.tehsil || '',
            committee: profile.committee || '',
            avatarUrl: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(u.email || '')}`,
            createdAt: u.created_at,
            lastLoginAt: new Date().toISOString(),
            token: currentSession.access_token,
            permissions: (profile.permissions || ROLE_PERMISSIONS[role] || ROLE_PERMISSIONS['Member']) as string[]
          };

          AuthService.setSession(userSession);
        } catch (err) {
          console.error("Unexpected error syncing user session:", err);
        }
      } else {
        // No active Supabase session, clear AuthService session
        if (AuthService.getCurrentSession().role !== 'Visitor') {
          AuthService.logout();
        }
      }
    };

    // Initialize state
    supabase.auth.getSession().then(({ data: { session: activeSession } }) => {
      setSession(activeSession);
      setUser(activeSession?.user ?? null);
      syncSession(activeSession).then(() => setLoading(false));
    });

    // Subscribe to state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, activeSession) => {
      setSession(activeSession);
      setUser(activeSession?.user ?? null);
      syncSession(activeSession);
      setLoading(false);
      
      if (_event === 'PASSWORD_RECOVERY') {
        const newPassword = window.prompt('Enter your new password:');
        if (newPassword) {
          try {
            const { error } = await supabase.auth.updateUser({ password: newPassword });
            if (error) throw error;
            alert('Password updated successfully!');
          } catch (err: any) {
            alert('Error updating password: ' + err.message);
          }
        }
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ session, user, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
