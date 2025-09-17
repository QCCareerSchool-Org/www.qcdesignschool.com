import type { Metadata } from 'next';

import type { PageComponent } from '@/app/serverComponent';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { StudentShowcaseCarouselSection } from '@/components/studentShowcaseCarouselSection';
import { TestimonialVideoSection } from '@/components/testimonialVideoSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';

export const metadata: Metadata = {
  title: 'Student Success',
  description: 'Join 45,000+ students and graduates shaping the future of design and explore their inspiring success stories and impressive design work!',
  alternates: { canonical: '/student-success' },
};

const StudentSuccessPage: PageComponent = () => {

  const testimonialIds = [
    'TD-0001',
    'TD-0002',
    'TD-0003',
    'TD-0004',
    'TD-0005',
    'TD-0006',
  ];

  return(
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-7 text-center">
              <h1>Student Success</h1>
              <p className="mb-0">Discover the inspiring success stories of QC Design School graduates, and explore the exceptional designs created by QC's talented students.</p>
            </div>
          </div>
        </div>
      </section>
      <TestimonialVideoSection />
      <TestimonialWallSection testimonialIds={testimonialIds} />
      <GoogleReviewSection className="bg-light" />
      <StudentShowcaseCarouselSection />
      <GetStartedSection
        title="Ready to Start Your Career in Design?"
        buttonHref="/your-career"
        buttonText="Explore Careers"
      />
    </>
  );
};

export default StudentSuccessPage;
