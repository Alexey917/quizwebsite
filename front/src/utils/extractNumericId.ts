export const extractNumericId = (param: string): number => {
  const numericPart = param.split('-')[0];
  return +numericPart;
};
