'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import type { FC } from 'react';
import { useEffect, useRef } from 'react';

import { brevoPageview } from '@/lib/brevo';
import { fbqPageview } from '@/lib/fbq';

export const LayoutClient: FC = () => {
  const countRef = useRef(0);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    let url = `https://www.qcdesignschool.com${pathname}`;
    const stringSearchParams = searchParams.toString();
    if (stringSearchParams) {
      url += `?${stringSearchParams}`;
    }

    if (countRef.current > 0) { // don't run the first time because it's already being tracked in the snippet
      if (pathname) {
        const title = document.title;
        brevoPageview(title, url, pathname);
      }
    } else { // only do this the first time because we exclude the initial pageView in the snippet, but autoconfig handles all other views
      fbqPageview(url);
    }
    countRef.current++;
  }, [ pathname, searchParams ]);

  return null;
};
