import type { Metadata } from 'next';
import Image from 'next/image';
import type { FC } from 'react';
import { OutlineSection } from '../../online-courses/aging-in-place/_outlineSection';
import WhyQCImage from '../../online-courses/aging-in-place/what-youll-learn.jpg';
import { OnlineCoursePageRM } from '../onlineCoursesRmPage';
import styles from '../page.module.scss';
import type { PageComponent } from '@/app/serverComponent';

export const metadata: Metadata = {
  title: 'Aging in Place Course - QC Design School',
};

const testimonialIds = [ 'TD-0002', 'TD-0005', 'TD-0003', 'TD-0004', 'TD-0006', 'TD-0011' ];

const IntroSection: FC = () => (
  <section>
    <div className="container">
      <div className="row justify-content-center g-s">
        <div className="col-12 col-lg-6">
          <h2 className="mb-4">Aging in Place</h2>
          <p className="lead mb-4">QC's Aging in Place certification course provides students with the most comprehensive training available to expand your services in the home design industry.</p>
          <ul>
            <li>With QC's Aging in Place course, you'll use build on your existing design knowledge to create safe, functional and beautiful spaces for any client with aging concerns</li>
            <li>Personalized feedback and advice on your assignments from our top design industry design experts</li>
            <li>Thriving virtual community to connect with other decorators, get feedback and gain exclusive access to bonus materials</li>
            <li>Built-in business training and real-world templates to help you launch your design career and expand your clientele with aging in place services</li>
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

const AgingInPlacePage: PageComponent = () => (
  <OnlineCoursePageRM
    testimonialIds={testimonialIds}
    OutlineSection={OutlineSection}
    IntroSection={IntroSection}
  />
);

export default AgingInPlacePage;
