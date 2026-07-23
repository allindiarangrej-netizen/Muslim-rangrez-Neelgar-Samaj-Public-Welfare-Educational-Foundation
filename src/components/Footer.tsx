import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">AC</span>
            </div>
            <span className="font-bold text-gray-900 tracking-tight text-lg">Admin Portal</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 Admin Image Upload Portal. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-12 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Contact Support</a>
        </div>

        {/* Hidden Admin Login Link */}
        <Link 
          to="/admin/login" 
          className="opacity-0 hover:opacity-10 transition-opacity flex items-center gap-2 text-gray-400 group cursor-default"
          title="Admin Access"
        >
          <ShieldCheck className="h-4 w-4" />
          <span className="text-xs">Admin Login</span>
        </Link>
      </div>
    </footer>
  );
}
