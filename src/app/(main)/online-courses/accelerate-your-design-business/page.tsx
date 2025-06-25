import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { OutlineSection } from './_outlineSection';
import HeroImage from './hero.jpg';
import styles from './page.module.scss';
import WhatYoullLearnImage from './what-youll-learn.jpg';
import WhyQCImage from './why-qc.jpg';
import { QuestionAndAnswer } from '../../faq/questionAndAnswer';
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
import { getData } from '@/lib/getData';
import { getDesignRestricted } from '@/lib/restrictions';

export const metadata: Metadata = {
  title: 'Accelerate Your Business',
  description: 'Jumpstart your career with QC\'s "Accelerate Your Business" workshop, covering branding, online presence, portfolio development, and project management.',
  alternates: { canonical: '/online-courses/accelerate-your-design-business' },
};

const testimonialIds = [ 'TD-0006', 'TD-0008', 'TD-0009', 'TD-0010', 'TD-0011', 'TD-0012' ];
const courseCodes: CourseCode[] = [ 'eb' ];

const AccelerateYourBusinessPage: PageComponent = async () => {
  const { countryCode, provinceCode } = await getData();
  const designRestricted = getDesignRestricted(countryCode, provinceCode);

  return (
    <div className={styles.page}>
      <section className="half-padding-top">
        <div className="container">
          <div className="row justify-content-center g-s">
            <div className="col-12">
              <Hero src={HeroImage} priority objectPosition="100% 0">
                <CourseType className="mb-2 mb-xl-4">Specialty Training</CourseType>
                <h1 className="mb-2 mb-xl-4">Accelerate Your Business</h1>
                <p className="h5 mb-3 mb-xl-5">Take Your Design Business to the Next Level</p>
                <div className="d-flex justify-content-center justify-content-md-start">
                  <HeroButtons courseCodes={courseCodes} />
                </div>
              </Hero>
            </div>
            <div className="col-12 col-lg-6">
              <h2 className="mb-4">Why Choose<br />QC Design School</h2>
              <p className="lead mb-4">QC's Accelerate Your Business online training provides you with the tools and expertise you need to take your design business to the next level. You'll study advanced marketing techniques and business strategies including search engine optimization, website development and client acquisition so that you're ready to scale a thriving business.</p>
              <ul>
                <li>Learn how to grow and expand your existing interior decorating and design business&mdash;perfect for design entrepreneurs</li>
                <li>Recieve personalized feedback and advice on your assignments from our top design-industry experts</li>
                <li>Join a thriving virtual community to connect with other design professionals and gain exclusive access to bonus materials and expert-led webinars</li>
                <li>Leverage built-in business training and real-world templates to help you launch your design career and grow your clientele</li>
                <li>Enjoy discounts and affiliations with top organizations including DesignFiles, the Decorators & Designers Association of Canada, Placez and more</li>
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
              <p>QC's Accelerate Your Business training will show you how to:</p>
              <ul className="mb-0">
                <li>Build your customer personas and create a brand that speaks to potential clients</li>
                <li>Critique and improve your online presence and communication</li>
                <li>Work with a variety of budget types, design requirements and different client personalities</li>
                <li>Build your brand and market yourself effectively both online and offline</li>
                <li>Master effective project and time management techniques</li>
                <li>Plan and develop a professional design portfolio that helps you land new clients and stand out from the competition</li>
                <li>Bonus! Learn how to use professional design software with step-by-step video tutorials featuring <i>DesignFiles</i></li>
              </ul>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-6">
              <Image src={WhatYoullLearnImage} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <OutlineSection className="bg-light" />
      <VirtualCommunitySection />
      <GoogleReviewSection courseCode="eb" />
      <CareerEssentialsKitDesignFilesSection />
      <PaymentPlanSection courseCodes={courseCodes} />
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2 className="text-center mb-4">Frequently Asked Questions</h2>
              <QuestionAndAnswer heading="What will QC's Accelerate Your Business course teach me?">
                <p>QC Design School's <strong>Accelerate Your Business</strong> course is designed to help you launch and grow your own <strong>interior {designRestricted ? 'decorating' : 'design'} business</strong> with confidence. Whether you're just getting started or want to refine your existing business strategy, this course gives you the tools you need to succeed.</p>
                <p>You'll learn how to:</p>
                <li><strong>Register your interior {designRestricted ? 'decorating' : 'design'} business</strong></li>
                <li>Develop your <strong>brand identity</strong></li>
                <li>Build <strong>marketing strategies</strong> and promotions</li>
                <li>Use <strong>project management tools</strong> to stay organized</li>
                <li>Communicate effectively with clients and vendors</li>
                <li>Attract and retain long-term clients</li>
                <p>This course is built with input from <strong>design industry experts and business professionals</strong>, so you're learning strategies that actually work in the real world.</p>
              </QuestionAndAnswer>
              <QuestionAndAnswer heading="Do I need a degree to start my own interior design business?">
                <p><strong>No, you don't need a degree</strong> to start a successful interior design business. QC Design School provides a full pathway from <strong>beginner to business owner</strong> with its online interior design and business training courses.</p>
                <p>You can:</p>
                <ul>
                  <li>Take the <strong><Link href={`/online-courses/interior-${designRestricted ? 'decorating' : 'design'}`}>Interior {designRestricted ? 'Decorating' : 'Design'} Course</Link></strong> to learn how to design beautiful, functional spaces.</li>
                  <li>Enroll in the <strong>Accelerate Your Business Course</strong> to learn how to:
                    <ul>
                      <li>Launch and register your business</li>
                      <li>Create a professional <strong>business plan</strong></li>
                      <li>Market your services and work with real clients</li>
                    </ul>
                  </li>
                </ul>
                <p>This combination gives you both the <strong>creative skills and business knowledge</strong> needed to build your dream career in the interior design industry.</p>
                <p>Our <Link href="/contact-us">Student Support Team</Link> can tell you how to combine other courses in QC Design School to create the business of your dreams.</p>
              </QuestionAndAnswer>
              <QuestionAndAnswer heading="Can this course help me grow an existing design business?">
                <p>Yes! If you already run a design-related business—whether in <strong>interior {designRestricted ? 'decorating' : 'design'}, home staging, professional organizing, or color consulting</strong>—QC's <strong>Accelerate Your Business course</strong> can help you scale it more effectively.</p>
                <p>You'll learn how to:</p>
                <ul>
                  <li>Identify new <strong>target markets</strong></li>
                  <li>Improve <strong>client acquisition and retention</strong></li>
                  <li>Set and adjust your <strong>pricing strategies</strong></li>
                  <li>Streamline your <strong>workflow and client process</strong></li>
                  <li>Optimize your <strong>marketing and branding efforts</strong></li>
                </ul>
                <p>This course is ideal for design professionals looking to <strong>grow their revenue, expand services</strong>, or build a team. Our <Link href="/contact-us">Student Support Team</Link> can also help you budle this course with additional design certifications for a more competitive edge.</p>
              </QuestionAndAnswer>
            </div>
          </div>
        </div>
      </section>
      <GetStartedSection
        title="Ready to Expand Your Home Design & Decorating Business?"
        text="Take QC's Accelerate Your Business training"
        courseCodes={courseCodes}
      />
    </div>
  );
};

export default AccelerateYourBusinessPage;
