'use client';

import type { FC } from 'react';

import { GetStartedSection } from '@/components/getStartedSection';
import { isEndOfYearPromotionWindow } from '@/domain/dateRange';
import { useDate } from '@/hooks/useDate';

interface Props {
  bogoEnrollLink: string;
}

export const GetStarted: FC<Props> = ({ bogoEnrollLink }) => {
  const date = useDate();

  return <GetStartedSection
    title="Get Started Today"
    text={isEndOfYearPromotionWindow(date)
      ? "Take charge of your future and become professionally certified with QC's online training today and start earning before spring!"
      : 'Enroll Online and Start on Your Path to Becoming a Certified Designer'
    }
    buttonHref={bogoEnrollLink}
  />;
};
