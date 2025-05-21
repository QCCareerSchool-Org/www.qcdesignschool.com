import type { Metadata } from 'next';

import { ThankYouSection } from '@/app/(main)/(thank-you)/_components/thankYouSection';
import type { PageComponent } from '@/app/serverComponent';
import { SupportSection } from '@/components/supportSection';
import { ThreeReasonsSection } from '@/components/threeReasonsSection';

export const metadata: Metadata = {
  title: 'Download Your Interior Decorating Course Catalog',
  description: 'Download your course catalog to explore QC\'s Interior Decorating Certification and online design courses!',
  alternates: { canonical: '/download-interior-decorating-course-catalog' },
  robots: { index: false },
};

const DownloadInteriorDecoratingCourseCatalogPage: PageComponent = () => (
  <>
    <ThankYouSection courseName="Inerior Decorating" />
    <ThreeReasonsSection />
    <SupportSection showLink />
  </>
);

export default DownloadInteriorDecoratingCourseCatalogPage;
