'use client';

import { useIntersectionObserver } from '@davewelsh79/use-intersection-observer';
import type { StaticImageData } from 'next/image';
import type { CSSProperties, FC } from 'react';
import { useCountUp } from 'react-use-count-up';

import DefaultBackgroundImage from './default-background.jpg';
import styles from './index.module.scss';
import { BackgroundImage } from '@/components/backgroundImage';

const duration = 2_000; // 2 seconds

interface Props {
  inverse?: boolean;
  backgroundImage?: StaticImageData | null;
  backgroundColor?: CSSProperties['backgroundColor'];
}

export const StatsSection: FC<Props> = ({ inverse, backgroundImage, backgroundColor }) => {
  const [ studentsStart, studentsRef ] = useIntersectionObserver(true);
  const [ yearsStart, yearsRef ] = useIntersectionObserver(true);
  const [ expertsStart, expertsRef ] = useIntersectionObserver(true);

  const students = useCountUp({ start: 0, end: 45, duration, started: studentsStart, easingFunction: 'easeOutCubic' });
  const years = useCountUp({ start: 0, end: 40, duration, started: yearsStart, easingFunction: 'easeOutCubic' });
  const experts = useCountUp({ start: 0, end: 20, duration, started: expertsStart, easingFunction: 'easeOutCubic' });

  return (
    <section className={`${styles.section} ${inverse ? styles.inverse : ''}`} style={{ backgroundColor }}>
      {backgroundImage !== null && <BackgroundImage src={backgroundImage ?? DefaultBackgroundImage} />}
      <div className="container">
        <div className="row text-center">
          <div ref={studentsRef} className="col-12 col-lg-4 mb-s mb-lg-0">
            <div className={styles.count}>{students}K</div>
            <h3 className="h6">Students &amp; Graduates</h3>
            <small className={styles.description}>Inspiring the Next Generation of Professionals</small>
          </div>
          <div ref={yearsRef} className="col-12 col-lg-4 mb-s mb-lg-0">
            <div className={styles.count}>{years}</div>
            <h3 className="h6">Years in Business</h3>
            <small className={styles.description}>Pioneering Education Since 1984</small>
          </div>
          <div ref={expertsRef} className="col-12 col-lg-4">
            <div className={styles.count}>{experts}</div>
            <h3 className="h6">Industry Experts</h3>
            <small className={styles.description}>Providing Insights for Real-World Success</small>
          </div>
        </div>
      </div>
    </section>
  );
};
