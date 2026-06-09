import type { FC } from 'react';

import type { Price } from '@/domain/price';

import styles from './index.module.css';
import { PriceWidgetClient } from './client';

interface Props {
  price: Price;
}

export const PriceWidget: FC<Props> = ({ price }) => (
  <div className={styles.wrapper}>
    <PriceWidgetClient price={price} originalPrice={price.cost} inverse />
  </div>
);
