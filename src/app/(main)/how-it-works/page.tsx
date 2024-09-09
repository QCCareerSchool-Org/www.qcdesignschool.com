import type { Metadata } from 'next';
import Link from 'next/link';

import { CertificationSection } from '../online-courses/interior-decorating/certificationSection';
import type { PageComponent } from '@/app/serverComponent';
import { GetStartedSection } from '@/components/getStartedSection';

export const metadata: Metadata = {
  title: 'How it Works - QC Design School',
};

const HowItWorksPage: PageComponent = () => (
  <div>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12 col-lg-6">
            <h1 className="h2 mb-4">How QC's Online Design Training Works</h1>
            <p className="mb-0">QC Design School's online courses provide you with a classroom-like education from the comforts of your home. Life can be hectic, and that's why online courses can be completed on your own time and at your own pace. QC offers home design classes that provide students with hands-on training and personal feedback every step of the way.</p>
          </div>
          <div className="col-12 col-lg-6">
            <ul className="mb-0">
              <li className="col-12">Each <Link href="/online-courses" className="text-decoration-none">online design course</Link> comes with digital texts, video tutorials, plus customizable business forms and templates.</li>
              <li className="col-12">You'll complete theory-based AND practical assignments, and submit them directly to QC's Online Student Center. Your tutor, who is an expert in the design industry, reviews your work and provides you with detailed audio feedback and a letter grade.</li>
              <li className="col-12">Contact the Student Support Team whenever you need additional help or advice with QC's design courses.</li>
              <li className="col-12">Receive your professional design certification upon completion of your course.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-light">
      <div className="container">
        <div className="row justify-content-center g-5">
          <div className="col-12 col-md-8 col-lg-4 text-center">
            <p className="text-primary fst-italic text-uppercase">Step 1</p>
            <h2 className="h4">Access Course Materials</h2>
            <p>When you enroll with QC Design School, you'll have full access to the Online Student Center where you'll find all your online course texts, assignment templates, videos, and more. You'll have easy, convenient access to everything you need to complete your course!</p>
          </div>
          <div className="col-12 col-md-8 col-lg-4 text-center">
            <p className="text-primary fst-italic text-uppercase">Step 2</p>
            <h2 className="h4">Submit Your Assignments</h2>
            <p>Once you've finished a unit, you'll submit your design assignments through the Online Student Center, and these will be sent directly to your personal tutor. Your tutor reviews your work and provides expert feedback within 7-10 business days!</p>
          </div>
          <div className="col-12 col-md-8 col-lg-4 text-center">
            <p className="text-primary fst-italic text-uppercase">Step 3</p>
            <h2 className="h4">Review Your Feedback</h2>
            <p>In their feedback, your tutor will identify areas of opportunity and highlight your areas of strength. You'll review this advice to improve your skills for the next unit. With each assignment, you'll build on the materials you've learned, to develop your skills as a professional home designer.</p>
          </div>
        </div>
      </div>
    </section>
    <CertificationSection />
    <GetStartedSection
      title="Start Your Design Career Today!"
      text="It's never too late to start a career you'll love. Enroll in an online course with QC and become a certified design professional today!"
      buttonText="View Courses"
      buttonHref="/online-courses"
    />
  </div>
);

export default HowItWorksPage;
