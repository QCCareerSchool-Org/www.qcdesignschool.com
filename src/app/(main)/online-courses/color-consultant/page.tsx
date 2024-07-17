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
import CertificationLogo from '@/components/certificationLogos/iccp.svg';
import { CourseType } from '@/components/courseType';
import { GetStartedSection } from '@/components/getStartedSection';
import { Hero } from '@/components/hero';
import { HeroButtons } from '@/components/hero/heroButtons';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import { TestimonialSection } from '@/components/testimonialSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import JaneLockhartCollageImage from '@/components/tutors/janeLockhartCollage-light.jpg';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';

export const metadata: Metadata = {
  title: 'Color Consultant Course - QC Design School',
};

const testimonialIds = [ 'TD-0003', 'TD-0005', 'TD-0002', 'TD-0004', 'TD-0006', 'TD-0011' ];
const courseCodes: CourseCode[] = [ 'cc' ];

const ColorConsultantPage: PageComponent = () => (
  <div className={styles.page}>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="100% 0">
              <CourseType className="mb-2 mb-xl-4">ICCP&trade; Certification</CourseType>
              <h1 className="mb-2 mb-xl-4">Color Consultant Course</h1>
              <p className="h5 mb-3 mb-xl-5">Become a Certified Color Consultant</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Design School</h2>
            <p className="lead mb-4">QC's Color Consultant certification course provides students with the most comprehensive training available to succeed in the color consulting and home design industry.</p>
            <ul>
              <li>No previous training required&mdash;our premium Color Consultant course is designed to take you from beginner to expert</li>
              <li>Personalized feedback and advice on your assignments from our top industry staging experts</li>
              <li>Thriving virtual community to connect with other Color Consultants, get feedback, and gain exclusive access to bonus material</li>
              <li>Built-in business training and real-world templates to help you launch your career and grow your clientele as a certified Color Consultant</li>
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
            <p>QC's comprehensive Color Consultant course will show you how to:</p>
            <ul className="mb-0">
              <li>Master the theoretical and practical skills you need to design custom interiors</li>
              <li>Confidently consult on color topics including how lighting and undertones affect color choices, how to work with open-concept spaces, and more</li>
              <li>Work with a variety of budget types, design requirements, and different client personalities</li>
              <li>Understand designing with textiles, arranging accessories, and building a strong relationship between art and design</li>
              <li>Build your brand and market your new Color Consulting business</li>
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
              <CertificationLogo height="200" className="mb-3" alt="International Color Consulting Professional (ICCP) certification logo" />
            </div>
            <p className="mb-3 small gold">International Color Consulting Professional&trade; (ICCP&trade;)</p>
            <h2 className="text-white mb-3">Your Color Consultant Certification</h2>
            <p>Once you graduate from your Color Consultant course, you'll receive a certification and be able to use the designation of International Color Consulting Professional (ICCP).</p>
            <p className="mb-0">This certification demonstrates that you have successfully completed Color Consultant training and that you possess all the skills and knowledge required to create functional and comfortable homes.</p>
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
            <h2>Meet Your Color Consultant Instructor</h2>
            <p className="mb-0">Many recognize Jane from her show, Color Confidential, on HGTV and W Network. She is also the best-selling author of two books and frequently lends her design expertise to Canadian television shows including The Marilyn Denis Show and Cityline.</p>
          </div>
          <div className="col-8 col-sm-6 col-lg-5 col-xl-4">
            <Image src={JaneLockhartCollageImage} alt="Jane Lockhart" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    <OutlineSection />
    <CareerEssentialsKitSection />
    <PaymentPlanSection courseCodes={courseCodes} />
    <GetStartedSection
      title="Ready to start your career as a color consultant?"
      text="Become professionally certified with QC's online Color Consultant training"
      courseCodes={courseCodes}
    />
  </div>
);

export default ColorConsultantPage;
