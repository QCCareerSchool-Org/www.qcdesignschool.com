import type { Metadata } from 'next';

import { CarouselSection } from './carouselSection';
import type { PageComponent } from '@/app/serverComponent';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { TestimonialVideoSection } from '@/components/testimonialVideoSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';

export const metadata: Metadata = {
  title: 'Contact Us - QC Design School',
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
              <p className="mb-0">Explore the success stories of our students and graduates, and take a look at the impressive event works crafted by our talented students.</p>
            </div>
          </div>
        </div>
      </section>
      <TestimonialVideoSection />
      <TestimonialWallSection testimonialIds={testimonialIds} />
      <GoogleReviewSection className="bg-light" />
      <CarouselSection />
      <GetStartedSection
        title="Ready to Start Your Career in Design?"
      />
    </>
  );
};

export default StudentSuccessPage;
