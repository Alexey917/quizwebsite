import { hasRussianChars } from './hasRussianChars';
import { getReverseMap } from './getReverseMap';

export const translitToRussian = (text: string): string => {
  const map = getReverseMap();
  const translitPatterns = /(shch|sh|ch|zh|kh|ts|yu|ya|yo)/i;

  if (!translitPatterns.test(text) && !hasRussianChars(text)) {
    return text;
  }

  let result = text.toLowerCase();

  const keys = Object.keys(map).sort((a, b) => b.length - a.length);

  const wordBoundaryRules = [
    { pattern: /yy$/g, replacement: 'ый' },
    { pattern: /iy$/g, replacement: 'ий' },
    { pattern: /oy$/g, replacement: 'ой' },
    { pattern: /ay$/g, replacement: 'ай' },
    { pattern: /y$/g, replacement: 'й' },
  ];

  for (const rule of wordBoundaryRules) {
    result = result.replace(rule.pattern, rule.replacement);
  }

  for (const key of keys) {
    const regex = new RegExp(`(?![а-я])${key}(?![а-я])`, 'g');
    result = result.replace(regex, map[key]);
  }

  result = result.replace(/(^|\.\s+)([а-я])/g, (match, p1, p2) => {
    return p1 + p2.toUpperCase();
  });

  return result;
};
