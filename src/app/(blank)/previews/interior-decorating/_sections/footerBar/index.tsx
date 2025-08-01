'use client';

import type { FC, PropsWithChildren } from 'react';
import { useState } from 'react';

import styles from './index.module.scss';

export const FooterBar: FC<PropsWithChildren> = ({ children }) => {
  const [ closed, setClosed ] = useState(false);

  const handleClose = (): void => {
    setClosed(true);
  };

  if (closed) {
    return;
  }

  return (
    <div className={styles.footerBar}>
      <div className={styles.close} onClick={handleClose}>x</div>
      {children}
    </div>
  );
};
