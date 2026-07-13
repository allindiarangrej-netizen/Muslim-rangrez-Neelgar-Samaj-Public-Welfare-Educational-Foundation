import { Language } from './types';

export function getText(
  en: string, 
  hi: string, 
  ur: string, 
  currentLanguage: Language
): string {
  if (currentLanguage === 'hi') return hi;
  if (currentLanguage === 'ur') return ur;
  return en;
}
