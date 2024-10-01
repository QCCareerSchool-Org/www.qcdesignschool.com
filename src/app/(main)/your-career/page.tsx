import type { Metadata } from 'next';

import HeroImageDesktop from '../hero-desktop.jpg';
import HeroImageMobile from '../hero-mobile.jpg';
import { InfoSection } from './infoSection';
import styles from './page.module.scss';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import { GetStartedSection } from '@/components/getStartedSection';
import { PerksSection } from '@/components/perksSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';

export const metadata: Metadata = {
  title: 'Become a Home Designer - QC Design School',
};

const testimonialIds = [
  'TD-0001',
  'TD-0002',
  'TD-0003',
  'TD-0004',
  'TD-0005',
  'TD-0006',
];

const YourCareerPage: PageComponent = () => (
  <div>
    <section className={styles.heroSection}>
      <BackgroundImage priority src={HeroImageDesktop} objectPosition="87.5% 50%" mobile={{ src: HeroImageMobile, breakpoint: 'md', objectPosition: '50% 100%' }} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6 col-xxl-5">
            <h1 className="mb-4">Your Home<br />Design Career</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-8 col-md-7 col-lg-6 col-xxl-5">
            <p className="lead mb-5"><strong>Start your career as a design professional!</strong> Each of QC's courses provides you with all the information, tools, and skills needed to succeed in your desired design niche. You'll be able to start your dream career in this competitive industry.</p>
          </div>
        </div>
      </div>
    </section>
    <InfoSection className="bg-light" />
    <TestimonialWallSection testimonialIds={testimonialIds} />
    <PerksSection className="bg-light" />
    <GetStartedSection
      title="Ready to Start an Exciting New Career in Home Design?"
      text="Become Professionally Certified with QC's Online Design Training"
      buttonText="View Courses"
      buttonHref="/online-courses"
    />
  </div>
);

export default YourCareerPage;
