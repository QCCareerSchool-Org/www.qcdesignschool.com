import type { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';

import { OutlineSection } from './_outlineSection';
import { CertificationSection } from './certificationSection';
import HeroImage from './hero.jpg';
import styles from './page.module.scss';
import { TutorSection } from './tutorSection';
import WhatYoullLearnImage from './what-youll-learn.jpg';
import WhyQCImage from './why-qc.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { CareerEssentialsKitDesignFilesSection } from '@/components/careerEssentialsKitDesignFilesSection';
import { CourseSchema } from '@/components/courseSchema';
import { CourseType } from '@/components/courseType';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { Hero } from '@/components/hero';
import { HeroButtons } from '@/components/hero/heroButtons';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';

export const metadata: Metadata = {
  title: 'Staging for Designers Course',
  description: 'QC\'s Staging for Designers course is a condensed version of the Home Staging course, helping interior decorators upgrade their skills for staging services.',
  alternates: { canonical: '/online-courses/staging-for-designers' },
};

const testimonialIds = [ 'TD-0006', 'TD-0008', 'TD-0009', 'TD-0010', 'TD-0011', 'TD-0012' ];
const courseCodes: CourseCode[] = [ 'ms' ];

const StagingForDesignersPage: PageComponent = () => (
  <div className={styles.page}>
    <Suspense><CourseSchema courseCode={courseCodes[0]} /></Suspense>
    <section className="half-padding-top">
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="100% 0">
              <CourseType className="mb-2 mb-xl-4">ISRP&trade; Certification</CourseType>
              <h1 className="mb-2 mb-xl-4">Staging for Designers Course</h1>
              <p className="h5 mb-3 mb-xl-5">Elevate Your Home Design Expertise</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Get Certified as a Home Stager Quickly</h2>
            <p className="lead mb-4">This course can only be taken with QC's Interior Decorating Certification course. Want to start your career as a home stager? Consider our Home Staging Certification course.</p>
            <p>As a certified interior decorator, you already know all the ins and outs of working with clients to redesign their spaces. Now you can build on your existing design training by learning how to prepare homes for sale.</p>
            <p className="mb-0"><strong>The Staging for Designers course is a condensed version of the Home Staging course and allows trained interior decorators to upgrade their expertise and offer home staging services.</strong> Earn your designation as an International Staging and Redesign Professional in this streamlined course created specifically for interior decorators.</p>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <Image src={WhyQCImage} alt="" className={`img-fluid ${styles.whyQCImage}`} />
          </div>
        </div>
      </div>
    </section>
    <TestimonialWallSection testimonialIds={testimonialIds} courseCodes={courseCodes} className="bg-light" />
    <section>
      <div className="container">
        <div className="row align-items-center justify-content-center g-s">
          <div className="col-12 col-lg-6">
            <h2>Here's What You'll Learn</h2>
            <p>QC's comprehensive Staging for Designers course will show you how to:</p>
            <ul className="mb-0">
              <li>Design homes to attract buyers and sell at the best price</li>
              <li>Declutter and enhance curb appeal for memorable first impressions</li>
              <li>Assess and depersonalize clients' homes, redesigning and improving curb appeal</li>
              <li>Collaborate with real estate agents to grow your business</li>
              <li>Conduct market research to sell home staging services and boost profitability</li>
              <li>Build and market your home staging brand</li>
              <li>Develop a professional portfolio to attract new clients</li>
              <li>Bonus! Learn how to use professional design software with step-by-step video tutorials featuring <i>DesignFiles</i></li>
            </ul>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <Image src={WhatYoullLearnImage} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    <CertificationSection />
    <VirtualCommunitySection />
    <GoogleReviewSection courseCode="st" />
    <TutorSection className="bg-light" />
    <OutlineSection />
    <CareerEssentialsKitDesignFilesSection />
    <PaymentPlanSection courseCodes={courseCodes} />
    <GetStartedSection
      title="Ready to Add Home Staging to Your Design Expertise?"
      text="Become professionally certified with QC's online Staging for Designers training."
      courseCodes={courseCodes}
    />
  </div>
);

export default StagingForDesignersPage;
