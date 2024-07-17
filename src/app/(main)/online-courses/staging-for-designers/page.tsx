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
              <h1 className="mb-2 mb-xl-4">Home Staging Course</h1>
              <p className="h5 mb-3 mb-xl-5">Become a Certified Home Stager</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Design School</h2>
            <p className="lead mb-4">QC's Home Staging certification course provides students with the most comprehensive training available to succeed in the staging industry.</p>
            <ul>
              <li>No previous training required&mdash;our premium Home Staging course is designed to take you from beginner to expert</li>
              <li>Personalized feedback and advice on your assignments from our top staging-industry experts</li>
              <li>Thriving virtual community to connect with other stagers, get feedback, and gain exclusive access to bonus material</li>
              <li>Built-in business training and real-world templates to help you launch your career and grow your clientele as a certified home stager</li>
              <li>Discounts and affiliations with top organizations including the American Society of Professional Organizers, Decorators & Designers Association of Canada, and more</li>
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
            <p>QC's comprehensive Home Staging course will show you how to:</p>
            <ul className="mb-0">
              <li>Develop the skills to enhance your client's home using existing items in the space</li>
              <li>Create color palettes, accessorizing plans, and curb appeal strategies</li>
              <li>Work with a variety of budget types, design requirements and different client personalities</li>
              <li>Create excellent first impressions by decluttering the home and enhancing curb appeal</li>
              <li>Incorporate the right lighting and window treatments to wow potential buyers</li>
              <li>Build your brand and market your new home staging business</li>
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
              <CertificationLogo height="200" className="mb-3" alt="International Staging and Redesign Professional (ISRP) certification logo" />
            </div>
            <p className="mb-3 small gold">International Staging and Redesign Professional&trade; (ISRP&trade;)</p>
            <h2 className="text-white mb-3">Your Home Staging Certification</h2>
            <p>Once you graduate from your home staging course, you'll receive a certification and be able to use the designation of International Staging and Redesign Professional (ISRP).</p>
            <p className="mb-0">This certification demonstrates that you have successfully completed home stager training and that you possess all the skills and knowledge required to create functional and comfortable homes.</p>
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
      title="Ready to start your career as a home stager?"
      text="Become professionally certified with QC's online home staging training"
      courseCodes={courseCodes}
    />
  </div>
);

export default StagingForDesignersPage;
