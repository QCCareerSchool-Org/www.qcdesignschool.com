import type { FC } from 'react';

import styles from './header.module.css';
import { MainNav } from './mainNav';
import { CountDownTimer } from '../countDownTimer';
import { getData } from '@/lib/getData';

export const Header: FC = () => {
  const date = new Date().getTime();
  const { countryCode } = getData();

  return (
    <header className={`${styles.header} flex-shrink-0`} style={{ position: 'sticky', top: 0, zIndex: 100, width: '100%' }}>
      <CountDownTimer date={date} countryCode={countryCode} />
      <MainNav />
    </header>
  );
};
