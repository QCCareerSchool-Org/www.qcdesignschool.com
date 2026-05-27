import Image from 'next/image';
import type { FC } from 'react';
import { BiBookHeart } from 'react-icons/bi';

import HeroImageBookDesktop from './background-2.jpg';
import HeroImageBookMobile from './background-mobile.jpg';
import { BackgroundImage } from '../backgroundImage';

export const BookSection: FC = () => (
  <section className="text-white" style={{ backgroundColor: '#191514' }}>
    <div className="d-none d-lg-block"><BackgroundImage priority src={HeroImageBookDesktop} objectPosition="37.5% 25%" /></div>
    <div className="container">
      <div className="row g-5 g-lg-s justify-content-center justify-content-lg-end">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 d-lg-none">
          <Image src={HeroImageBookMobile} className="img-fluid rounded-3" alt="" />
        </div>
        <div className="col-12 col-lg-6">
          <h2 className="text-white">Course Textbooks Included</h2>
          <p className="lead mb-4"><i>with your enrollment</i></p>
          <p>Enroll in the Interior Design Course Accelerator today and receive QC's exclusive physical textbooks as a complimentary bonus.</p>
          <p><i>Take your studying offline with premium course materials shipped straight to your door.</i></p>
          <a className="btn btn-lg text-white" href="https://enroll.qcdesignschool.com" style={{ backgroundColor: '#c19e76' }}><BiBookHeart size={20} style={{ position: 'relative', top: -1 }} /> Enroll Now & Claim Your Books</a>
        </div>
      </div>
    </div>
  </section>
);
