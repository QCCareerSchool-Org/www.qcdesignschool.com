import type { CourseCode } from '@/domain/courseCode';

export type Course = {
  name: string;
  position: number;
  url: string;
  description: string;
  certificate?: string;
  courseCode: CourseCode[];
};

export const courses: Record<string, Course> = {
  'landscape-design': {
    name: 'Landscape Design Course',
    position: 2,
    url: 'https://www.qcdesignschool.com/online-courses/landscape-design',
    description: 'Learn how to create stunning garden designs and outdoor design concepts.',
    certificate: 'International Landscape Design Professional™ Certification',
    courseCode: [ 'ld' ],
  },
  'home-staging': {
    name: 'Home Staging Course',
    position: 3,
    url: 'https://www.qcdesignschool.com/online-courses/home-staging',
    description: 'Learn home staging and transform client spaces into buyer-ready showcases.',
    certificate: 'International Staging and Redesign Professional™ Certification',
    courseCode: [ 'st' ],
  },
  'professional-organizing': {
    name: 'Professional Organizing Course',
    position: 4,
    url: 'https://www.qcdesignschool.com/online-courses/professional-organizing',
    description: 'Learn to organize homes and offices, create functional layouts, and build a successful professional organizing business.',
    certificate: 'Advanced International Organizing Professional™ Certification',
    courseCode: [ 'po' ],
  },
  'feng-shui': {
    name: 'Feng Shui Design Course',
    position: 5,
    url: 'https://www.qcdesignschool.com/online-courses/feng-shui-design',
    description: 'Learn to design harmonious spaces using feng shui principles and build a successful feng shui design business.',
    certificate: 'Advanced Feng Shui Design Professional™ Certification',
    courseCode: [ 'fs' ],
  },
  'color-consultant': {
    name: 'Color Consultant Course',
    position: 6,
    url: 'https://www.qcdesignschool.com/online-courses/color-consultant',
    description: 'Learn to design custom interiors, master color theory, and build a successful color consulting business.',
    certificate: 'International Color Consulting Professional™ Certification',
    courseCode: [ 'cc' ],
  },
  'floral-design': {
    name: 'Floral Design Course',
    position: 7,
    url: 'https://www.qcdesignschool.com/online-courses/floral-design',
    description: 'Learn to create stunning floral arrangements, master plant care and flower selection.',
    certificate: 'International Floral Design Professional™ Certification',
    courseCode: [ 'fd' ],
  },
  'event-decor': {
    name: 'Event Decor Course',
    position: 8,
    url: 'https://www.qcdesignschool.com/online-courses/event-decor',
    description: 'Learn to design cohesive event layouts with themes, color schemes, and decor elements.',
    certificate: 'International Event Decorating Professional™ Certification',
    courseCode: [ 'ed' ],
  },
  'aging-in-place': {
    name: 'Aging in Place Course',
    position: 9,
    url: 'https://www.qcdesignschool.com/online-courses/aging-in-place',
    description: 'Learn to design safe, functional spaces for aging clients and address mobility and lifestyle needs.',
    certificate: 'Aging in Place Professional™ Certification',
    courseCode: [ 'ap' ],
  },
  'accelerate-your-business': {
    name: 'Accelerate Your Business Training',
    position: 10,
    url: 'https://www.qcdesignschool.com/online-courses/accelerate-your-design-business',
    description: 'Learn to build your brand, attract clients, manage design projects effectively, and create a professional portfolio to grow your business.',
    courseCode: [ 'db' ],
  },
  'virtual-design': {
    name: 'Virtual Design Training',
    position: 11,
    url: 'https://www.qcdesignschool.com/online-courses/virtual-design',
    description: 'Learn to offer professional online design services, connect with clients worldwide, and build a thriving virtual design business.',
    courseCode: [ 'vd' ],
  },
};
