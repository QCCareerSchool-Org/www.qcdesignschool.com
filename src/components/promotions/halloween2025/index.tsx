import Image from 'next/image';
import type { FC } from 'react';

import HeroImage from './why-wait.jpg';

export const Halloween2025: FC = () => {
  return (
    <section>
      <div className="container text-center">
        <div className="row justify-content-center mt-2">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7">
            <h2>Your Bonus Awaits!</h2>
            <p className="mb-4">As a special thank you for joining the QC Design School community, you can get a FREE specialty course when you enroll in a design course today.</p>
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
