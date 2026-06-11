'use client';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';
import { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

import styles from './index.module.css';

interface CarouselImage {
  src: StaticImageData;
  alt: string;
}

interface Props {
  images: CarouselImage[];
}

export const SuccessStoriesCarousel: FC<Props> = ({ images }) => {
  const [ index, setIndex ] = useState(0);
  const image = images[index];

  const handlePreviousClick = (): void => {
    setIndex(i => (i === 0 ? images.length - 1 : i - 1));
  };

  const handleNextClick = (): void => {
    setIndex(i => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <div className={styles.carousel}>
      <button type="button" className={styles.carouselButton} onClick={handlePreviousClick} aria-label="Previous certification photo">
        <BiChevronLeft aria-hidden />
      </button>
      <div className={styles.carouselImageFrame}>
        <Image src={image.src} alt={image.alt} placeholder="blur" className={styles.carouselImage} sizes="(min-width: 1200px) 840px, (min-width: 992px) 75vw, calc(100vw - 8rem)" />
      </div>
      <button type="button" className={styles.carouselButton} onClick={handleNextClick} aria-label="Next certification photo">
        <BiChevronRight aria-hidden />
      </button>
    </div>
  );
};
