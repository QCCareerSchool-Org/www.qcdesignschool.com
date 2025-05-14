'use client';

import type { FC, MouseEventHandler } from 'react';

import { useTaxCreditPopup } from '@/hooks/useTaxCreditPopup';

export const LearnMore: FC = () => {
  const [ , toggle ] = useTaxCreditPopup();

  const handleClick: MouseEventHandler = e => {
    e.preventDefault();
    toggle();
  };

  return (
    <>
      <a href="#" onClick={handleClick}>Learn More</a>
    </>
  );
};
