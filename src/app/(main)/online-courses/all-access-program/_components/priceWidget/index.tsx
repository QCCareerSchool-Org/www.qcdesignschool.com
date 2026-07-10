import type { FC } from 'react';

import { PriceWidgetClient } from './client';
import styles from './index.module.css';
import type { Price } from '@/domain/price';

interface Props {
  price: Price;
  allCoursesPrice: Price;
}

export const PriceWidget: FC<Props> = ({ price, allCoursesPrice }) => (

  <div className={styles.wrapper}>
    <PriceWidgetClient price={price} originalPrice={allCoursesPrice.cost} inverse />
  </div>
);
