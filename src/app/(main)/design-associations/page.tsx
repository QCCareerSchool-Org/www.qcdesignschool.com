import type { Metadata } from 'next';

import Background from './background.jpg';
import { DesignAssociationSection } from './designAssociationSection';
import styles from './page.module.scss';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import { GetStartedSection } from '@/components/getStartedSection';

export const metadata: Metadata = {
  title: 'Design Associations',
};

const HomePage: PageComponent = () => (
  <>
    <section className="bg-light">
      <div className="d-none d-md-block">
        <BackgroundImage priority src={Background} objectPosition="80% 50%" />
      </div>
      <div className={`container ${styles.container}`}>
        <div className="row justify-content-end">
          <div className="col-md-6 col-xl-5">
            <h1 className="h2 mb-4">Professional Associations &amp; Preferred Partners</h1>
            <p className="lead mb-0">Design associations offer opportunities to network and enhance your professional skills. Students and graduates of QC Design School have access to the following associations.</p>
          </div>
        </div>
      </div>
    </section>
    <DesignAssociationSection />
    <GetStartedSection
      title="Ready to Enroll?"
      text="You can get started with QC Design School whenever you like! When you enroll, you'll receive a login to the Online Student Center where you can access your course online."
    />
  </>
);

export default HomePage;
