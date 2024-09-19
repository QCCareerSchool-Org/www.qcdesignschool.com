import type { Metadata } from 'next';
import Image from 'next/image';

import { OutlineSection } from './_outlineSection';
import { CertificationSection } from './certificationSection';
import HeroImage from './hero.jpg';
import styles from './page.module.scss';
import { TutorSection } from './tutorSection';
import WhatYoullLearnImage from './what-youll-learn.jpg';
import WhyQCImage from './why-qc.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { CareerEssentialsKitSection } from '@/components/careerEssentialsKitSection';
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
  title: 'Interior Decorating Course - QC Design School',
};

const testimonialIds = [ 'TD-0006', 'TD-0008', 'TD-0009', 'TD-0010', 'TD-0011', 'TD-0012' ];
const courseCodes: CourseCode[] = [ 'i2' ];

const InteriorDecoratingPage: PageComponent = () => (
  <div className={styles.page}>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="100% 0">
              <CourseType className="mb-2 mb-xl-4">IDDP&trade; Certification</CourseType>
              <h1 className="mb-2 mb-xl-4">Interior Decorating Course</h1>
              <p className="h5 mb-3 mb-xl-5">Become a Certified Interior Decorator</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Design School</h2>
            <p className="lead mb-4">QC's online Interior Decorating certification course provides the most comprehensive training available to ensure your success in the home design industry. You'll master everything from color theory and space planning to client communication and design execution so that you're fully equipped to thrive in this dynamic field. </p>
            <ul>
              <li>Get started now—our premium interior decorating course is designed to take you from beginner to expert with no previous training required</li>
              <li>Receive personalized feedback and advice on your assignments from our top industry design experts</li>
              <li>Join a thriving virtual community to connect with other decoratorsand gain exclusive access to bonus materials and expert-led webinars</li>
              <li>Leverage built-in business training and real-world templates to help you launch your design career and grow your clientele as a certified interior decorator</li>
              <li>Enjoy discounts and affiliations with top organizations including DesignFiles, Decorators & Designers Association of Canada, Placez and more</li>
            </ul>
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
            <p>QC's comprehensive Interior Decorating course will show you how to:</p>
            <ul className="mb-0">
              <li>Develop a unique vision and create custom interiors from the ground up</li>
              <li>Prepare designs involving floor plans, wall treatments, furniture placement and more</li>
              <li>Work with a variety of budget types, design requirements and different client personalities</li>
              <li>Master the nuances of color theory to create stunning designs for clients</li>
              <li>Feel confident using various design styles including Southwestern and Art Deco</li>
              <li>Build your brand and market your new home design & decorating business</li>
              <li>Plan and develop a professional portfolio that helps you land new clients</li>
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
    <GoogleReviewSection courseCode="i2" />
    <TutorSection className="bg-light" />
    <OutlineSection />
    <CareerEssentialsKitSection />
    <PaymentPlanSection courseCodes={courseCodes} />
    <GetStartedSection
      title="Ready to start your home design & decorating career?"
      text="Become professionally certified with QC's online interior decorating training"
      courseCodes={courseCodes}
    />
  </div>
);

export default InteriorDecoratingPage;
