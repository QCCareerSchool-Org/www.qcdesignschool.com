// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getDesignRestricted = (countryCode: string, provinceCode: string | null): boolean => {
  return true;
  // return countryCode === 'CA' ||
  //   (countryCode === 'US' && provinceCode === 'LA') ||
  //   (countryCode === 'US' && provinceCode === 'NV') ||
  //   (countryCode === 'US' && provinceCode === 'DC');
};
