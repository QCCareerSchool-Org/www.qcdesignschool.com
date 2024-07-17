import type { FC } from 'react';
import { ImageCircle } from '../imageCircle';

import MwaiYeboahImage from './mwaiYeboah.jpg';

type Props = {
  size?: number;
};

export const MwaiYeboahCircle: FC<Props> = ({ size = 200 }) => (
  <ImageCircle src={MwaiYeboahImage} alt="Mwai Yeboah" size={size} imagePositionX={66} />
);
