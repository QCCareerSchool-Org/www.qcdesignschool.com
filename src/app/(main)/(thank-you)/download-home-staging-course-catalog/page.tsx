import type { Metadata } from 'next';

import { ThankYouSection } from '@/app/(landing)/_components/thankYouSection';
import type { PageComponent } from '@/app/serverComponent';
import { SupportSection } from '@/components/supportSection';
import { ThreeReasonsSection } from '@/components/threeReasonsSection';

export const metadata: Metadata = {
  title: 'Your Home Staging Course Catalog',
  description: 'Your course catalog has been emailed. Download it to explore QC\'s Home Staging Certification and online design courses!',
  alternates: { canonical: '/download-home-staging-course-catalog' },
  robots: { index: false },
};

const DownloadHomeStagingCourseCatalogPage: PageComponent = () => (
  <>
    <ThankYouSection courseName="Home Staging" course="staging" download />
    <ThreeReasonsSection />
    <SupportSection showLink />
  </>
);

export default DownloadHomeStagingCourseCatalogPage;
