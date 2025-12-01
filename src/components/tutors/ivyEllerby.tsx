import type { FC } from 'react';

import { ImageCircle } from '../imageCircle';
import IvyEllerbyImage from './ivyEllerby.jpg';

interface Props {
  size?: number;
}

export const IvyEllerbyCircle: FC<Props> = ({ size = 200 }) => (
  <ImageCircle src={IvyEllerbyImage} alt="Ivy Ellerby" size={size} imagePositionX={75} />
);
