import type { Metadata } from 'next';
import Image from 'next/image';

import { OutlineSection } from './_outlineSection';
import CertificationBackgroundImage from './cert-bg.jpg';
import HeroImage from './hero.jpg';
import styles from './page.module.scss';
import WhatYoullLearnImage from './what-youll-learn.jpg';
import WhyQCImage from './why-qc.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { CandiceSection } from '@/components/candiceSection';
import { CareerEssentialsKitSection } from '@/components/careerEssentialsKitSection';
import CertificationLogo from '@/components/certificationLogos/iedp.svg';
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
  title: 'Event Decor Course',
};

const testimonialIds = [ 'DT-0001', 'DT-0001', 'DT-0001', 'DT-0001', 'DT-0001', 'DT-0001' ];
const courseCodes: CourseCode[] = [ 'ed' ];

const EventDecorPage: PageComponent = () => (
  <div className={styles.page}>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="100% 0">
              <CourseType className="mb-2 mb-xl-4">Specialty Course</CourseType>
              <h1 className="mb-2 mb-xl-4">Event Decor Course</h1>
              <p className="h5 mb-3 mb-xl-5">Become a Certified Event Decorator</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Design School</h2>
            <p className="lead mb-4">QC's Event Decor certification course provides students with the most comprehensive training available to succeed in the event decor industry.</p>
            <ul>
              <li>No previous training required&mdash;our premium Event Decor course is designed to take you from beginner to expert</li>
              <li>Personalized feedback and advice on your assignments from our top industry design & decorating experts</li>
              <li>Thriving virtual community to connect with other decorators, get feedback and gain exclusive access to bonus materials</li>
              <li>Built-in business training and real-world templates to help you launch your design career and grow your clientele as a certified Event Decorator</li>
              <li>Discounts and affiliations with top organizations including the American Society of Professional Organizers, Decorators & Designers Association of Canada, and more</li>
            </ul>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <Image src={WhyQCImage} alt="" className={`img-fluid ${styles.whyQCImage}`} />
          </div>
        </div>
      </div>
    </section>
    <TestimonialWallSection testimonialIds={testimonialIds} className="bg-light" />
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
    <section className="text-white text-shadow">
      <Image src={CertificationBackgroundImage} fill placeholder="blur" alt="" sizes="100vw" style={{ objectFit: 'cover' }} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-lg-8 col-xxl-6 text-center">
            <div>
              <CertificationLogo height="200" className="mb-3" alt="International Event Decorating Professional (IEDP) certification logo" />
            </div>
            <p className="mb-3 small gold">International Event Decorating Professional&trade; (IEDP&trade;)</p>
            <h2 className="text-white mb-3">QC's Event Decor Certification</h2>
            <p>Once you graduate from your online event planning course, you'll receive a certification and be able to use the designation of International Event Decorating Professional (IEDP).</p>
            <p className="mb-0">This certification demonstrates that you have successfully completed professional Event Decor training and that you possess all the skills and knowledge required to create beautiful and memorable events.</p>
          </div>
        </div>
      </div>
    </section>
    <VirtualCommunitySection />
    <TestimonialSection id="DT-0001" />
    <CandiceSection className="bg-light" />
    <OutlineSection />
    <CareerEssentialsKitSection />
    <PaymentPlanSection courseCodes={courseCodes} />
    <GetStartedSection
      title="Ready to start your event decorating career?"
      text="Become professionally certified with QC's online event decor training"
      courseCodes={courseCodes}
    />
  </div>
);

export default EventDecorPage;
