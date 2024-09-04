import Image from 'next/image';
import type { FC } from 'react';
import CertificationBackgroundImage from './cert-bg.jpg';
import CertificationLogo from '@/components/certificationLogos/aiop.svg';

export const CertificationSection: FC = () => (
  <section className="text-white text-shadow">
    <Image src={CertificationBackgroundImage} fill placeholder="blur" alt="" sizes="100vw" style={{ objectFit: 'cover' }} />
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-lg-8 col-xxl-6 text-center">
          <div>
            <CertificationLogo height="200" className="mb-3" alt="Advanced International Organizing Professional (AIOP) certification logo" />
          </div>
          <p className="mb-3 small gold">Advanced International Organizing Professional&trade; (AIOP&trade;)</p>
          <h2 className="text-white mb-3">Your Professional Organizing Certification</h2>
          <p>Once you graduate from your professional organizing course, you'll receive a certification and be able to use the designation of Advanced International Organizing Professional (AIOP).</p>
          <p className="mb-0">This certification demonstrates that you have successfully completed professional organizer training and that you possess all the skills and knowledge required to create functional and comfortable homes.</p>
        </div>
      </div>
    </div>
  </section>
);
