'use client';

import type { FC, ReactNode } from 'react';
import { useState } from 'react';
import { Lightbox } from 'yet-another-react-lightbox';
import Video from 'yet-another-react-lightbox/plugins/video';
import 'yet-another-react-lightbox/styles.css';

type Props = {
  children: ReactNode;
};

export const MarketingVideo: FC<Props> = ({ children }) => {
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

type LightboxProps = {
  open: boolean;
  onClose: () => void;
};
const MarketingVideoLightbox: FC<LightboxProps> = ({ open, onClose }) => (
  <Lightbox
    render={{
      buttonPrev: () => null,
      buttonNext: () => null,
    }}
    open={open}
    index={0}
    close={onClose}
    plugins={[ Video ]}
    slides={[ {
      type: 'video',
      autoPlay: true,
      width: 1280,
      height: 720,
      sources: [
        {
          src: '/design-marketing-video.mp4',
          type: 'video/mp4',
        },
      ],
    } ]}
    controller={{ closeOnBackdropClick: true }}
  />
);
