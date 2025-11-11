import type { Metadata } from 'next';
import type { FC, PropsWithChildren } from 'react';
import { Suspense } from 'react';
import type { Course, EducationalOrganization, ItemList, WithContext } from 'schema-dts';

import type { PageComponent } from '@/app/serverComponent';
import { CourseTuitionCard } from '@/components/courseTuitionCard';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import type { CourseCode } from '@/domain/courseCode';
import { courseCodes, getCourseCertificate, getCourseDescription, getCourseName, getCourseUrl } from '@/domain/courseCode';
import { getData } from '@/lib/getData';
import { getDesignRestricted } from '@/lib/restrictions';

export const metadata: Metadata = {
  title: 'Online Courses',
  description: 'Explore diverse Online Design & Decorating Courses, from interior decorating to virtual design, and enhance your skills for client-focused success.',
  alternates: { canonical: '/online-courses' },
};

const CoursesPage: PageComponent = async () => {
  const { countryCode, provinceCode } = await getData();

  const designRestricted = getDesignRestricted(countryCode, provinceCode);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(providerJsonLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLD) }} />
      <section>
        <div className="container">
          <div className="row justify-content-center g-4 mb-5">
            <div className="col-12 col-md-8 text-center">
              <h1 className="mb-4">Online Design Courses</h1>
              <p className="lead mb-0">Discover the wide range of courses offered by QC Design School.</p>
            </div>
          </div>
          <div className="row justify-content-center g-4">
            <LargeColumn>
              <Suspense>
                <CourseTuitionCard
                  courseCode="i2"
                  courseName={`Interior ${designRestricted ? 'Decorating' : 'Design'}`}
                  subtitle="IDDP™ Certification"
                  description="Dive into the design industry and create custom interiors that perfectly align with your clients' goals. QC's most popular course is your gateway to mastering essential skills including client consultations, creating floorplans, selecting wall treatments and more."
                  href={`/online-courses/interior-${designRestricted ? 'decorating' : 'design'}`}
                  message="Most Popular"
                  showPrice
                  showEnrollLink
                />
              </Suspense>
            </LargeColumn>
            <LargeColumn>
              <Suspense>
                <CourseTuitionCard
                  courseCode="ld"
                  subtitle="ILDP™ Certification"
                  description="Launch your career in the fast-growing landscape design industry with QC's professional certification course. You'll gain the expert skills to create stunning garden designs and outdoor design concepts that ensure your services are in high demand."
                  href="/online-courses/landscape-design"
                  showPrice
                  showEnrollLink
                />
              </Suspense>
            </LargeColumn>
            <SmallColumn>
              <Suspense>
                <CourseTuitionCard
                  courseCode="st"
                  subtitle="ISRP™ Certification"
                  description="Discover the art of home staging and transform clients' spaces into buyer-ready showcases. QC's Home Staging course equips you with the professional skills to create stunning spaces that captivate buyers and boost property appeal."
                  href="/online-courses/home-staging"
                  showPrice
                  showEnrollLink
                />
              </Suspense>
            </SmallColumn>
            <SmallColumn>
              <Suspense>
                <CourseTuitionCard
                  courseCode="po"
                  subtitle="AIOP™ Certification"
                  description="Bring order and productivity back into your clients' lives with QC's Professional Organizing course. Gain the expert skills needed to transform cluttered spaces into organized, stress-free environments."
                  href="/online-courses/professional-organizing"
                  showPrice
                  showEnrollLink
                />
              </Suspense>
            </SmallColumn>
            <SmallColumn>
              <Suspense>
                <CourseTuitionCard
                  courseCode="fs"
                  subtitle="AFDP™ Certification"
                  description="Master the principles of Feng Shui to enhance any home or office design. QC's Feng Shui Design course equips you to create harmonious, balanced spaces that boost your clients' well-being."
                  href="/online-courses/feng-shui-design"
                  showPrice
                  showEnrollLink
                />
              </Suspense>
            </SmallColumn>
            <SmallColumn>
              <Suspense>
                <CourseTuitionCard
                  courseCode="cc"
                  subtitle="ICCP™ Certification"
                  description="Explore advanced techniques using undertones and lighting to select the perfect colors for any space. Guided by expert Jane Lockhart, QC's Color Consultant course will help you elevate your skills and expand your design services."
                  href="/online-courses/color-consultant"
                  showPrice
                  showEnrollLink
                />
              </Suspense>
            </SmallColumn>
            <SmallColumn>
              <Suspense>
                <CourseTuitionCard
                  courseCode="fd"
                  subtitle="IFDP™ Certification"
                  description="Dive into the world of floral design by launching your own business, working with a seasoned floral designer or incorporating floral design skills into an existing home design career. Learn to create stunning arrangements for any occasion."
                  href="/online-courses/floral-design"
                  showPrice
                  showEnrollLink
                />
              </Suspense>
            </SmallColumn>
            <SmallColumn>
              <Suspense>
                <CourseTuitionCard
                  courseCode="ed"
                  subtitle="IEDP™ Certification"
                  description="Expand your creative skills and discover how you can design an event's mood and aesthetic experience with QC's Event Decor course. Learn to coordinate lighting, color, and decor to suit a theme and bring your clients' visions to life."
                  href="/online-courses/event-decor"
                  showPrice
                  showEnrollLink
                />
              </Suspense>
            </SmallColumn>
            <SmallColumn>
              <Suspense>
                <CourseTuitionCard
                  courseCode="ap"
                  subtitle="APDP™ Certification"
                  description="Specialize your design services with QC's Aging in Place course and help clients with aging concerns to remain in their homes. This in-demand certification empowers you to design beautiful spaces that support your clients' independence and comfort."
                  href="/online-courses/aging-in-place"
                  showPrice
                  showEnrollLink
                />
              </Suspense>
            </SmallColumn>
            <SmallColumn>
              <Suspense>
                <CourseTuitionCard
                  courseCode="db"
                  subtitle="Specialty Training"
                  description="Achieve your business goals with QC's Accelerate Your Business training. You'll create customer personas, enhance your online presence and develop marketing strategies to take your design business to the next level."
                  href="/online-courses/accelerate-your-design-business"
                  showPrice
                  showEnrollLink
                />
              </Suspense>
            </SmallColumn>
            <SmallColumn>
              <Suspense>
                <CourseTuitionCard
                  courseCode="vd"
                  subtitle="Specialty Training"
                  description="Expand your design business by taking your services online with QC's Virtual Design Training. Discover how you can offer a range of online services, from consultations to full redesigns, and grow your clientele."
                  href="/online-courses/virtual-design"
                  showPrice
                  showEnrollLink
                />
              </Suspense>
            </SmallColumn>
          </div>
        </div>
      </section>
      <GoogleReviewSection />
      <GetStartedSection
        title="Get Started Today"
        text="Enroll Online and Start on Your Path to Becoming a Certified Designer"
      />
    </div>
  );
};

const LargeColumn: FC<PropsWithChildren> = ({ children }) => <div className="col-12 col-sm-10 col-lg-6 d-flex">{children}</div>;

const SmallColumn: FC<PropsWithChildren> = ({ children }) => <div className="col-12 col-sm-10 col-lg-6 col-xl-4 d-flex">{children}</div>;

const getCourseSchema = (c: CourseCode): Course => {
  const courseCertificate = getCourseCertificate(c);
  return {
    '@type': 'Course',
    'url': getCourseUrl(c),
    'name': getCourseName(c),
    'description': getCourseDescription(c),
    'educationalCredentialAwarded': courseCertificate ? {
      '@type': 'EducationalOccupationalCredential',
      'name': courseCertificate,
    } : undefined,
    'provider': {
      '@id': '#provider',
    },
  };
};

const providerJsonLD: WithContext<EducationalOrganization> = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': '#provider',
  'name': 'QC Design School',
  'sameAs': [
    'https://www.linkedin.com/company/qc-career-school',
    'https://www.facebook.com/QCDesign',
    'https://www.instagram.com/qcdesignschool',
    'https://www.youtube.com/@QCDesign',
  ],
};

const itemListJsonLD: WithContext<ItemList> = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  'itemListElement': courseCodes.map((c, i) => {
    return {
      '@type': 'ListItem',
      'position': i + 1,
      'item': getCourseSchema(c),
    };
  }),
};

export default CoursesPage;
