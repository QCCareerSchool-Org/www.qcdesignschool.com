import type { FC } from 'react';

import styles from './header.module.css';
import { MainNav } from './mainNav';
// import { CanadaHeader } from '../canadaHeader';
import { PromoBanner } from './promoBanner';
import { gbpCountry } from '@/domain/currency';
import { getDesignRestricted } from '@/lib/restrictions';
import { mar18 } from '@/periods';

interface Props {
  date: number;
  countryCode: string;
  provinceCode: string | null;
}

export const Header: FC<Props> = ({ date, countryCode, provinceCode }) => {
  const designRestricted = getDesignRestricted(countryCode, provinceCode);
  const discount = gbpCountry(countryCode) ? '£100' : '$100';

  return (
    <header className={`${styles.header} flex-shrink-0`} style={{ position: 'sticky', top: 0, zIndex: 1050, width: '100%' }}>
      {/* {countryCode === 'CA' && <CanadaHeader />} */}
      {mar18.contains(date)
        ? (
          <PromoBanner date={date} promotionPeriod={mar18.toDTO()}>
            <span className="d-none d-lg-inline">Limited Time Offer&mdash;</span>Get a Second Course Free <strong>+ {discount} Off</strong>
          </PromoBanner>
        )
        : null
      }
      <MainNav designRestricted={designRestricted} />
    </header>
  );
};
