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
import { CourseType } from '@/components/courseType';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { Hero } from '@/components/hero';
import { HeroButtons } from '@/components/hero/heroButtons';
import { CourseJsonLd } from '@/components/jsonLd/course';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';
import { getSeverData } from '@/lib/getData';

export const metadata: Metadata = {
  title: 'Home Staging Course',
  description: 'QC\'s Home Staging course covers staging fundamentals, decluttering, floorplans, a final project, and business strategies to elevate your career.',
  alternates: { canonical: '/online-courses/home-staging' },
};

const testimonialIds = [ 'TD-0001', 'TD-0003', 'TD-0004', 'TD-0006', 'TD-0011', 'TD-0010' ];
const courseCodes: CourseCode[] = [ 'st' ];

const HomeStagingPage: PageComponent = async () => {
  const { countryCode } = await getSeverData();

  return (
    <div className={styles.page}>
      <CourseJsonLd courseCode={courseCodes[0]} showPrice />
      <section className="half-padding-top">
        <div className="container">
          <div className="row justify-content-center g-s">
            <div className="col-12">
              <Hero src={HeroImage} priority objectPosition="100% 0">
                <CourseType className="mb-2 mb-xl-4">ISRP&trade; Certification</CourseType>
                <h1 className="mb-2 mb-xl-4">Home Staging Course</h1>
                <p className="h5 mb-3 mb-xl-5">Become a Certified Home Stager</p>
                <div className="d-flex justify-content-center justify-content-md-start">
                  <HeroButtons courseCodes={courseCodes} />
                </div>
              </Hero>
            </div>
            <div className="col-12 col-lg-6">
              <h2 className="mb-4">Why Choose<br />QC Design School</h2>
              <p className="lead mb-4">With QC's Home Staging certification course, you'll master all the essential skills you need to succeed in this lucrative career path. QC's comprehensive online program covers everything from design fundamentals and color theory to curb appeal and market trends.</p>
              <ul>
                <li>Get started now—our premium Home Staging course is designed to take you from beginner to expert with no previous training required</li>
                <li>Receive personalized feedback and advice on your assignments from our top staging experts</li>
                <li>Join a thriving virtual community to connect with other design industry professionals, and gain exclusive access to bonus materials and expert-led webinars</li>
                <li>Leverage built-in business training and real-world templates to help you launch your career and grow your clientele as a certified home stager</li>
                <li>Enjoy discounts and affiliations with top organizations including DesignFiles, {countryCode === 'CA' && <>Decorators & Designers Association of Canada, </>}Placez, and more</li>
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
              <p>QC's comprehensive Home Staging course will show you how to:</p>
              <ul className="mb-0">
                <li>Develop the skills to enhance your client's home using existing items in the space</li>
                <li>Create color palettes, accessorizing plans, and curb appeal strategies</li>
                <li>Work with a variety of budget types, design requirements and different client personalities</li>
                <li>Create excellent first impressions by decluttering the home and enhancing curb appeal</li>
                <li>Incorporate the right lighting and window treatments to wow potential buyers</li>
                <li>Build your brand and market your new home staging business</li>
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
      <GoogleReviewSection courseCode="st" schemaCourseId="#course" />
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
                <AccordionFAQ heading="How much does a home stager typically earn?" className="mb-3">
                  <p>According to the Home Staging Institute, the average home stager salary is approximately <strong>$51,000 per year*</strong>. However, your actual income can vary depending on factors like your <strong>location, experience level, and the types of staging services you offer</strong>.</p>
                  <p>If you hold a recognized certification—such as the <strong>International Staging and Redesign Professional&trade; (ISRP&trade;)</strong> designation from <strong>QC Design School</strong>—you'll be able to charge higher rates and attract more clients. As you gain experience, you can also increase your prices for consultations, full staging services, and add-on offerings like color consultations or furniture rentals.</p>
                  <p>Many successful home stagers <strong>expand their income</strong> by offering additional services such as interior decorating or professional organizing. QC offers additional certifications in these areas to help you boost your earning potential. Our <Link href="/contact-us">student support team</Link> is always here to guide you and help you plan your next steps toward success!</p>
                  <p className="small">* &ldquo;<a href="https://homestaginginstitute.com/how-much-do-home-stagers-make" target="_blank" rel="noreferrer">How Much Do Home Stagers Make</a>.&rdquo; <i>Home Staging Institute.</i> June 21, 2023</p>
                </AccordionFAQ>
                <AccordionFAQ heading="Do I need a degree to become a home stager?" className="mb-3">
                  <p>No, you do not need a degree or license to work as a professional home stager! However, clients often look for proof that you have professional training.</p>
                  <p>When you complete the <strong>online Home Staging course from QC Design School</strong>, you'll receive the <strong>ISRP&trade; certification</strong>, which gives you instant credibility in the industry. This certification shows potential clients and employers that you have the skills and knowledge to deliver high-quality staging results.</p>
                </AccordionFAQ>
                <AccordionFAQ heading="How long does it take to become a home stager?" className="mb-3">
                  <p>You can become a certified home stager in <strong>as little as 3 to 6 months</strong> with QC Design School's <strong>flexible, self-paced online training</strong> and begin booking clients right away.</p>
                  <p>Need more flexibility? You'll have up to <strong>a full year</strong> to finish your home staging course, so you can learn at your own pace—even while working or managing a busy schedule.</p>
                </AccordionFAQ>
                <AccordionFAQ heading="Will I be eligible to join professional associations when I graduate from QC Design School?" className="mb-3">
                  <p>Yes! Graduating from QC Design School's Home Staging course qualifies you to apply for membership with various professional home staging organizations, including:</p>
                  <ul>
                    <li><strong>Real Estate Staging Association (RESA)</strong></li>
                    <li><strong>International Association of Home Staging Professionals (IAHSP)</strong></li>
                    <li>Other local and national design or real estate associations</li>
                  </ul>
                  <p>These memberships can help you <strong>network, build credibility, and stay updated</strong> on the latest trends and best practices in the staging industry.</p>
                </AccordionFAQ>
              </div>
            </div>
          </div>
        </div>
      </section>
      <GetStartedSection
        title="Ready to Start Your Career as a Home Stager?"
        text="Become professionally certified with QC's online home staging training."
        courseCodes={courseCodes}
      />
    </div>
  );
};

export default HomeStagingPage;
