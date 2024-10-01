import type { FC } from 'react';

import { ImageCircle } from '../imageCircle';
import TammyHartImage from './tammyHart.jpg';

type Props = {
  size?: number;
};

export const TammyHartCircle: FC<Props> = ({ size = 200 }) => (
  <ImageCircle src={TammyHartImage} alt="Tammy Hart" size={size} imagePositionX={66} />
);
