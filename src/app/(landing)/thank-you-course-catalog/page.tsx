import type { Metadata } from 'next';
import { cookies, headers } from 'next/headers';

import { Header } from '../_components/header';
import { ThankYouSection } from '../_components/thankYouSection';
import HeroDesktopImage from '../free-course-catalog/hero-large.jpg';
import HeroMobileImage from '../free-course-catalog/hero-small.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import { EmailSentToast } from '@/components/emailSentToast';
import { FormCard } from '@/components/formCard';
import { FormWrapper } from '@/components/formWrapper';
import { GetStartedSection } from '@/components/getStartedSection';
import { GuaranteeSection } from '@/components/guaranteeSection';
import DownloadIcon from '@/components/icons/download.svg';
import BookIcon from '@/components/icons/open-book.svg';
import { LeadProcessing } from '@/components/leadProcessing';
import { SupportSection } from '@/components/supportSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { ThreeReasonsSection } from '@/components/threeReasonsSection';
import { fbPostLead } from '@/lib/facebookConversionAPI';
import { getParam } from '@/lib/getParam';

export const metadata: Metadata = {
  title: 'Your Course Catalog Has Been Sent',
  description: 'Your course catalog has been emailed. Download it to explore QC\'s certifications and online courses!',
  alternates: { canonical: '/thank-you-course-catalog' },
  robots: { index: false },
};

const testimonialIds = [ 'TD-0015', 'TD-0014', 'TD-0016' ];

const ThankYouCourseCatalogPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const leadId = getParam(searchParams.leadId);
  const firstName = getParam(searchParams.firstName);
  const lastName = getParam(searchParams.lastName);
  const emailAddress = getParam(searchParams.emailAddress);
  const countryCode = getParam(searchParams.countryCode);
  const provinceCode = getParam(searchParams.provinceCode);
  const headerList = await headers();
  const ipAddress = headerList.get('x-real-ip') ?? undefined;
  const userAgent = headerList.get('user-agent') ?? undefined;
  const cookieStore = await cookies();
  const fbc = cookieStore.get('_fbc')?.value;
  const fbp = cookieStore.get('_fbp')?.value;

  if (leadId && emailAddress) {
    try {
      await fbPostLead(leadId, new Date(), emailAddress, firstName, lastName, countryCode, provinceCode, ipAddress, userAgent, fbc, fbp);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Header logoLink buttonContent={<><span><DownloadIcon height="14" className="me-2" style={{ position: 'relative', top: -1 }} /></span><span className="d-none d-sm-inline">Get Your Free </span>Catalog</>} showBanner />
      {emailAddress && <EmailSentToast emailAddress={emailAddress} firstName={firstName} />}
      <LeadProcessing
        emailAddress={emailAddress}
        countryCode={countryCode}
        provinceCode={provinceCode}
        firstName={firstName}
        lastName={lastName}
        ipAddress={ipAddress}
        leadId={leadId}
        conversionId="AW-1071836607/5nunCL-7PhC_24v_Aw"
      />
      <section className="text-white">
        <BackgroundImage src={HeroDesktopImage} mobile={{ src: HeroMobileImage, breakpoint: 'lg', objectPosition: '50% 100%' }} priority />
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
                    <a href="/catalog.pdf"><button className="btn btn-outline-primary"><DownloadIcon height="16" style={{ position: 'relative', top: -2, marginRight: '0.5rem' }} /> Download Catalog Now</button></a>
                  </FormWrapper>
                </div>
              </FormCard>
            </div>
          </div>
        </div>
      </section>

      <TestimonialWallSection testimonialIds={testimonialIds} />
      <ThreeReasonsSection />
      <SupportSection showLink />
      <GuaranteeSection />
      <GetStartedSection
        title="Ready to start your design career?"
        text="Become professionally certified with QC's online training today and start earning!"
      />
    </>
  );
};

export default ThankYouCourseCatalogPage;
