import type { Metadata } from 'next';
import Image from 'next/image';
import type { FC } from 'react';
import WhyQCImage from '../../online-courses/virtual-design/what-youll-learn.jpg';
import { OnlineCoursePageRM } from '../onlineCoursesRmPage';
import styles from '../page.module.scss';
import type { PageComponent } from '@/app/serverComponent';

export const metadata: Metadata = {
  title: 'Virtual Design - QC Design School',
};

const testimonialIds = [ 'TD-0003', 'TD-0006', 'TD-0008', 'TD-0009', 'TD-0011', 'TD-0012' ];

const IntroSection: FC = () => (

  <section>
    <div className="container">
      <div className="row justify-content-center g-s">
        <div className="col-12 col-lg-6">
          <h2 className="mb-4">Launch Your Career in Virtual Design</h2>
          <p className="lead mb-4">QC's Virtual Design training provides students with the most comprehensive training available to help them expand their home design business.</p>
          <ul>
            <li>Revolutionize and expand your business by offering virtual services to your design clients</li>
            <li>Personalized feedback and advice on your assignments from our top industry design experts</li>
            <li>Thriving virtual community to connect with other decorators, get feedback and gain exclusive access to bonus materials</li>
            <li>Built-in business training and real-world templates to help you launch your design career and grow your clientele as a certified interior decorator</li>
            <li>Discounts and affiliations with top organizations including the American Society of Professional Organizers, Decorators & Designers Association of Canada, and more</li>
          </ul>
        </div>
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <Image src={WhyQCImage} alt="" className={`img-fluid ${styles.whyQCImage}`} />
        </div>
      </div>
    </div>
  </section>
);

const VirtualDesignPage: PageComponent = () => (
  <OnlineCoursePageRM
    testimonialIds={testimonialIds}
    OutlineSection={() => <></>}
    IntroSection={IntroSection}
  />
);

export default VirtualDesignPage;
