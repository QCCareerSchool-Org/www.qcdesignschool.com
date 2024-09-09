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
