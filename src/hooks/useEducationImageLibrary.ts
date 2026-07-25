import { useState, useEffect, useMemo } from 'react';
import { 
  educationGalleryImages, 
  educationGalleryUrls, 
  EducationImageItem, 
  validateImage 
} from '../data/educationGalleryImages';

export interface UseEducationImageLibraryOptions {
  category?: string;
  maxCount?: number;
  skipValidation?: boolean;
}

export function useEducationImageLibrary(options: UseEducationImageLibraryOptions = {}) {
  const { category, maxCount, skipValidation = false } = options;
  const [validatedImages, setValidatedImages] = useState<EducationImageItem[]>([]);
  const [isValidating, setIsValidating] = useState<boolean>(!skipValidation);
  const [brokenCount, setBrokenCount] = useState<number>(0);

  // Initial candidate items filtered by category if requested
  const candidateItems = useMemo(() => {
    let items = educationGalleryImages;
    if (category && category !== 'All') {
      items = items.filter(img => img.category === category);
    }
    return maxCount ? items.slice(0, maxCount) : items;
  }, [category, maxCount]);

  useEffect(() => {
    let isMounted = true;

    if (skipValidation) {
      setValidatedImages(candidateItems);
      setIsValidating(false);
      return;
    }

    async function checkImages() {
      setIsValidating(true);
      let failed = 0;
      const validResults: EducationImageItem[] = [];

      for (const item of candidateItems) {
        if (!isMounted) break;
        const isValid = await validateImage(item.url, 5000);
        if (isValid) {
          validResults.push(item);
        } else {
          failed++;
        }
      }

      if (isMounted) {
        setValidatedImages(validResults);
        setBrokenCount(failed);
        setIsValidating(false);
      }
    }

    checkImages();

    return () => {
      isMounted = false;
    };
  }, [candidateItems, skipValidation]);

  const validUrls = useMemo(() => validatedImages.map(img => img.url), [validatedImages]);

  return {
    images: validatedImages.length > 0 || !isValidating ? validatedImages : candidateItems,
    validUrls: validUrls.length > 0 || !isValidating ? validUrls : candidateItems.map(i => i.url),
    allImages: candidateItems,
    allUrls: candidateItems.map(i => i.url),
    totalCount: candidateItems.length,
    validCount: validatedImages.length,
    brokenCount,
    isValidating,
  };
}
