import Image from 'next/image';
import type { FC } from 'react';

import { Client } from './client';
import Slide1Image from './slide-1.jpg';
import Slide2Image from './slide-2.jpg';
import Slide3Image from './slide-3.jpg';

export const DesignFilesCarousel: FC = () => (
  <Client>
    <Image src={Slide1Image} className="img-fluid rounded" alt="" />
    <Image src={Slide2Image} className="img-fluid rounded" alt="" />
    <Image src={Slide3Image} className="img-fluid rounded" alt="" />
  </Client>
);
