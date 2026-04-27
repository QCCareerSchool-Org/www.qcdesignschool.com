import type { StaticImageData } from 'next/image';
import type { FC } from 'react';

import DefaultBackgroundImage from './default-background.jpg';
import styles from './index.module.scss';
import type { Props as StatProps } from './stat';
import { Stat } from './stat';
import { BackgroundImage } from '@/components/backgroundImage';

interface Props {
  backgroundImage?: StaticImageData | null;
  className?: string;
  stats: [StatProps, StatProps, StatProps];
}

export const StatsSection: FC<Props> = ({ backgroundImage, className, stats }) => {
  return (
    <section className={`${styles.section} ${className ?? ''}`}>
      {backgroundImage !== null && <BackgroundImage src={backgroundImage ?? DefaultBackgroundImage} />}
      <div className="container">
        <div className="row text-center">
          {stats.map((stat, i) => (
            <div key={i} className="col-12 col-lg-4 mb-s mb-lg-0">
              <Stat value={stat.value} suffix={stat.suffix} heading={stat.heading} description={stat.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
