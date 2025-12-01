import type { FC } from 'react';

import { ImageCircle } from '../imageCircle';
import AngieChapmanImage from './angieChapman.jpg';

interface Props {
  size?: number;
}

export const AngieChapmanCircle: FC<Props> = ({ size = 200 }) => (
  <ImageCircle src={AngieChapmanImage} alt="Angie Chapman" size={size} imagePositionX={40} />
);
