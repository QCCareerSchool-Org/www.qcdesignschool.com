import type { Metadata } from 'next';
import Image from 'next/image';
import type { FC } from 'react';
import { OutlineSection } from '../../online-courses/accelerate-your-design-business/_outlineSection';
import { OnlineCoursePageRM } from '../onlineCoursesRmPage';
import styles from '../page.module.scss';
import WhyQCImage from './why-qc.jpg';
import type { PageComponent } from '@/app/serverComponent';

export const metadata: Metadata = {
  title: 'Accelerate Your Business - QC Design School',
};

const testimonialIds = [ 'TD-0006', 'TD-0008', 'TD-0009', 'TD-0010', 'TD-0011', 'TD-0012' ];

const IntroSection: FC = () => (
  <section>
    <div className="container">
      <div className="row justify-content-center g-5 align-items-center">
        <div className="col-12 col-lg-6">
          <h2 className="mb-4">Accelerate Your Design Business</h2>
          <p className="lead mb-4">QC's Accelerate Your Business training provides students with the most comprehensive training available to succeed in the home design industry.</p>
          <ul>
            <li>Made for design entrepreneurs&mdash;learn how to grow and expand your existing interior decorating and design business</li>
            <li>Personalized feedback and advice on your assignments from our top industry design experts</li>
            <li>Thriving virtual community to connect with other decorators, get feedback and gain exclusive access to bonus materials</li>
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

const AccelerateYourBusinessPage: PageComponent = () => (
  <OnlineCoursePageRM
    testimonialIds={testimonialIds}
    OutlineSection={OutlineSection}
    IntroSection={IntroSection}
  />
);

export default AccelerateYourBusinessPage;
