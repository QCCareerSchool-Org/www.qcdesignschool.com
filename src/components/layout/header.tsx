import type { FC } from 'react';

import styles from './header.module.css';
import { MainNav } from './mainNav';
// import { CanadaHeader } from '../canadaHeader';
import { CountDownTimer } from '../countDownTimer';
import { getDesignRestricted } from '@/lib/restrictions';

type Props = {
  date: number;
  countryCode: string;
  provinceCode: string | null;
};

const bannerStartDate = Date.UTC(2025, 11, 1, 5); // 2025-12-01T00:00 (05:00 UTC)
const bannerCountdownStartDate = Date.UTC(2025, 11, 5, 8); // 2025-12-05T03:00 (08:00 UTC)
const bannerEndDate = Date.UTC(2025, 11, 6, 8); // 2025-12-06T03:00 (8:00 UTC)

export const Header: FC<Props> = ({ date, countryCode, provinceCode }) => {

  const designRestricted = getDesignRestricted(countryCode, provinceCode);

  return (
    <header className={`${styles.header} flex-shrink-0`} style={{ position: 'sticky', top: 0, zIndex: 1050, width: '100%' }}>
      {/* {countryCode === 'CA' && <CanadaHeader />} */}
      <CountDownTimer
        date={date}
        startDate={bannerStartDate}
        countdownStartDate={bannerCountdownStartDate}
        endDate={bannerEndDate}
        message={(
          <span style={{ textTransform: 'uppercase' }}>
            <span className="d-none d-lg-inline">Don't Miss Out—</span>Cyber Monday Savings Have Arrived! Get a Second Course <strong>free</strong> Plus $100 Off!<br className="d-lg-none" /><button className="btn btn-danger my-2 btn-sm ms-3 text-uppercase">Claim Offer</button>
          </span>
        )}
        lastChanceMessage={(
          <span style={{ textTransform: 'uppercase' }}>
            <span className="d-none d-lg-inline">Don't Miss Out—</span>Cyber Monday Savings Have Arrived! Get a Second Course <strong>free</strong> Plus $100 Off!<br /><button className="btn btn-danger my-2 btn-sm ms-3 text-uppercase">Claim Offer</button>
          </span>
        )}
      />
      <MainNav designRestricted={designRestricted} />
    </header>
  );
};
