import type { Metadata } from 'next';
import Image from 'next/image';

import { OutlineSection } from '../../online-courses/interior-decorating/_outlineSection';
import { CertificationSection } from '../../online-courses/interior-decorating/certificationSection';
import { TutorSection } from '../../online-courses/interior-decorating/tutorSection';
import WhyQCImage from '../../online-courses/interior-decorating/what-youll-learn.jpg';
import styles from '../index.module.scss';
import type { PageComponent } from '@/app/serverComponent';
import { CareerEssentialsKitSection } from '@/components/careerEssentialsKitSection';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { GuaranteeSection } from '@/components/guaranteeSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';

export const metadata: Metadata = {
  title: 'Interior Decorating Course - QC Design School',
};

const testimonialIds = [ 'TD-0006', 'TD-0008', 'TD-0009', 'TD-0010', 'TD-0011', 'TD-0012' ];
const courseCodes = [ 'i2' ];

const InteriorDecoratingPage: PageComponent = () => (
  <>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12 col-lg-6">
            <h1 className="h2 mb-4">Enter the World of Interior Decorating</h1>
            <p className="lead">Learn online and become an Internationally Certified Interior Decorator with QC's professional courses.</p>
            <p>With QC's courses, you'll receive:</p>
            <ul className="mb-0">
              <li>Professional and industry-leading content</li>
              <li>An International Design & Decorating Professional™ (IDDP™) certificate when you graduate</li>
              <li>Full business training complete with custom templates to prepare you for a new career</li>
              <li>Interactive digital lessons and detailed instructional videos with industry experts</li>
              <li>One-on-one mentoring from a professional designer throughout your course</li>
              <li>Support and guidance from QC's dedicated team of student advisors, available 7 days a week</li>
              <li>50% off all additional courses so you can continue mastering your skills</li>
            </ul>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <Image src={WhyQCImage} alt="" className={`img-fluid ${styles.whyQCImage}`} />
          </div>
        </div>
      </div>
    </section>
    <GetStartedSection title="Ready to start your home design & decorating career?" buttonText="Enroll Now" />
    <TestimonialWallSection testimonialIds={testimonialIds} className="bg-light" />
    <CertificationSection />
    <VirtualCommunitySection />
    <TutorSection className="bg-light" />
    <OutlineSection />
    <CareerEssentialsKitSection />
    <GoogleReviewSection courseCode="i2" />
    <GuaranteeSection className="bg-light" />
    <GetStartedSection
      title="Ready to start your home design & decorating career?"
      text="Become professionally certified with QC's online interior decorating training"
      courseCodes={courseCodes}
    />
  </>
);

export default InteriorDecoratingPage;
