import type { FC, PropsWithChildren } from 'react';

import { Footer } from './footer';
import { Header } from './header';
import { TaxCreditsModal } from '@/components/taxCreditsModal';
import type { UserValues } from '@/domain/userValues';
import { getServerData } from '@/lib/getServerData';
import { LiveChat } from '@/scripts/liveChat';

interface Props {
  userValues?: UserValues;
}

export const SiteLayout: FC<PropsWithChildren<Props>> = async ({ userValues, children }) => {
  const { countryCode, provinceCode } = await getServerData();
  const date = Date.now();

  return (
    <>
      <Header date={date} countryCode={countryCode} provinceCode={provinceCode} />
      <main className="flex-shrink-0">{children}</main>
      <Footer />
      {process.env.LIVECHAT_LICENSE && <LiveChat group={process.env.LIVECHAT_GROUP_ID} license={process.env.LIVECHAT_LICENSE} userValues={userValues} />}
      <TaxCreditsModal />
    </>
  );
};
