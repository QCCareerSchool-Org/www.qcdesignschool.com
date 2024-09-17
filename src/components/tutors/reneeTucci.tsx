import type { FC } from 'react';

import ReneeTucciImage from './reneeTucci.jpg';
import { ImageCircle } from '../imageCircle';

type Props = {
  size?: number;
};

export const ReneeTucciCircle: FC<Props> = ({ size = 200 }) => (
  <ImageCircle src={ReneeTucciImage} alt="Renee Tucci" size={size} imagePositionX={50} />
);
