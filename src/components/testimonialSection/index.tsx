import type { FC } from 'react';
import { useMemo } from 'react';

import styles from './index.module.css';
import { Title } from './title';
import { ImageCircle } from '@/components/imageCircle';
import { courseSort } from '@/components/testimonial';
import type { Testimonial, TestimonialId } from '@/components/testimonial/data';
import { testimonials } from '@/components/testimonial/data';
import type { CourseCode } from '@/domain/courseCode';

interface Props {
  id: TestimonialId;
  courseCodes?: CourseCode[];
  className?: string;
}

export const TestimonialSection: FC<Props> = ({ id, courseCodes, className }) => {
  const testimonial = useMemo(() => {
    return {
      ...testimonials[id],
      courses: testimonials[id].courses.sort((a, b) => {
        if (courseCodes?.includes(a) && courseCodes.includes(b)) {
          return courseSort(a, b);
        }
        if (courseCodes?.includes(a)) {
          return -1;
        }
        if (courseCodes?.includes(b)) {
          return 1;
        }
        return courseSort(a, b);
      }),
    } as Testimonial;
  }, [ id, courseCodes ]);

  return (
    <section className={className}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9 col-xl-8 col-xxl-6">
            <blockquote>
              <div className={styles.text}>
                {testimonial.long.map((q, i, a) => {
                  if (i < a.length - 1) {
                    return <p key={i} className={styles.quotation}>&ldquo;{q}</p>;
                  }
                  return <p key={i} className={styles.quotation}>&ldquo;{q}&rdquo;</p>;
                })}
              </div>
              <footer className={styles.footer}>
                <ImageCircle src={testimonial.image} alt={testimonial.name} imagePositionX={testimonial.imagePositionX} imagePositionY={testimonial.imagePositionY} size={96} />
                <cite className={styles.name}>{testimonial.name}</cite>
                <Title testimonial={testimonial} />
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
