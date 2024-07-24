import type { FC } from 'react';

import styles from './cardPrice.module.scss';
import type { Price } from '@/domain/price';
import { formatPrice } from '@/lib/formatPrice';

type Props = {
  price: Price;
};

export const CardPrice: FC<Props> = ({ price }) => (
  <div className={styles.price}>
    {price.plans.full.discount > 0 && <del className={styles.originalPrice}>{price.currency.symbol}{formatPrice(price.cost)}</del>}
    <span className={styles.discountedPrice}>{price.currency.symbol}{formatPrice(price.plans.full.total)}</span>
  </div>
);
