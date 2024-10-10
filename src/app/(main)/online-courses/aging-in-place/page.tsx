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
import { CareerEssentialsKitDesignFilesSection } from '@/components/careerEssentialsKitDesignFilesSection';
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
  title: 'Aging in Place Course',
};

const testimonialIds = [ 'TD-0002', 'TD-0005', 'TD-0003', 'TD-0004', 'TD-0006', 'TD-0011' ];
const courseCodes: CourseCode[] = [ 'ap' ];

const AgingInPlacePage: PageComponent = () => (
  <div className={styles.page}>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="100% 0">
              <CourseType className="mb-2 mb-xl-4">APDP&trade; Certification</CourseType>
              <h1 className="mb-2 mb-xl-4">Aging in Place Course</h1>
              <p className="h5 mb-3 mb-xl-5">Expand Your Home Design Career</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Design School</h2>
            <p className="lead mb-4">With QC's Aging in Place certification course, you'll gain the expertise you need to create safe, stylish and functional living spaces for aging clients. QC's comprehensive online curriculum covers everything from accessible design principles to developing personalized design solutions for your clients. You'll graduate with the skills and expert knowledge you need to stand out in the home design industry.</p>
            <ul>
              <li>Build on your existing design knowledge by expanding your skills and set yourself apart in the design industry</li>
              <li>Receive personalized feedback and advice on your assignments from our top design &amp; decorating experts</li>
              <li>Join a thriving virtual community to connect with other design professionals and gain exclusive access to bonus materials and expert-led webinars</li>
              <li>Leverage built-in business training and real-world templates to help you launch your design career and grow your clientele with aging in place services</li>
              <li>Enjoy discounts and affiliations with top organizations including DesignFiles, Placez, SampleBoard, and more</li>
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
            <p>QC's comprehensive Aging In Place course will show you how to:</p>
            <ul className="mb-0">
              <li>Design a home or living space that's safe and convenient for any client with aging concerns</li>
              <li>Understand common physiological changes, medical conditions, and lifestyle changes people experience as they age</li>
              <li>Work with a variety of budget types, design requirements and different client personalities</li>
              <li>Incorporate decluttering and home transition services into your home design business</li>
              <li>Build your brand and market your new aging in place services</li>
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
    <GoogleReviewSection courseCode="ap" />
    <TutorSection className="bg-light" />
    <VirtualCommunitySection />
    <OutlineSection />
    <CareerEssentialsKitDesignFilesSection />
    <PaymentPlanSection courseCodes={courseCodes} />
    <GetStartedSection
      title="Ready to Expand Your Home Design & Decorating Career?"
      text="Become professionally certified with QC's online Aging in Place training."
      courseCodes={courseCodes}
    />
  </div>
);

export default AgingInPlacePage;
