import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LogOut, Image as ImageIcon, LayoutDashboard, Upload, User as UserIcon } from 'lucide-react';
import { User } from '../types/admin';
import { getSupabase } from '../lib/supabaseClient';

interface AdminLayoutProps {
  user: User;
  children: React.ReactNode;
}

export default function AdminLayout({ user, children }: AdminLayoutProps) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const supabase = getSupabase();
    if (supabase) {
      await supabase.auth.signOut();
      navigate('/admin/login');
    }
  };

  const navItems = [
    { to: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/admin/gallery', icon: ImageIcon, label: 'Gallery' },
    { to: '/admin/upload', icon: Upload, label: 'Upload' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 fixed h-full z-30 hidden md:block">
        <div className="h-20 flex items-center px-6 border-b border-gray-200">
          <div className="bg-indigo-600 p-1.5 rounded-lg mr-3">
            <ImageIcon className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold text-gray-900">Admin Portal</span>
        </div>
        
        <nav className="p-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl mb-4">
            <UserIcon className="h-4 w-4 text-gray-400" />
            <span className="text-xs font-semibold text-gray-600 truncate">{user.email}</span>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-xl transition-colors"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 md:ml-64">
        <header className="bg-white border-b border-gray-200 h-20 flex items-center justify-between px-4 sm:px-8 sticky top-0 z-20 md:hidden">
           <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <ImageIcon className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold text-gray-900">Admin Portal</span>
          </div>
          <button onClick={handleLogout} className="p-2 text-gray-400 hover:text-red-600">
            <LogOut className="h-6 w-6" />
          </button>
        </header>
        
        <main className="p-4 sm:p-8 max-w-7xl mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
