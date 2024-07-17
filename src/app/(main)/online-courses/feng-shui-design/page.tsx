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
import CertificationLogo from '@/components/certificationLogos/afdp.svg';
import { CourseType } from '@/components/courseType';
import { GetStartedSection } from '@/components/getStartedSection';
import { Hero } from '@/components/hero';
import { HeroButtons } from '@/components/hero/heroButtons';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import { TestimonialSection } from '@/components/testimonialSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { IvyEllerbyCircle } from '@/components/tutors/ivyEllerby';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';

export const metadata: Metadata = {
  title: 'Feng Shui Design Course - QC Design School',
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
            <p className="lead mb-4">QC's Feng Shui Design certification course provides students with the most comprehensive training available to succeed in the home design industry.</p>
            <ul>
              <li>No previous training required&mdash;our premium Feng Shui Design course is designed to take you from beginner to expert</li>
              <li>Personalized feedback and advice on your assignments from our top industry home design experts</li>
              <li>Thriving virtual community to connect with other home designers, get feedback and gain exclusive access to bonus material</li>
              <li>Built-in business training and real-world templates to help you launch your career and grow your clientele as a certified Feng Shui professional</li>
              <li>Discounts and affiliations with top organizations including the American Society of Professional Organizers, Decorators & Designers Association of Canada and more</li>
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
    <section className="text-white text-shadow">
      <Image src={CertificationBackgroundImage} fill placeholder="blur" alt="" sizes="100vw" style={{ objectFit: 'cover' }} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-lg-8 col-xxl-6 text-center">
            <div>
              <CertificationLogo height="200" className="mb-3" alt="Advanced Feng Shui Design Professional (AFDP) certification logo" />
            </div>
            <p className="mb-3 small gold">Advanced Feng Shui Design Professional&trade; (AFDP&trade;)</p>
            <h2 className="text-white mb-3">Your Feng Shui Design Certification</h2>
            <p>Once you graduate from your Feng Shui Design course, you'll receive a certification and be able to use the designation of Advanced Feng Shui Design Professional (AFDP).</p>
            <p className="mb-0">This certification demonstrates that you have successfully completed Feng Shui Design training and that you possess all the skills and knowledge required to create functional and comfortable homes.</p>
          </div>
        </div>
      </div>
    </section>
    <VirtualCommunitySection />
    <TestimonialSection id="TD-0001" />
    <section className="bg-light">
      <div className="container">
        <IvyEllerbyCircle />
        <p>Ivy Ellerby</p>
        <p>Accredited Staging Professional, Advanced Feng Shui Design Professional, and consultant at Eastern Design and Home Staging, Ivy blends her background in clinical and experimental psychology to enhance harmony and balance in homes.</p>
      </div>
    </section>
    <OutlineSection />
    <CareerEssentialsKitSection />
    <PaymentPlanSection courseCodes={courseCodes} />
    <GetStartedSection
      title="Ready to start your career as a feng shui designer?"
      text="Become professionally certified with QC's online feng shui design training"
      courseCodes={courseCodes}
    />
  </div>
);

export default FengShuiDesignPage;
