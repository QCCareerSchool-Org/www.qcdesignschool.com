import Image from 'next/image';
import type { FC } from 'react';
import { BiBookHeart } from 'react-icons/bi';

import HeroImageBookDesktop from './background-2.jpg';
import HeroImageBookMobile from './background-mobile.jpg';
import { BackgroundImage } from '../backgroundImage';

export const BookSection: FC = () => (
  <section className="pb-0 pb-md-s text-white" style={{ backgroundColor: '#161111' }} id="tuition">
    <div className="d-none d-md-block"><BackgroundImage priority src={HeroImageBookDesktop} objectPosition="37.5% 25%" /></div>
    <div className="container">
      <div className="row g-5 g-md-s justify-content-center justify-content-md-end">
        <div className="col-12 col-md-6">
          <h2 className="text-white">Course Textbooks Included</h2>
          <p className="lead mb-4"><i>with your enrollment</i></p>
          <p>Enroll in the Interior Design Course Accelerator today and receive QC's exclusive physical textbooks as a complimentary bonus.</p>
          <p className="mb-4"><i>Take your studying offline with premium course materials shipped straight to your door.</i></p>
          <a className="btn btn-lg text-white" href="https://enroll.qcdesignschool.com" style={{ backgroundColor: '#c19e76' }}><BiBookHeart size={20} style={{ position: 'relative', top: -1 }} /> Enroll Now<span className="d-md-none d-lg-inline"> & Claim Your Books</span></a>
        </div>
      </div>
    </div>
    <div className="d-md-none">
      <Image src={HeroImageBookMobile} className="img-fluid w-100" alt="" />
    </div>
  </section>
);
