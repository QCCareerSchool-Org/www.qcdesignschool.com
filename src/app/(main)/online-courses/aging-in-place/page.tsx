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
import CertificationLogo from '@/components/certificationLogos/apdp.svg';
import { CourseType } from '@/components/courseType';
import { GetStartedSection } from '@/components/getStartedSection';
import { Hero } from '@/components/hero';
import { HeroButtons } from '@/components/hero/heroButtons';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import { TestimonialSection } from '@/components/testimonialSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { TammyHartCircle } from '@/components/tutors/tammyHart';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';

export const metadata: Metadata = {
  title: 'Aging in Place Course',
};

const testimonialIds = [ 'DT-0001', 'DT-0001', 'DT-0001', 'DT-0001', 'DT-0001', 'DT-0001' ];
const courseCodes: CourseCode[] = [ 'ap' ];

const AgingInPlacePage: PageComponent = () => (
  <div className={styles.page}>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="100% 0">
              <CourseType className="mb-2 mb-xl-4">Specialty Course</CourseType>
              <h1 className="mb-2 mb-xl-4">Aging in Place Course</h1>
              <p className="h5 mb-3 mb-xl-5">Expand Your Home Design Career</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Design School</h2>
            <p className="lead mb-4">QC's Aging in Place certification course provides students with the most comprehensive training available to expand your services in the home design industry.</p>
            <ul>
              <li>With QC's Aging in Place course, you'll use build on your existing design knowledge to create safe, functional and beautiful spaces for any client with aging concerns</li>
              <li>Personalized feedback and advice on your assignments from our top design industry design experts</li>
              <li>Thriving virtual community to connect with other decorators, get feedback and gain exclusive access to bonus materials</li>
              <li>Built-in business training and real-world templates to help you launch your design career and expand your clientele with aging in place services</li>
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
              <CertificationLogo height="200" className="mb-3" alt="Aging in Place Professional (APDP) certification logo" />
            </div>
            <p className="mb-3 small gold">Aging in Place Professional&trade; (APDP&trade;)</p>
            <h2 className="text-white mb-3">Your Aging in Place Certification</h2>
            <p>Once you graduate from your online event planning course, you'll receive a certification and be able to use the designation of Aging in Place Professional (APDP).</p>
            <p className="mb-0">This certification demonstrates that you have successfully completed professional aging in place training and that you possess all the skills and knowledge required to create comfortable and functional homes.</p>
          </div>
        </div>
      </div>
    </section>
    <VirtualCommunitySection />
    <TestimonialSection id="DT-0001" />
    <section className="bg-light">
      <div className="container">
        <TammyHartCircle />
        <p>Tammy Hart</p>
        <p>Tammy Hart is the owner of Designer Chick Co. She also served as a director on the National Board for DDA. Tammy has presented at IIDEXCanada and The Small Business Forum, been featured in East of the City Magazine, and appeared on the Rogers Daytime Durham talk show.</p>
      </div>
    </section>
    <OutlineSection />
    <CareerEssentialsKitSection />
    <PaymentPlanSection courseCodes={courseCodes} />
    <GetStartedSection
      title="Ready to expand your home design & decorating career?"
      text="Become professionally certified with QC's online Aging in Place training"
      courseCodes={courseCodes}
    />
  </div>
);

export default AgingInPlacePage;
