import Image from 'next/image';
import type { FC } from 'react';

import LogoImage from './dda.png';

export const DDA: FC = () => (
  <div className="d-flex flex-column flex-md-row align-items-md-center">
    <div className="mb-3 mb-md-0 me-md-4">
      <Image src={LogoImage} alt="DDA" height={40} />
    </div>
    <p className="mb-0">QC Design School is proudly recognized by the Decorators & Designers Association of Canada for upholding the highest standards of education in the decorating and design industry.</p>
  </div>
);
