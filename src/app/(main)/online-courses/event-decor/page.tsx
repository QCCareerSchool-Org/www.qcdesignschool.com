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
  title: 'Event Decor Course',
  description: "QC's Event Decor Course has three comprehensive parts: event design, decor components, and building a career in the industry.",
};

const testimonialIds = [ 'TD-0006', 'TD-0008', 'TD-0009', 'TD-0010', 'TD-0011', 'TD-0012' ];
const courseCodes: CourseCode[] = [ 'ed' ];

const EventDecorPage: PageComponent = () => (
  <div className={styles.page}>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="100% 0">
              <CourseType className="mb-2 mb-xl-4">IEDP&trade; Certification</CourseType>
              <h1 className="mb-2 mb-xl-4">Event Decor Course</h1>
              <p className="h5 mb-3 mb-xl-5">Become a Certified Event Decorator</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Design School</h2>
            <p className="lead mb-4">In partnership with QC Event School, QC's Event Decor certification course provides the most comprehensive training available to prepare you for a thriving career designing unforgettable events. Dive into an extensive online curriculum that covers everything from developing a decor theme and color scheme to planning floral arrangements, fabric draping and working with vendors.</p>
            <ul>
              <li>Get started now—our premium Event Decor course is designed to take you from beginner to expert with no previous training required</li>
              <li>Receive personalized feedback and advice on your assignments from our top industry experts</li>
              <li>Join a thriving virtual community to connect with other industry professionals and gain exclusive access to bonus materials and expert-led webinars</li>
              <li>Leverage built-in business training and real-world templates to help you launch your design career and grow your clientele as a certified Event Decorator</li>
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
            <p>QC's comprehensive Event Decor course will show you how to:</p>
            <ul className="mb-0">
              <li>Use your design skills to create beautiful events that guests will remember forever</li>
              <li>Create the entire layout for an event including a cohesive theme, color schemes, and other design elements</li>
              <li>Work with a variety of budget types, design requirements and different client personalities</li>
              <li>Use color matching, trending themes and the latest event design styles to create a cohesive and modern look</li>
              <li>Build your brand and market your new event decor business</li>
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
    <GoogleReviewSection courseCode="ed" />
    <TutorSection className="bg-light" />
    <OutlineSection />
    <PaymentPlanSection courseCodes={courseCodes} />
    <GetStartedSection
      title="Ready to Start Your Event Decorating Career?"
      text="Become professionally certified with QC's online event decor training."
      courseCodes={courseCodes}
    />
  </div>
);

export default EventDecorPage;
