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
  title: 'Floral Design Course - QC Design School',
};

const testimonialIds = [ 'TD-0002', 'TD-0003', 'TD-0004', 'TD-0006', 'TD-0011', 'TD-0012' ];
const courseCodes: CourseCode[] = [ 'fd' ];

const FloralDesignPage: PageComponent = () => (
  <div className={styles.page}>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="100% 0">
              <CourseType className="mb-2 mb-xl-4">IFDP&trade; Certification</CourseType>
              <h1 className="mb-2 mb-xl-4">Floral Design Course</h1>
              <p className="h5 mb-3 mb-xl-5">Become a Certified Floral Designer</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Design School</h2>
            <p className="lead mb-4">QC's online Floral Design certification course provides an extensive curriculum that details everything from fundamental design principles to advanced techniques in decorative arrangements, bouquet designs, and more. This program is your key to mastering the art of floral design and launching a successful career in this thriving sector of the design industry.</p>
            <ul>
              <li>Get started now—our premium Floral Design course is designed to take you from beginner to expert with no previous training required</li>
              <li>Receive personalized feedback and advice on your assignments from our top industry experts</li>
              <li>Join a thriving virtual community to connect with other industry professionals and gain exclusive access to bonus materials</li>
              <li>Leverage built-in business training and real-world templates to help you launch your career and grow your clientele as a certified Floral Designer</li>
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
            <p>QC's comprehensive Floral Design course will show you how to:</p>
            <ul className="mb-0">
              <li>Perfect your flower selection, placement and methods to create polished designs</li>
              <li>Identify and prepare the most common types of flowers to design arrangements clients love</li>
              <li>Work with a variety of budget types, design requirements and different client personalities</li>
              <li>Master plant care and anatomy to ensure you can create long-lasting designs</li>
              <li>Build your brand and market your new floral design business</li>
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
    <GoogleReviewSection courseCode="fd" />
    <TutorSection className="bg-light" />
    <OutlineSection />
    <PaymentPlanSection courseCodes={courseCodes} />
    <GetStartedSection
      title="Ready to Start Your Floral Design Career?"
      text="Become professionally certified with QC's online floral design training"
      courseCodes={courseCodes}
    />
  </div>
);

export default FloralDesignPage;
