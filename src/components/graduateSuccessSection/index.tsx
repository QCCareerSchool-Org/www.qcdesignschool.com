import type { FC, PropsWithChildren } from 'react';

import type { GradKey } from './data';
import { grads } from './data';
import { GraduateCard } from './graduateCard';
import { getDesignRestricted } from '@/lib/restrictions';

interface Props {
  gradKeys: GradKey[];
  countryCode: string;
  provinceCode: string | null;
  className?: string;
}

export const GraduateSuccessSection: FC<PropsWithChildren<Props>> = ({ gradKeys, countryCode, provinceCode, className, children }) => {
  const designRestricted = getDesignRestricted(countryCode, provinceCode);
  return (
    <section className={className}>
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-lg-10 col-xl-8">
            <h2>Real-World Success from QC Graduates</h2>
            <p className="mb-0">Whether you're pivoting careers, expanding services, or launching a business, our graduates prove that QC's IDDP™ credential and business tools are the fastest path to a thriving interior {designRestricted ? 'decorating' : 'design'} career.</p>
          </div>
        </div>
        <h3 className="h5 mb-3">Meet Some of Our Graduates:</h3>
        <div className="row justify-content-center g-4 g-xl-5">
          {gradKeys.map(t => (
            <div key={t} className="col-12 col-lg-6 d-flex">
              <GraduateCard grad={grads[t]} />
            </div>
          ))}
        </div>
      </div>
      {children}
    </section>
  );
};
