import type { FC, PropsWithChildren } from 'react';
import { CourseTuitionCard } from '@/components/courseTuitionCard';

const LargeColumn: FC<PropsWithChildren> = ({ children }) => <div className="col-12 col-sm-10 col-lg-6 d-flex">{children}</div>;

type Props = {
  designRestricted: boolean;
};

export const CourseCardsSection: FC<Props> = ({ designRestricted }) => (
  <section>
    <div className="container">
      <div className="row justify-content-center g-s">
        <div className="col-12 col-md-8 text-center">
          <h2 className="text-center mb-4">Expand Your Skills and Save!</h2>
          <p className="lead mb-5">Enroll in Professional Organizing and get each additional course of equal or lesser value for 50% off.</p>
        </div>
      </div>
      <div className="row justify-content-center g-4">
        <LargeColumn>
          <CourseTuitionCard
            courseCode="i2"
            courseName={`Interior ${designRestricted ? 'Decorating' : 'Design'}`}
            subtitle="IDDP™ Certification"
            description="Dive into the design industry and create custom interiors that perfectly align with your clients' goals. "
            href={`/online-courses/interior-${designRestricted ? 'decorating' : 'design'}`}
            message="Most Popular"
            showPrice
            showEnrollLink
          />
        </LargeColumn>
        <LargeColumn>
          <CourseTuitionCard
            courseCode="ld"
            subtitle="ILDP™ Certification"
            description="Gain expert skills to create stunning garden designs and outdoor design concepts that ensure your services are in high demand."
            href="/online-courses/landscape-design"
            showPrice
            showEnrollLink
          />
        </LargeColumn>
        <LargeColumn>
          <CourseTuitionCard
            courseCode="st"
            subtitle="ISRP™ Certification"
            description="Discover the art of home staging and transform clients' spaces into buyer-ready showcases."
            href="/online-courses/home-staging"
            showPrice
            showEnrollLink
          />
        </LargeColumn>
        <LargeColumn>
          <CourseTuitionCard
            courseCode="fs"
            subtitle="AFDP™ Certification"
            description="Master the principles of Feng Shui to create harmonious, balanced spaces that boost your clients' well-being."
            href="/online-courses/feng-shui-design"
            showPrice
            showEnrollLink
          />
        </LargeColumn>
      </div>
    </div>
  </section>
);
