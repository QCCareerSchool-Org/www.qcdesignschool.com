import type { Metadata } from 'next';
import Image from 'next/image';
import type { PageComponent } from '../../serverComponent';
import { CourseOutlineSection } from './courseOutlineSection';
import WhatYoullLearnImage from './images/what-youll-learn.jpg';
import styles from './page.module.scss';
import { CareerEssentialsKitSection } from '@/components/careerEssentialsKitSection';
import { CertificationSection } from '@/components/certificationSection';
import { GetStartedSection } from '@/components/getStartedSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';

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
              <h1>Launch Your Career in Home Staging</h1>
              <p className="lead">Learn online and become a Certified Home Stager with QC's professional courses. With QC's Home Staging Course, you'll receive:</p>
              <ul>
                <li>Professional and industry-leading content</li>
                <li>An International Staging and Redesign Professional (ISRP™) double certification</li>
                <li>Full business training to prepare you for a new career</li>
                <li>14 full-color home staging and redesign lesson books, and 3 bonus online texts</li>
                <li>A professional starter kit which includes a set of watercolor paints, a furniture template, a scale ruler, a paintbrush, and more!</li>
                <li>One-on-one mentoring throughout your course</li>
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
      <TestimonialWallSection testimonialIds={testimonialIds} title="What our Students and Grads are Saying" className={styles.backgroundColorGrey} />
      <CertificationSection />
      <VirtualCommunitySection
        text="We're here to inspire, inform, and innovate your educational journey. Discover the vibrant heart of our Virtual Community, where students and graduates connect to mentor, share insights, and grow together. Tap into free webinars for deep dives into design and industry secrets, and join lively chats for discussions that range from studies to career paths."
        callToAction="Join us in shaping the future of design innovation."
      />
      <CourseOutlineSection />
      <CareerEssentialsKitSection />
      {/* <PaymentPlanSection /> */}
      <GetStartedSection
        title="Ready To Start Your Interior Design and Decorating Career?"
        text="Become Professionally Certified with QC's Online Design and Decorating Course"
      />
    </div>
  );
};

export default BecomeAHomeDesignerPage;
