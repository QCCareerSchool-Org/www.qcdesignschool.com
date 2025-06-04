import 'server-only';

import { headers } from 'next/headers';

type Data = {
  countryCode: string;
  provinceCode: string | null;
};

export const getData = (): Data => {
  const headerList = headers();
  const countryCode = headerList.get('x-vercel-ip-country') ?? 'US';
  const provinceCode = headerList.get('x-vercel-ip-country-region');

  return { countryCode, provinceCode };
};
