import type { FC } from 'react';

import { getAddress } from '@/lib/address';
import { getServerData } from '@/lib/getServerData';

export const Address: FC = async () => {
  const { countryCode } = await getServerData();
  const address = getAddress(countryCode);

  return address.join(', ');
};
