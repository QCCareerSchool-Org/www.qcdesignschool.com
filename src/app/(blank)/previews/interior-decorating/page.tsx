import Link from 'next/link';

import { CareerOutcomes } from './_sections/careerOutcomes';
import { Curriculum } from './_sections/curriculum';
import { FAQ } from './_sections/faq';
import { FooterBar } from './_sections/footerBar';
import { Hero } from './_sections/hero';
import { Platform } from './_sections/platform';
import { RelatedCourses } from './_sections/relatedCourses';
import { Stories } from './_sections/stories';
import { SubNav } from './_sections/subnav';
import { Tuition } from './_sections/tuition';
import { WhyQC } from './_sections/whyQC';
import type { PageComponent } from '@/app/serverComponent';
import './page.scss';
import { GetStartedSection } from '@/components/getStartedSection';
import { getData } from '@/lib/getData';
import { getDesignRestricted } from '@/lib/restrictions';

const InteriorDecoratingPreviewPage: PageComponent = async () => {
  const { countryCode, provinceCode } = await getData();
  const designRestricted = getDesignRestricted(countryCode, provinceCode);

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
        <RelatedCourses />
        <FAQ />
        <GetStartedSection
          title={`Ready to Start Your Interior ${designRestricted ? 'Decorating' : 'Design'} Career?`}
          courseCodes={[ 'i2' ]}
        />
      </div>
      <FooterBar><div className="d-flex align-items-center justify-content-center flex-column flex-md-row"><div>Ready to Start Your Interior Design Career?</div> <span className="mt-2 mt-md-0 ms-md-3"><Link href="https://enroll.qcdesignschool.com"><button className="btn btn-primary">Enroll Today</button></Link></span></div></FooterBar>
    </div>
  );
};

export default InteriorDecoratingPreviewPage;
