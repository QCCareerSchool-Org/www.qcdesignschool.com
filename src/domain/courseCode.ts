export type CourseCode = 'i2' | 'st' | 'ms' | 'fs' | 'po' | 'ld' | 'ed' | 'cc' | 'fd' | 'ap' | 'db' | 'vd';

export const isCourseCode = (obj: unknown): obj is CourseCode => {
  return typeof obj === 'string' && [ 'i2', 'st', 'ms', 'fs', 'po', 'ld', 'ed', 'cc', 'fd', 'ap', 'db', 'vd' ].includes(obj);
};

export const getCourseName = (courseCode: CourseCode): string => {
  switch (courseCode) {
    case 'i2':
      return 'Interior Design & Decorating';
    case 'st':
      return 'Home Staging';
    case 'ms':
      return 'Staging for Designers';
    case 'fs':
      return 'Feng Shui Design';
    case 'po':
      return 'Professional Organizing';
    case 'ed':
      return 'Event Decor';
    case 'ld':
      return 'Landscape Design';
    case 'cc':
      return 'Color Consultant';
    case 'fd':
      return 'Floral Design';
    case 'ap':
      return 'Aging in Place';
    case 'db':
      return 'Accelerate Your Design Business';
    case 'vd':
      return 'Virtual Design';
  }
};

export const getCourseURL = (courseCode: CourseCode): string => {
  switch (courseCode) {
    case 'i2':
      return '/online-courses/interior-decorating';
    case 'st':
      return '/online-courses';
    case 'ms':
      return '/online-courses';
    case 'fs':
      return '/online-courses';
    case 'po':
      return '/online-courses';
    case 'ed':
      return '/online-courses';
    case 'ld':
      return '/online-courses';
    case 'cc':
      return '/online-courses';
    case 'fd':
      return '/online-courses';
    case 'ap':
      return '/online-courses';
    case 'db':
      return '/online-courses';
    case 'vd':
      return '/online-courses';
  }
};
