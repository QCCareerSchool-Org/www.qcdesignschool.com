import type { Metadata } from 'next';
import Image from 'next/image';

import HeroImage from './hero.jpg';
import styles from './page.module.scss';
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
  title: 'Virtual Design - QC Design School',
};

const testimonialIds = [ 'TD-0003', 'TD-0006', 'TD-0008', 'TD-0009', 'TD-0011', 'TD-0012' ];
const courseCodes: CourseCode[] = [ 'vd' ];

const VirtualDesignPage: PageComponent = () => (
  <div className={styles.page}>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="100% 0">
              <CourseType className="mb-2 mb-xl-4">Specialty Training</CourseType>
              <h1 className="mb-2 mb-xl-4">Virtual Design</h1>
              <p className="h5 mb-3 mb-xl-5">Expand Your Design Services Online</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Design School</h2>
            <p className="lead mb-4">QC's Virtual Design training prepares you with the skills you need to expand your clientele to reach a global audience. You'll modernize your business and impress clients with this training resource and certificate.</p>
            <ul>
              <li>Revolutionize and expand your business by offering virtual services to your design clients</li>
              <li>Join a thriving virtual community to connect with other decorators and gain exclusive access to bonus materials and expert-led webinars</li>
              <li>Leverage built-in business training and real-world templates to help you launch your design career and grow your clientele with online services</li>
              <li>Enjoy discounts and affiliations with top organizations including DesignFiles, Placez DesignFiles, and more</li>
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
            <p>QC's Virtual Design training will allow you to expand your business beyond your local area, and gain a whole new sustainable client base. In one comprehensive training unit, this course will show you how to:</p>
            <ul className="mb-0">
              <li>Reach clients across the globe, all from the comfort of your home office</li>
              <li>Transform your design process for the digital world and adapt your strategies and methods to thrive online</li>
              <li>Cater to every client's needs and offer a spectrum of online services, from quick consultations to comprehensive redesigns</li>
              <li>Discover the best online platforms to connect with your clients, provide unparalleled support, and build lasting relationships</li>
            </ul>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <Image src={WhatYoullLearnImage} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    <GoogleReviewSection courseCode="vd" />
    <VirtualCommunitySection />
    <PaymentPlanSection courseCodes={courseCodes} />
    <GetStartedSection
      title="Ready to expand your design services online?"
      text="Become professionally certified with QC's online virtual design training"
      courseCodes={courseCodes}
    />
  </div>
);

export default VirtualDesignPage;
