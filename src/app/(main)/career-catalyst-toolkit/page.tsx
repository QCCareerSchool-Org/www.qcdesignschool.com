import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import CanvaImage from './canva.jpg';
import DesignFilesImage from './designfiles.jpg';
import HeroImageMobile from './hero-mobile.jpg';
import HeroImage from './hero.jpg';
import styles from './page.module.scss';
import { perks } from './perks';
import videoCallImage from './video-call.jpg';
import { StatsSection } from '../statsSection';
import type { PageComponent } from '@/app/serverComponent';
import { AlertBar } from '@/components/alertBar';
import { BackgroundImage } from '@/components/backgroundImage';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import XIcon from '@/components/icons/briefcase.svg';
import SquareCheckIcon from '@/components/icons/check-square.svg';
import { Subtitle } from '@/components/subtitle';

export const metadata: Metadata = {
  title: 'Career Catalyst Toolkit',
  description: 'Take your design career to new heights with our exclusive Career Catalyst Toolkit package.',
};

const iconHeight = 32;

const CareerCatalystToolkitPage: PageComponent = () => (
  <>
    <AlertBar variant="red"><a href="https://enroll.qcdesignschool.com" className={styles.alertLink}>Limited Availability! <b>Claim Your Spot Now!</b></a></AlertBar>
    <section className="bg-dark text-white text-shadow">
      <BackgroundImage src={HeroImage} mobile={{ src: HeroImageMobile, breakpoint: 'lg' }} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="mb-3"><Subtitle>Exclusive Opportunity</Subtitle></div>
            <h1 className="mb-3">Career Catalyst Toolkit</h1>
            <p className="mb-5">Take your design career to new heights with our exclusive Career Catalyst Toolkit package. This limited-time offer combines personalized expert guidance, premium <i>Canva</i> templates, and four months of complimentary access to top-tier design tools. Available now to a select number of students, the Career Catalyst Toolkit is your gateway to streamlined workflows, enhanced branding, and a competitive edge in the design industry.</p>
            <a href="https://enroll.qcdesignschool.com" className="btn btn-primary me-3">Enroll & Secure Your Spot</a>
            {/* <Link href="#" className="btn btn-outline-light">Learn More</Link> */}
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <h2 className="mb-5 text-center text-lg-start">What's Included in the Career Essentials Kit?</h2>

        <div className="row justify-content-center g-4 g-lg-5 align-items-center">
          <div className="col-6">
            <Image src={videoCallImage} alt="" className={`img-fluid ${styles.roundedImage}`} />
          </div>
          <div className="col-12 col-lg-6">
            <h3 className="h5">Personalized Video Call with an Industry Expert</h3>
            <p>After graduating, unlock tailored insights and strategies to overcome your unique career challenges and seize new opportunities</p>
            <dl className={styles.dl}>
              <dt><span className={styles.iconWrapper}><XIcon height={iconHeight} className={styles.icon} /></span>One-on-One Mentorship</dt><dd>Engage in personalized sessions to receive guidance aligned with your specific career goals and design aspirations.</dd>
              <dt><span className={styles.iconWrapper}><XIcon height={iconHeight} className={styles.icon} /></span>Real-World Strategy Development</dt><dd>Collaborate with experts to formulate strategies that address actual design challenges, enhancing your problem-solving abilities.</dd>
              <dt><span className={styles.iconWrapper}><XIcon height={iconHeight} className={styles.icon} /></span>Actionable Insights</dt><dd>Gain practical knowledge and actionable steps that transcend traditional learning, empowering you to excel in the competitive design landscape.</dd>
            </dl>
          </div>
        </div>

        <hr className="my-5" />

        <div className="row justify-content-center g-4 g-lg-5 align-items-center">
          <div className="col-6 order-lg-2">
            <Image src={DesignFilesImage} alt="" className={`img-fluid ${styles.roundedImage}`} />
          </div>
          <div className="col-12 col-lg-6 order-lg-1">
            <h3 className="h5">Four Months of Complimentary Access to DesignFiles</h3>
            <p>Gain practical experience with professional design software widely used in the industry.</p>
            <dl className={styles.dl}>
              <dt><span className={styles.iconWrapper}><XIcon height={iconHeight} className={styles.icon} /></span>Advanced Design Tools</dt><dd>Create professional 2D and 3D designs with easy drag-and-drop features, detailed rendering, and high-quality product catalogs to bring your concepts to life.</dd>
              <dt><span className={styles.iconWrapper}><XIcon height={iconHeight} className={styles.icon} /></span>Project Management</dt><dd>Streamline your projects with built-in client portals, timelines, and task management. Link all tools and files with detailed team members to ensure smooth and efficient processes.</dd>
              <dt><span className={styles.iconWrapper}><XIcon height={iconHeight} className={styles.icon} /></span>Integrated Invoicing</dt><dd>Simplify your financials with branded invoices, tracking payments, and measuring expenses—all in one platform, thanks to QuickBooks integration.</dd>
            </dl>
          </div>
        </div>

        <hr className="my-5" />

        <div className="row justify-content-center g-4 g-lg-5 align-items-center">
          <div className="col-6">
            <Image src={CanvaImage} alt="" className={`img-fluid ${styles.roundedImage}`} />
          </div>
          <div className="col-12 col-lg-6">
            <h3 className="h5">Exclusive Canva Template Collection</h3>
            <p>Enhance various aspects of your business with our customized Canva templates.</p>
            <dl className={styles.dl}>
              <dt><span className={styles.iconWrapper}><XIcon height={iconHeight} className={styles.icon} /></span>Branded Invoices</dt><dd>Create customized invoices that reflect your brand's identity, presenting a polished and professional image to clients.</dd>
              <dt><span className={styles.iconWrapper}><XIcon height={iconHeight} className={styles.icon} /></span>Social Media Graphics</dt><dd>Strengthen your online presence with engaging, professionally designed graphics optimized for various social media platforms.</dd>
              <dt><span className={styles.iconWrapper}><XIcon height={iconHeight} className={styles.icon} /></span>Customizable Contracts</dt><dd>Personalize your business with easy-to-use contract templates that can be tailored to fit your specific needs and ensure professionalism.</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 col-xl-7 text-center">
            <h2 className="mb-4 h4">Take Your Career to the Next Level</h2>
            <Link href="https://enroll.qcdesignschool.com" className={`btn btn-lg btn-primary ${styles.button}`}>
              <span className={styles.checkIcon}>
                <SquareCheckIcon width={20} />
                &nbsp;
                Enroll Now
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <StatsSection />
    <GoogleReviewSection className="bg-light" />
    <section>
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-9 col-xl-8 col-xxl-7 text-lg-center">
            <h2 className="mb-4">Elevate Your Design Career with the Career Catalyst Toolkit</h2>
            <p className="lead mb-0">Your dedication to design deserves a strategic and impactful approach. With the Career Catalyst Toolkit, you gain access to expert mentorship, premium resources, and comprehensive support designed to turn your aspirations into reality.</p>
          </div>
        </div>
        <div className="row justify-content-center g-5">
          {perks.map((perk, index) => (
            <div className="col-12 col-sm-6 col-lg-4 text-center" key={index}>
              {perk.icon}
              <h4 className="my-4">{perk.title}</h4>
              <p className="mb-0">{perk.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <GetStartedSection
      title="Take the Next Step in Your Design Career"
      text="Don’t miss out on this exclusive Career Catalyst Toolkit offer. Elevate your design career with the tools, expertise, and support you need to thrive in the competitive design industry. Secure your spot now and embark on a journey of unparalleled professional growth."
      buttonText="Enroll Now"
    />
  </>
);

export default CareerCatalystToolkitPage;
