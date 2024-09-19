'use client';

import { type FC, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import type { ResponsiveType } from 'react-multi-carousel';

import GoogleLogo from './googleLogo.svg';
import styles from './index.module.scss';
import { InitialCircle } from './initialCircle';
import type { ReviewData } from './reviewData';
import { Priority, reviewData } from './reviewData';
import { ImageCircle } from '../imageCircle';
import { Star } from '../testimonial/star';
import type { CourseCode } from '@/domain/courseCode';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useScreenWidth } from '@/hooks/useScreenWidth';

const responsive: ResponsiveType = {
  all: {
    breakpoint: { max: 9999, min: 0 },
    items: 1,
  },
};

// this will prioritize based on course code, and then priority
const sortReviewData = (data: ReviewData[], course?: CourseCode): ReviewData[] => {

  const highestPossiblePriority = Priority.HIGH;
  const addPriorityScore = (baseScore: number, priority: Priority | undefined): number => {
    if (!priority) { priority = Priority.NORMAL; }
    return baseScore + priority;
  };

  // score both the courses, then return the difference
  data.sort((a, b) => {

    const scoreA = course && a.courseCodes?.includes(course)
      ? addPriorityScore(highestPossiblePriority + 1, a.priority)
      : addPriorityScore(0, a.priority);

    const scoreB = course && b.courseCodes?.includes(course)
      ? addPriorityScore(highestPossiblePriority + 1, b.priority)
      : addPriorityScore(0, b.priority);

    return scoreB - scoreA;
  });
  return data;
};

export const GoogleReviewSection: FC<{ courseCode?: CourseCode }> = ({ courseCode }) => {

  const screenWidth = useScreenWidth();
  const sortedReviewData = sortReviewData(reviewData, courseCode);
  const carouselRef = useRef(null);
  const intersection = useIntersectionObserver(carouselRef);

  return (
    <section className="bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center" ref={carouselRef}>
            <GoogleLogo width="50" height="50" className="mb-3" />
            <Carousel ssr responsive={responsive} infinite showDots={screenWidth < 992} arrows={screenWidth >= 992} autoPlay={intersection}>
              {sortedReviewData.map((data, key) => <GoogleReview {...data} key={key} />)}
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
