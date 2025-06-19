import type { FC } from 'react';

import LogoImage from './logo.svg';
import { Flag } from '../flag';

type Props = {
  height: number;
  countryCode: string;
};

export const Logo: FC<Props> = ({ height, countryCode }) => {
  const flagHeight = Math.floor(height * 2 / 3);
  return (
    <>
      <LogoImage alt="QC Design School" style={{ height, width: 'auto' }} />
      <span className="ms-2"><Flag height={flagHeight} countryCode={countryCode} /></span>
    </>
  );
};
