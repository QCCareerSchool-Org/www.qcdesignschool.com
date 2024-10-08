import type { FC, PropsWithChildren } from 'react';

import styles from './index.module.css';

type Props = {
  className?: string;
};

export const CourseType: FC<PropsWithChildren<Props>> = ({ className, children }) => (
  <div className={`${styles.courseType} ${className}`}>{children}</div>
);
