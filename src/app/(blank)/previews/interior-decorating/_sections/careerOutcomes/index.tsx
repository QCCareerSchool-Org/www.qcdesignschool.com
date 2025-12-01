import Link from 'next/link';
import type { FC } from 'react';

import { Calculator } from './calculator';

interface Props {
  designRestricted: boolean;
}

export const CareerOutcomes: FC<Props> = ({ designRestricted }) => (
  <section id="career-outcomes" className="bg-light">
    <div className="container text-center">
      <p className="lead mb-3">Career Outcomes</p>
      <h2 className="mb-3">Build a Career with Real Earning Power</h2>
      <p className="">With the global home decor market surging to <strong>$751 billion*</strong> in 2024 and set to exceed $1 trillion by 2032, demand for skilled interior {designRestricted ? 'decorators' : 'designers'} has never been higher. Now is the perfect time to transform your creativity into a successful and fulfilling design career!</p>
      <p className="small mb-5">* https://www.fortunebusinessinsights.com/home-decor-market-109906</p>
      <div className="row justify-content-center mb-5">
        <div className="col-12 col-md-8 col-lg-10 col-xl-8">
          <Calculator />
        </div>
      </div>
      <p className="mb-4">QC Design School's Interior {designRestricted ? 'Decorating' : 'Design'} program allows you to tailor your learning to fit your busy schedule, so you can master essential skills at your own pace. Graduate in as little as 2 to 6 months and start booking clients right away!</p>
      <Link href="https://enroll.qcdesignschool.com"><button className="btn btn-lg btn-primary">Start Your Career</button></Link>
    </div>
  </section>
);
