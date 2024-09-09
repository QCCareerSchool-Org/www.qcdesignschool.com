import type { FC } from 'react';

import CertificationBackgroundImage from './cert-bg.jpg';
import CertificationLogo from '@/components/certificationLogos/aiop.svg';
import { CertificationSectionTemplate } from '@/components/certificationSectionTemplate';

export const CertificationSection: FC = () => (
  <CertificationSectionTemplate backgroundImageSrc={CertificationBackgroundImage}>
    <CertificationLogo height="200" className="mb-3" alt="International Staging and Redesign Professional (ISRP) certification logo" />
    <p className="mb-3 small gold">International Staging and Redesign Professional&trade; (ISRP&trade;)</p>
    <h2 className="text-white mb-3">Your Home Staging Certification</h2>
    <p>Once you graduate from QC's Staging for Designers course, you'll receive the unique International Staging and Redesign Professional (ISRP) double certification.</p>
    <p className="mb-0">This certificate of completion demonstrates that you possess the home staging training needed to succeed in the real estate and redesign industries.</p>
  </CertificationSectionTemplate>
);
