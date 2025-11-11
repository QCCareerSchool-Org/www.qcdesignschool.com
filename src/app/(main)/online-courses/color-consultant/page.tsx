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
import type { PageComponent } from '@/app/serverComponent';
import { AccordionFAQ } from '@/components/accordionFAQ';
import { CareerEssentialsKitCanvaSection } from '@/components/careerEssentialsKitCanvaSection';
import { CourseSchema } from '@/components/courseSchema';
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
  title: 'Color Consultant Course',
  description: 'QC Design School\'s Color Consultant Course teaches the theoretical and practical skills you need in order to design custom interiors. Find out more!',
  alternates: { canonical: '/online-courses/color-consultant' },
};

const testimonialIds = [ 'TD-0003', 'TD-0005', 'TD-0002', 'TD-0004', 'TD-0006', 'TD-0011' ];
const courseCodes: CourseCode[] = [ 'cc' ];

const ColorConsultantPage: PageComponent = () => (
  <div className={styles.page}>
    <Suspense><CourseSchema courseCode={courseCodes[0]} /></Suspense>
    <section className="half-padding-top">
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
            <p className="lead mb-4">QC's Color Consultant certification course offers an unparalleled online curriculum to equip you with the practical skills and expert knowledge you need to excel in the home design industry. You'll delve into the psychology of color and study advanced topics in color theory and design so that you're ready to wow every client.</p>
            <ul>
              <li>Get started now—our premium Color Consultant course is designed to take you from beginner to expert with no previous training required</li>
              <li>Receive personalized feedback and advice on your assignments from our top design & decorating experts</li>
              <li>Join a thriving virtual community to connect with other design-industry professionals and gain exclusive access to bonus materials and expert-led webinars</li>
              <li>Leverage built-in business training and real-world templates to help you launch your design career and grow your clientele as a certified Color Consultant</li>
              <li>Enjoy discounts and affiliations with top organizations including the Inter-Society Color Council (SCC), DesignFiles, SampleBoard, and more</li>
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
              <li>Bonus! Learn how to use professional design software with step-by-step video tutorials featuring <i>DesignFiles</i></li>
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
    <GoogleReviewSection courseCode="cc" />
    <TutorSection className="bg-light" />
    <OutlineSection />
    <CareerEssentialsKitCanvaSection />
    <Suspense>
      <PaymentPlanSection courseCodes={courseCodes} />
    </Suspense>
    <section>
      <div itemScope itemType="https://schema.org/FAQPage">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2 className="text-center mb-4">Frequently Asked Questions</h2>
              <AccordionFAQ heading="How can I find color consultant jobs?" className="mb-3">
                <p>There are several paths to finding color consultant jobs, including:</p>
                <ul>
                  <li>Working with <strong>interior design firms</strong> or <strong>decorating companies</strong></li>
                  <li>Becoming a <strong>paint store consultant</strong></li>
                  <li>Launching your own <strong>freelance color consulting business</strong></li>
                </ul>
                <p>Many color consultants work with <strong>homeowners, real estate agents, and renovation teams</strong> who need expert advice on color selection. Upon graduation, you'll also be eligible to join professional associations. These organizations offer job boards, networking opportunities, and industry insights to help you grow your career.</p>
              </AccordionFAQ>
              <AccordionFAQ heading="How long does it take to become a color consultant?" className="mb-3">
                <p>You can become a certified color consultant in as little as <strong>2 to 6 months</strong>! QC Design School's <strong>self-paced online course</strong> allows you to work according to your own schedule.</p>
                <p>You'll have up to <strong>a full year</strong> to complete your coursework and assignments—so whether you're fast-tracking your certification or balancing your studies with work or family life, the course adapts to your pace.</p>
              </AccordionFAQ>
              <AccordionFAQ heading="What are color analysis consultants?" className="mb-3">
                <p>A <strong>color analysis consultant</strong> uses color theory to help clients choose colors that suit their personal style, including:</p>
                <ul>
                  <li><strong>Clothing and wardrobe colors</strong></li>
                  <li><strong>Makeup tones</strong> based on skin undertones</li>
                  <li><strong>Accessories and personal branding</strong></li>
                </ul>
                <p>While a <strong>color consultant</strong> typically works in home and interior spaces, a <strong>color analysis consultant</strong> applies the same principles to <strong>fashion and beauty</strong>. To become a color analysis consultant, consider adding <strong>makeup artistry</strong> and <strong>personal styling</strong> courses to your training with QC Design School's sister school, <a href="https://www.qcmakeupacademy.com" target="_blank" rel="noreferrer">QC Makeup Academy</a>.</p>
              </AccordionFAQ>
            </div>
          </div>
        </div>
      </div>
    </section>
    <GetStartedSection
      title="Ready to Start Your Career as a Color Consultant?"
      text="Become professionally certified with QC's online Color Consultant training."
      courseCodes={courseCodes}
    />
  </div>
);

export default ColorConsultantPage;
