'use client';

import { useHostname } from '@/hooks/useHostname';
import { usePathname } from 'next/navigation';
import type { FC } from 'react';

export const CurrentPageInput: FC = () => {
  const path = usePathname();
  const host = useHostname();
  return <input type="hidden" name="currentPage" value={`${host}${path}`} />;
};
