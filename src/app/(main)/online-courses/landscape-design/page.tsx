import type { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';

import { OutlineSection } from './_outlineSection';
import { CertificationSection } from './certificationSection';
import HeroImage from './hero.jpg';
import styles from './page.module.scss';
import { TutorSection } from './tutorSection';
import WhatYoullLearnImage from './what-youll-learn.jpg';
import WhyQCImage from './why-qc.jpg';
import { QuestionAndAnswer } from '../../faq/questionAndAnswer';
import type { PageComponent } from '@/app/serverComponent';
import { CareerEssentialsKitCanvaSection } from '@/components/careerEssentialsKitCanvaSection';
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
  title: 'Landscape Design Course',
  description: 'QC\'s Landscape Design certification provides online training in plant selection, garden design, site planning, and contractor collaboration for success.',
  alternates: { canonical: '/online-courses/landscape-design' },
};

const testimonialIds = [ 'TD-0002', 'TD-0003', 'TD-0004', 'TD-0006', 'TD-0011', 'TD-0012' ];
const courseCodes: CourseCode[] = [ 'ld' ];

const LandscapeDesignPage: PageComponent = () => (
  <div className={styles.page}>
    <section className="half-padding-top">
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
            <p className="lead mb-4">QC's Landscape Design certification course provides comprehensive online training to set you up for success in the thriving landscape design industry. QC's immersive curriculum details everything from plant selection and garden design to outdoor rooms, site plans and working with contractors to ensure you're fully prepared to design breathtaking landscapes from start to finish.</p>
            <ul>
              <li>Get started now—our premium Landscape Design course is designed to take you from beginner to expert with no previous training required</li>
              <li>Receive personalized feedback and advice on your assignments from our top landscape industry experts</li>
              <li>Join a thriving virtual community to connect with other design industry professionals and gain exclusive access to bonus material</li>
              <li>Access video tutorials and custom lessons covering drafting skills and digital design plans to mastering client communications</li>
              <li>Leverage built-in business training and real-world templates to help you launch your career and grow your clientele as a certified landscape designer</li>
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
    <CertificationSection />
    <VirtualCommunitySection />
    <GoogleReviewSection courseCode="ld" />
    <TutorSection className="bg-light" />
    <OutlineSection />
    <CareerEssentialsKitCanvaSection />
    <Suspense>
      <PaymentPlanSection courseCodes={courseCodes} />
    </Suspense>
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h2 className="text-center mb-4">Frequently Asked Questions</h2>
            <QuestionAndAnswer heading="How much does a landscape designer make?">
              <p>The average <strong>landscape designer salary</strong> is approximately <strong>$83,990 per year*</strong>, though earnings vary based on your <strong>location, service offerings, client base, and experience level</strong>.</p>
              <p>As you gain experience and build your portfolio, you can charge <strong>higher hourly or project-based rates</strong> for design consultations, landscape plans, and implementation guidance. Many successful designers also increase their income by offering specialized services.</p>
              <p className="small">* &ldquo;<a href="https://www.bls.gov/oes/2023/may/oes171012.htm" target="_blank" rel="noreferrer">Occupational Employment and Wages, May 2023: 17-1012 Landscape Architects</a>.&rdquo; <i>U.S. Bureau of Labour Satistics.</i> May 2023</p>
            </QuestionAndAnswer>
            <QuestionAndAnswer heading="Do I need a degree to work as a landscape designer?">
              <p><strong>No, a degree is not required</strong> to become a landscape designer. You can build a successful career without attending college or university.</p>
              <p>QC Design School's <strong>online Landscape Design course</strong> provides you with the essential knowledge, technical skills, and hands-on training to work professionally in the industry. Upon completion, you'll earn the <strong>International Landscape Design Professional&trade; (ILDP&trade;) certification</strong>—a respected credential that proves you're qualified to:</p>
              <ul>
                <li>Create custom garden and landscape designs</li>
                <li>Plan hardscape and softscape layouts</li>
                <li>Use industry-standard drawing techniques</li>
                <li>Offer expert consultations to residential and commercial clients</li>
              </ul>
            </QuestionAndAnswer>
            <QuestionAndAnswer heading="How long does it take to become a certified landscape designer?">
              <p>You can become a landscape designer in as little as 2 to 6 months! QC Design School's <strong>flexible, self-paced online course</strong> allows you to study on your own schedule—ideal for students who are working or balancing other commitments. If you need to take your time, you'll have up to <strong>2 full years</strong> to finish your training and receive your ILDP certification.</p>
            </QuestionAndAnswer>
            <QuestionAndAnswer heading="Can I start a landscape design business after completing the course?">
              <p>Yes! With QC's Landscape Design course, you'll learn how to become a landscape designer step by step, from designing beautiful gardens to starting your own business. The course includes optional business training so you can learn how to register your own business, write a business plan, market your services, work successfully with any client or vendor, and develop a professional portfolio to showcase your work. Whether you want to freelance, open your own design studio, or offer design-build services, you'll graduate with the skills and tools to launch a <strong>thriving landscape design business</strong>.</p>
            </QuestionAndAnswer>
          </div>
        </div>
      </div>
    </section>
    <GetStartedSection
      title="Ready to Start Your Career in Landscape Design?"
      text="Become professionally certified with QC's online landscape design training."
      courseCodes={courseCodes}
    />
  </div>
);

export default LandscapeDesignPage;
