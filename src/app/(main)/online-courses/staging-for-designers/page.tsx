import type { Metadata } from 'next';
import Image from 'next/image';

import { OutlineSection } from './_outlineSection';
import CertificationBackgroundImage from './cert-bg.jpg';
import HeroImage from './hero.jpg';
import styles from './page.module.scss';
import WhatYoullLearnImage from './what-youll-learn.jpg';
import WhyQCImage from './why-qc.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { CareerEssentialsKitSection } from '@/components/careerEssentialsKitSection';
import CertificationLogo from '@/components/certificationLogos/isrp.svg';
import { CourseType } from '@/components/courseType';
import { GetStartedSection } from '@/components/getStartedSection';
import { Hero } from '@/components/hero';
import { HeroButtons } from '@/components/hero/heroButtons';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import { TestimonialSection } from '@/components/testimonialSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { AngieChapmanCircle } from '@/components/tutors/angieChapman';
import { JaneLockhartCircle } from '@/components/tutors/janeLockhart';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';

export const metadata: Metadata = {
  title: 'Staging for Designers - QC Design School',
};

const testimonialIds = [ 'TD-0006', 'TD-0008', 'TD-0009', 'TD-0010', 'TD-0011', 'TD-0012' ];
const courseCodes: CourseCode[] = [ 'ms' ];

const StagingForDesignersPage: PageComponent = () => (
  <div className={styles.page}>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="100% 0">
              <CourseType className="mb-2 mb-xl-4">ISRP&trade; Certification</CourseType>
              <h1 className="mb-2 mb-xl-4">Staging for Designers Course</h1>
              <p className="h5 mb-3 mb-xl-5">Elevate Your Home Design Expertise</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Get Certified as a Home Stager Quickly</h2>
            <p className="lead mb-4">This course can only be taken with QC's Interior Decorating Certification course. Want to start your career as a Home Stager? Consider our Home Staging Certification course.</p>
            <p>As a certified interior decorator, you already know all the ins and outs of working with clients to redesign their spaces. Now you can build on your existing design training by learning how to prepare homes for sale.</p>
            <p className="mb-0"><strong>The Staging for Designers course is a condensed version of the Home Staging course and allows trained interior decorators to upgrade their expertise and offer home staging services.</strong> Earn your designation as an International Staging and Redesign Professional in this streamlined course created specifically for interior decorators.</p>
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
            <p>QC's comprehensive Staging for Designers course will show you how to:</p>
            <ul className="mb-0">
              <li>Design homes to attract buyers and sell at the best price</li>
              <li>Declutter and enhance curb appeal for memorable first impressions</li>
              <li>Assess and depersonalize clients' homes, redesigning and improving curb appeal</li>
              <li>Collaborate with real estate agents to grow your business</li>
              <li>Conduct market research to sell home staging services and boost profitability</li>
              <li>Build and market your home staging brand</li>
              <li>Develop a professional portfolio to attract new clients</li>
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
              <CertificationLogo height="200" className="mb-3" alt="International Staging and Redesign Professional (ISRP) certification logo" />
            </div>
            <p className="mb-3 small gold">International Staging and Redesign Professional&trade; (ISRP&trade;)</p>
            <h2 className="text-white mb-3">Your Home Staging Certification</h2>
            <p>Once you graduate from QC's Staging for Designers course, you'll receive the unique International Staging and Redesign Professional (ISRP) double certification.</p>
            <p className="mb-0">This certificate of completion demonstrates that you possess the home staging training needed to succeed in the real estate and redesign industries.</p>
          </div>
        </div>
      </div>
    </section>
    <VirtualCommunitySection />
    <TestimonialSection id="TD-0001" />
    <section className="bg-light">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-md-10 col-lg-7">
            <h2>Meet Your Home Staging Experts</h2>
            <p className="lead mb-0">QC is proud to work with leaders of the global design industry to develop our courses. Our international team of instructors bring diverse experience and skills to aspiring designers around the globe.</p>
          </div>
        </div>
        <div className="row g-5 g-lg-s">
          <div className="col-12 col-lg-6">
            <div className="mb-3"><JaneLockhartCircle /></div>
            <h3 className="h4">Jane Lockhart</h3>
            <p className="mb-0">Many recognize Jane from her show, Color Confidential, on HGTV and W Network. She is also the best-selling author of two books and frequently lends her design expertise to Canadian television shows including The Marilyn Denis Show and Cityline.</p>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mb-3"><AngieChapmanCircle /></div>
            <h3 className="h4">Angie Chapman</h3>
            <p className="mb-0">Award-winning interior design consultant and founder of Angie Chapman Interiors, Angie is a driving force in the design world. With over 10 years of experience in the industry, she has honed her skills and expertise to become an sought-after designer.</p>
          </div>
        </div>
      </div>
    </section>
    <OutlineSection />
    <CareerEssentialsKitSection />
    <PaymentPlanSection courseCodes={courseCodes} />
    <GetStartedSection
      title="Ready to add home staging to your design expertise?"
      text="Become professionally certified with QC’s online Staging for Designers training"
      courseCodes={courseCodes}
    />
  </div>
);

export default StagingForDesignersPage;
