export type MultilingualText = string | { en: string; hi: string; ur?: string };

export const getText = (
  text: MultilingualText | undefined,
  lang: 'en' | 'hi' | 'ur'
): string => {
  if (!text) return '';
  if (typeof text === 'string') return text;
  return text[lang] || text.en || '';
};
