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
import { useScreenWidth } from '@/hooks/useScreenWidth';

type Props = {
  courseCode: CourseCode;
};

export const CourseCardCertifcation: FC<Props> = ({ courseCode }) => {
  const screenWidth = useScreenWidth();
  if (screenWidth === 0) {
    return;
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const Certification = getCertification(courseCode);
  if (Certification) {
    return <Certification height={screenWidth > 1200 ? 120 : screenWidth > 992 ? 110 : screenWidth > 768 ? 100 : 90} />;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getCertification = (courseCode: CourseCode): any => {
  // 'i2', 'st', 'ms', 'fs', 'po', 'ld', 'ed', 'cc', 'fd', 'ap', 'eb', 'vd
  switch (courseCode) {
    case 'i2':
      return IDDP;
    case 'st':
    case 'ms':
      return ISRP;
    case 'fs':
      return AFDP;
    case 'po':
      return AIOP;
    case 'ld':
      return ILDP;
    case 'ed':
      return IEDP;
    case 'cc':
      return ICCP;
    case 'fd':
      return IFDP;
    case 'ap':
      return APDP;
    case 'eb':
      return null;
    case 'vd':
      return null;
  }
};
