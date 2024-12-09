import type { FC } from 'react';
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
