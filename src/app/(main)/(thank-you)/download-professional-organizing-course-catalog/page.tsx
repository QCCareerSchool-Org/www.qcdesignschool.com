import type { Metadata } from 'next';

import { ThankYouSection } from '@/app/(main)/(thank-you)/_components/thankYouSection';
import type { PageComponent } from '@/app/serverComponent';
import { SupportSection } from '@/components/supportSection';
import { ThreeReasonsSection } from '@/components/threeReasonsSection';

export const metadata: Metadata = {
  title: 'Download your Professional Organizing Course Catalog',
  description: 'Download your course catalog to explore QC\'s Professional Organizing Certification and online design courses!',
  alternates: { canonical: '/download-landscape-design-course-catalog' },
  robots: { index: false },
};

const DownloadProfessionalOrganizingCourseCatalogPage: PageComponent = () => (
  <>
    <ThankYouSection courseName="Professional Organizing" />
    <ThreeReasonsSection />
    <SupportSection showLink />
  </>
);

export default DownloadProfessionalOrganizingCourseCatalogPage;
