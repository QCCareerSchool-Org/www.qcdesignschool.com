import { courseCodes, getCourseGoogleAdsData, getCourseUrl } from '@/domain/courseCode';

const escapeCSV = (value: string): string => {
  return `"${value.replace(/"/gu, '""')}"`;
};

export const GET = (): Response => {
  const headers = [
    'Program ID',
    'Program name',
    'Final URL',
    'School name',
    'Image URL',
    'Thumbnail image URL',
    'Area of study',
    'Program description',
  ];

  const rows = courseCodes.flatMap(code => {
    const data = getCourseGoogleAdsData(code);

    if (!data) {
      return [];
    }

    return [
      [
        code,
        data.programName,
        getCourseUrl(code),
        'QC Design School',
        data.imageUrl,
        data.imageUrl,
        data.areaOfStudy ?? '',
        data.programDescription,
      ],
    ];
  });

  const csv = [ headers, ...rows ]
    .map(row => row.map(escapeCSV).join(','))
    .join('\r\n');

  return new Response(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
    },
  });
};
