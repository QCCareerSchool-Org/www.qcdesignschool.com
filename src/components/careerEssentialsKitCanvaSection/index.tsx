import Image from 'next/image';
import type { FC } from 'react';

import { BackgroundImage } from '../backgroundImage';
import DesktopBackgroundImage from './desktop-bg.jpg';
import styles from './index.module.scss';
import MobileImage from './mobile.jpg';
import TabletImage from './tablet.jpg';

export const CareerEssentialsKitCanvaSection: FC = () => (
  <>
    <section className={`${styles.section} text-white text-shadow`}>
      <div className="d-none d-lg-block"><BackgroundImage src={DesktopBackgroundImage} objectPosition={'100% 50%'} /></div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7 col-xxl-6">
            <h2 className="mb-3">Free Career Essentials Kit</h2>
            <p>When you enroll with QC Design School, you'll get exclusive access to The Career Essentials Collection. This bonus is designed to equip you with the professional tools needed to excel in the design industry. The collection includes essential resources such as:</p>
            <ul className="mb-0">
              <li><strong>Invoice Template:</strong> Streamline your billing process and present a polished, professional image to your clients.</li>
              <li><strong>Contract Template:</strong> Protect your business with a contract template tailored to home designers.</li>
              <li><strong>Social Media Templates:</strong> Boost your online presence and engage with your audience using our customizable social media templates.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="d-none d-md-block d-lg-none"><Image src={TabletImage} alt="" style={{ width: '100%', height: 'auto' }} /></div>
      <div className="d-md-none"><Image src={MobileImage} alt="" style={{ width: '100%', height: 'auto' }} /></div>
    </section>
  </>
);
