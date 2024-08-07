import type { Metadata } from 'next';
import Image from 'next/image';

import Link from 'next/link';
import styles from './page.module.scss';
import type { PageComponent } from '@/app/serverComponent';
import { DesignNetworksSection } from '@/components/designNetworksSection';
import BBBIcon from '@/components/icons/bbb.svg';
import ShieldIcon from '@/components/icons/shield.svg';
import HowYoullLearnImage from '@/images/how-youll-learn.jpg';

export const metadata: Metadata = {
  title: 'About QC - QC Design School',
};

const iconSize = 40;

const AboutPage: PageComponent = () => (
  <div className={styles.aboutPage}>
    <section>
      <div className="container">
        <div className="row align-items-center g-4 g-xl-s">
          <div className="col-12 col-lg-6 col-xxl-5 d-none d-lg-block">
            <Image src={HowYoullLearnImage} alt="" className={`${styles.howYoullLearn} img-fluid`} />
          </div>
          <div className="col-12 col-lg-6 col-xxl-7">
            <p className={styles.years}>Celebrating 40 Years</p>
            <h1 className="mb-3">About QC</h1>
            <p>QC Design School is a faculty of QC Career School, an online international school educating creative professionals through distance education for 40 years. QC's design courses provide the best design training possible from the comfort of your own home. Since 2007, QC Design School has had thousands of dedicated students graduate and begin their careers in the design industry.</p>
            <p className="mb-5">Each year, QC improves the student experience by updating course content to reflect the latest industry trends. QC Design School is proud to provide students with an industry-leading support system with the goal of developing a personal relationship with each and every student. With continuous innovation and a genuine commitment to students' success, QC will always provide a world-class learning experience</p>
            <Link href="/online-courses" className="btn btn-lg btn-outline-dark">View Courses</Link>
          </div>
        </div>
      </div>
    </section>
    <DesignNetworksSection showLink />
    <section className="bg-light">
      <div className="container">
        <div className="row g-5 g-xl-s">
          <div className="col-12 col-lg-6">
            <BBBIcon height={iconSize} className={styles.goldIcon} />
            <h2 className="h4 mb-3">BBB Accreditation</h2>
            <p>QC is happy to celebrate 15 years of accreditation with the Better Business Bureau.</p>
            <p className="mb-0">Are you hesitant about enrolling in an online course? Rest assured that QC has the highest possible consumer satisfaction rating (A+) with the Better Business Bureau. QC Event School has had thousands of satisfied students take these courses, and many students are now running their own successful businesses. See our BBB review.</p>
          </div>
          <div className="col-12 col-lg-6">
            <ShieldIcon height={iconSize} className={styles.goldIcon} />
            <h2 className="h4 mb-3">21-Day Money-Back Guarantee</h2>
            <p>Once you enroll with QC Event School, you'll be protected by a money-back guarantee!</p>
            <p className="mb-0">Once your enrollment has been processed, you have 21 days to review the course materials and decide whether you want to continue. If you decide this course isn't the right course for you, simply contact the school to request a full refund.Additional information on QC's money-back guarantee is available in your enrollment</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
