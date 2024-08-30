import type { Metadata } from 'next';
import Image from 'next/image';
import type { PageComponent } from '../../serverComponent';
import { OutlineSection } from './_outlineSection';
import WhatYoullLearnImage from './images/what-youll-learn.jpg';
import styles from './page.module.scss';
import { CareerEssentialsKitSection } from '@/components/careerEssentialsKitSection';
import { CertificationSection } from '@/components/certificationSection';
import { GetStartedSection } from '@/components/getStartedSection';
import ShieldIcon from '@/components/icons/shield.svg';
import { TestimonialSection } from '@/components/testimonialSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { AngieChapmanCircle } from '@/components/tutors/angieChapman';
import { JaneLockhartCircle } from '@/components/tutors/janeLockhart';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';

export const metadata: Metadata = {
  title: 'Become a Home Designer - QC Design School',
};

const testimonialIds = [
  'TD-0001',
  'TD-0002',
  'TD-0003',
  'TD-0004',
  'TD-0005',
  'TD-0006',
];

const BecomeAHomeDesignerPage: PageComponent = () => (
  <div>
    <section>
      <div className="container">
        <div className="row justify-content-center g-5 align-items-center">
          <div className="col-12 col-lg-7 mb-3">
            <h1>Launch Your Career in Home Staging</h1>
            <p className="lead">Learn online and become a Certified Home Stager with QC's professional courses. With QC's Home Staging Course, you'll receive:</p>
            <ul>
              <li>Professional and industry-leading content</li>
              <li>An International Staging and Redesign Professional (ISRP™) double certification</li>
              <li>Full business training to prepare you for a new career</li>
              <li>14 full-color home staging and redesign lesson books, and 3 bonus online texts</li>
              <li>A professional starter kit which includes a set of watercolor paints, a furniture template, a scale ruler, a paintbrush, and more!</li>
              <li>One-on-one mentoring throughout your course</li>
              <li>50% off all additional courses so you can continue mastering your skills</li>
            </ul>
          </div>
          <div className="col-10 col-sm-7 col-lg-5">
            <div className={styles.imageContainer}>
              <Image src={WhatYoullLearnImage} alt="" className={styles.mainImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
    <TestimonialWallSection testimonialIds={testimonialIds} className="bg-light" />
    <CertificationSection />
    <VirtualCommunitySection
      text="We're here to inspire, inform, and innovate your educational journey. Discover the vibrant heart of our Virtual Community, where students and graduates connect to mentor, share insights, and grow together. Tap into free webinars for deep dives into design and industry secrets, and join lively chats for discussions that range from studies to career paths."
      callToAction="Join us in shaping the future of design innovation."
    />
    <section className="bg-light">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-md-10 col-lg-7">
            <h2>Meet Your Home Staging Experts</h2>
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
    <TestimonialSection id="TD-0001" />
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

export default BecomeAHomeDesignerPage;
