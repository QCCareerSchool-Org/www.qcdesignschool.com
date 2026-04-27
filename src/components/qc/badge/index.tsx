import type { FC, PropsWithChildren } from 'react';

import styles from './index.module.css';

type Variant = 'light';

interface Props {
  variant?: Variant;
  className?: string;
}

export const Badge: FC<PropsWithChildren<Props>> = ({ variant = 'light', className, children }) => (
  <div className={`${styles.badge} ${styles[variant]} ${className ?? ''}`}>
    {children}
  </div>
);
