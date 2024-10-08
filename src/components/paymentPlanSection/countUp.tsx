'use client';

import { type FC, useRef } from 'react';
import { useCountUp } from 'react-use-count-up';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

type Props = {
  value: number;
};

const duration = 3000;

const intl = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });

const formatter = (n: number): string => intl.format(n);

export const CountUp: FC<Props> = ({ value }) => {
  const ref = useRef<HTMLElement>(null);
  const intersected = useIntersectionObserver(ref);

  const displayValue = useCountUp({ start: 0, end: value, duration, formatter, easingFunction: 'easeOutQuad', started: intersected });

  return <span ref={ref}>{displayValue}</span>;
};
