import type { FC } from 'react';
import { BiBookHeart } from 'react-icons/bi';

import HeroImageBookDesktop from './background-2.jpg';
import HeroImageBookMobile from './background-mobile.jpg';
import { BackgroundImage } from '../backgroundImage';

export const BookSection: FC = () => (
  <section>
    <BackgroundImage priority src={HeroImageBookDesktop} objectPosition="37.5% 25%" mobile={{ src: HeroImageBookMobile, breakpoint: 'lg', objectPosition: '50% 87.5%' }} />
    <div className="row text-white position-relative z-1 p-5">
      <div className="col-6" />
      <div className="col-3">
        <h2 className="text-white">Course</h2>
        <h2 className="text-white">Textbooks Included</h2>
        <h5 className="mb-3 fw-light text-white"><i>with your enrollment</i></h5>
        <p>Enroll in the Interior Design Course Accelerator today and receive QC's exclusive physical textbooks as a complimentary bonus.</p>
        <p><i>Take your studying offline with premium course materials shipped straight to your door. </i></p>
        <a className="btn text-white" href="https://enroll.qcdesignschool.com/" style={{ backgroundColor: '#c19e76' }}><BiBookHeart /> Enroll Now & Claim Your Books</a>
      </div>
    </div>
  </section>
);
