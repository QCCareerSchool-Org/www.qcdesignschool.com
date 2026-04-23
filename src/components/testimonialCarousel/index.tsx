import type { FC, PropsWithChildren } from 'react';

import { Testimonial } from '../testimonial';
import { TestimonialCarouselClient } from './client';
import type { TestimonialId } from '../testimonial/data';
import { testimonials } from '../testimonial/data';
import type { CourseCode } from '@/domain/courseCode';

interface Props {
  testimonialIds?: TestimonialId[];
  priority?: CourseCode;
}

export const TestimonialCarousel: FC<PropsWithChildren<Props>> = ({ testimonialIds, priority, children }) => {
  const usedTestimonials = testimonialIds ?? Object.keys(testimonials) as TestimonialId[];

  const sort = priority
    ? (a: TestimonialId, b: TestimonialId) => {
      const priorityA = (testimonials[a].courses as CourseCode[]).includes(priority);
      const priorityB = (testimonials[b].courses as CourseCode[]).includes(priority);
      if (priorityA === priorityB) {
        return 0;
      }
      if (priorityA) {
        return -1;
      }
      return 1;
    }
    : undefined;

  return (
    <div style={{ minHeight: 360 }}>
      <TestimonialCarouselClient>
        {usedTestimonials.sort(sort).map(t => (
          <div key={t} className="mx-3 mb-md-5">
            <Testimonial id={t} />
          </div>
        ))}
        {children}
      </TestimonialCarouselClient>
    </div>
  );
};
