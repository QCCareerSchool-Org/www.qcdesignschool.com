import type { StaticImageData } from 'next/image';

import EBImage from '../../app/(main)/online-courses/accelerate-your-design-business/hero.jpg';
import APImage from '../../app/(main)/online-courses/aging-in-place/hero.jpg';
import CCImage from '../../app/(main)/online-courses/color-consultant/hero.jpg';
import EDImage from '../../app/(main)/online-courses/event-decor/hero.jpg';
import FSImage from '../../app/(main)/online-courses/feng-shui-design/hero.jpg';
import FDImage from '../../app/(main)/online-courses/floral-design/hero.jpg';
import STImage from '../../app/(main)/online-courses/home-staging/hero.jpg';
import I2Image from '../../app/(main)/online-courses/interior-decorating/hero.jpg';
import LDImage from '../../app/(main)/online-courses/landscape-design/hero.jpg';
import POImage from '../../app/(main)/online-courses/professional-organizing/hero.jpg';
import MSImage from '../../app/(main)/online-courses/staging-for-designers/hero.jpg';
import VDImage from '../../app/(main)/online-courses/virtual-design/hero.jpg';
import type { CourseCode } from '@/domain/courseCode';

export const getHeroImage = (courseCode: CourseCode): StaticImageData => {
  switch (courseCode) {
    case 'i2':
      return I2Image;
    case 'st':
      return STImage;
    case 'ms':
      return MSImage;
    case 'fs':
      return FSImage;
    case 'po':
      return POImage;
    case 'ld':
      return LDImage;
    case 'ed':
      return EDImage;
    case 'cc':
      return CCImage;
    case 'fd':
      return FDImage;
    case 'ap':
      return APImage;
    case 'eb':
      return EBImage;
    case 'vd':
      return VDImage;
  }
};
