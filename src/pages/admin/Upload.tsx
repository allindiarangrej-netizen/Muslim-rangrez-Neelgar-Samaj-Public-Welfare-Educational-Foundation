import React from 'react';
import UploadZone from '../../components/UploadZone';
import { useNavigate } from 'react-router-dom';

export default function UploadPage() {
  const navigate = useNavigate();

  const handleUploadComplete = () => {
    // Optionally redirect to gallery after upload
    // navigate('/admin/gallery');
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Image Upload</h1>
        <p className="text-gray-500 mt-1">Select or drag images from your PC to upload to Supabase</p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <UploadZone onUploadComplete={handleUploadComplete} />
      </div>

      <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl">
        <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wider mb-2">Upload Tip</h3>
        <p className="text-sm text-blue-700 leading-relaxed">
          Files are automatically organized into the <code className="bg-white px-1.5 py-0.5 rounded border border-blue-200">admin-photos/</code> folder. 
          A timestamp is prepended to each filename to ensure uniqueness and maintain chronological order.
        </p>
      </div>
    </div>
  );
}
