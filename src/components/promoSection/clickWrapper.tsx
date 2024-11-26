'use client';

import type { FC, MouseEventHandler, PropsWithChildren } from 'react';

import { Popup } from './popup';
import { useToggle } from '@/hooks/useToggle';

type Props = {
  countryCode: string;
};

export const ClickWrapper: FC<PropsWithChildren<Props>> = ({ countryCode, children }) => {
  const [ popup, toggle ] = useToggle();

  const handleClick: MouseEventHandler = e => {
    e.preventDefault();
    toggle();
  };

  const handleToggle = (): void => {
    toggle();
  };

  return (
    <>
      <a href="#" onClick={handleClick}>{children}</a>
      <Popup show={popup} onHide={handleToggle} countryCode={countryCode} />
    </>
  );
};
