import type { StaticImageData } from 'next/image';

// import * as Images from './images';
import type { CourseCode } from '@/domain/courseCode';

export type Testimonial = {
  name: string;
  courses: CourseCode[];
  short: string[];
  long: string[];
  image: StaticImageData;
  imagePositionX?: number;
  imagePositionY?: number;
  stars: 0 | 1 | 2 | 3 | 4 | 5;
};

export const testimonials: Record<string, Testimonial> = {
};
