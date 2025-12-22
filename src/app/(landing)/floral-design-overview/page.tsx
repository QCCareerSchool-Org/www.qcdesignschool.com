import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { OutlineSection } from './_outlineSection';
import { CertificationSection } from './certificationSection';
import { CourseCardsSection } from './courseCardsSection';
import HeroImage from './hero.jpg';
import styles from './page.module.scss';
import RedBadge from './price-badge-$500.png';
import ShieldIcon from './shield.svg';
import { TutorSection } from './tutorSection';
import WhatYoullLearnImage from './what-youll-learn.jpg';
import WhyQCImage from './why-qc.jpg';
import { QuestionAndAnswer } from '../../(main)/faq/questionAndAnswer';
import { Header } from '../_components/header';
import type { PageComponent } from '@/app/serverComponent';
import { CourseType } from '@/components/courseType';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { Hero } from '@/components/hero';
import { CourseJsonLd } from '@/components/jsonLd/course';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import { SAFPartnerSection } from '@/components/safPartnerSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';
import { getSeverData } from '@/lib/getData';

export const metadata: Metadata = {
  title: 'Floral Design Course',
  description: 'QC\'s Floral Design certification course offers a comprehensive curriculum covering design principles, advanced techniques, and bouquet designs.',
  alternates: { canonical: '/online-courses/floral-design' },
};

const testimonialIds = [ 'TD-0026', 'TD-0020', 'TD-0027', 'TD-0024', 'TD-0019', 'TD-0025' ];
const courseCodes: CourseCode[] = [ 'fd' ];
const enrollUrl = 'https://enroll.qcdesignschool.com/floral-design-overview?c=fd';

const FloralDesignPage: PageComponent = async props => {
  const { countryCode } = await getSeverData(props.searchParams);

  return (
    <>
      <CourseJsonLd courseCode="fd" />
      <div className={styles.page}>
        <Header logoLink buttonContent={<>Enroll<span className="d-none d-sm-inline"> Now</span></>} buttonHref={enrollUrl} buttonClass={`btn btn-primary btn-md`} buttonAlwaysVisible={true} />
        <section className="half-padding-top bg-light">
          <div className="container">
            <div className="row justify-content-center g-s">
              <div className="col-12">
                <Hero src={HeroImage} priority objectPosition="100% 0">
                  <CourseType className="mb-2 mb-xl-4">IFDP&trade; Certification</CourseType>
                  <h1 className="mb-2 mb-xl-4">Floral Design Course</h1>
                  <p className="h5 mb-2">Become a Certified Floral Designer</p>
                  <p className="">Enroll with Our Lowest Tuition Ever</p>
                  <div className="d-block d-md-none text-center mb-4">
                    <Image src={RedBadge} alt="" style={{ width: '35%', height: 'auto' }} />
                  </div>
                </Hero>
                <Image src={RedBadge} alt="" className="position-absolute d-none d-md-block" style={{ bottom: '22.7rem', right: '3.5rem', width: '17%', height: 'auto' }} />
              </div>
              <div className="col-12 col-md-10 col-lg-8 text-center">
                <p className="mb-4">This is your opportunity to earn a professional certification and kickstart the floral design career you&rsquo;ve been dreaming of. Learn directly from award-winning floral experts and turn your passion for flowers into a thriving business. Don&rsquo;t wait&mdash;take the first step toward your future in floral design today!</p>
                <Link href={enrollUrl}><button className="btn btn-primary btn-lg mb-5">Enroll Now</button></Link>
                <p style={{ textTransform: 'uppercase' }} className="mb-0"><ShieldIcon className="me-2" /><strong>21-day</strong> money-back guarantee</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row justify-content-center g-s">
              <div className="col-12 col-lg-6">
                <h2 className="mb-4">Why Choose<br />QC Design School</h2>
                <p className="lead mb-4">QC's online Floral Design certification course provides an extensive curriculum that details everything from fundamental design principles to advanced techniques in decorative arrangements, bouquet designs, and more. This program is your key to mastering the art of floral design and launching a successful career in this thriving sector of the design industry.</p>
                <ul>
                  <li>Get started now—our premium Floral Design course is designed to take you from beginner to expert with no previous training required</li>
                  <li>Receive personalized feedback and advice on your assignments from our top industry experts</li>
                  <li>Join a thriving virtual community to connect with other industry professionals and gain exclusive access to bonus materials</li>
                  <li>Leverage built-in business training and real-world templates to help you launch your career and grow your clientele as a certified Floral Designer</li>
                </ul>
              </div>
              <div className="col-12 col-sm-10 col-md-8 col-lg-6">
                <Image src={WhyQCImage} alt="" className={`img-fluid ${styles.whyQCImage}`} />
              </div>
            </div>
            <div className="text-left mt-4">
              <Link href={enrollUrl}><button className="btn btn-primary btn-lg mb-5 mt-3">Start My Course</button></Link>
            </div>
          </div>
        </section>
        {countryCode !== 'CA' && <SAFPartnerSection />}
        <TestimonialWallSection testimonialIds={testimonialIds} courseCodes={courseCodes} className="bg-light" schemaCourseId="#course" />
        <section>
          <div className="container">
            <div className="row align-items-center justify-content-center g-s">
              <div className="col-12 col-lg-6">
                <h2>Here's What You'll Learn</h2>
                <p>QC's comprehensive Floral Design course will show you how to:</p>
                <ul className="mb-0">
                  <li>Perfect your flower selection, placement and methods to create polished designs</li>
                  <li>Identify and prepare the most common types of flowers to design arrangements clients love</li>
                  <li>Work with a variety of budget types, design requirements and different client personalities</li>
                  <li>Master plant care and anatomy to ensure you can create long-lasting designs</li>
                  <li>Build your brand and market your new floral design business</li>
                  <li>Plan and develop a professional portfolio that helps you land new clients</li>
                </ul>
                <div className="text-left">
                  <Link href="https://www.qcdesignschool.com/previews/floral-design/content/index.html" target="blank" rel="noopener noreferrer"><button className="btn btn-primary btn-lg mt-5">Get My Free Lesson Preview</button></Link>
                </div>
              </div>
              <div className="col-12 col-sm-10 col-md-8 col-lg-6">
                <Image src={WhatYoullLearnImage} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
        <CertificationSection />
        <VirtualCommunitySection />
        <GoogleReviewSection courseCode="fd" schemaCourseId="#course" />
        <TutorSection className="bg-light" />
        <OutlineSection />
        <PaymentPlanSection courseCodes={courseCodes} />
        <CourseCardsSection designRestricted={true} />
        <section className="bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <h2 className="text-center mb-4">Frequently Asked Questions</h2>
                <QuestionAndAnswer heading="How much does a floral designer typically earn?">
                  <p>The average floral designer salary is over $37,000 per year*. Your earnings could vary depending on several factors such as your location, level of experience, and whether you work for yourself or in a floral chain or an independent shop. You can increase your income and professional opportunities by enrolling in a <strong>floral design course</strong> that rovides hands-on training and business education. QC Design School's online <strong>Floral Design certification program</strong> prepares you with both creative and entrepreneurial skills to help you succeed faster in the industry.</p>
                  <p className="small">* &ldquo;<a href="http:/ziprecruiter.com/Salaries/What-Is-the-Average-Floral-Design-Salary-by-State" target="_blank" rel="noreferrer">What is the average floral design salary by state</a>.&rdquo; <i>ZipRecruiter.</i> May 2025</p>
                </QuestionAndAnswer>
                <QuestionAndAnswer heading="Do I need a degree or diploma to become a floral designer?">
                  <p>You don't need a license or degree to work as a florist or floral designer. QC's Floral Design course will teach you how to become a floral designer by providing you with personalized feedback and advice from our top industry experts and providing you with business training to help you launch your career. When you graduate from QC Design School's Floral Design course, you will receive a certification and be able to use the designation of International Floral Design Professional&trade; (IFDP&trade;). This prestigious certification showcases your skills and credibility for your clients and colleagues in the floral design industry.</p>
                </QuestionAndAnswer>
                <QuestionAndAnswer heading="How long does it take to become a floral designer">
                  <p>You can become a floral designer in as little as 2 to 6 months! When you take QC's Floral Design course, you can work at your own pace and according to your own schedule. You'll have up to <strong>a full year</strong> to complete your training, giving you the flexibility to study around your personal schedule.</p>
                </QuestionAndAnswer>
                <QuestionAndAnswer heading="Can I start my own floral design or florist shop after graduating?">
                  <p>Yes, absolutely! QC Design School's <strong>Floral Design course</strong> includes an optional <strong>business training unit</strong> that walks you through the process of launching your own floral design business or florist shop. You'll learn how to:</p>
                  <ul>
                    <li>Register your floral business</li>
                    <li>Create a professional business plan</li>
                    <li>Price and package your floral services</li>
                    <li>Market your business both online and offline</li>
                    <li>Build relationships with vendors and clients</li>
                  </ul>
                  <p>With your <strong>IFDP certification</strong> and business training, you'll be ready to start offering services such as custom floral arrangements for weddings, events, retail, or everyday occasions.</p>
                </QuestionAndAnswer>
              </div>
            </div>
          </div>
        </section>
        <GetStartedSection
          title="Ready to Start Your Floral Design Career?"
          text="Become professionally certified with QC's online floral design training."
          courseCodes={courseCodes}
          buttonHref="https://enroll.qcdesignschool.com/floral-design-overview?c=fd"
        />
      </div>
    </>
  );
};

export default FloralDesignPage;
