import type { Dispatch, FC, SetStateAction } from 'react';
import LeftArrowIcon from '../icons/left-arrow.svg';
import RightArrowIcon from '../icons/right-arrow.svg';
import styles from './scrollDots.module.scss';

type Props = {
  numberOfPages: number;
  currentIndex: number;
  handlePageChange: Dispatch<SetStateAction<number>>;
};

const getNextPageNumber = (currentPage: number, numberOfPages: number): number => (currentPage + 1 < numberOfPages ? currentPage + 1 : 0);

const getPrevPageNumber = (currentPage: number, numberOfPages: number): number => (currentPage - 1 >= 0 ? currentPage - 1 : numberOfPages - 1);

export const ScrollDots: FC<Props> = ({ numberOfPages, currentIndex, handlePageChange }) => {
  return(
    <div className="d-flex w-100 justify-content-center align-items-center">
      <LeftArrowIcon className={styles.arrowIcon} onClick={() => handlePageChange(getPrevPageNumber(currentIndex, numberOfPages))} />
      {Array.from({ length: numberOfPages }).map((_, key) => {
        return(
          <span className={`${key === currentIndex ? styles.activeDot : ''} ${styles.dot}`} key={key} onClick={() => handlePageChange(key)} />
        );
      })}
      <RightArrowIcon className={styles.arrowIcon} onClick={() => handlePageChange(getNextPageNumber(currentIndex, numberOfPages))} />
    </div>
  );
};
