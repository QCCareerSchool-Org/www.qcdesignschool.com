import type { FC } from 'react';

import LogoImage from './logo.svg';

type Props = {
  height: number;
};

export const Logo: FC<Props> = ({ height }) => <LogoImage alt="QC Design School" style={{ height, width: 'auto' }} />;
