import type { Metadata } from 'next';
// import Link from 'next/link';

import styles from './index.module.scss';
import ScrollButton from './scroll-button';
import type { PageComponent } from '@/app/serverComponent';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { CountUp } from '@/components/paymentPlanSection/countUp';
import { StudentShowcaseSection } from '@/components/studentShowcase';
import { students } from '@/components/studentShowcase/data';
import { StudentShowcaseCarouselSection } from '@/components/studentShowcaseCarouselSection';

export const metadata: Metadata = {
  title: 'Student Success',
  description: 'Join 45,000+ students and graduates shaping the future of design and explore their inspiring success stories and impressive design work!',
  alternates: { canonical: '/student-success' },
};

// const testimonialIds = ['TD-0001', 'TD-0002', 'TD-0003', 'TD-0004', 'TD-0005', 'TD-0006'];

const SuccessPage: PageComponent = () => (
  <div className={styles.page}>
    <section className="bg-light">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-md-10 col-xl-9 col-xxl-8">
            <div className={styles.subtitle}>40 Years of Excellence in Distance Education</div>
            <h2 className="mb-4"><>Join <CountUp value={45} />,000+ Students &amp; Graduates Shaping the Future of Design</></h2>
            <p className="lead mb-0">With over 45,000 students &amp; graduates and 40 years in distance education, QC Design School empowers your passion for design and transforms it into a successful career. Learn from the best and join a community that's redefining the industry.</p>
          </div>
          <div className="text-left">
            <ScrollButton targetSelector="section" />
          </div>
        </div>
      </div>
    </section>

    <StudentShowcaseSection student={students['chantal-marion']} />
    <GoogleReviewSection className="bg-light" />
    <StudentShowcaseCarouselSection />
    <GetStartedSection
      title="Ready to Start Your Career in Design?"
      buttonHref="/your-career"
      buttonText="Explore Careers"
    />
  </div>
);

export default SuccessPage;
