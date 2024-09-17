import type { FC } from 'react';

import MwaiYeboahImage from './mwaiYeboah.jpg';
import { ImageCircle } from '../imageCircle';

type Props = {
  size?: number;
};

export const MwaiYeboahCircle: FC<Props> = ({ size = 200 }) => (
  <ImageCircle src={MwaiYeboahImage} alt="Mwai Yeboah" size={size} imagePositionX={66} />
);
