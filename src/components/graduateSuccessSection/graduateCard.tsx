'use client';

import type { FC } from 'react';
import { Card } from 'react-bootstrap';

import type { Grad } from './data';

interface Props {
  grad: Grad;
}

export const GraduateCard: FC<Props> = ({ grad }) => (
  <Card className="bg-light rounded-4 border-0 shadow-sm">
    <Card.Img src={grad.image.src} className="rounded-top-4 rounded-bottom-0" alt="" />
    <Card.Body>
      <div className="fw-bold mb-4">{grad.name}<br />{grad.title}</div>
      <p className="mb-4">{grad.intro}</p>
      <blockquote className="mb-0">
        {grad.text.map((t, i, a) => (
          <p key={i} className={`lead ${i === a.length - 1 ? 'mb-0' : ''}`}>&ldquo;{t}{i === a.length - 1 ? <>&rdquo;</> : ''}</p>
        ))}
      </blockquote>
    </Card.Body>
  </Card>
);
