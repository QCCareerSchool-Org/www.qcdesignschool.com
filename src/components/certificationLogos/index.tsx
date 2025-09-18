import type { ReactElement } from 'react';

import AIOP from './aiop.svg';
import IDDP from './iddp.svg';
import ILDP from './ildp.svg';
import ISRP from './isrp.svg';
import type { CourseCode } from '@/domain/courseCode';

export const getCertification = (courseCode: CourseCode, height: number): ReactElement | null => {
  switch (courseCode) {
    case 'i2':
      return <IDDP fill="#faf0b6" height={height} alt="International Design and Decorating Professional™ (IDDP™) certification" />;
    case 'st':
      return <ISRP height={height} alt="International Staging and Redesign Professional™ (ISRP™) certification" />;
    case 'ld':
      return <ILDP height={height} alt="International Landscape Design Professional™ (ILDP)™" />;
    case 'po':
      return <AIOP height={height} alt="Advanced International Organizing Professional™ (AIOP™) certification" />;
  }
  return null;
};
