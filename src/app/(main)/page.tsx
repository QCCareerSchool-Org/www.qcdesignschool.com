import type { Metadata } from 'next';

import Link from 'next/link';
import type { PageComponent } from '../serverComponent';
import HeroImageDesktop from './hero-desktop.jpg';
import HeroImageMobile from './hero-mobile.jpg';
import styles from './page.module.scss';
import { BackgroundImage } from '@/components/backgroundImage';

export const metadata: Metadata = {
  title: 'QC Design School',
};

// const testimonialIds = [ 'TD-0008', 'TD-0004', 'TD-0003', 'TE-0012', 'TE-0011', 'TD-0009' ];

const HomePage: PageComponent = () => (
  <div className={styles.page}>
    <section className={styles.heroSection}>
      <BackgroundImage desktopSrc={HeroImageDesktop} mobileSrc={HeroImageMobile} breakpoint="md" desktopObjectPosition="75% 50%" mobileObjectPosition="50% 100%" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6 col-xxl-5">
            <h1 className="mb-4">Start a Career in<br />Home Design</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-8 col-md-7 col-lg-6 col-xxl-5">
            <p className="lead mb-5">Become a certified design professional with flexible online training from industry experts</p>
            <Link href="/online-courses" className="btn btn-navy btn-lg">Browse Courses</Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;
