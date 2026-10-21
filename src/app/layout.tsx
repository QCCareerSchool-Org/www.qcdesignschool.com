import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';

import { FaviconMeta } from './favicon';
import styles from './layout.module.scss';
import { LayoutClient } from './layoutClient';
import { links } from '../../links';
import { isUserValues } from '@/domain/userValues';
import { inter, neueHaasDisplay, neueHaasText } from '@/fonts';
import { getServerData } from '@/lib/getServerData';
import { decodeJwt } from '@/lib/jwt';
import { siteUrl } from '@/lib/siteUrl';
import { Provider } from '@/providers';
import { ActiveCampaign } from '@/scripts/activeCampaign';
import { Bing } from '@/scripts/bing';
import { Brevo } from '@/scripts/brevo';
import { ChatGPT } from '@/scripts/chatgpt';
import { Facebook } from '@/scripts/facebook';
import { GoogleAnalytics } from '@/scripts/googleAnalytics';
import { OptInMonster } from '@/scripts/optInMonster';
import { Pinterest } from '@/scripts/printerest';
import { Tiktok } from '@/scripts/tiktok';
import type { LayoutComponent } from '@/serverComponent';

import './bootstrap.scss';
import './global.scss';
import './chos.scss';

export const metadata: Metadata = {
  title: { default: 'QC Design School', template: '%s - QC Design School' },
  metadataBase: new URL(siteUrl),
};

const RootLayout: LayoutComponent = async ({ children }) => {
  const { clientIp } = await getServerData();
  const jwt = (await cookies()).get('user')?.value;
  const result = jwt ? await decodeJwt(jwt) : undefined;
  const raw = result?.success ? result.value : undefined;
  const userValues = raw && isUserValues(raw) ? raw : undefined;

  return (
    <html lang="en" className={`${neueHaasText.variable} ${neueHaasDisplay.variable} ${inter.variable} h-100`} data-scroll-behavior="smooth">
      <head>
        {process.env.GOOGLE_ANALYTICS_ID && <GoogleAnalytics id={process.env.GOOGLE_ANALYTICS_ID} adsId={process.env.GOOGLE_ADS_ID} userValues={userValues} />}
        {process.env.BREVO_CLIENT_KEY && <Brevo clientKey={process.env.BREVO_CLIENT_KEY} userValues={userValues} />}
        {process.env.NEXT_PUBLIC_FACEBOOK_ID && <Facebook id={process.env.NEXT_PUBLIC_FACEBOOK_ID} userValues={userValues} />}
        {process.env.TIKTOK_ID && <Tiktok id={process.env.TIKTOK_ID} />}
        {process.env.BING_ID && <Bing id={process.env.BING_ID} userValues={userValues} />}
        {process.env.PINTEREST_ID && <Pinterest id={process.env.PINTEREST_ID} userValues={userValues} />}
        {process.env.ACTIVE_CAMPAIGN_ID && <ActiveCampaign id={process.env.ACTIVE_CAMPAIGN_ID} userValues={userValues} />}
        {process.env.CHATGPT_PIXEL_ID && <ChatGPT pixelId={process.env.CHATGPT_PIXEL_ID} />}
        {links.map(l => <link key={l.href} rel={l.rel} href={l.href} type={l.type} title={l.title} />)}
        <FaviconMeta />
      </head>
      <body className="d-flex flex-column">
        <Provider userValues={userValues} clientIp={clientIp}>
          {children}
        </Provider>
        <OptInMonster />
        <Suspense><LayoutClient /></Suspense>
        <ToastContainer pauseOnFocusLoss pauseOnHover position="top-center" className={styles.toastContainer} />
      </body>
    </html>
  );
};

export default RootLayout;
