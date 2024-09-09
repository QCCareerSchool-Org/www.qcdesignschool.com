import type { Metadata } from 'next';
import Image from 'next/image';

import { OutlineSection } from '../../online-courses/interior-decorating/_outlineSection';
import { CertificationSection } from '../../online-courses/interior-decorating/certificationSection';
import { TutorSection } from '../../online-courses/interior-decorating/tutorSection';
import WhyQCImage from '../../online-courses/interior-decorating/what-youll-learn.jpg';
import styles from '../index.module.scss';
import type { PageComponent } from '@/app/serverComponent';
import { CareerEssentialsKitSection } from '@/components/careerEssentialsKitSection';
import { GetStartedSection } from '@/components/getStartedSection';
import { GuaranteeSection } from '@/components/guaranteeSection';
import { TestimonialSection } from '@/components/testimonialSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';

export const metadata: Metadata = {
  title: 'Interior Decorating Course - QC Design School',
};

const testimonialIds = [ 'TD-0006', 'TD-0008', 'TD-0009', 'TD-0010', 'TD-0011', 'TD-0012' ];
const courseCodes = [ 'i2' ];

const InteriorDecoratingPage: PageComponent = () => (
  <>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Launch Your Career in Interior Decorating</h2>
            <p className="lead mb-4">QC's Interior Decorating certification course provides students with the most comprehensive training available to succeed in the home design industry.</p>
            <ul>
              <li>No previous training is required&mdash;our premium interior decorating course is designed to take you from beginner to expert</li>
              <li>Personalized feedback and advice on your assignments from our top industry design experts</li>
              <li>Thriving virtual community to connect with other decorators, get feedback and gain exclusive access to bonus materials</li>
              <li>Built-in business training and real-world templates to help you launch your design career and grow your clientele as a certified interior decorator</li>
              <li>Discounts and affiliations with top organizations including the American Society of Professional Organizers, Decorators & Designers Association of Canada, and more</li>
            </ul>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <Image src={WhyQCImage} alt="" className={`img-fluid ${styles.whyQCImage}`} />
          </div>
        </div>
      </div>
    </section>
    <TestimonialWallSection testimonialIds={testimonialIds} className="bg-light" />
    <CertificationSection />
    <VirtualCommunitySection />
    <TutorSection className="bg-light" />
    <OutlineSection />
    <CareerEssentialsKitSection />
    <TestimonialSection id="TD-0006" />
    <GuaranteeSection className="bg-light" />
    <GetStartedSection
      title="Ready to start your home design & decorating career?"
      text="Become professionally certified with QC's online interior decorating training"
      courseCodes={courseCodes}
    />
  </>
);

export default InteriorDecoratingPage;
