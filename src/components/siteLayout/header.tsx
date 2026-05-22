import type { FC } from 'react';

import styles from './header.module.css';
import { MainNav } from './mainNav';
import { PromoBanner } from './promoBanner';
import { CanadaHeader } from '../canadaHeader';
import { getServerData } from '@/lib/getServerData';
import { getDesignRestricted } from '@/lib/restrictions';
import { may16 } from '@/periods';

interface Props {
  date: number;
  countryCode: string;
  provinceCode: string | null;
}

export const Header: FC<Props> = async props => {
  const designRestricted = getDesignRestricted(props.countryCode, props.provinceCode);
  const { countryCode } = await getServerData();

  return (
    <header className={`${styles.header} flex-shrink-0`} style={{ position: 'sticky', top: 0, zIndex: 1050, width: '100%' }}>
      <InnerBanner {...props} />
      <MainNav designRestricted={designRestricted} countryCode={countryCode} />
    </header>
  );
};

const InnerBanner: FC<Props> = ({ date, countryCode }) => {
  if (countryCode === 'CA') {
    return <CanadaHeader />;
  }

  if (may16.contains(date)) {
    return (
      <PromoBanner date={date} promotionPeriod={may16.toDTO()}>
        {countryCode === 'US'
          ? <>Memorial Week Special: Get a Free Second Course</>
          : <><span className="d-none d-lg-inline">Ends Soon&mdash;</span><strong>Get a Free Second Course</strong></>
        }
      </PromoBanner>
    );
  }
};
