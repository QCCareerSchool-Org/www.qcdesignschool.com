'use client';

import type { FC, PropsWithChildren } from 'react';
import type { ResponsiveType } from 'react-multi-carousel';
import Carousel from 'react-multi-carousel';

import { Testimonial } from '../testimonial';
import type { TestimonialId } from '../testimonial/data';
import { testimonials } from '../testimonial/data';
import { useScreenWidthContext } from '@/hooks/useScreenWidthContext';

interface Props {
  testimonialIds?: TestimonialId[];
}

const responsive: ResponsiveType = {
  xl: {
    breakpoint: { min: 1200, max: 9999 },
    items: 4,
    partialVisibilityGutter: 30,
    slidesToSlide: 4,
  },
  lg: {
    breakpoint: { min: 992, max: 1200 },
    items: 3,
    partialVisibilityGutter: 30,
    slidesToSlide: 3,
  },
  md: {
    breakpoint: { min: 768, max: 992 },
    items: 3,
    partialVisibilityGutter: 30,
    slidesToSlide: 3,
  },
  sm: {
    breakpoint: { min: 576, max: 768 },
    items: 2,
  },
  xs: {
    breakpoint: { min: 0, max: 576 },
    items: 1,
  },
};

export const TestimonialCarousel: FC<PropsWithChildren<Props>> = ({ testimonialIds, children }) => {
  const usedTestimonials = testimonialIds ?? Object.keys(testimonials) as TestimonialId[];
  const screenSize = useScreenWidthContext() ?? 0;

  return (
    <div style={{ minHeight: 360 }}>
      <Carousel ssr responsive={responsive} partialVisible infinite showDots={screenSize >= 768}>
        {usedTestimonials.map(t => (
          <div key={t} className="mx-3 mb-md-5">
            <Testimonial id={t} />
          </div>
        ))}
        {children}
      </Carousel>
    </div>
  );
};
