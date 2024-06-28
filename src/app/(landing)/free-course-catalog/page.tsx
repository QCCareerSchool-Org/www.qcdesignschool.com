import type { Metadata } from 'next';

import Link from 'next/link';
import { BottomSection } from '../bottomSection';
import { Header } from '../header';
import { AboutSection } from './_sections/aboutSection';
import { CertificationSection } from './_sections/certificationSection';
import { HeroSection } from './_sections/heroSection';
import { IndustrySection } from './_sections/industrySection';
import { JoinQCSection } from './_sections/joinQCSection';
import type { PageComponent } from '@/app/serverComponent';
import DownloadIcon from '@/components/download.svg';
import { TestimonialSection } from '@/components/testimonialSection';

export const metadata: Metadata = {
  title: 'Free Catalog - QC Event School',
};

const FreeCatalogPage: PageComponent = () => {
  return (
    <>
      <Header logoLink buttonContent={<><span className="text-light"><DownloadIcon height="14" className="me-2" style={{ position: 'relative', top: -1 }} /></span><span className="d-none d-sm-inline">Get Your Free </span>Catalog</>} />
      <HeroSection />
      <IndustrySection />
      <JoinQCSection />
      <TestimonialSection id="TE-0006" />
      <CertificationSection />
      <AboutSection />
      <BottomSection>
        <h2 className="mb-5">Get Started with a Free Course Catalog</h2>
        <Link href="#" className="btn btn-primary btn-lg">Get Your Free Catalog</Link>
      </BottomSection>
    </>
  );
};

export default FreeCatalogPage;
