import type { FC, PropsWithChildren } from 'react';

import { Footer } from './footer';
import { Header } from './header';
import { TaxCreditsModal } from '@/components/taxCreditsModal';
import { getServerData } from '@/lib/getServerData';
import { BrevoConversations } from '@/scripts/brevoCoversations';

export const SiteLayout: FC<PropsWithChildren> = async ({ children }) => {
  const { countryCode, provinceCode } = await getServerData();
  const date = Date.now();

  return (
    <>
      <Header date={date} countryCode={countryCode} provinceCode={provinceCode} />
      <main className="flex-shrink-0">{children}</main>
      <Footer />
      {process.env.BREVO_CONVERSATIONS_ID && <BrevoConversations conversationsId={process.env.BREVO_CONVERSATIONS_ID} />}
      <TaxCreditsModal />
    </>
  );
};
