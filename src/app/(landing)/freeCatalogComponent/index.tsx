import Link from 'next/link';
import type { FC } from 'react';
import { BottomSection } from '../bottomSection';
import { AboutSection } from './_sections/aboutSection';
import { HowYoullLearnSection } from './_sections/howYoullLearnSection';
import { JoinQCSection } from './_sections/joinQCSection';
import { TestimonialSection } from '@/components/testimonialSection';

type Props = {
  courseName: string;
  professionTitle: string;
  CertificationSection: FC;
};

export const FreeCatalogComponent: FC<Props> = ({ courseName, professionTitle, CertificationSection }) => {

  return (
    <>
      <HowYoullLearnSection professionTitle={professionTitle} />
      <JoinQCSection />
      <TestimonialSection id="TD-0006" />
      <CertificationSection />
      <AboutSection courseName={courseName} />
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
