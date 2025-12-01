'use client';

import type { FC, PropsWithChildren } from 'react';
import { useEffect, useState } from 'react';

import styles from './index.module.scss';

type Variant = 'red';

interface Props {
  variant: Variant;
}

export const AlertBar: FC<PropsWithChildren<Props>> = ({ variant, children }) => {
  const [ show, setShow ] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => { setShow(true); }, 300);
    return () => { clearTimeout(id); };
  }, []);

  return (
    <div className={`${styles.wrapper} ${show ? styles.show : styles.hide}`}>
      <div className={`${styles.alertBar} ${styles[variant]}`}>
        <div className="container">
          {children}
        </div>
      </div>
    </div>
  );
};
