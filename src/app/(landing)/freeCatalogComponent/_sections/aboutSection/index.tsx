import type { FC } from 'react';

import styles from './index.module.scss';
import ShieldIcon from './shield.svg';

export const AboutSection: FC<{ courseName: string }> = ({ courseName }) => (
  <section className={styles.aboutSection}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 col-xl-9 col-xxl-8 text-lg-center">
          <ShieldIcon className="mb-4" />
          <div className={`${styles.gold} mb-4`}>Celebrating 40 Years</div>
          <h2 className="h3 mb-4">About QC Design School</h2>
          <p>QC Design School is a faculty of QC Career School, an online international school that has been educating creative professionals for over 40 years. QC's design courses give students the best design training possible from the comfort of home. Study at your own pace and maintain your current income, while real-world training prepares you to start your own business once you graduate!</p>
          <p className="mb-0">QC provides you with access to support 7 days a week. Contact us at any time by email, phone, on Live Chat, or through social media. QC Design School ensures that all of your educational needs are met, and provides you with career advice both before, during, and after you've completed your online {courseName} classes.</p>
        </div>
      </div>
    </div>
  </section>
);
