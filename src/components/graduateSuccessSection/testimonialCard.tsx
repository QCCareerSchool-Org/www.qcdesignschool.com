'use client';

import type { FC } from 'react';
import { Card } from 'react-bootstrap';

import { ImageCircle } from '../imageCircle';
import type { Testimonial } from '../testimonial/data';

interface Props {
  testimonial: Testimonial;
}

export const TestimonialCard: FC<Props> = ({ testimonial }) => (
  <Card>
    <Card.Body>
      <div className="d-flex gap-3">
        <ImageCircle src={testimonial.image} imagePositionX={testimonial.imagePositionX} imagePositionY={testimonial.imagePositionY} alt={testimonial.name} />
        <div>{testimonial.name}</div>
      </div>
      <p className="mb-4">{testimonial.intro}</p>
      <blockquote className="mb-0">
        <p className="mb-4">&ldquo;{testimonial.long}&rdquo;</p>
      </blockquote>
    </Card.Body>
  </Card>
);
