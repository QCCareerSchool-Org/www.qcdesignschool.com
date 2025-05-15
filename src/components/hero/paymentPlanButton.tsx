/**
 * Changes color at different screen sizes
 */

import Link from 'next/link';
import type { FC } from 'react';
import { FaGraduationCap } from 'react-icons/fa';

import styles from './paymentPlanButton.module.scss';

export const PaymentPlanButton: FC = () => (
  <Link href="#paymentPlans" className={`btn btn-lg ${styles.paymentPlanButton}`}><FaGraduationCap size={18} style={{ position: 'relative', top: -2, marginRight: '0.5rem' }} />View Tuition</Link>
);
