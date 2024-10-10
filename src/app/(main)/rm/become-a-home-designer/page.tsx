import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { InfoSection } from './infoSection';
import WhatYoullLearnImage from './what-youll-learn.jpg';
import type { PageComponent } from '../../../serverComponent';
import { StatsSection } from '../../statsSection';
import { GetStartedSection } from '@/components/getStartedSection';
import { PerksSection } from '@/components/perksSection';
import { SupportSection } from '@/components/supportSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import type { CourseCode } from '@/domain/courseCode';

export const metadata: Metadata = {
  title: 'Become a Home Designer',
};

const testimonialIds = [ 'TD-0001', 'TD-0002', 'TD-0003', 'TD-0004', 'TD-0005', 'TD-0006' ];
const courseCodes: CourseCode[] = [ 'st' ];

const BecomeAHomeDesignerPage: PageComponent = () => (
  <div>
    <section>
      <div className="container">
        <div className="row align-items-center justify-content-center g-5 g-lg-s">
          <div className="col-12 col-lg-6">
            <h1 className="h2 mb-4">Become a Home Designer with Online Training</h1>
            <p className="lead">Start your dream career and become an internationally certified design professional with QC's comprehensive training courses.</p>
            <p>With QC's courses, you'll receive:</p>
            <ul className="mb-4">
              <li>Professional and industry-leading content</li>
              <li>Full business training complete with custom templates to prepare you for a new career</li>
              <li>An international certification when you complete your course</li>
              <li>Interactive digital lessons and detailed instructional videos with industry experts</li>
              <li>Access to professional design associations to help you network and further develop your skills</li>
              <li>One-on-one mentoring from a professional designer throughout your course</li>
              <li>Support and guidance from QC's dedicated team of student advisors, available 7 days a week</li>
              <li>50% off all additional courses so you can continue mastering your skills</li>
            </ul>
            <Link href={`https://enroll.qcdesignschool.com?${courseCodes.map(c => `c=${encodeURIComponent(c)}`).join('&')}`} className="btn btn-primary btn-large">Enroll Now</Link>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <Image src={WhatYoullLearnImage} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    <StatsSection />
    <InfoSection className="bg-light" />
    <TestimonialWallSection testimonialIds={testimonialIds} />
    <SupportSection showLink />
    <PerksSection className="bg-light" />
    <GetStartedSection
      title="Ready to Start an Exciting New Career in Home Design?"
      text="Become Professionally Certified with QC's Online Design Training"
      buttonText="View Courses"
      buttonHref="/online-courses"
      courseCodes={courseCodes}
    />
  </div>
);

export default BecomeAHomeDesignerPage;
