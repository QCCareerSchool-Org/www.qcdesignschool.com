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
  title: 'Feng Shui Design Course',
  description: "QC's Feng Shui Design certification teaches essential skills to launch a rewarding career in restoring harmony to clients' spaces.",
};

const testimonialIds = [ 'TD-0005', 'TD-0002', 'TD-0006', 'TD-0004', 'TD-0008', 'TD-0011' ];
const courseCodes: CourseCode[] = [ 'fs' ];

const FengShuiDesignPage: PageComponent = () => (
  <div className={styles.page}>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="100% 0">
              <CourseType className="mb-2 mb-xl-4">AFDP&trade; Certification</CourseType>
              <h1 className="mb-2 mb-xl-4">Feng Shui Design Course</h1>
              <p className="h5 mb-3 mb-xl-5">Become a Certified Feng Shui Designer</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Design School</h2>
            <p className="lead mb-4">QC's online Feng Shui Design certification course covers all the essential components you need to launch a rewarding career restoring harmony and balance to your clients' spaces. QC's expert-led curriculum prepares you for any project by delving into the core principles of Feng Shui design including energy flow, color harmony and spatial arrangement.</p>
            <ul>
              <li>Get started now—QC's premium Feng Shui Design course will take you from beginner to expert with no previous training required</li>
              <li>Receive personalized feedback and advice on your assignments from our top industry home design experts</li>
              <li>Join a thriving virtual community to connect with other design industry professionals and gain exclusive access to bonus material and expert-led webinars</li>
              <li>Leverage built-in business training and real-world templates to help you launch your career and grow your clientele as a certified feng shui professional</li>
              <li>Enjoy discounts and affiliations with top organizations including DesignFiles, Placez, and more</li>
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
            <p>QC's comprehensive Feng Shui Design course will show you how to:</p>
            <ul className="mb-0">
              <li>Design spaces and restore balance in your clients' lives using feng shui principles</li>
              <li>Master ch'i flow, the Five Elements, yin and yang energy and the bagua map</li>
              <li>Work with a variety of budget types, design requirements and different client personalities</li>
              <li>Use feng shui symbols and cleansing rituals to restore harmony in your clients' homes</li>
              <li>Build your brand and market your new feng shui design business</li>
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
    <GoogleReviewSection courseCode="fs" />
    <TutorSection className="bg-light" />
    <OutlineSection />
    <CareerEssentialsKitDesignFilesSection />
    <PaymentPlanSection courseCodes={courseCodes} />
    <GetStartedSection
      title="Ready to Start Your Career as a Feng Shui Designer?"
      text="Become professionally certified with QC's online feng shui design training."
      courseCodes={courseCodes}
    />
  </div>
);

export default FengShuiDesignPage;
