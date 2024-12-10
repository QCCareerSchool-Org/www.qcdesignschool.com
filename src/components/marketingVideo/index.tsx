'use client';

import type { FC, PropsWithChildren } from 'react';
import { useState } from 'react';

import { MarketingVideoLightbox } from './marketingVideoLightbox';

export const MarketingVideo: FC<PropsWithChildren> = ({ children }) => {
  const [ open, setOpen ] = useState(false);

  const handleOpen = (): void => setOpen(true);

  const handleClose = (): void => setOpen(false);

  return (
    <>
      <div onClick={handleOpen} style={{ cursor: 'pointer' }}>
        {children}
      </div>
      <MarketingVideoLightbox open={open} onClose={handleClose} />
    </>
  );
};
