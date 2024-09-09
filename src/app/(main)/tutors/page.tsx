import type { Metadata } from 'next';
import Link from 'next/link';

import { Blurb } from './blurb';
import { tutors } from './tutorInformation';
import type { PageComponent } from '@/app/serverComponent';
import { TestimonialSection } from '@/components/testimonialSection';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';

export const metadata: Metadata = {
  title: 'Tutors - QC Event School',
};

const TutorsPage: PageComponent = () => (
  <>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12 col-xl-10 col-xxl-8 text-xl-center">
            <h1 className="mb-3">QC Design School Tutors</h1>
            <p className="lead mb-0">Once you enroll with QC Design School, you'll be matched with a personal tutor who will review your work and provide you with in-depth feedback and advice. Our accomplished tutors have years of experience in the industry and are eager to share their professional insights with you.</p>
          </div>
          {tutors.map((t, i) => (
            <div key={i} className="col-12">
              <Blurb name={t.name} description={t.description} src={t.src} priority={i <= 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <VirtualCommunitySection />
    <TestimonialSection id="TD-0013" />
    <section className="bg-navy text-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10 col-xxl-8 text-center">
            <h2 className="mb-3">Unlock Your Home Design Potential with Expert Insights!</h2>
            <p className="lead mb-3">Dive into learning with individualized guidance from experts in event and wedding planning</p>
            <div className="d-flex justify-content-center">
              <Link className="btn btn-primary me-3" href="https://enroll.qcdesignschool.com">Enroll Now</Link>
              <Link className="btn btn-outline-light" href="/online-courses">View Courses</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default TutorsPage;
