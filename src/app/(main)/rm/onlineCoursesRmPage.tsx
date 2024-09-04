import type { FC } from 'react';
import styles from './page.module.scss';
import { CareerEssentialsKitSection } from '@/components/careerEssentialsKitSection';
import { GetStartedSection } from '@/components/getStartedSection';
import ShieldIcon from '@/components/icons/shield.svg';
import { TestimonialSection } from '@/components/testimonialSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { AngieChapmanCircle } from '@/components/tutors/angieChapman';
import { JaneLockhartCircle } from '@/components/tutors/janeLockhart';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';

type Props = {
  IntroSection: FC;
  OutlineSection: FC;
  CertificationSection: FC;
  testimonialIds: string[];
};

export const OnlineCoursePageRM: FC<Props> = ({ IntroSection, OutlineSection, CertificationSection, testimonialIds }) => (
  <div>
    <IntroSection />
    <TestimonialWallSection testimonialIds={testimonialIds} className="bg-light" />
    <CertificationSection />
    <VirtualCommunitySection />
    <section className="bg-light">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-md-10 col-lg-7">
            <h2>Meet Your Interior Design Experts</h2>
            <p className="lead mb-0">QC is proud to work with leaders of the global design industry to develop our courses. Our international team of instructors bring diverse experience and skills to aspiring designers around the globe.</p>
          </div>
        </div>
        <div className="row g-5 g-lg-s">
          <div className="col-12 col-lg-6">
            <div className="mb-3"><JaneLockhartCircle /></div>
            <h3 className="h4">Jane Lockhart</h3>
            <p className="mb-0">Many recognize Jane from her show, Color Confidential, on HGTV and W Network. She is also the best-selling author of two books and frequently lends her design expertise to Canadian television shows including The Marilyn Denis Show and Cityline.</p>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mb-3"><AngieChapmanCircle /></div>
            <h3 className="h4">Angie Chapman</h3>
            <p className="mb-0">Award-winning interior design consultant and founder of Angie Chapman Interiors, Angie is a driving force in the design world. With over 10 years of experience in the industry, she has honed her skills and expertise to become an sought-after designer.</p>
          </div>
        </div>
      </div>
    </section>
    <OutlineSection />
    <CareerEssentialsKitSection />
    <TestimonialSection id={testimonialIds[0]} />
    <section className="bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xxl-6 text-center">
            <ShieldIcon height="32" className="mb-3" />
            <h2 className={`${styles.moneyBackHeader} mb-3`}>21-Day Money-Back Guarantee</h2>
            <h3 className="mb-3">Money-Back Guarantee</h3>
            <p className="mb-0">After enrolling, you have 21 days to review your course materials. If the course isn't right for you, simply contact us for a full refund!</p>
          </div>
        </div>
      </div>
    </section>
    <GetStartedSection
      title="Ready To Start Your Interior Design and Decorating Career?"
      text="Become Professionally Certified with QC's Online Design and Decorating Course"
    />
  </div>
);
