import type { FC } from 'react';

import CertificationBackgroundImage from './cert-bg.jpg';
import CertificationLogo from '@/components/certificationLogos/afdp.svg';
import { CertificationSectionTemplate } from '@/components/certificationSectionTemplate';

export const CertificationSection: FC = () => (
  <CertificationSectionTemplate backgroundImageSrc={CertificationBackgroundImage}>
    <CertificationLogo height="200" className="mb-3" alt="Advanced Feng Shui Design Professional (AFDP) certification logo" />
    <p className="mb-3 small gold">Advanced Feng Shui Design Professional&trade; (AFDP&trade;)</p>
    <h2 className="text-white mb-3">Your Feng Shui Design Certification</h2>
    <p>Once you graduate from your Feng Shui Design course, you'll receive a certification and be able to use the designation of Advanced Feng Shui Design Professional (AFDP).</p>
    <p className="mb-0">This certification demonstrates that you have successfully completed Feng Shui Design training and that you possess all the skills and knowledge required to create functional and comfortable homes.</p>
  </CertificationSectionTemplate>
);
