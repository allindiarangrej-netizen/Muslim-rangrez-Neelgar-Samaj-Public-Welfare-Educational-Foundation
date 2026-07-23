import React, { useState, useEffect, useMemo } from 'react';
import {
  Calendar,
  Image as ImageIcon,
  Video,
  MapPin,
  Sparkles,
  Layers,
  FolderPlus,
  Play,
  Heart,
  Eye,
  Plus,
  X
} from 'lucide-react';
import { Language } from '../types';
import { getSupabase } from '../lib/supabaseClient';
import { 
  initialHeritageAlbums, 
  initialHeritageVideos, 
  HeritageAlbum, 
  HeritageVideo,
  eventCategories 
} from '../data/heritageMedia';
import PremiumGalleryViewer from './gallery/PremiumGalleryViewer';

interface MediaCenterProps {
  currentLanguage: Language;
  defaultCategory?: 'Photo Gallery' | 'Video Gallery' | 'Event Albums' | 'Historical Archive' | 'Community Memories' | 'Documentary Library' | 'Awards & Achievements' | 'Press & News Gallery' | 'Regional Galleries';
}

export default function MediaCenter({ currentLanguage, defaultCategory = 'Photo Gallery' }: MediaCenterProps) {
  const [activeMenuTab, setActiveMenuTab] = useState(defaultCategory);
  const [albums, setAlbums] = useState<HeritageAlbum[]>(initialHeritageAlbums);
  const [videos, setVideos] = useState<HeritageVideo[]>(initialHeritageVideos);
  const [loading, setLoading] = useState(true);
  const [adminActive, setAdminActive] = useState(false);

  useEffect(() => {
    setActiveMenuTab(defaultCategory);
  }, [defaultCategory]);

  useEffect(() => {
    async function fetchMedia() {
      const supabase = getSupabase();
      if (!supabase) {
        setLoading(false);
        return;
      }
      try {
        const { data: albumsData } = await supabase.from('media_gallery').select('*').eq('category', 'Photo Gallery');
        const { data: videosData } = await supabase.from('media_gallery').select('*').eq('category', 'Video Gallery');
        
        const dbAlbums = albumsData?.map(a => ({
          id: a.id,
          titleEn: a.title,
          titleHi: a.title,
          eventType: 'Community',
          category: 'Photo Gallery' as any,
          location: { state: 'MP', district: 'Morena' },
          date: a.created_at,
          year: 2026,
          photographerEn: 'Admin',
          photographerHi: 'Admin',
          uploadedBy: 'Admin',
          images: [a.url],
          descriptionEn: a.title,
          descriptionHi: a.title,
          views: 0,
          likes: 0
        })) || [];

        const dbVideos = videosData?.map(v => ({
          id: v.id,
          titleEn: v.title,
          titleHi: v.title,
          eventType: 'Community',
          category: 'Video Gallery' as any,
          thumbnailUrl: v.url,
          videoUrl: v.url,
          platform: 'YouTube' as any,
          duration: '05:00',
          location: { state: 'MP', district: 'Morena' },
          uploadDate: v.created_at,
          year: 2026,
          views: 0,
          likes: 0
        })) || [];

        setAlbums([...dbAlbums, ...initialHeritageAlbums]);
        setVideos([...dbVideos, ...initialHeritageVideos]);
      } catch (err) {
        console.error('Error fetching media:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchMedia();
  }, []);

  return (
    <div className="py-16 bg-[#FDFBF7] relative overflow-hidden" id="digital_heritage_gallery">
      {/* Decorative Top Border */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#F4C430] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100 text-[#004B23] text-xs font-bold uppercase tracking-widest font-mono">
            <Sparkles className="h-4 w-4 text-[#F4C430]" />
            <span>{currentLanguage === 'en' ? 'NATIONAL DIGITAL ARCHIVE' : 'राष्ट्रीय डिजिटल विरासत अभिलेखागार'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#004B23] tracking-tight">
            {currentLanguage === 'en' ? 'Digital Community Heritage Gallery' : 'डिजिटल सामुदायिक विरासत गैलरी'}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            {currentLanguage === 'en'
              ? 'A permanent visual chronicle preserving ancient artifacts, historic resolutions, and social reform movements of the Rangrez biradari.'
              : 'अखिल भारतीय स्तर पर रंगरेज बिरादरी के ऐतिहासिक प्रलेखों और सामाजिक सुधार अभियानों को संजोने वाला एक डिजिटल संग्रहालय।'}
          </p>
        </div>

        {/* ================= QUICK STATS PANEL ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#004B23] text-white p-6 rounded-2xl border border-[#F4C430]/30 shadow-lg flex items-center space-x-4 group hover:border-[#F4C430] transition duration-300">
            <div className="p-3 bg-white/10 rounded-xl text-[#F4C430]">
              <Layers className="h-6 w-6" />
            </div>
            <div>
              <p className="text-[10px] text-emerald-200 uppercase tracking-widest font-mono">Total Archive</p>
              <p className="text-sm font-bold text-white mt-1">{albums.length} Albums</p>
              <p className="text-[9px] text-[#F4C430] font-mono mt-0.5">{videos.length} Documentaries</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm flex items-center space-x-4">
            <div className="p-3 bg-emerald-50 rounded-xl text-[#004B23]">
              <Calendar className="h-6 w-6" />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">Latest Archive</p>
              <p className="text-sm font-serif font-extrabold text-[#004B23]">July 2026</p>
              <p className="text-[9px] text-gray-400 font-mono mt-0.5">Community Vault</p>
            </div>
          </div>

          <div className="lg:col-span-2 flex items-center justify-end">
             <button
              onClick={() => setAdminActive(true)}
              className="px-6 py-4 bg-[#004B23] text-white hover:bg-emerald-950 rounded-2xl text-sm font-bold uppercase tracking-wider flex items-center space-x-3 border border-[#F4C430]/40 transition-all shadow-xl"
            >
              <FolderPlus className="h-5 w-5 text-[#F4C430]" />
              <span>{currentLanguage === 'en' ? 'Contribute to Archive' : 'अभिलेखागार में योगदान दें'}</span>
            </button>
          </div>
        </div>

        {/* ================= PREMIUM GALLERY VIEWER HUB ================= */}
        <div className="bg-white p-4 md:p-8 rounded-[2.5rem] border border-gray-150 shadow-2xl relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F4C430]/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <PremiumGalleryViewer 
            albums={albums}
            videos={videos}
            currentLanguage={currentLanguage}
            initialCategory={activeMenuTab === 'Regional Galleries' ? undefined : activeMenuTab}
          />
        </div>
      </div>

      {/* Admin Panel Modal (Placeholder for future functionality) */}
      {adminActive && (
        <div className="fixed inset-0 z-[110] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border-2 border-[#F4C430] rounded-3xl p-8 w-full max-w-lg shadow-2xl relative">
            <button onClick={() => setAdminActive(false)} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500">
              <X className="h-6 w-6" />
            </button>
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-[#004B23]">
                <FolderPlus className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#004B23]">Archive Contribution</h3>
              <p className="text-sm text-gray-500">
                To maintain the high quality of our digital archive, community contributions are currently handled via the official Media Cell. 
                Please contact the administrator to upload your high-resolution photos and videos.
              </p>
              <button 
                onClick={() => setAdminActive(false)}
                className="w-full py-3 bg-[#004B23] text-white rounded-xl font-bold uppercase tracking-widest text-xs"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
