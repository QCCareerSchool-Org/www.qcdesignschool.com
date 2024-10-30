import type { Metadata } from 'next';
import Link from 'next/link';

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
  title: 'Become a Home Designer',
  description: 'Launch your design career with QC Design School! Get business training to start your own business, expand your skills, or land design jobs to elevate your career.',
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
  <>
    <section className={styles.heroSection}>
      <BackgroundImage priority src={HeroImageDesktop} objectPosition="37.5% 25%" mobile={{ src: HeroImageMobile, breakpoint: 'lg', objectPosition: '50% 87.5%' }} />
      <div className="container text-white text-shadow">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6 col-xxl-5">
            <h1 className="mb-4">Your Home<br />Design Career</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-8 col-md-7 col-lg-6 col-xxl-5">
            <p className="lead mb-4"><strong>Start your career as a design professional!</strong> QC's comprehensive courses equip you with the essential skills and industy knowledge to excel in your chosen design niche. Each course is  designed to help you confidently launch your dream career in the dynamic design industry.</p>
            <Link href="/online-courses" className="btn btn-dark btn-lg">View Courses</Link>
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
    />
  </>
);

export default YourCareerPage;
