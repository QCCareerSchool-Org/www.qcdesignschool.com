'use client';

import type { FC } from 'react';

import type { Grad } from './data';
import { Card } from '@/components/qc/card';

interface Props {
  grad: Grad;
}

export const GraduateCard: FC<Props> = ({ grad }) => (
  <Card className="bg-light" src={grad.image}>
    <div className="mb-4"><span className="fw-bold">{grad.name}</span><br />{grad.title}</div>
    <p className="mb-4">{grad.intro}</p>
    <blockquote className="mb-0">
      {grad.text.map((t, i, a) => (
        <p key={i} className={`lead ${i === a.length - 1 ? 'mb-0' : ''}`}>&ldquo;{t}{i === a.length - 1 ? <>&rdquo;</> : ''}</p>
      ))}
    </blockquote>
  </Card>
);
