import type { Metadata } from 'next';
import Image from 'next/image';

import { OutlineSection } from './_outlineSection';
import { CertificationSection } from './certificationSection';
import HeroImage from './hero.jpg';
import styles from './page.module.scss';
import { TutorSection } from './tutorSection';
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

export const metadata: Metadata = {
  title: 'Aging in Place Course',
  description: 'QC Design School\'s online Aging in Place Design course teaches you the aspects of design that matter most to aging clients, such as accessibility and mobility.',
  alternates: { canonical: '/online-courses/aging-in-place' },
};

const testimonialIds = [ 'TD-0002', 'TD-0005', 'TD-0003', 'TD-0004', 'TD-0006', 'TD-0011' ];
const courseCodes: CourseCode[] = [ 'ap' ];

const AgingInPlacePage: PageComponent = () => (
  <div className={styles.page}>
    <section className="half-padding-top">
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="100% 0">
              <CourseType className="mb-2 mb-xl-4">APDP&trade; Certification</CourseType>
              <h1 className="mb-2 mb-xl-4">Aging in Place Course</h1>
              <p className="h5 mb-3 mb-xl-5">Expand Your Home Design Career</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Design School</h2>
            <p className="lead mb-4">With QC's Aging in Place certification course, you'll gain the expertise you need to create safe, stylish and functional living spaces for aging clients. QC's comprehensive online curriculum covers everything from accessible design principles to developing personalized design solutions for your clients. You'll graduate with the skills and expert knowledge you need to stand out in the home design industry.</p>
            <ul>
              <li>Build on your existing design knowledge by expanding your skills and set yourself apart in the design industry</li>
              <li>Receive personalized feedback and advice on your assignments from our top design &amp; decorating experts</li>
              <li>Join a thriving virtual community to connect with other design professionals and gain exclusive access to bonus materials and expert-led webinars</li>
              <li>Leverage built-in business training and real-world templates to help you launch your design career and grow your clientele with aging in place services</li>
              <li>Enjoy discounts and affiliations with top organizations including DesignFiles, Placez, SampleBoard, and more</li>
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
            <p>QC's comprehensive Aging in Place course will show you how to:</p>
            <ul className="mb-0">
              <li>Design a home or living space that's safe and convenient for any client with aging concerns</li>
              <li>Understand common physiological changes, medical conditions, and lifestyle changes people experience as they age</li>
              <li>Work with a variety of budget types, design requirements and different client personalities</li>
              <li>Incorporate decluttering and home transition services into your home design business</li>
              <li>Build your brand and market your new aging in place services</li>
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
    <GoogleReviewSection courseCode="ap" />
    <TutorSection className="bg-light" />
    <VirtualCommunitySection />
    <OutlineSection />
    <CareerEssentialsKitDesignFilesSection />
    <PaymentPlanSection courseCodes={courseCodes} />
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h2 className="text-center mb-4">Frequently Asked Questions</h2>
            <QuestionAndAnswer heading="What is aging in place design?">
              <p><strong>Aging in place design</strong>—sometimes called livable design or universal dsign for aging—is a specialized area of interior design that focuses on creating safe, functional, and accessible living environments for older adults. As an aging in place designer, you'll help seniors to continue <strong>living independently and comfortably in their own homes</strong> as they age, rather than moving to assisted living or care facilities.</p>
              <p>Using principles of <strong>universal design</strong> and <strong>accessibility</strong>, aging in place designers create thoughtful, adaptable spaces that meet the changing physical needs of aging clients—supporting independence, safety, and quality of life.</p>
            </QuestionAndAnswer>
            <QuestionAndAnswer heading="Why is aging in place important?">
              <p><strong>Aging in place is important</strong> because it helps older adults maintain their independence, dignity, and emotional well-being. Older adults who remain in their homes also keep their routines and community ties for a longer period of time, leading to a healthier social life and more flexibility in their caregiving. This approach not only improves quality of life for older adults but also empowers families to support their loved ones in more personalized ways.</p>
            </QuestionAndAnswer>
            <QuestionAndAnswer heading="How much does an aging in place (AIP) designer earn?">
              <p>The average <strong>aging in place designer salary</strong> is approximately <strong>$62,579 per year*</strong>, though earnings vary based on location, experience, services offered, and niche expertise. As demand for accessible design continues to grow with an aging population, <strong>AIP designers are in increasingly high demand</strong>.</p>
              <p>Designers who specialize in aging in place often expand their services to include:</p>
              <ul>
                <li>Home safety consultations</li>
                <li>Accessibility renovations</li>
                <li>Mobility-friendly space planning</li>
                <li>Collaborations with contractors or occupational therapists</li>
              </ul>
              <p className="small">* &ldquo;<a href="https://www.ziprecruiter.com/Salaries/Certified-Aging-In-Place-Specialist-Salary#Yearly" target="_blank" rel="noreferrer">Certified Aging in Place Specialist Salary</a>.&rdquo; <i>Zip Recruiter.</i> May 2025</p>
            </QuestionAndAnswer>
            <QuestionAndAnswer heading="Do I need a degree to become an AIP designer?">
              <p>No college or university degree is required to become an aging in place designer. However, <strong>professional certification will give you a competitive edge</strong> in this growing field.</p>
              <p>QC Design School's <strong>online Aging in Place course</strong> award graduates with the title of <strong>Aging in Place Design Professional (APDP)</strong>. This certification confirms your skills and training in:</p>
              <ul>
                <li>Universal design and accessibility</li>
                <li>Space planning for mobility and safety</li>
                <li>Client communication and consultation</li>
                <li>Aging-related design modifications</li>
              </ul>
              <p>This designation shows clients and employers that you're a <strong>qualified AIP designer</strong> with specialized knowledge.</p>
            </QuestionAndAnswer>
            <QuestionAndAnswer heading="How long does it take to become an AIP designer?">
              <p>You can become a <strong>certified aging in place designer in 4 to 6 months</strong> with QC Design School's flexible, self-paced course. You'll study on your own schedule and have <strong>up to 2 years</strong> to complete your assignments and earn your APDP certification.</p>
              <p>As soon as you graduate, you can start taking on aging in place design clients.</p>
            </QuestionAndAnswer>
            <QuestionAndAnswer heading="Do I need prior experience or training before taking the Aging in Place course?">
              <p>Yes, Aging in Place is considered a specialty course, so QC Design School recommends that you first complete the Interior Design course unless you already have experience and/or training in the design field/</p>
              <p>The Interior Decorating course teaches you essential design skills, while the Aging in Place course builds on that foundation by teaching advanced techniques for designing accessible, senior-friendly environments. If you're new to design, starting with Interior Decorating will ensure you're fully prepared for success in AIP design.</p>
            </QuestionAndAnswer>
          </div>
        </div>
      </div>
    </section>
    <GetStartedSection
      title="Ready to Expand Your Home Design & Decorating Career?"
      text="Become professionally certified with QC's online Aging in Place training."
      courseCodes={courseCodes}
    />
  </div>
);

export default AgingInPlacePage;
