import { cookies } from 'next/headers';
import type { FC } from 'react';

import { SiteLayout } from '@/components/siteLayout';
import { isUserValues } from '@/domain/userValues';
import { decodeJwt } from '@/lib/jwt';

const MainLayout: FC<LayoutProps<'/'>> = async ({ children }) => {
  const jwt = (await cookies()).get('user')?.value;
  const result = jwt ? await decodeJwt(jwt) : undefined;
  const raw = result?.success ? result.value : undefined;
  const userValues = raw && isUserValues(raw) ? raw : undefined;

  return <SiteLayout userValues={userValues}>{children}</SiteLayout>;
};

export default MainLayout;
