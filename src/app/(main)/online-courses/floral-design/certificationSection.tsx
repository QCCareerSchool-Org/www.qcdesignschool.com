import type { FC } from 'react';

import CertificationBackgroundImage from './cert-bg.jpg';
import CertificationLogo from '@/components/certificationLogos/afdp.svg';
import { CertificationSectionTemplate } from '@/components/certificationSectionTemplate';

export const CertificationSection: FC = () => (
  <CertificationSectionTemplate backgroundImageSrc={CertificationBackgroundImage}>
    <CertificationLogo height="200" className="mb-3" alt="International Floral Design Professional (IFDP) certification logo" />
    <p className="mb-3 small lightGold">International Floral Design Professional&trade; (IFDP&trade;)</p>
    <h2 className="text-white mb-3">Your Floral Design Certification</h2>
    <p>Once you graduate from your online floral design course, you'll receive a certification and be able to use the designation of International Floral Design Professional (IFDP).</p>
    <p className="mb-0">This certification demonstrates that you have successfully completed professional Floral Design training and that you possess all the skills and knowledge required to create beautiful floral arrangements.</p>
  </CertificationSectionTemplate>
);
