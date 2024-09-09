import type { Metadata } from 'next';
import { LeadProcessingComponent } from '../leadProcessing';
import ThankYouCourseCatalogComponent from '../thankYouPage';
import type { PageComponent } from '@/app/serverComponent';

export const metadata: Metadata = {
  title: 'Your Course Catalog - QC Design School',
};

const ThankYouCourseCatalogPage: PageComponent = ({ searchParams }) => (
  <>
    <LeadProcessingComponent searchParams={searchParams} />
    <ThankYouCourseCatalogComponent courseName="Landscape Design" />
  </>
);

export default ThankYouCourseCatalogPage;
