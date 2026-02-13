import { translitToRussian } from './translitToRussian';

export const restoreTitleFromSlug = (slug: string): string => {
  const parts = slug.split('-');

  return parts
    .map((part) => {
      // Пытаемся восстановить русский только если похоже на транслит
      const hasTranslitPatterns = /(shch|sh|ch|zh|kh|ts|yu|ya|yo|yy|iy|oy|ay)/i;

      if (hasTranslitPatterns) {
        const russian = translitToRussian(part);
        // Если получилось что-то другое
        if (russian !== part) {
          return russian;
        }
      }

      // Иначе оставляем как есть
      return part;
    })
    .join(' ');
};
