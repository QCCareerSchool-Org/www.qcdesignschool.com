import Image from 'next/image';
import type { FC } from 'react';

import LogoImage from './dsa.png';

export const DSA: FC = () => (
  <div className="d-flex flex-column flex-xl-row align-items-xl-center">
    <div className="mb-3 mb-xl-0 me-xl-4">
      <Image src={LogoImage} alt="DSA" height={70} />
    </div>
    <p className="mb-0">QC's Interior Design program has been reviewed and approved by both the DSA and the RIDQC Board, meeting their high standards for professional training and industry excellence.</p>
  </div>
);
