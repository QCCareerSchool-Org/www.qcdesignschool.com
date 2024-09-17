import type { Metadata } from 'next';
import Image from 'next/image';

import { OutlineSection } from './_outlineSection';
import HeroImage from './hero.jpg';
import styles from './page.module.scss';
import WhatYoullLearnImage from './what-youll-learn.jpg';
import WhyQCImage from './why-qc.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { CareerEssentialsKitSection } from '@/components/careerEssentialsKitSection';
import { CourseType } from '@/components/courseType';
import { GetStartedSection } from '@/components/getStartedSection';
import { Hero } from '@/components/hero';
import { HeroButtons } from '@/components/hero/heroButtons';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import { TestimonialSection } from '@/components/testimonialSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';

export const metadata: Metadata = {
  title: 'Accelerate Your Business - QC Design School',
};

const testimonialIds = [ 'TD-0006', 'TD-0008', 'TD-0009', 'TD-0010', 'TD-0011', 'TD-0012' ];
const courseCodes: CourseCode[] = [ 'eb' ];

const AccelerateYourBusinessPage: PageComponent = () => (
  <div className={styles.page}>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="100% 0">
              <CourseType className="mb-2 mb-xl-4">Specialty Training</CourseType>
              <h1 className="mb-2 mb-xl-4">Accelerate Your Business</h1>
              <p className="h5 mb-3 mb-xl-5">Take Your Design Business to the Next Level</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Design School</h2>
            <p className="lead mb-4">QC's Accelerate Your Business online training provides you with the tools and expertise you need to take your design business to the next level. You'll study advanced marketing techniques and business strategies including search engine optimization, website development and client acquisition so that you're ready to build a scale a thriving business.</p>
            <ul>
              <li>Learn how to grow and expand your existing interior decorating and design business - perfect for design entrepreneurs</li>
              <li>Recieve personalized feedback and advice on your assignments from our top industry design experts</li>
              <li>Join a thriving virtual community to connect with other design professionals and gain exclusive access to bonus materials and expert-led webinars</li>
              <li>Leverage built-in business training and real-world templates to help you launch your design career and grow your clientele</li>
              <li>Enjoy discounts and affiliations with top organizations including DesignFiles, the Decorators & Designers Association of Canada, Placez and more</li>
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
            <p>QC's Accelerate Your Business training will show you how to:</p>
            <ul className="mb-0">
              <li>Build your customer personas and create a brand that speaks to potential clients</li>
              <li>Critique and improve your online presence and communication</li>
              <li>Work with a variety of budget types, design requirements and different client personalities</li>
              <li>Build your brand and market yourself effectively both online and offline</li>
              <li>Master effective project and time management techniques</li>
              <li>Plan and develop a professional design portfolio that helps you land new clients and stand out from the competition</li>
            </ul>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <Image src={WhatYoullLearnImage} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    <OutlineSection className="bg-light" />
    <VirtualCommunitySection />
    <TestimonialSection id="TD-0001" />
    <CareerEssentialsKitSection />
    <PaymentPlanSection courseCodes={courseCodes} />
    <GetStartedSection
      title="Ready to expand your home design & decorating business?"
      text="Take QC's Accelerate Your Business training"
      courseCodes={courseCodes}
    />
  </div>
);

export default AccelerateYourBusinessPage;
