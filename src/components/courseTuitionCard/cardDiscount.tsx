import type { FC } from 'react';

import styles from './cardDiscount.module.scss';
import type { Price } from '@/domain/price';
import { formatPrice } from '@/lib/formatPrice';

type Props = {
  price: Price;
};

export const CardDiscount: FC<Props> = ({ price }) => {
  if (price.plans.full.discount > 0) {
    return <div className={styles.discount}><span className={styles.savings}>Save {price.currency.symbol}{formatPrice(price.plans.full.discount)}</span> when you pay in full</div>;
  }
  return <div className={styles.discount}>Get started for only <span className={styles.savings}>{price.currency.symbol}{formatPrice(price.plans.part.deposit)}</span></div>;
};
