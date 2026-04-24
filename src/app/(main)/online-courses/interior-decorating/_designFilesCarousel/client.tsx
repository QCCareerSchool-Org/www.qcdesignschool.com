'use client';

import type { FC, PropsWithChildren } from 'react';
import type { ResponsiveType } from 'react-multi-carousel';
import Carousel from 'react-multi-carousel';

export const Client: FC<PropsWithChildren> = ({ children }) => (
  <Carousel ssr responsive={responsive} showDots autoPlay>
    {children}
  </Carousel>
);

const responsive: ResponsiveType = {
  all: {
    breakpoint: { min: 0, max: 9999 },
    items: 1,
  },
};
