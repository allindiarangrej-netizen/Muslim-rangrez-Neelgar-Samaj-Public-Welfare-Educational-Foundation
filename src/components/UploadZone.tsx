import React, { useState, useRef } from 'react';
import { Upload, X, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { getSupabase } from '../lib/supabaseClient';
import { motion, AnimatePresence } from 'motion/react';

interface UploadZoneProps {
  onUploadComplete: () => void;
}

export default function UploadZone({ onUploadComplete }: UploadZoneProps) {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      uploadFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      uploadFiles(Array.from(e.target.files));
    }
  };

  const uploadFiles = async (files: File[]) => {
    const supabase = getSupabase();
    if (!supabase) return;

    setUploading(true);
    setStatus(null);
    setProgress(0);

    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const timestamp = new Date().getTime();
      const fileName = `${timestamp}-${file.name.replace(/\s+/g, '_')}`;
      const filePath = `admin-photos/${fileName}`;

      try {
        const { error } = await supabase.storage
          .from('admin-uploads')
          .upload(filePath, file, {
            cacheControl: '3600',
            upsert: false
          });

        if (error) throw error;
        successCount++;
        setProgress(Math.round(((i + 1) / files.length) * 100));
      } catch (error: any) {
        console.error('Error uploading file:', error.message);
        errorCount++;
      }
    }

    if (successCount > 0) {
      setStatus({ 
        type: 'success', 
        message: `Successfully uploaded ${successCount} image${successCount > 1 ? 's' : ''}.` 
      });
      onUploadComplete();
    }
    
    if (errorCount > 0) {
      setStatus({ 
        type: 'error', 
        message: `Failed to upload ${errorCount} image${errorCount > 1 ? 's' : ''}.` 
      });
    }

    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-12">
      <div 
        className={`relative border-2 border-dashed rounded-2xl p-12 transition-all duration-200 text-center ${
          dragActive 
            ? "border-indigo-500 bg-indigo-50/50" 
            : "border-gray-300 hover:border-gray-400 bg-white"
        } ${uploading ? "opacity-50 pointer-events-none" : ""}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          id="file-upload"
        />

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-4">
            <Upload className="h-8 w-8 text-indigo-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Upload Admin Images</h3>
          <p className="text-gray-500 mt-1 mb-6">Drag and drop your images here, or click to browse</p>
          
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-sm"
          >
            Select Files
          </button>
        </div>

        {uploading && (
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center p-6">
            <Loader2 className="h-10 w-10 text-indigo-600 animate-spin mb-4" />
            <div className="w-full max-w-xs bg-gray-200 rounded-full h-2 mb-2">
              <div 
                className="bg-indigo-600 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm font-medium text-gray-700">Uploading... {progress}%</p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`mt-4 p-4 rounded-xl flex items-center justify-between ${
              status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
            }`}
          >
            <div className="flex items-center">
              {status.type === 'success' ? <CheckCircle2 className="h-5 w-5 mr-3" /> : <AlertCircle className="h-5 w-5 mr-3" />}
              <span className="text-sm font-medium">{status.message}</span>
            </div>
            <button onClick={() => setStatus(null)} className="text-current opacity-60 hover:opacity-100">
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
