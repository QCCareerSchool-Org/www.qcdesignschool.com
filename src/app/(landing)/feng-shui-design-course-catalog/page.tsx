import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Link from 'next/link';

import HeroImage from './hero.jpg';
import { BottomSection } from '../_components/bottomSection';
import { CertificationSection } from '../_components/certificationSection';
import { Header } from '../_components/header';
import { HowYoullLearnSection } from '../_components/howYoullLearnSection';
import { JoinQCSection } from '../_components/joinQCSection';
import CertificationBackgroundImage from '@/app/(main)/online-courses/feng-shui-design/cert-bg.jpg';
import { StatsSection } from '@/app/(main)/statsSection';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import { BrevoForm } from '@/components/brevoForm';
import CertificationIcon from '@/components/certificationLogos/ifdp.svg';
import { FormCard } from '@/components/formCard';
import { FormWrapper } from '@/components/formWrapper';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import DownloadIcon from '@/components/icons/download.svg';
import { CourseJsonLd } from '@/components/jsonLd/course';
import { PromoSection } from '@/components/promoSection';
import { SupportSection } from '@/components/supportSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { getData } from '@/lib/getData';
import { getParam } from '@/lib/getParam';

export const metadata: Metadata = {
  title: 'Free Feng Shui Design Course Catalog',
  description: 'Download the Feng Shui Design Course Catalog for details on certification and resources for your journey as a Feng Shui Professional!',
  alternates: { canonical: '/feng-shui-design-course-catalog' },
};

const brevoListId = 64; // Feng Shui Leads
const brevoEmailTemplateId = 2205; // Feng Shui
const testimonialIds = [ 'TD-0016', 'TD-0015', 'TD-0002', 'TD-0003', 'TD-0006', 'TD-0011' ];

const FengShuiDesignCourseCatalogPage: PageComponent = async props => {
  const { countryCode, date } = await getData();
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
      <CourseJsonLd courseCode="fs" />
      <Header logoLink buttonContent={<><span className="text-light"><DownloadIcon height="14" className="me-2" style={{ position: 'relative', top: -1 }} /></span><span className="d-none d-sm-inline">Get Your Free </span>Catalog</>} />
      <section className="text-white">
        <BackgroundImage src={HeroImage} priority />
        <div className="container">
          <div className="row g-0">
            <div className="col-12 col-md-7 col-lg-6 col-xl-5">
              <FormCard>
                <h1 className="h2 mb-3 text-navy">Become a Feng Shui Designer</h1>
                <h3 className="h6 mb-4 text-navy">Download the Free Course Catalog</h3>
                <FormWrapper>
                  <BrevoForm
                    successLocation={`${process.env.HOST ?? 'https://www.qcdesignschool.com'}/thank-you-feng-shui-design-course-catalog`}
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
      <HowYoullLearnSection graduateTitle="Advanced Feng Shui Design Professional™ (AFDP™)" countryCode={countryCode} />
      <CertificationSection backgroundImageSrc={CertificationBackgroundImage} certification={<CertificationIcon title="International Feng Shui Design Professional (IFDP) certification" />}>
        <h2 className="h3">Your Feng Shui Design Certification</h2>
        <p>Once you've completed the Feng Shui Design course online, you'll graduate with the Advanced Feng Shui Design Professional (AFDP) certificate. This internationally recognized professional designation is yours to use for life.</p>
        <p>This certificate demonstrates that you have successfully completed feng shui design training and you possess all the skills and knowledge required to be successful in the industry.</p>
        <h3 className="h5">What Your Certification Unlocks</h3>
        <ul className="mb-0">
          <li>Launch your own feng shui design business with comprehensive business training included in your course</li>
          <li>Secure a position at an established design and decorating firm</li>
          <li>Design harmonized spaces for individual clients or corporate offices</li>
        </ul>
      </CertificationSection>
      <TestimonialWallSection className="bg-light" testimonialIds={testimonialIds} showProvinceCodes={countryCode === 'CA'} courseCodes={[ 'fs' ]} schemaCourseId="#course" />
      <StatsSection />
      <JoinQCSection />
      <GoogleReviewSection courseCode="fs" schemaCourseId="#course" />
      <SupportSection date={date} />
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

export default FengShuiDesignCourseCatalogPage;
