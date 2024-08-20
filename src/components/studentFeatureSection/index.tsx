'use client';

import Image from 'next/image';
import type { FC } from 'react';
import { useState } from 'react';
import { ScrollDots } from '../scrollDots';
import { StudentFeature } from './studentFeature';
import TestimonialImage from './testimonial-image.jpg';

type Props = {
  testimonials: string[];
};

export const StudentFeatureSection: FC<Props> = ({ testimonials }) => {

  const [ testimonialIndex, setTestimonialIndex ] = useState<number>(0);

  return (
    <section>
      <div className="row justify-content-center">
        <div className="col-7 col-md-4 col-lg-4 col-xl-3 d-flex align-items-center m-3">
          <Image src={TestimonialImage} alt="" style={{ width: '100%', height: 'fit-content' }} />
        </div>
        <div className="col-10 col-md-7 col-lg-7 col-xl-5 m-3">
          <h2>Student Feature</h2>
          <p className="mb-5">We take immense pride in the success of all our graduates. See below for one inspiring story among many, highlighting the remarkable achievements of our talented alumni.</p>
          <StudentFeature testimonial={testimonials[testimonialIndex]} />
        </div>
      </div>
      <div>
        <ScrollDots numberOfPages={testimonials.length} currentIndex={testimonialIndex} handlePageChange={setTestimonialIndex} />
      </div>
    </section>
  );
};
