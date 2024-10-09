import type { StaticImageData } from 'next/image';

import { carylShowcase } from './caryl';
import { jacquelineShowcase } from './jacqueline';
import { jamieShowcase } from './jamie';
import type { PortfolioImage } from './showcase';

export type StudentShowcase = {
  name: string;
  credentials?: string;
  showcaseImage: StaticImageData;
  iconImage: StaticImageData;
  description: string;
  portfolioImages: PortfolioImage[];
  link?: string;
};

export const studentShowcases: StudentShowcase[] = [ carylShowcase, jacquelineShowcase, jamieShowcase ];
