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
          src: 'https://51d9ccad7be11d8ada71-aeafba698c87c1173d616904e85b2e3e.ssl.cf1.rackcdn.com/design-marketing-video.mp4',
          type: 'video/mp4',
        },
      ],
    } ]}
    controller={{ closeOnBackdropClick: true }}
  />
);
