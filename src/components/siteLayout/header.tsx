import type { FC } from 'react';

import styles from './header.module.css';
import { MainNav } from './mainNav';
import { PromoBanner } from './promoBanner';
import { CanadaHeader } from '../canadaHeader';
import { getDesignRestricted } from '@/lib/restrictions';
import { june13, june27 } from '@/periods';

interface Props {
  date: number;
  countryCode: string;
  provinceCode: string | null;
}

export const Header: FC<Props> = props => {
  const designRestricted = getDesignRestricted(props.countryCode, props.provinceCode);

  return (
    <header className={`${styles.header} flex-shrink-0`} style={{ position: 'sticky', top: 0, zIndex: 1050, width: '100%' }}>
      <InnerBanner {...props} />
      <MainNav designRestricted={designRestricted} countryCode={props.countryCode} provinceCode={props.provinceCode} />
    </header>
  );
};

const InnerBanner: FC<Props> = ({ date, countryCode }) => {
  if (countryCode === 'CA') {
    return <CanadaHeader />;
  }

  if (june13.contains(date)) {
    return (
      <PromoBanner date={date} promotionPeriod={june13.toDTO()}>
        {countryCode === 'US'
          ? <><span className="d-none d-lg-inline">Ends Soon&mdash;</span>Save up to $700 + get a free course and textbooks</>
          : <><span className="d-none d-lg-inline">Ends Soon&mdash;</span><strong>Get a Free Second Course</strong></>
        }
      </PromoBanner>
    );
  }

  if (june27.contains(date)) {
    return (
      <PromoBanner date={date} promotionPeriod={june27.toDTO()}>
        {countryCode === 'US'
          ? <><span className="d-none d-lg-inline">4th of July Special:&mdash;</span>Get a 2nd Course Free + $100 Off Tution</>
          : <><span className="d-none d-lg-inline">Ends Soon&mdash;</span><strong>Get a 2nd Course Free + $100 Off Tuition</strong></>
        }
      </PromoBanner>
    );
  }
};
