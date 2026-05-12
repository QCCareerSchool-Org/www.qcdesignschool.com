import type { Metadata } from 'next';

import { Header } from '../../_components/header';
import HeroDesktopImage from '../../free-course-catalog/hero-large.jpg';
import HeroMobileImage from '../../free-course-catalog/hero-small.jpg';
import { EmailPreferencesNoSection } from '../_components/emailPreferencesSection';
import { GetStartedSection } from '@/components/getStartedSection';
import { GuaranteeSection } from '@/components/guaranteeSection';
import { CourseJsonLd } from '@/components/jsonLd/course';
import { SupportSection } from '@/components/supportSection';
import type { TestimonialId } from '@/components/testimonial/data';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { ThreeReasonsSection } from '@/components/threeReasonsSection';
import { addToBrevoList } from '@/lib/brevoAPI';
import { getBrevoContactId } from '@/lib/getBrevoContactId';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: "No problem, we'll update your email preferences!",
  description: "From now on, we'll only reach out with specific course updates or offers when you're actively engaging with QC.",
  alternates: { canonical: '/email-preferences-no' },
  robots: { index: false },
};

const testimonialIds: TestimonialId[] = [ 'TD-0015', 'TD-0014', 'TD-0016' ];
const brevoListId = 103;

const emailPreferencesNoPage: PageComponent = async props => {
  const { countryCode, date } = await getServerData(props.searchParams);
  const searchParamsList = await props.searchParams;

  if (typeof searchParamsList._sc !== 'string') {
    throw new Error('Contact id missing.');
  }

  const contactId = getBrevoContactId(searchParamsList._sc);
  if (!contactId) {
    throw new Error('Invalid contact id.');
  }

  const addResult = await addToBrevoList(contactId, brevoListId);
  if (!addResult.success) {
    console.error(addResult.error);
  }

  return (
    <>
      <CourseJsonLd courseCode="i2" />
      <Header countryCode={countryCode} logoLink />
      <EmailPreferencesNoSection heroSrc={HeroDesktopImage} mobileHeroSrc={HeroMobileImage} countryCode={countryCode} />
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
