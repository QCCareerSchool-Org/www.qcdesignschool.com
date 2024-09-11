import type { FC } from 'react';

import HeroDesktopImage from './hero-large.jpg';
import HeroMobileImage from './hero-small.jpg';
import styles from './index.module.scss';
import { BackgroundImage } from '@/components/backgroundImage';
import { BrevoForm } from '@/components/brevoForm';

type Props = {
  brevoListId: number;
  brevoEmailTemplateId: number;
  gclid?: string;
  msclkid?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  referrer: string | null;
};

export const HeroSection: FC<Props> = props => {
  return (
    <section className="text-white">
      <BackgroundImage desktopSrc={HeroDesktopImage} mobileSrc={HeroMobileImage} mobileObjectPosition="50% 100%" />
      <div className="container">
        <div className="row g-0">
          <div className="col-12 col-md-7 col-lg-6 col-xl-5 order-lg-first">
            <div className={`card bg-light ${styles.card}`}>
              <div className="card-body">
                <h1 className="h3 mb-3 text-navy">Become a Home Designer</h1>
                <h3 className="h6 mb-4 text-navy">Download the Course Catalog</h3>
                <div className={styles.formWrapper}>
                  <BrevoForm
                    successLocation={`${process.env.HOST ?? 'https://www.qcdesignschool.com'}/thank-you-interior-decorating-course-catalog`}
                    listId={props.brevoListId}
                    emailTemplateId={props.brevoEmailTemplateId}
                    gclid={props.gclid}
                    msclkid={props.msclkid}
                    utmSource={props.utmSource}
                    utmMedium={props.utmMedium}
                    utmCampaign={props.utmCampaign}
                    utmContent={props.utmContent}
                    utmTerm={props.utmTerm}
                    referrer={props.referrer}
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
