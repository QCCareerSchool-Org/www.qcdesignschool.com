import type { FC } from 'react';

import type { Tier } from '.';

type Props = {
  projectCount: number;
  projectFee: number;
  tier: Tier;
};

const formatter = new Intl.NumberFormat('en-US');

export const Result: FC<Props> = ({ projectCount, projectFee, tier }) => {
  const result = projectCount * projectFee * (tier === 'standard' ? 1 : 1.25);
  const annual = Math.round(result);
  const monthly = Math.round(result / 12);
  return (
    <div className="card bg-light text-center">
      <div className="card-body">
        <h3 className="h6 mb-3">Your Potential Net Income</h3>
        <p className="mb-0">Potential Annual Income</p>
        <p className="display-5 fw-bold text-primary" style={{ fontSize: '2rem' }}>${formatter.format(annual)} / yr</p>
        <p className="mb-0">Potential Monthly Income</p>
        <p className="display-5 fw-bold text-primary" style={{ fontSize: '2rem' }}>${formatter.format(monthly)} / month</p>
      </div>
    </div>
  );
};
