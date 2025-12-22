'sever-only';

import type { FC } from 'react';

import { HundredOff } from '@/components/promotions/HundredOff';
import { NewYear2025 } from '@/components/promotions/newYear2025';
import { isDec26PromotionWindow, isJan7PromotionWindow } from '@/domain/dateRange';

interface Props {
  date: number;
  countryCode: string;
}

export const CurrentPromotion: FC<Props> = ({ date, countryCode }) => {
  if (isDec26PromotionWindow(date)) {
    return <NewYear2025 />;
  } else if (isJan7PromotionWindow(date)) {
    return <HundredOff countryCode={countryCode} />;
  }
};
