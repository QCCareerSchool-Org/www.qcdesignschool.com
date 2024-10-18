import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { OutlineSection } from '../../online-courses/professional-organizing/_outlineSection';
import { CertificationSection } from '../../online-courses/professional-organizing/certificationSection';
import { TutorSection } from '../../online-courses/professional-organizing/tutorSection';
import WhyQCImage from '../../online-courses/professional-organizing/what-youll-learn.jpg';
import { StatsSection } from '../../statsSection';
import styles from '../index.module.scss';
import type { PageComponent } from '@/app/serverComponent';
import { CareerEssentialsKitDesignFilesSection } from '@/components/careerEssentialsKitDesignFilesSection';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { GuaranteeSection } from '@/components/guaranteeSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import type { CourseCode } from '@/domain/courseCode';

export const metadata: Metadata = {
  title: 'Professional Organizing Course',
  description: 'Become a Certified Professional Organizer with QC’s online course, featuring an AIOP™ certificate, business training, mentoring, and 50% off additional courses!',
};

const testimonialIds = [ 'TD-0002', 'TD-0012', 'TD-0011', 'TD-0009', 'TD-0004', 'TD-0003' ];
const courseCodes: CourseCode[] = [ 'po' ];

const ProfessionalOrganizingPage: PageComponent = () => (
  <>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Start Your Career in Professional Organizing</h2>
            <p className="lead mb-4">Learn online and become an Internationally Certified Professional Organizer with QC's comprehensive training courses. With QC's Professional Organizing Course, you'll receive:</p>
            <ul className="mb-4">
              <li>Professional and industry-leading content</li>
              <li>An Advanced International Organizing Professional™ (AIOP™) certificate when you graduate</li>
              <li>Full business training complete with custom templates to prepare you for a new career</li>
              <li>Interactive digital lessons and detailed instructional videos with industry experts</li>
              <li>One-on-one mentoring from a professional organizer throughout your course</li>
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
    <TutorSection className="bg-light" />
    <OutlineSection />
    <CareerEssentialsKitDesignFilesSection />
    <GoogleReviewSection courseCode="po" />
    <GuaranteeSection className="bg-light" />
    <GetStartedSection
      title="Ready to start your career in professional organizing?"
      text="Become professionally certified with QC's online professional organizing training"
      courseCodes={courseCodes}
    />
  </>
);

export default ProfessionalOrganizingPage;
