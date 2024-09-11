import type { Metadata } from 'next';

import { Suspense } from 'react';
import { LayoutClient } from '../layoutClient';
import { Footer } from './footer';
import { Header } from './header';
import type { LayoutComponent } from '@/app/serverComponent';

import '@/app/bootstrap.scss';

export const metadata: Metadata = {
  title: 'QC Design School',
};

const MainLayout: LayoutComponent = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex-shrink-0">{children}</main>
      <Footer />
      <Suspense>
        <LayoutClient />
      </Suspense>
    </>
  );
};

export default MainLayout;
