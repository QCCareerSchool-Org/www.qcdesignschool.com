import { Suspense } from 'react';

import { Footer } from './footer';
import { LayoutClient } from '../layoutClient';
import type { LayoutComponent } from '@/app/serverComponent';

import '@/app/bootstrap.scss';
import './landing.scss';

/**
 * The header, if any, should be included on the page
 */
const LandingLayout: LayoutComponent = ({ children }) => (
  <>
    <main className="flex-shrink-0">{children}</main>
    <Footer />
    <Suspense>
      <LayoutClient />
    </Suspense>
  </>
);

export default LandingLayout;
