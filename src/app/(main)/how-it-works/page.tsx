import type { Metadata } from 'next';
import type { PageComponent } from '@/app/serverComponent';
import { CertificationSection } from '@/components/certifications/interior-decorating';
import { GetStartedSection } from '@/components/getStartedSection';

export const metadata: Metadata = {
  title: 'How it Works - QC Design School',
};

const HowItWorksPage: PageComponent = () => {

  return(
    <div>
      <section>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-lg-6">
              <h1>How QC's Online Design Training Works</h1>
              <p className="mb-0">QC Design School's online courses provide you with a classroom-like education from the comforts of your home. Life can be hectic, and that's why online courses can be completed on your own time and at your own pace. QC offers home design classes that provide students with hands-on training and personal feedback every step of the way.</p>
            </div>
            <div className="col-12 col-lg-6 text-center">
              <ul>
                <li>Each online design course comes with digital texts, video tutorials, plus customizable business forms and templates.</li>
                <li>You'll complete theory-based AND practical assignments, and submit them directly to QC's Online Student Center. Your tutor, who is an expert in the design industry, reviews your work and provides you with detailed audio feedback and a letter grade.</li>
                <li>Contact the Student Support Team whenever you need additional help or advice with QC's design courses.</li>
                <li>Receive your professional design certification upon completion of your course.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <CertificationSection />
      <GetStartedSection
        title="Start Your Design Career Today!"
        text="It's never too late to start a career you'll love. Enroll in an online course with QC and become a certified design professional today!"
        buttonText="View Courses"
      />
    </div>
  );
};

export default HowItWorksPage;
