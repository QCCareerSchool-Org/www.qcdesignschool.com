import Link from 'next/link';

import { FooterBar } from './_sections/footerBar';
import { Hero } from './_sections/hero';
import { Platform } from './_sections/platform';
import { SubNav } from './_sections/subnav';
import { WhyQC } from './_sections/whyQC';
import type { PageComponent } from '@/app/serverComponent';
import './page.scss';

const InteriorDecoratingPreviewPage: PageComponent = () => {
  // const { countryCode } = await getData();

  return (
    <div className="d-flex flex-column">
      <div>
        <Hero />
        <SubNav />
        <WhyQC />
        <Platform />
      </div>
      <FooterBar>Ready to Start Your Interior Design Career? <span className="ms-3"><Link href="https://enroll.qcdesignschool.com"><button className="btn btn-primary">Enroll Today</button></Link></span></FooterBar>
    </div>
  );
};

export default InteriorDecoratingPreviewPage;
