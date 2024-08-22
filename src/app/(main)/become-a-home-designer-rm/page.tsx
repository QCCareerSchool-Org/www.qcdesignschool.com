import type { Metadata } from 'next';
import Image from 'next/image';
import type { PageComponent } from '../../serverComponent';
import WhatYoullLearnImage from './images/what-youll-learn.jpg';
import styles from './page.module.scss';
import { GetStartedSection } from '@/components/getStartedSection';
import InfoSection from '@/components/infoSection';
import PerksSection from '@/components/perksSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';

export const metadata: Metadata = {
  title: 'Become a Home Designer - QC Design School',
};

const testimonialIds = [
  'TD-0001',
  'TD-0002',
  'TD-0003',
  'TD-0004',
  'TD-0005',
  'TD-0006',
];

const BecomeAHomeDesignerPage: PageComponent = () => {

  return (
    <div>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-7 d-flex flex-column justify-content-center mb-3">
              <h1>Become A Home Designer with Online Training</h1>
              <p className="lead">Start your dream career and become a Certified Design Professional with QC's professional courses. With QC's courses, you'll receive:</p>
              <ul>
                <li>Professional and industry-leading content</li>
                <li>Full business training to prepare you for a new career</li>
                <li>An international certification when you complete your course</li>
                <li>Digital learning materials</li>
                <li>Access to professional design associations to help network and further develop your skills.</li>
                <li>One-on-one mentoring throughout your course from a professional designer</li>
                <li>50% off all additional courses so you can continue mastering your skills</li>
              </ul>
            </div>
            <div className="col-10 col-sm-7 col-lg-5" style={{ margin: 'auto' }}>
              <div className={styles.imageContainer}>
                <Image src={WhatYoullLearnImage} alt="" className={styles.mainImage} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <InfoSection className={styles.backgroundColorGrey} />
      <TestimonialWallSection testimonialIds={testimonialIds} title="What our Students and Grads are Saying" />
      <PerksSection className={styles.backgroundColorGrey} />
      <GetStartedSection
        title="Ready to Start an Exciting New Career in Home Design?"
        text="Become Professionally Certified with QC's Online Design Training"
        buttonText="View Courses"
      />
    </div>
  );
};

export default BecomeAHomeDesignerPage;
