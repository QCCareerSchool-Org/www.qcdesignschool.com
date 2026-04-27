import type { FC } from 'react';

import styles from './header.module.css';
import { MainNav } from './mainNav';
// import { CanadaHeader } from '@/components/canadaHeader';
import { PromoBanner } from './promoBanner';
import { getDesignRestricted } from '@/lib/restrictions';
import { april22 } from '@/periods';

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
      {april22.contains(date)
        ? (
          <PromoBanner date={date} promotionPeriod={april22.toDTO()}>
            <span className="d-none d-lg-inline">Ends Soon&mdash;</span><strong>Get 50% Off Additional Courses</strong>
          </PromoBanner>
        )
        : null
      }
      <MainNav designRestricted={designRestricted} />
    </header>
  );
};
