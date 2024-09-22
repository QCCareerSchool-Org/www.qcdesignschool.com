import Image from 'next/image';
import type { FC } from 'react';

import CertificationBackgroundImage from './cert-bg.jpg';
import CertificationLogo from '@/components/certificationLogos/iddp.svg';

export const CertificationSection: FC = () => (
  <section className="text-white text-shadow">
    <Image src={CertificationBackgroundImage} fill placeholder="blur" alt="" sizes="100vw" style={{ objectFit: 'cover' }} />
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-4 text-center">
          <CertificationLogo height="200" className="mb-3" alt="International Design and Decorating Professional (IDDP) certification logo" />
        </div>
        <div className="col-12 col-md-7">
          <h2 className="text-white mb-3">Become a Certified Design Professional with QC Design School!</h2>
          <p>Once you have successfully completed all of your assignments and your tuition has been paid in full, you'll be all set to graduate from QC Design School! Your certificate of completion will be sent straight to you so you can begin your exciting career as a home designer.</p>        </div>
      </div>
    </div>
  </section>

);
