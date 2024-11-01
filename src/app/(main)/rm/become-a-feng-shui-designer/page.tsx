import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { OutlineSection } from '../../online-courses/feng-shui-design/_outlineSection';
import { CertificationSection } from '../../online-courses/feng-shui-design/certificationSection';
import { TutorSection } from '../../online-courses/feng-shui-design/tutorSection';
import WhyQCImage from '../../online-courses/feng-shui-design/what-youll-learn.jpg';
import { StatsSection } from '../../statsSection';
import styles from '../index.module.scss';
import type { PageComponent } from '@/app/serverComponent';
import { CareerEssentialsKitDesignFilesSection } from '@/components/careerEssentialsKitDesignFilesSection';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { GuaranteeSection } from '@/components/guaranteeSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';

export const metadata: Metadata = {
  title: 'Feng Shui Design Course',
  description: 'Become a Feng Shui Professional with QC\'s online course, featuring an AFDP™ certification, business training, mentoring, and 50% off additional courses!',
};

const testimonialIds = [ 'TD-0005', 'TD-0002', 'TD-0006', 'TD-0004', 'TD-0008', 'TD-0011' ];
const courseCodes: CourseCode[] = [ 'fs' ];

const FengShuiDesignPage: PageComponent = () => (
  <>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12 col-lg-6">
            <h1 className="h2 mb-4">Enter the World of Feng Shui Design</h1>
            <p className="lead mb-4">Learn online and become an Internationally Certified Feng Shui Professional with QC's comprehensive course.</p>
            <ul className="mb-4">
              <li>Learn online and become an Internationally Certified Feng Shui Professional with QC's comprehensive course.</li>
              <li>An Advanced Feng Shui Design Professionall™ (ASDP™) certificate when you graduate</li>
              <li>Full business training complete with custom templates to prepare you for a new career</li>
              <li>Interactive digital lessons and detailed instructional videos with industry experts</li>
              <li>One-on-one mentoring from a feng shui professional throughout your course</li>
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
    <CareerEssentialsKitDesignFilesSection />
    <GoogleReviewSection courseCode="fs" />
    <GuaranteeSection className="bg-light" />
    <GetStartedSection
      title="Ready to start your career as a feng shui designer?"
      text="Become professionally certified with QC's online feng shui design training"
      courseCodes={courseCodes}
    />
  </>
);

export default FengShuiDesignPage;
