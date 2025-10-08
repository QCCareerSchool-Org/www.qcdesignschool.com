import type { Metadata } from 'next';

import { ThankYouSection } from '@/app/(landing)/_components/thankYouSection';
import type { PageComponent } from '@/app/serverComponent';
import { SupportSection } from '@/components/supportSection';
import { ThreeReasonsSection } from '@/components/threeReasonsSection';

export const metadata: Metadata = {
  title: 'Download Your Landscape Design Course Catalog',
  description: 'Download your course catalog to explore QC\'s Landscape Design Certification and online design courses!',
  alternates: { canonical: '/download-landscape-design-course-catalog' },
  robots: { index: false },
};

const DownloadLandscapeDesignCourseCatalogPage: PageComponent = () => (
  <>
    <ThankYouSection courseName="Landscape Design" course="landscape" download />
    <ThreeReasonsSection />
    <SupportSection showLink />
  </>
);

export default DownloadLandscapeDesignCourseCatalogPage;
