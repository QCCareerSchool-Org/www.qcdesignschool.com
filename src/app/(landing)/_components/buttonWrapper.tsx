'use client';

import type { FC, PropsWithChildren } from 'react';

import { useScreenSizeContext } from '@/hooks/useScreenSizeContext';
import { useScrollPositionContext } from '@/hooks/useScrollPositionContext';
import type { ScreenSize } from '@/providers/screenSizeProvider';

interface Props {
  alwaysVisible: boolean;
}

export const ButtonWrapper: FC<PropsWithChildren<Props>> = ({ alwaysVisible, children }) => {
  const scrollPosition = useScrollPositionContext() ?? 0;
  const { screenSize } = useScreenSizeContext();

  if (alwaysVisible || (screenSize && show(screenSize, scrollPosition))) {
    return <>{children}</>;
  }
};

const show = (screenSize: ScreenSize, scrollPosition: number): boolean => {
  if (screenSize === 'xxl') {
    return scrollPosition >= 590;
  }

  if (screenSize === 'xl') {
    return scrollPosition >= 610;
  }

  if (screenSize === 'lg') {
    return scrollPosition >= 590;
  }

  if (screenSize === 'md') {
    return scrollPosition >= 530;
  }

  if (screenSize === 'sm') {
    return scrollPosition >= 385;
  }

  return false;
};
