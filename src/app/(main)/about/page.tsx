import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import styles from './page.module.scss';
import WhyQCImage from './why-qc.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { DesignNetworksSection } from '@/components/designNetworksSection';
import AccessibilityIcon from '@/components/icons/accessibility.svg';
import BBBIcon from '@/components/icons/bbb.svg';
import HeadphoneIcon from '@/components/icons/headphones.svg';
import LightbulbIcon from '@/components/icons/lightbulb.svg';
import ShieldIcon from '@/components/icons/shield.svg';
import QualityIcon from '@/components/icons/star-award.svg';
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
            <p>QC Career School has been at the forefront of distance education, training aspiring professionals worldwide for over four decades. As a faculty of QC Career School, QC Design School offers flexible, high-quality online training to ensure students can receive a top-tier design education from the comfort of their homes. Since 2007, QC Design School has had thousands of dedicated students graduate and begin their careers in the design industry.</p>
            <p className="mb-5">Each year, QC improves the student experience by updating course content to reflect the latest industry trends. QC Design School is proud to provide students with an industry-leading support system with the goal of developing a personal relationship with each and every student. With continuous innovation and a genuine commitment to students' success, QC will always provide a world-class learning experience.</p>
            <Link href="/online-courses" className="btn btn-lg btn-outline-dark">View Courses</Link>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row align-items-center justify-content-center g-4 g-xl-5 g-xxl-s">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6 col-xxl-7 text-center text-lg-start">
            <h2 className="mb-5 mb-lg-4 mb-xxl-5">Core Values</h2>
            <div className="row g-5 g-lg-4 g-xxl-5">
              <div className="col-12 col-lg-6">
                <QualityIcon height="32" className={`${styles.icon} d-lg-none d-xxl-block mb-3`} />
                <h3 className="h6 mb-3">Quality</h3>
                <p className="mb-0">You'll see QC's commitment to quality reflected in every aspect of your design courses.</p>
                <ul className="text-start">
                  <li>Expert-reviewed course lessons</li>
                  <li>Custom-designed Online Student Center</li>
                  <li>Industry-focused webinars</li>
                </ul>
              </div>
              <div className="col-12 col-lg-6">
                <HeadphoneIcon height="32" className={`${styles.icon} d-lg-none d-xxl-block mb-3`} />
                <h3 className="h6 mb-3">Enjoy Self-Paced Learning</h3>
                <p className="mb-0">QC provides a fully online education so that you can learn at your own pace with support from student advisors, tutors and a network of peers in our private virtual community!</p>
                <ul className="text-start">
                  <li>Assignment support 7 days a week</li>
                  <li>Feedback and guidance from industry experts</li>
                  <li>A vibrant virtual community of design students and professionals</li>
                </ul>
              </div>
              <div className="col-12 col-lg-6">
                <LightbulbIcon height="32" className={`${styles.icon} d-lg-none d-xxl-block mb-3`} />
                <h3 className="h6 mb-3"><span className="d-lg-none d-xxl-inline">Earn </span>Industry-Recognized Certifications</h3>
                <p className="mb-0">Graduate with professional home design certifications that will open up a world of career &amp; business opportunities to jumpstart your career in the booming design industry.</p>
                <ul className="text-start">
                  <li>Interactive digital lessons</li>
                  <li>Engaging instructional videos</li>
                  <li>Real-world case studies</li>
                </ul>
              </div>
              <div className="col-12 col-lg-6">
                <AccessibilityIcon height="32" className={`${styles.icon} d-lg-none d-xxl-block mb-3`} />
                <h3 className="h6 mb-3">Prepare for a Successful Career</h3>
                <p className="mb-0">Each course includes built-in business training and expert-led webinars to help you launch your career and grow your clientele as a newly certified designer.</p>
                <ul className="text-start">
                  <li>Affordable tuition and customized payment plans</li>
                  <li>Flexible learning schedule</li>
                  <li>Convenient, easy-to-access online courses</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="d-none d-lg-block col-lg-4 col-xl-6 col-xxl-5">
            <Image src={WhyQCImage} alt="" className="img-fluid" />
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
            <h2 className="h4 mb-3">20 Years of Accreditation with the BBB</h2>
            <p>QC is proud to have held the highest possible consumer satisfaction rating with the Better Business Bureau for over 20 years. Our A+ rating reflects our commitment to quality and student satisfaction.</p>
            <p className="mb-0">QC Design School has had thousands of satisfied students take our courses, with many going to launch lucrative design businesses and build successful careers.</p>
          </div>
          <div className="col-12 col-lg-6">
            <ShieldIcon height={iconSize} className={styles.goldIcon} />
            <h2 className="h4 mb-3">21-Day Money-Back Guarantee</h2>
            <p>Once you enroll with QC Design School, you'll be protected by a money-back guarantee!</p>
            <p className="mb-0">Once your enrollment has been processed, you have 21 days to review the course materials and decide whether you want to continue. If you decide this course isn't the right course for you, simply contact the school to request a full refund.Additional information on QC's money-back guarantee is available in your enrollment</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
