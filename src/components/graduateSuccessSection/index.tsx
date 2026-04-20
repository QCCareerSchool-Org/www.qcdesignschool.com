import type { FC } from 'react';

import { TestimonialCard } from './testimonialCard';
import { testimonials } from '@/components/testimonial/data';

interface Props {
  testimonialIds: string[];
  className?: string;
}

export const GraduateSuccessSection: FC<Props> = ({ testimonialIds, className }) => {
  return (
    <section className={className}>
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-lg-10 col-xl-8">
            <h2>Real-World Success from QC Graduates</h2>
            <p className="text-muted mb-0">Whether you're pivoting careers, expanding services, or launching a business, our graduates prove that QC's IDDP™ credential and business tools are the fastest path to a thriving interior design career.</p>          </div>
        </div>
        <div className="row justify-content-center g-4 g-xl-5">
          {testimonialIds.map(t => testimonials[t] && (
            <div key={t} className="col-12 col-md-6 d-flex">
              <TestimonialCard testimonial={testimonials[t]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
