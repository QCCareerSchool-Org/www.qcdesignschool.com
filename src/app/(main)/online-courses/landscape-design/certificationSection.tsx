import Image from 'next/image';
import type { FC } from 'react';

import CertificationBackgroundImage from './cert-bg.jpg';
import CertificationLogo from '@/components/certificationLogos/ildp.svg';
import { CertificationSectionTemplate } from '@/components/certificationSectionTemplate';

export const CertificationSection: FC = () => (
  <CertificationSectionTemplate backgroundImageSrc={CertificationBackgroundImage}>
    <CertificationLogo height="200" className="mb-3" alt="International Landscape Design Professional (ILDP) certification logo" />
    <p className="mb-3 small gold">International Landscape Design Professional&trade; (ILDP&trade;)</p>
    <h2 className="text-white mb-3">Your Landscape Design Certification</h2>
    <p>Once you graduate from your Landscape Design course, you'll receive a certification and be able to use the designation of International Landscape Design Professional (ILDP).</p>
    <p className="mb-0">This certification demonstrates that you have successfully completed Landscape Design training and that you possess all the skills and knowledge required to create functional and comfortable homes.</p>
  </CertificationSectionTemplate>
);

export const SplitCertificationSection: FC = () => (
  <section className="text-white text-shadow">
    <Image src={CertificationBackgroundImage} fill placeholder="blur" alt="" sizes="100vw" style={{ objectFit: 'cover' }} />
    <div className="container">
      <div className="row justify-content-center align-items-center g-5">
        <div className="col-12 col-lg-5 text-center">
          <CertificationLogo height="200" alt="International Staging and Redesign Professional (ISRP) certification logo" />
        </div>
        <div className="col-12 col-lg-7 text-start">
          <h3 className="text-white mb-3">Your Landscape Design Certification</h3>
          <p>Once you've completed your online design course, you'll graduate with a certification of completion and a professional designation that is yours to use for life. <br />Your certificate demonstrates that you have successfully completed professional training in the design & decorating industry and you possess all the skills and knowledge required to create beautiful and comfortable spaces for your clients.</p>
          <p>This certification demonstrates that you have successfully completed landscape design training and that you possess all the skills and knowledge required to create functional and comfortable homes.</p>
          <h5 className="mt-4">What Your Certification Unlocks</h5>
          <ul>
            <li>Launch your own home design and decorating business with comprehensive business training included in your course</li>
            <li>Secure a position at an established design and decorating firm</li>
            <li>Offer expert consulting services to both residential and commercial clients</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
