'sever-only';

import type { FC } from 'react';

import { NewYears2025 } from '@/components/promotions/newYears2025';
import { isNewYearsWindow } from '@/domain/dateRange';
import { getData } from '@/lib/getData';

interface Props {
  countryCode: string;
}

export const CurrentPromotion: FC<Props> = async () => {
  const { date } = await getData();
  if (isNewYearsWindow(date)) {
    return <NewYears2025 />;
  }
};
