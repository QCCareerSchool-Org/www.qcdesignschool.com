'use client';

import { GoogleAnalytics as NextGoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import type { FC } from 'react';

import type { UserValues } from '@/domain/userValues';
import type { GAUserData } from '@/lib/gtag';

interface Props {
  id: string;
  adsId?: string;
  userValues?: UserValues;
}

export const GoogleAnalytics: FC<Props> = ({ id, adsId, userValues }) => (
  <>
    <NextGoogleAnalytics gaId={id} />
    {adsId && <Script id="google-analytics-google-ads" dangerouslySetInnerHTML={{ __html: getAdsScript(adsId) }} />}
    {userValues && <Script id="google-analytics-set" dangerouslySetInnerHTML={{ __html: getSetScript(userValues) }} />}
  </>
);

const getAdsScript = (adsId: string): string => {
  return `gtag('config', \`${adsId.replace(/`/ug, '\\`')}\`, { allow_enhanced_conversions: true });\n`;
};

const getSetScript = (userValues: UserValues): string => {
  if (!userValues.emailAddress) {
    return '';
  }
  const params: GAUserData = {
    email: userValues.emailAddress,
  };

  if (userValues.firstName || userValues.lastName) {
    params.address = {};
    if (userValues.firstName) {
      // eslint-disable-next-line camelcase
      params.address.first_name = userValues.firstName;
    }
    if (userValues.firstName) {
      // eslint-disable-next-line camelcase
      params.address.last_name = userValues.lastName;
    }
  }

  return `gtag('set', 'user_data', ${JSON.stringify(params)})`;
};
