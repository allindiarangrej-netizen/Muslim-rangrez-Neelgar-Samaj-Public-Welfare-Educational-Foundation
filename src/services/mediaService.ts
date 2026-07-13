// ============================================================================
// CENTRALIZED MEDIA & DOCUMENT MANAGEMENT ENGINE
// Supports Images, Videos, Documents, PDF, Gallery, Downloads, Compression,
// Optimization, Metadata, Categories, Version History, PDF Viewer simulation.
// ============================================================================

import { IMAGES } from '../data/mediaRegistry';

export type MediaCategory = 
  | 'All' 
  | 'Gallery Images' 
  | 'Event Videos' 
  | 'Legal Documents' 
  | 'Education PDFs' 
  | 'Annual Reports' 
  | 'Committee Minutes' 
  | 'Downloads';

export interface MediaAssetItem {
  id: string;
  titleEn: string;
  titleHi: string;
  category: MediaCategory;
  fileType: 'image' | 'video' | 'pdf' | 'document' | 'archive';
  fileSizeKB: number;
  url: string;
  uploadedBy: string;
  uploadDate: string;
  version: string;
  isPublic: boolean;
  downloadCount: number;
  metadata: {
    resolution?: string;
    duration?: string;
    optimized: boolean;
    compressionRatio?: string;
    checksum?: string;
  };
  versionHistory?: { version: string; date: string; notes: string; url: string }[];
}

const MEDIA_STORAGE_KEY = 'rcb_enterprise_media_vault';

export class MediaService {
  private static assets: MediaAssetItem[] | null = null;

  /**
   * Initialize media vault with existing static images and document library
   */
  static init(): MediaAssetItem[] {
    if (this.assets) return this.assets;

    try {
      const stored = localStorage.getItem(MEDIA_STORAGE_KEY);
      if (stored) {
        this.assets = JSON.parse(stored);
        return this.assets!;
      }
    } catch (e) {
      console.error('Failed to load media vault:', e);
    }

    const now = new Date().toISOString().split('T')[0];

    const initialAssets: MediaAssetItem[] = [
      {
        id: 'MED-IMG-001',
        titleEn: 'National Working Committee Conference (Bhopal)',
        titleHi: 'राष्ट्रीय कार्यसमिति सम्मेलन (भोपाल)',
        category: 'Gallery Images',
        fileType: 'image',
        fileSizeKB: 480,
        url: IMAGES.albums.mahapanchayat_1,
        uploadedBy: 'Trust Media Desk',
        uploadDate: '2026-06-20',
        version: 'v1.0',
        isPublic: true,
        downloadCount: 142,
        metadata: { resolution: '1920x1080', optimized: true, compressionRatio: '45% (WebP)', checksum: 'sha256-49f8...11a' }
      },
      {
        id: 'MED-IMG-002',
        titleEn: 'Morena District Scholarship Distribution Ceremony',
        titleHi: 'मुरैना जिला छात्रवृत्ति वितरण समारोह',
        category: 'Gallery Images',
        fileType: 'image',
        fileSizeKB: 512,
        url: IMAGES.albums.scholarship_1,
        uploadedBy: 'Education Wing',
        uploadDate: '2026-06-25',
        version: 'v1.0',
        isPublic: true,
        downloadCount: 89,
        metadata: { resolution: '1920x1080', optimized: true, compressionRatio: '40% (WebP)' }
      },
      {
        id: 'MED-PDF-101',
        titleEn: 'All India Rangrez Central Trust Constitution & By-Laws (2026 Edition)',
        titleHi: 'अखिल भारतीय रंगरेज केंद्रीय ट्रस्ट संविधान एवं नियमावली (2026 संस्करण)',
        category: 'Legal Documents',
        fileType: 'pdf',
        fileSizeKB: 2450,
        url: '/documents/rcb_constitution_2026.pdf',
        uploadedBy: 'Legal Advisory Committee',
        uploadDate: '2026-01-01',
        version: 'v2.4-FINAL',
        isPublic: true,
        downloadCount: 1240,
        metadata: { optimized: true, compressionRatio: '15%', checksum: 'sha256-abc8...99e' },
        versionHistory: [
          { version: 'v2.4-FINAL', date: '2026-01-01', notes: 'Incorporated digital census & data privacy clauses.', url: '/documents/rcb_constitution_2026.pdf' },
          { version: 'v2.1', date: '2023-05-15', notes: 'Standard amendment for state advisory wings.', url: '/documents/rcb_constitution_2023.pdf' },
          { version: 'v1.0', date: '1982-10-10', notes: 'Original founding society registration copy.', url: '/documents/rcb_constitution_1982.pdf' }
        ]
      },
      {
        id: 'MED-PDF-102',
        titleEn: 'National Socio-Economic Census Survey Form (Printable PDF)',
        titleHi: 'राष्ट्रीय सामाजिक-आर्थिक जनगणना सर्वेक्षण फॉर्म (प्रिंट योग्य)',
        category: 'Downloads',
        fileType: 'pdf',
        fileSizeKB: 850,
        url: '/documents/census_form_offline_2026.pdf',
        uploadedBy: 'Census Committee',
        uploadDate: '2026-02-10',
        version: 'v1.2',
        isPublic: true,
        downloadCount: 3410,
        metadata: { optimized: true, compressionRatio: '20%' }
      },
      {
        id: 'MED-PDF-103',
        titleEn: 'Annual Financial & Zakat Audit Report (FY 2024-25)',
        titleHi: 'वार्षिक वित्तीय एवं जकात ऑडिट रिपोर्ट (वित्तीय वर्ष 2024-25)',
        category: 'Annual Reports',
        fileType: 'pdf',
        fileSizeKB: 3100,
        url: '/documents/audit_report_fy2025.pdf',
        uploadedBy: 'Central Treasurer',
        uploadDate: '2025-05-30',
        version: 'v1.0',
        isPublic: true,
        downloadCount: 650,
        metadata: { optimized: true, compressionRatio: '10%' }
      },
      {
        id: 'MED-VID-201',
        titleEn: 'Mahapanchayat 2026 Keynote Address on Education Reform',
        titleHi: 'महापंचायत 2026: शिक्षा सुधार पर मुख्य उद्बोधन (वीडियो)',
        category: 'Event Videos',
        fileType: 'video',
        fileSizeKB: 45000,
        url: 'https://www.youtube.com/watch?v=demo_rangrez_keynote',
        uploadedBy: 'Media Center',
        uploadDate: '2026-04-12',
        version: 'v1.0',
        isPublic: true,
        downloadCount: 520,
        metadata: { duration: '42:15 mins', resolution: '1080p HD', optimized: true }
      }
    ];

    this.assets = initialAssets;
    this.save();
    return this.assets;
  }

  static save(): void {
    if (!this.assets) return;
    try {
      localStorage.setItem(MEDIA_STORAGE_KEY, JSON.stringify(this.assets));
      window.dispatchEvent(new CustomEvent('rcb_media_updated', { detail: { count: this.assets.length } }));
    } catch (e) {
      console.error('Failed to save media assets:', e);
    }
  }

  static getAll(category?: MediaCategory, fileType?: string): MediaAssetItem[] {
    const all = this.init();
    return all.filter(a => {
      if (category && category !== 'All' && a.category !== category) return false;
      if (fileType && fileType !== 'all' && a.fileType !== fileType) return false;
      return true;
    });
  }

  /**
   * Simulate uploading a new media/document asset with auto compression
   */
  static uploadAsset(payload: {
    titleEn: string;
    titleHi: string;
    category: MediaCategory;
    fileType: 'image' | 'video' | 'pdf' | 'document' | 'archive';
    fileSizeKB: number;
    url?: string;
    uploadedBy: string;
    isPublic: boolean;
  }): MediaAssetItem {
    const all = this.init();
    const newId = `MED-${payload.fileType.substring(0,3).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const originalSize = payload.fileSizeKB;
    const optimizedSize = Math.max(50, Math.round(originalSize * 0.6)); // Simulate 40% compression engine

    const newAsset: MediaAssetItem = {
      id: newId,
      titleEn: payload.titleEn,
      titleHi: payload.titleHi,
      category: payload.category,
      fileType: payload.fileType,
      fileSizeKB: optimizedSize,
      url: payload.url || `https://source.unsplash.com/random/800x600?community,meeting&sig=${newId}`,
      uploadedBy: payload.uploadedBy,
      uploadDate: new Date().toISOString().split('T')[0],
      version: 'v1.0',
      isPublic: payload.isPublic,
      downloadCount: 0,
      metadata: {
        resolution: payload.fileType === 'image' ? '1920x1080' : undefined,
        duration: payload.fileType === 'video' ? '15:30 mins' : undefined,
        optimized: true,
        compressionRatio: `40% Saved (${originalSize - optimizedSize} KB compressed)`,
        checksum: `sha256-${Math.random().toString(36).substring(2, 10)}...`
      },
      versionHistory: [
        { version: 'v1.0', date: new Date().toISOString().split('T')[0], notes: 'Initial optimized enterprise upload', url: payload.url || '' }
      ]
    };

    all.unshift(newAsset);
    this.save();
    return newAsset;
  }

  /**
   * Simulate incrementing download counter and triggering file save/preview
   */
  static downloadAsset(id: string): MediaAssetItem | undefined {
    const all = this.init();
    const item = all.find(a => a.id === id);
    if (item) {
      item.downloadCount += 1;
      this.save();

      // Create simulated download trigger
      const blob = new Blob([`Simulated downloaded content for document: ${item.titleEn}\nRef ID: ${item.id}\nChecksum: ${item.metadata.checksum || 'Verified'}\nAll India Rangrez Central Trust Official Registry`], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${item.titleEn.replace(/\s+/g, '_')}_${item.version}.${item.fileType === 'pdf' ? 'pdf' : item.fileType === 'image' ? 'jpg' : 'doc'}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    return item;
  }
}
