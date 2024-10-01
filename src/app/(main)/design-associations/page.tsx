import type { Metadata } from 'next';

import Background from './background.jpeg';
import { DesignAssociationSection } from './designAssociationSection';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';

export const metadata: Metadata = {
  title: 'QC Design School',
};

const HomePage: PageComponent = () => (
  <div>
    {/* two different displays based on size */}
    <section className="d-none d-md-block">
      <BackgroundImage priority src={Background} />
      <div className="container text-white">
        <div className="row justify-content-end">
          <div className="col-md-6 col-lg-5 ">
            <h1 className="mb-4">Professional Associations & Preferred Partners</h1>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-md-6 col-lg-5">
            <p className="lead mb-5">Design associations offer opportunities to network and enhance your professional skills. Students and graduates of QC Design School have access to the following associations:</p>
          </div>
        </div>
      </div>
    </section>
    <section className="d-block d-md-none">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-5 ">
            <h1 className="mb-4">Professional Associations & Preferred Partners</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-5">
            <p className="lead mb-5">Design associations offer opportunities to network and enhance your professional skills. Students and graduates of QC Design School have access to the following associations:</p>
          </div>
        </div>
      </div>
    </section>
    <DesignAssociationSection />
  </div>
);

export default HomePage;
