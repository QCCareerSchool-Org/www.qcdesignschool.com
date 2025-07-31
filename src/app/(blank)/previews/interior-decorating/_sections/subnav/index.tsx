import Link from 'next/link';
import type { FC } from 'react';

import styles from './index.module.scss';

export const SubNav: FC = () => (
  <nav className={styles.subNav}>
    <ul>
      <li><Link href="#why-qc">Why QC?</Link></li>
      <li><Link href="#platform">The Platform</Link></li>
      <li><Link href="#curriculum">Curriculum</Link></li>
      <li><Link href="#career-outcomes">Career</Link></li>
      <li><Link href="#paymentPlans">Tuition</Link></li>
      <li><Link href="#stories">Stories</Link></li>
      <li>Courses</li>
      <li>FAQ</li>
    </ul>
  </nav>
);
