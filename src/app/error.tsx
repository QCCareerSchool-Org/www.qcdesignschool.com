'use client';

import type { Metadata } from 'next';
import NextJSError from 'next/error';
import type { FC } from 'react';

export const metadata: Metadata = {
  title: 'Server Error',
};

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

const ErrorPage: FC<Props> = () => <NextJSError statusCode={500} />;

export default ErrorPage;
