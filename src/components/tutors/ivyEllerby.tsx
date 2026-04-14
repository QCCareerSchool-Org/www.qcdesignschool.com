import type { FC } from 'react';

import IvyEllerbyImage from './ivyEllerby.jpg';
import { ImageCircle } from '@/components/imageCircle';

interface Props {
  size?: number;
}

export const IvyEllerbyCircle: FC<Props> = ({ size = 200 }) => (
  <ImageCircle src={IvyEllerbyImage} alt="Ivy Ellerby" size={size} imagePositionX={75} />
);
