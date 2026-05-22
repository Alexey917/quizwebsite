export const extractNumericString = (param: string): string => {
  const numericPart = param.split('-')[0];
  return numericPart;
};
