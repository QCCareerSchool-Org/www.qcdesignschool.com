import type { FC } from 'react';

import { getAddress } from '@/lib/address';
import { getData } from '@/lib/getData';

export const Address: FC = () => {
  const { countryCode } = getData();
  const address = getAddress(countryCode);

  return address.join(',');
};
