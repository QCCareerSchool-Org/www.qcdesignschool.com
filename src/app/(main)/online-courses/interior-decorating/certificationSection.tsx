'server only';

import type { FC } from 'react';

import styles from './certificationSection.module.scss';
import CertificationLogo from '@/components/certificationLogos/iddp.svg';
import { getServerData } from '@/lib/getServerData';
import { getDesignRestricted } from '@/lib/restrictions';

export const CertificationSection: FC = async () => {
  const { countryCode, provinceCode } = await getServerData();

  const designRestricted = getDesignRestricted(countryCode, provinceCode);

  return (
    <section className="bg-dark inverted text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="mb-4">
              <CertificationLogo title="International Design and Decorating Professional (IDDP) certification logo" className="text-gold" style={{ width: '100%', maxWidth: 150 }} />
            </div>
            <h2 className="mb-3">Your Professional Design & Decorating Certification</h2>
            <p className="lead fw-semibold mb-3">Turn Your Skills Into a Client-Ready Career</p>
            <p className="mb-4">Earn the International Design and Decorating Professional (IDDP&trade;) credential&mdash;your global mark of expertise and professionalism. Gain instant credibility and unlock opportunities to grow your interior {designRestricted ? 'decorating' : 'design'} business and network with industry leaders.</p>
            <div className={styles.credential}>Lifetime value. Career-ready. Client-approved.</div>
          </div>
        </div>
      </div>
    </section>
  );
};
