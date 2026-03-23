'use client';

import { useIntersectionObserver } from '@davewelsh79/use-intersection-observer';
import type { FC } from 'react';
import { useCountUp } from 'react-use-count-up';

interface Props {
  value: number;
}

const duration = 2_000; // 2 seconds

// const formatter = (n: number) => n.toString()

export const CountUp: FC<Props> = ({ value }) => {
  const [ intersected, ref ] = useIntersectionObserver();

  const displayValue = useCountUp({ start: 0, end: value, duration, easingFunction: 'easeOutCubic', started: intersected });

  return <span ref={ref}>{displayValue}</span>;
};
