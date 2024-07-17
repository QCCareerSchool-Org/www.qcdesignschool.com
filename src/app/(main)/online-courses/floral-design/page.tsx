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
import CertificationLogo from '@/components/certificationLogos/ifdp.svg';
import { CourseType } from '@/components/courseType';
import { GetStartedSection } from '@/components/getStartedSection';
import { Hero } from '@/components/hero';
import { HeroButtons } from '@/components/hero/heroButtons';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import { TestimonialSection } from '@/components/testimonialSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { MwaiYeboahCircle } from '@/components/tutors/mwaiYeboah';
import { ReneeTucciCircle } from '@/components/tutors/reneeTucci';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';

export const metadata: Metadata = {
  title: 'Floral Design Course - QC Design School',
};

const testimonialIds = [ 'TD-0002', 'TD-0003', 'TD-0004', 'TD-0006', 'TD-0011', 'TD-0012' ];
const courseCodes: CourseCode[] = [ 'fd' ];

const FloralDesignPage: PageComponent = () => (
  <div className={styles.page}>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="100% 0">
              <CourseType className="mb-2 mb-xl-4">IFDP&trade; Certification</CourseType>
              <h1 className="mb-2 mb-xl-4">Floral Design Course</h1>
              <p className="h5 mb-3 mb-xl-5">Become a Certified Floral Designer</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Design School</h2>
            <p className="lead mb-4">QC's Floral Design certification course provides students with the most comprehensive training available to succeed in the design industry.</p>
            <ul>
              <li>No previous training required&mdash;our premium Floral Design course is designed to help you launch your career in the floral design industry</li>
              <li>Personalized feedback and advice on your assignments from our top design industry & floral experts</li>
              <li>Thriving virtual community to connect with other designers, get feedback, and gain exclusive access to bonus materials</li>
              <li>Built-in business training and real-world templates to help you launch your design career and grow your clientele as a certified Floral Designer</li>
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
            <p>QC's comprehensive Floral Design course will show you how to:</p>
            <ul className="mb-0">
              <li>Learn about flower selection, placement and methods to polish your designs</li>
              <li>Study the most common types of flowers and design arrangements clients love</li>
              <li>Work with a variety of budget types, design requirements and different client personalities</li>
              <li>Master plant care and anatomy to ensure you can create long-lasting designs</li>
              <li>Build your brand and market your new floral design business</li>
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
              <CertificationLogo height="200" className="mb-3" alt="International Floral Design Professional (IFDP) certification logo" />
            </div>
            <p className="mb-3 small gold">International Floral Design Professional&trade; (IFDP&trade;)</p>
            <h2 className="text-white mb-3">Your Floral Design Certification</h2>
            <p>Once you graduate from your online event planning course, you'll receive a certification and be able to use the designation of International Floral Design Professional (IFDP).</p>
            <p className="mb-0">This certification demonstrates that you have successfully completed professional Floral Design training and that you possess all the skills and knowledge required to create beautiful floral arrangements.</p>
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
            <h2>Meet Your Floral Design Experts</h2>
            <p className="lead mb-0">QC is proud to work with leaders of the global design industry to develop our courses. Our international team of instructors bring diverse experience and skills to aspiring designers around the globe.</p>
          </div>
        </div>
        <div className="row g-5 g-lg-s">
          <div className="col-12 col-lg-6">
            <div className="mb-3"><ReneeTucciCircle /></div>
            <h3 className="h4">Renee Tucci</h3>
            <p className="mb-0">With over 20 years of floral design experience, Renee Tucci, recognized by the American Institute of Floral Designers and Professional Floral Communicators International, is a dedicated instructor in the QC course, guiding students to master the art of floral design.</p>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mb-3"><MwaiYeboahCircle /></div>
            <h3 className="h4">Mwai Yeboah</h3>
            <p className="mb-0">Mwai Yeboah, founder of Love From Mwai and multi-award winning planner, specializes in destination wedding planning. As the lead planner and designer, she transforms weddings and events into immersive experiences for luxury clients worldwide.</p>
          </div>
        </div>
      </div>
    </section>
    <OutlineSection />
    <CareerEssentialsKitSection />
    <PaymentPlanSection courseCodes={courseCodes} />
    <GetStartedSection
      title="Ready to start your floral design career?"
      text="Become professionally certified with QC's online floral design training"
      courseCodes={courseCodes}
    />
  </div>
);

export default FloralDesignPage;
