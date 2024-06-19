import type { Metadata } from 'next';
import Image from 'next/image';

import HeroImage from './hero.jpg';
import styles from './page.module.scss';
import WhyQCImage from './why-qc.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { CourseType } from '@/components/courseType';
import { Hero } from '@/components/hero';
import { HeroButtons } from '@/components/hero/heroButtons';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import type { CourseCode } from '@/domain/courseCode';

export const metadata: Metadata = {
  title: 'Feng Shui Design Course',
};

const testimonialIds = [ 'DT-0001', 'DT-0001', 'DT-0001', 'DT-0001', 'DT-0001', 'DT-0001' ];
const courseCodes: CourseCode[] = [ 'fs' ];

const FengShuiDesignPage: PageComponent = () => (
  <div className={styles.page}>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="100% 0">
              <CourseType className="mb-2 mb-xl-4">Specialty Course</CourseType>
              <h1 className="mb-2 mb-xl-4">Feng Shui Design Course</h1>
              <p className="h5 mb-3 mb-xl-5">Become a Certified Feng Shui Designer</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Design School</h2>
            <p className="lead mb-4">QC's Feng Shui Design certification course provides students with the most comprehensive training available to succeed in the home design industry.</p>
            <ul>
              <li>No previous training required&mdash;our premium Feng Shui Design course is designed to take you from beginner to expert</li>
              <li>Personalized feedback and advice on your assignments from our top industry home design experts</li>
              <li>Thriving virtual community to connect with other home designers, get feedback and gain exclusive access to bonus material</li>
              <li>Built-in business training and real-world templates to help you launch your career and grow your clientele as a certified Feng Shui professional</li>
              <li>Discounts and affiliations with top organizations including the American Society of Professional Organizers, Decorators & Designers Association of Canada and more</li>
            </ul>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <Image src={WhyQCImage} alt="" className={`img-fluid ${styles.whyQCImage}`} />
          </div>
        </div>
      </div>
    </section>
    <TestimonialWallSection testimonialIds={testimonialIds} className="bg-light" />
    <PaymentPlanSection courseCodes={courseCodes} />
  </div>
);

export default FengShuiDesignPage;
