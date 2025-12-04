import Image from 'next/image';
import type { FC, MouseEventHandler } from 'react';

import styles from './videoCard.module.scss';
import type { TestimonialVideo } from './videos';
import PlayIcon from '@/components/icons/play-button.svg';

type Props = TestimonialVideo & {
  onOpen: MouseEventHandler;
};

export const VideoCard: FC<Props> = ({ thumbnailSrc, name, professionalTitle, quote, onOpen: handleClick }) => (
  <div className={`col-12 col-md-6 col-lg-4`}>
    <div className={styles.videoCard}>
      <div className={styles.thumbnailWrapper}>
        <Image src={thumbnailSrc} alt="" onClick={e => handleClick(e)} className={`img-fluid`} />
        <PlayIcon title="play" className={styles.playIcon} onClick={handleClick} />
      </div>
      <div className={styles.videoCardDescription}>
        <h6>&quot;{quote}&quot;</h6>
        <p className={`fw-bold ${styles.name}`}>{name}</p>
        <p className="m-0">{professionalTitle}</p>
      </div>
    </div>
  </div>
);
