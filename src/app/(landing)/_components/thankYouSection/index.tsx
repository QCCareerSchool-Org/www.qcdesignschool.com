import type { StaticImageData } from 'next/image';
import type { FC } from 'react';

import { BackgroundImage } from '@/components/backgroundImage';
import { FormCard } from '@/components/formCard';
import { FormWrapper } from '@/components/formWrapper';
import DownloadIcon from '@/components/icons/download.svg';
import BookIcon from '@/components/icons/open-book.svg';

type Props = {
  course?: string;
  heroSrc: StaticImageData;
  mobileHeroSrc?: StaticImageData;
  emailAddress?: string;
};

export const ThankYouSection: FC<Props> = ({ course, heroSrc, mobileHeroSrc, emailAddress }) => {
  const downloadUrl = course ? `/catalog.pdf?course=${encodeURIComponent(course)}` : '/catalog.pdf';

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
              <div style={{ margin: '3rem 0' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 100, height: 100, borderRadius: 50, border: '1px solid #E5E7EB', background: 'white', margin: '0 auto 2rem', color: '#2840e0' }}>
                  <BookIcon height="30" />
                </div>
                <h1 className="h4 mb-4 text-navy">Catalog Unlocked! 🎉</h1>
                <FormWrapper>
                  <p className="lead mb-4">We've sent the free catalog to {emailAddress ? <strong>{emailAddress}</strong> : 'your inbox'}. Be sure to check your 'Promotions' or 'Spam' folder if you don't see it.</p>
                  <p className="fw-bold">If you can't find it, get instant access here:</p>
                  <a href={downloadUrl}><button className="btn btn-outline-primary"><DownloadIcon height="16" style={{ position: 'relative', top: -2, marginRight: '0.5rem' }} /> Download Catalog Now</button></a>
                </FormWrapper>
              </div>
            </FormCard>
          </div>
        </div>
      </div>
    </section>
  );
};
