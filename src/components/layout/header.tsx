import type { FC } from 'react';

import styles from './header.module.css';
import { MainNav } from './mainNav';
// import { CanadaHeader } from '../canadaHeader';
import { CountDownTimer } from '../countDownTimer';
import { getData } from '@/lib/getData';
import { getDesignRestricted } from '@/lib/restrictions';

type Props = {
  date: number;
  countryCode: string;
  provinceCode: string | null;
}

export const Header: FC<Props> = async ({ date, countryCode, provinceCode }) => {

  const designRestricted = getDesignRestricted(countryCode, provinceCode);

  return (
    <header className={`${styles.header} flex-shrink-0`} style={{ position: 'sticky', top: 0, zIndex: 1050, width: '100%' }}>
      {/* {countryCode === 'CA' && <CanadaHeader />} */}
      <CountDownTimer date={date} countryCode={countryCode} />
      <MainNav designRestricted={designRestricted} />
    </header>
  );
};
