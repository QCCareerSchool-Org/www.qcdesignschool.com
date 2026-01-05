'use client';

import Link from 'next/link';
import type { FC, ReactNode } from 'react';
import { Element as ScrollElement, Link as ScrollLink } from 'react-scroll';

import { ButtonWrapper } from './buttonWrapper';
import styles from './header.module.scss';
import { Flag } from '@/components/flag';
import { Logo } from '@/components/logo';

interface Props {
  countryCode: string;
  logoLink?: boolean;
  buttonHref?: string;
  buttonContent?: string | ReactNode;
  buttonAlwaysVisible?: boolean;
  buttonClass?: string;
}

export const Header: FC<Props> = ({ countryCode, logoLink, buttonHref, buttonContent, buttonAlwaysVisible, buttonClass = `btn btn-navy ${styles.button}` }) => (
  <ScrollElement name="top">
    <div className={styles.headerComponent}>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.content}>
            <div>
              {logoLink
                ? <Link href="/"><Logo height={22} /></Link>
                : <Logo height={22} />
              }
              <span className="ms-2"><Flag countryCode={countryCode} height={14} /></span>
            </div>
            {buttonContent && (
              <ButtonWrapper alwaysVisible={!!buttonAlwaysVisible}>
                {buttonHref
                  ? <Link href={buttonHref} className={buttonClass}>{buttonContent}</Link>
                  : <ScrollLink to="top" smooth className={buttonClass}>{buttonContent}</ScrollLink>
                }
              </ButtonWrapper>
            )}
          </div>
        </div>
      </header>
    </div>
  </ScrollElement>
);
