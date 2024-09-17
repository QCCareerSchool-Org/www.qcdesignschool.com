import type { StaticImageData } from 'next/image';
import type { FC, PropsWithChildren, ReactNode } from 'react';

import { Animation } from './animation';
import styles from './index.module.scss';
import { BackgroundImage } from '@/components/backgroundImage';

type Props = {
  backgroundImageSrc: StaticImageData;
  certification: ReactNode;
};

export const CertificationSection: FC<PropsWithChildren<Props>> = ({ backgroundImageSrc, certification, children }) => (
  <section className={`bg-dark text-white ${styles.certificationSection}`}>
    <BackgroundImage src={backgroundImageSrc} />
    <div className="container">
      <div className="row justify-content-center g-s">
        <div className="col-6 col-sm-5 col-md-4 col-lg-4 col-xl-3 offset-xl-2">
          <Animation>{certification}</Animation>
        </div>
        <div className="col-12 col-md-10 col-lg-8 col-xl-7">
          {children}
        </div>
      </div>
    </div>
  </section>
);
