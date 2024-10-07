import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC, PropsWithChildren } from 'react';

import { Overlay } from './overlay';

type Props = {
  backgroundImageSrc: StaticImageData;
};

export const CertificationSectionTemplate: FC<PropsWithChildren<Props>> = ({ backgroundImageSrc, children }) => (
  <section className="text-white text-shadow">
    <Image src={backgroundImageSrc} fill placeholder="blur" alt="" sizes="100vw" style={{ objectFit: 'cover' }} />
    <Overlay backgroundColor="rgba(0,0,0,0.2)" />
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-lg-8 text-center">
          {children}
        </div>
      </div>
    </div>
  </section>
);
