import type { FC } from 'react';

type Props = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const Banner: FC<Props> = ({ days, hours, minutes, seconds }) => (
  <div>{days} days, {hours} hours, {minutes} minutes, and {seconds} seconds remaining</div>
);
