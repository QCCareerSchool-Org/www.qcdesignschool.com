'use client';

import type { FC } from 'react';
import type { ResponsiveType } from 'react-multi-carousel';
import Carousel from 'react-multi-carousel';

import { CherelleJosephShowcase } from '@/components/showcase/cherelleJoseph';
import { GiannaLucheseShowcase } from '@/components/showcase/gianna-luchese';
import { JennaPelcherShowcase } from '@/components/showcase/jenna-pelcher';
import { MadysonBellShowcase } from '@/components/showcase/madyson-bell';
import { TazmanBakerShowcase } from '@/components/showcase/tazman-baker';

const responsive: ResponsiveType = {
  all: {
    breakpoint: { max: 9999, min: 0 },
    items: 1,
  },
};

export const CarouselSection: FC = () => (
  <section>
    <div className="container">
      <Carousel responsive={responsive} arrows={false} showDots renderDotsOutside dotListClass="mt-4">
        <CherelleJosephShowcase />
        <JennaPelcherShowcase />
        <MadysonBellShowcase />
        <TazmanBakerShowcase />
        <GiannaLucheseShowcase />
      </Carousel>
    </div>
  </section>
);
