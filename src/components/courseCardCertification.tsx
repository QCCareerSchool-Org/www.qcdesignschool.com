'use client';

import type { FC } from 'react';

import AFDP from '@/components/certificationLogos/afdp.svg';
import AIOP from '@/components/certificationLogos/aiop.svg';
import APDP from '@/components/certificationLogos/apdp.svg';
import ICCP from '@/components/certificationLogos/iccp.svg';
import IDDP from '@/components/certificationLogos/iddp.svg';
import IEDP from '@/components/certificationLogos/iedp.svg';
import IFDP from '@/components/certificationLogos/ifdp.svg';
import ILDP from '@/components/certificationLogos/ildp.svg';
import ISRP from '@/components/certificationLogos/isrp.svg';
import type { CourseCode } from '@/domain/courseCode';
import { getCourseCertification } from '@/domain/courseCode';
import { useScreenWidth } from '@/hooks/useScreenWidth';

interface Props {
  courseCode: CourseCode;
}

export const CourseCardCertifcation: FC<Props> = ({ courseCode }) => {
  const screenWidth = useScreenWidth();
  if (screenWidth === 0) {
    return;
  }

  const imageProps = {
    height: screenWidth > 1200 ? 120 : screenWidth > 992 ? 110 : screenWidth > 768 ? 100 : 90,
    title: getCourseCertification(courseCode),
  };

  switch (courseCode) {
    case 'i2':
      return <IDDP {...imageProps} />;
    case 'st':
    case 'ms':
      return <ISRP {...imageProps} />;
    case 'fs':
      return <AFDP {...imageProps} />;
    case 'po':
      return <AIOP {...imageProps} />;
    case 'ld':
      return <ILDP {...imageProps} />;
    case 'ed':
      return <IEDP {...imageProps} />;
    case 'cc':
      return <ICCP {...imageProps} />;
    case 'fd':
      return <IFDP {...imageProps} />;
    case 'ap':
      return <APDP {...imageProps} />;
    case 'db':
      return null;
    case 'vd':
      return null;
  }
};
