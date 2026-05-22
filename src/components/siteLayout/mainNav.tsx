import type { FC } from 'react';

import { MainNavClient } from './mainNavClient';
import { getServerData } from '@/lib/getServerData';

interface Props {
  designRestricted: boolean;
}

export const MainNav: FC<Props> = async ({ designRestricted }) => {
  const { countryCode } = await getServerData();
  return (
    <MainNavClient countryCode={countryCode} designRestricted={designRestricted} />
  );
};
