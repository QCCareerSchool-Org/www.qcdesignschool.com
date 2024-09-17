import type { FC } from 'react';

import CertificationBackgroundImage from './cert-bg.jpg';
import CertificationLogo from '@/components/certificationLogos/apdp.svg';
import { CertificationSectionTemplate } from '@/components/certificationSectionTemplate';

export const CertificationSection: FC = () => (
  <CertificationSectionTemplate backgroundImageSrc={CertificationBackgroundImage}>
    <CertificationLogo height="200" className="mb-3" alt="Aging in Place Professional (APDP) certification logo" />
    <p className="mb-3 small gold">Aging in Place Professional&trade; (APDP&trade;)</p>
    <h2 className="text-white mb-3">Your Aging in Place Certification</h2>
    <p>Once you graduate from your online design course, you'll receive a certification and be able to use the designation of Aging in Place Professional (APDP).</p>
    <p className="mb-0">This certification demonstrates that you have successfully completed professional aging in place training and that you possess all the skills and knowledge required to create comfortable and functional homes.</p>
  </CertificationSectionTemplate>
);
