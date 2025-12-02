'use client';

import { useOrigin } from '@/hooks/useOrigin';
import type { FC } from 'react';

export const CurrentPageInput: FC = () => {
  const origin = useOrigin();
  return <input type="hidden" name="currentPage" value={origin} />;
};
