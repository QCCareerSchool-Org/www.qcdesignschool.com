import { type FC, useMemo } from 'react';

import styles from './header.module.css';
import { MainNav } from './mainNav';
// import { CanadaHeader } from '../canadaHeader';
import { CountDownTimer } from '../countDownTimer';
import { gbpCountry } from '@/lib/currencies';
import { endOfYear2025, newYear2026 } from '@/lib/promotionPeriods';
import { getDesignRestricted } from '@/lib/restrictions';

interface Props {
  date: number;
  countryCode: string;
  provinceCode: string | null;
}

export const Header: FC<Props> = ({ date, countryCode, provinceCode }) => {

  const dates: [start: number, countDown: number, end: number] | undefined = useMemo(() => {
    if (endOfYear2025.contains(date)) {
      return [
        endOfYear2025.start,
        endOfYear2025.end - 86_400, // one day
        endOfYear2025.end,
      ];
    } else if (newYear2026.contains(date)) {
      return [
        newYear2026.start,
        newYear2026.end - 86_400, // one day,
        newYear2026.end,
      ];
    }
  }, [ date ]);

  const discount = gbpCountry(countryCode) ? '£100' : '$100';

  const designRestricted = getDesignRestricted(countryCode, provinceCode);

  return (
    <header className={`${styles.header} flex-shrink-0`} style={{ position: 'sticky', top: 0, zIndex: 1050, width: '100%' }}>
      {/* {countryCode === 'CA' && <CanadaHeader />} */}
      {dates && <CountDownTimer
        date={date}
        startDate={dates[0]}
        countdownStartDate={dates[1]}
        endDate={dates[2]}
        message={(
          <span style={{ textTransform: 'uppercase' }}>
            {endOfYear2025.contains(date)
              ? <><span className="d-none d-lg-inline">Don't Miss Out—</span> Get a <strong>free course</strong><br className="d-lg-none" /><button className="btn btn-danger my-2 btn-sm ms-3 text-uppercase">Claim Offer</button></>
              : <><span className="d-none d-lg-inline">Don't Miss Out—</span> Get a <strong>a free course</strong> and {discount} Off<br className="d-lg-none" /><button className="btn btn-danger my-2 btn-sm ms-3 text-uppercase">Claim Offer</button></>
            }
          </span>
        )}
      />}
      <MainNav designRestricted={designRestricted} />
    </header>
  );
};
