import type { StaticImageData } from 'next/image';
import type { CSSProperties, FC, PropsWithChildren, ReactNode } from 'react';

import { Animation } from './animation';
import styles from './index.module.scss';
import { BackgroundImage } from '@/components/backgroundImage';
import { Overlay } from '@/components/overlay';

type Props = {
  backgroundImageSrc: StaticImageData;
  certification: ReactNode;
  overlayColor?: CSSProperties['backgroundColor'];
};

export const CertificationSection: FC<PropsWithChildren<Props>> = ({ backgroundImageSrc, certification, overlayColor, children }) => (
  <section className={`bg-dark text-white ${styles.certificationSection}`}>
    <BackgroundImage src={backgroundImageSrc} />
    {overlayColor && <Overlay backgroundColor={overlayColor} />}
    <div className="container">
      <div className="row g-5">
        <div className="col-6 col-sm-5 col-md-4 col-lg-4 col-xl-3">
          <Animation>{certification}</Animation>
        </div>
        <div className="col-12 col-lg-8 col-xl-9">
          {children}
        </div>
      </div>
    </div>
  </section>
);
