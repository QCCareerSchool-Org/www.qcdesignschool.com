'sever-only';

import type { FC } from 'react';

import { EndOfYear2025 } from '@/components/promotions/endOfYear2025';
import { NewYear2026 } from '@/components/promotions/NewYear2026';
import { endOfYear2025, newYear2026 } from '@/lib/promotionPeriods';

interface Props {
  date: number;
  countryCode: string;
}

export const CurrentPromotion: FC<Props> = ({ date, countryCode }) => {
  if (endOfYear2025.contains(date)) {
    return <EndOfYear2025 />;
  } else if (newYear2026.contains(date)) {
    return <NewYear2026 countryCode={countryCode} />;
  }
};
