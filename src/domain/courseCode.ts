export type CourseCode = 'i2' | 'st';

export const isCourseCode = (obj: unknown): obj is CourseCode => {
  return typeof obj === 'string' && [ 'i2', 'st' ].includes(obj);
};

export const getCourseName = (courseCode: CourseCode): string => {
  switch (courseCode) {
    case 'i2':
      return 'Interior Decorating Course';
    case 'st':
      return 'Home Staging Course';
  }
};
