import type { FC } from 'react';

import styles from './header.module.css';
import { MainNav } from './mainNav';
import { PromoBanner } from './promoBanner';
// import { CanadaHeader } from '../canadaHeader';
import { sept23 } from '../../periods';
import { getDesignRestricted } from '@/lib/restrictions';

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
  // if (countryCode === 'CA') {
  //   return <CanadaHeader />;
  // }

  if (sept23.contains(date)) {
    return (
      <PromoBanner date={date} promotionPeriod={sept23.toDTO()}>
        <span className="d-none d-lg-inline">Ends Soon&mdash;</span>Enroll Today and Get a 2nd Course FREE + {countryCode === 'GB' ? '£100' : '$100'} Off
      </PromoBanner>
    );
  }
};
