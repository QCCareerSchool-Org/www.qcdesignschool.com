import type { FC } from 'react';

import { CourseTuitionCard } from '@/components/courseTuitionCard';

interface Props {
  designRestricted: boolean;
}

export const RelatedCourses: FC<Props> = ({ designRestricted }) => (
  <section id="related-courses">
    <div className="container text-center">
      <p className="lead mb-3">Related Courses</p>
      <h2 className="mb-5">Grow Beyond {designRestricted ? 'Decorating' : 'Design'}</h2>
      <p>Expand your expertise and open the door to new income opportunities.<br />Plus, get 50% off each additional course.</p>
      <div className="row justify-content-center g-4">
        <div className="col-12 col-sm-10 col-lg-6 col-xl-4 d-flex">
          <CourseTuitionCard
            courseCode="st"
            subtitle="ISRP™ Certification"
            description="Sell properties faster—learn curb-appeal magic and interior marketing."
            href="/online-courses/home-staging"
            showEnrollLink
          />
        </div>
        <div className="col-12 col-sm-10 col-lg-6 col-xl-4 d-flex">
          <CourseTuitionCard
            courseCode="cc"
            subtitle="ICCP™ Certification"
            description="Become the go-to guru for paint hues, fabric palettes, and mood creation."
            href="/online-courses/color-consultant"
            showEnrollLink
          />
        </div>
        <div className="col-12 col-sm-10 col-lg-6 col-xl-4 d-flex">
          <CourseTuitionCard
            courseCode="ld"
            subtitle="ILDP™ Certification"
            description="From patios to pollinator gardens—design stunning outdoor spaces."
            href="/online-courses/landscape-design"
            showEnrollLink
          />
        </div>
        <div className="col-12 col-sm-10 col-lg-6 col-xl-4 d-flex">
          <CourseTuitionCard
            courseCode="fs"
            subtitle="AFDP™ Certification"
            description="Balance ch’i for harmonious and energetically aligned environments."
            href="/online-courses/feng-shui-design"
            showEnrollLink
          />
        </div>
        <div className="col-12 col-sm-10 col-lg-6 col-xl-4 d-flex">
          <CourseTuitionCard
            courseCode="po"
            subtitle="AIOP™ Certification"
            description="Turn chaos into calm—and build a thriving business doing it."
            href="/online-courses/professional-organizing"
            showEnrollLink
          />
        </div>
        <div className="col-12 col-sm-10 col-lg-6 col-xl-4 d-flex">
          <CourseTuitionCard
            courseCode="ed"
            subtitle="IEDP™ Certification"
            description="Master SEO, marketing funnels, and automations for creative entrepreneurs."
            href="/online-courses/event-decor"
            showEnrollLink
          />
        </div>
      </div>
    </div>
  </section>
);
