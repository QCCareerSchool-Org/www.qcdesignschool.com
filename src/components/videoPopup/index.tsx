'use client';

import type { FC, MouseEvent, PropsWithChildren, ReactElement } from 'react';
import { cloneElement, isValidElement } from 'react';
import { useState } from 'react';

import type { VideoInput } from './videoLightbox';
import { VideoLightbox } from './videoLightbox';
import { gaEvent } from '@/lib/gtag';

interface Props {
  video: VideoInput;
};

interface TriggerProps {
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  style?: React.CSSProperties;
  type?: string;
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

  // attach the onClick behaviour directly to the child and compose its onClick method
  if (isValidElement(children)) {
    const child = children as ReactElement<TriggerProps>;

    const triggerProps: Partial<TriggerProps> = {
      ...(child.type === 'button' && !child.props.type ? { type: 'button' } : {}),
      style: { cursor: 'pointer', ...child.props.style },
      onClick: e => {
        child.props.onClick?.(e);
        if (!e.defaultPrevented) {
          handleOpen(e);
        }
      },
    };

    return (
      <>
        {cloneElement(children, triggerProps)}
        <VideoLightbox open={open} onClose={handleClose} video={video} />
      </>
    );
  }

  // wrap the child in a clickable container
  return (
    <>
      <div onClick={handleOpen} style={{ cursor: 'pointer' }}>
        {children}
      </div>
      <VideoLightbox open={open} onClose={handleClose} video={video} />
    </>
  );
};
