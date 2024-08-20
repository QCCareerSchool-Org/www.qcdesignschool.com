'use client';

import type { CSSProperties, FC, MouseEventHandler } from 'react';

interface Props {
  color?: CSSProperties['color'];
}

export const ChatLink: FC<Props> = ({ color }) => {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    window.LC_API?.open_chat_window?.();
  };

  return <a onClick={handleClick} href="#" style={{ color: color }}>Chat with Support</a>;
};
