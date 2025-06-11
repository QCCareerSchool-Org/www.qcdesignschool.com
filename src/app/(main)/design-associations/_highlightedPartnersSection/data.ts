import type { StaticImageData } from 'next/image';

import CRSCLogo from './images/crsc.png';
import DDALogo from './images/dda.png';
import DSALogo from './images/dsa.png';
import ISCCLogo from './images/iscc.png';
import IFDALogo from './images/placeholder.png';
import IAHSPLogo from './images/placeholder.png';
import RESALogo from './images/resa.png';

const otherCountry = Symbol('other country');

type Partner = {
  src: StaticImageData;
  alt: string;
  maxHeight?: number;
};

const partnersDictionary: Record<string | symbol, Partner[]> = {
  CA: [
    { src: DDALogo, alt: 'DDA' },
    { src: CRSCLogo, alt: 'CRSC' },
    { src: RESALogo, alt: 'RESA' },
  ],
  US: [
    { src: DSALogo, alt: 'DSA' },
    { src: RESALogo, alt: 'RESA' },
    { src: ISCCLogo, alt: 'ISCC', maxHeight: 140 },
  ],
  [otherCountry]: [
    { src: DSALogo, alt: 'DSA' },
    { src: IFDALogo, alt: 'IFDA' },
    { src: IAHSPLogo, alt: 'IAHSP' },
  ],
} as const;

export const getPartners = (countryCode: string): Partner[] => {
  return partnersDictionary[countryCode] ?? partnersDictionary[otherCountry];
};
