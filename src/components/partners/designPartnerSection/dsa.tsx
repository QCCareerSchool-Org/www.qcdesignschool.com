import Image from 'next/image';
import type { FC } from 'react';

import LogoImage from './dsa.png';

export const DSA: FC = () => (
  <>
    <div className="mb-4">
      <Image src={LogoImage} alt="DSA" height={120} />
    </div>
    <h2 className="h5">Designers Society of America</h2>
    <p className="mb-0">QC's Interior Design program has been reviewed and approved by both the DSA and the RIDQC Board, meeting their high standards for professional training and industry excellence.</p>
  </>
);
