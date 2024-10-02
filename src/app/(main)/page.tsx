import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import type { FC, PropsWithChildren } from 'react';

import type { PageComponent } from '../serverComponent';
import HeroImageDesktop from './hero-desktop.jpg';
import HeroImageMobile from './hero-mobile.jpg';
import styles from './page.module.scss';
import { StatsSection } from './statsSection';
import WhyQCImage from './why-qc.jpg';
import { BackgroundImage } from '@/components/backgroundImage';
import { CourseTuitionCard } from '@/components/courseTuitionCard';
import { GetStartedSection } from '@/components/getStartedSection';
import { GuaranteeSection } from '@/components/guaranteeSection';
import BookReaderIcon from '@/components/icons/book-reader.svg';
import BriefcaseIcon from '@/components/icons/briefcase.svg';
import CertificationIcon from '@/components/icons/certification.svg';
import MagnifyingGlassIcon from '@/components/icons/magnifying-glass.svg';
import OpenBookIcon from '@/components/icons/open-book.svg';
import TimerIcon from '@/components/icons/timer.svg';
import { SupportSection } from '@/components/supportSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';

export const metadata: Metadata = {
  title: 'QC Design School',
};

const testimonialIds = [ 'TD-0008', 'TD-0004', 'TD-0003', 'TD-0012', 'TD-0011', 'TD-0009' ];

const HomePage: PageComponent = () => (
  <div className={styles.page}>
    <section className={styles.heroSection}>
      <BackgroundImage priority src={HeroImageDesktop} objectPosition="87.5% 50%" mobile={{ src: HeroImageMobile, breakpoint: 'md', objectPosition: '50% 100%' }} />
      <div className="container text-white">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6 col-xxl-5">
            <h1 className="mb-4">Start a Career in<br />Home Design</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-8 col-md-7 col-lg-6 col-xxl-5">
            <p className="lead mb-5">Become a certified design professional with flexible online training from industry experts</p>
            <Link href="/online-courses" className="btn btn-navy btn-lg"><OpenBookIcon height="16" style={{ position: 'relative', top: -1 }} className={`${styles.bookIcon} me-2`} />Browse Courses</Link>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row align-items-center justify-content-center g-4 g-xl-5 g-xxl-s">
          <div className="col-12 col-md-10 col-lg-7 col-xl-6 col-xxl-7 text-center text-lg-start">
            <h2 className="mb-5 mb-lg-4 mb-xxl-5">Why Choose QC Design School</h2>
            <div className="row g-5 g-lg-4 g-xxl-5">
              <div className="col-12 col-lg-6">
                <BookReaderIcon height="32" className={`${styles.icon} d-lg-none d-xxl-block mb-3`} />
                <h3 className="h6 mb-3">Learn From Expert Instructors</h3>
                <p className="mb-0">We've hand-selected the top design professionals in the industry to develop top-tier courses and guide you through your learning experience.</p>
              </div>
              <div className="col-12 col-lg-6">
                <TimerIcon height="32" className={`${styles.icon} d-lg-none d-xxl-block mb-3`} />
                <h3 className="h6 mb-3">Enjoy Self-Paced Learning</h3>
                <p className="mb-0">QC provides a fully online education so that you can learn at your own pace with support from student advisors, tutors and a network of peers in our private virtual community!</p>
              </div>
              <div className="col-12 col-lg-6">
                <CertificationIcon height="32" className={`${styles.icon} d-lg-none d-xxl-block mb-3`} />
                <h3 className="h6 mb-3"><span className="d-lg-none d-xxl-inline">Earn </span>Industry-Recognized Certifications</h3>
                <p className="mb-0">Graduate with professional home design certifications that will open up a world of career &amp; business opportunities to jumpstart your career in the booming design industry.</p>
              </div>
              <div className="col-12 col-lg-6">
                <BriefcaseIcon height="32" className={`${styles.icon} d-lg-none d-xxl-block mb-3`} />
                <h3 className="h6 mb-3">Prepare for a Successful Career</h3>
                <p className="mb-0">Each course includes built-in business training, expert-led instructional videos and live training webinars to help you launch your career and grow your clientele as a newly certified designer.</p>
              </div>
            </div>
          </div>
          <div className="d-none d-lg-block col-lg-5 col-xl-6 col-xxl-5">
            <Image src={WhyQCImage} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    <StatsSection />
    <TestimonialWallSection testimonialIds={testimonialIds} className="bg-light" />
    <section>
      <div className="container">
        <h2 className="mb-5 text-center">Popular Design Courses</h2>
        <div className="row justify-content-center g-4 mb-s">
          <SmallColumn>
            <CourseTuitionCard
              courseCode="i2"
              subtitle="IDDP™ Certification"
              description="Dive into the design industry and create custom interiors that perfectly align with your clients’ goals. QC’s most popular course is your gateway to mastering essential skills including client consultations, creating floorplans, selecting wall treatments and more."
              href="/online-courses/interior-decorating"
            />
          </SmallColumn>
          <SmallColumn>
            <CourseTuitionCard
              courseCode="st"
              subtitle="ISRP™ Certification"
              description="Discover the art of home staging and transform clients’ spaces into buyer-ready showcases. QC’s Home Staging course equips you with the professional skills to create stunning spaces that captivate buyers and boost property appeal."
              href="/online-courses/home-staging"
            />
          </SmallColumn>
          <SmallColumn className="d-lg-none d-xl-flex">
            <CourseTuitionCard
              courseCode="ld"
              subtitle="ILDP™ Certification"
              description="Launch your career in the fast-growing landscape design industry with QC’s professional certification course. You’ll gain the professional skills to create stunning garden designs and outdoor design concepts that ensure your services are in high demand."
              href="/online-courses/landscape-design"
            />
          </SmallColumn>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 text-center">
            <MagnifyingGlassIcon height="28" className="mb-3" />
            <h3 className="h4 mb-3">Explore More Paths in Design</h3>
            <p className="lead mb-4">Looking to expand your skills? Our comprehensive catalog offers a range of courses  so that you can tailor your learning experience to suit your unique career goals. From foundational skills to specialized techniques, QC is here to help you expand your professional expertise. Let your creativity soar and unlock your full potential in the world of design!</p>
            <Link href="/online-courses" className="btn btn-primary"><OpenBookIcon height="16" style={{ position: 'relative', top: -1 }} className="me-2" />Discover More Courses</Link>
          </div>
        </div>
      </div>
    </section>
    <SupportSection />
    <GuaranteeSection />
    <GetStartedSection
      title="Ready to Start an Exciting New Career in Home Design?"
      text="Become Professionally Certified with QC's Online Design Training"
    />
  </div>
);

export default HomePage;

const SmallColumn: FC<PropsWithChildren<{ className?: string }>> = ({ className, children }) => (
  <div className={`col-12 col-sm-11 col-md-8 col-lg-6 col-xl-4 d-flex ${className ?? ''}`}>{children}</div>
);
