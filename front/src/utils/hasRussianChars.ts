export const hasRussianChars = (text: string): boolean => {
  const russianRegex = /[а-яА-ЯёЁ]/;
  return russianRegex.test(text);
};
