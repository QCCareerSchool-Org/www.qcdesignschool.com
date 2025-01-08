'use client';

import type { FC, MouseEventHandler } from 'react';

export const LivechatLink: FC = () => {
  const handleChatLinkClick: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    window.BrevoConversations?.('openChat', true);
  };

  return <a onClick={handleChatLinkClick} href="#">Live Chat</a>;
};
