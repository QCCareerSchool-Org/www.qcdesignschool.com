import type { FC } from 'react';
import type { Course, WithContext } from 'schema-dts';

import type { CourseCode } from '@/domain/courseCode';
import { getCourseCertification, getCourseDescription, getCourseName, getCourseSubjects, getCourseUrl, getCourseWorkload } from '@/domain/courseCode';
import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';
import { educationalOrganization } from '@/qcDesignSchoolEducationalOrganization';

interface Props {
  courseCode: CourseCode;
  id?: string;
  providerId?: string;
}

export const CourseSchema: FC<Props> = async ({ courseCode, id = '#course', providerId }) => {
  const priceQuery: PriceQuery = { countryCode: 'US', provinceCode: 'MD', courses: [ courseCode ] };
  const price = await fetchPrice(priceQuery);
  if (!price) {
    return null;
  }

  const certification = getCourseCertification(courseCode);

  const courseJsonLD: WithContext<Course> = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': id,
    courseCode,
    'url': getCourseUrl(courseCode),
    'name': getCourseName(courseCode),
    'description': getCourseDescription(courseCode),
    'educationalCredentialAwarded': certification ? {
      '@type': 'EducationalOccupationalCredential',
      'name': certification,
    } : undefined,
    'availableLanguage': 'en',
    'teaches': getCourseSubjects(courseCode),
    'hasCourseInstance': {
      '@type': 'CourseInstance',
      'courseMode': 'online',
      'courseWorkload': getCourseWorkload(courseCode),
    },
    'offers': {
      '@type': 'Offer',
      'price': price.discountedCost.toFixed(2),
      'priceCurrency': price.currency.code,
      'url': 'https://enroll.qcdesignschool.com',
      'availability': 'https://schema.org/InStock',
    },
    'provider': providerId
      ? { '@id': providerId }
      : {
        '@type': 'EducationalOrganization',
        '@id': 'https://www.qcdesignschool.com/#school',
        'url': 'https://www.qcdesignschool.com',
        'name': 'QC Design School',
        'sameAs': 'sameAs' in educationalOrganization ? educationalOrganization.sameAs : undefined,
      },
  };

  return <script id={`course-schema-${courseCode}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLD) }} />;
};
