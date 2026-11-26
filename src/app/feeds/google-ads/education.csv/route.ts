import { courseCodes, getCourseName, getCourseUrl } from '@/domain/courseCode';
import { siteUrl } from '@/lib/siteUrl';

const escapeCSV = (value: string): string => {
  return `"${value.replace(/"/gu, '""')}"`;
};

export const GET = (): Response => {
  const headers = [
    'Program ID',
    'Program name',
    'School name',
    'Final URL',
  ];

  const rows = courseCodes.map(code => [
    code,
    getCourseName(code),
    'QC Design School',
    new URL(getCourseUrl(code), siteUrl).href,
  ]);

  const csv = [ headers, ...rows ]
    .map(row => row.map(escapeCSV).join(','))
    .join('\r\n');

  return new Response(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
    },
  });
};
