'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';

import { Banner } from './banner';
import { getParts } from './getParts';

type Props = {
  date: number;
};

const startDate = Date.UTC(2024, 10, 13, 17, 43); // November 13, 2024 at 12:30 (17:30 UTC)
const endDate = Date.UTC(2024, 10, 20, 5); // November 20, 2024 at 00:00 (05:00 UTC)

export const CountDownTimer: FC<Props> = ({ date }) => {
  const [ currentDate, setCurrentDate ] = useState(date);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentDate(d => d + 1000);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  if (currentDate >= startDate && currentDate < endDate) {
    const [ days, hours, minutes, seconds ] = getParts(currentDate - endDate);
    return <Banner days={days} hours={hours} minutes={minutes} seconds={seconds} />;
  }
};
