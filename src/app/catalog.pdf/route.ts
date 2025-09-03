import { promises as fs } from 'fs';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import path from 'path';

import { getDesignRestricted } from '@/lib/restrictions';

export const GET = async (request: NextRequest): Promise<NextResponse> => {
  const countryCode = request.headers.get('X-Vercel-IP-Country') ?? 'US';
  const provinceCode = request.headers.get('X-Vercel-IP-Country-Region');

  console.log(countryCode, provinceCode);

  const searchParams = request.nextUrl.searchParams;
  const course = searchParams.get('course');

  const localFilename = getLocalFilename(course, countryCode, provinceCode);

  const filename = path.join(process.cwd(), '/public/catalogs', localFilename);

  const file = await fs.readFile(filename);

  const headers = new Headers();
  headers.set('content-type', 'application/pdf');
  headers.set('content-disposition', `attachment; filename="QC Design School Course Catalog.pdf"`);

  return new NextResponse(file, { headers });
};

const getLocalFilename = (course: string | null, countryCode: string, provinceCode: string | null): string => {
  switch (course) {
    case 'landscape':
      return 'landscape.pdf';
    default:
      return getDesignRestricted(countryCode, provinceCode) ? 'decorating.pdf' : 'design.pdf';
  }
};
