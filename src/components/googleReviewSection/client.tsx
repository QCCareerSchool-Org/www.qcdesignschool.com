'use client';

import type { FC, PropsWithChildren } from 'react';

import { GoogleCarousel } from './googleCarousel';
import { useScreenWidthContex } from '@/hooks/useScreenWidthContext';

export const GoogleReviewSectionClient: FC<PropsWithChildren> = ({ children }) => {
  const screenWidth = useScreenWidthContex();

  return (
    <GoogleCarousel mobile={screenWidth < 992}>
      {children}
    </GoogleCarousel>
  );
};
