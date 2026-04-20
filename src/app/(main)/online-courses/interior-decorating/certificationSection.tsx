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
    <section className={`${styles.section} text-white text-center`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className={`${styles.logoWrap} mb-4`} aria-hidden="true">
              <CertificationLogo className={styles.logo} title="International Design and Decorating Professional (IDDP) certification logo" />
            </div>
            <h2 className="text-white mb-3">Your Professional IDDP&trade; Designation</h2>
            <p className="lead text-white-50 fw-semibold mb-3">Turn Your Skills Into a Client-Ready Career</p>
            <p className="text-white-50 mb-4">Earn the International Design and Decorating Professional (IDDP&trade;) credential&mdash;your global mark of expertise and professionalism. Gain instant credibility and unlock opportunities to grow your interior {designRestricted ? 'decorating' : 'design'} business and network with industry leaders.</p>
            <div className={styles.credential}>Lifetime value. Career-ready. Client-approved.</div>
          </div>
        </div>
      </div>
    </section>
  );
};
