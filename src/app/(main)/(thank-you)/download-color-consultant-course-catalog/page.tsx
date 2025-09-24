import type { Metadata } from 'next';

import { ThankYouSection } from '../_components/thankYouSection';
import type { PageComponent } from '@/app/serverComponent';
import { SupportSection } from '@/components/supportSection';
import { ThreeReasonsSection } from '@/components/threeReasonsSection';

export const metadata: Metadata = {
  title: 'Download Your Color Consultant Course Catalog',
  description: 'Download your course catalog to explore QC\'s Color Consultant Certification and online design courses!',
  alternates: { canonical: '/download-color-consultant-course-catalog' },
  robots: { index: false },
};

const DownloadColorConsultantCourseCatalogPage: PageComponent = () => {
  return (
    <>
      <ThankYouSection courseName="Color Consultant" download />
      <ThreeReasonsSection />
      <SupportSection showLink />
    </>
  );
};

export default DownloadColorConsultantCourseCatalogPage;
