import type { FC } from 'react';

import type { Price } from '@/domain/price';

import styles from './index.module.css';
import { PriceWidgetClient } from './client';

interface Props {
  price: Price;
  allCoursesPrice: Price;
}

export const PriceWidget: FC<Props> = ({ price, allCoursesPrice }) => (

  <div className={styles.wrapper}>
    <PriceWidgetClient price={price} originalPrice={allCoursesPrice.cost} inverse />
  </div>
);
