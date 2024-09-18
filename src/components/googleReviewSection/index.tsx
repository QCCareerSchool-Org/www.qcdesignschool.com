'use client';

import type { FC } from 'react';
import Carousel from 'react-multi-carousel';
import type { ResponsiveType } from 'react-multi-carousel';

import GoogleLogo from './googleLogo.svg';
import styles from './index.module.scss';
import { InitialCircle } from './initialCircle';
import type { ReviewData } from './reviewData';
import { reviewData } from './reviewData';
import { ImageCircle } from '../imageCircle';
import { Star } from '../testimonial/star';
import { useScreenWidth } from '@/hooks/useScreenWidth';

const responsive: ResponsiveType = {
  xs: {
    breakpoint: { max: 9999, min: 0 },
    items: 1,
  },
};

export const GoogleReviewSection: FC = () => {
  const screenWidth = useScreenWidth();

  return (
    <section className="bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <GoogleLogo width="50" height="50" className="mb-3" />
            <Carousel ssr responsive={responsive} infinite showDots={screenWidth < 992} arrows={screenWidth >= 992} autoPlay>
              {reviewData.map((data, key) => <GoogleReview {...data} key={key} />)}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

const GoogleReview: FC<ReviewData> = ({ name, initial, imageSrc, backgroundColor, reviewText, size, rating }) => (
  <div className={styles.wrapper}>
    <div className="mb-3">{Array(5).fill(null).map((_, i) => <Star key={i} filled={rating > i} />)}</div>
    <p className="fw-bold mb-4" style={size ? { fontSize: `${size}rem` } : undefined}>&quot;{reviewText}&quot;</p>
    <div className="d-flex justify-content-center mb-2">
      {imageSrc
        ? <ImageCircle src={imageSrc} alt={name} />
        : <InitialCircle initial={initial} backgroundColor={backgroundColor} />
      }
    </div>
    <p className="fw-bold">{name}</p>
  </div>
);
