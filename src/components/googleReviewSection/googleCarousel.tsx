import type { FC } from 'react';
import { memo, useRef } from 'react';
import type { ResponsiveType } from 'react-multi-carousel';
import Carousel from 'react-multi-carousel';

import { GoogleReview } from './googleReview';
import { reviewData } from './reviewData';
import { compareReviews } from './sortReviewData';
import type { CourseCode } from '@/domain/courseCode';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

type Props = {
  mobile: boolean;
  courseCode?: CourseCode;
};

const responsive: ResponsiveType = {
  all: {
    breakpoint: { max: 9999, min: 0 },
    items: 1,
  },
};

export const GoogleCarousel: FC<Props> = memo(({ mobile, courseCode }) => {
  const sortedReviewData = reviewData.sort(compareReviews(courseCode));
  const carouselRef = useRef(null);
  const intersection = useIntersectionObserver(carouselRef);

  return (
    <div ref={carouselRef}>
      <Carousel ssr responsive={responsive} infinite showDots={mobile} arrows={!mobile} autoPlay={intersection}>
        {sortedReviewData.map((data, key) => <GoogleReview {...data} key={key} />)}
      </Carousel>
    </div>
  );
});

GoogleCarousel.displayName = 'GoogleCarousel';
