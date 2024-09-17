import Image from 'next/image';
import type { FC } from 'react';

import CertificationBackgroundImage from './cert-bg.jpg';
import CertificationLogo from '@/components/certificationLogos/iddp.svg';

export const CertificationSection: FC = () => (
  <section className="text-white text-shadow">
    <Image src={CertificationBackgroundImage} fill placeholder="blur" alt="" sizes="100vw" style={{ objectFit: 'cover' }} />
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-lg-8 col-xxl-6 text-center">
          <div>
            <CertificationLogo height="200" className="mb-3" alt="International Design and Decorating Professional (IDDP) certification logo" />
          </div>
          <p className="mb-3 small gold">International Design and Decorating Professional&trade; (IDDP&trade;)</p>
          <h2 className="text-white mb-3">Your Interior Decorating Certification</h2>
          <p>Once you graduate from your online interior decorating course, you'll receive a certification and be able to use the designation of International Design and Decorating Professional (IDDP).</p>
          <p className="mb-0">This certification demonstrates that you have successfully completed professional interior decorator training and that you possess all the skills and knowledge required to create beautiful and comfortable homes.</p>
        </div>
      </div>
    </div>
  </section>
);

export const CertificationSectionSmall: FC = () => (
  <section className="text-white text-shadow">
    <Image src={CertificationBackgroundImage} fill placeholder="blur" alt="" sizes="100vw" style={{ objectFit: 'cover' }} />
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-4">
          <CertificationLogo height="200" className="mb-3" alt="International Design and Decorating Professional (IDDP) certification logo" />
        </div>
        <div className="col-12 col-md-8">
          <h2 className="text-white mb-3">Become a Certified Design Professional with QC Design School!</h2>
          <p>Once you have successfully completed all of your assignments and your tuition has been paid in full, you'll be all set to graduate from QC Design School! Your certificate of completion will be sent straight to you so you can begin your exciting career as a home designer.</p>
        </div>
      </div>
    </div>
  </section>
);
