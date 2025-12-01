import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { CSSProperties, FC, PropsWithChildren } from 'react';

import { Overlay } from './overlay';

interface Props {
  backgroundImageSrc: StaticImageData;
  overlayColor?: CSSProperties['backgroundColor'];
}

export const CertificationSectionTemplate: FC<PropsWithChildren<Props>> = ({ backgroundImageSrc, overlayColor, children }) => (
  <section className="text-white text-shadow">
    <Image src={backgroundImageSrc} fill placeholder="blur" alt="" sizes="100vw" style={{ objectFit: 'cover' }} />
    {overlayColor && <Overlay backgroundColor={overlayColor} />}
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-lg-8 text-center">
          {children}
        </div>
      </div>
    </div>
  </section>
);
