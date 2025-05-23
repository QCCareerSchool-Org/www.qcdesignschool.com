import type { FC } from 'react';

export const FaviconMeta: FC = () => (
  <>
    <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <meta name="apple-mobile-web-app-title" content="QC Design" />
    <link rel="manifest" href="/site.webmanifest" />
  </>
);
