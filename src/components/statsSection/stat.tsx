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
}

export const Stat: FC<Props> = ({ value, heading, description, suffix, duration = 2000 }) => {
  const [ start, ref ] = useIntersectionObserver(true);

  const count = useCountUp({ start: 0, end: value, duration, started: start, easingFunction: 'easeOutCubic' });
  return (
    <div ref={ref}>
      <div className={`h6 mb-0 ${styles.count}`}>{count}{suffix}</div>
      <h3 className="h6">{heading}</h3>
      <small>{description}</small>
    </div>
  );
};
