import type { LayoutComponent } from '@/app/serverComponent';

import '@/app/bootstrap.scss';
import { Suspense } from 'react';
import { LayoutClient } from '../layoutClient';

const TermsLayout: LayoutComponent = ({ children }) => (
  <>
    <main>{children}</main>
    <Suspense>
      <LayoutClient />
    </Suspense>
  </>
);

export default TermsLayout;