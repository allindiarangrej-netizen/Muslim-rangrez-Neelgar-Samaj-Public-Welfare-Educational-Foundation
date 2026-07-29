import React, { createContext, useContext, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';

interface AuthContextType {
  session: Session | null;
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  loading: false,
});

/**
 * Clean, decoupled AuthProvider for Rangrez Community Bharat Information Portal Mode.
 * Removes active authentication listeners and network session calls to eliminate console errors.
 * Architecture preserved for future Google Sign-In & OTP activation.
 */
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session] = useState<Session | null>(null);
  const [user] = useState<User | null>(null);
  const [loading] = useState(false);

  return (
    <AuthContext.Provider value={{ session, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

