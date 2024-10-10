import type { Metadata } from 'next';
import Link from 'next/link';
import type { FC, PropsWithChildren } from 'react';

import HeroImage from './hero.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import { CourseTuitionCard } from '@/components/courseTuitionCard';
import { GetStartedSection } from '@/components/getStartedSection';
import QIcon from '@/components/icons/q-logo.svg';
import { Subtitle } from '@/components/subtitle';
import { SupportSection } from '@/components/supportSection';
import { Testimonial } from '@/components/testimonial';
import { gbpCountry } from '@/lib/currencies';
import { getData } from '@/lib/getData';

const bogoEnrollLink = 'https://enroll.qcdesignschool.com/bogo-1';

export const metadata: Metadata = {
  title: 'BOGO Limited-Time Offer',
};

const CoursesPage: PageComponent = () => {
  const { countryCode } = getData();

  const discount = gbpCountry(countryCode) ? '£100' : '$100';

  return (
    <>
      <section>
        <BackgroundImage src={HeroImage} priority />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8 text-center text-white">
              <div className="mb-3"><Subtitle>Limited-Time Offer</Subtitle></div>
              <h1 className="h2 mb-4">Your Second Certification Is Free!</h1>
              <p className="mb-4">Enroll in any design course and get <strong>{discount} off your tuition plus a second course free.</strong> This is the perfect opportunity to specialize your training and become a certified expert. <strong>We've helped 45,000+ students and graduates start their own successful design businesses!</strong></p>
              <Link href="#courses" className="btn btn-outline-light"><QIcon height="16" style={{ position: 'relative', top: -1, marginRight: '0.5rem' }} />View Courses</Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-lg-4">
              <Testimonial id="TD-0008" />
            </div>
            <div className="col-12 col-lg-4">
              <Testimonial id="TD-0004" />
            </div>
            <div className="col-12 col-lg-4">
              <Testimonial id="TD-0012" />
            </div>
          </div>
        </div>
      </section>
      <section id="courses" className="bg-light">
        <div className="container">
          <h2 className="h-3 mb-4 text-center">Online Courses</h2>
          <div className="row justify-content-center g-4">
            <LargeColumn>
              <CourseTuitionCard
                courseCode="i2"
                subtitle="IDDP™ Certification"
                description="Dive into the design industry and create custom interiors that perfectly align with your clients' goals. QC's most popular course is your gateway to mastering essential skills including client consultations, creating floorplans, selecting wall treatments and more."
                href="/online-courses/interior-decorating"
                message="Most Popular"
                showPrice
                showEnrollLink
                enrollLink={bogoEnrollLink}
              />
            </LargeColumn>
            <LargeColumn>
              <CourseTuitionCard
                courseCode="ld"
                subtitle="ILDP™ Certification"
                description="Launch your career in the fast-growing landscape design industry with QC's professional certification course. You'll gain the professional skills to create stunning garden designs and outdoor design concepts that ensure your services are in high demand."
                href="/online-courses/landscape-design"
                showPrice
                showEnrollLink
                enrollLink={bogoEnrollLink}
              />
            </LargeColumn>
            <SmallColumn>
              <CourseTuitionCard
                courseCode="st"
                subtitle="ISRP™ Certification"
                description="Discover the art of home staging and transform clients' spaces into buyer-ready showcases. QC's Home Staging course equips you with the professional skills to create stunning spaces that captivate buyers and boost property appeal."
                href="/online-courses/home-staging"
                showPrice
                showEnrollLink
                enrollLink={bogoEnrollLink}
              />
            </SmallColumn>
            <SmallColumn>
              <CourseTuitionCard
                courseCode="po"
                subtitle="AIOP™ Certification"
                description="Bring order and productivity back into your clients' lives with QC's Professional Organizing course. Gain the expert skills needed to transform cluttered spaces into organized, stress-free environments."
                href="/online-courses/professional-organizing"
                showPrice
                showEnrollLink
                enrollLink={bogoEnrollLink}
              />
            </SmallColumn>
            <SmallColumn>
              <CourseTuitionCard
                courseCode="fs"
                subtitle="AFDP™ Certification"
                description="Master the principles of Feng Shui to enhance any home or office design. QC's Feng Shui Design course equips you to create harmonious, balanced spaces that boost your clients' well-being."
                href="/online-courses/feng-shui-design"
                showPrice
                showEnrollLink
                enrollLink={bogoEnrollLink}
              />
            </SmallColumn>
            <SmallColumn>
              <CourseTuitionCard
                courseCode="cc"
                subtitle="ICCP™ Certification"
                description="Explore advanced techniques using undertones and lighting to select the perfect colors for any space. Guided by expert Jane Lockhart, QC's Color Consultant course will help you elevate your skills and expand your design services."
                href="/online-courses/color-consultant"
                showPrice
                showEnrollLink
                enrollLink={bogoEnrollLink}
              />
            </SmallColumn>
            <SmallColumn>
              <CourseTuitionCard
                courseCode="fd"
                subtitle="IFDP™ Certification"
                description="Dive into the world of floral design by launching your own business, working with a seasoned floral designer or incorporating floral design skills into an existing home design career. Learn to create stunning arrangements for any occasion."
                href="/online-courses/floral-design"
                showPrice
                showEnrollLink
                enrollLink={bogoEnrollLink}
              />
            </SmallColumn>
            <SmallColumn>
              <CourseTuitionCard
                courseCode="ed"
                subtitle="IEDP™ Certification"
                description="Expand your creative skills and discover how you can design an event's mood and aesthetic experience with QC's Event Decor course. Learn to coordinate lighting, color, and decor to suit a theme and bring your clients' visions to life."
                href="/online-courses/event-decor"
                showPrice
                showEnrollLink
                enrollLink={bogoEnrollLink}
              />
            </SmallColumn>
            <SmallColumn>
              <CourseTuitionCard
                courseCode="ap"
                subtitle="APDP™ Certification"
                description="Specialize your design services with QC's Aging in Place course and help clients with aging concerns to remain in their homes. This in-demand certification empowers you to design beautiful spaces that support your clients' independence and comfort."
                href="/online-courses/aging-in-place"
                showPrice
                showEnrollLink
                enrollLink={bogoEnrollLink}
              />
            </SmallColumn>
            <SmallColumn>
              <CourseTuitionCard
                courseCode="eb"
                subtitle="Specialty Training"
                description="Achieve your business goals with QC's Accelerate Your Business training. You'll create customer personas, enhance your online presence and develop marketing strategies to take your design business to the next level."
                href="/online-courses/accelerate-your-design-business"
                showPrice
                showEnrollLink
                enrollLink={bogoEnrollLink}
              />
            </SmallColumn>
            <SmallColumn>
              <CourseTuitionCard
                courseCode="vd"
                subtitle="Specialty Training"
                description="Expand your design business by taking your services online with QC's Virtual Design Training. Discover how you can offer a range of online services, from consultations to full redesigns, and grow your clientele."
                href="/online-courses/virtual-design"
                showPrice
                showEnrollLink
                enrollLink={bogoEnrollLink}
              />
            </SmallColumn>
          </div>
        </div>
      </section>
      <SupportSection showLink />
      <GetStartedSection
        title="Get Started Today"
        text="Enroll Online and Start on Your Path to Becoming a Certified Designer"
      />
    </>
  );
};

export default CoursesPage;

const LargeColumn: FC<PropsWithChildren> = ({ children }) => <div className="col-12 col-sm-10 col-lg-6 d-flex">{children}</div>;

const SmallColumn: FC<PropsWithChildren> = ({ children }) => <div className="col-12 col-sm-10 col-lg-6 col-xl-4 d-flex">{children}</div>;
