import type { Metadata } from 'next';
import Image from 'next/image';
import type { FC } from 'react';
import { OutlineSection } from '../../online-courses/floral-design/_outlineSection';
import { OnlineCoursePageRM } from '../onlineCoursesRmPage';
import styles from '../page.module.scss';
import WhyQCImage from './why-qc.jpg';
import type { PageComponent } from '@/app/serverComponent';

export const metadata: Metadata = {
  title: 'Floral Design Course - QC Design School',
};

const testimonialIds = [ 'TD-0002', 'TD-0003', 'TD-0004', 'TD-0006', 'TD-0011', 'TD-0012' ];

const IntroSection: FC = () => (
  <section>
    <div className="container">
      <div className="row justify-content-center g-s">
        <div className="col-12 col-lg-6">
          <h2 className="mb-4">Launch Your Career in Floral Design</h2>
          <p className="lead mb-4">QC's Floral Design certification course provides students with the most comprehensive training available to succeed in the design industry.</p>
          <ul>
            <li>No previous training required&mdash;our premium Floral Design course is designed to help you launch your career in the floral design industry</li>
            <li>Personalized feedback and advice on your assignments from our top design industry & floral experts</li>
            <li>Thriving virtual community to connect with other designers, get feedback, and gain exclusive access to bonus materials</li>
            <li>Built-in business training and real-world templates to help you launch your design career and grow your clientele as a certified Floral Designer</li>
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

const FloralDesignPage: PageComponent = () => (
  <OnlineCoursePageRM
    testimonialIds={testimonialIds}
    OutlineSection={OutlineSection}
    IntroSection={IntroSection}
  />
);

export default FloralDesignPage;
