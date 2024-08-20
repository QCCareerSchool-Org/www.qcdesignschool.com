'use client';

import type { FC } from 'react';
import { ProfileIcon } from '../profileIcon';
import { testimonials } from '../testimonial/data';

type Props = {
  testimonial: string;
};

export const StudentFeature: FC<Props> = ({ testimonial }) => {

  const testimonialData = testimonials[testimonial];

  return (
    <>
      <ProfileIcon image={testimonialData.image} name={testimonialData.name} subtitle="PlaceholderSubtitle" />
      <p className="mt-4">{testimonialData.long[0]}</p>
    </>
  );
};
