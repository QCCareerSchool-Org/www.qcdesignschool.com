import type { FC } from 'react';

import styles from './guarantee.module.css';
import ShieldIcon from '@/components/icons/shield.svg';

export const PaymentSectionGuarantee: FC = () => (
  <div className="text-center">
    <ShieldIcon className={`${styles.gold} mb-3`} height="36" />
    <p className={`${styles.gold} small mb-3`}>21 DAY MONEY-BACK GUARANTEE</p>
    <h4 className="mb-3">Try Any Course 100% Risk Free</h4>
    <p className="lead mb-0">After enrolling, you have 21 days to review your course materials. If the course isn't right for you, simply contact us for a full refund!</p>
  </div>
);
