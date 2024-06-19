import type { Metadata } from 'next';
import Image from 'next/image';

import HeroImage from './hero.jpg';
import styles from './page.module.scss';
import WhyQCImage from './why-qc.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { CourseType } from '@/components/courseType';
import { Hero } from '@/components/hero';
import { HeroButtons } from '@/components/hero/heroButtons';
import type { CourseCode } from '@/domain/courseCode';

export const metadata: Metadata = {
  title: 'Interior Decorating Course',
};

const courseCodes: CourseCode[] = [ 'i2' ];

const InteriorDecoratingPage: PageComponent = () => (
  <>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="100% 0">
              <CourseType className="mb-2 mb-xl-4">Foundation Course</CourseType>
              <h1 className="mb-2 mb-xl-4">Interior Decorating Course</h1>
              <p className="h5 mb-3 mb-xl-5">Become a Certified Home Designer</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Event School</h2>
            <p className="lead mb-4">QC's Destination Wedding Planning certification course provides students with the most comprehensive training available to succeed in the wedding industry.</p>
            <ul>
              <li>Personalized feedback &amp; advice on your assignments from our top industry wedding planning experts</li>
              <li>Thriving virtual community to connect with other wedding planners, get feedback, and gain access to bonus material</li>
              <li>Built-in business training to help you launch your career and grow your clientele as a certified destination event &amp; wedding planner</li>
              <li>Discounts and affiliations with top organizations including Aisle Planner and The Association of Wedding Planners International</li>
            </ul>
            <p className="mb-0"><strong>Note:</strong> Students should have previous training in event and wedding planning, or relevant work experience before enrolling in this course.</p>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <Image src={WhyQCImage} alt="" className={`img-fluid ${styles.whyQCImage}`} />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default InteriorDecoratingPage;
