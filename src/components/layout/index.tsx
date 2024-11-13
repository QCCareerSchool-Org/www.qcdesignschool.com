import type { FC, PropsWithChildren } from 'react';

import { Footer } from './footer';
import { Header } from './header';
import { CountDownTimer } from '../countDownTimer';
import { LiveChat } from '@/scripts/liveChat';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const date = new Date().getTime();
  return (
    <>
      <CountDownTimer date={date} />
      <Header />
      <main className="flex-shrink-0">{children}</main>
      <Footer />
      <LiveChat license={1056788} group={3} />
    </>
  );
};
