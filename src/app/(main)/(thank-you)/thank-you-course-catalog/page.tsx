import type { Metadata } from 'next';
import { cookies, headers } from 'next/headers';

import type { PageComponent } from '@/app/serverComponent';
import { EmailSentToast } from '@/components/emailSentToast';
import { GetStartedSection } from '@/components/getStartedSection';
import { GuaranteeSection } from '@/components/guaranteeSection';
import { LeadProcessing } from '@/components/leadProcessing';
import { SupportSection } from '@/components/supportSection';
import { TelephoneFormSection } from '@/components/telephoneFormSection';
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
      {leadId && validCountryForSMS(countryCode) && <TelephoneFormSection leadId={leadId} countryCode={countryCode} />}
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

const validCountryForSMS = (countrycode?: string): boolean => countrycode === 'CA' || countrycode === 'US';

export default ThankYouCourseCatalogPage;
