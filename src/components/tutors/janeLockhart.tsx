import type { FC } from 'react';

import JaneLockhartImage from './janeLockhart.jpg';
import { ImageCircle } from '../imageCircle';

type Props = {
  size?: number;
};

export const JaneLockhartCircle: FC<Props> = ({ size = 200 }) => (
  <ImageCircle src={JaneLockhartImage} alt="Jane Lockhart" size={size} imagePositionX={40} />
);
