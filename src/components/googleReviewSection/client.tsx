'use client';

import type { FC, PropsWithChildren } from 'react';

import { GoogleCarousel } from './googleCarousel';
import { useScreenSizeContext } from '@/hooks/useScreenSizeContext';

export const GoogleReviewSectionClient: FC<PropsWithChildren> = ({ children }) => {
  const { lt } = useScreenSizeContext();

  return (
    <GoogleCarousel mobile={lt('lg')}>
      {children}
    </GoogleCarousel>
  );
};
