import type { FC } from 'react';

import styles from './header.module.css';
import { MainNav } from './mainNav';
// import { CanadaHeader } from '../canadaHeader';
import { PromoBanner } from './promoBanner';
import { gbpCountry } from '@/lib/currencies';
import { getDesignRestricted } from '@/lib/restrictions';
import { feb19 } from '@/periods';

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
      {feb19.contains(date)
        ? (
          <PromoBanner date={date} promotionPeriod={feb19.toDTO()}>
            <span className="d-none d-lg-inline">Limited-Time Offer—</span>Get a Second Course <strong>Free</strong> + {discount} off
          </PromoBanner>
        )
        : null
      }
      <MainNav designRestricted={designRestricted} />
    </header>
  );
};
