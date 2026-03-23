'use client';

import type { FC, PropsWithChildren } from 'react';

import { useScreenWidthContex } from '@/hooks/useScreenWidthContext';
import { useScrollPositionContext } from '@/hooks/useScrollPositionContext';

interface Props {
  alwaysVisible: boolean;
}

export const ButtonWrapper: FC<PropsWithChildren<Props>> = ({ alwaysVisible, children }) => {
  const scrollPosition = useScrollPositionContext() ?? 0;
  const screenWidth = useScreenWidthContex() ?? 0;

  if (alwaysVisible || show(screenWidth, scrollPosition)) {
    return <>{children}</>;
  }
};

const show = (screenWidth: number, scrollPosition: number): boolean => {
  if (screenWidth >= 1400) {
    return scrollPosition >= 590;
  }

  if (screenWidth >= 1200) {
    return scrollPosition >= 610;
  }

  if (screenWidth >= 992) {
    return scrollPosition >= 590;
  }

  if (screenWidth >= 768) {
    return scrollPosition >= 530;
  }

  if (screenWidth >= 576) {
    return scrollPosition >= 385;
  }

  if (screenWidth >= 375) {
    return scrollPosition >= 420;
  }

  return false;
};
