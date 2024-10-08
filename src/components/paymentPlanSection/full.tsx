import Link from 'next/link';
import type { FC } from 'react';

import commonStyles from './commonStyles.module.css';
import styles from './full.module.scss';
import TagIcon from '@/components/icons/tag.svg';
import type { Price } from '@/domain/price';
import { tightNumber } from '@/lib/tightNumber';

type Props = {
  price: Price;
  href: string;
};

export const Full: FC<Props> = ({ price, href }) => (
  <div className={`${styles.full} card`}>
    <ul className={`list-group list-group-flush`}>
      <li className={`${styles.saleHeader} list-group-item d-flex justify-content-center align-items-center`}>Save {price.currency.symbol}{price.plans.full.discount} - Limited Time Offer &nbsp;<TagIcon height={20} color="#B20000" />
      </li>
    </ul>
    <div className="card-body">
      <h6 className={`${commonStyles.title} text-white`}>Pay in Full</h6>
      <div className={commonStyles.description}>One-time payment of</div>
      <hr className={commonStyles.hr} />
      <div className={commonStyles.price}>
        <span className={styles.redStrikethrough}>
          {price.currency.symbol}
          {price.plans.full.total}
        </span>
        <span>
          <span className={commonStyles.priceSmall}>
            {price.currency.symbol}
            {tightNumber(price.plans.full.total) && <span style={{ marginRight: '0.25rem' }} />}
          </span>
          <span>
            {price.plans.full.total}
          </span>
        </span>
      </div>
      <p className="mb-1">
        <span className="fw-bold">Save {price.currency.symbol}{price.plans.full.discount}</span> when you pay in full</p>
      <p className="fw-bold mb-1">(Total: {price.currency.symbol}{price.plans.full.total})</p>
      <hr className={commonStyles.hr} />
      <Link href={href} className="btn btn-light">Enroll Now</Link>
    </div>
  </div>
);
