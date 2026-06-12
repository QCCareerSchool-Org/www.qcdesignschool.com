'use client';

import type { FC, MouseEventHandler } from 'react';
import { useState } from 'react';

import { Buttons } from './buttons';
import styles from './client.module.scss';
import type { Price } from '@/domain/price';
import { formatPrice } from '@/lib/formatPrice';

interface Props {
  price: Price;
  originalPrice: number;
  inverse?: boolean;
}

export type Plan = 'full' | 'part';

export const PriceWidgetClient: FC<Props> = ({ price, originalPrice, inverse }) => {
  const [ plan, setPlan ] = useState<Plan>('full');

  const handleFullClick: MouseEventHandler = e => {
    e.preventDefault();
    setPlan('full');
  };

  const handlePartClick: MouseEventHandler = e => {
    e.preventDefault();
    setPlan('part');
  };

  return (
    <div className={`${styles.client} ${inverse ? styles.inverse : ''}`}>
      <Buttons plan={plan} onFullClick={handleFullClick} onPartClick={handlePartClick} inverse={inverse} />
      <p className={styles.totalValue}>Total Value: <span className={styles.originalPrice}>{price.currency.symbol}{formatPrice(originalPrice)}</span></p>
      <div className={styles.price}>{price.currency.symbol}{plan === 'full'
        ? formatPrice(price.cost)
        : <>{formatPrice(price.plans.part.installmentSize)}/mo</>
      }</div>
      <div className={styles.details}>{plan === 'full'
        ? <>One-time Payment</>
        : <>{price.plans.part.installments} Monthly Installments</>
      } &bull; Lifetime Access</div>
    </div>
  );
};
