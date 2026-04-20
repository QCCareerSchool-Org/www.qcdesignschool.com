'use client';

import type { FC } from 'react';
import { Card } from 'react-bootstrap';

import type { Testimonial } from '../testimonial/data';

interface Props {
  testimonial: Testimonial;
}

export const TestimonialCard: FC<Props> = ({ testimonial }) => (
  <Card className="bg-light rounded-4 border-0 shadow-sm">
    <Card.Img src={testimonial.image.src} className="rounded-top-4 rounded-bottom-0" alt="" />
    <Card.Body>
      <div className="fw-bold mb-4">{testimonial.name}<br />{testimonial.nickname}</div>
      <p className="mb-4">{testimonial.intro}</p>
      <blockquote className="mb-0">
        {testimonial.short.map((t, i, a) => (
          <p key={i} className={`lead ${i === a.length - 1 ? 'mb-0' : ''}`}>&ldquo;{t}{i === a.length - 1 ? <>&rdquo;</> : ''}</p>
        ))}
      </blockquote>
    </Card.Body>
  </Card>
);
