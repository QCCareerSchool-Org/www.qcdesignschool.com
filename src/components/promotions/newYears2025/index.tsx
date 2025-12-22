import Image from 'next/image';
import type { FC } from 'react';

import HeroImage from './landing-thank-you.jpg';

export const NewYears2025: FC = () => {
  return (
    <section className="bg-light">
      <div className="container text-center">
        <div className="row justify-content-center mt-2">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7">
            <h2>Limited Time Offer</h2>
            <p className="mb-4"><strong>Start the new year by investing in your future.</strong> For a limited time, enroll in any design course and get a second course FREE&mdash;so you can double your expertise! Start today and become a certified design expert in under 3 months.</p>
            <div className="mb-4">
              <a href="https://enroll.qcdesignschool.com"><Image src={HeroImage} alt="" className="img-fluid" /></a>
            </div>
            <a href="https://enroll.qcdesignschool.com"><button className="btn btn-primary btn-lg">Claim Your Free Course</button></a>
          </div>
        </div>
      </div>
    </section>
  );
};
