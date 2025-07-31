import type { FC } from 'react';

import { CountUp } from './countUp';
import styles from './guarantee.module.css';
import CertificateIcon from '@/components/icons/certification.svg';
import ClockIcon from '@/components/icons/clock.svg';
import ShieldIcon from '@/components/icons/shield-check.svg';

const iconHeight = 24;

export const PaymentSectionGuarantee: FC = () => (
  <div className="text-center">
    <h3 className="mb-5">Trusted by <CountUp value={45} />,000+ Students and Graduates</h3>
    <div className="row justify-content-center g-5">
      <div className="col-12 col-md-8 col-lg-4 text-center">
        <CertificateIcon height={iconHeight} className={`mb-3 ${styles.contactIcon}`} />
        <h2 className="h6">Certification Upon Graduation</h2>
        <p>Receive an industry-recognized certification upon completing your course, showcasing your professional skills to future clients and employers.</p>
      </div>
      <div className="col-12 col-md-8 col-lg-4 text-center">
        <ShieldIcon height={iconHeight} className={`mb-3 ${styles.contactIcon}`} />
        <h2 className="h6">100% Money-Back Guarantee</h2>
        <p>We offer a 21-day money-back guarantee. If you're not satisfied with the course, get a full refund, no questions asked.</p>
      </div>
      <div className="col-12 col-md-8 col-lg-4 text-center">
        <ClockIcon height={iconHeight} className={`mb-3 ${styles.contactIcon}`} />
        <h2 className="h6">Lifetime Course<br className="d-none d-lg-block d-xl-none" /> Access</h2>
        <p>Gain lifetime access to all course materials, ensuring you can revisit lessons and refresh your knowledge whenever you need.</p>
      </div>
    </div>
  </div>
);
