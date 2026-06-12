import type { FC, PropsWithChildren } from 'react';

import styles from './index.module.css';
import AwardIcon from '@/components/icons/star-award.svg';

interface Props {
  heading: string;
}

export const CourseDescription: FC<PropsWithChildren<Props>> = ({ heading, children }) => (
  <div className={styles.wrapper}>
    <div className={styles.left}><AwardIcon width={25} style={{ marginTop: '0.2rem' }} /></div>
    <div className={styles.right}>
      <h3 className="h6">{heading}</h3>
      {children}
    </div>
  </div>
);
