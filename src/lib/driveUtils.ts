/**
 * Utility to convert various Google Drive link formats to direct image links
 * or preview links suitable for <img> tags.
 */

export function resolveDriveUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  
  // If it's already a direct link to lh3 (e.g. from our previous conversion)
  // ensure it has the high-quality parameter if missing, or just return it.
  if (url.includes('lh3.googleusercontent.com/d/')) {
    // Optionally append =s2000 for high quality if no parameter exists
    return url.includes('=') ? url : `${url}=s2000`;
  }

  // If it's not a drive link at all, return as is
  if (!url.includes('drive.google.com') && !url.includes('google.com/file') && !url.includes('google.com/open')) {
    return url;
  }

  try {
    let fileId = '';

    // 1. Handle /file/d/ID/view format
    if (url.includes('/file/d/')) {
      const parts = url.split('/file/d/');
      if (parts[1]) {
        fileId = parts[1].split('/')[0].split('?')[0];
      }
    }
    // 2. Handle ?id=ID or &id=ID format (uc?id=, open?id=)
    else if (url.includes('id=')) {
      const urlObj = new URL(url);
      fileId = urlObj.searchParams.get('id') || '';
    }
    // 3. Fallback regex for any drive-like ID if the above fails
    if (!fileId) {
      const driveIdMatch = url.match(/[-\w]{25,}/);
      if (driveIdMatch && driveIdMatch[0]) {
        fileId = driveIdMatch[0];
      }
    }

    if (fileId) {
      // lh3.googleusercontent.com/d/FILE_ID=s2000 is the most reliable direct image format
      // =s2000 requests the high-res version.
      return `https://lh3.googleusercontent.com/d/${fileId}=s2000`;
    }
  } catch (e) {
    console.warn('Error resolving Drive URL:', e, url);
  }

  return url;
}

/**
 * Fallback image for events if no cover is found
 */
export const EVENT_FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000';
