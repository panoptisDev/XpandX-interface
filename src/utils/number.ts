export const readableNumberFormatter = (
  number = 0,
  options?: Intl.NumberFormatOptions
) => {
  return number.toLocaleString("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...options,
  });
};
