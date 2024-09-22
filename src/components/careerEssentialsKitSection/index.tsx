import Image from 'next/image';
import type { FC } from 'react';

import DesktopBackgroundImage from './desktop-bg.jpg';
import styles from './index.module.scss';
import MobileImage from './mobile.jpg';
import TabletImage from './tablet.jpg';
import { BackgroundImage } from '../backgroundImage';

export const CareerEssentialsKitSection: FC = () => (
  <>
    <section className={`${styles.section} text-white text-shadow`}>
      <div className="d-none d-lg-block"><BackgroundImage src={DesktopBackgroundImage} objectPosition={'100% 50%'} /></div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7 col-xxl-6">
            <h2 className="mb-3">Free Career Essentials Kit</h2>
            <p>Enroll with QC Design School and gain exclusive access to The Career Essentials Collection, designed to equip you with professional tools for success in the design industry. This bonus includes:</p>
            <ul className="mb-0">
              <li><strong>Invoice Template:</strong> Streamline billing and present a professional image</li>
              <li><strong>Contract Template:</strong> Protect your business with a tailored contract for home designers</li>
              <li><strong>Social Media Template:</strong> Enhance your online presence with customizable templates</li>
              <li><strong>4 Months of Free Design Software:</strong> Access DesignFiles to create professional designs effortlessly</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="d-none d-md-block d-lg-none"><Image src={TabletImage} alt="" style={{ width: '100%', height: 'auto' }} /></div>
      <div className="d-md-none"><Image src={MobileImage} alt="" style={{ width: '100%', height: 'auto' }} /></div>
    </section>
  </>
);
