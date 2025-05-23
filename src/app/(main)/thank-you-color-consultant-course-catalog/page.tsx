import type { Metadata } from 'next';
import { cookies, headers } from 'next/headers';

import type { PageComponent } from '@/app/serverComponent';
import { LeadProcessing } from '@/components/leadProcessing';
import { SupportSection } from '@/components/supportSection';
import { ThankYouSection } from '@/components/thankYouSection';
import { ThreeReasonsSection } from '@/components/threeReasonsSection';
import { fbPostLead } from '@/lib/facebookConversionAPI';
import { getParam } from '@/lib/getParam';

export const metadata: Metadata = {
  title: 'Your Color Consultant Course Catalog',
  description: 'Your course catalog has been emailed. Download it to explore QC’s Color Consultant Certification and online design courses!',
  alternates: { canonical: '/thank-you-color-consultant-course-catalog' },
  robots: { index: false },
};

const ThankYouColorConsultantCourseCatalogPage: PageComponent = async ({ searchParams }) => {
  const leadId = getParam(searchParams.leadId);
  const firstName = getParam(searchParams.firstName);
  const lastName = getParam(searchParams.lastName);
  const emailAddress = getParam(searchParams.emailAddress);
  const countryCode = getParam(searchParams.countryCode);
  const provinceCode = getParam(searchParams.provinceCode);
  const headerList = headers();
  const ipAddress = headerList.get('x-real-ip') ?? undefined;
  const userAgent = headerList.get('user-agent') ?? undefined;
  const cookieStore = cookies();
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
      <ThankYouSection courseName="Color Consultant" firstName={firstName} emailAddress={emailAddress} />
      <ThreeReasonsSection />
      <SupportSection showLink />
    </>
  );
};

export default ThankYouColorConsultantCourseCatalogPage;
