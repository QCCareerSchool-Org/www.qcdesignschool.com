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
      <li><Link href="#tuition">Tuition</Link></li>
      <li><Link href="#stories">Stories</Link></li>
      <li><Link href="#related-courses">Courses</Link></li>
      <li><Link href="#faq">FAQ</Link></li>
    </ul>
  </nav>
);
