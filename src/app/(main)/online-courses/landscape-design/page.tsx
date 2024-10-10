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
  title: 'Landscape Design Course',
};

const testimonialIds = [ 'TD-0002', 'TD-0003', 'TD-0004', 'TD-0006', 'TD-0011', 'TD-0012' ];
const courseCodes: CourseCode[] = [ 'ld' ];

const LandscapeDesignPage: PageComponent = () => (
  <div className={styles.page}>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="100% 0">
              <CourseType className="mb-2 mb-xl-4">ILDP&trade; Certification</CourseType>
              <h1 className="mb-2 mb-xl-4">Landscape Design Course</h1>
              <p className="h5 mb-3 mb-xl-5">Become a Certified Landscape Designer</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Design School</h2>
            <p className="lead mb-4">QC's Landscape Design certification course provides comprehensive online training to set you up for success in the thriving landscape design industry. QC's immersive curriculum details everything from plant selection and garden design to outdoor rooms, site plans and working with contractors to ensure you're fully prepared to design breathtaking landscapes from start to finish.</p>
            <ul>
              <li>Get started now—our premium Landscape Design course is designed to take you from beginner to expert with no previous training required</li>
              <li>Receive personalized feedback and advice on your assignments from our top landscape industry experts</li>
              <li>Join a thriving virtual community to connect with other design industry professionals and gain exclusive access to bonus material</li>
              <li>Access video tutorials and custom lessons covering drafting skills and digital design plans to master client communications</li>
              <li>Leverage built-in business training and real-world templates to help you launch your career and grow your clientele as a certified landscape designer</li>
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
            <p>QC's comprehensive Landscape Design course will show you how to:</p>
            <ul className="mb-0">
              <li>Conduct an initial consultation and site visit that instills confidence in your clients</li>
              <li>Confidently plan both the hardscape and softscape of a landscape site</li>
              <li>Work with a variety of budget types, design requirements, and different client personalities</li>
              <li>Understand plant classifications, physiology and crucial information about growing conditions</li>
              <li>Develop high-quality, professional drawings that wow your clients</li>
              <li>Build your brand and market your new landscape design business</li>
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
    <GoogleReviewSection courseCode="ld" />
    <TutorSection className="bg-light" />
    <OutlineSection />
    <CareerEssentialsKitCanvaSection />
    <PaymentPlanSection courseCodes={courseCodes} />
    <GetStartedSection
      title="Ready to Start Your Career in Landscape Design?"
      text="Become professionally certified with QC's online landscape design training"
      courseCodes={courseCodes}
    />
  </div>
);

export default LandscapeDesignPage;
