import Image from 'next/image';
import type { FC } from 'react';

import LogoImage from './dda.png';

export const DDA: FC = () => (
  <>
    <div className="mb-4">
      <Image src={LogoImage} alt="DDA" height={80} />
    </div>
    <h2 className="h5">Decorators & Designers Association of Canada</h2>
    <p className="mb-0">QC Design School is proudly recognized by the DDA for upholding the highest standards of education in the decorating and design industry.</p>
  </>
);
