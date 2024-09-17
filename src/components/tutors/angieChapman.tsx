import type { FC } from 'react';

import AngieChapmanImage from './angieChapman.jpg';
import { ImageCircle } from '../imageCircle';

type Props = {
  size?: number;
};

export const AngieChapmanCircle: FC<Props> = ({ size = 200 }) => (
  <ImageCircle src={AngieChapmanImage} alt="Angie Chapman" size={size} imagePositionX={40} />
);
