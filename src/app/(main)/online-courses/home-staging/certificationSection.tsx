import type { FC } from 'react';

import CertificationBackgroundImage from './cert-bg.jpg';
import CertificationLogo from '@/components/certificationLogos/isrp.svg';
import { CertificationSectionTemplate } from '@/components/certificationSectionTemplate';

export const CertificationSection: FC = () => (
  <CertificationSectionTemplate backgroundImageSrc={CertificationBackgroundImage}>
    <CertificationLogo height="200" className="mb-3" alt="International Staging and Redesign Professional (ISRP) certification logo" />
    <p className="mb-3 small gold">International Staging and Redesign Professional&trade; (ISRP&trade;)</p>
    <h2 className="text-white mb-3">Your Home Staging Certification</h2>
    <p>Once you graduate from your home staging course, you'll receive a certification and be able to use the designation of International Staging and Redesign Professional (ISRP).</p>
    <p className="mb-0">This certification demonstrates that you have successfully completed home stager training and that you possess all the skills and knowledge required to create functional and comfortable homes.</p>
  </CertificationSectionTemplate>
);
