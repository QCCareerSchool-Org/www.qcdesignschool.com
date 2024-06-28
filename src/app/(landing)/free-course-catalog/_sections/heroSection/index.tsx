import type { FC } from 'react';

import HeroDesktopImage from './hero-large.jpg';
import HeroMobileImage from './hero-small.jpg';
import styles from './index.module.scss';
import { BackgroundImage } from '@/components/backgroundImage';
import { BrochureForm } from '@/components/brochureForm';
import { getData } from '@/lib/getData';

export const HeroSection: FC = () => {
  const { testGroup, countryCode, provinceCode } = getData();
  return (
    <section className="text-white">
      <BackgroundImage desktopSrc={HeroDesktopImage} mobileSrc={HeroMobileImage} />
      <div className="container">
        <div className="row g-0">
          <div className="col-12 col-md-7 col-lg-6 col-xl-5 order-lg-first">
            <div className={`card bg-light ${styles.card}`}>
              <div className="card-body">
                <h1 className="h3 mb-3 text-navy">Get a Free Event &amp; Wedding Planning Course Catalog</h1>
                <div className={styles.formWrapper}>
                  <BrochureForm
                    action="https://captcha.qccareerschool.com/2fb03662-172b-11ed-a5a8-bc764e017ab0"
                    testGroup={testGroup}
                    countryCode={countryCode}
                    provinceCode={provinceCode}
                    placeholders
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
