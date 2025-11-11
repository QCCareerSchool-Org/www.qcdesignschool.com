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
import type { GenerateMetadata, PageComponent } from '@/app/serverComponent';
import { CareerEssentialsKitDesignFilesSection } from '@/components/careerEssentialsKitDesignFilesSection';
import { CourseSchema } from '@/components/courseSchema';
import { CourseType } from '@/components/courseType';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { Hero } from '@/components/hero';
import { HeroButtons } from '@/components/hero/heroButtons';
import { VideoPopup } from '@/components/marketingVideo';
import { DesignPartnerSection } from '@/components/partners/designPartnerSection';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';
import { getData } from '@/lib/getData';
import { getDesignRestricted } from '@/lib/restrictions';

export const generateMetadata: GenerateMetadata = async () => {
  const { countryCode, provinceCode } = await getData();

  const designRestricted = getDesignRestricted(countryCode, provinceCode);

  return {
    title: `Interior ${designRestricted ? 'Decorating' : 'Design'} Course`,
    description: 'QC\'s Interior Decorating course covers design fundamentals, styles, lighting, floorplans, a final project and business strategies to launch your career.',
    alternates: { canonical: '/online-courses/interior-decorating' },
  };
};

const testimonialIds = [ 'TD-0006', 'TD-0008', 'TD-0009', 'TD-0010', 'TD-0011', 'TD-0017' ];
const courseCodes: CourseCode[] = [ 'i2' ];

const InteriorDecoratingPage: PageComponent = async () => {
  const { countryCode, provinceCode } = await getData();

  const designRestricted = getDesignRestricted(countryCode, provinceCode);

  return (
    <div className={styles.page}>
      <Suspense><CourseSchema courseCode={courseCodes[0]} /></Suspense>
      <section className="half-padding-top">
        <div className="container">
          <div className="row justify-content-center g-s">
            <div className="col-12">
              <Hero src={HeroImage} priority objectPosition="100% 0">
                <CourseType className="mb-2 mb-xl-4">IDDP&trade; Certification</CourseType>
                <h1 className="mb-2 mb-xl-4">Interior {designRestricted ? 'Decorating' : 'Design'} Course</h1>
                <p className="h5 mb-3 mb-xl-5">Become a Professional Interior {designRestricted ? 'Decorator' : 'Designer'}</p>
                <div className="d-flex justify-content-center justify-content-md-start">
                  <HeroButtons courseCodes={courseCodes} />
                </div>
              </Hero>
            </div>
            <div className="col-12 col-lg-6">
              <h2 className="mb-4">Why Choose<br />QC Design School</h2>
              <p className="lead mb-4">QC's online Interior {designRestricted ? 'Decorating' : 'Design'} certification course provides the most comprehensive training available to ensure your success in the home design industry. You'll master everything from color theory and space planning to client communication and design execution so that you're fully equipped to thrive in this dynamic field. </p>
              <ul>
                <li>Get started now—our premium interior {designRestricted ? 'decorating' : 'design'} course is designed to take you from beginner to expert with no previous training required</li>
                <li>Receive personalized feedback and advice on your assignments from our top design-industry experts</li>
                <li>Join a thriving virtual community to connect with other {designRestricted ? 'decorators' : 'designers'}, gain exclusive access to bonus materials and join free, expert-led webinars</li>
                <li>Leverage built-in business training and real-world templates to help you launch your design career and grow your clientele as a professional interior {designRestricted ? 'decorator' : 'designer'}</li>
                <li>Enjoy discounts and affiliations with top organizations including {countryCode === 'CA' && <>Decorators & Designers Association of Canada, </>}{countryCode === 'US' && <>Design Society of America, </>}DesignFiles, Placez and more</li>
              </ul>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 d-flex align-items-center">
              <VideoPopup
                video={{
                  name: 'QC Marketing Video - Interior Decorating Course Page',
                  width: 1280,
                  height: 720,
                  source: {
                    src: 'https://51d9ccad7be11d8ada71-aeafba698c87c1173d616904e85b2e3e.ssl.cf1.rackcdn.com/design-marketing-video.mp4',
                    type: 'video/mp4',
                  },
                }}
              >
                <Image src={WhyQCImage} alt="" className={`img-fluid ${styles.whyQCImage}`} />
              </VideoPopup>
            </div>
          </div>
        </div>
      </section>
      <DesignPartnerSection countryCode={countryCode} />
      <TestimonialWallSection testimonialIds={testimonialIds} courseCodes={courseCodes} className="bg-light" />
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-center g-s">
            <div className="col-12 col-lg-6">
              <h2>Here's What You'll Learn</h2>
              <p>QC's comprehensive Interior {designRestricted ? 'Decorating' : 'Design'} course will show you how to:</p>
              <ul className="mb-0">
                <li>Develop a unique vision and create custom interiors from the ground up</li>
                <li>Prepare designs involving floor plans, wall treatments, furniture placement and more</li>
                <li>Work with a variety of budget types, design requirements and different client personalities</li>
                <li>Master the nuances of color theory to create stunning designs for clients</li>
                <li>Feel confident using various design styles including Southwestern and Art Deco</li>
                <li>Build your brand and market your new home design & decorating business</li>
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
      <GoogleReviewSection courseCode="i2" />
      <TutorSection className="bg-light" />
      <OutlineSection designRestricted={designRestricted} />
      <CareerEssentialsKitDesignFilesSection />
      <PaymentPlanSection courseCodes={courseCodes} />
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2 className="text-center mb-4">Frequently Asked Questions</h2>
              <QuestionAndAnswer heading="Interior decorator vs. an interior designer: what's the difference?">
                <p>If you're considering a career in design, it's essential to understand the key differences between an interior decorator and an interior designer.</p>
                <p>An interior decorator focuses on the visual appearance and ambiance of a space. Decorators work with color palettes, textiles, lighting, furniture, and accessories to enhance the aesthetic of homes or commercial environments. They do not typically make structural changes.</p>
                <p>In contrast, an interior designer will focus on the visual appeal of a space and may collaborate with architects and engineers to plan structural layouts. This means that interior designers often require knowledge of building codes and spatial planning. </p>
                <p>Whether you aspire to become an interior decorator or designer, QC Design School's online Interior {designRestricted ? 'Decorating' : 'Design'} course equips you with the skills and knowledge to build a successful, rewarding career. You'll master the elements and principles of design, color theory, textiles, furniture selection, and space planning to create stunning, functional interiors your clients will love.</p>
              </QuestionAndAnswer>
              <QuestionAndAnswer heading={`How much does an interior ${designRestricted ? 'decorator' : 'designer'} earn?`}>
                <p>According to the Bureau of Labor Statistics, the average interior {designRestricted ? 'decorator' : 'designer'} salary is typically around $68,530 per year.* Your earnings will vary based on experience, location and services offered. Earning your professional certification from QC Design School demonstrates your expertise and credibility so that you can charge higher rates. The global design market was valued at $747.75 billion in 2024 and is expected to grow to over $1 trillion by 2032. You can be part of that industry and earn a salary as an interior {designRestricted ? 'decorator' : 'designer'} in less than a year!</p>
                <p className="small">* <a href="https://www.bls.gov/ooh/arts-and-design/interior-designers.htm" target="_blank" rel="noreferrer">Occupational Outlook Handbook</a>. <i>U.S. Bureau of Labor Statistics.</i> April 2025</p>
              </QuestionAndAnswer>
              <QuestionAndAnswer heading={`Do I need a license or degree to become an interior ${designRestricted ? 'decorator' : 'designer'}?`}>
                <p>You don't need a license or an expensive university degree to be successful in the design industry. Instead, you can train online and start attracting clients and generating income in a matter of months!</p>
                <p>QC Design School's interior {designRestricted ? 'decorating' : 'design'} course teaches you how to become an interior {designRestricted ? 'decorator' : 'designer'} without a degree. When you graduate, you'll receive the International Design and Decorating Professional (IDDP) certificate—a respected credential that demonstrates your expertise to clients and employers alike.</p>
              </QuestionAndAnswer>
              <QuestionAndAnswer heading={`How long does it take to become an interior ${designRestricted ? 'decorator' : 'designer'}?`}>
                <p>With QC's flexible online interior {designRestricted ? 'decorating' : 'design'} course, you can learn at your own pace. Many students complete the program in just 2 to 6 months, though you'll have up to 2 years to finish. Whether you're balancing a busy schedule or studying full-time, our course allows you to start your new career entirely on your terms.</p>
              </QuestionAndAnswer>
              <QuestionAndAnswer heading="Will I be eligible to join a professional association when I graduate from QC Design School?">
                <p>Absolutely. After graduating from QC Design School's online interior {designRestricted ? 'decorating' : 'design'} course, you will be eligible to apply for membership with top industry organizations, including {countryCode === 'CA' ? <>the Decorators and Designers Association of Canada,</> : <>Design Society of America (DSA)</>} and the Interior Design Society (IDS).</p>
                <p>These memberships can enhance your credibility, expand your professional network, and give you access to exclusive resources, job boards, and continuing education opportunities. Plus, as a QC Design School student, you'll have access to exclusive discounts with our preferred partners, including design software options like DesignFiles and SampleBoard.</p>
              </QuestionAndAnswer>
            </div>
          </div>
        </div>
      </section>
      <GetStartedSection
        title={`Ready to Start Your Interior ${designRestricted ? 'Decorating' : 'Design'} Career?`}
        text={`Become professionally certified with QC's online interior ${designRestricted ? 'decorating' : 'design'} training.`}
        courseCodes={courseCodes}
      />
    </div>
  );
};

export default InteriorDecoratingPage;
