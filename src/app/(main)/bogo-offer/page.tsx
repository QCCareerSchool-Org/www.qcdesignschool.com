import type { FC, PropsWithChildren } from 'react';

import type { PageComponent } from '@/app/serverComponent';
import { CourseTuitionCard } from '@/components/courseTuitionCard';
import { GetStartedSection } from '@/components/getStartedSection';
import { TestimonialSection } from '@/components/testimonialSection';

const bogoEnrollLink = 'https://enroll.qcdesignschool.com/bogo-1';

const CoursesPage: PageComponent = () => (
  <div>
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
            <CourseTuitionCard
              courseCode="i2"
              subtitle="IDDP™ Certification"
              description="Dive into the world of design and transform spaces into works of art. Our most popular course is your gateway to mastering aesthetic enhancement and client satisfaction."
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
              description="Transform homes with stunning outdoor spaces. Join our top-rated landscape design course and master essential skills in months. Dive into a booming industry and start your dream career."
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
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat elit nunc, id pretium dui mollis eget. Morbi pulvinar, metus in pharetra congue, lectus orci vulputate nisi, eget venenatis dolor sem quis tortor."
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
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat elit nunc, id pretium dui mollis eget. Morbi pulvinar, metus in pharetra congue, lectus orci vulputate nisi, eget venenatis dolor sem quis tortor."
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
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat elit nunc, id pretium dui mollis eget. Morbi pulvinar, metus in pharetra congue, lectus orci vulputate nisi, eget venenatis dolor sem quis tortor."
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
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat elit nunc, id pretium dui mollis eget. Morbi pulvinar, metus in pharetra congue, lectus orci vulputate nisi, eget venenatis dolor sem quis tortor."
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
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat elit nunc, id pretium dui mollis eget. Morbi pulvinar, metus in pharetra congue, lectus orci vulputate nisi, eget venenatis dolor sem quis tortor."
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
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat elit nunc, id pretium dui mollis eget. Morbi pulvinar, metus in pharetra congue, lectus orci vulputate nisi, eget venenatis dolor sem quis tortor."
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
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat elit nunc, id pretium dui mollis eget. Morbi pulvinar, metus in pharetra congue, lectus orci vulputate nisi, eget venenatis dolor sem quis tortor."
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
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat elit nunc, id pretium dui mollis eget. Morbi pulvinar, metus in pharetra congue, lectus orci vulputate nisi, eget venenatis dolor sem quis tortor."
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
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat elit nunc, id pretium dui mollis eget. Morbi pulvinar, metus in pharetra congue, lectus orci vulputate nisi, eget venenatis dolor sem quis tortor."
              href="/online-courses/virtual-design"
              showPrice
              showEnrollLink
              enrollLink={bogoEnrollLink}
            />
          </SmallColumn>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-9 text-md-center">
            <h2 className="mb-3">Get Your Second Course FREE!</h2>
            <p>Enroll in a foundation course and receive any additional course for free.</p>
            <p>Foundation courses prepare you to work in the design industry. Advanced and specialty courses help enhance your career and grow your business. At QC, your professional development matters!</p>
            <p className="mb-0">Check out popular professional development training paths most QC students and graduates follow. Find the training plan that best suits your career goals!</p>
          </div>
        </div>
      </div>
    </section>
    <TestimonialSection id="TD-0001" className="bg-light" />
    <GetStartedSection
      title="Get Started Today"
      text="Enroll Online and Start on Your Path to Becoming a Certified Designer"
    />
  </div>
);

export default CoursesPage;

const LargeColumn: FC<PropsWithChildren> = ({ children }) => <div className="col-12 col-sm-10 col-lg-6 d-flex">{children}</div>;

const SmallColumn: FC<PropsWithChildren> = ({ children }) => <div className="col-12 col-sm-10 col-lg-6 col-xl-4 d-flex">{children}</div>;
