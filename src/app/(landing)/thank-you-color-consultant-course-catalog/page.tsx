import type { Metadata } from 'next';
import { cookies } from 'next/headers';

import { CurrentPromotion } from '../_components/currentPromotion';
import { Header } from '../_components/header';
import { ThankYouSection } from '../_components/thankYouSection';
import HeroDesktopImage from '../color-consultant-course-catalog/hero.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { GetStartedSection } from '@/components/getStartedSection';
import { GuaranteeSection } from '@/components/guaranteeSection';
import { CourseJsonLd } from '@/components/jsonLd/course';
import { LeadProcessing } from '@/components/leadProcessing';
import { SetCookie } from '@/components/setCookie';
import { SupportSection } from '@/components/supportSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { ThreeReasonsSection } from '@/components/threeReasonsSection';
import type { UserValues } from '@/domain/userValues';
import { fbPostLead } from '@/lib/facebookConversionAPI';
import { getLead } from '@/lib/getLead';
import { getParam } from '@/lib/getParam';
import { getServerData } from '@/lib/getServerData';
import { createJwt } from '@/lib/jwt';
import { PromotionPeriod } from '@/lib/promotionPeriod';
import { endOfYear2025, newYear2026 } from '@/lib/promotionPeriods';

export const metadata: Metadata = {
  title: 'Your Course Catalog Has Been Sent',
  description: 'Your course catalog has been emailed. Download it to explore QC\'s certifications and online courses!',
  alternates: { canonical: '/thank-you-course-catalog' },
  robots: { index: false },
};

const testimonialIds = [ 'TD-0015', 'TD-0014', 'TD-0016' ];

const span = PromotionPeriod.span(endOfYear2025, newYear2026);

const ThankYouCourseCatalogPage: PageComponent = async props => {
  const [ data, searchParams, cookieStore ] = await Promise.all([
    getServerData(props.searchParams),
    props.searchParams,
    cookies(),
  ]);
  const date = data.date;
  const leadId = getParam(searchParams.leadId);
  const fbc = cookieStore.get('_fbc')?.value;
  const fbp = cookieStore.get('_fbp')?.value;

  const lead = leadId ? await getLead(leadId) : undefined;

  const [ emailAddress, telephoneNumber, firstName, lastName, city, provinceCode, countryCode, ip ] = lead?.success
    ? [ lead.value.emailAddress, lead.value.telephoneNumber ?? undefined, lead.value.firstName ?? undefined, lead.value.lastName ?? undefined, lead.value.city ?? undefined, lead.value.provinceCode ?? undefined, lead.value.countryCode ?? 'US', lead.value.ip ]
    : [];

  if (leadId && emailAddress) {
    try {
      await fbPostLead(leadId, new Date(), emailAddress, firstName, lastName, countryCode, provinceCode, ip ?? data.serverIp, data.userAgent, fbc, fbp);
    } catch (err) {
      console.error(err);
    }
  }

  const userValues: UserValues = { emailAddress, telephoneNumber, firstName, lastName, city, provinceCode, countryCode };
  const jwt = await createJwt(userValues);

  return (
    <>
      <SetCookie name="user" value={jwt} />
      <CourseJsonLd courseCode="cc" />
      <Header countryCode={countryCode ?? 'US'} logoLink />
      <LeadProcessing
        emailAddress={emailAddress}
        countryCode={countryCode}
        provinceCode={provinceCode}
        firstName={firstName}
        lastName={lastName}
        leadId={leadId}
        conversionId="AW-1071836607/5nunCL-7PhC_24v_Aw"
      />
      <ThankYouSection heroSrc={HeroDesktopImage} emailAddress={emailAddress} />
      <CurrentPromotion date={date} countryCode={countryCode ?? 'US'} />
      <TestimonialWallSection testimonialIds={testimonialIds} schemaCourseId="#course" />
      <ThreeReasonsSection />
      <SupportSection date={date} showLink />
      <GuaranteeSection />
      <GetStartedSection
        title="Ready to start your color consulting career?"
        text={span.contains(date)
          ? 'Take charge of your future and become professionally certified with QC\'s online training today and start earning before spring!'
          : 'Become professionally certified with QC\'s online training today and start earning!'
        }
      />
    </>
  );
};

export default ThankYouCourseCatalogPage;
