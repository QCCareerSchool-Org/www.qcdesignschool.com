import type { Metadata } from 'next';
import Image from 'next/image';

import { InfoSection } from './infoSection';
import WhatYoullLearnImage from './what-youll-learn.jpg';
import type { PageComponent } from '../../../serverComponent';
import { GetStartedSection } from '@/components/getStartedSection';
import { PerksSection } from '@/components/perksSection';
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

const BecomeAHomeDesignerPage: PageComponent = () => (
  <div>
    <section>
      <div className="container">
        <div className="row align-items-center justify-content-center g-5 g-lg-s">
          <div className="col-12 col-lg-6">
            <h1 className="h2 mb-4">Become a Home Designer with Online Training</h1>
            <p className="lead">Start your dream career and become an Internationally Certified design professional with QC's professional courses.</p>
            <p>With QC's courses, you'll receive:</p>
            <ul className="mb-0">
              <li>Professional and industry-leading content</li>
              <li>Full business training complete with custom templates to prepare you for a new career</li>
              <li>An international certification when you complete your course</li>
              <li>Interactive digital lessons and detailed instructional videos with industry experts</li>
              <li>Access to professional design associations to help you network and further develop your skills</li>
              <li>One-on-one mentoring from a professional designer throughout your course</li>
              <li>Support and guidance from QC's dedicated team of student advisors, available 7 days a week</li>
              <li>50% off all additional courses so you can continue mastering your skills</li>
            </ul>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <Image src={WhatYoullLearnImage} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    <GetStartedSection
      title="Ready to Start your career in Home Design?"
      buttonText="Enroll Now"
    />
    <InfoSection className="bg-light" />
    <TestimonialWallSection testimonialIds={testimonialIds} />
    <PerksSection className="bg-light" />
    <GetStartedSection
      title="Ready to Start an Exciting New Career in Home Design?"
      text="Become Professionally Certified with QC's Online Design Training"
      buttonText="View Courses"
      buttonHref="/online-courses"
    />
  </div>
);

export default BecomeAHomeDesignerPage;
