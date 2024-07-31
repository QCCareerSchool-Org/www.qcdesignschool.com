import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import type { FC, PropsWithChildren } from 'react';

import type { PageComponent } from '../serverComponent';
import HeroImageDesktop from './hero-desktop.jpg';
import HeroImageMobile from './hero-mobile.jpg';
import NetworkBackgroundImageDesktop from './network-associations-bg-desktop.jpg';
import NetworkBackgroundImageMobile from './network-associations-bg-mobile.jpg';
import styles from './page.module.scss';
import WhyQCImage from './why-qc.jpg';
import { BackgroundImage } from '@/components/backgroundImage';
import { CourseTuitionCard } from '@/components/courseTuitionCard';
import { GetStartedSection } from '@/components/getStartedSection';
import BriefcaseIcon from '@/components/icons/briefcase.svg';
import CertificationIcon from '@/components/icons/certification.svg';
import MagnifyingGlassIcon from '@/components/icons/magnifying-glass.svg';
import ObjectsVerticalBottomIcon from '@/components/icons/objects-vertical-bottom.svg';
import OpenBookIcon from '@/components/icons/open-book.svg';
import ShieldIcon from '@/components/icons/shield.svg';
import UserVoiceIcon from '@/components/icons/user-voice.svg';
import { TestimonialWallSection } from '@/components/testimonialWallSection';

export const metadata: Metadata = {
  title: 'QC Design School',
};

const testimonialIds = [ 'TD-0008', 'TD-0004', 'TD-0003', 'TD-0012', 'TD-0011', 'TD-0009' ];

const HomePage: PageComponent = () => (
  <div className={styles.page}>
    <section className={styles.heroSection}>
      <BackgroundImage priority desktopSrc={HeroImageDesktop} mobileSrc={HeroImageMobile} breakpoint="md" desktopObjectPosition="87.5% 50%" mobileObjectPosition="50% 100%" />
      <div className="container">
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
                <BriefcaseIcon height="32" className={`${styles.icon} d-lg-none d-xxl-block mb-3`} />
                <h3 className="h6 mb-3">Learn From Expert Instructors</h3>
                <p className="mb-0">We've hand-selected the top design professionals in the industry to guide you through your course material.</p>
              </div>
              <div className="col-12 col-lg-6">
                <UserVoiceIcon height="32" className={`${styles.icon} d-lg-none d-xxl-block mb-3`} />
                <h3 className="h6 mb-3">Flexible Online Training</h3>
                <p className="mb-0">QC provides a fully online education&mdash;learn at your own pace and get access to bonus career training in our private virtual community!</p>
              </div>
              <div className="col-12 col-lg-6">
                <CertificationIcon height="32" className={`${styles.icon} d-lg-none d-xxl-block mb-3`} />
                <h3 className="h6 mb-3">Industry-Recognized Certifications</h3>
                <p className="mb-0">Graduate with professional home design certifications and open up a world of career &amp; business opportunities.</p>
              </div>
              <div className="col-12 col-lg-6">
                <ObjectsVerticalBottomIcon height="32" className={`${styles.icon} d-lg-none d-xxl-block mb-3`} />
                <h3 className="h6 mb-3">Business Training Included</h3>
                <p className="mb-0">Each course includes built-in business training to help you launch your career and grow your clientele as a newly certified designer.</p>
              </div>
            </div>
          </div>
          <div className="d-none d-lg-block col-lg-5 col-xl-6 col-xxl-5">
            <Image src={WhyQCImage} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    <TestimonialWallSection testimonialIds={testimonialIds} className="bg-light" />
    <section>
      <div className="container">
        <h2 className="mb-5 text-center">Popular Design Courses</h2>
        <div className="row justify-content-center g-4 mb-s">
          <SmallColumn>
            <CourseTuitionCard
              courseCode="i2"
              subtitle="IDDP™ Certification"
              description="Dive into the world of design and transform spaces into works of art. Our most popular course is your gateway to mastering aesthetic enhancement and client satisfaction."
              href="/online-courses/interior-decorating"
            />
          </SmallColumn>
          <SmallColumn>
            <CourseTuitionCard
              courseCode="st" subtitle="ISRP™ Certification"
              description="Discover the key principles of home staging with our essential course that stands at the core of our design curriculum. Begin your journey into the dynamic world of home presentation and property appeal."
              href="/online-courses/home-staging"
            />
          </SmallColumn>
          <SmallColumn className="d-lg-none d-xl-flex">
            <CourseTuitionCard
              courseCode="po" subtitle="AIOP™ Certification"
              description="Strike the perfect balance between functionality and style. This course equips you with the skills to declutter and reorganize spaces for optimum efficiency and design."
              href="/online-courses/professional-organizing"
            />
          </SmallColumn>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 text-center">
            <MagnifyingGlassIcon height="28" className="mb-3" />
            <h3 className="h4 mb-3">Explore More Paths in Design and Styling</h3>
            <p className="lead mb-4">Looking to broaden your horizons? Our comprehensive catalog offers a range of courses to suit your unique interests and career aspirations. From foundational skills to specialized techniques, let your creativity flow and your professional prowess grow.</p>
            <Link href="/online-courses" className="btn btn-primary"><OpenBookIcon height="16" style={{ position: 'relative', top: -1 }} className="me-2" />Discover More Courses</Link>
          </div>
        </div>
      </div>
    </section>
    <section style={{ backgroundColor: '#4c99fd' }} className="pb-0 pb-lg-s">
      <Image src={NetworkBackgroundImageDesktop} placeholder="blur" alt="" fill sizes="100vw" style={{ objectFit: 'cover' }} className="d-none d-lg-block" />
      <div className="container text-white">
        <div className="row justify-content-end g-s">
          <div className="col-12 col-lg-6">
            <h2 className="h3 mb-3">Explore Professional Design Networks</h2>
            <p className="mb-0">QC Design School connects you to the heart of the design world, with affiliations to top industry associations across North America. Elevate your professional profile, network with leaders, and access exclusive resources through these esteemed organizations.</p>
          </div>
        </div>
      </div>
      <Image src={NetworkBackgroundImageMobile} placeholder="blur" alt="" className="d-lg-none" style={{ width: '100%', height: 'auto' }} />
    </section>
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xxl-6 text-center">
            <ShieldIcon height="32" className="mb-3" />
            <h2 className={`${styles.moneyBackHeader} mb-3`}>21-Day Money-Back Guarantee</h2>
            <h3 className={`${styles.riskFreeHeader} mb-3`}>Try Any Course 100% Risk Free</h3>
            <p className="mb-0">After enrolling, you have 21 days to review your course materials. If the course isn't right for you, simply contact us for a full refund!</p>
          </div>
        </div>
      </div>
    </section>
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
