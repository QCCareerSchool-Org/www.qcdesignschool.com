'use client';

import type { FC, PropsWithChildren } from 'react';
import { useState } from 'react';

import type { VideoInput } from './marketingVideoLightbox';
import { VideoLightbox } from './marketingVideoLightbox';
import { gaEvent } from '@/lib/gtag';

type Props = PropsWithChildren & {
  video: VideoInput;
};

export const VideoPopup: FC<Props> = ({ children, video }) => {
  const [ open, setOpen ] = useState(false);

  const handleOpen = (): void => {
    setOpen(true);
    gaEvent('marketing_video_clicked', {
      videoUrl: video.source.src,
      videoName: video.name,
    });
  };

  const handleClose = (): void => { setOpen(false); };

  return (
    <>
      <div onClick={handleOpen} style={{ cursor: 'pointer' }}>
        {children}
      </div>
      <VideoLightbox open={open} onClose={handleClose} video={video} />
    </>
  );
};
