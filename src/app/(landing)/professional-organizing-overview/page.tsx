import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import RedBadge from './998-price-badge.png';
import { OutlineSection } from './_outlineSection';
import { CertificationSection } from './certificationSection';
import { CourseCardsSection } from './courseCardsSection';
import styles from './page.module.scss';
import HeroImage from './po-hero.jpg';
import ShieldIcon from './shield.svg';
import { TutorSection } from './tutorSection';
import WhatYoullLearnImage from './what-youll-learn.jpg';
import WhyQCImage from './why-qc.jpg';
import { QuestionAndAnswer } from '../../(main)/faq/questionAndAnswer';
import { Header } from '../_components/header';
import type { PageComponent } from '@/app/serverComponent';
import { CareerEssentialsKitDesignFilesSection } from '@/components/careerEssentialsKitDesignFilesSection';
import { CourseType } from '@/components/courseType';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { Hero } from '@/components/hero';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';

export const metadata: Metadata = {
  title: 'Professional Organizing Course',
  description: 'QC\'s Professional Organizing certification course covers decluttering, personalized solutions, and client strategies to jumpstart your career.',
  alternates: { canonical: '/online-courses/professional-organizing' },
};

const testimonialIds = [ 'TD-0002', 'TD-0012', 'TD-0021', 'TD-0022', 'TD-0003', 'TD-0011' ];
const courseCodes: CourseCode[] = [ 'po' ];
const enrollUrl = 'https://enroll.qcdesignschool.com/professional-organizig-overview?c=po';

const ProfessionalOrganizingPage: PageComponent = () => (
  <div className={styles.page}>
    <Header logoLink buttonContent="Enroll Now" showBanner buttonHref={enrollUrl} buttonClass={`btn btn-primary btn-md`} buttonAlwaysVisible={true} />
    <section className="half-padding-top bg-light">
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="100% 0">
              <CourseType className="mb-2 mb-xl-4">AIOP&trade; Certification</CourseType>
              <h1 className="mb-2 mb-xl-4">Professional Organizing Course</h1>
              <p className="h5 mb-2">Start Your Journey as a Professional Organizer</p>
              <p className="">Enroll with Our Lowest Tuition Ever</p>
              <div className="d-block d-md-none text-center mb-4">
                <Image src={RedBadge} alt="" style={{ width: '35%', height: 'auto' }} />
              </div>
            </Hero>
            <Image src={RedBadge} alt="" className="position-absolute d-none d-md-block" style={{ bottom: '24.3rem', right: '3.5rem', width: '17%', height: 'auto' }} />
          </div>
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <p className="mb-4">This is your chance to earn a professional certification and launch the organizing career you&rsquo;ve always dreamed of. Join over 45,000 QC students and graduates worldwide who have turned their passion for organizing and design into thriving businesses. Don&rsquo;t wait&mdash;take the first step toward your future as a professional organizer today!</p>

            <Link href={enrollUrl}><button className="btn btn-primary btn-lg mb-5">Enroll Now</button></Link>

            <p style={{ textTransform: 'uppercase' }} className="mb-0"><ShieldIcon className="me-2" /><strong>21-day</strong> money-back guarantee</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s mb-4">
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Design School</h2>
            <p className="lead mb-4">QC's Professional Organizing certification course will jumpstart your career with an in-depth online curriculum covering everything from decluttering techniques and personalized organizing solutions to strategies for working with clients. QC's comprehensive training program will prepare you to design beautiful and organized spaces that transform your clients' lives.</p>
            <ul>
              <li>Get started now—our premium Professional Organizing course is designed to take you from beginner to expert  with no previous training required</li>
              <li>Receive personalized feedback and advice on your assignments from our top design-industry experts</li>
              <li>Join a thriving virtual community to connect with other design industry professionals and gain exclusive access to bonus material and expert-led webinars</li>
              <li>Leverage built-in business training and real-world templates to help you launch your career and grow your clientele as an Advanced International Organizing Professional™ (AIOP)™</li>
              <li>Enjoy discounts and affiliations with top organizations including the American Society of Professional Organizers, DesignFiles, and more</li>
            </ul>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 mb-2">
            <Image src={WhyQCImage} alt="" className={`img-fluid ${styles.whyQCImage}`} />
          </div>
        </div>
        <div className="text-left">
          <Link href={enrollUrl}><button className="btn btn-primary btn-lg mb-5">Start My Course</button></Link>
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
    <GoogleReviewSection courseCode="po" />
    <TutorSection className="bg-light" />
    <OutlineSection />
    <CareerEssentialsKitDesignFilesSection />
    <PaymentPlanSection courseCodes={courseCodes} />
    <CourseCardsSection designRestricted={true} />
    <section className="bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h2 className="text-center mb-4">Frequently Asked Questions</h2>
            <QuestionAndAnswer heading="What will I learn in QC Design School's Professional Organizer course?">
              <p>QC's <strong>online Professional Organizing course</strong> teaches you how to become a professional organizer and launch a successful career in the organizing industry. Through expert-led training, you'll learn to:</p>
              <ul>
                <li>Conduct client consultations and interviews</li>
                <li>Set personalized organizing goals</li>
                <li>Develop tailored decluttering and storage plans</li>
                <li>Create functional, sustainable systems for homes and businesses</li>
                <li>Restore order, efficiency, and peace of mind to your clients' lives</li>
              </ul>
              <p>You'll graduate with the <strong>Advanced International Organizing Professional&trade; (AIOP&trade;)</strong> certification, a respected credential that showcases your expertise and professionalism.</p>
            </QuestionAndAnswer>
            <QuestionAndAnswer heading="How much does a professional organizer make?">
              <p>The <strong>average professional organizer salary</strong> is around <strong>$55,700 per year*</strong>, but your income can grow significantly with experience, specialization, and certifications. Key factors that affect your earnings include:</p>
              <ul>
                <li><strong>Location</strong> and cost of services in your area</li>
                <li><strong>Scope of services</strong> (e.g., home organizing, digital decluttering, business organizing)</li>
                <li><strong>Client demand</strong> and your ability to market your business effectively</li>
              </ul>
              <p>Earning your <strong>AIOP certification</strong> from QC Design School helps you justify higher rates and attract more clients. As you gain experience and confidence, you can increase your prices for consultations, hands-on organizing sessions, and package deals.</p>
              <p>You can also boost your income by expanding into related areas like <Link href="/online-courses/aging-in-place">Aging in Place Design</Link>, <Link href="/online-courses/feng-shui-design">Feng Shui</Link> or <Link href="/online-courses/home-staging">Home Staging</Link>—additional certifications available through QC Design School. Our <Link href="/contact-us">student support team</Link> can tell you how to enhance your career with other QC Design School courses.</p>
              <p className="small">* &ldquo;<a href="https://www.ziprecruiter.com/Salaries/Professional-Organizer-Salary" target="_blank" rel="noreferrer">Professional Organizing Salary</a>.&rdquo; <i>ZipRecruiter.</i> April 20, 2025</p>
            </QuestionAndAnswer>
            <QuestionAndAnswer heading="Do I need a degree to become a professional organizer?">
              <p>You can get all the training you need to become a professional organizer without an expensive university or college degree. With QC Design School's <strong>Professional Organizing online course</strong>, you'll gain all the skills and credentials you need to launch your career and start booking clients in only a few short months.</p>
              <p>Upon completion, you'll earn the Advanced International Organizing Professional <strong>(AIOP) designation</strong>, proving you're professionally trained and ready to help clients transform their spaces and routines.</p>
            </QuestionAndAnswer>
            <QuestionAndAnswer heading="How long does it take to become a professional organizer?">
              <p>You can become a professional organizer in only a few short months! When you take QC Design School's professional organizer course, you work at your own pace and according to your own schedule. Plus, you can start booking clients right away! If you want to take your time, you have up to two full years to complete your lessons and assignments and earn your certification.</p>
            </QuestionAndAnswer>
            <QuestionAndAnswer heading="Will I be eligible to join a professional association when I graduate from QC Design School?">
              <p>Yes! As a student and graduate of QC Design School,  you'll be eligible to join many professional organizations, including the American Society of Professional Organizers and the International Furnishings and Design Association. These organizations offer opportunities to network, collaborate, find employment and learn more about trends and developments in the industry.</p>
            </QuestionAndAnswer>
            <QuestionAndAnswer heading="How do I start a professional organizing business?">
              <p>QC's online Professional Organizing course includes an optional business unit that will teach you how to start a professional organizing business. You'll learn:</p>
              <ul>
                <li>How to legally <strong>register your business</strong></li>
                <li>How to <strong>write a business plan</strong> tailored to professional organizing</li>
                <li>How to <strong>market your services</strong> online and locally</li>
                <li>How to provide exceptional <strong>customer service</strong> and build long-term client relationships</li>
              </ul>
              <p>This unit is perfect for anyone who wants to work independently, build a brand, and earn a steady income as a <strong>self-employed professional organizer</strong>.</p>
            </QuestionAndAnswer>
          </div>
        </div>
      </div>
    </section>
    <GetStartedSection
      title="Ready to Start Your Career in Professional Organizing?"
      text="Become professionally certified with QC's online professional organizing training."
      courseCodes={courseCodes}
    />
  </div>
);

export default ProfessionalOrganizingPage;
