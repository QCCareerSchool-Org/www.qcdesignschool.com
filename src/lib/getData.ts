import 'server-only';

import { headers } from 'next/headers';

interface Data {
  countryCode: string;
  provinceCode: string | null;
  date: number;
}

export const getData = async (): Promise<Data> => {
  const headerList = await headers();
  const countryCode = headerList.get('x-vercel-ip-country') ?? 'US';
  const provinceCode = headerList.get('x-vercel-ip-country-region');

  return { countryCode, provinceCode, date: Date.now() };
};
