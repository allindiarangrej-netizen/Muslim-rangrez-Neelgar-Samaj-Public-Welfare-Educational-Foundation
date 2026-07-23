import React, { useState, useEffect, useCallback } from 'react';
import { getSupabase } from '../../lib/supabaseClient';
import { AdminImage } from '../../types/admin';
import { Image as ImageIcon, HardDrive, Calendar, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';

export default function Dashboard() {
  const [stats, setStats] = useState({ count: 0, size: 0 });
  const [loading, setLoading] = useState(true);

  const fetchStats = useCallback(async () => {
    const supabase = getSupabase();
    if (!supabase) return;

    setLoading(true);
    try {
      const { data, error } = await supabase.storage
        .from('admin-uploads')
        .list('admin-photos');

      if (error) throw error;

      if (data) {
        const totalSize = data.reduce((acc, file) => acc + (file.metadata?.size || 0), 0);
        setStats({ count: data.length, size: totalSize });
      }
    } catch (error: any) {
      console.error('Error fetching stats:', error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  const statCards = [
    { label: 'Total Images', value: stats.count, icon: ImageIcon, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Storage Used', value: `${(stats.size / 1024 / 1024).toFixed(2)} MB`, icon: HardDrive, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { label: 'Last Updated', value: new Date().toLocaleDateString(), icon: Calendar, color: 'text-green-600', bg: 'bg-green-50' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-500 mt-1">Overview of your image repository</p>
        </div>
        <button 
          onClick={fetchStats}
          disabled={loading}
          className="p-2 text-gray-400 hover:text-indigo-600 transition-colors"
        >
          <RefreshCw className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statCards.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center"
          >
            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color} mr-4`}>
              <stat.icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-2">Welcome to the Portal</h2>
          <p className="text-indigo-100 max-w-lg">
            Manage your PC image uploads securely. You can upload new files, view your existing gallery, and remove images directly from this interface.
          </p>
        </div>
        <ImageIcon className="absolute -right-10 -bottom-10 h-64 w-64 text-white/10 rotate-12" />
      </div>
    </div>
  );
}
