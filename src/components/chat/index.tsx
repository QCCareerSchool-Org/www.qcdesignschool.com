'use client';

import type { FC, MouseEventHandler } from 'react';

interface ChatLinkProps {
  color?: string;
}

export const ChatLink: FC<ChatLinkProps> = ({ color }) => {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    window.LC_API?.open_chat_window?.();
  };

  return <a onClick={handleClick} href="#" style={{ color: color }}>Chat with Support</a>;
};
