export type CourseCode = 'i2' | 'st' | 'fs' | 'ed' | 'cc' | 'fd' | 'ap' | 'eb';

export const isCourseCode = (obj: unknown): obj is CourseCode => {
  return typeof obj === 'string' && [ 'i2', 'st', 'fs', 'cc', 'ap', 'eb' ].includes(obj);
};

export const getCourseName = (courseCode: CourseCode): string => {
  switch (courseCode) {
    case 'i2':
      return 'Interior Decorating Course';
    case 'st':
      return 'Home Staging Course';
    case 'fs':
      return 'Feng Shui Design Course';
    case 'ed':
      return 'Event Decor Course';
    case 'cc':
      return 'Color Consultant Course';
    case 'fd':
      return 'Floral Design Course';
    case 'ap':
      return 'Aging in Place Course';
    case 'eb':
      return 'Accelerate Your Design Business Course';
  }
};
