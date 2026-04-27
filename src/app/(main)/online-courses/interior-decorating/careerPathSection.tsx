import type { FC } from 'react';

import styles from './careerPathSection.module.scss';
import { CareerPathComparisonTable } from '@/components/comparisonTable/careerPaths';
import type { Price } from '@/domain/price';

interface Props {
  price: Price;
}

export const CareerPathSection: FC<Props> = ({ price }) => (
  <section className={styles.section}>
    <div className="container">
      <div className="row justify-content-center text-center mb-5">
        <div className="col-12 col-lg-10 col-xl-8">
          <h2>Choose Your Career Path</h2>
          <p className="lead mb-0">Selecting the right educational partner can shape your design career. Whether you're switching fields, upskilling, or starting fresh, see how the Professional IDDP&trade; Certification Program compares to traditional degrees and standard online certifications.</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12">
          <CareerPathComparisonTable price={price} />
        </div>
      </div>
    </div>
  </section>
);
