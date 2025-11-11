import type { FC } from 'react';
import type { Course, WithContext } from 'schema-dts';

import { type CourseCode, getCourseCertificate, getCourseDescription, getCourseName, getCourseUrl } from '@/domain/courseCode';
import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';

interface Props {
  courseCode: CourseCode;
}

export const CourseSchema: FC<Props> = async ({ courseCode }) => {
  const priceQuery: PriceQuery = { countryCode: 'US', provinceCode: 'MD', courses: [ courseCode ] };
  const price = await fetchPrice(priceQuery);
  if (!price) {
    return null;
  }

  const certificate = getCourseCertificate(courseCode);

  const courseJsonLD: WithContext<Course> = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': '#course',
    'url': getCourseUrl(courseCode),
    'name': getCourseName(courseCode),
    'description': getCourseDescription(courseCode),
    'educationalCredentialAwarded': certificate ? {
      '@type': 'EducationalOccupationalCredential',
      'name': certificate,
    } : undefined,
    'hasCourseInstance': {
      '@type': 'CourseInstance',
      'courseMode': 'Online',
      'offers': {
        '@type': 'Offer',
        'category': 'Course',
        'url': 'https://enroll.qcdesignschool.com/',
        'price': price.discountedCost.toFixed(2),
        'priceCurrency': 'USD',
        'availability': 'https://schema.org/InStock',
      },
    },
    'provider': {
      '@type': 'EducationalOrganization',
      'name': 'QC Design School',
      'sameAs': [
        'https://www.linkedin.com/company/qc-career-school',
        'https://www.facebook.com/QCDesign',
        'https://www.instagram.com/qcdesignschool',
        'https://www.youtube.com/@QCDesign',
      ],
    },
  };

  return <script id={`course-schema-${courseCode}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLD) }} />;
};
