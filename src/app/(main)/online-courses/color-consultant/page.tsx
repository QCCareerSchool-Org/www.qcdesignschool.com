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
import { CareerEssentialsKitCanvaSection } from '@/components/careerEssentialsKitCanvaSection';
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
  title: 'Color Consultant Course',
  description: 'QC Design School\'s Color Consultant Course teaches the theoretical and practical skills you need in order to design custom interiors. Find out more!',
  alternates: { canonical: '/online-courses/color-consultant' },
};

const testimonialIds = [ 'TD-0003', 'TD-0005', 'TD-0002', 'TD-0004', 'TD-0006', 'TD-0011' ];
const courseCodes: CourseCode[] = [ 'cc' ];

const ColorConsultantPage: PageComponent = () => (
  <div className={styles.page}>
    <section className="half-padding-top">
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="100% 0">
              <CourseType className="mb-2 mb-xl-4">ICCP&trade; Certification</CourseType>
              <h1 className="mb-2 mb-xl-4">Color Consultant Course</h1>
              <p className="h5 mb-3 mb-xl-5">Become a Certified Color Consultant</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Design School</h2>
            <p className="lead mb-4">QC's Color Consultant certification course offers an unparalleled online curriculum to equip you with the practical skills and expert knowledge you need to excel in the home design industry. You'll delve into the psychology of color and study advanced topics in color theory and design so that you're ready to wow every client.</p>
            <ul>
              <li>Get started now—our premium Color Consultant course is designed to take you from beginner to expert with no previous training required</li>
              <li>Receive personalized feedback and advice on your assignments from our top design & decorating experts</li>
              <li>Join a thriving virtual community to connect with other design-industry professionals and gain exclusive access to bonus materials and expert-led webinars</li>
              <li>Leverage built-in business training and real-world templates to help you launch your design career and grow your clientele as a certified Color Consultant</li>
              <li>Enjoy discounts and affiliations with top organizations including the Inter-Society Color Council (SCC), DesignFiles, SampleBoard, and more</li>
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
            <p>QC's comprehensive Color Consultant course will show you how to:</p>
            <ul className="mb-0">
              <li>Master the theoretical and practical skills you need to design custom interiors</li>
              <li>Confidently consult on color topics including how lighting and undertones affect color choices, how to work with open-concept spaces, and more</li>
              <li>Work with a variety of budget types, design requirements, and different client personalities</li>
              <li>Understand designing with textiles, arranging accessories, and building a strong relationship between art and design</li>
              <li>Build your brand and market your new Color Consulting business</li>
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
    <GoogleReviewSection courseCode="cc" />
    <TutorSection className="bg-light" />
    <OutlineSection />
    <CareerEssentialsKitCanvaSection />
    <PaymentPlanSection courseCodes={courseCodes} />
    <GetStartedSection
      title="Ready to Start Your Career as a Color Consultant?"
      text="Become professionally certified with QC's online Color Consultant training."
      courseCodes={courseCodes}
    />
  </div>
);

export default ColorConsultantPage;
