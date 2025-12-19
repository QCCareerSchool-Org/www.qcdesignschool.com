import type { FC } from 'react';
import type { Course, Offer, WithContext } from 'schema-dts';

import type { CourseCode } from '@/domain/courseCode';
import { getCourseCertification, getCourseDescription, getCourseName, getCourseSubjects, getCourseUrl, getCourseWorkload } from '@/domain/courseCode';
import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';
import { educationalOrganization } from '@/qcDesignSchoolEducationalOrganization';
import { withSuspense } from '@/withSuspense';

interface Props {
  courseCode: CourseCode;
  id?: string;
  providerId?: string;
  showPrice?: boolean;
}

const CourseJsonLdBase: FC<Props> = ({ courseCode, id = '#course', providerId, showPrice }) => {
  const jsonLd = getCourse(courseCode, id, providerId, showPrice);

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
};

export const CourseJsonLd = withSuspense(CourseJsonLdBase);

export const getCourse = async (courseCode: CourseCode, id?: string, providerId?: string, showPrice?: boolean): Promise<Course> => {
  const certification = getCourseCertification(courseCode);

  const course: WithContext<Course> = {
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
    'teaches': getCourseSubjects(courseCode),
    'hasCourseInstance': {
      '@type': 'CourseInstance',
      'courseMode': 'online',
      'courseWorkload': getCourseWorkload(courseCode),
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

  if (showPrice) {
    const priceQuery: PriceQuery = { countryCode: 'US', provinceCode: 'MD', courses: [ courseCode ] };
    const price = await fetchPrice(priceQuery);

    if (price) {
      course.offers = {
        '@type': 'Offer',
        'price': price.discountedCost.toFixed(2),
        'priceCurrency': price.currency.code,
        'url': 'https://enroll.qcdesignschool.com',
        'availability': 'https://schema.org/InStock',
      } satisfies Offer;
    }
  }

  return course;
};
