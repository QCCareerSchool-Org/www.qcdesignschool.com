export type CourseCode = 'i2' | 'st' | 'fs' | 'cc' | 'ap' | 'eb';

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
    case 'cc':
      return 'Color Consultant Course';
    case 'ap':
      return 'Aging in Place Course';
    case 'eb':
      return 'Accelerate Your Design Business Course';
  }
};
