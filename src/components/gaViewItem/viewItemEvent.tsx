'use client';

import type { FC } from 'react';
import { useEffect, useRef } from 'react';

import type { GAItem } from '@/lib/gtag';
import { gaViewItem } from '@/lib/gtag';

interface Props {
  currency: string;
  value: number;
  items: GAItem[];
}

export const ViewItemEvent: FC<Props> = ({ currency, value, items }) => {
  const effectCalled = useRef(false);

  useEffect(() => {
    if (effectCalled.current) {
      return;
    }
    effectCalled.current = true;
    gaViewItem(currency, value, items);
  }, [ currency, value, items ]);

  return null;
};
