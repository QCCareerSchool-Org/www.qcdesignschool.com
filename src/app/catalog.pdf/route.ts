import { promises as fs } from 'fs';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import path from 'path';

import { getDesignRestricted } from '@/lib/restrictions';

export const GET = async (request: NextRequest): Promise<NextResponse> => {
  const countryCode = request.headers.get('X-Vercel-IP-Country') ?? 'US';
  const provinceCode = request.headers.get('X-Vercel-IP-Country-Region');

  const designRestricted = getDesignRestricted(countryCode, provinceCode);

  const filename = designRestricted ? 'decorating.pdf' : 'design.pdf';

  const file = await fs.readFile(path.join(process.cwd(), '/src/app/catalog.pdf', filename));

  const headers = new Headers();

  headers.set('Content-Type', 'application/pdf');

  return new NextResponse(file, { status: 200, statusText: 'OK', headers });
};
