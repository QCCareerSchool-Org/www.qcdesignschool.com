import Image from 'next/image';
import type { FC } from 'react';
import { Carousel } from '../carousel';
import { Star } from '../testimonial/star';
import { default as googleImage } from './googleLogo.png';
import styles from './index.module.scss';
import type { ReviewData } from './reviewData';
import { reviewData } from './reviewData';

export const GoogleReviewSection: FC = () => (
  <section className="bg-light">
    <div className="container">
      <Carousel slides={reviewData.map((data, key) => <GoogleReview {...data} key={key} />)} sideArrows />
    </div>
  </section>
);

const GoogleReview: FC<ReviewData> = ({ name, reviewText, image }) => (
  <div className="row justify-content-center">
    <div className="col-12 col-md-10 col-lg-8 text-center">
      <Image src={googleImage} alt="" className={styles.googleLogo} />
      <div className={styles.stars}>{Array(5).fill(null).map((_, i) => <Star key={i} filled />)}</div>
      <p className="fw-bold">&quot;{reviewText}&quot;</p>
      <Image src={image} alt="" className="m-3" />
      <p className="fw-bold">{name}</p>
    </div>
  </div>
);
