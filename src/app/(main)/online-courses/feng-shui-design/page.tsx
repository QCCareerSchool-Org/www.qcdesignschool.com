import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { OutlineSection } from './_outlineSection';
import { CertificationSection } from './certificationSection';
import HeroImage from './hero.jpg';
import styles from './page.module.scss';
import { TutorSection } from './tutorSection';
import WhatYoullLearnImage from './what-youll-learn.jpg';
import WhyQCImage from './why-qc.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { AccordionFAQ } from '@/components/accordionFAQ';
import { CareerEssentialsKitDesignFilesSection } from '@/components/careerEssentialsKitDesignFilesSection';
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
  title: 'Feng Shui Design Course',
  description: 'QC\'s Feng Shui Design certification teaches essential skills to launch a rewarding career in restoring harmony to clients\' spaces.',
  alternates: { canonical: '/online-courses/feng-shui-design' },
};

const testimonialIds = [ 'TD-0005', 'TD-0002', 'TD-0006', 'TD-0004', 'TD-0008', 'TD-0011' ];
const courseCodes: CourseCode[] = [ 'fs' ];

const FengShuiDesignPage: PageComponent = () => (
  <div className={styles.page}>
    <CourseSchema courseCode={courseCodes[0]} showPrice />
    <section className="half-padding-top">
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
            <p className="lead mb-4">QC's online Feng Shui Design certification course covers all the essential components you need to launch a rewarding career restoring harmony and balance to your clients' spaces. QC's expert-led curriculum prepares you for any project by delving into the core principles of feng shui design including energy flow, color harmony and spatial arrangement.</p>
            <ul>
              <li>Get started now—QC's premium Feng Shui Design course will take you from beginner to expert with no previous training required</li>
              <li>Receive personalized feedback and advice on your assignments from our top industry home design experts</li>
              <li>Join a thriving virtual community to connect with other design industry professionals and gain exclusive access to bonus material and expert-led webinars</li>
              <li>Leverage built-in business training and real-world templates to help you launch your career and grow your clientele as a certified feng shui professional</li>
              <li>Enjoy discounts and affiliations with top organizations including DesignFiles, Placez, and more</li>
            </ul>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <Image src={WhyQCImage} alt="" className={`img-fluid ${styles.whyQCImage}`} />
          </div>
        </div>
      </div>
    </section>
    <TestimonialWallSection testimonialIds={testimonialIds} courseCodes={courseCodes} className="bg-light" schemaCourseId="#course" />
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
    <GoogleReviewSection courseCode="fs" schemaCourseId="#course" />
    <TutorSection className="bg-light" />
    <OutlineSection />
    <CareerEssentialsKitDesignFilesSection />
    <PaymentPlanSection courseCodes={courseCodes} />
    <section>
      <div itemScope itemType="https://schema.org/FAQPage">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2 className="text-center mb-4">Frequently Asked Questions</h2>
              <AccordionFAQ heading="What is feng shui design?" className="mb-3">
                <p><strong>Feng shui design</strong> is an ancient Chinese philosophy that focuses on balancing and harmonizing your environment to promote well-being, success, and positive energy. Feng shui applies principles of energy flow (chi), spatial arrangement, and the five elements (wood, fire, earth, metal, water) to enhance everyday living. The role of a feng shui design consultant is to help clients align their homes and workspaces with these principles to improve specific areas of life—such as <strong>health, wealth, relationships, and career</strong>.</p>
                <p>Whether your clients want a more peaceful home, a prosperous business setting, or an energy-balanced office, your knowledge of feng shui can help transform their spaces—and their lives.</p>
              </AccordionFAQ>
              <AccordionFAQ heading="How much does a feng shui consultant typically earn?" className="mb-3">
                <p>On average, a <strong>feng shui consultant salary</strong> is approximately <strong>$41,232 per year*</strong>. Your income may vary depending on where you live and your level of experience. You can increase your earnings by <strong>offering additional design services</strong> such as interior decorating or professional organizing. These combined offerings are especially attractive to clients undergoing home renovations or life transitions.</p>
                <p>Ask QC's <Link href="/contact-us">Student Support Team</Link> how to enhance your career with additional training in <strong>interior decorating</strong> or <strong>professional organizing</strong>.</p>
                <p className="small">* &ldquo;<a href="https://www.ziprecruiter.com/Salaries/Feng-Shui-Practitioer-Salary#Yearly" target="_blank" rel="noreferrer">Feng Shui Practitioner Salary</a>.&rdquo; <i>ZipRecruiter.</i> May 2025</p>
              </AccordionFAQ>
              <AccordionFAQ heading="Do I need a degree to become a feng shui consultant?" className="mb-3">
                <p>No, a license or degree is <i>not</i> required to work as a feng shui design consultant. However, professional training and certification give you the credibility clients are looking for. When you graduate from QC Design School's online Feng Shui Design course, you will receive a certification that designates you as an Advanced Feng Shui Design Professional (AFDP). Your certification will confirm that you have all the skills and knowledge required to create functional and comfortable homes.</p>
              </AccordionFAQ>
              <AccordionFAQ heading="How long does it take to become a feng shui consultant?" className="mb-3">
                <p>You can become a feng shui consultant in just two to six months! The program is entirely self paced, allowing you to work on your own schedule. You'll have <strong>up to a year</strong> to finish your assignments and earn your Advanced Feng Shui Design Professional (AFDP) title.</p>
              </AccordionFAQ>
              <AccordionFAQ heading="Can I start my own feng shui consulting business after graduating?" className="mb-3">
                <p>Absolutely! QC Design School's Feng Shui Design course includes an optional business unit that teaches you everything you need to launch your own successful consulting practice. You'll learn how to:</p>
                <ul>
                  <li>Register your business</li>
                  <li>Write a business plan</li>
                  <li>Price and package your feng shui services</li>
                  <li>Market yourself online so clients searching &ldquo;feng shui consultant near me&rdquo; can find and hire you</li>
                </ul>
                <p>You'll also gain access to <strong>exclusive discounts on professional software</strong>, business templates, and resources to help you build your brand and get your first clients.</p>
              </AccordionFAQ>
            </div>
          </div>
        </div>
      </div>
    </section>
    <GetStartedSection
      title="Ready to Start Your Career as a Feng Shui Designer?"
      text="Become professionally certified with QC's online feng shui design training."
      courseCodes={courseCodes}
    />
  </div>
);

export default FengShuiDesignPage;
