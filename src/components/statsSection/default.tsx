import type { FC } from 'react';

import { StatsSection } from '.';
import DefaultBackgroundImage from './default-background.jpg';
import type { Props as StatProps } from './stat';

export const DefaultStatsSection: FC = () => {
  return (
    <StatsSection backgroundImage={DefaultBackgroundImage} className="inverse" stats={stats} />
  );
};

const stats: [StatProps, StatProps, StatProps ] = [
  {
    value: 45,
    suffix: 'K',
    heading: 'Students & Graduates',
    description: 'Inspiring the Next Generation of Professionals',
  },
  {
    value: 40,
    heading: 'Years in Business',
    description: 'Pioneering Education Since 1984',
  },
  {
    value: 20,
    heading: 'Industry Experts',
    description: 'Providing Insights for Real-World Success',
  },
];
