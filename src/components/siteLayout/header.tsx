import type { FC } from 'react';

import styles from './header.module.css';
import { MainNav } from './mainNav';
// import { CanadaHeader } from '@/components/canadaHeader';
import { PromoBanner } from './promoBanner';
import { getDesignRestricted } from '@/lib/restrictions';
import { may16 } from '@/periods';

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
      {may16.contains(date)
        ? (
          <PromoBanner date={date} promotionPeriod={may16.toDTO()}>
            {countryCode === 'US'
              ? <>Memorial Week Special: Get a Free Second Course</>
              : <><span className="d-none d-lg-inline">Ends Soon&mdash;</span><strong>Get a Free Second Course</strong></>
            }
          </PromoBanner>
        )
        : null
      }
      <MainNav designRestricted={designRestricted} />
    </header>
  );
};
