import Image from 'next/image';
import type { FC } from 'react';

import { Carousel } from '../carousel';
import { ImageCircle } from '../imageCircle';
import { Star } from '../testimonial/star';
import GoogleImage from './googleLogo.png';
import styles from './index.module.scss';
import { InitialCircle } from './initialCircle';
import type { ReviewData } from './reviewData';
import { reviewData } from './reviewData';

export const GoogleReviewSection: FC = () => (
  <section className="bg-light">
    <div className="container">
      <Carousel slides={reviewData.map((data, key) => <GoogleReview {...data} key={key} />)} sideArrows />
    </div>
  </section>
);

const GoogleReview: FC<ReviewData> = ({ name, initial, imageSrc, backgroundColor, reviewText, rating }) => (
  <div className="row justify-content-center">
    <div className="col-12 col-md-10 col-lg-8 text-center">
      <Image src={GoogleImage} alt="" className={styles.googleLogo} />
      <div className={styles.stars}>{Array(5).fill(null).map((_, i) => <Star key={i} filled={rating > i} />)}</div>
      <p className="fw-bold mb-4">&quot;{reviewText}&quot;</p>
      <div className="d-flex justify-content-center mb-2">
        {imageSrc
          ? <ImageCircle src={imageSrc} alt={name} />
          : <InitialCircle initial={initial} backgroundColor={backgroundColor} />
        }
      </div>
      <p className="fw-bold">{name}</p>
    </div>
  </div>
);
