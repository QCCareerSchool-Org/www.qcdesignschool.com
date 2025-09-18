'server only';

import type { FC } from 'react';

import CertificationBackgroundImage from './cert-bg.jpg';
import CertificationLogo from '@/components/certificationLogos/iddp.svg';
import { CertificationSectionTemplate } from '@/components/certificationSectionTemplate';
import { getData } from '@/lib/getData';
import { getDesignRestricted } from '@/lib/restrictions';

export const CertificationSection: FC = async () => {
  const { countryCode, provinceCode } = await getData();

  const designRestricted = getDesignRestricted(countryCode, provinceCode);

  return (
    <CertificationSectionTemplate backgroundImageSrc={CertificationBackgroundImage} overlayColor="rgb(0,0,0,0.2)">
      <CertificationLogo fill="#faf0b6" height="200" className="mb-3" alt="International Design and Decorating Professional (IDDP) certification logo" />
      <p className="mb-3 small lightGold">International Design and Decorating Professional&trade; (IDDP&trade;)</p>
      <h2 className="text-white mb-3">Your Interior {designRestricted ? 'Decorating' : 'Design'} Certification</h2>
      <p>Once you graduate from your online interior {designRestricted ? 'decorating' : 'design'} course, you'll receive a certification and be able to use the designation of International Design and Decorating Professional (IDDP).</p>
      <p className="mb-0">This certification demonstrates that you have successfully completed professional training and that you possess all the skills and knowledge required to create beautiful and comfortable homes.</p>
      <div style={{ height: 140 }} />
    </CertificationSectionTemplate>
  );
};
