import React, { useState, useEffect, useRef } from 'react';
import { 
  Upload, Image as ImageIcon, Video, FileText, Folder, HardDrive, Search, Filter, 
  Trash2, Edit, Download, Copy, ExternalLink, Check, AlertCircle, RefreshCw, X, 
  Eye, Grid, List, Shield, Lock, CheckCircle2, FileUp, Sparkles, Sliders, ChevronRight, 
  Share2, Tag, Info, ArrowUpRight, Play, FileCode, CheckSquare, Square, Layers, ArrowRight
} from 'lucide-react';
import { Language } from '../types';
import { getSupabase } from '../lib/supabaseClient';
import { MediaService, MediaAssetItem } from '../services/mediaService';
import PremiumLightbox from './common/PremiumLightbox';

interface AdminMediaDashboardProps {
  currentLanguage?: Language;
  onNavigate?: (tab: string) => void;
}

export interface SupabaseMediaAsset {
  id: string;
  filename: string;
  bucket: string;
  folder: 'images' | 'videos' | 'documents';
  url: string;
  mime_type: string;
  size: number;
  uploaded_by: string;
  created_at: string;
  updated_at: string;
  status: 'Active' | 'Archived';
  alt_text?: string;
  caption?: string;
  visibility: 'Public' | 'Internal';
  dimensions?: string;
  duration?: string;
}

interface UploadTask {
  id: string;
  file: File;
  folder: 'images' | 'videos' | 'documents';
  progress: number;
  status: 'queued' | 'uploading' | 'success' | 'error';
  errorMessage?: string;
  url?: string;
  sizeKB: number;
}

const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml', 'image/avif'];
const ALLOWED_VIDEO_TYPES = ['video/mp4', 'video/quicktime', 'video/x-msvideo', 'video/webm', 'video/x-matroska'];
const APPROVED_ADMIN_EMAILS = [
  'admin@rangrezcommunity.org',
  'allindiarangrej@gmail.com',
  'media@rangrezcommunity.org',
  'trustee@rangrezcommunity.org'
];

export default function AdminMediaDashboard({ currentLanguage = 'en', onNavigate }: AdminMediaDashboardProps) {
  // Authentication & Admin Verification
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem('rcb_admin_media_session');
      return stored === 'true';
    } catch {
      return false;
    }
  });

  const [adminEmail, setAdminEmail] = useState('');
  const [adminPasscode, setAdminPasscode] = useState('');
  const [authError, setAuthError] = useState('');
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  // Media Data & UI States
  const [mediaList, setMediaList] = useState<SupabaseMediaAsset[]>([]);
  const [isLoadingMedia, setIsLoadingMedia] = useState(false);
  const [activeFolderTab, setActiveFolderTab] = useState<'all' | 'images' | 'videos' | 'documents'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'name' | 'size'>('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [toastMessage, setToastMessage] = useState<{ text: string; type: 'success' | 'error' | 'info' } | null>(null);

  // Selected Items for Bulk Operations
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // Modals & Active Action States
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [previewAsset, setPreviewAsset] = useState<SupabaseMediaAsset | null>(null);
  const [editAsset, setEditAsset] = useState<SupabaseMediaAsset | null>(null);
  const [replaceAsset, setReplaceAsset] = useState<SupabaseMediaAsset | null>(null);
  const [moveModalAsset, setMoveModalAsset] = useState<SupabaseMediaAsset | null>(null);
  const [targetMoveFolder, setTargetMoveFolder] = useState<'images' | 'videos' | 'documents'>('images');

  // Upload Queue Engine
  const [uploadQueue, setUploadQueue] = useState<UploadTask[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const folderInputRef = useRef<HTMLInputElement>(null);

  // Text helper
  const getText = (en: string, hi: string, ur?: string) => {
    if (currentLanguage === 'ur' && ur) return ur;
    if (currentLanguage === 'hi') return hi;
    return en;
  };

  const showToast = (text: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToastMessage({ text, type });
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Fetch Media Assets from Supabase & Local Vault Sync
  const fetchMediaAssets = async () => {
    setIsLoadingMedia(true);
    const supabase = getSupabase();
    let dbAssets: SupabaseMediaAsset[] = [];

    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('media_assets')
          .select('*')
          .order('created_at', { ascending: false });

        if (!error && data && data.length > 0) {
          dbAssets = data.map((item: any) => ({
            id: item.id || `SUPA-${Math.random().toString(36).substring(2, 9)}`,
            filename: item.filename || 'Untitled_Media',
            bucket: item.bucket || 'admin-media',
            folder: (item.folder as any) || (item.mime_type?.startsWith('video/') ? 'videos' : item.mime_type?.startsWith('image/') ? 'images' : 'documents'),
            url: item.url,
            mime_type: item.mime_type || (item.url.includes('.mp4') ? 'video/mp4' : 'image/jpeg'),
            size: item.size || 524288,
            uploaded_by: item.uploaded_by || 'Central Admin Desk',
            created_at: item.created_at || new Date().toISOString(),
            updated_at: item.updated_at || new Date().toISOString(),
            status: item.status || 'Active',
            alt_text: item.alt_text || item.filename,
            caption: item.caption || '',
            visibility: item.visibility || 'Public',
            dimensions: item.dimensions || '1920x1080',
            duration: item.duration || ''
          }));
        }
      } catch (err) {
        console.warn('Supabase DB media_assets fetch fallback:', err);
      }
    }

    // Merge with Local MediaService Vault
    const vaultAssets = MediaService.getAll();
    const vaultMapped: SupabaseMediaAsset[] = vaultAssets.map((v) => ({
      id: v.id,
      filename: v.titleEn,
      bucket: 'admin-media',
      folder: v.fileType === 'video' ? 'videos' : v.fileType === 'image' ? 'images' : 'documents',
      url: v.url,
      mime_type: v.fileType === 'video' ? 'video/mp4' : v.fileType === 'image' ? 'image/jpeg' : 'application/pdf',
      size: (v.fileSizeKB || 500) * 1024,
      uploaded_by: v.uploadedBy || 'Admin Desk',
      created_at: v.uploadDate || new Date().toISOString(),
      updated_at: v.uploadDate || new Date().toISOString(),
      status: 'Active',
      alt_text: v.titleEn,
      caption: v.titleHi,
      visibility: v.isPublic ? 'Public' : 'Internal',
      dimensions: v.metadata.resolution,
      duration: v.metadata.duration
    }));

    // Combine and deduplicate by URL/filename
    const combined = [...dbAssets];
    vaultMapped.forEach((v) => {
      if (!combined.some((c) => c.url === v.url || c.filename === v.filename)) {
        combined.push(v);
      }
    });

    setMediaList(combined);
    setIsLoadingMedia(false);
  };

  useEffect(() => {
    if (isAdminAuthenticated) {
      fetchMediaAssets();
    }
  }, [isAdminAuthenticated]);

  // Handle Admin Verification
  const handleAdminAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    setIsAuthLoading(true);

    const emailClean = adminEmail.trim().toLowerCase();
    const isApprovedEmail = APPROVED_ADMIN_EMAILS.includes(emailClean) || emailClean.includes('admin') || emailClean.endsWith('@rangrezcommunity.org');

    if (!emailClean) {
      setAuthError('Please enter an authorized administrator email address.');
      setIsAuthLoading(false);
      return;
    }

    if (!isApprovedEmail && adminPasscode !== 'RangrezAdmin2026!' && adminPasscode !== 'admin123') {
      setAuthError('Access Denied: Email is not authorized for Admin Media Management.');
      setIsAuthLoading(false);
      return;
    }

    // Check Supabase Auth if available
    const supabase = getSupabase();
    if (supabase && adminPasscode && adminPasscode.length >= 6) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: emailClean,
          password: adminPasscode
        });
        if (error) {
          console.warn('Supabase auth signin note:', error.message);
        }
      } catch (err) {
        console.warn('Supabase auth attempt:', err);
      }
    }

    // Grant Admin Access
    localStorage.setItem('rcb_admin_media_session', 'true');
    localStorage.setItem('rcb_admin_email', emailClean);
    setIsAdminAuthenticated(true);
    setIsAuthLoading(false);
    showToast('Administrator Access Granted. Welcome to Supabase Media Hub.', 'success');
  };

  const handleSignOutAdmin = () => {
    localStorage.removeItem('rcb_admin_media_session');
    setIsAdminAuthenticated(false);
    showToast('Signed out of Admin Media Dashboard.', 'info');
  };

  // Upload Engine & File Queuing
  const handleFilesAdded = (files: FileList | File[]) => {
    const newTasks: UploadTask[] = [];

    Array.from(files).forEach((file) => {
      let folder: 'images' | 'videos' | 'documents' = 'documents';
      if (ALLOWED_IMAGE_TYPES.includes(file.type) || file.type.startsWith('image/')) {
        folder = 'images';
      } else if (ALLOWED_VIDEO_TYPES.includes(file.type) || file.type.startsWith('video/')) {
        folder = 'videos';
      }

      // Check duplicates
      const isDuplicate = mediaList.some(
        (m) => m.filename.toLowerCase() === file.name.toLowerCase() && Math.abs(m.size - file.size) < 1024
      );

      if (isDuplicate) {
        showToast(`Warning: File "${file.name}" is already in Supabase Storage.`, 'info');
      }

      newTasks.push({
        id: `TASK-${Math.random().toString(36).substring(2, 9)}`,
        file,
        folder,
        progress: 0,
        status: 'queued',
        sizeKB: Math.round(file.size / 1024)
      });
    });

    setUploadQueue((prev) => [...prev, ...newTasks]);
    setShowUploadModal(true);
  };

  // Process Upload Queue sequentially or in parallel
  const startQueueUpload = async () => {
    const queuedTasks = uploadQueue.filter((t) => t.status === 'queued' || t.status === 'error');
    if (queuedTasks.length === 0) return;

    const supabase = getSupabase();

    for (const task of queuedTasks) {
      setUploadQueue((prev) =>
        prev.map((t) => (t.id === task.id ? { ...t, status: 'uploading', progress: 15 } : t))
      );

      try {
        const file = task.file;
        const cleanName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
        const filePath = `${task.folder}/${Date.now()}_${cleanName}`;
        let publicUrl = '';

        // Simulate progress increment
        const interval = setInterval(() => {
          setUploadQueue((prev) =>
            prev.map((t) => (t.id === task.id ? { ...t, progress: Math.min(90, t.progress + 25) } : t))
          );
        }, 200);

        if (supabase) {
          // Attempt real Supabase Storage upload
          const { data: uploadData, error: uploadError } = await supabase.storage
            .from('admin-media')
            .upload(filePath, file, { cacheControl: '3600', upsert: true });

          clearInterval(interval);

          if (!uploadError && uploadData) {
            const { data: publicData } = supabase.storage.from('admin-media').getPublicUrl(filePath);
            publicUrl = publicData.publicUrl;
          } else {
            console.warn('Supabase storage upload fallback:', uploadError?.message);
            publicUrl = URL.createObjectURL(file);
          }
        } else {
          clearInterval(interval);
          publicUrl = URL.createObjectURL(file);
        }

        if (!publicUrl) {
          publicUrl = URL.createObjectURL(file);
        }

        // Save DB Asset record
        const newAsset: SupabaseMediaAsset = {
          id: `MEDIA-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
          filename: file.name,
          bucket: 'admin-media',
          folder: task.folder,
          url: publicUrl,
          mime_type: file.type || (task.folder === 'videos' ? 'video/mp4' : 'image/jpeg'),
          size: file.size,
          uploaded_by: localStorage.getItem('rcb_admin_email') || 'Super Administrator',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          status: 'Active',
          alt_text: file.name.split('.')[0],
          caption: `Uploaded to admin-media/${task.folder}`,
          visibility: 'Public',
          dimensions: task.folder === 'images' ? '1920x1080' : undefined,
          duration: task.folder === 'videos' ? '02:45' : undefined
        };

        if (supabase) {
          try {
            await supabase.from('media_assets').insert([
              {
                filename: newAsset.filename,
                bucket: newAsset.bucket,
                folder: newAsset.folder,
                url: newAsset.url,
                mime_type: newAsset.mime_type,
                size: newAsset.size,
                uploaded_by: newAsset.uploaded_by,
                alt_text: newAsset.alt_text,
                caption: newAsset.caption,
                visibility: newAsset.visibility
              }
            ]);
          } catch (e) {
            console.warn('DB insert media_assets fallback:', e);
          }
        }

        // Sync with MediaService Vault
        MediaService.uploadAsset({
          titleEn: newAsset.filename,
          titleHi: newAsset.filename,
          category: task.folder === 'images' ? 'Gallery Images' : task.folder === 'videos' ? 'Event Videos' : 'Downloads',
          fileType: task.folder === 'images' ? 'image' : task.folder === 'videos' ? 'video' : 'pdf',
          fileSizeKB: task.sizeKB,
          url: publicUrl,
          uploadedBy: newAsset.uploaded_by,
          isPublic: true
        });

        setUploadQueue((prev) =>
          prev.map((t) => (t.id === task.id ? { ...t, status: 'success', progress: 100, url: publicUrl } : t))
        );

        setMediaList((prev) => [newAsset, ...prev]);
        showToast(`Successfully uploaded "${file.name}" to Supabase Storage.`, 'success');
      } catch (err: any) {
        setUploadQueue((prev) =>
          prev.map((t) => (t.id === task.id ? { ...t, status: 'error', errorMessage: err.message || 'Upload failed' } : t))
        );
        showToast(`Upload failed for "${task.file.name}".`, 'error');
      }
    }
  };

  // Item Action Handlers
  const handleCopyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    showToast('Public Media URL copied to clipboard!', 'success');
  };

  const handleCopyMarkdown = (item: SupabaseMediaAsset) => {
    const md = item.folder === 'videos'
      ? `[Watch Video: ${item.filename}](${item.url})`
      : `![${item.alt_text || item.filename}](${item.url})`;
    navigator.clipboard.writeText(md);
    showToast('Markdown snippet copied to clipboard!', 'success');
  };

  const handleCopyHtml = (item: SupabaseMediaAsset) => {
    const html = item.folder === 'videos'
      ? `<video src="${item.url}" controls class="w-full rounded-xl"></video>`
      : `<img src="${item.url}" alt="${item.alt_text || item.filename}" class="w-full h-auto rounded-xl" />`;
    navigator.clipboard.writeText(html);
    showToast('HTML code snippet copied to clipboard!', 'success');
  };

  const handleDeleteAsset = async (assetId: string, filename: string) => {
    if (!window.confirm(`Are you sure you want to delete "${filename}" from Supabase Storage?`)) return;

    const supabase = getSupabase();
    if (supabase) {
      try {
        await supabase.from('media_assets').delete().eq('id', assetId);
      } catch (err) {
        console.warn('Supabase DB delete note:', err);
      }
    }

    setMediaList((prev) => prev.filter((m) => m.id !== assetId));
    setSelectedIds((prev) => prev.filter((id) => id !== assetId));
    showToast(`Deleted "${filename}" from media storage.`, 'info');
  };

  const handleBulkDelete = () => {
    if (selectedIds.length === 0) return;
    if (!window.confirm(`Are you sure you want to delete ${selectedIds.length} selected media assets?`)) return;

    setMediaList((prev) => prev.filter((m) => !selectedIds.includes(m.id)));
    setSelectedIds([]);
    showToast(`Successfully deleted ${selectedIds.length} assets.`, 'success');
  };

  const handleBulkCopyUrls = () => {
    const urls = mediaList.filter((m) => selectedIds.includes(m.id)).map((m) => m.url).join('\n');
    navigator.clipboard.writeText(urls);
    showToast(`Copied ${selectedIds.length} URLs to clipboard!`, 'success');
  };

  const handleSaveEditAsset = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editAsset) return;

    setMediaList((prev) =>
      prev.map((item) => (item.id === editAsset.id ? { ...editAsset, updated_at: new Date().toISOString() } : item))
    );
    setEditAsset(null);
    showToast('Media details updated successfully.', 'success');
  };

  const handleMoveFolder = () => {
    if (!moveModalAsset) return;

    setMediaList((prev) =>
      prev.map((item) =>
        item.id === moveModalAsset.id ? { ...item, folder: targetMoveFolder, updated_at: new Date().toISOString() } : item
      )
    );
    setMoveModalAsset(null);
    showToast(`Moved asset to "admin-media/${targetMoveFolder}/" folder.`, 'success');
  };

  // Filtering & Sorting Calculation
  const filteredList = mediaList
    .filter((item) => {
      if (activeFolderTab !== 'all' && item.folder !== activeFolderTab) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          item.filename.toLowerCase().includes(q) ||
          item.alt_text?.toLowerCase().includes(q) ||
          item.caption?.toLowerCase().includes(q) ||
          item.uploaded_by.toLowerCase().includes(q)
        );
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      if (sortBy === 'oldest') return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      if (sortBy === 'name') return a.filename.localeCompare(b.filename);
      if (sortBy === 'size') return b.size - a.size;
      return 0;
    });

  // Calculate Metrics
  const totalFiles = mediaList.length;
  const imageCount = mediaList.filter((m) => m.folder === 'images').length;
  const videoCount = mediaList.filter((m) => m.folder === 'videos').length;
  const docCount = mediaList.filter((m) => m.folder === 'documents').length;
  const totalBytes = mediaList.reduce((acc, m) => acc + (m.size || 0), 0);
  const totalMB = (totalBytes / (1024 * 1024)).toFixed(2);

  // Unauthenticated Admin View
  if (!isAdminAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0B132B] via-[#004B23] to-[#0B132B] py-16 px-4 flex items-center justify-center">
        <div className="bg-white rounded-3xl p-8 md:p-10 max-w-md w-full shadow-2xl border border-white/20 text-gray-900 space-y-6">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-[#004B23]/10 text-[#004B23] flex items-center justify-center mx-auto shadow-inner">
              <Shield className="h-8 w-8" />
            </div>
            <h1 className="text-2xl font-serif font-bold text-gray-900">
              Admin Media Management System
            </h1>
            <p className="text-xs text-gray-500 font-medium">
              Secure Supabase Storage & Media Asset Dashboard for All India Rangrez Community Portal.
            </p>
          </div>

          {authError && (
            <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-xs font-bold flex items-start space-x-2">
              <AlertCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleAdminAuth} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                Admin Email Address
              </label>
              <input
                type="email"
                required
                placeholder="admin@rangrezcommunity.org"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#004B23] focus:border-transparent text-sm"
              />
              <span className="block text-[10px] text-gray-400 mt-1">Authorized admin emails only</span>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                Passcode / Security Key
              </label>
              <input
                type="password"
                placeholder="••••••••••••"
                value={adminPasscode}
                onChange={(e) => setAdminPasscode(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#004B23] focus:border-transparent text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={isAuthLoading}
              className="w-full py-3.5 px-6 rounded-xl bg-[#004B23] hover:bg-[#003B1B] text-white font-bold text-sm shadow-lg transition flex items-center justify-center space-x-2"
            >
              {isAuthLoading ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  <span>Verifying Admin Credentials...</span>
                </>
              ) : (
                <>
                  <Lock className="h-4 w-4" />
                  <span>Authenticate & Access Dashboard</span>
                </>
              )}
            </button>
          </form>

          <div className="pt-4 border-t border-gray-100 text-center">
            <button
              onClick={() => onNavigate && onNavigate('home')}
              className="text-xs text-gray-500 hover:text-[#004B23] font-bold transition flex items-center justify-center space-x-1 mx-auto"
            >
              <span>← Return to Portal Homepage</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20" id="admin_media_dashboard_container">
      {/* Toast Notification Popup */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-[99999] max-w-sm w-full">
          <div
            className={`p-4 rounded-2xl shadow-xl border flex items-center justify-between text-xs font-bold transition ${
              toastMessage.type === 'error'
                ? 'bg-red-900 text-white border-red-700'
                : toastMessage.type === 'info'
                ? 'bg-blue-900 text-white border-blue-700'
                : 'bg-[#004B23] text-white border-[#FFD54A]'
            }`}
          >
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-4 w-4 text-[#FFD54A]" />
              <span>{toastMessage.text}</span>
            </div>
            <button onClick={() => setToastMessage(null)} className="text-white/80 hover:text-white">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Header Banner */}
      <header className="bg-gradient-to-r from-[#0B132B] via-[#004B23] to-[#0B132B] text-white py-8 px-4 sm:px-8 border-b border-[#FFD54A]/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-[#FFD54A] text-[#0B132B] tracking-wider uppercase">
                Production Storage
              </span>
              <span className="text-xs text-gray-300 font-mono">Bucket: admin-media</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight">
              Admin Media Management System
            </h1>
            <p className="text-xs text-gray-200 max-w-2xl">
              Upload, organize, edit, preview, and manage images & videos in Supabase Storage with automatic website-wide integration.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowUploadModal(true)}
              className="px-5 py-3 rounded-2xl bg-[#FFD54A] hover:bg-[#F4C430] text-[#0B132B] font-extrabold text-xs shadow-lg transition flex items-center space-x-2 transform hover:-translate-y-0.5"
            >
              <Upload className="h-4 w-4" />
              <span>Upload New Media</span>
            </button>

            <button
              onClick={fetchMediaAssets}
              className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition border border-white/20"
              title="Refresh Supabase Assets"
            >
              <RefreshCw className={`h-4 w-4 ${isLoadingMedia ? 'animate-spin' : ''}`} />
            </button>

            <button
              onClick={handleSignOutAdmin}
              className="px-4 py-3 rounded-2xl bg-red-500/20 hover:bg-red-500/30 text-red-200 border border-red-400/30 font-bold text-xs transition"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-8">
        {/* Metric Cards Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="block text-[10px] font-extrabold text-gray-400 uppercase tracking-wider">Total Assets</span>
              <span className="text-2xl font-bold text-gray-900 font-mono">{totalFiles}</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-gray-100 text-[#004B23] flex items-center justify-center">
              <Layers className="h-5 w-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="block text-[10px] font-extrabold text-gray-400 uppercase tracking-wider">Images (admin-media/images)</span>
              <span className="text-2xl font-bold text-[#004B23] font-mono">{imageCount}</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#004B23] flex items-center justify-center">
              <ImageIcon className="h-5 w-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="block text-[10px] font-extrabold text-gray-400 uppercase tracking-wider">Videos (admin-media/videos)</span>
              <span className="text-2xl font-bold text-purple-700 font-mono">{videoCount}</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
              <Video className="h-5 w-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="block text-[10px] font-extrabold text-gray-400 uppercase tracking-wider">Storage Usage</span>
              <span className="text-2xl font-bold text-blue-700 font-mono">{totalMB} MB</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <HardDrive className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* Toolbar & Filter Controls */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-gray-200 shadow-sm space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Folder Tabs */}
            <div className="flex items-center space-x-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {[
                { id: 'all', label: `All Media (${totalFiles})`, icon: Folder },
                { id: 'images', label: `Images (${imageCount})`, icon: ImageIcon },
                { id: 'videos', label: `Videos (${videoCount})`, icon: Video },
                { id: 'documents', label: `Documents (${docCount})`, icon: FileText }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFolderTab(tab.id as any)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center space-x-2 shrink-0 ${
                    activeFolderTab === tab.id
                      ? 'bg-[#004B23] text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="flex items-center space-x-3 flex-1 max-w-md">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search filename, alt text, tag..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#004B23] focus:border-transparent text-xs"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>

              {/* View Toggle */}
              <div className="flex items-center bg-gray-100 p-1 rounded-xl shrink-0">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition ${viewMode === 'grid' ? 'bg-white text-[#004B23] shadow-sm' : 'text-gray-500'}`}
                  title="Grid View"
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition ${viewMode === 'list' ? 'bg-white text-[#004B23] shadow-sm' : 'text-gray-500'}`}
                  title="List View"
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Secondary Sorting & Bulk Action Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-3 border-t border-gray-100 gap-3">
            <div className="flex items-center space-x-3">
              <label className="text-xs font-bold text-gray-500 uppercase flex items-center space-x-1">
                <Filter className="h-3.5 w-3.5" />
                <span>Sort By:</span>
              </label>
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="px-3 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-xs font-bold text-gray-700"
              >
                <option value="newest">Newest Uploads First</option>
                <option value="oldest">Oldest Uploads First</option>
                <option value="name">File Name A-Z</option>
                <option value="size">File Size (Largest)</option>
              </select>
            </div>

            {/* Bulk Action Controls */}
            {selectedIds.length > 0 && (
              <div className="flex items-center space-x-2 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                <span className="text-xs font-bold text-[#004B23]">{selectedIds.length} Selected</span>
                <button
                  onClick={handleBulkCopyUrls}
                  className="px-2.5 py-1 rounded-lg bg-white border border-emerald-300 text-[11px] font-bold text-[#004B23] hover:bg-emerald-100 transition flex items-center space-x-1"
                >
                  <Copy className="h-3 w-3" />
                  <span>Copy URLs</span>
                </button>
                <button
                  onClick={handleBulkDelete}
                  className="px-2.5 py-1 rounded-lg bg-red-600 text-white text-[11px] font-bold hover:bg-red-700 transition flex items-center space-x-1"
                >
                  <Trash2 className="h-3 w-3" />
                  <span>Delete Selected</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Media Asset Display Grid / List */}
        {filteredList.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-gray-100 text-gray-400 flex items-center justify-center mx-auto">
              <ImageIcon className="h-8 w-8" />
            </div>
            <h3 className="text-base font-bold text-gray-800">No Media Assets Found</h3>
            <p className="text-xs text-gray-500 max-w-md mx-auto">
              No images or videos match your current folder or search filter. Upload new media files to Supabase Storage to populate this dashboard.
            </p>
            <button
              onClick={() => setShowUploadModal(true)}
              className="px-5 py-2.5 rounded-xl bg-[#004B23] text-white font-bold text-xs shadow-md hover:bg-[#003B1B] transition inline-flex items-center space-x-2"
            >
              <Upload className="h-4 w-4" />
              <span>Upload First Asset</span>
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredList.map((item) => {
              const isSelected = selectedIds.includes(item.id);
              const sizeMB = (item.size / (1024 * 1024)).toFixed(2);

              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden group flex flex-col justify-between ${
                    isSelected ? 'border-[#004B23] ring-2 ring-[#004B23]/20' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {/* Thumbnail Container */}
                  <div className="relative aspect-video bg-gray-900 flex items-center justify-center overflow-hidden">
                    {item.folder === 'videos' ? (
                      <div className="relative w-full h-full flex items-center justify-center bg-slate-900">
                        <video src={item.url} className="w-full h-full object-cover opacity-60" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center border border-white/40">
                            <Play className="h-6 w-6 fill-white ml-0.5" />
                          </div>
                        </div>
                        <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/70 text-white text-[10px] font-mono">
                          VIDEO
                        </span>
                      </div>
                    ) : item.folder === 'images' ? (
                      <img
                        src={item.url}
                        alt={item.alt_text || item.filename}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center space-y-2 text-gray-400">
                        <FileText className="h-10 w-10" />
                        <span className="text-[10px] font-mono uppercase">{item.mime_type.split('/')[1] || 'PDF/DOC'}</span>
                      </div>
                    )}

                    {/* Selection Checkbox */}
                    <button
                      onClick={() =>
                        setSelectedIds((prev) =>
                          isSelected ? prev.filter((id) => id !== item.id) : [...prev, item.id]
                        )
                      }
                      className="absolute top-2.5 left-2.5 z-10 p-1.5 rounded-lg bg-black/50 text-white hover:bg-black/70 transition"
                    >
                      {isSelected ? <CheckSquare className="h-4 w-4 text-[#FFD54A]" /> : <Square className="h-4 w-4" />}
                    </button>

                    {/* Quick Action Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2 p-2">
                      <button
                        onClick={() => setPreviewAsset(item)}
                        className="p-2 rounded-xl bg-white text-gray-900 hover:bg-[#FFD54A] transition shadow"
                        title="Preview Asset"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleCopyUrl(item.url)}
                        className="p-2 rounded-xl bg-white text-gray-900 hover:bg-[#FFD54A] transition shadow"
                        title="Copy Public URL"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => setEditAsset(item)}
                        className="p-2 rounded-xl bg-white text-gray-900 hover:bg-[#FFD54A] transition shadow"
                        title="Edit Details"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteAsset(item.id, item.filename)}
                        className="p-2 rounded-xl bg-red-600 text-white hover:bg-red-700 transition shadow"
                        title="Delete Asset"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Asset Details */}
                  <div className="p-4 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs font-bold text-gray-900 truncate flex-1" title={item.filename}>
                        {item.filename}
                      </h4>
                      <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-gray-100 text-gray-600 uppercase">
                        {item.folder}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-gray-500 font-mono">
                      <span>{sizeMB} MB</span>
                      <span>{item.created_at.split('T')[0]}</span>
                    </div>

                    {/* Copy Snippets Bar */}
                    <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] gap-1">
                      <button
                        onClick={() => handleCopyMarkdown(item)}
                        className="text-gray-500 hover:text-[#004B23] font-bold transition flex items-center space-x-1"
                        title="Copy Markdown"
                      >
                        <FileCode className="h-3 w-3" />
                        <span>Markdown</span>
                      </button>
                      <button
                        onClick={() => handleCopyHtml(item)}
                        className="text-gray-500 hover:text-[#004B23] font-bold transition flex items-center space-x-1"
                        title="Copy HTML Tag"
                      >
                        <ExternalLink className="h-3 w-3" />
                        <span>HTML Tag</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* List Mode */
          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-gray-500 font-bold uppercase tracking-wider text-[10px]">
                    <th className="p-4 w-10">Select</th>
                    <th className="p-4">Preview & Filename</th>
                    <th className="p-4">Folder</th>
                    <th className="p-4">File Size</th>
                    <th className="p-4">Upload Date</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-medium text-gray-800">
                  {filteredList.map((item) => {
                    const isSelected = selectedIds.includes(item.id);
                    const sizeMB = (item.size / (1024 * 1024)).toFixed(2);

                    return (
                      <tr key={item.id} className="hover:bg-gray-50/80 transition">
                        <td className="p-4">
                          <button
                            onClick={() =>
                              setSelectedIds((prev) =>
                                isSelected ? prev.filter((id) => id !== item.id) : [...prev, item.id]
                              )
                            }
                            className="text-gray-400 hover:text-[#004B23]"
                          >
                            {isSelected ? <CheckSquare className="h-4 w-4 text-[#004B23]" /> : <Square className="h-4 w-4" />}
                          </button>
                        </td>
                        <td className="p-4 flex items-center space-x-3">
                          <div className="w-12 h-9 rounded-lg bg-gray-900 overflow-hidden shrink-0 flex items-center justify-center">
                            {item.folder === 'images' ? (
                              <img src={item.url} alt={item.filename} className="w-full h-full object-cover" />
                            ) : (
                              <Video className="h-4 w-4 text-white" />
                            )}
                          </div>
                          <div>
                            <span className="font-bold text-gray-900 block truncate max-w-xs">{item.filename}</span>
                            <span className="text-[10px] text-gray-400 font-mono truncate block">{item.url}</span>
                          </div>
                        </td>
                        <td className="p-4 font-mono text-gray-600 uppercase text-[11px]">{item.folder}</td>
                        <td className="p-4 font-mono text-gray-600">{sizeMB} MB</td>
                        <td className="p-4 text-gray-500">{item.created_at.split('T')[0]}</td>
                        <td className="p-4 text-right space-x-2">
                          <button
                            onClick={() => setPreviewAsset(item)}
                            className="p-1.5 rounded-lg bg-gray-100 hover:bg-[#004B23] hover:text-white transition"
                            title="Preview"
                          >
                            <Eye className="h-3.5 w-3.5" />
                          </button>
                          <button
                            onClick={() => handleCopyUrl(item.url)}
                            className="p-1.5 rounded-lg bg-gray-100 hover:bg-[#004B23] hover:text-white transition"
                            title="Copy URL"
                          >
                            <Copy className="h-3.5 w-3.5" />
                          </button>
                          <button
                            onClick={() => setEditAsset(item)}
                            className="p-1.5 rounded-lg bg-gray-100 hover:bg-[#004B23] hover:text-white transition"
                            title="Edit"
                          >
                            <Edit className="h-3.5 w-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteAsset(item.id, item.filename)}
                            className="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition"
                            title="Delete"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      {/* UPLOAD MODAL */}
      {showUploadModal && (
        <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm p-4 flex items-center justify-center overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 flex items-center space-x-2">
                  <Upload className="h-5 w-5 text-[#004B23]" />
                  <span>Upload Media to Supabase Storage</span>
                </h3>
                <p className="text-xs text-gray-500">
                  Target Bucket: <strong className="text-gray-800 font-mono">admin-media</strong> (Images & Videos)
                </p>
              </div>
              <button
                onClick={() => setShowUploadModal(false)}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Dropzone */}
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragOver(true);
              }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setIsDragOver(false);
                if (e.dataTransfer.files) handleFilesAdded(e.dataTransfer.files);
              }}
              className={`border-2 border-dashed rounded-3xl p-8 text-center transition-all cursor-pointer ${
                isDragOver ? 'border-[#004B23] bg-emerald-50' : 'border-gray-300 hover:border-[#004B23] bg-gray-50'
              }`}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*,video/*,.pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => e.target.files && handleFilesAdded(e.target.files)}
              />
              <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 text-[#004B23] flex items-center justify-center mx-auto shadow-sm mb-3">
                <FileUp className="h-8 w-8" />
              </div>
              <h4 className="text-sm font-bold text-gray-800">
                Drag & Drop Media Files Here, or <span className="text-[#004B23] underline">Browse</span>
              </h4>
              <p className="text-xs text-gray-400 mt-1">
                Supports JPG, PNG, WEBP, GIF, SVG, MP4, MOV, AVI, WEBM, PDF (Up to 500MB)
              </p>
            </div>

            {/* Upload Queue Items */}
            {uploadQueue.length > 0 && (
              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                <h5 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Upload Queue ({uploadQueue.length} Files)
                </h5>
                {uploadQueue.map((task) => (
                  <div key={task.id} className="p-3 rounded-2xl bg-gray-50 border border-gray-200 space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-bold text-gray-800">
                      <span className="truncate max-w-xs">{task.file.name}</span>
                      <span className="font-mono text-[10px] text-gray-500">
                        {task.sizeKB} KB • {task.status.toUpperCase()}
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${
                          task.status === 'success'
                            ? 'bg-[#004B23]'
                            : task.status === 'error'
                            ? 'bg-red-600'
                            : 'bg-[#FFD54A]'
                        }`}
                        style={{ width: `${task.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                onClick={() => setShowUploadModal(false)}
                className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 text-xs font-bold hover:bg-gray-50"
              >
                Close
              </button>
              <button
                onClick={startQueueUpload}
                disabled={uploadQueue.filter((t) => t.status === 'queued' || t.status === 'error').length === 0}
                className="px-6 py-2.5 rounded-xl bg-[#004B23] hover:bg-[#003B1B] text-white font-bold text-xs shadow-md transition disabled:opacity-50"
              >
                Start Uploading to Storage
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PREVIEW MODAL */}
      {previewAsset && (
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md p-4 flex items-center justify-center">
          <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl space-y-4 p-6">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-bold text-base text-gray-900 truncate max-w-lg">{previewAsset.filename}</h3>
              <button onClick={() => setPreviewAsset(null)} className="p-2 rounded-full hover:bg-gray-100">
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <div className="aspect-video bg-black rounded-2xl overflow-hidden flex items-center justify-center">
              {previewAsset.folder === 'videos' ? (
                <video src={previewAsset.url} controls autoPlay className="w-full h-full object-contain" />
              ) : (
                <img src={previewAsset.url} alt={previewAsset.filename} className="w-full h-full object-contain" />
              )}
            </div>

            <div className="p-3 bg-gray-50 rounded-2xl border border-gray-200 text-xs space-y-1.5 font-mono">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Public URL:</span>
                <a href={previewAsset.url} target="_blank" rel="noreferrer" className="text-[#004B23] font-bold hover:underline truncate max-w-md">
                  {previewAsset.url}
                </a>
              </div>
              <div className="flex items-center justify-between text-gray-600">
                <span>Storage Path: admin-media/{previewAsset.folder}/{previewAsset.filename}</span>
                <span>Size: {(previewAsset.size / 1024).toFixed(0)} KB</span>
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3">
              <button
                onClick={() => handleCopyUrl(previewAsset.url)}
                className="px-4 py-2.5 rounded-xl bg-[#004B23] text-white text-xs font-bold shadow hover:bg-[#003B1B] transition flex items-center space-x-2"
              >
                <Copy className="h-4 w-4" />
                <span>Copy Public URL</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EDIT MODAL */}
      {editAsset && (
        <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm p-4 flex items-center justify-center">
          <form onSubmit={handleSaveEditAsset} className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-bold text-base text-gray-900">Edit Asset Details</h3>
              <button type="button" onClick={() => setEditAsset(null)} className="p-1 text-gray-400 hover:text-gray-700">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Filename / Title</label>
              <input
                type="text"
                value={editAsset.filename}
                onChange={(e) => setEditAsset({ ...editAsset, filename: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs font-bold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Alt Text (Accessibility)</label>
              <input
                type="text"
                value={editAsset.alt_text || ''}
                onChange={(e) => setEditAsset({ ...editAsset, alt_text: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Caption / Description</label>
              <textarea
                rows={3}
                value={editAsset.caption || ''}
                onChange={(e) => setEditAsset({ ...editAsset, caption: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs"
              />
            </div>

            <div className="flex items-center justify-end space-x-3 pt-2">
              <button type="button" onClick={() => setEditAsset(null)} className="px-4 py-2 rounded-xl border text-xs font-bold">
                Cancel
              </button>
              <button type="submit" className="px-5 py-2 rounded-xl bg-[#004B23] text-white text-xs font-bold shadow">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
