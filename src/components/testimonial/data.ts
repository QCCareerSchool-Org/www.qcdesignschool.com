import type { StaticImageData } from 'next/image';

import * as Images from './images';
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
  'DT-0001': {
    name: 'John Smith',
    courses: [ 'i2' ],
    short: [ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur magna eu tellus cursus lobortis. Vivamus nec viverra massa.' ],
    long: [ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur magna eu tellus cursus lobortis. Vivamus nec viverra massa, vel auctor magna. Suspendisse consectetur sed ipsum sit amet dictum. Nulla facilisi. Nulla sed suscipit eros, sed aliquam massa. Etiam iaculis et est nec maximus. Nulla congue risus lectus, ut rutrum felis elementum eget.' ],
    image: Images.JohnSmith,
    stars: 5,
  },
};
