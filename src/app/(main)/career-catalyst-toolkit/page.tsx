import type { Metadata } from 'next';
import Link from 'next/link';

import HeroImage from './hero.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { AlertBar } from '@/components/alertBar';
import { BackgroundImage } from '@/components/backgroundImage';
import { Subtitle } from '@/components/subtitle';

export const metadata: Metadata = {
  title: 'Career Catalyst Toolkit',
  description: 'Take your design career to new heights with our exclusive Career Catalyst Toolkit package.',
};

const CareerCatalystToolkitPage: PageComponent = () => (
  <>
    <AlertBar variant="red">Limited Availability! <b>Claim Your Spot Now!</b></AlertBar>
    <section className="bg-dark text-white text-shadow">
      <BackgroundImage src={HeroImage} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="mb-3"><Subtitle>Exclusive Opportunity</Subtitle></div>
            <h1 className="mb-3">Career Catalyst Toolkit</h1>
            <p className="mb-5">Take your design career to new heights with our exclusive Career Catalyst Toolkit package. This limited-time offer combines personalized expert guidance, premium <i>Canva</i> templates, and four months of complimentary access to top-tier design tools. Available now to a select number of students, the Career Catalyst Toolkit is your gateway to streamlined workflows, enhanced branding, and a competitive edge in the design industry.</p>
            <a href="https://enroll.qcdesignschool.com" className="btn btn-primary me-3">Enroll & Secure Your Spot</a>
            <Link href="#" className="btn btn-outline-light">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default CareerCatalystToolkitPage;
