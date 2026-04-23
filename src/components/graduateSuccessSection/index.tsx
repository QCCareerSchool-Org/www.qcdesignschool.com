import type { FC, PropsWithChildren } from 'react';

import type { GradKey } from './data';
import { grads } from './data';
import { GraduateCard } from './graduateCard';

interface Props {
  gradKeys: GradKey[];
  className?: string;
}

export const GraduateSuccessSection: FC<PropsWithChildren<Props>> = ({ gradKeys, className, children }) => {
  return (
    <section className={className}>
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-lg-10 col-xl-8">
            <h2>Real-World Success from QC Graduates</h2>
            <p className="text-muted mb-0">Whether you're pivoting careers, expanding services, or launching a business, our graduates prove that QC's IDDP™ credential and business tools are the fastest path to a thriving interior design career.</p>          </div>
        </div>
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
