'use client';

import Link from 'next/link';
import type { FC } from 'react';
import { useState } from 'react';

import styles from './page.module.scss';
import OpenBookIcon from '@/components/icons/open-book.svg';
import PlayIcon from '@/components/icons/play-button.svg';
import { MarketingVideoLightbox } from '@/components/marketingVideoLightbox';

export const HomepageButtons: FC = () => {

  const [ open, handleOpen ] = useState(false);

  const handleOpenClick = (): void => handleOpen(true);
  const handleClose = (): void => handleOpen(false);

  return (
    <>
      <div className="d-flex gap-3">
        <Link href="/online-courses" className="btn btn-navy btn-lg"><OpenBookIcon height="16" style={{ position: 'relative', top: -1 }} className={`${styles.bookIcon} me-2`} />Browse Courses</Link>
        <button className="btn btn-outline-light btn-lg" onClick={handleOpenClick}><PlayIcon height="20" style={{ position: 'relative', top: -1 }} className={`${styles.playIcon} me-2`} />Watch Video</button>
      </div>
      <MarketingVideoLightbox open={open} onClose={handleClose} />
    </>

  );
};
