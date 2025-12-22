import type { FC } from 'react';

import { getAddress } from '@/lib/address';
import { getSeverData } from '@/lib/getData';

export const Address: FC = async () => {
  const { countryCode } = await getSeverData();
  const address = getAddress(countryCode);

  return address.join(', ');
};
