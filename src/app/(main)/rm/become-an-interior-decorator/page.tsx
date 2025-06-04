import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { OutlineSection } from '../../online-courses/interior-decorating/_outlineSection';
import { CertificationSection } from '../../online-courses/interior-decorating/certificationSection';
import { TutorSection } from '../../online-courses/interior-decorating/tutorSection';
import WhyQCImage from '../../online-courses/interior-decorating/what-youll-learn.jpg';
import { StatsSection } from '../../statsSection';
import styles from '../index.module.scss';
import type { PageComponent } from '@/app/serverComponent';
import { CareerEssentialsKitDesignFilesSection } from '@/components/careerEssentialsKitDesignFilesSection';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { GuaranteeSection } from '@/components/guaranteeSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import { getData } from '@/lib/getData';
import { getDesignRestricted } from '@/lib/restrictions';

export const metadata: Metadata = {
  title: 'Interior Decorating Course',
  description: 'Become an internationally certified Interior Decorator with QC\'s online course, featuring mentoring, business training, and a starter kit!',
};

const testimonialIds = [ 'TD-0006', 'TD-0008', 'TD-0009', 'TD-0010', 'TD-0011', 'TD-0012' ];
const courseCodes = [ 'i2' ];

const InteriorDecoratingPage: PageComponent = () => {
  const { countryCode, provinceCode } = getData();

  const designRestricted = getDesignRestricted(countryCode, provinceCode);

  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center g-s">
            <div className="col-12 col-lg-6">
              <h1 className="h2 mb-4">Enter the World of Interior Decorating</h1>
              <p className="lead">Learn online and become an Internationally Certified Interior Decorator with QC's professional courses.</p>
              <p>With QC's courses, you'll receive:</p>
              <ul className="mb-4">
                <li>Professional and industry-leading content</li>
                <li>An International Design & Decorating Professional™ (IDDP™) certificate when you graduate</li>
                <li>Full business training complete with custom templates to prepare you for a new career</li>
                <li>Interactive digital lessons and detailed instructional videos with industry experts</li>
                <li>One-on-one mentoring from a professional designer throughout your course</li>
                <li>Support and guidance from QC's dedicated team of student advisors, available 7 days a week</li>
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
      <OutlineSection designRestricted={designRestricted} />
      <CareerEssentialsKitDesignFilesSection />
      <GoogleReviewSection courseCode="i2" />
      <GuaranteeSection className="bg-light" />
      <GetStartedSection
        title="Ready to start your home design & decorating career?"
        text="Become professionally certified with QC's online interior decorating training"
        courseCodes={courseCodes}
      />
    </>
  );
};

export default InteriorDecoratingPage;
