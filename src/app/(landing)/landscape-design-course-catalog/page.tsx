import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';

import ChrisTuccioImage from './chris-tuccio.jpg';
import HeroImage from './hero.jpg';
import { BottomSection } from '../_components/bottomSection';
import { CertificationSection } from '../_components/certificationSection';
import { Header } from '../_components/header';
import { JoinQCSection } from '../_components/joinQCSection';
import CertificationBackgroundImage from '@/app/(main)/online-courses/landscape-design/cert-bg.jpg';
import WhatYoullLearnImage from '@/app/(main)/online-courses/landscape-design/what-youll-learn.jpg';
import { StatsSection } from '@/app/(main)/statsSection';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import { BrevoForm } from '@/components/brevoForm';
import CertificationLogoIcon from '@/components/certificationLogos/ildp.svg';
import { FormCard } from '@/components/formCard';
import { FormWrapper } from '@/components/formWrapper';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import BookHeartIcon from '@/components/icons/book-heart.svg';
import CertificationIcon from '@/components/icons/certification.svg';
import ChartIcon from '@/components/icons/chart.svg';
import CheckCircleIcon from '@/components/icons/check-circle.svg';
import DownloadIcon from '@/components/icons/download.svg';
import SpreadsheetIcon from '@/components/icons/spreadsheet.svg';
import { Overlay } from '@/components/overlay';
import { PromoSection } from '@/components/promoSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { getData } from '@/lib/getData';
import { getParam } from '@/lib/getParam';

export const metadata: Metadata = {
  title: 'Free Landscape Design Course Catalog',
  description: 'Download the QC Landscape Design certification catalog to learn plant selection, garden design, site planning, and launch your landscape design career!',
  alternates: { canonical: '/landscape-design-course-catalog' },
};

const iconHeight = 32;
const brevoListId = 21; // Landscape Design Leads
const brevoEmailTemplateId = 73; // Landscape Design
const testimonialIds = [ 'TD-0018', 'TD-0016', 'TD-0019', 'TD-0006', 'TD-0020', 'TD-0015' ];

const LandscapeDesignCourseCatalogPage: PageComponent = async props => {
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
        <BackgroundImage src={HeroImage} priority />
        <Overlay backgroundColor="rgba(0,0,0,0.4)" className="d-md-none" />
        <div className="container">
          <div className="row g-0">
            <div className="col-12 col-md-7 col-lg-6 col-xl-5">
              <FormCard>
                <h1 className="h2 mb-3 text-navy">Become a Landscape Designer</h1>
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
                    countryCode={countryCode}
                  />
                </FormWrapper>
              </FormCard>
            </div>
          </div>
        </div>
      </section>
      <PromoSection date={date} countryCode={countryCode} />
      <section>
        <div className="container">
          <div className="row g-s">
            <div className="col-12 col-lg-5 d-none d-lg-block">
              <Image src={WhatYoullLearnImage} alt="" className="img-fluid" />
            </div>
            <div className="col-12 col-lg-7">
              <h2 className="mb-3">Launch Your Landscape Design Career</h2>
              <p>Break into the booming landscape design industry and gain job-ready skills without the time or cost of traditional colleges.</p>
              <p>The global landscaping services market is projected to reach $307.7 billion by 2030*. There's never been a better time to get started!</p>
              <ul className="list-unstyled mb-4">
                {countryCode === 'CA' && <li className="d-flex align-items-center mb-3"><BookHeartIcon height={iconHeight} className="me-3" /><div><strong>Save on Tuition:</strong> Claim over 50% of your course fees with the Canada Training Credit and Tuition Tax Credit.</div></li>}
                <li className="d-flex align-items-center mb-3"><CheckCircleIcon height={iconHeight} className="me-3" /><div><strong>Learn from Industry Experts:</strong> Get expert feedback and guidance from working landscape designers.</div></li>
                <li className="d-flex align-items-center mb-3"><ChartIcon height={iconHeight} className="me-3" /><div><strong>Study on Your Schedule:</strong> Train anytime, anywhere with fully online, self-paced course content that fits your lifestyle.</div></li>
                <li className="d-flex align-items-center mb-3"><SpreadsheetIcon height={iconHeight} className="me-3" /><div><strong>Build Real-World Business Skills:</strong> Discover how to market your services, attract clients, and grow a thriving landscape design business.</div></li>
                <li className="d-flex align-items-center"><CertificationIcon height={iconHeight} className="me-3" /><div><strong>Graduate Fast & Start Earning:</strong> Earn a professional certification you can use immediately to find clients or apply for jobs.</div></li>
              </ul>
              <p><small>* https://www.alliedmarketresearch.com/landscaping-services-market-A14417</small></p>
            </div>
          </div>
        </div>
      </section>
      <CertificationSection
        backgroundImageSrc={CertificationBackgroundImage}
        certification={<CertificationLogoIcon alt="International Landscape Design Professional (ILDP™) certification" />}
        overlayColor="rgb(0,0,0,0.2)"
      >
        <h2 className="h3">Your Landscape Design Certification</h2>
        <p>Once you've completed the Landscape Design course online, you'll graduate with the International Landscape Design Professional™ (ILDP™) certificate. This internationally recognized professional designation is yours to use for life.</p>
        <p>This certificate demonstrates that you have successfully completed professional landscape design training and you possess all the skills and knowledge required to be successful in the industry.</p>
        <h3 className="h5">What Your Certification Unlocks</h3>
        <ul className="mb-0">
          <li>Launch your own landscape design business with comprehensive business training included in your course</li>
          <li>Work for an existing landscape design firm</li>
          <li>Provide professional landscape design consulting services</li>
          <li>Design beautiful outdoor spaces that increase the perceived value of your clients' homes</li>
          <li>Plan aesthetically pleasing garden designs that will grow and thrive for years to come</li>
        </ul>
      </CertificationSection>
      <section>
        <div className="container">
          <div className="row justify-content-center g-5">
            <div className="col-12 col-lg-6">
              <h2 className="mb-3">Meet Your Instructor</h2>
              <p>In QC's expert-led Landscape Design course, you'll learn directly from Chris Tuccio—an accomplished landscape architect, educator, and program director with decades of experience shaping the next generation of design professionals. Through engaging instructional videos and real-world case studies, Chris shares practical insights drawn from his extensive professional and teaching experience.</p>
              <p>An ASLA-certified expert with an Ivy League education, Chris has led award-winning projects, built innovative academic programs, and inspired countless students through his dynamic teaching and industry leadership.</p>
            </div>
            <div className="col-12 col-md-8 col-lg-6">
              <Image src={ChrisTuccioImage} alt="" className="img-fluid rounded-2" />
            </div>
          </div>
        </div>
      </section>
      <TestimonialWallSection className="bg-light" testimonialIds={testimonialIds} courseCodes={[ 'ld' ]} />
      <StatsSection />
      <JoinQCSection subheading="QC’s Landscape Design Course provides you with:" />
      <GoogleReviewSection />
      <BottomSection>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-9 col-xxl-8">
            <h2 className="mb-3">Start Your Landscape Design Career Today!</h2>
            <p className="mb-5">Request a free course preview today to learn more about how you can become a professional landscape designer with QC's online training! The preview includes a course curriculum, tuition information and your career outlook.</p>
            <Link href="#" className="btn btn-primary btn-lg">Get Your Free Catalog</Link>
          </div>
        </div>
      </BottomSection>
    </>
  );
};

export default LandscapeDesignCourseCatalogPage;
