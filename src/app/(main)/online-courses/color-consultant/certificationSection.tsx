import type { FC } from 'react';

import CertificationBackgroundImage from './cert-bg.jpg';
import CertificationLogo from '@/components/certificationLogos/iccp.svg';
import { CertificationSectionTemplate } from '@/components/certificationSectionTemplate';

export const CertificationSection: FC = () => (
  <CertificationSectionTemplate backgroundImageSrc={CertificationBackgroundImage}>
    <CertificationLogo height="200" className="mb-3" alt="International Color Consulting Professional (ICCP) certification logo" />
    <p className="mb-3 small gold">International Color Consulting Professional&trade; (ICCP&trade;)</p>
    <h2 className="text-white mb-3">Your Color Consultant Certification</h2>
    <p>Once you graduate from your Color Consultant course, you'll receive a certification and be able to use the designation of International Color Consulting Professional (ICCP).</p>
    <p className="mb-0">This certification demonstrates that you have successfully completed Color Consultant training and that you possess all the skills and knowledge required to create functional and comfortable homes.</p>
  </CertificationSectionTemplate>
);
