import type { Metadata } from 'next';
import Image from 'next/image';

import CanvaImage from './canva.png';
import DesignFilesImage from './design-files.png';
import HeroImageMobile from './hero-mobile.jpg';
import HeroImage from './hero.jpg';
import styles from './page.module.scss';
import { perks } from './perks';
import ApertureIcon from './sectionIcons/aperture.svg';
import LayerIcon from './sectionIcons/layer.svg';
import LineChartIcon from './sectionIcons/line-chart.svg';
import LineCheckIcon from './sectionIcons/line-check.svg';
import ListCheckIcon from './sectionIcons/list-check.svg';
import MoneyIcon from './sectionIcons/money.svg';
import PenIcon from './sectionIcons/pen.svg';
import TriangleIcon from './sectionIcons/shape-triangle.svg';
import TrophyIcon from './sectionIcons/trophy.svg';
import WhyQCImage from './why-qc.png';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { Subtitle } from '@/components/subtitle';

export const metadata: Metadata = {
  title: 'Career Essentials Kit',
  alternates: { canonical: '/career-essentials-kit' },
};

const iconHeight = 32;

const CareerCatalystToolkitPage: PageComponent = () => (
  <>
    <section className="bg-dark text-white text-shadow">
      <BackgroundImage src={HeroImage} mobile={{ src: HeroImageMobile, breakpoint: 'lg' }} />
      <div className="container">
        <div className="row">
          <div className="col-10 col-lg-6">
            <div className="mb-3"><Subtitle>Elevate Your Design Career</Subtitle></div>
            <h1 className="mb-3">Unlock Your Exclusive Career Essentials Kit Today!</h1>
            <p className="mb-0">Enhance your professional journey with industry-leading tools, premium templates, and professional software—all complimentary when you enroll at QC Design School.</p>
          </div>
        </div>
      </div>
    </section>
    <section id="whats-included">
      <div className="container">
        <div className="row justify-content-center g-4 g-lg-5 align-items-center">
          <div className="col-6">
            <Image src={WhyQCImage} alt="" className={`img-fluid ${styles.roundedImage}`} />
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-5">Why QC Design School?</h2>
            <h5>Ready to take your design career to the next level?</h5>
            <p>Whether you're into interior design, landscape design, or organizing, QC Design School gives you the education and tools to succeed. When you enroll, you'll also get our exclusive <b>Career Essentials Kit</b> — packed with everything you need to streamline your workflow and build your brand.</p>
            <dl className={styles.dl}>
              <dt><span className={styles.iconWrapper}><LineCheckIcon height={iconHeight} width={iconHeight} className={styles.icon} /></span>Simplify Your Workflow</dt><dd>Access tools and templates that save time and keep your projects organized.</dd>
              <dt><span className={styles.iconWrapper}><LineChartIcon height={iconHeight} width={iconHeight} className={styles.icon} /></span>Elevate Your Professional Brand</dt><dd>Present polished, professional designs that impress clients and set you apart.</dd>
              <dt><span className={styles.iconWrapper}><TrophyIcon height={iconHeight} width={iconHeight} className={styles.icon} /></span>Gain a Competitive Edge</dt><dd>Use industry-leading resources to stay ahead and stand out in a crowded market.</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-light">
      <div className="container">
        <h2 className="mb-5 text-center">What's Included in the Career Essentials Kit?</h2>
        <div className="row justify-content-center g-4 g-lg-5 align-items-center" id="designfiles">
          <div className="col-6 order-lg-2">
            <Image src={DesignFilesImage} alt="" className={`img-fluid ${styles.roundedImage}`} />
          </div>
          <div className="col-12 col-lg-6 order-lg-1">
            <h3 className="h5">Four Months of Complimentary Access to DesignFiles</h3>
            <p>Gain practical experience with professional design software widely used in the industry.</p>
            <dl className={styles.dl}>
              <dt><span className={styles.iconWrapper}><PenIcon height={iconHeight} width={iconHeight} className={styles.icon} /></span>Advanced Design Tools</dt><dd>Create professional 2D and 3D designs with easy drag-and-drop features, detailed rendering, and high-quality product catalogs to bring your concepts to life.</dd>
              <dt><span className={styles.iconWrapper}><LayerIcon height={iconHeight} width={iconHeight} className={styles.icon} /></span>Project Management</dt><dd>Streamline your projects with built-in client portals, timelines, and task management. Link all tools and files with detailed team members to ensure smooth and efficient processes.</dd>
              <dt><span className={styles.iconWrapper}><MoneyIcon height={iconHeight} width={iconHeight} className={styles.icon} /></span>Integrated Invoicing</dt><dd>Simplify your financials with branded invoices, tracking payments, and measuring expenses—all in one platform, thanks to QuickBooks integration.</dd>
            </dl>
          </div>

        </div>

        <hr className="my-5" />

        <div className="row justify-content-center g-4 g-lg-5 align-items-center" id="canva">
          <div className="col-6">
            <Image src={CanvaImage} alt="" className={`img-fluid ${styles.roundedImage}`} />
          </div>
          <div className="col-12 col-lg-6">
            <h3 className="h5">Exclusive Canva Template Collection</h3>
            <p>Enhance various aspects of your business with our customized Canva templates.</p>
            <dl className={styles.dl}>
              <dt><span className={styles.iconWrapper}><ApertureIcon height={iconHeight} width={iconHeight} className={styles.icon} /></span>Branded Invoices</dt><dd>Create customized invoices that reflect your brand's identity, presenting a polished and professional image to clients.</dd>
              <dt><span className={styles.iconWrapper}><TriangleIcon height={iconHeight} width={iconHeight} className={styles.icon} /></span>Social Media Graphics</dt><dd>Strengthen your online presence with engaging, professionally designed graphics optimized for various social media platforms.</dd>
              <dt><span className={styles.iconWrapper}><ListCheckIcon height={iconHeight} width={iconHeight} className={styles.icon} /></span>Customizable Contracts</dt><dd>Personalize your business with easy-to-use contract templates that can be tailored to fit your specific needs and ensure professionalism.</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
    <GoogleReviewSection />
    <section className="bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-9 col-xl-8 col-xxl-7 text-lg-center">
            <h2 className="mb-4">Advance Your Design Career with QC Design School</h2>
            <p className="lead mb-0">Your dedication to design deserves a comprehensive educational experience. With QC Design School and the Career Essentials Kit, you have access to the tools, training, and support necessary to transform your aspirations into professional success.</p>
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
      title="Begin Your Professional Journey Today"
      text="Take the first step toward enhancing your design career. Enroll today to unlock the resources and education that will support your professional growth. The design industry values skilled and prepared professionals—let us help you become one"
      buttonText="Enroll Now"
    />
  </>
);

export default CareerCatalystToolkitPage;
