import type { Metadata } from 'next';
import Link from 'next/link';

import { ErrorTemplate } from './error-template';
import type { PageComponent } from './serverComponent';

export const metadata: Metadata = {
  title: 'Page Not Found',
};

const NotFoundPage: PageComponent = () => {
  return (
    <ErrorTemplate>
      <h1>Page Not Found</h1>
      <p className="lead mb-0">We're sorry&mdash;the page you're looking for doesn't exist. Please try our <Link href="/" className="link-info">home page</Link>, or choose one of the options below.</p>
    </ErrorTemplate>
  );
};

export default NotFoundPage;
