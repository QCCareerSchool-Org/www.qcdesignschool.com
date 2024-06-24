import type { FC } from 'react';

import styles from './index.module.scss';

export const CareerEssentialsKitSection: FC = () => (
  <section className={`${styles.section} text-white`}>
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-7 col-xxl-6">
          <h2 className="mb-3">Free Career Essentials Kit</h2>
          <p>When you enroll with QC Design School, you'll get exclusive access to The Career Essentials Collection. This bonus is designed to equip you with the professional tools needed to excel in the design industry. The collection includes essential resources such as:</p>
          <ul className="mb-0">
            <li><strong>Invoice Template:</strong> Streamline your billing process and present a polished, professional image to your clients.</li>
            <li><strong>Contract Template:</strong> Protect your business with a contract template tailored to home designers.</li>
            <li><strong>Social Media Templates:</strong> Boost your online presence and engage with your audience using our customizable social media templates.</li>
            <li><strong>4 Months of Free Design Software:</strong> Access DesignFiles, a state-of-the-art design software package for free, allowing you to create stunning, professional designs with ease.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
