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
import CertificationLogo from '@/components/certificationLogos/aiop.svg';
import { CourseType } from '@/components/courseType';
import { GetStartedSection } from '@/components/getStartedSection';
import { Hero } from '@/components/hero';
import { HeroButtons } from '@/components/hero/heroButtons';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import { SingleTutorSection } from '@/components/singleTutorSection';
import { TestimonialSection } from '@/components/testimonialSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import TutorImage from '@/components/tutors/angieChapmanCollage-light.jpg';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';

export const metadata: Metadata = {
  title: 'Professional Organizing Course - QC Design School',
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
              <p className="h5 mb-3 mb-xl-5">Become a Certified Professional Organizer</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Design School</h2>
            <p className="lead mb-4">QC's Professional Organizing certification course provides students with the most comprehensive training available to succeed in the design industry.</p>
            <ul>
              <li>No previous training required&mdash;our premium Professional Organizing course is designed to take you from beginner to expert</li>
              <li>Personalized feedback and advice on your assignments from our top industry design experts</li>
              <li>Thriving virtual community to connect with other organizers, get feedback, and gain exclusive access to bonus material</li>
              <li>Built-in business training and real-world templates to help you launch your career and grow your clientele as a certified professional organizer</li>
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
    <section className="text-white text-shadow">
      <Image src={CertificationBackgroundImage} fill placeholder="blur" alt="" sizes="100vw" style={{ objectFit: 'cover' }} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-lg-8 col-xxl-6 text-center">
            <div>
              <CertificationLogo height="200" className="mb-3" alt="Advanced International Organizing Professional (AIOP) certification logo" />
            </div>
            <p className="mb-3 small gold">Advanced International Organizing Professional&trade; (AIOP&trade;)</p>
            <h2 className="text-white mb-3">Your Professional Organizing Certification</h2>
            <p>Once you graduate from your professional organizing course, you'll receive a certification and be able to use the designation of Advanced International Organizing Professional (AIOP).</p>
            <p className="mb-0">This certification demonstrates that you have successfully completed professional organizer training and that you possess all the skills and knowledge required to create functional and comfortable homes.</p>
          </div>
        </div>
      </div>
    </section>
    <VirtualCommunitySection />
    <TestimonialSection id="TD-0001" />
    <SingleTutorSection
      courseName="Professional Organizing"
      description="Award-winning interior design consultant and founder of Angie Chapman Interiors, Angie is a driving force in the design world. With over 10 years of experience in the industry, she has honed her skills and expertise to become a sought-after designer."
      src={TutorImage}
      alt="Angie Chapman"
      className="bg-light"
    />
    <OutlineSection />
    <CareerEssentialsKitSection />
    <PaymentPlanSection courseCodes={courseCodes} />
    <GetStartedSection
      title="Ready to start your career in professional organizing?"
      text="Become professionally certified with QC's online professional organizing training"
      courseCodes={courseCodes}
    />
  </div>
);

export default ProfessionalOrganizingPage;
