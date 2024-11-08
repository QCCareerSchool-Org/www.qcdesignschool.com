'use client';

import type { FC, MouseEventHandler } from 'react';

export const LivechatLink: FC = () => {
  const handleChatLinkClick: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    window.LC_API?.open_chat_window?.();
  };

  return <a onClick={handleChatLinkClick} href="#">Live Chat</a>;
};
