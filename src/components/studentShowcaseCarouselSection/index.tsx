'use client';

import type { FC } from 'react';
import type { ResponsiveType } from 'react-multi-carousel';
import Carousel from 'react-multi-carousel';

import { Showcase } from './showcase';
import { studentShowcases } from './studentShowcases';

const responsive: ResponsiveType = {
  all: {
    breakpoint: { max: 9999, min: 0 },
    items: 1,
  },
};

export const StudentShowcaseCarouselSection: FC = () => (
  <section>
    <div className="container">
      <Carousel responsive={responsive} arrows={false} showDots renderDotsOutside dotListClass="mt-4">
        {studentShowcases.map(showcase => <Showcase key={showcase.name} {...showcase} />)}
      </Carousel>
    </div>
  </section>
);
