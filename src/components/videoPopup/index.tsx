'use client';

import type { FC, MouseEvent, PropsWithChildren } from 'react';
import { useState } from 'react';

import type { VideoInput } from './videoLightbox';
import { VideoLightbox } from './videoLightbox';
import { gaEvent } from '@/lib/gtag';

interface Props {
  video: VideoInput;
};

export const VideoPopup: FC<PropsWithChildren<Props>> = ({ children, video }) => {
  const [ open, setOpen ] = useState(false);

  const handleOpen = (e: MouseEvent<HTMLElement>): void => {
    e.preventDefault();
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
