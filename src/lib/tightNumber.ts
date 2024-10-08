const tightNumbers = [ 2, 3, 4, 5, 6, 7 ];

export const tightNumber = (num: number): boolean => {
  const firstDigit = parseInt(num.toString().substring(0, 1), 10);
  return tightNumbers.includes(firstDigit);
};
