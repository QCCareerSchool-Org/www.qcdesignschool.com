import type { FC } from 'react';

import styles from './header.module.css';
import { MainNav } from './mainNav';
// import { CanadaHeader } from '../canadaHeader';
import { PromoBanner } from './promoBanner';
import { gbpCountry } from '@/lib/currencies';
import { feb04, feb13 } from '@/lib/promotionPeriods';
import { getDesignRestricted } from '@/lib/restrictions';

interface Props {
  date: number;
  countryCode: string;
  provinceCode: string | null;
}

export const Header: FC<Props> = ({ date, countryCode, provinceCode }) => {
  const discount = gbpCountry(countryCode) ? '£100' : '$100';
  const designRestricted = getDesignRestricted(countryCode, provinceCode);

  return (
    <header className={`${styles.header} flex-shrink-0`} style={{ position: 'sticky', top: 0, zIndex: 1050, width: '100%' }}>
      {/* {countryCode === 'CA' && <CanadaHeader />} */}
      {feb04.contains(date)
        ? (
          <PromoBanner date={date} promotionPeriod={feb04.toObject()}>
            <span className="d-none d-lg-inline">Don't Miss Out—</span>Enroll Today and Get a Second Course <strong>Free!</strong>
          </PromoBanner>
        )
        : feb13.contains(date)
          ? (
            <PromoBanner date={date} promotionPeriod={feb13.toObject()}>
              <span className="d-none d-lg-inline">Limited-Time Offer—</span>Get a Second Course <strong>Free</strong> + {discount} off
            </PromoBanner>
          )
          : null
      }
      <MainNav designRestricted={designRestricted} />
    </header>
  );
};
