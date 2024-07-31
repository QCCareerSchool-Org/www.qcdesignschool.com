import type { Metadata } from 'next';

import Link from 'next/link';
import { BottomSection } from '../bottomSection';
import { Header } from '../header';
import { AboutSection } from './_sections/aboutSection';
import { CertificationSection } from './_sections/certificationSection';
import { HeroSection } from './_sections/heroSection';
import { HowYoullLearnSection } from './_sections/howYoullLearnSection';
import { JoinQCSection } from './_sections/joinQCSection';
import type { PageComponent } from '@/app/serverComponent';
import DownloadIcon from '@/components/icons/download.svg';
import { TestimonialSection } from '@/components/testimonialSection';

export const metadata: Metadata = {
  title: 'Free Catalog - QC Design School',
};

const FreeCatalogPage: PageComponent = () => {
  return (
    <>
      <Header logoLink buttonContent={<><span className="text-light"><DownloadIcon height="14" className="me-2" style={{ position: 'relative', top: -1 }} /></span><span className="d-none d-sm-inline">Get Your Free </span>Catalog</>} />
      <HeroSection />
      <HowYoullLearnSection />
      <JoinQCSection />
      <TestimonialSection id="TD-0006" />
      <CertificationSection />
      <AboutSection />
      <BottomSection>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-9 col-xxl-8">
            <h2 className="mb-5">Get Started with a Free Course Catalog</h2>
            <Link href="#" className="btn btn-primary btn-lg">Get Your Free Catalog</Link>
          </div>
        </div>
      </BottomSection>
    </>
  );
};

export default FreeCatalogPage;
