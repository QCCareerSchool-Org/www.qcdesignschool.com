import type { EducationalOrganization, WithContext } from 'schema-dts';

import { getTelephoneNumber } from '@/lib/telephone';

export const educationalOrganization: WithContext<EducationalOrganization> = {
  '@context': 'https://schema.org',
  '@id': '#school',
  '@type': 'EducationalOrganization',
  'name': 'QC Design School',
  'url': 'https://www.qcdesignschool.com/',
  'logo': 'https://www.qcdesignschool.com/logo.svg',
  'email': 'info@qcdesignschool.com',
  'foundingDate': '2005-03-07T09:00:00-05:00',
  'parentOrganization': { '@id': 'https://www.qccareerschool.com/#school' },
  'sameAs': [
    'https://www.facebook.com/QCDesign',
    'https://www.instagram.com/qcdesignschool',
    'https://www.tiktok.com/@qcdesignschool',
    'https://www.pinterest.com/qccareerschool',
    'https://www.linkedin.com/company/qc-career-school',
  ],
  'address': [
    {
      '@type': 'PostalAddress',
      'streetAddress': '38 McArthur Avenue',
      'addressLocality': 'Ottawa',
      'addressRegion': 'ON',
      'postalCode': 'K1L 6R2',
      'addressCountry': 'CA',
      'telephone': getTelephoneNumber('CA'),
      'hoursAvailable': [
        { '@type': 'OpeningHoursSpecification', 'opens': '08:00-05:00', 'closes': '20:00-05:00', 'dayOfWeek': [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday' ] },
        { '@type': 'OpeningHoursSpecification', 'opens': '08:00-05:00', 'closes': '19:00-05:00', 'dayOfWeek': 'Friday' },
        { '@type': 'OpeningHoursSpecification', 'opens': '10:00-05:00', 'closes': '15:00-05:00', 'dayOfWeek': 'Saturday' },
        { '@type': 'OpeningHoursSpecification', 'opens': '17:00-05:00', 'closes': '22:00-05:00', 'dayOfWeek': 'Sunday' },
      ],
    },
    {
      '@type': 'PostalAddress',
      'streetAddress': '1 Research Court, Suite 450',
      'addressLocality': 'Rockville',
      'addressRegion': 'MD',
      'postalCode': '20850',
      'addressCountry': 'US',
      'telephone': getTelephoneNumber('US'),
      'hoursAvailable': [
        { '@type': 'OpeningHoursSpecification', 'opens': '08:00-05:00', 'closes': '20:00-05:00', 'dayOfWeek': [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday' ] },
        { '@type': 'OpeningHoursSpecification', 'opens': '08:00-05:00', 'closes': '19:00-05:00', 'dayOfWeek': 'Friday' },
        { '@type': 'OpeningHoursSpecification', 'opens': '10:00-05:00', 'closes': '15:00-05:00', 'dayOfWeek': 'Saturday' },
        { '@type': 'OpeningHoursSpecification', 'opens': '17:00-05:00', 'closes': '22:00-05:00', 'dayOfWeek': 'Sunday' },
      ],
    },
    {
      '@type': 'PostalAddress',
      'streetAddress': '186 St. Albans Road, Suite 18',
      'addressLocality': 'Watford',
      'addressRegion': 'Hertfordshire',
      'postalCode': 'WD24 4AS',
      'addressCountry': 'GB',
      'telephone': getTelephoneNumber('GB'),
      'hoursAvailable': [
        { '@type': 'OpeningHoursSpecification', 'opens': '08:00-05:00', 'closes': '20:00-05:00', 'dayOfWeek': [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday' ] },
        { '@type': 'OpeningHoursSpecification', 'opens': '08:00-05:00', 'closes': '19:00-05:00', 'dayOfWeek': 'Friday' },
        { '@type': 'OpeningHoursSpecification', 'opens': '10:00-05:00', 'closes': '15:00-05:00', 'dayOfWeek': 'Saturday' },
        { '@type': 'OpeningHoursSpecification', 'opens': '17:00-05:00', 'closes': '22:00-05:00', 'dayOfWeek': 'Sunday' },
      ],
    },
    {
      '@type': 'PostalAddress',
      'streetAddress': '78 Williams Street, Suite 23',
      'addressLocality': 'Sydney',
      'addressRegion': 'NSW',
      'postalCode': '2011',
      'addressCountry': 'AU',
      'telephone': getTelephoneNumber('AU'),
      'hoursAvailable': [
        { '@type': 'OpeningHoursSpecification', 'opens': '08:00-05:00', 'closes': '20:00-05:00', 'dayOfWeek': [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday' ] },
        { '@type': 'OpeningHoursSpecification', 'opens': '08:00-05:00', 'closes': '19:00-05:00', 'dayOfWeek': 'Friday' },
        { '@type': 'OpeningHoursSpecification', 'opens': '10:00-05:00', 'closes': '15:00-05:00', 'dayOfWeek': 'Saturday' },
        { '@type': 'OpeningHoursSpecification', 'opens': '17:00-05:00', 'closes': '22:00-05:00', 'dayOfWeek': 'Sunday' },
      ],
    },
  ],
};
