'use client';

import Lottie from 'lottie-react';
import type { StaticImageData } from 'next/image';
import type { FC } from 'react';

import emailNotification from './Email Notification.json';
import styles from './index.module.scss';
import { BackgroundImage } from '@/components/backgroundImage';
import { FormCard } from '@/components/formCard';
import { FormWrapper } from '@/components/formWrapper';
import DownloadIcon from '@/components/icons/download.svg';
import { Squiggle } from '@/components/squiggle';

interface Props {
  course?: string;
  heroSrc: StaticImageData;
  mobileHeroSrc?: StaticImageData;
  emailAddress?: string;
  download?: boolean;
}

export const ThankYouSection: FC<Props> = ({ course, heroSrc, mobileHeroSrc, emailAddress, download = true }) => {
  const downloadUrl = course ? `/catalog.pdf?course=${encodeURIComponent(course)}` : '/catalog.pdf';
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
                <h1 className="h4 mb-4 text-navy">Thank You! Your Catalog {download ? 'Is Below' : 'Is Waiting in Your Inbox'}</h1>
                <FormWrapper>
                  {download
                    ? (
                      <>
                        <p className={`lead ${styles.limitedTimeOffer} ${(emailAddress && emailAddress.length > 35) ? styles.long : ''}`}>We've sent a <strong className="text-primary">limited-time offer</strong> to <strong className="text-black">{emailAddress ?? 'your inbox'}</strong></p>
                        <Squiggle variant="tapered" className="text-primary mb-4" style={{ margin: '0 2rem', maxWidth: squiggleWidth }} />
                        <p className="mb-4">Be sure to check your <strong>spam</strong> or <strong>promotions</strong> folder if you don't see it right away&mdash;you don't want to miss this!</p>
                        <a href={downloadUrl}><button className="btn btn-primary"><DownloadIcon height="16" style={{ position: 'relative', top: -2, marginRight: '0.5rem' }} /> View Catalog</button></a>
                      </>)
                    : (
                      <>
                        <p className="lead">Congratulations—you've unlocked your catalog! We've sent your catalog along with a special offer to your inbox. Be sure to check your junk/spam folder and add us to your safe sender's list if you don't see it in the next few minutes!</p>
                      </>
                    )
                  }
                </FormWrapper>
              </div>
            </FormCard>
          </div>
        </div>
      </div>
    </section>
  );
};
