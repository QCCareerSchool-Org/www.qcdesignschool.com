import type { FC } from 'react';

import styles from './header.module.css';
import { MainNav } from './mainNav';
import { PromoBanner } from './promoBanner';
// import { CanadaHeader } from '../canadaHeader';
import { october07 } from '../../periods';

interface Props {
  date: number;
  countryCode: string;
  provinceCode: string | null;
}

export const Header: FC<Props> = props => {
  return (
    <header className={`${styles.header} flex-shrink-0`} style={{ position: 'sticky', top: 0, zIndex: 1050, width: '100%' }}>
      <InnerBanner {...props} />
      <MainNav countryCode={props.countryCode} provinceCode={props.provinceCode} />
    </header>
  );
};

const InnerBanner: FC<Props> = ({ date }) => {
  // if (countryCode === 'CA') {
  //   return <CanadaHeader />;
  // }

  if (october07.contains(date)) {
    return (
      <PromoBanner date={date} promotionPeriod={october07.toDTO()}>
        <span className="d-none d-lg-inline">Ends Soon&mdash;</span>Enroll Today and Get a 2nd Course FREE
      </PromoBanner>
    );
  }
};
