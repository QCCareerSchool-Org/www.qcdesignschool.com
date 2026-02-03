import type { Metadata } from 'next';

import { CurrentPromotion } from '../_components/currentPromotion';
import { Header } from '../_components/header';
import { ThankYouSection } from '../_components/thankYouSection';
import HeroDesktopImage from '../landscape-design-course-catalog/hero.jpg';
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
  const [ data, searchParams ] = await Promise.all([
    getServerData(props.searchParams),
    props.searchParams,
  ]);
  const date = data.date;
  const leadId = getParam(searchParams.leadId);
  const lead = leadId ? await getLead(leadId) : undefined;

  let jwt: string | null = null;

  let recent = false;

  if (lead?.success) {
    recent = lead.value.created < date + 604_800_000; // 7 days
    if (recent) {
      try {
        await fbPostLead(lead.value.leadId, new Date(lead.value.created), lead.value.emailAddress, lead.value.firstName, lead.value.lastName, lead.value.countryCode, data.url, lead.value.ip ?? data.serverIp, data.userAgent, data.fbc, data.fbp);
      } catch (err) {
        console.error(err);
      }
    }
    const userValues: UserValues = {
      ...data.userValues,
      emailAddress: lead.value.emailAddress,
    };
    if (lead.value.telephoneNumber) {
      userValues.telephoneNumber = lead.value.telephoneNumber;
    }
    if (lead.value.firstName) {
      userValues.firstName = lead.value.firstName;
    }
    if (lead.value.lastName) {
      userValues.lastName = lead.value.lastName;
    }
    if (lead.value.city) {
      userValues.city = lead.value.city;
    }
    if (lead.value.provinceCode) {
      userValues.provinceCode = lead.value.provinceCode;
    }
    if (lead.value.countryCode) {
      userValues.countryCode = lead.value.countryCode;
    }
    jwt = await createJwt(userValues);
  }

  const countryCode = lead?.success ? lead.value.countryCode ?? 'US' : 'US';

  return (
    <>
      {jwt && <SetCookie name="user" value={jwt} domain="qcdesignschool.com" />}
      <CourseJsonLd courseCode="ld" />
      <Header countryCode={countryCode} logoLink />
      {lead?.success && recent && (
        <LeadProcessing
          emailAddress={lead.value.emailAddress}
          telephoneNumber={lead.value.telephoneNumber}
          city={lead.value.city}
          countryCode={lead.value.countryCode}
          provinceCode={lead.value.provinceCode}
          firstName={lead.value.firstName}
          lastName={lead.value.lastName}
          leadId={lead.value.leadId}
          conversionId="AW-1071836607/5nunCL-7PhC_24v_Aw"
        />
      )}
      <ThankYouSection course="landscape" heroSrc={HeroDesktopImage} emailAddress={lead?.success ? lead.value.emailAddress : undefined} />
      <CurrentPromotion date={date} countryCode={countryCode} />
      <TestimonialWallSection testimonialIds={testimonialIds} schemaCourseId="#course" />
      <ThreeReasonsSection />
      <SupportSection date={date} showLink />
      <GuaranteeSection />
      <GetStartedSection
        title="Ready to start your design career?"
        text={span.contains(date)
          ? 'Take charge of your future and become professionally certified with QC\'s online training today and start earning before spring!'
          : 'Become professionally certified with QC\'s online training today and start earning!'
        }
      />
    </>
  );
};

export default ThankYouCourseCatalogPage;
