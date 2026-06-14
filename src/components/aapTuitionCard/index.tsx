import Big from 'big.js';
import Link from 'next/link';
import type { FC } from 'react';

import Arrow from './arrow.svg';
import Check from './check.svg';
import { AAPClient } from './client';
import IEDP from './iedp.svg';
import styles from './main.module.scss';
import Star from './star.svg';
import { aapCourseCodes } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';
import { repeat } from '@/lib/repeat';

interface Props {
  countryCode: string;
  provinceCode: string | null;
  href?: string;
}

export const AAPTuitionCard: FC<Props> = async ({ countryCode, provinceCode, href = '/online-courses/all-access-program' }) => {
  const [ price, combinedPrice ] = await Promise.all([
    fetchPrice([ 'ad' ], countryCode, provinceCode, undefined, undefined, process.env.FIREWALL_BYPASS_SECRET),
    fetchPrice(aapCourseCodes, countryCode, provinceCode, undefined, undefined, process.env.FIREWALL_BYPASS_SECRET),
  ]);

  if (!price.success || !combinedPrice.success) {
    return;
  }
  const originalPrice = parseFloat(combinedPrice.value.courses.reduce((prev, course) => { return prev.plus(course.cost); }, Big(0)).toFixed(2));
  console.log('price.cost:', price.value.cost);
  console.log('price.plans.full.total:', price.value.plans.full.total);
  console.log('price.discountedCost:', price.value.discountedCost);

  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay} />
      <div className={styles.detailsPane}>
        <div className={styles.pane}>
          <div className={styles.eyebrow}>
            <div className={styles.badge}>Best Value</div>
            <span>Earn Your Elite Design Professional Certificate™</span>
          </div>
          <h2 className={styles.h2}>All-Access Program</h2>
          <h3 className={styles.h3}>Build a Multi-Service Business & Maximize Your Earning Potential</h3>
          <p>Get full access to every design courses needed to: </p>
          <ul className={styles.checkList}>
            <li><div><Check /></div><span><strong>Master the fundamentals and learn advanced skills</strong> like interior decorating, home staging, landscape design, color consulting, organzing and more</span></li>
            <li><div><Check /></div><span><strong>Earn a certificate for each course completed</strong>, proving your full range of skills</span></li>
            <li><div><Check /></div><span><strong>Receive your  Elite Design Professional Certificate</strong>, the ultimate credential to showcase your expertise</span></li>
            <li><div><Check /></div><span><strong>Graduate in under a year</strong>, fully prepared to serve every type of client</span></li>
            <li><div><Check /></div><span><strong>Save up to 60%</strong> on total course fees</span></li>
          </ul>
          <p className={styles.trusted}><span className={styles.stars}>{repeat(5, () => <Star />)}</span><span>Trusted by 30,000+ Students & Grads</span></p>
        </div>
      </div>
      <div className={styles.pricePane}>
        <div className={styles.pane}>
          <div className="text-center">
            <IEDP width={170} height={170} className="mb-4" />
          </div>
          <AAPClient price={price.value} originalPrice={originalPrice} href={href} />
          <div className="mt-2">
            <Link href={href} style={{ textDecoration: 'none' }}><button className={styles.enrollButton}>Explore the Program <Arrow className={styles.icon} /></button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};
