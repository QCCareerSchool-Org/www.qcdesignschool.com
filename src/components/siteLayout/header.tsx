import type { FC } from 'react';

import styles from './header.module.css';
import { MainNav } from './mainNav';
import { PromoBanner } from './promoBanner';
// import { CanadaHeader } from '../canadaHeader';
import { getDesignRestricted } from '@/lib/restrictions';
import { august06 } from '@/periods';

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

const InnerBanner: FC<Props> = ({ date }) => {
  // if (countryCode === 'CA') {
  //   return <CanadaHeader />;
  // }

  if (august06.contains(date)) {
    return (
      <PromoBanner date={date} promotionPeriod={august06.toDTO()}>
        <span className="d-none d-lg-inline">Ends Soon&mdash;</span>Flash Offer: Enroll Today & Get a 2nd Course Free + $100 OFF
      </PromoBanner>
    );
  }
};
