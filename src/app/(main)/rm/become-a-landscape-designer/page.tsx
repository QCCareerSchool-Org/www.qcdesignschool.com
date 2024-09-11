import type { Metadata } from 'next';
import Image from 'next/image';

import { OutlineSection } from '../../online-courses/landscape-design/_outlineSection';
import { CertificationSection } from '../../online-courses/landscape-design/certificationSection';
import { TutorSection } from '../../online-courses/landscape-design/tutorSection';
import WhyQCImage from '../../online-courses/landscape-design/what-youll-learn.jpg';
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

const testimonialIds = [ 'TD-0002', 'TD-0003', 'TD-0004', 'TD-0006', 'TD-0011', 'TD-0012' ];
const courseCodes: CourseCode[] = [ 'ld' ];

const BecomeALandscapeDesignerPage: PageComponent = () => (
  <>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Launch Your Career in Landscape Design</h2>
            <p className="lead mb-4">Learn online and become a Certified Landscape Designer with QC's professional courses. With QC's Landscape Design course, you'll receive:</p>
            <ul>
              <li>Professional and industry-leading content</li>
              <li>An International Landscape Design Professional (ILDP™) certification</li>
              <li>Full business training to prepare you for a new career</li>
              <li>X full-color home staging and redesign lesson books, and Y bonus online texts</li>
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
      title="Ready to start your home design & decorating career?"
      text="Become professionally certified with QC's online interior decorating training"
      courseCodes={courseCodes}
    />
  </>
);

export default BecomeALandscapeDesignerPage;
