'use client';

import type { FC, ReactNode } from 'react';
import { memo, useCallback, useEffect, useState } from 'react';

import { CarouselNav } from './CarouselNav';
import styles from './index.module.scss';
import { SlideContainer } from './SlideContainer';
import ArrowImage from '@/components/icons/right-arrow-thin.svg';

type Props = {
  slides: ReactNode[];
  sideArrows?: boolean;
};

export const Carousel: FC<Props> = memo(({ slides, sideArrows }) => {
  const numPages = slides.length;
  const [ currentPage, setCurrentPage ] = useState(0);
  const [ arrowOverride, setArrowOverride ] = useState<boolean>();
  const [ heights, setHeights ] = useState<number[]>(new Array(numPages).fill(0));

  const handleNext = useCallback((): void => {
    setCurrentPage(c => (c < numPages - 1 ? c + 1 : 0));
  }, [ numPages, setCurrentPage ]);

  const handlePrev = useCallback((): void => {
    setCurrentPage(c => (c > 0 ? c - 1 : numPages - 1));
  }, [ numPages, setCurrentPage ]);

  const handleClick = useCallback((index: number): void => {
    setCurrentPage(index);
  }, [ setCurrentPage ]);

  const handleHeightChange = useCallback((index: number, height: number): void => {
    setHeights(h => {
      const newHieghts = [ ...h ];
      newHieghts[index] = height;
      return newHieghts;
    });
  }, []);

  useEffect(() => {
    const handleResize = (): void => {
      setArrowOverride(window.innerWidth < 768);
    };

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);
    handleResize();
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const maxHeight = heights.reduce((prev, cur) => (cur > prev ? cur : prev), 0);
  return (
    <>
      <div className={styles.slideWrapper} style={{ height: maxHeight }}>
        {slides.map((Slide, i) => (
          <SlideContainer key={i} show={currentPage === i} index={i} onHeightChange={handleHeightChange}>
            {(sideArrows && !arrowOverride) &&
              <span>
                <ArrowImage onClick={handlePrev} alt="Prev" className={styles.arrowImage} style={{ transform: 'scaleX(-1)' }} />
              </span>
            }
            {Slide}
            {(sideArrows && !arrowOverride) &&
              <span>
                <ArrowImage onClick={handleNext} alt="Next" className={styles.arrowImage} />
              </span>
            }

          </SlideContainer>
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <CarouselNav
          numPages={numPages}
          currentPage={currentPage}
          onNext={handleNext}
          onPrev={handlePrev}
          onClick={handleClick}
          disableArrows={(sideArrows && !arrowOverride)}
        />
      </div>
    </>
  );
});

Carousel.displayName = 'Carousel';
