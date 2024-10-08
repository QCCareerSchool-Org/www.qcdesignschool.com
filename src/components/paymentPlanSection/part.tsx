import Link from 'next/link';
import type { FC } from 'react';

import commonStyles from './commonStyles.module.css';
import styles from './part.module.scss';
import type { Price } from '@/domain/price';

type Props = {
  price: Price;
  href: string;
};

export const Part: FC<Props> = ({ price, href }) => (
  <div className={`${styles.part} card`}>
    {/* this margin is so it matches the  */}
    <div className={`${styles.partCard} card-body`}>
      <h6 className={`${commonStyles.title} ${styles.dark}`}>{price.plans.part.installments}-Month Installment Plan</h6>
      <div className={commonStyles.description}>Start for as little as</div>
      <hr className={commonStyles.hr} />
      <div className={commonStyles.price}>
        <span className={commonStyles.priceSmall}>
          {price.currency.symbol}
        </span>
        <span className="text-black">{price.plans.part.deposit}</span>
        <span className={commonStyles.priceSmall}>
          /mo
        </span>
      </div>
      <p className="fw-bold mb-1">12 monthly payments of {price.currency.symbol}{price.plans.part.installmentSize}</p>
      <p className="fw-bold mb-1">(Total: {price.currency.symbol}{price.plans.part.total})</p>
      <hr className={commonStyles.hr} />
      <Link href={href} className="btn btn-secondary">Enroll Now</Link>
    </div>
  </div>
);
