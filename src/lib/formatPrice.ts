const defaultPrecision = 2;

export const formatPrice = (price: number, precision = defaultPrecision, separator = false): string => {
  if (Math.floor(price) === price) {
    const formatter = Intl.NumberFormat('en-US', { style: 'decimal', useGrouping: separator, minimumIntegerDigits: 1 });
    return formatter.format(price);
  }
  const formatter = Intl.NumberFormat('en-US', { style: 'decimal', useGrouping: separator, roundingMode: 'expand', minimumIntegerDigits: 1, maximumFractionDigits: precision, minimumFractionDigits: precision });
  return formatter.format(price);
};
