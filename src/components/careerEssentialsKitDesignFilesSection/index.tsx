import Image from 'next/image';
import type { FC } from 'react';

import { BackgroundImage } from '../backgroundImage';
import DesktopBackgroundImage from './desktop-bg.jpg';
import styles from './index.module.scss';
import MobileImage from './mobile.jpg';

export const CareerEssentialsKitDesignFilesSection: FC = () => (
  <>
    <section className={`${styles.section} text-white`}>
      <div className="d-none d-lg-block">
        <BackgroundImage src={DesktopBackgroundImage} objectPosition="85% 50%" />
      </div>
      <div className="container">
        <div className="row g-0">
          <div className="col-12 col-lg-6">
            <h2 className="h3 mb-3">Free Career Essentials Kit</h2>
            <p>Gain exclusive access to streamline your workflow, manage projects, and elevate your brand with <i>DesignFiles</i> and <i>Canva</i> templates when you enroll in QC Design School.</p>
            <h3 className="h6">Design Software Training</h3>
            <p>Leverage your design skills to create professional-quality digital floor plans with design software. Follow step-by-step video tutorials with <i>DesignFiles</i>, the all-in-one software for design professionals, to craft stunning floor plans, mood boards and more.</p>
            <h3 className="h6">4 Months of Free Design Software</h3>
            <p>Gain free access to <i>DesignFiles</i> and discover top-tier design tools. Create stunning designs swiftly, manage projects effortlessly, and handle invoicing seamlessly. Boost productivity, save time.</p>
            <h3 className="h6"><i>Canva</i> Templates</h3>
            <p className="mb-0">Unlock professional-grade templates for invoices, contracts, and social media. Streamline your workflow and present a cohesive brand. Simplify your business processes with these essential tools.</p>
          </div>
        </div>
      </div>
      {/* <div className="d-none d-md-block d-lg-none"><Image src={TabletImage} alt="" style={{ width: '100%', height: 'auto' }} /></div> */}
      <div className="d-lg-none"><Image src={MobileImage} alt="" style={{ width: '100%', height: 'auto' }} /></div>
    </section>
  </>
);
