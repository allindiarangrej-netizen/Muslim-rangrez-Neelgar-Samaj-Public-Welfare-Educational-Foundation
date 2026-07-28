/**
 * Enterprise Google Drive Image Resolution & Preloading Engine
 * Handles extraction of File IDs from any Drive format and candidate failovers.
 */

// Memory Cache for Resolved & Preloaded Working URLs
const workingUrlCache = new Map<string, string>();

/**
 * Robustly extract Google Drive File ID from any Drive link format
 */
export function extractDriveFileId(url: string | null | undefined): string | null {
  if (!url) return null;

  // 1. Check for lh3.googleusercontent.com/d/ID
  if (url.includes('lh3.googleusercontent.com/d/')) {
    const parts = url.split('lh3.googleusercontent.com/d/')[1];
    if (parts) {
      return parts.split('=')[0].split('?')[0];
    }
  }

  // 2. Check for /file/d/ID
  if (url.includes('/file/d/')) {
    const parts = url.split('/file/d/')[1];
    if (parts) {
      return parts.split('/')[0].split('?')[0];
    }
  }

  // 3. Check for ?id=ID or &id=ID (uc?id=, open?id=, thumbnail?id=)
  if (url.includes('id=')) {
    try {
      const parsed = new URL(url.startsWith('http') ? url : `https://${url}`);
      const idParam = parsed.searchParams.get('id');
      if (idParam) return idParam;
    } catch {
      const match = url.match(/[?&]id=([a-zA-Z0-9_-]{20,})/);
      if (match && match[1]) return match[1];
    }
  }

  // 4. Fallback regex match for typical Google Drive 25-45 char base64-like IDs
  const driveIdMatch = url.match(/[-\w]{25,50}/);
  if (driveIdMatch && driveIdMatch[0]) {
    return driveIdMatch[0];
  }

  return null;
}

/**
 * Returns an ordered array of candidate direct image URLs for a Google Drive asset.
 * Order:
 * 1. High-Res direct content (lh3.googleusercontent.com/d/ID=s2000)
 * 2. Medium-Res direct content (lh3.googleusercontent.com/d/ID=w1600-h1200)
 * 3. Google Drive Thumbnail Proxy (drive.google.com/thumbnail?id=ID&sz=w2000)
 * 4. Google Drive Direct Export View (drive.google.com/uc?export=view&id=ID)
 * 5. Google Drive Basic UC (drive.google.com/uc?id=ID)
 */
export function getDriveCandidateUrls(url: string | null | undefined): string[] {
  if (!url) return [];

  const cached = workingUrlCache.get(url);
  
  const fileId = extractDriveFileId(url);
  if (!fileId) {
    return [url];
  }

  const candidates = [
    `https://lh3.googleusercontent.com/d/${fileId}=s2000`,
    `https://lh3.googleusercontent.com/d/${fileId}=w1600-h1200`,
    `https://drive.google.com/thumbnail?id=${fileId}&sz=w2000`,
    `https://drive.google.com/uc?export=view&id=${fileId}`,
    `https://drive.google.com/uc?id=${fileId}`
  ];

  // If we already know a working URL from cache, prioritize it first!
  if (cached && candidates.includes(cached)) {
    return [cached, ...candidates.filter(c => c !== cached)];
  }

  return candidates;
}

/**
 * Primary function to resolve a Drive URL to its optimal high-res direct URL
 */
export function resolveDriveUrl(url: string | null | undefined): string | null {
  if (!url) return null;
  const candidates = getDriveCandidateUrls(url);
  return candidates[0] || url;
}

/**
 * Background Preloader: Attempts to load candidate URLs sequentially in memory until one succeeds.
 * Caches and resolves with the first working candidate URL.
 */
export function preloadDriveImage(url: string): Promise<string> {
  if (!url) return Promise.reject('No URL provided');

  if (workingUrlCache.has(url)) {
    return Promise.resolve(workingUrlCache.get(url)!);
  }

  const candidates = getDriveCandidateUrls(url);
  if (candidates.length === 0) return Promise.reject('No candidate URLs found');

  return new Promise((resolve) => {
    let index = 0;

    const tryNextCandidate = () => {
      if (index >= candidates.length) {
        // Fall back to original input if all fail
        resolve(candidates[0] || url);
        return;
      }

      const candidateUrl = candidates[index];
      const img = new Image();
      img.referrerPolicy = 'no-referrer';

      img.onload = () => {
        workingUrlCache.set(url, candidateUrl);
        resolve(candidateUrl);
      };

      img.onerror = () => {
        index++;
        tryNextCandidate();
      };

      img.src = candidateUrl;
    };

    tryNextCandidate();
  });
}

/**
 * Diagnostic Health Auditor: Tests if a URL is reachable and loads properly.
 */
export async function validateDriveUrl(url: string): Promise<{
  valid: boolean;
  workingUrl?: string;
  fileId?: string;
  candidateTriedCount: number;
  error?: string;
}> {
  const fileId = extractDriveFileId(url) || undefined;
  const candidates = getDriveCandidateUrls(url);

  for (let i = 0; i < candidates.length; i++) {
    const candidate = candidates[i];
    const isWorking = await new Promise<boolean>((resolve) => {
      const img = new Image();
      img.referrerPolicy = 'no-referrer';
      const timeout = setTimeout(() => {
        img.onload = null;
        img.onerror = null;
        resolve(false);
      }, 5000);

      img.onload = () => {
        clearTimeout(timeout);
        resolve(true);
      };
      img.onerror = () => {
        clearTimeout(timeout);
        resolve(false);
      };
      img.src = candidate;
    });

    if (isWorking) {
      workingUrlCache.set(url, candidate);
      return {
        valid: true,
        workingUrl: candidate,
        fileId,
        candidateTriedCount: i + 1
      };
    }
  }

  return {
    valid: false,
    fileId,
    candidateTriedCount: candidates.length,
    error: 'All candidate Google Drive URLs failed to render (Check sharing permissions or file existence).'
  };
}

/**
 * Fallback image for events if no cover is found
 */
export const EVENT_FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000';

