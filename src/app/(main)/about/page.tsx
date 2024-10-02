import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { CoreValuesSection } from './coreValuesSection';
import { MeetOurTeamSection } from './meetOurTeamSection';
import styles from './page.module.scss';
import type { PageComponent } from '@/app/serverComponent';
import { DesignNetworksSection } from '@/components/designNetworksSection';
import BBBIcon from '@/components/icons/bbb.svg';
import ShieldIcon from '@/components/icons/shield.svg';
import HowYoullLearnImage from '@/images/how-youll-learn.jpg';

export const metadata: Metadata = {
  title: 'About the School - QC Design School',
};

const iconSize = 48;

const AboutPage: PageComponent = () => (
  <div className={styles.aboutPage}>
    <section>
      <div className="container">
        <div className="row align-items-center g-4 g-xl-s">
          <div className="col-12 col-lg-6 col-xxl-5 d-none d-lg-block">
            <Image src={HowYoullLearnImage} alt="" className={`${styles.howYoullLearn} img-fluid`} />
          </div>
          <div className="col-12 col-lg-6 col-xxl-7">
            <p className={`${styles.years} mb-3`}>Celebrating 40 Years</p>
            <h1 className="mb-4">About QC</h1>
            <p>QC Career School has been at the forefront of distance education, training aspiring professionals worldwide for over four decades. As a faculty of QC Career School, QC Design School offers flexible, high-quality online training to ensure students can receive a top-tier design education from the comfort of their homes. Since 2007, QC Design School has had thousands of dedicated students graduate and begin their careers in the design industry.</p>
            <p className="mb-5">Each year, QC improves the student experience by updating course content to reflect the latest industry trends. QC Design School is proud to provide students with an industry-leading support system with the goal of developing a personal relationship with each and every student. With continuous innovation and a genuine commitment to students' success, QC will always provide a world-class learning experience.</p>
            <Link href="/online-courses" className="btn btn-lg btn-outline-dark">View Courses</Link>
          </div>
        </div>
      </div>
    </section>
    <MeetOurTeamSection className="bg-light" />
    <CoreValuesSection />
    <DesignNetworksSection showLink />
    <section className="bg-light">
      <div className="container">
        <div className="row g-5 g-xl-s">
          <div className="col-12 col-lg-6">
            <BBBIcon height={iconSize} className={styles.goldIcon} />
            <h2 className="h4 mb-3">20 Years of Accreditation<span className="d-lg-none d-xxl-inline"> with the BBB</span></h2>
            <p>QC is proud to have held the highest possible consumer satisfaction rating with the Better Business Bureau for over 20 years. Our A+ rating reflects our commitment to quality and student satisfaction.</p>
            <p className="mb-0">QC Design School has had thousands of satisfied students take our courses, with many going to launch lucrative design businesses and build successful careers.</p>
          </div>
          <div className="col-12 col-lg-6">
            <ShieldIcon height={iconSize} className={styles.goldIcon} />
            <h2 className="h4 mb-3">21-Day Money-Back Guarantee</h2>
            <p>Once you enroll with QC Design School, you'll be protected by a money-back guarantee!</p>
            <p className="mb-0">Once your enrollment has been processed, you have 21 days to review the course materials and decide whether you want to continue. If you decide this course isn't the right course for you, simply contact the school to request a full refund. Additional information on QC's money-back guarantee is available in your enrollment agreement.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
