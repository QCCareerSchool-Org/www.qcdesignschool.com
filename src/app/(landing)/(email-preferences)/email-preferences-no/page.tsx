import type { Metadata } from 'next';

import { getThankyouData } from '../../(thank-you)';
import { CurrentPromotion } from '../../_components/currentPromotion';
import { EmailPreferencesNoSection } from '../../_components/emailPreferencesSection/noSection';
import { Header } from '../../_components/header';
import HeroDesktopImage from '../../free-course-catalog/hero-large.jpg';
import HeroMobileImage from '../../free-course-catalog/hero-small.jpg';
import { GetStartedSection } from '@/components/getStartedSection';
import { GuaranteeSection } from '@/components/guaranteeSection';
import { CourseJsonLd } from '@/components/jsonLd/course';
import { LeadProcessing } from '@/components/leadProcessing';
import { SetCookie } from '@/components/setCookie';
import { SupportSection } from '@/components/supportSection';
import type { TestimonialId } from '@/components/testimonial/data';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { ThreeReasonsSection } from '@/components/threeReasonsSection';
import { addToBrevoList, getBrevoContactId } from '@/lib/brevoAPI';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'You’re officially back in the loop!',
  description: 'Thanks for updating your preferences. We’ll keep sending you design tips, student success stories, exclusive offers, and updates from QC Design School.',
  alternates: { canonical: '/thank-you-course-catalog' },
  robots: { index: false },
};

const testimonialIds: TestimonialId[] = [ 'TD-0015', 'TD-0014', 'TD-0016' ];

const emailPreferencesNoPage: PageComponent = async props => {
  const { countryCode, emailAddress, lead, jwt, recent, date } = await getThankyouData(props);
  const listId = 103;
  const searchParamsList = await props.searchParams;
  const sc = searchParamsList._sc;

  if (typeof sc === 'string') {
    const contactId = getBrevoContactId(sc) ?? 0;
    try {
      await addToBrevoList(contactId, listId);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {jwt && <SetCookie name="user" value={jwt} domain="qcdesignschool.com" />}
      <CourseJsonLd courseCode="i2" />
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
          leadId={lead.leadId}
        />
      )}
      <EmailPreferencesNoSection heroSrc={HeroDesktopImage} mobileHeroSrc={HeroMobileImage} emailAddress={emailAddress} countryCode={countryCode} />
      <CurrentPromotion date={date} countryCode={countryCode} />
      <TestimonialWallSection testimonialIds={testimonialIds} schemaCourseId="#courseId" />
      <ThreeReasonsSection />
      <SupportSection date={date} showLink />
      <GuaranteeSection />
      <GetStartedSection
        title="Ready to start your interior decorating career?"
        text="Become professionally certified with QC's online training today and start earning!"
      />
    </>
  );
};

export default emailPreferencesNoPage;
