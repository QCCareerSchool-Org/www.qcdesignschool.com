import Link from 'next/link';

import { CareerOutcomes } from './_sections/careerOutcomes';
import { Curriculum } from './_sections/curriculum';
import { FooterBar } from './_sections/footerBar';
import { Hero } from './_sections/hero';
import { Platform } from './_sections/platform';
import { Stories } from './_sections/stories';
import { SubNav } from './_sections/subnav';
import { Tuition } from './_sections/tuition';
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
        <Curriculum />
        <CareerOutcomes />
        <Tuition />
        <Stories />
      </div>
      <FooterBar><div className="d-flex align-items-center justify-content-center flex-column flex-md-row"><div>Ready to Start Your Interior Design Career?</div> <span className="mt-2 mt-md-0 ms-md-3"><Link href="https://enroll.qcdesignschool.com"><button className="btn btn-primary">Enroll Today</button></Link></span></div></FooterBar>
    </div>
  );
};

export default InteriorDecoratingPreviewPage;
