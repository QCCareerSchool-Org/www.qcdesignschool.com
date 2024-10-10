import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { OutlineSection } from '../../online-courses/color-consultant/_outlineSection';
import { CertificationSection } from '../../online-courses/color-consultant/certificationSection';
import { TutorSection } from '../../online-courses/color-consultant/tutorSection';
import WhyQCImage from '../../online-courses/color-consultant/what-youll-learn.jpg';
import { StatsSection } from '../../statsSection';
import styles from '../index.module.scss';
import type { PageComponent } from '@/app/serverComponent';
import { CareerEssentialsKitCanvaSection } from '@/components/careerEssentialsKitCanvaSection';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { GuaranteeSection } from '@/components/guaranteeSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';

export const metadata: Metadata = {
  title: 'Color Consultant Course',
};

const testimonialIds = [ 'TD-0003', 'TD-0005', 'TD-0002', 'TD-0004', 'TD-0006', 'TD-0011' ];
const courseCodes: CourseCode[] = [ 'cc' ];

const ColorConsultantPage: PageComponent = () => (
  <>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Start Your Design Career as a Color Consultant</h2>
            <p className="lead mb-4">Learn online and become an Internationally Certified Color Consultant with QC's professional course. With QC's Color Consultant Course, you'll receive:</p>
            <ul className="mb-4">
              <li>Professional and industry-leading content</li>
              <li>An International Color Consulting Professional™ (ICCP™) certificate when you graduate</li>
              <li>Full business training complete with custom templates to prepare you for a new career</li>
              <li>Interactive digital lessons and detailed instructional videos with industry experts</li>
              <li>One-on-one mentoring from a professional color consultant throughout your course</li>
              <li>Support and guidance from QC's expert team of student advisors, available 7 days a week</li>
              <li>50% off all additional courses so you can continue mastering your skills</li>
            </ul>
            <Link href={`https://enroll.qcdesignschool.com?${courseCodes.map(c => `c=${encodeURIComponent(c)}`).join('&')}`} className="btn btn-primary btn-large">Enroll Now</Link>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <Image src={WhyQCImage} alt="" className={`img-fluid ${styles.whyQCImage}`} />
          </div>
        </div>
      </div>
    </section>
    <StatsSection />
    <TestimonialWallSection testimonialIds={testimonialIds} className="bg-light" />
    <CertificationSection />
    <VirtualCommunitySection />
    <TutorSection className="bg-light" />
    <OutlineSection />
    <CareerEssentialsKitCanvaSection />
    <GoogleReviewSection courseCode="cc" />
    <GuaranteeSection className="bg-light" />
    <GetStartedSection
      title="Ready to start your career as a color consultant?"
      text="Become professionally certified with QC's online Color Consultant training"
      courseCodes={courseCodes}
    />
  </>
);

export default ColorConsultantPage;
