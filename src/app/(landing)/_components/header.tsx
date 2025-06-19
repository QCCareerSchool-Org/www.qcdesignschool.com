import Link from 'next/link';
import type { FC, JSX } from 'react';

import { ButtonWrapper } from './buttonWrapper';
import styles from './header.module.scss';
import { CountDownTimer } from '@/components/countDownTimer';
import { Flag } from '@/components/flag';
import { Logo } from '@/components/logo';
import { getData } from '@/lib/getData';

type Props = {
  logoLink?: boolean;
  buttonHref?: string;
  buttonContent?: JSX.Element | string;
  buttonAlwaysVisible?: boolean;
  showBanner?: boolean;
};

export const Header: FC<Props> = async ({ logoLink, buttonHref = '#', buttonContent, buttonAlwaysVisible, showBanner }) => {
  const { countryCode } = await getData();
  const date = new Date().getTime();

  return (
    <div className={styles.headerComponent}>
      <header className={styles.header}>
        {showBanner && <CountDownTimer date={date} countryCode={countryCode} />}
        <div className="container">
          <div className={styles.content}>
            {logoLink
              ? <Link href="/"><Logo height={22} /></Link>
              : <Logo height={22} />
            }
            <Flag countryCode={countryCode} height={14} />
            {buttonContent && (
              <ButtonWrapper alwaysVisible={!!buttonAlwaysVisible}>
                <Link href={buttonHref} className={`btn btn-navy ${styles.button}`}>{buttonContent}</Link>
              </ButtonWrapper>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};
