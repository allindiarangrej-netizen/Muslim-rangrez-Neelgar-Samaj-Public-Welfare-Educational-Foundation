import React, { useState, useEffect, useCallback } from 'react';
import { getSupabase } from '../../lib/supabaseClient';
import { AdminImage } from '../../types/admin';
import ImageGallery from '../../components/ImageGallery';
import { RefreshCw } from 'lucide-react';

export default function Gallery() {
  const [images, setImages] = useState<AdminImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchImages = useCallback(async () => {
    const supabase = getSupabase();
    if (!supabase) return;

    setLoading(true);
    try {
      const { data, error } = await supabase.storage
        .from('admin-uploads')
        .list('admin-photos', {
          limit: 100,
          offset: 0,
          sortBy: { column: 'created_at', order: 'desc' },
        });

      if (error) throw error;

      if (data) {
        const imageUrls = await Promise.all(
          data.map(async (file) => {
            const { data: { publicUrl } } = supabase.storage
              .from('admin-uploads')
              .getPublicUrl(`admin-photos/${file.name}`);
            
            return {
              name: file.name,
              url: publicUrl,
              created_at: file.created_at,
              size: file.metadata?.size || 0,
            };
          })
        );
        setImages(imageUrls);
      }
    } catch (error: any) {
      console.error('Error fetching images:', error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const handleDelete = async (name: string) => {
    if (!window.confirm('Are you sure you want to delete this image?')) return;

    const supabase = getSupabase();
    if (!supabase) return;

    setDeleting(name);
    try {
      const { error } = await supabase.storage
        .from('admin-uploads')
        .remove([`admin-photos/${name}`]);

      if (error) throw error;
      setImages(prev => prev.filter(img => img.name !== name));
    } catch (error: any) {
      alert('Error deleting image: ' + error.message);
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gallery Manager</h1>
          <p className="text-gray-500 mt-1">Manage and preview all uploaded images</p>
        </div>
        <button 
          onClick={fetchImages}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors"
        >
          <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      <ImageGallery 
        images={images} 
        onDelete={handleDelete} 
        loading={loading}
        deleting={deleting}
      />
    </div>
  );
}
