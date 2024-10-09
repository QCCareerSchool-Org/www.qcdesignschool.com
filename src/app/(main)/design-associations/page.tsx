import type { Metadata } from 'next';

import Background from './background.jpg';
import { DesignAssociationSection } from './designAssociationSection';
import styles from './page.module.scss';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';

export const metadata: Metadata = {
  title: 'Preferred Partners - QC Design School',
};

const HomePage: PageComponent = () => (
  <>
    <section className="bg-light">
      <div className="d-none d-md-block">
        <BackgroundImage priority src={Background} />
      </div>
      <div className={`container ${styles.container}`}>
        <div className="row justify-content-end">
          <div className="col-md-6 col-lg-5">
            <h1 className="mb-4">Professional Associations &amp; Preferred Partners</h1>
            <p className="lead mb-0">Design associations offer opportunities to network and enhance your professional skills. Students and graduates of QC Design School have access to the following associations:</p>
          </div>
        </div>
      </div>
    </section>
    <DesignAssociationSection />
  </>
);

export default HomePage;
