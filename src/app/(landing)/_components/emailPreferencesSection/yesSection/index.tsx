'use client';

import Lottie from 'lottie-react';
import type { StaticImageData } from 'next/image';
import type { FC } from 'react';

import emailNotification from './Email Notification.json';
import { BackgroundImage } from '@/components/backgroundImage';
import { FormCard } from '@/components/formCard';
import { FormWrapper } from '@/components/formWrapper';
import PhoneIcon from '@/components/siteLayout/icons/phone.svg';
import { Squiggle } from '@/components/squiggle';
import { TelephoneLink } from '@/components/telephoneLink';

interface Props {
  heroSrc: StaticImageData;
  mobileHeroSrc?: StaticImageData;
  emailAddress?: string;
  countryCode?: string | null | undefined;
}

export const EmailPreferencesYesSection: FC<Props> = ({ heroSrc, mobileHeroSrc, emailAddress, countryCode }) => {
  const squiggleWidth = emailAddress ? `${Math.round(emailAddress.length * 0.5)}em` : 220;

  return (
    <section className="text-white">
      {mobileHeroSrc
        ? <BackgroundImage src={heroSrc} mobile={{ src: mobileHeroSrc, breakpoint: 'lg', objectPosition: '50% 100%' }} priority />
        : <BackgroundImage src={heroSrc} priority />
      }
      <div className="container">
        <div className="row g-0">
          <div className="col-12 col-md-7 col-lg-6 col-xl-5 order-lg-first text-center">
            <FormCard>
              <div style={{ margin: '0 0 1rem' }}>
                <Lottie animationData={emailNotification} autoplay loop style={{ width: 300, height: 159, margin: '0 auto', paddingLeft: '4%' }} />
                <h1 className="h4 mb-4 text-navy">You're officially back in the loop</h1>
                <FormWrapper>
                  <p>Thanks for updating your preferences. We'll keep sending you design tips, student success stories, exclusive offers, and updates from QC Design School</p>
                  <Squiggle variant="tapered" className="text-primary mb-4" style={{ margin: '0 2rem', maxWidth: squiggleWidth }} />
                  <p className="mb-4">If you ever have questions about our courses or career training, our team is always happy to help.</p>
                  <a><button className="btn btn-primary"><TelephoneLink countryCode={countryCode ?? ''} className="text-white" />   <PhoneIcon style={{ position: 'relative', top: -2, marginRight: '0.5rem' }} /></button></a>
                </FormWrapper>
              </div>
            </FormCard>
          </div>
        </div>
      </div>
    </section>
  );
};
