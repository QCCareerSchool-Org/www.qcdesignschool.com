import type { Metadata } from 'next';

import { ThankYouSection } from '@/app/(main)/(thank-you)/_components/thankYouSection';
import type { PageComponent } from '@/app/serverComponent';
import { SupportSection } from '@/components/supportSection';
import { ThreeReasonsSection } from '@/components/threeReasonsSection';

export const metadata: Metadata = {
  title: 'Download your Feng Shui Design Course Catalog',
  description: 'Download your course catalog to explore QC\'s Feng Shui Certification and online design courses!',
  alternates: { canonical: '/download-feng-shui-design-course-catalog' },
  robots: { index: false },
};

const DownloadFengShuiDesignCourseCatalogPage: PageComponent = () => (
  <>
    <ThankYouSection courseName="Feng Shui Design" course="feng-shui" download />
    <ThreeReasonsSection />
    <SupportSection showLink />
  </>
);

export default DownloadFengShuiDesignCourseCatalogPage;
