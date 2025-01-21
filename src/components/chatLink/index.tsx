'use client';

import type { FC, MouseEventHandler } from 'react';

interface Props {
  className?: string;
}

export const ChatLink: FC<Props> = ({ className }) => {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    window.BrevoConversations?.('openChat');
  };

  return <a onClick={handleClick} href="#" className={className}>Chat with Support</a>;
};
