import type { FC, PropsWithChildren } from 'react';

import { Footer } from './footer';
import { Header } from './header';
import { TaxCreditsModal } from '@/components/taxCreditsModal';
import { getSeverData } from '@/lib/getData';
import { BrevoConversations } from '@/scripts/brevoCoversations';

export const Layout: FC<PropsWithChildren> = async ({ children }) => {
  const { countryCode, provinceCode, date } = await getSeverData();

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
