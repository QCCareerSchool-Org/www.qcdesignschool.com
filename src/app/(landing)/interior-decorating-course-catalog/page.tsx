import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Link from 'next/link';

import CertificationBackgroundImage from './certification-bg.jpg';
import HeroDesktopImage from './hero-large.jpg';
import HeroMobileImage from './hero-small.jpg';
import { BottomSection } from '../_components/bottomSection';
import { CertificationSection } from '../_components/certificationSection';
import { FormCard } from '../_components/formCard';
import { FormWrapper } from '../_components/formWrapper';
import { Header } from '../_components/header';
import { HowYoullLearnSection } from '../_components/howYoullLearnSection';
import { JoinQCSection } from '../_components/joinQCSection';
import { StatsSection } from '@/app/(main)/statsSection';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import { BrevoForm } from '@/components/brevoForm';
import CertificationIcon from '@/components/certificationLogos/iddp.svg';
import { DesignRecognition } from '@/components/designRecognition';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import DownloadIcon from '@/components/icons/download.svg';
import { PromoSection } from '@/components/promoSection';
import { SupportSection } from '@/components/supportSection';
import { getData } from '@/lib/getData';
import { getParam } from '@/lib/getParam';

export const metadata: Metadata = {
  title: 'Free Interior Decorating Course Catalog',
  description: 'Download the QC Interior Decorating course catalog to learn design fundamentals, styles, lighting, and business strategies to launch your career!',
  alternates: { canonical: '/interior-decorating-course-catalog' },
};

const brevoListId = 18; // Interior Decorating Leads
const brevoEmailTemplateId = 58; // General

const InteriorDecoratingCatalogPage: PageComponent = async props => {
  const { countryCode } = await getData();
  const date = new Date().getTime();
  const searchParams = await props.searchParams;
  const gclid = getParam(searchParams.gclid);
  const msclkid = getParam(searchParams.msclkid);
  const utmSource = getParam(searchParams.utm_source);
  const utmMedium = getParam(searchParams.utm_medium);
  const utmCampaign = getParam(searchParams.utm_campaign);
  const utmContent = getParam(searchParams.utm_content);
  const utmTerm = getParam(searchParams.utm_term);
  const headerList = await headers();
  const referrer = headerList.get('referer');

  return (
    <>
      <Header logoLink buttonContent={<><span className="text-light"><DownloadIcon height="14" className="me-2" style={{ position: 'relative', top: -1 }} /></span><span className="d-none d-sm-inline">Get Your Free </span>Catalog</>} showBanner />
      <section className="text-white">
        <BackgroundImage src={HeroDesktopImage} mobile={{ src: HeroMobileImage, breakpoint: 'lg', objectPosition: '50% 100%' }} priority />
        <div className="container">
          <div className="row g-0">
            <div className="col-12 col-md-7 col-lg-6 col-xl-5">
              <FormCard>
                <h1 className="h2 mb-3 text-navy">Become an Interior Decorator</h1>
                <h3 className="h6 mb-4 text-navy">Download the Free Course Catalog</h3>
                <FormWrapper>
                  <BrevoForm
                    successLocation={`${process.env.HOST ?? 'https://www.qcdesignschool.com'}/thank-you-course-catalog`}
                    listId={brevoListId}
                    emailTemplateId={brevoEmailTemplateId}
                    gclid={gclid}
                    msclkid={msclkid}
                    utmSource={utmSource}
                    utmMedium={utmMedium}
                    utmCampaign={utmCampaign}
                    utmContent={utmContent}
                    utmTerm={utmTerm}
                    referrer={referrer}
                    placeholders
                  />
                </FormWrapper>
              </FormCard>
            </div>
          </div>
        </div>
      </section>
      <PromoSection date={date} countryCode={countryCode} />
      <HowYoullLearnSection graduateTitle="Interior Decorator" />
      <CertificationSection
        backgroundImageSrc={CertificationBackgroundImage}
        certification={<CertificationIcon alt="International Design and Decorating Professional (IDDP™) certification" />}
        overlayColor="rgb(0,0,0,0.6)"
      >
        <h2 className="h3">Your Design Certification</h2>
        <p>Once you've completed the Interior Decorating Course online, you'll graduate with the International Design and Decorating Professional™ (IDDP™) certificate. This internationally recognized professional designation is yours to use for life.</p>
        <p>Your certificate demonstrates that you have successfully completed professional training in the design & decorating industry and you possess all the skills and knowledge required to be successful in the industry.</p>
        <h3 className="h5">What Your Certification Unlocks</h3>
        <ul className="mb-0">
          <li>Launch your own home design and decorating business with comprehensive business training included in your course</li>
          <li>Secure a position at an established design and decorating firm</li>
          <li>Design corporate offices, conference rooms, and retail stores</li>
          <li>Offer expert consulting services to both residential and commercial clients</li>
        </ul>
        {countryCode === 'CA' && (
          <div className="mt-5">
            <DesignRecognition countryCode={countryCode} />
          </div>
        )}
      </CertificationSection>
      <StatsSection inverse className="bg-white" />
      <JoinQCSection />
      <GoogleReviewSection courseCode="i2" />
      <SupportSection />
      <BottomSection>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-9 col-xxl-8">
            <h2 className="mb-5">Get Started with a Free Course Catalog</h2>
            <Link href="#" className="btn btn-primary btn-lg">Get Your Free Catalog</Link>
          </div>
        </div>
      </BottomSection>
    </>
  );
};

export default InteriorDecoratingCatalogPage;
