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
import CertificationLogo from '@/components/certificationLogos/ildp.svg';
import { CourseType } from '@/components/courseType';
import { GetStartedSection } from '@/components/getStartedSection';
import { Hero } from '@/components/hero';
import { HeroButtons } from '@/components/hero/heroButtons';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import { TestimonialSection } from '@/components/testimonialSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import ChrisTuccioCollageImage from '@/components/tutors/chrisTuccioCollage-white.jpg';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';

export const metadata: Metadata = {
  title: 'Landscape Design Course - QC Design School',
};

const testimonialIds = [ 'TD-0002', 'TD-0003', 'TD-0004', 'TD-0006', 'TD-0011', 'TD-0012' ];
const courseCodes: CourseCode[] = [ 'ld' ];

const LandscapeDesignPage: PageComponent = () => {
  return (
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
              <p className="lead mb-4">QC's Landscape Design certification course provides students with the most comprehensive training available to succeed in the landscape design industry.</p>
              <ul>
                <li>No previous training required&mdash;our premium Landscape Design course is designed to take you from beginner to expert</li>
                <li>Personalized feedback and advice on your assignments from our top landscape industry experts</li>
                <li>Thriving virtual community to connect with other landscape designers, get feedback, and gain exclusive access to bonus material</li>
                <li>Built-in business training and real-world templates to help you launch your career and grow your clientele as a certified Landscape Designer</li>
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
      <section className="text-white text-shadow">
        <Image src={CertificationBackgroundImage} fill placeholder="blur" alt="" sizes="100vw" style={{ objectFit: 'cover' }} />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-lg-8 col-xxl-6 text-center">
              <div>
                <CertificationLogo height="200" className="mb-3" alt="International Landscape Design Professional (ILDP) certification logo" />
              </div>
              <p className="mb-3 small gold">International Landscape Design Professional&trade; (ILDP&trade;)</p>
              <h2 className="text-white mb-3">Your Landscape Design Certification</h2>
              <p>Once you graduate from your Landscape Design course, you'll receive a certification and be able to use the designation of International Landscape Design Professional (ILDP).</p>
              <p className="mb-0">This certification demonstrates that you have successfully completed Landscape Design training and that you possess all the skills and knowledge required to create functional and comfortable homes.</p>
            </div>
          </div>
        </div>
      </section>
      <VirtualCommunitySection />
      <TestimonialSection id="TD-0001" />
      <section className="bg-light">
        <div className="container">
          <div className="row justify-content-center align-items-center g-lg-s">
            <div className="col-12 col-lg-6 col-xl-7 col-xxl-6 mb-5 mb-lg-0">
              <h2>Meet Your Landscape Design Instructor</h2>
              <p className="mb-0">Chris Tuccio, professor and Program Coordinator of Horticulture & Landscape Design at Naugatuck Valley Community College, holds a Master's in Landscape Architecture from Harvard. He also serves on the CT Horticulture Society Board and manages Draftscapes.</p>
            </div>
            <div className="col-8 col-sm-6 col-lg-5 col-xl-4">
              <Image src={ChrisTuccioCollageImage} alt="Chris Tuccio" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <OutlineSection />
      <CareerEssentialsKitSection />
      <PaymentPlanSection courseCodes={courseCodes} />
      <GetStartedSection
        title="Ready to start your home design & decorating career?"
        text="Become professionally certified with QC's online interior decorating training"
        courseCodes={courseCodes}
      />
    </div>
  );
};

export default LandscapeDesignPage;
