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
import { CareerEssentialsKitDesignFilesSection } from '@/components/careerEssentialsKitDesignFilesSection';
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
  title: 'Professional Organizing Course',
  description: "QC's Professional Organizing certification course covers decluttering, personalized solutions, and client strategies to jumpstart your career.",
};

const testimonialIds = [ 'TD-0002', 'TD-0012', 'TD-0011', 'TD-0009', 'TD-0004', 'TD-0003' ];
const courseCodes: CourseCode[] = [ 'po' ];

const ProfessionalOrganizingPage: PageComponent = () => (
  <div className={styles.page}>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="100% 0">
              <CourseType className="mb-2 mb-xl-4">AIOP&trade; Certification</CourseType>
              <h1 className="mb-2 mb-xl-4">Professional Organizing Course</h1>
              <p className="h5 mb-3 mb-xl-5">Become Certified in Professional Organizing</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Design School</h2>
            <p className="lead mb-4">QC's Professional Organizing certification course will jumpstart your career with an in-depth online curriculum covering everything from decluttering techniques and personalized organizing solutions to strategies for working with clients. QC's comprehensive training program will prepare you to design beautiful and organized spaces that transform your clients' lives.</p>
            <ul>
              <li>Get started now—our premium Professional Organizing course is designed to take you from beginner to expert  with no previous training required</li>
              <li>Receive personalized feedback and advice on your assignments from our top design-industry experts</li>
              <li>Join a thriving virtual community to connect with other design industry professionals and gain exclusive access to bonus material and expert-led webinars</li>
              <li>Leverage built-in business training and real-world templates to help you launch your career and grow your clientele as an Advanced International Organizing Professional™ (AIOP)™</li>
              <li>Enjoy discounts and affiliations with top organizations including the American Society of Professional Organizers, DesignFiles, and more</li>
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
            <p>QC's comprehensive Professional Organizing course will show you how to:</p>
            <ul className="mb-0">
              <li>Develop the skills to restore order and productivity in your clients' homes and offices</li>
              <li>Interview clients, define their needs and fine-tune your approach to land contracts</li>
              <li>Work with a variety of budget types, design requirements and different client personalities</li>
              <li>Identify the optimal function of spaces, take measurements, and draw scale floor plans</li>
              <li>Create new furniture layouts and storage solutions, and deliver maintenance plans</li>
              <li>Build your brand and market your new professional organizing business</li>
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
    <GoogleReviewSection courseCode="po" />
    <TutorSection className="bg-light" />
    <OutlineSection />
    <CareerEssentialsKitDesignFilesSection />
    <PaymentPlanSection courseCodes={courseCodes} />
    <GetStartedSection
      title="Ready to Start Your Career in Professional Organizing?"
      text="Become professionally certified with QC's online professional organizing training."
      courseCodes={courseCodes}
    />
  </div>
);

export default ProfessionalOrganizingPage;
