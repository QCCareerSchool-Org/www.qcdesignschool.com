import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import NetworkBackgroundImageDesktop from './network-associations-bg-desktop.jpg';
import NetworkBackgroundImageMobile from './network-associations-bg-mobile.jpg';
import QIcon from './q.svg';

type Props = {
  showLink?: boolean;
};

export const DesignNetworksSection: FC<Props> = ({ showLink }) => (
  <section style={{ backgroundColor: '#4c99fd' }} className="pb-0 pb-lg-s">
    <Image src={NetworkBackgroundImageDesktop} placeholder="blur" alt="" fill sizes="100vw" style={{ objectFit: 'cover' }} className="d-none d-lg-block" />
    <div className="container text-white">
      <div className="row justify-content-end g-s">
        <div className="col-12 col-lg-6">
          <h2 className="h3 mb-3">Explore Professional Design Networks</h2>
          <p className={showLink ? 'mb-5' : 'mb-0'}>QC Design School connects you to the heart of the design world, with affiliations to top industry associations across North America. Elevate your professional profile, network with leaders, and access exclusive resources through these esteemed organizations.</p>
          {showLink && <Link href="/design-associations" style={{ color: 'inherit', textDecoration: 'none' }}><QIcon height="16" color="#0013DE" style={{ position: 'relative', top: -2, marginRight: '0.675rem' }} />Access Network Resources</Link>}
        </div>
      </div>
    </div>
    <Image src={NetworkBackgroundImageMobile} placeholder="blur" alt="" className="d-lg-none" style={{ width: '100%', height: 'auto' }} />
  </section>
);
