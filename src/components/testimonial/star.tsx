import type { FC } from 'react';

import styles from './star.module.css';
import StarIcon from '../icons/star-icon.svg';

interface Props {
  filled?: boolean;
}

export const Star: FC<Props> = ({ filled }) => (
  <span className={`${styles.star} ${filled ? styles.filled : ''}`}><StarIcon /></span>
);
