import type { Metadata } from 'next';

import { getThankyouData } from '..';
import { CurrentPromotion } from '../../_components/currentPromotion';
import { Header } from '../../_components/header';
import { ThankYouSection } from '../../_components/thankYouSection';
import HeroDesktopImage from '../../landscape-design-course-catalog/hero.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { GetStartedSection } from '@/components/getStartedSection';
import { GuaranteeSection } from '@/components/guaranteeSection';
import { CourseJsonLd } from '@/components/jsonLd/course';
import { LeadProcessing } from '@/components/leadProcessing';
import { SetCookie } from '@/components/setCookie';
import { SupportSection } from '@/components/supportSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { ThreeReasonsSection } from '@/components/threeReasonsSection';
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
  const { countryCode, emailAddress, lead, jwt, recent, date } = await getThankyouData(props);

  return (
    <>
      {jwt && <SetCookie name="user" value={jwt} domain="qcdesignschool.com" />}
      <CourseJsonLd courseCode="ld" />
      <Header countryCode={countryCode} logoLink />
      {lead && recent && (
        <LeadProcessing
          emailAddress={lead.emailAddress}
          telephoneNumber={lead.telephoneNumber}
          city={lead.city}
          countryCode={lead.countryCode}
          provinceCode={lead.provinceCode}
          firstName={lead.firstName}
          lastName={lead.lastName}
          leadId={lead.leadId} conversionId="AW-1071836607/5nunCL-7PhC_24v_Aw"
        />
      )}
      <ThankYouSection course="landscape" heroSrc={HeroDesktopImage} emailAddress={emailAddress} />
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
