import type { FC, PropsWithChildren } from 'react';

import styles from './body.module.css';

export const CardBody: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.cardBody}>{children}</div>
);
