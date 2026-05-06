import type { FC } from 'react';

import styles from './header.module.css';
import { MainNav } from './mainNav';
// import { CanadaHeader } from '@/components/canadaHeader';
import { PromoBanner } from './promoBanner';
import { getDesignRestricted } from '@/lib/restrictions';
import { may06 } from '@/periods';

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
      {may06.contains(date)
        ? (
          <PromoBanner date={date} promotionPeriod={may06.toDTO()}>
            <span className="d-none d-lg-inline">Ends Soon&mdash;</span><strong>Maximize your income with our new Interior Design Career Accelerator Program</strong>
          </PromoBanner>
        )
        : null
      }
      <MainNav designRestricted={designRestricted} />
    </header>
  );
};
