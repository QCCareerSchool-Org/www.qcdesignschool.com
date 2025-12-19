import type { FC } from 'react';

import { Jan2025_100Off } from '@/components/promotions/jan2025-100off';
import { NewYears2025 } from '@/components/promotions/newYears2025';

interface Props {
  date: number;
  countryCode: string;
}

export const CurrentPromotion: FC<Props> = ({ date, countryCode }) => {
  if (date >= Date.UTC(2025, 11, 26, 8) && date < Date.UTC(2026, 0, 3, 8)) { // 2025-12-26T03:00 (8:00 UTC) to 2026-01-03T03:00 (8:00 UTC)
    return <NewYears2025 />;
  } else if (date >= Date.UTC(2026, 0, 7, 8) && date < Date.UTC(2026, 0, 17, 8)) { // 2026-01-07T03:00 (8:00 UTC) to 2026-01-17T03:00 (8:00 UTC)
    return <Jan2025_100Off countryCode={countryCode} />;
  }

  return null;
};
