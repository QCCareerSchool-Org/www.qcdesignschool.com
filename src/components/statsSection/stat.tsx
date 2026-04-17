'use client';

import { useIntersectionObserver } from '@davewelsh79/use-intersection-observer';
import type { FC } from 'react';
import { useCountUp } from 'react-use-count-up';

import styles from './stat.module.scss';

export interface Props {
  value: number;
  heading: string;
  description: string;
  suffix?: string;
  duration?: number;
  inverse?: boolean;
}

export const Stat: FC<Props> = ({ value, heading, description, suffix, duration = 2000, inverse }) => {
  const [ start, ref ] = useIntersectionObserver(true);

  const count = useCountUp({ start: 0, end: value, duration, started: start, easingFunction: 'easeOutCubic' });
  return (
    <div ref={ref}>
      <div className={styles.count}>{count}{suffix}</div>
      <h3 className="h6">{heading}</h3>
      <small className={`${styles.description} ${inverse ? styles.inverse : ''}`}>{description}</small>
    </div>
  );
};
