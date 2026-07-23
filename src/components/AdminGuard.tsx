import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { User } from '../types/admin';
import { ShieldCheck, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

interface AdminGuardProps {
  user: User | null;
  loading: boolean;
  adminEmail: string;
}

export default function AdminGuard({ user, loading, adminEmail }: AdminGuardProps) {
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <Loader2 className="h-12 w-12 text-indigo-600 animate-spin mb-4" />
        <p className="text-gray-500 font-medium">Verifying Access...</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  if (user.email !== adminEmail) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-red-100 text-center"
        >
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="h-8 w-8 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Access Denied</h1>
          <p className="text-gray-500 mt-2 mb-6">
            Your account ({user.email}) does not have administrative privileges. Please contact the system administrator if you believe this is an error.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => window.location.href = '/'}
              className="w-full py-2 px-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Return Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return <Outlet />;
}
