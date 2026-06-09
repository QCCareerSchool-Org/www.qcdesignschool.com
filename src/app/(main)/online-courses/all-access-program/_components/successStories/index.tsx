import type { FC } from 'react';

import styles from './index.module.css';
import { getCertification } from '@/components/certificationLogos';

interface Props {
  className?: string;
}

export const SuccessStoriesSection: FC<Props> = ({ className }) => (
  <section className={className}>
    <div className="container">
      <div className="row g-5">
        <div className="col-12 col-lg-6 order-lg-1">
          <div className="eyebrow text-primary mb-3">Certifications That Build Client Confidence</div>
          <h2 className="h3 mb-3">Professional certifications help demonstrate your skills and commitment to excellence.</h2>
          <div className="d-flex flex-column gap-3">
            <div className={styles.box}>
              <h3 className="h6 mb-2">Individual Professional Certifications</h3>
              <p className="mb-0">Earn specialized credentials in each design discipline you complete, allowing you to promote targeted services with confidence.</p>
            </div>
            <div className={`${styles.box} ${styles.inverse}`}>
              <h3 className="h6 mb-2">Elite Design Professional Certification</h3>
              <p className="mb-0">Graduate with QC Design School&apos;s premier designation, recognizing advanced training across multiple areas of residential design and client services.</p>
            </div>
            <div className={styles.box}>
              <h3 className="h6 mb-2">Industry Recognition</h3>
              <p className="mb-0">QC Design School&apos;s courses are designed to support professional development and help graduates establish credibility within the design industry.</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 order-lg-0">
          <div className={styles.logoGrid}>
            <div className={styles.logoCell}>{getCertification('i2', 88)}</div>
            <div className={styles.logoCell}>{getCertification('st', 88)}</div>
            <div className={styles.logoCell}>{getCertification('ld', 88)}</div>
            <div className={styles.logoCell}>{getCertification('po', 88)}</div>
            <div className={styles.highlight}>
              <div className="lead fw-bold text-black mb-0">Elite Design Professional Certification</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
