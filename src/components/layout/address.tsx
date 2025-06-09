import type { FC } from 'react';

import { getAddress } from '@/lib/address';
import { getData } from '@/lib/getData';

export const Address: FC = async () => {
  const { countryCode } = await getData();
  const address = getAddress(countryCode);

  return address.join(', ');
};
