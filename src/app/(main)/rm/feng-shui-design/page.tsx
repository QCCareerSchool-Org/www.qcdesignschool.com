import type { Metadata } from 'next';
import Image from 'next/image';

import type { FC } from 'react';
import { OutlineSection } from '../../online-courses/feng-shui-design/_outlineSection';
import { OnlineCoursePageRM } from '../onlineCoursesRmPage';
import styles from '../page.module.scss';
import WhyQCImage from './why-qc.jpg';
import type { PageComponent } from '@/app/serverComponent';

export const metadata: Metadata = {
  title: 'Feng Shui Design Course - QC Design School',
};

const testimonialIds = [ 'TD-0005', 'TD-0002', 'TD-0006', 'TD-0004', 'TD-0008', 'TD-0011' ];

const IntroSection: FC = () => (
  <section>
    <div className="container">
      <div className="row justify-content-center g-s">
        <div className="col-12 col-lg-6">
          <h2 className="mb-4">Feng Shui Design</h2>
          <p className="lead mb-4">QC's Feng Shui Design certification course provides students with the most comprehensive training available to succeed in the home design industry.</p>
          <ul>
            <li>No previous training required&mdash;our premium Feng Shui Design course is designed to take you from beginner to expert</li>
            <li>Personalized feedback and advice on your assignments from our top industry home design experts</li>
            <li>Thriving virtual community to connect with other home designers, get feedback and gain exclusive access to bonus material</li>
            <li>Built-in business training and real-world templates to help you launch your career and grow your clientele as a certified feng shui professional</li>
            <li>Discounts and affiliations with top organizations including the American Society of Professional Organizers, Decorators & Designers Association of Canada and more</li>
          </ul>
        </div>
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <Image src={WhyQCImage} alt="" className={`img-fluid ${styles.whyQCImage}`} />
        </div>
      </div>
    </div>
  </section>
);

const FengShuiDesignPage: PageComponent = () => (
  <OnlineCoursePageRM
    testimonialIds={testimonialIds}
    OutlineSection={OutlineSection}
    IntroSection={IntroSection}
  />
);

export default FengShuiDesignPage;
