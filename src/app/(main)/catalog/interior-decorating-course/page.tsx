import type { Metadata } from 'next';

import type { PageComponent } from '@/app/serverComponent';
import { SupportSection } from '@/components/supportSection';
import { ThankYouSection } from '@/components/thankYouSection';
import { ThreeReasonsSection } from '@/components/threeReasonsSection';

export const metadata: Metadata = {
  title: 'Your Interior Decorating Course Catalog',
  description: 'Your course catalog has been emailed. Download it to explore QC\'s Interior Decorating Certification and online design courses!',
  alternates: { canonical: '/thank-you-interior-decorating-course-catalog' },
  robots: { index: false },
};

const InteriorDecoratingCourseCatalogPage: PageComponent = () => {
  return (
    <>
      <ThankYouSection courseName="Interior Decorating" />
      <ThreeReasonsSection />
      <SupportSection showLink />
    </>
  );
};

export default InteriorDecoratingCourseCatalogPage;
