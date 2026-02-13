import { hasRussianChars } from './hasRussianChars';
import { getReverseMap } from './getReverseMap';

export const translitToRussian = (text: string): string => {
  const map = getReverseMap();
  const translitPatterns = /(shch|sh|ch|zh|kh|ts|yu|ya|yo)/i;

  if (!translitPatterns.test(text) && !hasRussianChars(text)) {
    return text;
  }

  let result = text.toLowerCase();

  // Сортируем ключи по длине (самые длинные сначала)
  const keys = Object.keys(map).sort((a, b) => b.length - a.length);

  // Специальные правила для окончаний
  const wordBoundaryRules = [
    { pattern: /yy$/g, replacement: 'ый' }, // novyy -> новый
    { pattern: /iy$/g, replacement: 'ий' }, // siniy -> синий
    { pattern: /oy$/g, replacement: 'ой' }, // bolshoy -> большой
    { pattern: /ay$/g, replacement: 'ай' }, // may -> май
    { pattern: /y$/g, replacement: 'й' }, // в конце слова после гласной
  ];

  // Сначала применяем правила для окончаний
  for (const rule of wordBoundaryRules) {
    result = result.replace(rule.pattern, rule.replacement);
  }

  // Затем общая замена по карте
  for (const key of keys) {
    // Не заменяем, если это часть более длинного сочетания
    const regex = new RegExp(`(?![а-я])${key}(?![а-я])`, 'g');
    result = result.replace(regex, map[key]);
  }

  // Восстанавливаем заглавные буквы в начале предложения
  result = result.replace(/(^|\.\s+)([а-я])/g, (match, p1, p2) => {
    return p1 + p2.toUpperCase();
  });

  return result;
};
