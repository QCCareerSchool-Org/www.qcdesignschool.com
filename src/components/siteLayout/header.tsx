import type { FC } from 'react';

import styles from './header.module.css';
import { MainNav } from './mainNav';
// import { CanadaHeader } from '../canadaHeader';
import { CountDownTimer } from '../countDownTimer';
import { feb04 } from '@/lib/promotionPeriods';
import { getDesignRestricted } from '@/lib/restrictions';

interface Props {
  date: number;
  countryCode: string;
  provinceCode: string | null;
}

export const Header: FC<Props> = ({ date, countryCode, provinceCode }) => {
  const designRestricted = getDesignRestricted(countryCode, provinceCode);

  return (
    <header className={`${styles.header} flex-shrink-0`} style={{ position: 'sticky', top: 0, zIndex: 1050, width: '100%' }}>
      {/* {countryCode === 'CA' && <CanadaHeader />} */}
      <CountDownTimer
        date={date}
        startDate={feb04.start}
        countdownStartDate={feb04.lastChance}
        endDate={feb04.end}
        message={(
          <span style={{ textTransform: 'uppercase' }}>
            <span className="d-none d-lg-inline">Don't Miss Out—</span> Enroll Today and Get a Second Course <strong>Free!</strong><br className="d-lg-none" /><button className="btn btn-danger my-2 btn-sm ms-3 text-uppercase">Claim Offer</button>
          </span>
        )}
      />
      <MainNav designRestricted={designRestricted} />
    </header>
  );
};
