import type { Metadata } from 'next';
import { headers } from 'next/headers';

import CertificationBackgroundImage from './certification-bg.jpg';
import HeroDesktopImage from './hero-large.jpg';
import HeroMobileImage from './hero-small.jpg';
import { BottomSection } from '../_components/bottomSection';
import { CertificationSection } from '../_components/certificationSection';
import { Header } from '../_components/header';
import { HowYoullLearnSection } from '../_components/howYoullLearnSection';
import { JoinQCSection } from '../_components/joinQCSection';
import { BackgroundImage } from '@/components/backgroundImage';
import { BrevoForm } from '@/components/brevoForm';
import CertificationIcon from '@/components/certificationLogos/iddp.svg';
import { DesignRecognition } from '@/components/designRecognition';
import { FormCard } from '@/components/formCard';
import { FormWrapper } from '@/components/formWrapper';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import DownloadIcon from '@/components/icons/download.svg';
import { CourseJsonLd } from '@/components/jsonLd/course';
import { PromoSection } from '@/components/promoSection';
import { DefaultStatsSection } from '@/components/statsSection/default';
import { SupportSection } from '@/components/supportSection';
import type { TestimonialId } from '@/components/testimonial/data';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { getParam } from '@/lib/getParam';
import { getServerData } from '@/lib/getServerData';
import { getDesignRestricted } from '@/lib/restrictions';
import type { GenerateMetadata, PageComponent } from '@/serverComponent';

export const generateMetadata: GenerateMetadata = async (props): Promise<Metadata> => {
  const { countryCode, provinceCode } = await getServerData(props.searchParams);

  const designRestricted = getDesignRestricted(countryCode, provinceCode);

  return {
    title: `Free Interior ${designRestricted ? 'Decorating' : 'Design'} Course Catalog`,
    description: `Download the QC Interior ${designRestricted ? 'Decorating' : 'Design'} course catalog to learn design fundamentals, styles, lighting, and business strategies to launch your career!`,
    alternates: { canonical: '/interior-design-course-catalog' },
  };
};

const brevo = {
  design: {
    brevoListId: 52, // Interior Design Leads
    brevoEmailTemplateId: 1464, // Design
  },
  decorating: {
    brevoListId: 18, // Interior Decorating Leads
    brevoEmailTemplateId: 1598, // Decorating
  },
};

const testimonialIds: TestimonialId[] = [ 'TD-0016', 'TD-0015', 'TD-0002', 'TD-0003', 'TD-0006', 'TD-0011' ];

const InteriorDesignCatalogPage: PageComponent = async props => {
  const { countryCode, provinceCode, date } = await getServerData(props.searchParams);
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

  const designRestricted = getDesignRestricted(countryCode, provinceCode);

  const { brevoListId, brevoEmailTemplateId } = designRestricted ? brevo.decorating : brevo.design;

  return (
    <>
      <CourseJsonLd courseCode="i2" />
      <Header countryCode={countryCode} buttonContent={<><span className="text-light"><DownloadIcon height="14" className="me-2" style={{ position: 'relative', top: -1 }} /></span><span className="d-none d-sm-inline">Get Your Free </span>Catalog</>} />
      <section className="text-white">
        <BackgroundImage src={HeroDesktopImage} mobile={{ src: HeroMobileImage, breakpoint: 'lg', objectPosition: '50% 100%' }} priority />
        <div className="container">
          <div className="row g-0">
            <div className="col-12 col-md-7 col-lg-6 col-xl-5">
              <FormCard>
                <h1 className="h2 mb-3 text-navy">Become an Interior {designRestricted ? 'Decorator' : 'Designer'}</h1>
                <h3 className="h6 mb-4 text-navy">Download the Free Course Catalog</h3>
                <FormWrapper>
                  <BrevoForm
                    successLocation={`${process.env.NEXT_PUBLIC_HOST ?? 'https://www.qcdesignschool.com'}/thank-you-course-catalog`}
                    listId={brevoListId}
                    telephoneListId={50}
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
                    countryCode={countryCode}
                  />
                </FormWrapper>
              </FormCard>
            </div>
          </div>
        </div>
      </section>
      <PromoSection date={date} countryCode={countryCode} />
      <HowYoullLearnSection graduateTitle="International Design and Decorating Professional™ (IDDP™)" countryCode={countryCode} />
      <CertificationSection
        backgroundImageSrc={CertificationBackgroundImage}
        certification={<CertificationIcon title="International Design and Decorating Professional (IDDP) certification" />}
        overlayColor="rgb(0,0,0,0.6)"
      >
        <h2 className="h3">Your Design Certification</h2>

        <p><strong>Turn your training into a client-ready career.</strong></p>
        <p>Upon completion of the Interior {designRestricted ? 'Decorating' : 'Design'} Career Accelerator, you'll earn your International Design and Decorating Professional (IDDP™) designation—your globally recognized credential and professional mark of expertise. Yours for life, it signals that you're ready to work with clients, manage projects, and operate at a professional standard.</p>

        <h3 className="h5">What Your Certification Unlocks</h3>
        <ul className="mb-0">
          <li><strong>Start booking paying clients</strong> with the skills, tools, and confidence to deliver professional results from day one</li>
          <li><strong>Launch a profitable design business</strong> with proven systems for pricing, branding, and client management</li>
          <li><strong>Take on residential and commercial projects</strong>—from full-service home design to office and retail spaces</li>
          <li><strong>Offer high-value consulting services</strong> to increase your income and expand your earning potential</li>
        </ul>
        {countryCode === 'CA' && (
          <div className="mt-5">
            <DesignRecognition countryCode={countryCode} />
          </div>
        )}
      </CertificationSection>
      <TestimonialWallSection className="bg-light" testimonialIds={testimonialIds} showProvinceCodes={countryCode === 'CA'} courseCodes={[ 'i2' ]} schemaCourseId="#course" />
      <DefaultStatsSection />
      <JoinQCSection />
      <GoogleReviewSection courseCode="i2" schemaCourseId="#course" />
      <SupportSection date={date} />
      <BottomSection />
    </>
  );
};

export default InteriorDesignCatalogPage;
