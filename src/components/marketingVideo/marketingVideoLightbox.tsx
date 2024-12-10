'use client';

import type { FC } from 'react';
import type { Slide } from 'yet-another-react-lightbox';
import { Lightbox } from 'yet-another-react-lightbox';
import Video from 'yet-another-react-lightbox/plugins/video';
import 'yet-another-react-lightbox/styles.css';

type Props = {
  open: boolean;
  onClose: () => void;
};

export const MarketingVideoLightbox: FC<Props> = ({ open, onClose }) => (
  <Lightbox
    render={{
      buttonPrev: () => null,
      buttonNext: () => null,
    }}
    open={open}
    index={0}
    close={onClose}
    plugins={[ Video ]}
    slides={slides}
    controller={{ closeOnBackdropClick: true }}
  />
);

const slides: Slide[] = [
  {
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
  },
];
