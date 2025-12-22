import 'server-only';

import { headers } from 'next/headers';

import { getParam } from './getParam';

interface Data {
  countryCode: string;
  provinceCode: string | null;
  date: number;
}

export const getSeverData = async (searchParams?: Promise<Record<string, string | string[] | undefined>>): Promise<Data> => {
  const headerList = await headers();
  const countryCode = headerList.get('x-vercel-ip-country') ?? 'US';
  const provinceCode = headerList.get('x-vercel-ip-country-region');
  let date = Date.now();

  if (searchParams) {
    const parameters = await searchParams;
    const dateOverrideParameter = getParam(parameters.date);
    if (dateOverrideParameter) {
      date = Date.parse(dateOverrideParameter);
    }
  }

  return { countryCode, provinceCode, date };
};
