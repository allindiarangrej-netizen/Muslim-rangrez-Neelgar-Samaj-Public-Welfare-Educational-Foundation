import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { getSupabase } from './lib/supabaseClient';
import Login from './components/Login';
import AdminGuard from './components/AdminGuard';
import AdminLayout from './components/AdminLayout';
import Home from './pages/Home';
import Dashboard from './pages/admin/Dashboard';
import Gallery from './pages/admin/Gallery';
import UploadPage from './pages/admin/Upload';
import Footer from './components/Footer';
import { User } from './types/admin';
import { Loader2 } from 'lucide-react';

const ADMIN_EMAIL = 'allindiarangrej@gmail.com';

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = getSupabase();
    if (!supabase) {
      setLoading(false);
      return;
    }

    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email,
        });
      }
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email,
        });
      } else {
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <Loader2 className="h-12 w-12 text-indigo-600 animate-spin mb-4" />
        <p className="text-gray-500 font-medium">Initializing Secure Portal...</p>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900">
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            
            {/* Admin Login */}
            <Route 
              path="/admin/login" 
              element={
                user && user.email === ADMIN_EMAIL 
                  ? <Navigate to="/admin/dashboard" replace /> 
                  : <Login onLoginSuccess={setUser} />
              } 
            />

            {/* Protected Admin Routes */}
            <Route element={<AdminGuard user={user} loading={loading} adminEmail={ADMIN_EMAIL} />}>
              <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
              <Route 
                path="/admin/dashboard" 
                element={<AdminLayout user={user!}><Dashboard /></AdminLayout>} 
              />
              <Route 
                path="/admin/gallery" 
                element={<AdminLayout user={user!}><Gallery /></AdminLayout>} 
              />
              <Route 
                path="/admin/upload" 
                element={<AdminLayout user={user!}><UploadPage /></AdminLayout>} 
              />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
