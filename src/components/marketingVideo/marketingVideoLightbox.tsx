'use client';

import type { FC } from 'react';
import { Lightbox } from 'yet-another-react-lightbox';
import Video from 'yet-another-react-lightbox/plugins/video';
import 'yet-another-react-lightbox/styles.css';

export type VideoInput = {
  width: number;
  height: number;
  name: string;
  source: {
    src: string;
    type: 'video/mp4'; // | 'video/webm'; // add more types here as needed
  };
};

type Props = {
  open: boolean;
  onClose: () => void;
  video: VideoInput;
};

export const VideoLightbox: FC<Props> = ({ open, onClose, video }) => (
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
      ...{ video, sources: [ video.source ] },
    } ]}
    controller={{ closeOnBackdropClick: true }}
  />
);
