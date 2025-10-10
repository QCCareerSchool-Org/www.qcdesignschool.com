import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
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
  title: 'Event Decor Course',
  description: 'QC\'s Event Decor Course has three comprehensive parts: event design, decor components, and building a career in the industry.',
  alternates: { canonical: '/online-courses/event-decor' },
};

const testimonialIds = [ 'TD-0006', 'TD-0008', 'TD-0009', 'TD-0010', 'TD-0011', 'TD-0012' ];
const courseCodes: CourseCode[] = [ 'ed' ];

const EventDecorPage: PageComponent = () => (
  <div className={styles.page}>
    <section className="half-padding-top">
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="100% 0">
              <CourseType className="mb-2 mb-xl-4">IEDP&trade; Certification</CourseType>
              <h1 className="mb-2 mb-xl-4">Event Decor Course</h1>
              <p className="h5 mb-3 mb-xl-5">Become a Certified Event Decorator</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Design School</h2>
            <p className="lead mb-4">In partnership with QC Event School, QC's Event Decor certification course provides the most comprehensive training available to prepare you for a thriving career designing unforgettable events. Dive into an extensive online curriculum that covers everything from developing a decor theme and color scheme to planning floral arrangements, fabric draping and working with vendors.</p>
            <ul>
              <li>Get started now—our premium Event Decor course is designed to take you from beginner to expert with no previous training required</li>
              <li>Receive personalized feedback and advice on your assignments from our top industry experts</li>
              <li>Join a thriving virtual community to connect with other industry professionals and gain exclusive access to bonus materials and expert-led webinars</li>
              <li>Leverage built-in business training and real-world templates to help you launch your design career and grow your clientele as a certified Event Decorator</li>
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
            <p>QC's comprehensive Event Decor course will show you how to:</p>
            <ul className="mb-0">
              <li>Use your design skills to create beautiful events that guests will remember forever</li>
              <li>Create the entire layout for an event including a cohesive theme, color schemes, and other design elements</li>
              <li>Work with a variety of budget types, design requirements and different client personalities</li>
              <li>Use color matching, trending themes and the latest event design styles to create a cohesive and modern look</li>
              <li>Build your brand and market your new event decor business</li>
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
    <GoogleReviewSection courseCode="ed" />
    <TutorSection className="bg-light" />
    <OutlineSection />
    <Suspense>
      <PaymentPlanSection courseCodes={courseCodes} />
    </Suspense>
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h2 className="text-center mb-4">Frequently Asked Questions</h2>
            <QuestionAndAnswer heading="What will I learn in QC's Event Decor course?">
              <p>Event decor services are a great way to add value to your services and reach a broader audience of clients in need of design services. With QC's Event Decor course, you'll learn all the components that make an event unique, including florals, lighting, layout and fabric. You'll gain all the skills you need to design stunning, cohesive events. You'll also <strong>develop your client consultation skills</strong> and explore the <strong>business side of event decorating</strong>, including how to price your services and build a brand. Graduates earn the <strong>International Event Decorating Professional&trade; (IEDP&trade;) certification</strong>—an industry-recognized credential that showcases your training and credibility.</p>
            </QuestionAndAnswer>
            <QuestionAndAnswer heading="How much does an event decorator earn?">
              <p>An <strong>event decorator's salary</strong> varies based on experience, location, and the services you offer. On average, event decorators earn between <strong>$32,459 and $42,500 per year*</strong>, with opportunities to charge more for consultations and full-service packages as your reputation grows. Many successful event decorators work as freelancers, with event planning companies or run their own event decor businesses.</p>
              <p>Our <Link href="/contact-us">student support team</Link> will be happy to tell you about the QC Event & Wedding Planning course and how it can accelerate your event decorating career after graduation!</p>
              <p className="small">* &ldquo;<a href="https://www.ziprecruiter.com/Salaries/Event-Decorator-And-Designer-Salary#Yearly" target="_blank" rel="noreferrer">Event Decorator and Designer Salary</a>.&rdquo; <i>Zip Recruiter.</i> May 2025</p>
            </QuestionAndAnswer>
            <QuestionAndAnswer heading="Do I need a degree to become an event decorator?">
              <p>A license, degree, or certification is NOT required to work as an event decorator. With QC's Event Decor course, you'll earn an industry-recognized certification as an International Event Decorating Professional (IEDP).  This designation gives you a competitive edge by proving your qualifications and building client trust, so that you can stand out in this lucrative industry. The IEDP certification shows clients that you have the skills and knowledge required to decorate beautiful and memorable events.</p>
            </QuestionAndAnswer>
            <QuestionAndAnswer heading="How long does it take to become an event decorator?">
              <p>You can become a certified event decorator in just a <strong>few short months</strong>! QC's <strong>self-paced online course</strong> allows you to study on your schedule. Most students complete the course in <strong>3 to 6 months</strong>, but you'll have <strong>up to a full year</strong> to finish your assignments.</p>
              <p>You can start booking <strong>event decorator jobs</strong> as soon as you're certified.</p>
            </QuestionAndAnswer>
            <QuestionAndAnswer heading="Can I start my own event decor business after graduating?">
              <p>Yes! The Event Decor course includes an <strong>optional business training</strong> unit that teaches you how to start and grow your own <strong>event decorating business</strong>. You'll learn how to register your own business, write a business plan, market your services and work successfully with any client or vendor. By graduation, you'll have the confidence and tools to launch your career or business.</p>
            </QuestionAndAnswer>
            <QuestionAndAnswer heading="Will I be eligible for discounts on professional software from QC Design School?">
              <p>Yes! As a QC student, you will receive exclusive discounts with our preferred partners. You'll be eligible for exclusive rates for software that can be used for creating floorplans and decor solutions, including 3Dream.net, ViewIT Technologies, PlanningWiz Floor Planner, Places, and more.</p>
            </QuestionAndAnswer>
          </div>
        </div>
      </div>
    </section>
    <GetStartedSection
      title="Ready to Start Your Event Decorating Career?"
      text="Become professionally certified with QC's online event decor training."
      courseCodes={courseCodes}
    />
  </div>
);

export default EventDecorPage;
