import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import type { FC, PropsWithChildren } from 'react';
import type { ItemList, WithContext } from 'schema-dts';

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
import OpenBookIcon from '@/components/icons/open-book.svg';
import PlayIcon from '@/components/icons/play-button.svg';
import TimerIcon from '@/components/icons/timer.svg';
import { VideoPopup } from '@/components/marketingVideo';
import { DesignPartnerSection } from '@/components/partners/designPartnerSection';
import { PromoSection } from '@/components/promoSection';
import { SupportSection } from '@/components/supportSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { type CourseCode, getCourseDescription, getCourseName, getCourseUrl } from '@/domain/courseCode';
import { getData } from '@/lib/getData';
import { getDesignRestricted } from '@/lib/restrictions';
import { educationalOrganization } from '@/qcDesignSchoolEducationalOrganization';

export const metadata: Metadata = {
  title: { absolute: 'QC Design School' },
  description: 'QC Design School offers Online Design & Decorating Courses and Certification Programs. Start a flexible design career and become a certified interior decorator today!',
  alternates: { canonical: '/' },
};

const testimonialIds = [ 'TD-0008', 'TD-0004', 'TD-0003', 'TD-0012', 'TD-0011', 'TD-0009' ];

const HomePage: PageComponent = async () => {
  const { countryCode, provinceCode, date } = await getData();

  const designRestricted = getDesignRestricted(countryCode, provinceCode);

  const jsonLDCourseCodes: CourseCode[] = [ 'i2', 'st', 'ld' ];

  const jsonLdCourses: WithContext<ItemList> = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': jsonLDCourseCodes.map((c, i) => ({
      '@type': 'ListItem',
      'position': i + 1,
      'item': {
        '@type': 'Course',
        'url': getCourseUrl(c),
        'name': getCourseName(c),
        'description': getCourseDescription(c),
        'provider': {
          '@type': 'EducationalOrganization',
          '@id': '#school',
          'name': 'QC Design School',
        },
      },
    })),
  };

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCourses) }} />
      <section className={styles.heroSection}>
        <BackgroundImage priority src={HeroImageDesktop} objectPosition="37.5% 25%" mobile={{ src: HeroImageMobile, breakpoint: 'lg', objectPosition: '50% 87.5%' }} />
        <div className="container text-white text-shadow">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-6 col-xxl-5">
              <h1 className="mb-4">Start Your Design Career</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-8 col-md-7 col-lg-6 col-xxl-5">
              <p className="lead mb-5">Become a certified design professional with flexible online training from industry experts</p>
            </div>
            <div className="col-12">
              <div className="d-flex flex-column flex-sm-row gap-3">
                <div>
                  <Link href="/online-courses" className="btn btn-navy btn-lg text-start" style={{ minWidth: 200 }}><OpenBookIcon height="16" style={{ position: 'relative', top: -1 }} className={`${styles.bookIcon} me-2`} />Browse Courses</Link>
                </div>
                <VideoPopup
                  video={{
                    width: 1280,
                    height: 720,
                    name: 'Your Journey Starts Here',
                    source: {
                      src: 'https://51d9ccad7be11d8ada71-aeafba698c87c1173d616904e85b2e3e.ssl.cf1.rackcdn.com/design-marketing-video.mp4',
                      type: 'video/mp4',
                    },
                  }}
                >
                  <button className="btn btn-outline-light btn-lg text-start" style={{ minWidth: 200 }}><PlayIcon height="20" style={{ position: 'relative', top: -1 }} className={`${styles.playIcon} me-2`} />Watch Video</button>
                </VideoPopup>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PromoSection date={date} countryCode={countryCode} />
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
                  <p className="mb-0">Graduate with professional design certifications that will open up a world of career &amp; business opportunities to jumpstart your career in the booming design industry.</p>
                </div>
                <div className="col-12 col-lg-6">
                  <BriefcaseIcon height="32" className={`${styles.icon} d-lg-none d-xxl-block mb-3`} />
                  <h3 className="h6 mb-3">Prepare for a Successful Career</h3>
                  <p className="mb-0">Each course includes built-in business training, expert-led instructional videos and live training webinars to help you launch your design career and grow your clientele.</p>
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
      <DesignPartnerSection countryCode={countryCode} />
      <section>
        <div className="container">
          <h2 className="mb-5 text-center">Popular Design Courses</h2>
          <div className="row justify-content-center g-4">
            <SmallColumn>
              <CourseTuitionCard
                courseCode="i2"
                courseName={`Interior ${designRestricted ? 'Decorating' : 'Design'}`}
                subtitle="IDDP™ Certification"
                description="Dive into the design industry and create custom interiors that perfectly align with your clients' goals. QC's most popular course is your gateway to mastering essential skills including client consultations, creating floorplans, selecting wall treatments and more."
                href={`/online-courses/interior-${designRestricted ? 'decorating' : 'design'}`}
              />
            </SmallColumn>
            <SmallColumn>
              <CourseTuitionCard
                courseCode="st"
                subtitle="ISRP™ Certification"
                description="Discover the art of home staging and transform clients' spaces into buyer-ready showcases. QC's Home Staging course equips you with the professional skills to create stunning spaces that captivate buyers and boost property appeal."
                href="/online-courses/home-staging"
              />
            </SmallColumn>
            <SmallColumn className="d-lg-none d-xl-flex">
              <CourseTuitionCard
                courseCode="ld"
                subtitle="ILDP™ Certification"
                description="Launch your career in the fast-growing landscape design industry with QC's professional certification course. You'll gain the expert skills to create stunning garden designs and outdoor design concepts that ensure your services are in high demand."
                href="/online-courses/landscape-design"
              />
            </SmallColumn>
            <div className="col-12 col-lg-8 text-center">
              <Link href="/online-courses" className="btn btn-primary"><OpenBookIcon height="16" style={{ position: 'relative', top: -1 }} className="me-2" />Discover More Courses</Link>
            </div>
          </div>
        </div>
      </section>
      <SupportSection date={date} showLink />
      <GuaranteeSection />
      <GetStartedSection
        title="Ready to Start an Exciting New Design Career?"
        text="Become Professionally Certified with QC's Online Design Training"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrganization) }} />
    </div>
  );
};

export default HomePage;

const SmallColumn: FC<PropsWithChildren<{ className?: string }>> = ({ className, children }) => (
  <div className={`col-12 col-sm-11 col-md-8 col-lg-6 col-xl-4 d-flex ${className ?? ''}`}>{children}</div>
);
