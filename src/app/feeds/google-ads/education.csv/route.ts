import { courseCodes, getCourseGoogleAdsData, getCourseUrl } from '@/domain/courseCode';

const escapeCSV = (value: string): string => {
  return `"${value.replace(/"/gu, '""')}"`;
};

export const GET = (): Response => {
  const headers = [
    'Program ID',
    'Program name',
    'School name',
    'Final URL',
    'Thumbnail image URL',
    'Image URL',
    'Area of study',
    'Program description',
    'Contextual keywords',
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
        'QC Design School',
        getCourseUrl(code),
        data.imageUrl,
        data.imageUrl,
        data.areaOfStudy ?? '',
        data.programDescription,
        data.contextualKeywords?.join(';') ?? '',
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
