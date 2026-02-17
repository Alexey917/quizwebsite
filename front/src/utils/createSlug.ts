import { hasRussianChars, translitToLatin } from '@/utils';

export const createSlug = (title: string): string => {
  const latinTitle = hasRussianChars(title) ? translitToLatin(title) : title;

  return latinTitle
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};
