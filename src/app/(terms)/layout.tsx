import { Suspense } from 'react';

import { LayoutClient } from '../layoutClient';
import type { LayoutComponent } from '@/app/serverComponent';

const TermsLayout: LayoutComponent = ({ children }) => (
  <>
    <main>{children}</main>
    <Suspense><LayoutClient /></Suspense>
  </>
);

export default TermsLayout;
