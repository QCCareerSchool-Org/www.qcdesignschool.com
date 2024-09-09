import type { Metadata } from 'next';
import Image from 'next/image';

import { OutlineSection } from '../../online-courses/home-staging/_outlineSection';
import { CertificationSection } from '../../online-courses/home-staging/certificationSection';
import { TutorSection } from '../../online-courses/home-staging/tutorSection';
import WhyQCImage from '../../online-courses/home-staging/what-youll-learn.jpg';
import styles from '../index.module.scss';
import type { PageComponent } from '@/app/serverComponent';
import { CareerEssentialsKitSection } from '@/components/careerEssentialsKitSection';
import { GetStartedSection } from '@/components/getStartedSection';
import { GuaranteeSection } from '@/components/guaranteeSection';
import { TestimonialSection } from '@/components/testimonialSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';

export const metadata: Metadata = {
  title: 'Become a Home Designer - QC Design School',
};

const testimonialIds = [ 'TD-0001', 'TD-0002', 'TD-0003', 'TD-0004', 'TD-0005', 'TD-0006' ];
const courseCodes: CourseCode[] = [ 'st' ];

const BecomeAHomeDesignerPage: PageComponent = () => (
  <>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Launch Your Career in Home Staging</h2>
            <p className="lead mb-4">Learn online and become a Certified Home Stager with QC's professional courses. With QC's Home Staging Course, you'll receive:</p>
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
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <Image src={WhyQCImage} alt="" className={`img-fluid ${styles.whyQCImage}`} />
          </div>
        </div>
      </div>
    </section>
    <TestimonialWallSection testimonialIds={testimonialIds} className="bg-light" />
    <CertificationSection />
    <VirtualCommunitySection />
    <TutorSection className="bg-light" />
    <OutlineSection />
    <CareerEssentialsKitSection />
    <TestimonialSection id="TD-0001" />
    <GuaranteeSection className="bg-light" />
    <GetStartedSection
      title="Ready to start your career as a home stager?"
      text="Become professionally certified with QC's online home staging training"
      courseCodes={courseCodes}
    />
  </>
);

export default BecomeAHomeDesignerPage;
