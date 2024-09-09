import type { FC } from 'react';

import CertificationBackgroundImage from './cert-bg.jpg';
import CertificationLogo from '@/components/certificationLogos/iedp.svg';
import { CertificationSectionTemplate } from '@/components/certificationSectionTemplate';

export const CertificationSection: FC = () => (
  <CertificationSectionTemplate backgroundImageSrc={CertificationBackgroundImage}>
    <CertificationLogo height="200" className="mb-3" alt="International Event Decorating Professional (IEDP) certification logo" />
    <p className="mb-3 small gold">International Event Decorating Professional&trade; (IEDP&trade;)</p>
    <h2 className="text-white mb-3">Your Event Decor Certification</h2>
    <p>Once you graduate from your online event planning course, you'll receive a certification and be able to use the designation of International Event Decorating Professional (IEDP).</p>
    <p className="mb-0">This certification demonstrates that you have successfully completed professional Event Decor training and that you possess all the skills and knowledge required to create beautiful and memorable events.</p>
  </CertificationSectionTemplate>
);
