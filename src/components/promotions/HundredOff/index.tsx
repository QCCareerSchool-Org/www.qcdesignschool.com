import Image from 'next/image';
import type { FC } from 'react';

import HeroImageUK from './desktop-uk.jpg';
import HeroImageDefault from './desktop.jpg';
import { gbpCountry } from '@/lib/currencies';

interface Props {
  countryCode: string;
}

export const HundredOff: FC<Props> = ({ countryCode }) => {
  const heroImageSrc = gbpCountry(countryCode) ? HeroImageUK : HeroImageDefault;

  return (
    <section className="bg-light">
      <div className="container text-center">
        <div className="row justify-content-center mt-2">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7">
            <h2>Limited Time Offer</h2>
            <p className="mb-4">Start the new year by investing in your future. For a limited time, enroll in any design course and <strong>get a second course FREE, plus {gbpCountry(countryCode) ? '£100' : '$100'} OFF your tuition</strong>&mdash;so you can double your expertise! Start today and become a certified design expert in under 3 months.</p>
            <div className="mb-4">
              <a href="https://enroll.qcdesignschool.com"><Image src={heroImageSrc} alt="" className="img-fluid" /></a>
            </div>
            <a href="https://enroll.qcdesignschool.com"><button className="btn btn-primary btn-lg">Claim Your Free Course</button></a>
          </div>
        </div>
      </div>
    </section>
  );
};
