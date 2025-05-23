import type { Metadata } from 'next';
import Link from 'next/link';

import { Blurb } from './blurb';
import { experts, tutors } from './tutorInformation';
import type { PageComponent } from '@/app/serverComponent';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';

export const metadata: Metadata = {
  title: 'Instructors',
  description: 'Enroll at QC Design School to be matched with an expert instructor who offers personalized feedback.',
  alternates: { canonical: '/instructors' },
};

const TutorsPage: PageComponent = () => (
  <>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12 col-xl-10 col-xxl-8 text-xl-center">
            <h1 className="mb-3">QC Design School Instructors</h1>
            <p className="lead mb-0">QC Design School is proud to work with many successful design industry professionals who will be your instructors as you work toward your certification. Your instructors include personal tutors, who will provide feedback on your work, as well as content experts, who have worked with QC to develop cutting-edge course materials. Our accomplished instructors have years of experience in the industry and are eager to share their professional insights with you.</p>
          </div>
          <div className="row justify-content-center g-5 mt-s">
            <h2 className="text-center my-0">QC Experts</h2>
            <p>Our industry experts have helped shape QC's course content using their extensive real-world experience to help us develop the most professional, practical, and up-to-date courses available.</p>
            {experts.map((t, i) => (
              <div key={i}>
                <Blurb name={t.name} description={t.description} src={t.src} priority={i <= 1} />
              </div>
            ))}
          </div>
          <div className="row justify-content-center g-5">
            <h2 className="text-center my-0">Tutors</h2>
            <p>Your personal tutor will review your work and give you detailed feedback throughout your course. They're here to support your growth, offer guidance, and help you succeed every step of the way.</p>
            {tutors.map((t, i) => (
              <div key={i}>
                <Blurb name={t.name} description={t.description} src={t.src} priority={i <= 1} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <VirtualCommunitySection />
    <GoogleReviewSection />
    <section className="bg-navy text-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10 col-xxl-8 text-center">
            <h2 className="mb-3">Unlock Your Home Design Potential with Expert Insights!</h2>
            <p className="lead mb-3">Dive into learning with individualized guidance from renowned experts in the design industry.</p>
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
