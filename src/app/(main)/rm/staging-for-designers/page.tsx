import type { Metadata } from 'next';
import Image from 'next/image';
import type { FC } from 'react';
import { OutlineSection } from '../../online-courses/staging-for-designers/_outlineSection';
import { OnlineCoursePageRM } from '../onlineCoursesRmPage';
import styles from '../page.module.scss';
import WhyQCImage from './why-qc.jpg';
import type { PageComponent } from '@/app/serverComponent';

export const metadata: Metadata = {
  title: 'Staging for Designers - QC Design School',
};

const testimonialIds = [ 'TD-0006', 'TD-0008', 'TD-0009', 'TD-0010', 'TD-0011', 'TD-0012' ];

const IntroSection: FC = () => (
  <section>
    <div className="container">
      <div className="row justify-content-center g-s">
        <div className="col-12 col-lg-6">
          <h2 className="mb-4">Staging for Desingers</h2>
          <p className="lead mb-4">This course can only be taken with QC's Interior Decorating Certification course. Want to start your career as a Home Stager? Consider our Home Staging Certification course.</p>
          <p>As a certified interior decorator, you already know all the ins and outs of working with clients to redesign their spaces. Now you can build on your existing design training by learning how to prepare homes for sale.</p>
          <p className="mb-0"><strong>The Staging for Designers course is a condensed version of the Home Staging course and allows trained interior decorators to upgrade their expertise and offer home staging services.</strong> Earn your designation as an International Staging and Redesign Professional in this streamlined course created specifically for interior decorators.</p>
        </div>
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <Image src={WhyQCImage} alt="" className={`img-fluid ${styles.whyQCImage}`} />
        </div>
      </div>
    </div>
  </section>
);

const StagingForDesignersPage: PageComponent = () => (
  <OnlineCoursePageRM
    testimonialIds={testimonialIds}
    OutlineSection={OutlineSection}
    IntroSection={IntroSection}
  />
);

export default StagingForDesignersPage;
